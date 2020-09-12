import {MigrationInterface, QueryRunner} from "typeorm";

export class FakePosts1599929974073 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
      `)
    }

    public async down(_: QueryRunner): Promise<void> {
    }

}
