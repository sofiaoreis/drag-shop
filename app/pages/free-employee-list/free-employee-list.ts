import {Page, NavController, NavParams} from 'ionic-angular';
import {Order} from '../../models/order'
import {Employee} from '../../models/employee'
import {EmployeesService} from '../../providers/employees-service/employees-service'
import {OrderDetails} from '../order-details/order-details'

@Page({
  templateUrl: 'build/pages/free-employee-list/free-employee-list.html',
  providers: [EmployeesService]
})
export class FreeEmployeeList {
  order: Order;
  employees: Employee[];
  employeeId: number;
  //employeeName: string;

  constructor(private nav: NavController, navParams: NavParams, private employeesService: EmployeesService) {
    this.order = navParams.get('order');

    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    /*if(!navParams.get('employee'))
      this.employeeName = navParams.get('employee'); */
    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    employeesService.getEmployees().subscribe(
      employees => {this.employees = employees;},
      err => {console.log(err);},
      () => {console.log("Finished fetching employees");}
    );
  }

  addEmployee(employee: Employee){
    if (!this.order.employee){
      employee.busy = true;
      this.employeeId = employee.id;
    }
    else{
      console.log(this.employeeId);
      employee.busy = true;
      this.employees[this.employeeId-1].busy = false;
      this.employeeId = employee.id;
    }

    let alocatedEmployee = employee.first_name + " " + employee.last_name;
    this.order.employee = alocatedEmployee;
    this.nav.push(OrderDetails,{order: this.order});
  }
}
