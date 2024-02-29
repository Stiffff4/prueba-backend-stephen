import { NotFoundException } from '@nestjs/common';

export class DatabaseHelper {
  public static recordExists(record: any): void {
    if (!record) throw new NotFoundException('Record does not exist.');
  }
}
