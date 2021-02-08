import { render } from "../lib/render"
import Option from "../types/option"

export function load(_vue: any, option: Option) {
  render(_vue, option)
}
