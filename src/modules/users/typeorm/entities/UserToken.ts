import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    Generated, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn 
} from "typeorm";

@Entity('users')
    class UserToken{
        @PrimaryGeneratedColumn('uuid')
        id: string;

        @Column()
        @Generated('uuid')
        token: string;

        @Column()
        user_id: string;

        @CreateDateColumn()
        created_at: Date;

        @UpdateDateColumn()
        update_at: Date;
    }

    export default UserToken;