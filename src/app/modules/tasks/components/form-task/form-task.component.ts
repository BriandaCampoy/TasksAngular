import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CreateTask } from '@interfaces/create-task';
import { FormActions } from '@interfaces/form-actions';
import { Subject } from '@interfaces/subject';
import { Task, UpdateTaskRequest } from '@interfaces/task';
import { SubjectService } from '@services/subject.service';
import { TaskService } from '@services/task.service';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css']
})
export class FormTaskComponent {

  constructor(
    private subjectService: SubjectService,
    private taskService: TaskService,
    private router : Router
  ){}

  subjectsOptions:Subject[]=[];

  @Input() actionForm!:FormActions;
  @Input() task:UpdateTaskRequest ={
    title:'',
    description:'',
    deadline:new Date(),
    type:'homework',
    subject:'',
    _id:'',
    done:false
  }

  defaultSubject:Subject|undefined;

  ngOnInit() {
    this.subjectService.getSubjectByUser().subscribe(res=>{
      this.subjectsOptions = res;
      this.defaultSubject = res[0]
    })
  }

  handleSubmit(){
    if(this.actionForm==='create'){
      this.addTask()
    }else{
      this.updateTask()
    }
  }

  addTask(){
    const {_id, done, ...newTask}= this.task
    this.taskService.createTask(newTask).subscribe((res)=>{
      this.router.navigate(['../'])
    })
  }

  updateTask(){
    this.taskService.updateTask(this.task).subscribe((res)=>{
      this.router.navigate(['../'])
    })
  }


}
