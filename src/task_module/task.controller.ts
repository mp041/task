import { Body, Controller, Delete, Get, Param, ParseBoolPipe, Post, Put, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { TaskService } from './task.service';
import { Response,Request} from 'express';
import { idBodyDto, TaskDto } from './dto/task';

@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) { }

    @Get()
    async getAllTask(@Res() res: Response) {
        const data =await this.taskService.getAllTask();
        return res.status(200).send(data);
    }

    @Get(':id')
    @UsePipes(new ValidationPipe())
    async getTaskById(@Param() reqParams: idBodyDto, @Res() res: Response){
        const data = await this.taskService.getTask(reqParams.id)
        return res.status(200).send(data);
    }
    
    @Delete(':id')
    @UsePipes(new ValidationPipe())
    async getDeleteById(@Param() reqParams: idBodyDto, @Res() res: Response){
        const data = await this.taskService.getDelete(reqParams.id)
        return res.status(200).send(data);
    }


    @Get('/filter/data')
    @UsePipes(new ValidationPipe())
    async FilterById(@Query('filter') filter: ParseBoolPipe, @Res() res:Response ){
        const data = await this.taskService.filterTask(filter);
        return res.status(200).send(data);
    }



    // @Put(':id')
    // @UsePipes(new ValidationPipe())
    // async getUpdateById(@Param() reqParams: idBodyDto, @Res() res: Response){
    //     const data = await this.taskService.getDelete(reqParams.id)
    //     return res.status(200).send(data);
    // }



    @Post()
    @UsePipes(new ValidationPipe())
    async createTask(@Body() task: TaskDto, @Res() res: Response) {
        // console.log("Demmmooooooo",task);
        
        const data =await this.taskService.addTask(task);
        return res.status(200).send(data);
    }

}
