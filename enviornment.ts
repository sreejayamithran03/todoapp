// export const environment = {
//     production: false
// };
 

export const baseUserUrl = " http://127.0.0.1:8000/user/"
export const baseTaskUrl = " http://127.0.0.1:8000/task/"
export const baseUrl ="http://127.0.0.1:8000"





/*

signup Api
  Api       ---http://127.0.0.1:8000/user/signup  == for signup
  key       ---name,email,mobile,password,image
  response  ---statuscode(number),message(string)
  method    ---post



login Api
  Api       ---http://127.0.0.1:8000/user/login  == for login
  key       ---email,password
  response  ---statusCode(number), message(string),token(string),userId(number),userName(string)
  method    ---post



Add Task Api
  Api       ---http://127.0.0.1:8000/task/add
  key       ---task,description,priority
  response  ---statusCode(number),message(string)
  method    ---post



Pending Task Api
  Api       ---http://127.0.0.1:8000/task/list/pending?user=1
  key       ---description,priorty,date,task
  response  ---statusCode(number),task(any[]),msg(string)
  method    ---get


 
delete Task Api
  Api       ---http://127.0.0.1:8000/task/update/1
  response  ---statusCode(number),msg(string)
  method    ---delete


update Task Api
  Api       ---http://127.0.0.1:8000/task/remove/1
  key       ---description,completedate,user,
  response  ---statusCode(number),msg(string)
  method    ---put
 


complete Task Api
  Api       ---http://127.0.0.1:8000/task/list/complete?user=1
  key       ---description,priorty,completedate,task,addeddate
  response  ---statusCode(number),task(any[]),msg(string)
  methode   ---get



search Task Api
  Api       ---http://127.0.0.1:8000/task/search?user=1&query=task
  key       ---description,priorty,completedate,task,addeddate
  response  ---statusCode(number),task(any[]),msg(string)
  methode   ---get



filter Task Api
  Api       ---http://127.0.0.1:8000/filter/task?user=1&priority=low
  key       ---description,priorty,completedate,task,addeddate
  response  ---statusCode(number),task(any[]),msg(string)
  methode   ---get

*/