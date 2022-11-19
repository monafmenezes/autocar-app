import { MigrationInterface, QueryRunner } from "typeorm";

export class updateTables1668707565258 implements MigrationInterface {
    name = 'updateTables1668707565258'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" ADD "price" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "price"`);
    }

}
