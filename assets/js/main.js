console.log('Siva')

const btns = document.getElementById('clickMe')

let i = 0

btns.addEventListener('click', () =>{

    i++

    btns.innerHTML = `Click me: ${i}`


})