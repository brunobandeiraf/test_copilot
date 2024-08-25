// Criar um caso de uso para login baseado na entidade User e repositório UserRepository, recebendo login e senha e retornando a instância do usuáro logado
// Utilize os conceitos de inversão de controle e injeção de dependências para tornar o código desacoplado
import { Repository } from "typeorm";
import { User } from "../../entities/user";
import UserRepository from "../../repositories/user-repository";

export default class Login {

    constructor(private userRepository: UserRepository) {}

    async execute(login: string, password: string): Promise<User> {
        const user = await this.userRepository.findByEmailAndPassword( login, password );
        if(!user) {
            throw new Error('User not found');
        }
        return user;
    }
}