let str="Geeks"
let str2="gekees"

let ans=function abc(str,str2){
    return str.toLowerCase().split('').sort().join('')===str2.toLowerCase().split('').sort().join('');
}
console.log(ans(str,str2));

// return str.toLowerCase().split('').sort().join('')===str2.toLowerCase().split('').sort().join('');
