import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from 'src/app/services/global-data.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})

export class ListTaskComponent implements OnInit {

  constructor(public gloalData: GlobalDataService) { }

  ngOnInit(): void {
    console.log("gloalData :: ", this.gloalData)
  }

  taskAction(action:any, item:any){
    // console.log('Action :: ', action);
    var index = this.gloalData.tasks.indexOf(item)
    switch(action){
      case 'delete':
        console.log('Delete', item);
        if(item.pinned){
          if(confirm("Are you sure you want to delete Pinned Task ?"))
            this.gloalData.tasks.splice(index, 1);
        }
        else{
          this.gloalData.tasks.splice(index, 1);
        }
        break;
      case 'edit':
        console.log('Edit', item);
        break;
      case 'pin':
        console.log('Pin', item);
        item.pinned = true;
        this.gloalData.tasks.splice(index, 1);
        this.gloalData.tasks.unshift(item);
        break;
      // default:
      //   console.log('Switch default')
    }
  }
}
