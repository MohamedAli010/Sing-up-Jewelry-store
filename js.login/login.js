const loginPssword = document.getElementById('password-login');
const mySpan = document.getElementById('span');
const myHidIcon1 = document.getElementById('hide-icon1');
const myHidIcon2 = document.getElementById('hide-icon2');

// Set Function
mySpan.onclick = function () {
    if (loginPssword.type === 'password') {
        loginPssword.type = "text";
        myHidIcon1.style.display = "block";
        myHidIcon2.style.display = "none";
    }
    else
    {
        loginPssword.type = "password";
        myHidIcon1.style.display = "none";
        myHidIcon2.style.display = "block";
    }
}