import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 255 })
    name!: string;

    @Column({ type: 'varchar', length: 150 })
    email!: string;

    @Column({ type: 'varchar', length: 25 })
    password!: string;

    static validateEmail(email: string) { 
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    static validatePassword(password: string) : boolean {
        // password deve possui pelo menos uma maiscula, uma minuscula, um número e um caractere especial e pelo menos 8 caracteres
        const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        return re.test(password);
    }
}