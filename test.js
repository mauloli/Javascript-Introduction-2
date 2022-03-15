const name = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"]
let newName = []


// name.map((item, index) => {
//     if (item.toLowerCase().indexOf('an') > -1) {
//         newName.push(item)
//     } else {
//         console.log('tidak')
//     }
// })
// console.log(newName)
name.map((item, index) => {
    if (item.toLowerCase().indexOf('an') > -1) {
        if (newName.length < 3) {
            newName.push(item)
        }
    } else {
        console.log(newName.length)
    }
})
console.log(newName)