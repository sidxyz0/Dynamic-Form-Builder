import { Component, OnInit,AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-view-forms',
  templateUrl: './view-forms.component.html',
  styleUrls: ['./view-forms.component.css']
})
export class ViewFormsComponent implements OnInit,AfterViewChecked {

  selected=false;
  edit=false;
  formData:any[]=[];
  selectedForm: any;
  formName: string='';
  oldForm: any;
  constructor(public formDataService: FormDataService,private router:Router) { }

  ngOnInit(): void {
    this.formDataService.getFormData();
    this.formDataService.formData.subscribe(data=>{
      this.formData=data;
      console.log(this.formData);
    })
  }

  //code to disable all fields except basic
  ngAfterViewChecked(){
    // try {
    //   setTimeout("document.getElementsByClassName('form-builder-panel')[1].style.display='none'",0);
    //   setTimeout("document.getElementsByClassName('form-builder-panel')[2].style.display='none'",0);
    //   setTimeout("document.getElementsByClassName('form-builder-panel')[3].style.display='none'",0);
    //   setTimeout("document.getElementsByClassName('form-builder-panel')[4].style.display='none'",0);
    // } catch (error) {
    //   console.log("error");
    // }
  }
  createForm(){
    this.router.navigate(['/']);
  }
  setSelectedForm(form){
    this.selected=true;
    this.edit=false;
    this.selectedForm=form;
    this.formName=this.selectedForm.name;
  }
  editForm(form){
    this.edit=true;
    this.selected=false;
    this.selectedForm=form;
    this.oldForm=form;
    this.formName=this.selectedForm.name;
  }
  updateform(){
    this.selectedForm.name=this.formName;
    this.formDataService.updateForm(this.oldForm,this.selectedForm);
  }
  deleteForm(form){
    this.formDataService.deleteForm(form);
  }

}
