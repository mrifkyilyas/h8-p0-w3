var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]  

function dataHandling2(masukan){
    masukan.splice(1,2,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung")
    masukan.splice(4,1,"Pria", "SMA Internasional Metro")
    console.log(masukan)//[ '0001','Roman Alamsyah Elsharawy','Provinsi Bandar Lampung','21/05/1989','Pria','SMA Internasional Metro' ]
    tanggal = masukan[3].split("/")
    bulan = Number(tanggal[1])
    switch(bulan){//mei
        case 01: console.log( "Januari")
        break;
        case 02: console.log( "Februari")
        break;
        case 03: console.log( "Maret")
        break;
        case 04: console.log( "april")
        break;
        case 05: console.log( "Mei")
        break;
        case 06: console.log( "juni")
        break;
        case 07: console.log( "juli")
        break;
        case 08: console.log( "agustus")
        break;
        case 09: console.log( "sept")
        break;
        case 10: console.log( "okt")
        break;
        case 11: console.log( "nov")
        break;
        case 12: console.log( "des")
        break;
    }
   
    console.log(tanggal.sort(function(a,b){return b-a}))
    
    console.log(masukan[3].split('/').join("-"))

    console.log(masukan[1].slice(0,15))
    
   

    
}

dataHandling2(input)