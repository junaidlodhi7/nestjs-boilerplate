import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class UserServiceService {
    constructor(@InjectModel('users') private user: Model) { }
    
    async findall(): Promise<any> {
        return await this.user.find();
    }

    async create(body): Promise<any> {
        const createdUser = new this.user(body)
        return await createdUser.save();
    }

    async findById(id){
        return await this.user.findById(id)
    }
    async deleteOne(id){
        return this.user.findOneAndRemove(id);
    }
    async findByEmailAndPassword(object){
        return await this.user.find({
            email : object.email,
            password : object.password
        })
    }
}
