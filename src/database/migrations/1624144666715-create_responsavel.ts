import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createResponsavel1624144666715 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'responsavel',
            columns: [
                {
                    name: 'id',
                    type:'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: 'nomedoresponsavel',
                    type: 'varchar'
                },
                {
                   name: 'telefone',
                   type: 'varchar',
                },
                {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('responsavel')
    }

}
