let favButton = document.getElementsByClassName('favButton')


var isLogin = JSON.parse(localStorage.getItem('isLoggedIn')) 
 

if(isLogin == null){
    alert('please login first')
    window.location.href = 'login.html';
}
else if (isLogin == false){
    alert('please login first')
    window.location.href = 'login.html'
}else{
    console.log(isLogin)

    }



function fav(index){
    console.log(index)
    var fill = document.getElementsByClassName('bi-heart-fill')[index]
    console.log(fill)
    console.log(fill.style.display)
   if(fill.style.display == 'none' ||fill.style.display =='' ){
    console.log('mn')

    fill.style.display = 'block'
    console.log(fill.style.display)

   }
   else{
    fill.style.display = 'none'
   }
}
