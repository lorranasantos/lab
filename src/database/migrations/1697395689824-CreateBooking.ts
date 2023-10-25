import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateBooking1697395689824 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'bookings',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'idUserRequest',
            type: 'uuid',
          },
          {
            name: 'idLaboratory',
            type: 'uuid',
          },
          {
            name: 'date',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'duration',
            type: 'int',
            isUnique: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
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
            name: 'idUserRequest',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['idUserRequest'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'idLaboratory',
            referencedTableName: 'laboratories',
            referencedColumnNames: ['id'],
            columnNames: ['idLaboratory'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('bookings');
  }
}
