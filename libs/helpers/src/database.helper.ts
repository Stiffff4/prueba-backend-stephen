import { NotFoundException } from '@nestjs/common';

export class DatabaseHelper {
  public static checkIfRecordExists(record: any): void {
    if (!record) throw new NotFoundException('Record does not exist.');
  }
}
