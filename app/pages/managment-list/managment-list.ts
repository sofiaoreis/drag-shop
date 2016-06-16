import {Page, NavController, NavParams, ViewController} from 'ionic-angular';
import {ManagmentService} from '../../providers/managmentList-service/managmentList-service';
import {Employee} from '../../models/employee';
import {EmployeeAppointmentPipe} from '../../pipes/employees/employee-status';
import {EmployeeToAppointPipe} from '../../pipes/employees/employee-status';
import {EmployeeSeeAllPipe} from '../../pipes/employees/employee-status';
import {MaxLengthPipe} from '../../pipes/employees/employee-status';

@Page({
  templateUrl: 'build/pages/managment-list/managment-list.html',
  providers: [ManagmentService],
  pipes: [EmployeeAppointmentPipe,EmployeeToAppointPipe, EmployeeSeeAllPipe, MaxLengthPipe]
})
export class ManagmentList {
  employees: Employee[];
  employeesTrigger: string;


  constructor(private nav: NavController, navParams: NavParams, private managmentService: ManagmentService) {
    this.employeesTrigger = "appointment";
  }

  onPageDidEnter() {
    this.managmentService.getManagmentList().subscribe(
      data => {
        this.employees = data;
      },
      err => {console.log(err);},
      () => {console.log("Finished getting employees");}
    )
  }



}
