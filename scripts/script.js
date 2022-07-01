import GetData from "../helpers/getData.js"
import Ramen from "../modules/ramen.js"
import BreakFast from "../modules/breakfast.js"
import Lunch from "../modules/Lunch.js"
import Dinner from "../modules/dinner.js"




let ramenBtn = document.querySelector('#Ramen')
let breakFastBtn = document.querySelector('#BreakFast')
let LunchBTN = document.querySelector("#Lunch")
let Dinnerbtn = document.querySelector("#Dinner")



let Platos = await GetData('http://localhost:3000/platillos')
ramenBtn.addEventListener('click', async () => {
  Ramen(Platos)
})

breakFastBtn.addEventListener('click', async () => {
  BreakFast(Platos)
})

LunchBTN.addEventListener('click', async () => {
  Lunch(Platos)
})

Dinnerbtn.addEventListener('click', async () => {
  Dinner(Platos)
})



