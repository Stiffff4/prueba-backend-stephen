export class ObjectHelper {
  public static clean(object: any): any {
    return JSON.parse(JSON.stringify(object));
  }
}
