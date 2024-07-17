// window.alert("This is alert box.");
// let myname= window.prompt("enter your name");
// console.log(`your name is ${myname}`);


document.getElementById("submit").addEventListener("click",btnClick);
function btnClick(){
    let getName = document.getElementById("name").value;
    console.log(getName, typeof getName);
    let trimmedName= getName.trim();
    console.log(trimmedName.length);

    if(trimmedName.length !== 0){
    document.getElementById("display").innerHTML=`Your name is <b> ${getName} </b>`;
    }
    else{
    document.getElementById("display").innerHTML=`Please enter name. `;
        
    }
}