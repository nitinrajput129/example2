
import { Component, Inject, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { GenericHttpService } from '@app/@core/services';
// import {FormControl} from '@angular/forms';
// import {Observable} from 'rxjs';
// import {map, startWith} from 'rxjs/operators';
// import OptionsManager from '@fullcalendar/core/OptionsManager';
// import { boolean } from 'mathjs';

@Component({ 
   selector: 'app-data-provider-crud',
   templateUrl: './data-provider-crud.component.html',
   styleUrls: ['./data-provider-crud.component.scss']
})
export class DataProviderCrudComponent implements OnInit {
      
      api_name: string;
      api_description: string;
      redirect_url: string;
      options= ['GET', 'POST', 'PATCH', 'PUT', 'DELETE']
      method: string[] ;
      url: string;

      headerData: any = [
    {
      key: "",
      value: "",
      description: "",
      
    }
  ];
  pathVariableData: any = [
    {
      key: "",
      value: "",
      description: "",
      
    }
  ];
 
  queryParams: any = [
    {
      key: "",
      value: "",
      description: "",
      
    }
  ];

  authOption=["none"]
  authOptions: string[] ;
  outputOptions=['object','array']

  output_type: string[];


  output:  any= [
         {
         priority: boolean,
        label: "",
        type: "",
        x_path: "",
         }]

        typeOption=['object','array']

      constructor(){

      }

      ngOnInit(): void {
          
      }

      sendData(){
        const data={
          api_name:this.api_name,
          api_description: this.api_description,
          redirect_url:this.redirect_url,
          method:this.method,
          url:this.url,
          headerData:this.headerData,
          queryParams:this.queryParams,
          pathVariableData:this.pathVariableData,
           authOptions:this.authOptions,
           output_type:this.output_type,
           output:this.output,

        

        }
        console.log(data)
      }
      AddHeaderData() {
        this.headerData.push({ key:"", value:"", description:"" });
        console.log('helo')
      }

      DeleteHeaderData(index) {
        this.headerData.splice(index, 1);
      }
      AddVariablePath() {
        this.pathVariableData.push({ key:"", value:"", description:"" });
        console.log('helo')
      }

      DeleteVariablePath(index) {
        this.pathVariableData.splice(index, 1);
      }

      AddQueryParams() {
        this.queryParams.push({ key:"", value:"", description:"" });
        console.log('helo')
      }

      DeleteQueryParams(index) {
        this.queryParams.splice(index, 1);
      }

      AddOutput() {
        this.output.push({ key:"", value:"", description:"" });
        console.log('helo')
      }

      
      DeleteOutput(index) {
        this.output.splice(index, 1);
      }
    }
    
    






  // export interface HeaderData {
  //     key: string;
  //     value: string;
  //     description: string;
  // }

  // export interface Output {
  //     label: string;
  //     type: string;
  //     x_path: string;
  //     priority: boolean;
  // }

  // export interface DataPorviderForm {
  //     id: string;
  //     api_name: string;
  //     url: string;
  //     api_description: string;
  //     data: string;
  //     dataMode: string;
  //     headerData: HeaderData[];
  //     method: string;
  //     pathVariableData: any[];
  //     queryParams: any[];
  //     auth: string;
  //     output_type: string;
  //     output: Output[];
  //     redirect_url: string;
  //     is_public: number;
  //     dynamic_keys: string[];
  //     auto_id: string;
  //   }


