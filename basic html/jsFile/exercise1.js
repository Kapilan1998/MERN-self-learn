
// let name='kapilan';
// let firstLetter=name.substring(0,1);
// let removeUnWanted=name.substring(1,7);
// let word= firstLetter.toUpperCase()+removeUnWanted;
// console.log(word.replace(' '));


// let name='kapilan';
// let firstLetter=name.split('');
// let storeFirstLetter=firstLetter[0].toUpperCase();
// let removeUnWanted=name.substring(1,7);
// let word= storeFirstLetter+removeUnWanted;
// console.log(word.replace(' '));




let nic='982290871v';

let condition1= nic.endsWith('V') || nic.endsWith('v') || nic.endsWith('X') || nic.endsWith('x');
if(nic.length==10 && condition1){
    let getNumber1=nic.substring(0,9);
    let convertToNumber1 = parseInt(getNumber1);
    convertToNumber1 = convertToNumber1.toString();

    if(convertToNumber1.length == 9){
    console.log(` Your NIC number ${nic} is valid`);
    }else{
        console.log(`First 9 letters of NIC number ${nic} must be numbers`);
    }
}else if(nic.length==12){
    let convertToNumber2 = parseInt(nic);
    convertToNumber2 = convertToNumber2.toString();
    if(convertToNumber2.length == 12){
        console.log(`Your 12 digit NIC number ${nic} is valid`);
        }else{
            console.log(`12 letters of NIC number ${nic} must be numbers`);
        }
}else{
    console.log('Invalid nic format');
}
