import {Injectable, NotFoundException} from '@nestjs/common';
import {faker} from '@faker-js/faker';
import {sign} from 'jsonwebtoken';
import { AuthenticateDto } from './dto/authenticate.dto';
import { IAuthenticate, Role } from './interfaces/user.interface';

@Injectable()
export class AuthService {
    users = [
        {
            id: faker.datatype.uuid(),
            userName: 'Mayank Kumar',
            password: 'mayank',
            role: Role.Admin
        },
        {
            id: faker.datatype.uuid(),
            userName: 'shahrukkhan',
            password: 'devdas',
            role: Role.Customer
        },
    ];

    authenticate(authenticateDto: AuthenticateDto): IAuthenticate | any {
        const user = this.users.find(
            (u) => 
            u.userName === authenticateDto.userName &&
            u.password === authenticateDto.password
        );

        if (!user) throw new NotFoundException('Invalid credential');

        const token = sign({...user }, 'secrete');
        return {token, user}
    }




}