
function assembleCharacters(){
    //Fetch request for the provided url
    return fetch('http://localhost:3000/characters')
    .then(response => response.json())
    .then(characters => characters.forEach(value => {
        console.log(value.name)
        //new element and assingning it the name value, then appending it
        let animal = document.createElement('p')
        animal.textContent = value.name
    
        let container = document.getElementById('cont')
        container.appendChild(animal)
        //Add an event listener and give instructions
        animal.addEventListener('click', ()=> {
            //assign an element name element
            let pet =document.createElement('img')
            pet.src=value.image
            //appending the image element
            animal.appendChild(pet)
            //creating a new element and assigning a vote
            let win = document.createElement('a')
            win.textContent = `the total value of votes is ${value.votes}`
            //appending our votes value to our element
            animal.appendChild(win)
            let count = 0
            //creating a buttonelement and adiing event listener to it
            let button = document.createElement('button')
            button.innerText ="Reset"
            button.addEventListener('click',()=>{
                count = count + 1
                win.innerText =count

            } );
            animal.appendChild(button);


        },{once:true})
    }))
}
document.addEventListener('DOMContentLoaded',assembleCharacters)

