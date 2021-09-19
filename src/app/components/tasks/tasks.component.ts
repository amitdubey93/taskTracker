import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../Task';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private _taskService: TaskService) {}

  ngOnInit(): void {
    this._taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  deleteTask(task: Task) {
    this._taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    });
  }

  toggleRemainder(task: Task) {
    task.remainder = !task.remainder;
    this._taskService.updateTaskRemainder(task).subscribe();
    console.log(task.remainder);
  }
  addTask(task: Task) {
    this._taskService.addTask(task).subscribe((task)=>{
      this.tasks.push(task);
    })
    console.log(task);
  }
}
