import { render } from "../lib/render"
import Option from "../types/option"

export function load(_vue: any, _page: string, option: Option) {
  render(_vue, option)
}
