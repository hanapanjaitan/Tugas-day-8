var newarr = [1,2,3,4,5]

var filterarr=newarr.filter((val,index)=> val%2===0)

console.log(filterarr)

var output = []
var sisa
var genaparr = []
var ganjilarr = []
const genap=(a) => {
    if(sisa===0){
    return genaparr.push(a[i])
    }
}

const ganjil=(a) => {
    if(sisa===1){
    return ganjilarr.push(a[i])
    }
}

const filterNew =(cb,arr,genorgan)=>{
    for(i=0;i<arr.length;i++){
        sisa = arr[i]%2
        cb(arr)
        // if(sisa===0){
        //     output.push(arr[i])
        // }
    }
    return genorgan
}

console.log(filterNew(ganjil,newarr,ganjilarr)) // biar beda output gimana
console.log(filterNew(genap,newarr,genaparr))