import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from 'src/app/services/global-data.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  constructor(private globalData: GlobalDataService) { }

  public taskName = "";
  public taskDesc = "";
  public taskCreatedAt: any = "";
  public colors = ['#F5B7B1', '#D6EAF8', '#5DADE2', '#F5CBA7', '#D6DBDF', '#DC7633', '#EC7063', '#C0392B', '#2471A3', '#1ABC9C', '#27AE60', '#D68910', '#6C3483', '#1B4F72'];
  // public colors = ['#CCCC66', '#99FFCC', '#6666FF', '#009966', '#B993D6', '#D3959B', '#BFE6BA', '#f2709c', '#ff9472', '#e6dada'];

  ngOnInit(): void {

  }

  onTaskCreate() {
    console.log(this.taskName, this.taskDesc);
    this.taskCreatedAt = Date.now();
    if (this.taskName && this.taskDesc) {
      this.globalData.tasks.push({
        "tName": this.taskName,
        "tDesc": this.taskDesc,
        "tCreatedAt": this.taskCreatedAt,
        "cardColor": this.colors[Math.floor(Math.random() * 10)]
      });
    }

    console.log("this.globalData taskss :: ", this.globalData, Math.floor(Math.random() * 10))
  }
  createSampleTask() {
    this.taskCreatedAt = Date.now();
    this.globalData.tasks.push({
      "tName": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
      "tDesc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "tCreatedAt": this.taskCreatedAt,
      "isSample": true,
      "cardColor": this.colors[Math.floor(Math.random() * 10)]
    });
    console.log("this.globalData taskss :: ", this.globalData, Math.floor(Math.random() * 10))
  }
}
