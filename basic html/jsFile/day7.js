function display(fname,lname,callBackFunction1){
    let msg= `Hi ${fname} ${lname}`;
    console.log("inside display function");
    callBackFunction1(msg);
}

display("Sriranjan","kapilan",implementCallBack1);

function implementCallBack1(message){
    console.log("inside implementCallBack1 function");
    console.log(`${message} , you are welcome`);
}