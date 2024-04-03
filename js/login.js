
var loginForm = document.getElementById('loginForm');
var Email = document.getElementById('form2Example18');
var Password = document.getElementById('form2Example28');
var logIn = document.getElementById('btn');

var allusers = JSON.parse(localStorage.getItem('userDataFromLocal'));

loginForm.addEventListener('submit',function(e){
e.preventDefault();
for( var i=0 ; i<allusers.length ;i++ ){
    if(allusers[i].Email==Email.value && allusers[i].Password==Password.value){
        console.log('successful login');
        localStorage.setItem('isLoggedIn',true);
        window.location.href = 'authenticationPage.html';
    }
    else{
        console.log('not successful login check ur email and password');
    }
}



})

