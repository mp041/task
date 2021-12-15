import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { customerDto } from './dto';
import { Customer } from './interface/customer.interface';




@Injectable()
export class CustomerService {
    constructor(@InjectModel('Customer') private readonly customerModel : Model<Customer>){ }

    public async listCustomer(): Promise<Customer[]> {
        return await this.customerModel.find({})
    }







    public async getCustomer(id : string): Promise<Customer>{
        const data = await this.customerModel.findById(id).exec();
        return data;
    }






    public async createCustomer(customerdto : customerDto): Promise<Customer>{
        const newCustomer = await new this.customerModel(customerdto);
        return newCustomer.save()
    }





    public async updateCustomer(id, customerdto : customerDto ): Promise<Customer>{
        const update = await this.customerModel.findByIdAndUpdate(id, customerdto, { new : true});
        return update;
    }






    public async removeCustomer(id : string): Promise<Customer>{
        return await this.customerModel.findByIdAndRemove(id);
    }

}