import Option from "../types/option"

const html = '<button @click="click">You clicked me {{ count }} times.</button>'

export function render(_vue: any, option: Option) {
  new _vue({
    el: option.el,
    data: option.data,
    methods: option.methods,
    render: _vue.compile(html).render,
  })
}