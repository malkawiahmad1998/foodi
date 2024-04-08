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

    var fill = document.getElementsByClassName('bi-heart-fill')[index]
    
    
   if(fill.style.display == 'none' || fill.style.display =='' ){

    fill.style.display = 'block'
    

   }
   else{
    fill.style.display = 'none'
    
   }
}
