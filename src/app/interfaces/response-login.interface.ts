import { UserInterface } from "./user.interface";

export interface ResponseLoginInterface {
  userPublicData: UserInterface,
  token:string;
  refresh_token:string;
}
