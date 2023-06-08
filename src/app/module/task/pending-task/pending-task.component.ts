import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddtaskService } from '../service/addtask.service';
import { every } from 'rxjs';

@Component({
  selector: 'app-pending-task',
  templateUrl: './pending-task.component.html',
  styleUrls: ['./pending-task.component.css']
})
export class PendingTaskComponent implements OnInit {


  tableId: number = 0;
  // modalchange: { task: string; };
  constructor(private service: AddtaskService, private snackbar: MatSnackBar) { }
  taskList: any[] = [] //storing data when api calling
  filteredList: any[] = []
  userId: any
  taskPriority = ''
  isSelected = false
  // service: any;


  ngOnInit(): void {
    this.userId = localStorage.getItem('userId')
    console.log(this.userId)
    this.loadPendingTasks()
  }

  loadPendingTasks() {
    this.service.fetchTasks(this.userId, 'pending').subscribe((res: { statusCode: number, tasks: any[], msg: string }) => {
      if (res.tasks.length > 0) {
        this.taskList = res.tasks
        this.filteredList = this.taskList
        console.log(this.taskList)
      }
    })
  }

  updateRow(selectedItem: any, index: number) {
    console.log(selectedItem)
    const uploadedData = new FormData()
    let currentDate = new Date().toLocaleDateString()
    uploadedData.append('completion_date', currentDate)
    uploadedData.append('description', selectedItem['description'])
    uploadedData.append('task', selectedItem['task'])
    uploadedData.append('status', 'completed')
    uploadedData.append('user', this.userId)
    this.service.updateTask(selectedItem.id, uploadedData).subscribe((res: { statusCode: number, msg: string }) => {
      console.log(res.msg)
      this.taskList.splice(index, 1)
      this.loadPendingTasks()
      this.taskList.splice(index, 1)
    })
  }

  deleteTask(id: number, index: number) {
    this.service.removeTask(id).subscribe((res: { statusCode: number, msg: string }) => {
      console.log(res.msg)
      this.taskList.splice(index, 1)
      console.log(this.taskList)
      this.showSnackBar(res.msg, 'snackBarDanger')
    })
  }

  changeCount = 0
  filterTask() {
    if (this.taskPriority != 'all') {
      if (this.isSelected == false) {
        this.filteredList = this.taskList.filter((item: any) => {
          return item.priority.includes(this.taskPriority);
        });
        this.isSelected = true
      }
      else {
        this.filteredList = this.taskList
        this.filteredList = this.taskList.filter((item: any) => {
          return item.priority.includes(this.taskPriority);
        });
      }
    }
    else {
      this.filteredList = this.taskList
    }
  }
  showSnackBar(message: string, style: string) {
    this.snackbar.open(message, 'X', {
      panelClass: style,
      duration: 2000
    },)
  }

  mtask = ''
  mdes = ''
  mselect = ''
  idModal: number = 0// getting task id
  editList: any[] = []
  editTask(selectedItem: any, index: number, id: number) {
    // const uploadedData = new FormData()
    // let currentDate = new Date().toLocaleDateString()
    this.mtask = selectedItem['task']
    this.mdes = selectedItem['description']
    this.mselect = selectedItem['priority']
    this.idModal = id
    this.tableId = index
  }

  modalchanges(formData: any) {
    const uploadedData = new FormData()
    uploadedData.append('task', formData['task'])
    uploadedData.append('description', formData['description'])
    uploadedData.append('priority', formData['priority'])
    uploadedData.append('user', this.userId)
    this.service.modalchange(this.idModal, uploadedData).subscribe((res: { statusCode: number, msg: string, }) => {
      // console.log(uploadedData);
      //  this.loadPendingTasks()
      if (res.statusCode == 202) {
        console.log("inside")
        // this.filteredList.push(this.mtask,this.mdes,this.mselect)
        //  this.editList = this
        // this.editList.push(this.mtask)
        // this.editList.push(this.mselect)
        this.showSnackBar(res.msg, 'snackBarSuccess')
        this.filteredList[this.tableId].task = formData['task'];
        this.filteredList[this.tableId].description = formData['description']
        this.filteredList[this.tableId].priority = formData['priority']
        // this.taskForm.reset()
      }
      else {
        this.showSnackBar(res.msg, 'snackBarDanger')
        console.log("outside")
      }
    })
  }
}





















