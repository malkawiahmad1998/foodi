var regForm = document.getElementById('regForm');
var Name = document.getElementById('form3Example1c');
var Email = document.getElementById('form3Example3c');
var Password = document.getElementById('form3Example4c');
var repPassword = document.getElementById('form3Example4cd');
var Register = document.getElementById('submit');
var dataFromStorage = JSON.parse(localStorage.getItem('userDataFromLocal'))
if(dataFromStorage==null){
    var allUsers = []
}
else{ allUsers = dataFromStorage
}



regForm.addEventListener('submit',function(e){
    e.preventDefault();
    var userData = {
        Name : Name.value,
        Email : Email.value,
        Password:Password.value,
        repPassword:repPassword.value,
    }
    allUsers.push(userData)
   
    localStorage.setItem('userDataFromLocal',JSON.stringify(allUsers))
    window.location.href = 'login.html'
    
})
