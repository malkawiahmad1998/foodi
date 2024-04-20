var flipBtn = document.getElementsByClassName('flipBtn');
var cardTitle = document.getElementsByClassName('card-title');
var cardText = document.getElementsByClassName('card-text')
var cardLink = document.getElementsByClassName('cardLink')
var faceORback = document.getElementsByClassName('face')

function flipTheCard(index) {
    if(faceORback[index].innerHTML == 'face'){
        cardTitle[index].innerHTML ='name back';
        faceORback[index].innerHTML == 'back'

    }else{
        
    }
}