var flipBtn = document.getElementsByClassName('flipBtn');
var cardTitle = document.getElementsByClassName('card-title');
var cardText = document.getElementsByClassName('card-text')
var cardLink = document.getElementsByClassName('cardLink')
var faceORback = document.getElementsByClassName('face')
var inputForm = document.getElementById('inputForm')
var fname = document.getElementById('fname')
var major = document.getElementById('major')
var profile = document.getElementById('profile')
var submitBtn = document.getElementById('submitBtn')
var selectedIndex;
var backORface = {};

function flipTheCard(index) {
    if(faceORback[index].innerHTML == 'face'){
        cardTitle[index].innerHTML = backORface[index].face.fname;
        faceORback[index].innerHTML ='back'

    }else{
            faceORback[index].innerHTML ='face';
            cardTitle[index].innerHTML = backORface[index].face.fname;
            faceORback[index].innerHTML = 'face'
    }
}

function selectedCard(index){   
    selectedIndex = index;
}

inputForm.addEventListener('submit',function(e) {  
   e.preventDefault();
   if(selectedIndex != null){
        if(faceORback.innerHTML == 'face'){
            backORface[selectedIndex] = {'face':
            {
                'fname':fname.value,
                'major':major.value,
                'profile':profile.value,
            }          
            }
        }
        alert('u are about add data to the card')
        cardTitle[selectedIndex].innerHTML = fname.value
        cardText[selectedIndex].innerHTML = major.value
        cardLink[selectedIndex].innerHTML = profile.value
        backORface[selectedIndex] = {'back':
            {
                'fname':fname.value,
                'major':major.value,
                'profile':profile.value,
            }          
            
}
        
    }
   else{
    alert('please choose a card')
   }
   inputForm.reset();
})


