//1. DOM ელემენტების წამოღება
const stackContainer = document.getElementById('stack-container');
const pushBtn = document.getElementById('push-btn');
const popBtn = document.getElementById('pop-btn');

let counter = 1;//ელემენტების სათვლელად

//--- PUSH ოპერაცია DOM-ში---
pushBtn.addEventListener('click', () => {
    //ა)ახალი DOM ელემენტის შექმნა
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.textContent = `Card #${counter}`;

    //ბ) DOM-ში ჩამატება ბოლოში (Push-ის ანალოგი)
    stackContainer.appendChild(newCard);

    counter++;
});

//---POP ოპერაცია DOM-ში---
popBtn.addEventListener('click',() =>{
    //ა)DOM-დან ბოლო შვილის პოვნა 
    const lastCard = stackContainer.lastElementChild;

    //ბ) შემოწმება:არსებობს თუ არა საერთოდ ელემენტი
    if (lastCard){
        //გ)ბოლო ელემენტის წაშლა (Pop-ის ანალოგი)
        lastCard.remove();
        counter--;
    }else{
        alert("სტეკი ცარიელია! წაშაშლელი ელემენტი არ არის.")
    }
});