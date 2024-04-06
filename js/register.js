var regForm = document.getElementById('regForm');
var Fname = document.getElementById('form3Example1c')
var Lname = document.getElementById('form3Example1cl')
var userName = document.getElementById('form3Example1cu')
var phoneNum = document.getElementById('form3Example1cp')
var Email = document.getElementById('form3Example3ce')
var gender = document.getElementById('gender')
var Password = document.getElementById('form3Example4cpa')
var repPassword = document.getElementById('form3Example4cdrep')
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
        Fname : Fname.value,
        Lname : Lname.value,
        userName:userName.value,
        phoneNum:phoneNum.value,
        Email : Email.value,
        Password:Password.value,
        repPassword:repPassword.value,
        gender:gender.value,
        
        
    }
    allUsers.push(userData)
    
   
    localStorage.setItem('userDataFromLocal',JSON.stringify(allUsers))
    window.location.href = 'login.html'
    
})
