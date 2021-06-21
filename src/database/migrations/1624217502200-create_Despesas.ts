import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createDespesas1624217502200 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table ({
            name: 'despesas',
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
                    name: 'datadacompra',
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: 'localdacompra',
                    type:'varchar',
                },
                {
                    name: 'valor',
                    type:'varchar',
                },
                {
                    name: 'id_responsavel',
                    type:'integer',
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
            foreignKeys: [
                {
                    name: 'iddoresponsavel',
                    columnNames: ['id_responsavel'],
                    referencedTableName: 'responsavel',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('despesas')
    }

}
