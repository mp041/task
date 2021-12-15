import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './interface/task';

@Injectable()
export class TaskStoreService {

    public tasks: Task[] = [];

    public async addTask(task: Task): Promise<Task> {
        this.tasks.push(task);
        // console.log(task, this.tasks);

        return Promise.resolve(task);
    }


    public async getTask(id: string): Promise<Task> {
        const taskget = this.tasks.filter(i => i.uuid === id);
        if (taskget && taskget.length > 0) {
            return Promise.resolve(taskget[0])
        }
        throw new NotFoundException('Task not found!!!!!!!')

    }

    public async getAllTask(): Promise<Task[]> {
        // console.log(this.tasks);
        return Promise.resolve(this.tasks);
    }

    public async getDelete(id: string): Promise<Task[]> {
        const data = this.tasks.filter(i => i.uuid !== id);
        this.tasks = data;
        return Promise.resolve(this.tasks);
    }

    // public async getUpdate(id : string): Promise<Task>{

    // }

    public async filterTask(filter): Promise<Task[]> {  
        if(!filter){
            return Promise.resolve(this.tasks);

        }
        return Promise.resolve(this.tasks.filter((i: Task)=> i.duration > 0))
    }
}
