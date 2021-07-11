let add7 =(n)=>{
    
    return n+7;

}
let multiply=(n1,n2)=>{
    let product=n1*n2;
    return product;
}

let capitalize=(string)=>{
    let starray=string.split(" ");
    for(let a=0; a<starray.length; a++){
        starray[a]=starray[a][0].toUpperCase()+starray[a].substr(1);
        
    }
    
    return starray.join(" ");
}

let lastLetter=(string)=>{
    let stringLen=string.length;
    let substrstring=string.substr(stringLen-1, stringLen);
    return substrstring;
}
console.log("Add any number plus 7 "+add7(17))
console.log("their product "+multiply(10,20))
console.log("Capilaize the filst Letters [...] "+capitalize("welcome in ubumenyi resources"))
console.log("Get The last Letter of Any string ["+lastLetter("Umuhire"))