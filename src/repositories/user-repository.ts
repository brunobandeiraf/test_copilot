import databaseService from "../services/database-service";
import { User } from "../entities/user";
import { Repository } from "typeorm";


class UserRepository{
    private repository: Repository<User>;

    constructor() {
        this.repository = databaseService.getRepository(User);
    }   
    
    async findByEmailAndPassword(login: string, password: string): Promise<User> {
        const user = await this.repository.findOne({ 
            where: { email: login, password: password }
        });
        if(!user) {
            throw new Error('User not found');
        }
        return user;
    }
}


export default UserRepository;