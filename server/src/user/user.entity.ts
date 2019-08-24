import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import { IUser } from './interface/user.interface';

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

export enum UserStatus {
  PENDING = 'pending',
  CONFIRM = 'confirm',
}

@Entity()
export class User {
  @ObjectIdColumn()
  id?: string;
  @Column({type: 'varchar', length: 150, unique: true})
  email: string;
  @Column({type: 'varchar', length: 150, unique: true})
  password: string;
  @Column() public firstName: string;
  @Column() public lastName: string;
  @Column()
  public role: UserRole;
  @Column()
  public status: UserStatus;

  constructor(public data: IUser) {
    Object.assign(this, data);
  }
}
