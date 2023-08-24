import { Subject } from "./subject";

export interface Task {
  _id: string;
  title: string;
  description: string;
  deadline: Date;
  type: 'homework' | 'project'
  subject: Subject
  done:boolean;
}

export interface UpdateTaskRequest {
  _id: string;
  title: string;
  description: string;
  deadline: Date;
  type: 'homework' | 'project'
  subject: string
  done:boolean;
}
