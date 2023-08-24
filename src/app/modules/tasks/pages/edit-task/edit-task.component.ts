import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task, UpdateTaskRequest } from '@interfaces/task';
import { TaskService } from '@services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {

  constructor(
    private taskService:TaskService,
    private route:ActivatedRoute
  ){}
  editableTask:UpdateTaskRequest={
    title:'',
    description:'',
    done:false,
    subject:'',
    deadline:new Date(),
    _id:'',
    type:'homework',
  };

  ngOnInit() {
    this.editableTask._id = this.route.snapshot.params['id'];
    this.taskService.getTask(this.editableTask._id).subscribe(res=>{
      this.editableTask._id = res._id;
      this.editableTask.title = res.title;
      this.editableTask.subject = res.subject._id;
      this.editableTask.deadline = res.deadline;
      this.editableTask.description = res.description
      this.editableTask.done = res.done;
      this.editableTask.type = res.type;
    })
  }

}
