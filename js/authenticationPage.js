let logout = document.getElementById('Logout')
let login = document.getElementById('login')
let register = document.getElementById('register')



var auth = JSON.parse(localStorage.getItem('isLoggedIn'))

if(auth == true){
   logout.style.display = 'block'
}
else{
    login.style.display = 'block'
    register.style.display = 'block'
}

logout.addEventListener('click', function (e) {
    e.preventDefault()
    window.location.href = 'login.html'
  })

