import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';
import {Task} from '../../Task';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()
  text!:string;
  day!:string;
  remainder:boolean = false;
  showAddTask!:boolean;
  subscription!:Subscription;
  constructor(private _uiService:UiService) {
    this.subscription = this._uiService.onToggle().subscribe((value)=>{
      (this.showAddTask = value)
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    //alert();
    if(!this.text){
      alert("Please add a task: ");
      return;
    }
    
    const newTask = {
      text:this.text,
      day:this.day,
      remainder:this.remainder
    }

    this.onAddTask.emit(newTask);

    this.text="";
    this.day="";
    this.remainder=false;
  }
}
