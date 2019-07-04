// let unSure: string | undefined | null = undefined 
// unSure = '124'
// unSure = undefined
// unSure = null
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myobj = {
    size: 14,
    label: 'size 10 object'
};
printLabel(myobj);
