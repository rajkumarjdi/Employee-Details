import { Component, OnInit  } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit{
  title = 'User Registration';
  addForm : FormGroup;
  constructor(private toastr: ToastrService,private modalService: NgbModal) { 
    
  }
  openLg(content:any) {
		this.modalService.open(content, { size: 'lg' });
	}
   ngOnInit() {
    this.setFormtate();
   }
    setFormtate(){
      this.addForm = new FormGroup({
        id : new FormControl(0),
        Title:new FormControl('',Validators.required),
        FirstName: new FormControl('',Validators.compose([Validators.minLength(3),Validators.maxLength(20)])),
        LastName: new FormControl('',Validators.compose([Validators.minLength(3),Validators.maxLength(20)])),
        Email: new FormControl('',Validators.compose([Validators.required,Validators.email])),
        DOB: new FormControl('',Validators.compose([Validators.required,Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)])),
        Password: new FormControl('',Validators.compose([Validators.minLength(3),Validators.maxLength(10)])),
        ConfirmPassword: new FormControl('',Validators.compose([Validators.minLength(3),Validators.maxLength(10)])),
        AcceptTerms:new FormControl('false',Validators.required)
  
      });
    }
    
    // this.toastr.success('Hello world!', 'Toastr fun!');
    // this.toastr.warning('Hello world!', 'Toastr fun!');
    // this.toastr.info('Hello world!', 'Toastr fun!');
    // this.toastr.error('Hello world!', 'Toastr fun!');

  
  edit(id: number){
alert("edit called"+id);
  }
  delete(id: number){
    alert("Delete called"+id);
  }
}
