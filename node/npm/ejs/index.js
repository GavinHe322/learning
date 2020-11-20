const ejs = require('ejs')
const log = console.log

let str = `<% if (!options.classConponent) { %>
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'HelloWorld',
    props: {
      msg: String,
    },
  });
<% } else { -%>
  import { Options, Vue } from 'vue-class-component';
  
  @Options({
    props: {
      msg: String
    }
  })
  export default class HelloWorld extends Vue {
    msg!: string
  }
<%_ } _%>`

var ret = ejs.compile(str)({
  options: {
    classConponent: true,
    vueVersion: 3
  }
})

log(ret)


let perple = ['gavin', 'neil', 'alex']
let html = ejs.render(
  `<%= perple.join(', '); %>`
, { perple})
log(html)


let user = {
  name: 'gavin'
}
let userHtml = ejs.render(`
<% if (user) { %>
  <h1><%= user.name %></h1>
<% } %>`
, { user })
log(userHtml)
