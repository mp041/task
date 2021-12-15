import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
import { InjectRepository } from '@nestjs/typeorm';
// import { Model } from 'mongoose';
import { Repository } from 'typeorm';
import { User } from './Database/entity/user.entity';
import { UserDto } from './dto';
import { Customer } from './interface/user';
import { uuid } from 'uuidv4';




@Injectable()
export class CustomerService {
        constructor(@InjectRepository(User) private userRepo: Repository<User> ){ }

    public async listCustomer(): Promise<User[]> {
        return await this.userRepo.find({})
    }







    public async getCustomer(id : string): Promise<User>{
        const data = await this.userRepo.findOne(id);
        if(!data){
            throw new NotFoundException('user not found');
        }
        return data;
    }





   
    public async createCustomer(data : any): Promise<any>{
        try {


            const user=await this.userRepo.create(data);
            await this.userRepo.save(user);
            // data.id = uuid();
            console.log(data);
            
            return user;
            // console.log(this.user,"userffffffffffffffffffffffffffffffff");
            // const person = {
            //     firstName:user.firstName,
            //     lastName:user.lastName,
            //     id:user.id,
            //     isActive:user.isActive,
            //     email:user.email
            // }
            // user.firstName = "Mihir";
            // user.lastName = "Panchal";
            // user.id = 121;
            // user.isActive = true;
            // user.email = 'demo@gmail.com';

            const saveperson =await this.userRepo.create(user);

            await this.userRepo.save(user);
            console.log(user,"nfaknkfanakfkak");
            
            return saveperson;
            // return saveperson;
            // return await this.userRepo.save(user);
        } catch (error) {
            throw new InternalServerErrorException(error);    
        }
        
    }
    // user(user: any, arg1: string) {
    //     throw new Error('Method not implemented.');
    // }





    public async updateCustomer(id: string , customerdto : any ): Promise<any>{
        const update = await this.userRepo.update(id, customerdto);
        console.log(update);
        
        return await this.userRepo.findOne(id);
    }






    public async removeCustomer(id : string): Promise<User>{
       const data = await this.userRepo.findOne(id);

       if(!data){
           throw new NotFoundException('user not found');
       }
       
      return await this.userRepo.remove(data);
    }

}