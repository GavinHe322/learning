var person = {
    name: 'gavin',
    age: 21,
    sex: 1
}

var me = JSON.stringify(person, ['name', 'age'])

console.log(
    me, // output "{'name':'gavin', 'age': '21'}"
)