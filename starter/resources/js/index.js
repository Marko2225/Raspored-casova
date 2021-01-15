// ovde raditi zadatak
console.log('pocetak')

let casovi= [ {
        id: 0,
        predmet:'Matematika',
        profesor: 'Jovana Jovanovic',
        datum: `21-Jan-20 h`,
        vreme:`10:30 h`
       },
	    {
        id: 1,
        predmet:'Engleski',
        profesor:'Pera Peric',
        datum: `22-Jan-2021`,
        vreme: `11:00 h`
       }]
let count = casovi.length

const Forma = document.querySelector('#forma')

 Forma.addEventListener('submit', (e)=>{
e.preventDefault()


console.log ('nesto')

const Predmet = document.querySelector('#predmet')
const Profesor = document.querySelector('#profesor')

let time = new Date()
//casovi.push(cas)
let Id = count
//count++
    let cas = {
        id: Id,
        predmet:Predmet.value ,
        profesor: Profesor.value,
        datum: time.toLocaleDateString(),
        vreme: time.toLocaleTimeString()
       }
	   
       //provera
	   if ( predmet.value != '' && (profesor.value.length > 3 && profesor.value.length < 20)) {
       casovi.push(cas)
       console.log(casovi)

       const ItemCon = document.querySelector('#item-container')
        
       const item = document.createElement('div')
       item.className = 'item'
       const p0 = document.createElement('p') 
       const p1 = document.createElement('p') 
       const p2 = document.createElement('p') 
       const p3 = document.createElement('p') 
       const btnObrisi = document.createElement('button')
	   const btnIzmeni = document.createElement('button')

       p0.innerHTML = `<span>Predmet:</span> ${Predmet.value}`
       p1.innerHTML = `<span>Profesor:</span> ${Profesor.value}`
       p2.innerHTML = `<span>Datum: </span> ${cas.datum}`
       p3.innerHTML = `<span>Vreme: </span> ${cas.vreme}`

      // const btnObrisi = document.createElement('button')
           btnObrisi.innerText = 'Обриши'
        btnObrisi.addEventListener('click', () => {
               item.remove()  
              casovi.splice(casovi.findIndex(el => el.id == Id), 1)  

           })
		 //  const btnIzmeni = document.createElement('button')
           btnIzmeni.innerText = 'Измени професора'
        btnIzmeni.addEventListener('click', () => {
          let person = prompt("Please enter your name", "profesor");    
           p1.innerHTML = `<span>Profesor:</span>  ${person}`
		   cas.profesor= `${person}`
		   console.log(casovi)
           })
           item.append(p0,p1,p2,p3,btnObrisi,btnIzmeni)
		  
           ItemCon.appendChild(item)
		   
    Predmet.value = ''
    Profesor.value = ''
    count++
	   }
	   else
	   {window.alert('los unos podataka')}

})