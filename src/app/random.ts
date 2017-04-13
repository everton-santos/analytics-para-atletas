export class Random{
    public static getRadomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
}