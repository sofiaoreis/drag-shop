import {Employee} from '../../models/employee';
import {Pipe, PipeTransform} from 'angular2/core'

@Pipe({
  name: 'appointmentPipe'
})
export class EmployeeAppointmentPipe implements PipeTransform {
  transform(allEmployees: Employee[]) : Employee[] {
    if (!allEmployees || !allEmployees.length) { return; }
    //TODO: change the hard-coded value of the user id to the current logged in user
    return allEmployees.filter(employee => (employee.status_employee == 1));
  }
}

@Pipe({
  name: 'toAppointPipe'
})
export class EmployeeToAppointPipe implements PipeTransform {
  transform(allEmployees: Employee[]) : Employee[] {
    if (!allEmployees || !allEmployees.length) { return; }
    //TODO: change the hard-coded value of the user id to the current logged in user
    return allEmployees.filter(employee => (employee.status_employee == 2));
  }
}

@Pipe({
  name: 'seeAllEmployeesPipe'
})
export class EmployeeSeeAllPipe implements PipeTransform {
  transform(allEmployees: Employee[]) : Employee[] {
    if (!allEmployees || !allEmployees.length) { return; }
    //TODO: change the hard-coded value of the user id to the current logged in user
    return allEmployees.filter(employee => (employee.status_employee == 1) || (employee.status_employee == 2));
  }
}


@Pipe({
    name: 'maxLength'
})
export class MaxLengthPipe {
    transform(val, args) {
        if (val.length > args[0]){
            return val.substring(0, args[0])+'...';
        }else{
            return val;
        }
    }
}
