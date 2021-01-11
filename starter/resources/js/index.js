// ovde raditi zadatak
console.log('pocetak')

let casovi= []
let count = 0
const Forma = document.querySelector('#forma')

 Forma.addEventListener('submit', (e)=>{
e.preventDefault()


console.log ('nesto')

const Predmet = document.querySelector('#predmet')
const Profesor = document.querySelector('#profesor')
let time = new Date()
//casovi.push(cas)
let Id = count
count++
    let cas = {
        id: Id,
        predmet:Predmet.value ,
        profesor: Profesor.value,
        datum: time.toLocaleDateString(),
        vreme: time.toTimeString()
       }
       //provera
       casovi.push(cas)
       console.log(casovi)

       const ItemCon = document.querySelector('#item-container')
        
       const item = document.createElement('div')
       item.className = 'item'
       const p0 = document.createElement('p') 
       const p1 = document.createElement('p') 
       const p2 = document.createElement('p') 
       const p3 = document.createElement('p') 
      

       p0.innerHTML = `<span>Predmet:</span> ${predmet.value}`
       p1.innerHTML = `<span>Profesor:</span> ${profesor.value}`
       p2.innerHTML = `<span>Datum: </span> ${cas.datum}`
       p3.innerHTML = `<span>Vreme: </span> ${profesor.value}`

       const btnObrisi = document.createElement('button')
           btnObrisi.innerText = 'Обриши'
        btnObrisi.addEventListener('click', () => {
               item.remove()  
              casovi.splice(casovi.findIndex(el => el.id == Id), 1)  

           })
           item.append(p0,p1,p2,p3)
           ItemCon.append(item,btnObrisi)

})