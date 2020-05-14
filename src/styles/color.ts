/**
 * A Helper class to convert colors from rgb(a) values to strings.
 *
 * @class Color
 */
export class Color {
  private r: number
  private g: number
  private b: number
  private a: number
  /**
   * Creates an instance of Color.
   *
   * @param r - Red value between 0 and 255. This must be an integer.
   * @param g - Green value between 0 and 255. This must be an integer.
   * @param b - Blue value between 0 and 255. This must be an integer.
   * @param [a] - Optional alpha value between 0 and 1.
   * @memberof Color
   */
  constructor(r: number, g: number, b: number, a?: number) {
    this.r = r
    this.g = g
    this.b = b
    this.a = a !== undefined ? a : 1
  }

  /**
   * Turn a color into a string disregarding the alpha channel.
   *
   * @returns
   * @memberof Color
   */
  rgb(): string {
    return `rgb(${this.r}, ${this.g}, ${this.b})`
  }

  /**
   * Turn a color into a string with an alpha channel.
   *
   * @param [a] - Override the alpha channel.
   * @returns
   * @memberof Color
   */
  rgba(a?: number): string {
    if (a !== undefined) {
      this.a = a
    }
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`
  }
}
