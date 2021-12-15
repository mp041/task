import { IsBoolean, IsDefined, IsNotEmpty, IsString, IsUUID } from "class-validator";

export class TaskDto{
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    name : string;
    
}

export class idBodyDto{
    

    @IsUUID()
    @IsDefined()
    id : string;
}


export class Querydto{

    @IsBoolean()
    @IsDefined()
    
    filter: boolean;
}