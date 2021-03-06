var reg = ''
const log = console.log

// 校验数字------------------------------------------------

// 数字
reg = /^[0-9]*$/

// n 位数字
reg = /^\d{n}$/

// 至少n位的数字
reg = /^\d{n,}/

// m-n位的数字
reg = /^\d{1,2}/

// 非零开头的最多带两位小数的数字
reg = /^([1-9][0-9]*)\.\d{0,2}/

// 带1-2位小数的正数或负数
reg = /^-?\d*(\.\d{1,2})?$/

// 正数、负数、和小数
reg = /^(\-|\+)?\d+(\.\d+)?$/


// 字符串------------------------------------------------

// 汉字
reg = /^[\u4e00-\u9fa5]{0,}$/

// 英文和数字
reg = /^[A-Za-z0-9]+$/

// 长度为3-20的所有字符
reg = /^\.{3,20}$/

// 由26个英文字母组成的字符串
reg = /^[A-Za-z]*$/

// 由26个大写英文字母组成的字符串
reg = /^[A-Z]*$/

// 由26个小写英文字母组成的字符串
reg = /^[a-z]$/

// 由数字和26个英文字母组成的字符串
reg = /^[a-zA-Z\d]*/

// 由数字、26个英文字母或者下划线组成的字符串
reg = /^\w+$/

// 中文、英文、数字包括下划线
reg = /^\w+$/

// 中文、英文、数字但不包括下划线等符号
reg = /^[\u4e00-\u9fa5A-Za-z0-9]+$/

// 禁止输入含有~的字符
reg = /[^~\x22]/


// 特殊需求表达式

// Email地址

reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

// InternetURL
reg = /^http(s)?:\/\/(www.)?[a-z.]{1,10}(cn|com)/
// log(reg.test('http://www.baidu.com'))
// log(reg.test('https://baidu.com'))

// 手机号码
reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/

// 身份证号(15位、18位数字)，最后一位是校验位，可能为数字或字符X
reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/

// 帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)
reg = /^[A-Za-z]\w{4,15}/

// 密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)
reg = /^[A-Za-z][A-Za-z_0-9]{5,17}$/
