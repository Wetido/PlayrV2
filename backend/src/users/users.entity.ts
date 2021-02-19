import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
class Users {
  @Column({ name: 'usr_id' })
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'usr_name' })
  name: string;

  @Column({ name: 'usr_email' })
  email: string;

  @Column({ name: 'usr_created_at' })
  createdAt: Date;

  @Column({ name: 'usr_is_deleted' })
  isDeleted: boolean;

  @Column({ name: 'usr_hash' })
  userHash: string;

  @Column({ name: 'usr_password' })
  password: string;
}

export { Users };
