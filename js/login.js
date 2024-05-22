
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

// class Character {
//     //constructors
//     constructor(name,height,weight,color){
//         this.charName = name;
//         this.charheight = height;
//         this.charweight = weight;
//         this.charcolor = color;
//         this.charStatus = false;
        

//     }
//     //methods(behaviors)
//     charMove(){
//         if(this.charStatus == true){
//             console.log(`${this.charName} is already moving`)

//         }else{
//             this.charStatus = true
//             console.log(`${this.charName} is moving`)
//              }
//     }

//     charStop(){
//         if(this.charStatus == false){
//             console.log(`${this.charName} is already stopping`)

//         }
//         else{
//             this.charStatus = false
//             console.log(`${this.charName} is stopping`)

//         }
//     }

//     updateData(name,height,weight,color){
//         this.charName = name;
//         this.charheight = height;
//         this.charweight = weight;
//         this.charcolor = color;
//         this.charStatus = false;
        
        
        
//     }
// }

// var char1 = new Character('Ahmad',180,73,'white')

// // char1.charMove();
// // char1.charStop();
// // char1.charMove();
// char1.charMove()
// char1.charStop();   
// char1.updateData('mohammad',180,75,'white')
// console.log(char1)


class Factory{
        constructor(name,color,price,year,maxSpeed,driveMode,engine){
            this.name = name;
            this.color = color;
            this.price = price;
            this.year = year;
            this.maxSpeed = maxSpeed;
            this.driveMode = driveMode;
            this.engine = engine;
            this.engineStatus = false
        }
        startEngine(){
            if (this.engineStatus == false){
                console.log('engine started')
            }
            else{
                console('engine is already started')
            }
        }
      

}
        car1 = new Factory('bmw','white',10000,2010,200,'sport',2500);
        car1.startEngine();
        console.log(car1);

        class Cidan extends Factory {
            

            constructor(name,color,price,year,maxSpeed,driveMode,engine,fuelType){
                super(color,price,year,maxSpeed,driveMode,engine)
                this.name = name
                this.fuelType = fuelType;
                
                        }
            carType(){
                console.log(this.name + ' is a sport car');
            }

            fuelTypeChoose(){
                console.log(this.name +` is a ${this.fuelType} car`)

            }

        }
        car1Type = new Cidan('GAS')
        car1Type.fuelTypeChoose();
    