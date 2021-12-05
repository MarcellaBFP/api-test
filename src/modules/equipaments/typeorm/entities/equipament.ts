import { CreateEquipaments1638324286837 } from "@shared/typeorm/migrations/1638324286837-CreateEquipaments";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('equipaments')
class equipament {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    serial_number: string;

    @CreateDateColumn()
    created_at:  Date;

    @CreateDateColumn()
    updated_at:  Date;


}
export default equipament;