import { Injectable } from '@nestjs/common';
import { Task } from './interface/task';
import { TaskStoreService } from './task.store.service';
import { uuid } from 'uuidv4';

@Injectable()
export class TaskService {
    constructor(private readonly taskStoreService : TaskStoreService){}

    public async addTask(task : Task): Promise<Task> {
        task.uuid = uuid();
        // task.completed = false;
        // task.description = "Demo description";
        // task.owner = "Mihir";
        // task.duration = 2;
        return this.taskStoreService.addTask(task);
    }
    
    
    public async getTask(id : string): Promise<Task> {
        return this.taskStoreService.getTask(id)

    }

    public async getAllTask() : Promise<Task[]> {
        return this.taskStoreService.getAllTask();
    }

    public async getDelete(id : string) : Promise<Task[]> {
        return this.taskStoreService.getDelete(id)
    }

    // public async getUpdate(id : string) : Promise<Task[]> {
    //     return this.taskStoreService.getDelete(id)
    // }
    public async filterTask(filter): Promise<Task[]>{
        return this.taskStoreService.filterTask(filter);
    }
}
