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


if(dataFromStorage==null){
    var allUsers = []
}
else{ 
    var dataFromStorage = JSON.parse(localStorage.getItem('userDataFromLocal'))
    var allUsers=dataFromStorage;
}
console.log(regForm)


regForm.addEventListener('submit',function(e){
    e.preventDefault();
    alert()
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
    console.log(userData)
    allUsers.push(userData)
    
   
    localStorage.setItem('userDataFromLocal',JSON.stringify(allUsers))
    window.location.href = 'login.html'
    
})
