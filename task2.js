function searchName(letters, num, callback) {
    const name = [
        "Abigail", "Alexandra", "Alison",
        "Amanda", "Angela", "Bella",
        "Carol", "Caroline", "Carolyn",
        "Deirdre", "Diana", "Elizabeth",
        "Ella", "Faith", "Olivia", "Penelope"]
    let newName = []
    name.map((item) => {
        if (item.toLowerCase().indexOf(letters) > -1) {
            if (newName.length < num) {
                newName.push(item)
            }
        }
    })
    callback(newName)
}

function showName(name) {
    console.log(name)
}

searchName('an', 3, showName)