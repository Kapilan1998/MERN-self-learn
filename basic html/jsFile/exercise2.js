
document.getElementById("submit").addEventListener("click", validateNIC);

function validateNIC() {
    let nic = document.getElementById("nic").value;
    let condition1 = nic.endsWith('V') || nic.endsWith('v') || nic.endsWith('X') || nic.endsWith('x');
    if (nic.length == 10 && condition1) {
        let getNumber1 = nic.substring(0, 9);
        let convertToNumber1 = parseInt(getNumber1);
        convertToNumber1 = convertToNumber1.toString();

        if (convertToNumber1.length == 9) {
            document.getElementById("display").innerHTML = ` <span style="color: green;"> Your NIC number ${nic} is valid </span>`;
        } else {
            document.getElementById("display").innerHTML = `<span style="color: red;">First 9 letters of NIC number ${nic} must be numbers </span>`;
        }
    } else if (nic.length == 12) {
        let convertToNumber2 = parseInt(nic);
        convertToNumber2 = convertToNumber2.toString();
        if (convertToNumber2.length == 12) {
            document.getElementById("display").innerHTML = `<span style="color: green;"> Your 12 digit NIC number ${nic} is valid </span>`;
        } else {
            document.getElementById("display").innerHTML = `<span style="color: red;"> 12 letters of NIC number ${nic} must be numbers </span>`;
        }
    } else {
        document.getElementById("display").innerHTML = `<span style="color: red;"> Invalid nic format </span>`;
    }
}