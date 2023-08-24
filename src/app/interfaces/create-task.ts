export interface CreateTask {
  title: string,
  description:string
  deadline: Date
  type: "homework"|"project"
  subject: string
}
