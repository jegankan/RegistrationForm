import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-listofdocuments',
  templateUrl: './listofdocuments.component.html',
  styleUrls: ['./listofdocuments.component.css']
})
export class ListofdocumentsComponent implements OnInit {
  doc: any;
  displayedColumns = ['No', 'FileName', 'Type','Description'];
  dataSource = new ListofdocSource(this.api);

  constructor (private api: ApiService,private router: Router) { }

  ngOnInit() {
    this.api.getListofdocform()
      .subscribe(res => {
        console.log(res);
        this.doc = res;
      }, err => {
        console.log(err);
      });
  }

  onClickSubmit(listofDocForm){

    console.log(JSON.stringify(listofDocForm));
    
    var filename=listofDocForm.avatar.slice(listofDocForm.avatar.lastIndexOf('\\')+1,listofDocForm.avatar.length);
    var fileext=listofDocForm.avatar.slice(listofDocForm.avatar.lastIndexOf('.')+1,listofDocForm.avatar.length);
    var filecontenttype=`image/${fileext}`;
    
    let userlist={"No":1,"FileName":filename, "Type.data":listofDocForm.avatar,"Type.contentType":filecontenttype,"Description":listofDocForm.inputDocument};
    
    this.api.postListofdocform(userlist).subscribe(status=> console.log(JSON.stringify(status))
     );
    this.router.navigate(['/listofdoc']);
  };
}

export class ListofdocSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super()
  }

  connect() {
    return this.api.getListofdocform();
  }

  disconnect() {

  }
}

