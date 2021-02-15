import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("users")
class Users {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
}

export { Users }