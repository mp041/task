import { Controller, Delete, Get, Param, Put, Res, Req, Post, Body, HttpStatus, Query } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Request, Response } from 'express';
import { customerDto } from './dto';


@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  async listCustomer(@Res() res:Response){
    const data = await this.customerService.listCustomer();
    res.status(200).send(data);
  }

  @Get('/:customerid')
  async getCustomer(@Res() res: Response, @Param('customerid') id: string ) {
      const data = await this.customerService.getCustomer(id);
      res.status(200).send(data); 

  }

  @Post('/')
  async createCustomer(@Res() res:Response, @Body() createCus : customerDto){
    const data = await this.customerService.createCustomer(createCus);
    res.status(HttpStatus.OK).json(data);
  }

  @Delete('/:customerid')
  async deleteCustomer(@Res() res: Response, @Param('customerid') id: string ) {
      const data = await this.customerService.removeCustomer(id);
      res.status(200).json({
        message : 'customer deleted success',
        data
      }); 

  }
  @Put('/:customerid')
  async updateCustomer(@Res() res: Response, @Param('customerid') id: string, @Req() req:Request ) {
      const data = await this.customerService.updateCustomer(id,req.body);
      res.status(200).send(data); 

  }

}
