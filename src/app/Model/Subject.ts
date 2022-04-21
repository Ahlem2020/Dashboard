import { Comments } from "./Comments";

export class Subject{

    id: number;
    nbLike: number;
    nbDislike: number;
    nbVue: number;
    domaine:string;
    name: string;
    description: string;
    comments: Comments;
    updatedAt:Date;
    createdAt: Date;
}