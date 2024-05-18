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

// let car = {
//     name : {
//         first : 'bmw',
//         last :'m3',
//     },

//     model:'1998',
//     color : function(){
//         alert('white')
//     },



// }
// console.log(car.color())

class Character {
    //constructors
    constructor(name,height,weight,color){
        this.charName = name;
        this.charheight = height;
        this.charweight = weight;
        this.charcolor = color;

    }
    //methods(behaviors)
    charMove(){
        console.log(`${this.charName} is moving`)
    }
}

var char1 = new Character('Ahmad',180,73,'white')
char1.charMove();

