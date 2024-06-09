


//Cuando yo pulso .BI 
//se le añade class isActive a .Abrir


const Bita = document.querySelector(`.Bita`)
const Abrir = document.querySelector(`.Abrir`)


console.log(Bita)
console.log(Abrir)



Bita.forEach((_ , index)  => {

    Bita[index].addEventListener(`click`, ()=> {
    
    Abrir.classList.toggle(`isActive`)
    
    }) })
    


    