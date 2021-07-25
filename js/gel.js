// Set Varibales

const myPass = document.getElementById('password');
const myText = document.getElementById('text');
const myButton = document.getElementById('btn');
const emailText = document.getElementById('email-text');
const email = document.getElementById('email');
const myPhone = document.getElementById('phone');
const textPhone = document.getElementById('text-phone');
const myHide1 = document.getElementById('hide1');     
const myHide2 = document.getElementById('hide2');
const myeya= document.getElementById('eya-content');
const myPass2 = document.getElementById('password-2')
const myeya2= document.getElementById('eya-content-2');
const myHide3= document.getElementById('hide3');
const myHide4= document.getElementById('hide4');
     

// Set onfocus for myPss
myPass.onfocus = function (){
    myText.textContent = 'Please enter at least 10 number and characters.!';
}

// Set onblur
myPass.onblur = function () {
    myText.textContent = '';
}

// Set onclick for email
// myButton.onclick = function (name){
//     if(email.textContent === '') {
//         emailText.textContent = 'This field is required!'
//     } else{
//         emailText.textContent = "done";
//     }
// }

// Show And Hidden On Pass2
myeya.onclick = function() {
    if (myPass.type === 'password') {
        myPass.type = "text";
        myHide1.style.display = "block";
        myHide2.style.display = "none";
    }
    else{
        myPass.type = "password";
        myHide1.style.display = "none";
        myHide2.style.display = "block";
    }
}

// Show And Hidden On Pass2
myeya2.onclick = function() {
    if (myPass2.type === 'password') {
        myPass2.type = "text";
        myHide3.style.display = "block";
        myHide4.style.display = "none";
    }
    else{
        myPass2.type = "password";
        myHide3.style.display = "none";
        myHide4.style.display = "block";
    }
}


