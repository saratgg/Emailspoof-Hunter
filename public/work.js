const body = document.getElementById('body');
const input = document.getElementById('form-control');
const btn = document.getElementById('chbutton');
const message = document.getElementById('message');
const mess = document.getElementById('mess');

console.log(message);

function check(){
    let a = "facebook.com";
    let b = "google.com";
    let c = "amazon-service.com";
    let d = "icici.com";

    let z = input.value;

    if (z==a || z==b || z==c || z==d){
        body.classList.add('correct');
        message.innerHTML = "Non-Spoofable Domain!";
        mess.innerHTML = "Spoofing not possible for this domain";
    }else{
        body.classList.remove('correct');
        body.classList.add('wrong');
        message.innerHTML = "Spoofable Domain!";
        mess.innerHTML = "No DMARC record found. Looking for organizational record";
    }
}

btn.addEventListener('click', check)

