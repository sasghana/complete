import { User } from "./user.model";

export interface Like {

  _id: string
	publicationId: string
  userId: User
  
}