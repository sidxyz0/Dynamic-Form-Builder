import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataService } from '../form-data.service';


@Component({
  selector: 'app-forms-module',
  templateUrl: './forms-module.component.html',
  styleUrls: ['./forms-module.component.css']
})
export class FormsModuleComponent implements OnInit,AfterViewChecked {

  formName: string = '';
  form: any;
  submitButton: any = {
    "type": "button",
    "label": "Submit",
    "key": "submit",
    "size": "md",
    "block": false,
    "action": "submit",
    "disableOnInvalid": true,
    "theme": "primary",
    "input": true,
    "placeholder": "",
    "prefix": "",
    "customClass": "",
    "suffix": "",
    "multiple": false,
    "defaultValue": null,
    "protected": false,
    "unique": false,
    "persistent": false,
    "hidden": false,
    "clearOnHide": true,
    "refreshOn": "",
    "redrawOn": "",
    "tableView": false,
    "modalEdit": false,
    "dataGridLabel": true,
    "labelPosition": "top",
    "description": "",
    "errorLabel": "",
    "tooltip": "",
    "hideLabel": false,
    "tabindex": "",
    "disabled": false,
    "autofocus": false,
    "dbIndex": false,
    "customDefaultValue": "",
    "calculateValue": "",
    "calculateServer": false,
    "widget": {
      "type": "input"
    },
    "attributes": {},
    "validateOn": "change",
    "validate": {
      "required": false,
      "custom": "",
      "customPrivate": false,
      "strictDateValidation": false,
      "multiple": false,
      "unique": false
    },
    "conditional": {
      "show": null,
      "when": null,
      "eq": ""
    },
    "overlay": {
      "style": "",
      "left": "",
      "top": "",
      "width": "",
      "height": ""
    },
    "allowCalculateOverride": false,
    "encrypted": false,
    "showCharCount": false,
    "showWordCount": false,
    "properties": {},
    "allowMultipleMasks": false,
    "leftIcon": "",
    "rightIcon": "",
    "id": "ehgw037"
  };
  constructor(public formDataService: FormDataService, private router: Router) { }
  ngOnInit(): void {
    this.form = {
      name: '',
      components: []
    }
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

  viewForms() {
    this.router.navigate(['/viewForms']);
  }

  saveform() {
    this.form.name = this.formName;
    this.formDataService.updateFormData(this.form);
    this.form = {
      name: '',
      components: [this.submitButton]
    }
    this.formName = '';
  }

}
