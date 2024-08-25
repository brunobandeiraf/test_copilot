import {expect, test } from 'vitest'
import Login from './login'
import UserRepository from '../../repositories/user-repository'

class MockUserRepository extends UserRepository{
    async findByEmailAndPassword(login: string, password: string) {
        return{ 
            id: 1,
            name: 'Admin',
            email: 'admin@email.com',
            password: 'admin'
        }
    }
}

test('Login', async () => {
    const userRepository = new MockUserRepository();
    const login = new Login(userRepository);
    const user = await login.execute('admin@email.com', 'admin');
    expect(user).toEqual({
        id: 1,
        name: 'Admin',
        email: 'admin@email.com',
        password: 'admin'
    });
});

test('Login with invalid credentials', async () => {
    const userRepository = new MockUserRepository();
    const login = new Login(userRepository);
    try {
        await login.execute('invalido@test.com', 'admin');
    } catch (error: any) {
        expect(error.message).toEqual('User not found');
    }
})