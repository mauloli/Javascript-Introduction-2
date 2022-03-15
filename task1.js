//1. length()
// kegunaan untuk mengnhitung panjang dan string ataupun data yang di check
// CONTOH :
let nama = "Maulana Sholihin"
console.log(`1. ${nama.length}`)

//2. Split()
//kegunaan untuk merubah string menjadi array
//CONTOH :
let kalimat = "Saya Suka Makan jeruk"
console.log(kalimat.split(" "))

//3. Join()
//kegunaan untuk mengubah array menjadi bentuk string
//CONTOH :
let kalimatAr = ['Saya', 'Suka', 'Makan', 'Jeruk']
console.log(`3. ${kalimatAr.join(" ")}`)

//4. toLowerCase()
//kegunaan untuk mengubah seluruh string menjadi huruf kecil
//CONTOH :
console.log(`4. ${kalimat.toLocaleLowerCase()}`)

//5. toUpperCase()
//untuk mengubah seluruh string menjadi huruf besar
//CONTOH:
console.log(`5. ${kalimat.toUpperCase()}`)

//6. toString()
//untuk merubah nilai type data menjadi type data string
//CONTOH :
let angka1 = 10
let angka2 = 50
console.log('6. ' + angka1.toString() + angka2)

//7. indexOf()
//untuk mencari karakter yg sesuai dan dikembalikan dalam bentuk index
//CONTOH :
console.log("7. " + nama.indexOf('ih'))

//8. map()
// untuk melakukan iterasi objek dalam suatu array
//CONTOH :
kalimatAr.map((item) => {
    console.log("8. " + item)
})

//9. sort()
//untuk mengurutkan sebuah nilai
//CONTOH
let nilaiArr = [10, 22, 45, 1, 2, 44, 5]
console.log(nilaiArr.sort(function (a, b) { return a - b }))

//10. pop()
//menghapus elemen terakhir dari suatu array
//CONTOH :
popItem = kalimatAr.pop()
console.log(kalimatAr)
