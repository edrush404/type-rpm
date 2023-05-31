import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { User } from "src/user/user.entity";
import { LoginDto } from "./login.dto";
import * as jwt from 'jsonwebtoken' ;

@Injectable()
export class AuthService{
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ){}

    async login(LoginDto: LoginDto) {
        const { email, password } = LoginDto;
        const user = await this.userRepository.findOne({where: {email}});

        if(!user || user.password !== password){
            throw new Error('Email ou senha invalidos');
        }

        const token = this.generateToken(user.id);

        return {message: 'Login feito com sucesso', token};
    }

    private generateToken(userId: number): any{
        const payload = (userId);
        const secretkey = 'senai';

        const expiresIn = '1h';

        return jwt.sign(payload, secretkey, {expiresIn});
    }
}