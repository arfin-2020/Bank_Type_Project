 document.getElementById('btn-submit').addEventListener('click',function(){
    const inputField = document.getElementById('user-email');
    const email = inputField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    if(email === 'arfin07@gmail.com' && password === 'arfin123'){
        window.location.href = "bank.html";
    }else{
        alert("fille up this input field or you are not valid user! Try Again.");
    }
});
