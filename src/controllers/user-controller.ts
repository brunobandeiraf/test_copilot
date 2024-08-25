// crie um controller para o usuário, inicialmente implementando o caso de uso login

import { Request, Response } from "express";
import Login from "../use-cases/user/login";
import UserRepository from "../repositories/user-repository";

export default class UserController {

    static async login(req: Request, res: Response) {
        const { login, password } = req.body;
        const userRepository = new UserRepository();
        const loginUseCase = new Login(userRepository);
        try {
            const user = await loginUseCase.execute(login, password);
            res.json(user);
        } catch (error: any) {
            res.status(400).json({ message: error.message});
        }
    }
}