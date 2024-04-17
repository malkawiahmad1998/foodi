var image = document.getElementById('image');
var title = document.getElementById('title');
var description = document.getElementById('description');
var price = document.getElementById('price');
var AddNewCardFormBtn = document.getElementById('AddNewCardFormBtn');
var cardsBody = document.getElementById('cardsBody')


addNewCardForm.addEventListener('submit',function(e){
    e.preventDefault();
    //image
    var newImage = document.createElement('img');
    newImage.className = 'card-img-top';
    newImage.src = image.value
    //title
    var newTitle = document.createElement('h5');
    newTitle.className = 'card-title';
    newTitle.innerHTML = title.value;
    //description
    var newDescription = document.createElement('p');
    newDescription.className = 'card-text';
    newDescription.innerHTML = description.value;
    //price
    var newPrice = document.createElement('a');
    newPrice.className = 'btn-primary';
    newPrice.innerHTML = price.value;
    
    var content = document.createElement('div');
    content.className = 'card-body';

    var card = document.createElement('div');
    card.className = 'card';

    //deleteButton
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn-primary'
    deleteBtn.innerHTML ='Delete'
    deleteBtn.onclick = function(){
        cardsBody.removeChild(card);
    }


     //updateButton
     var updateBtn = document.createElement('button');
     updateBtn.className = 'btn-primary'
     updateBtn.innerHTML ='Update'
    
    updateBtn.onclick = function(){
        cardsBody.removeChild(card);
        image.value = '';
        title.value = '';
        description.value = '';
        price.value = '';
        image.focus();
        newImage.innerHTML = image.value;
        newTitle.innerHTML = title.value;
        newDescription.innerHTML = description.value;
        newPrice.innerHTML = price.value;
        
    }
   

 

    //content_card
    content.append(newTitle)
    content.append(newDescription)
    content.append(newPrice)

    //card
    card.append(newImage)
    card.append(content)
    card.append(deleteBtn)
    card.append(updateBtn)
    cardsBody.append(card)
    card.style.width ='18rem'
    
    


    

})

