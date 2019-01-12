function dataHandling(data){   
    biodata = ''
    for(var i=0; i<data.length; i++ ){
       for(var j=0; j<data[i].length; j++ ){
            switch(j){
                case 0: biodata = biodata + "Nama ID : " + data[i][j] + "\n"
                break;             
                case 1: biodata = biodata +  "Nama Lengkap : "  + data[i][j]  + "\n"
                break;
                case 2: biodata = biodata +  "TTL : " + data[i][j] + " "+ data[i][j+1]  + "\n"
                break;
                case 3: biodata = biodata +  "Hobi : " + data[i][data[i].length-1] + "\n\n"
                break;
             }
             
        }
        
        
    }
    return biodata

    
}
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

console.log(dataHandling(input))

/**
Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca

Nomor ID:  0002
Nama Lengkap:  Dika Sembiring
TTL:  Medan 10/10/1992
Hobi:  Bermain Gitar

Nomor ID:  0003
Nama Lengkap:  Winona
TTL:  Ambon 25/12/1965
Hobi:  Memasak

Nomor ID:  0004
Nama Lengkap:  Bintang Senjaya
TTL:  Martapura 6/4/1970
Hobi:  Berkebun
 **/