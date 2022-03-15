seleksiNilai = (nilaiAwal, nilaiAkhir, Arr) => {
    let output = []
    if (nilaiAwal > nilaiAkhir) {
        console.log('nilai awal harus lebih kecil')
    } else if (Arr.length <= 5) {
        console.log('isi array harus lebih dari 5')
    } else {
        Arr.map((item) => {
            if (item <= nilaiAkhir && item >= nilaiAwal) {
                output.push(item)
            }
        })
    }
    let outputSort = output.sort(function (a, b) { return a - b });
    console.log(outputSort)
}

seleksiNilai(3, 10, [4, 5, 12, 10, 15, 9])