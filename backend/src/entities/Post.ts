import { ObjectType, Field } from 'type-graphql';
import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@ObjectType()
@Entity()
export class Post extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @CreateDateColumn()
  updatedAt: Date;

  @Field()
  @Column()
  title!: string;
}
