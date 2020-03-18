export class Color {
  private r: number
  private g: number
  private b: number
  private a: number
  constructor(r: number, g: number, b: number, a?: number) {
    this.r = r
    this.g = g
    this.b = b
    this.a = a !== undefined ? a : 1
  }

  rgb(): string {
    return `rgb(${this.r}, ${this.g}, ${this.b})`
  }

  rgba(a?: number): string {
    if (a !== undefined) {
      this.a = a
    }
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`
  }
}
