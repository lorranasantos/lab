import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUser1695933803707 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'name(100)',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar(50)',
            isUnique: true,
          },
          {
            name: 'password',
            type: 'varchar',
          },
          {
            name: 'phone',
            type: 'varchar(15)',
            isUnique: true,
          },
          {
            name: 'cpf',
            type: 'varchar(15)',
            isUnique: true,
          },
          {
            name: 'isActive',
            type: 'boolean',
            isUnique: true,
          },
          {
            name: 'idUserType',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'idUserType',
            referencedTableName: 'userTypes',
            referencedColumnNames: ['id'],
            columnNames: ['idUserType'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
