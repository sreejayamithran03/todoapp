import { AbstractControl, NG_ASYNC_VALIDATORS, AsyncValidatorFn, ValidationErrors, AsyncValidator } from "@angular/forms";
import { Observable, of, map } from "rxjs";
// import { RegisterationService } from "../services/register/registeration.service";
import { Directive } from "@angular/core";
import { SigningService } from "../module/user/service/signing.service";


@Directive({
    selector: '[asyncEmailValidator]',
    providers: [
        {
            provide: NG_ASYNC_VALIDATORS,
            useExisting: AsyncEmailValidator,
            multi: true

        }
    ]
})



export class AsyncEmailValidator implements AsyncValidator {
    response: any
    constructor(private service: SigningService) { }
    validate(control: AbstractControl): Observable<ValidationErrors | null> {
        console.log('checkEmail');
        if (!control.value) {
            return of(null);
        }
        return this.service.checkEmail(control.value).pipe(map((res: { statusCode: number }) => {
            return res.statusCode == 202 ? { asyncError: true } : null;
        }))
    }

    checkEmail(email: string) {
        this.service.checkEmail(email).subscribe((res: { statusCode: number }) => {
         this.response = res.statusCode == 202 ? { asyncError: true } : null
        });
        return of(this.response);
    }
}