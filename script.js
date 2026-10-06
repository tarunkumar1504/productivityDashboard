function openCardFeatures(){
    let allElems = document.querySelectorAll(".elem")
var allFullPages = document.querySelectorAll(".fullElems")
var allbackbtns = document.querySelectorAll(".fullElems .back")


allElems.forEach(function(elem){
    elem.addEventListener('click',function(){
        allFullPages[elem.id].style.display = 'block'
    })
})
allbackbtns.forEach(function(btn){
    btn.addEventListener('click',function(){
        allFullPages[btn.id].style.display='none'
    })
})

}

openCardFeatures()


function todolist(){
    let form = document.querySelector(".addTask form")
let addTaskInp = document.querySelector(".addTask form input")
let addTaskText = document.querySelector(".addTask form textarea")
let checkbox = document.querySelector(".markImp #check")
let currTasks = [
    
]
function renderTasks(){
    var allTasks = document.querySelector(".allTasks")




let sum = ''
currTasks.forEach((elem, idx)=>{
    sum = sum + `<div class="task">
                        <h5>${elem.task} <span class=${elem.imp}>Imp</span></h5>
                        <button id=${idx}>Mask As Completed</button>
            </div>`
    
})
allTasks.innerHTML=sum;

let markAsCom = document.querySelectorAll(".task button")

console.log(markAsCom);

markAsCom.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        currTasks.splice(btn.id,1)
        renderTasks()
    })
})
}

renderTasks()

form.addEventListener("submit", function(e){
    e.preventDefault()
    currTasks.push({
        task:addTaskInp.value,
        description:addTaskText.value,
        imp:checkbox.checked

    })
    addTaskInp.value=''
    addTaskText.value=''
    checkbox.checked=false
    renderTasks()
})

}

todolist()

function dailyPlanner(){
    
let dayPlnData = {}
let dayPlanner = document.querySelector(".dayPlanner")


var hrs = Array.from({length:18},(elem,idx)=>`${6+idx}:00 - ${7+idx}:00`)

let wholeDaySum = ''
hrs.forEach(function(elem, idx){

    let saveddata = dayPlnData[idx] || ''
    wholeDaySum = wholeDaySum+ ` <div class="dayPlannerTime">
                    <p>${elem}</p>
                    <input id=${idx} type="text"  placeholder="..." value=${saveddata}>
                </div>
                `
                
})



dayPlanner.innerHTML= wholeDaySum

let dayPlanInp = document.querySelectorAll(".dayPlanner .dayPlannerTime input")

dayPlanInp.forEach((elem)=>{
    elem.addEventListener('input',()=>{
        dayPlnData[elem.id]= elem.value
    })
})


}

dailyPlanner()

function motivationalQuotes(){
    
let motivationalQuote = document.querySelector(".motivation2 h3")
let motivationalAuthor = document.querySelector(".motivation3 h3")
async function fetchQuote() {
    let response = await fetch("https://motivational-spark-api.vercel.app/api/quotes/random")
    let data =  await response.json()
    
    motivationalQuote.innerHTML = data.quote
    motivationalAuthor.innerHTML = data.author

}
fetchQuote()
}
motivationalQuotes()


function pomotimer(){
    
let timeInterval =null
let totalsecond = 25*60
let pomotimerH1 = document.querySelector(".pomoTimer h1")
var startbtn = document.querySelector(".pomoTimer .startTimer")
var pausebtn = document.querySelector(".pomoTimer .pauseTimer")
var resetbtn = document.querySelector(".pomoTimer .ResetTimer")


function updatedTimer(){
    let minutes = Math.floor(totalsecond/60)
    let seconds = totalsecond%60

    pomotimerH1.innerHTML = `${String(minutes).padStart('2','0')}:${String(seconds).padStart('2','0')}`
}
updatedTimer()

function startTimer(){
    clearInterval(timeInterval)


    timeInterval = setInterval(() => {
        if(totalsecond>0){
            totalsecond--
        updatedTimer()
        }else{
            clearInterval(timeInterval)
        }
    }, 1000);
}

function pauseTimer(){
    clearInterval(timeInterval)
}
function resetTimer(){
    totalsecond=25*60
    clearInterval(timeInterval)
    updatedTimer()
}
startbtn.addEventListener("click",startTimer)
pausebtn.addEventListener("click",pauseTimer)
resetbtn.addEventListener("click",resetTimer)

}

pomotimer()


function weatherFucntion(){
    
var header1H1 = document.querySelector(".header1 h1")
var header1date = document.querySelector(".header1 h2")
var temp = document.querySelector(".header2 h2")
var preci = document.querySelector(".header2 .preci")
var wind = document.querySelector(".header2 .wind")
var data = null 

async function weatherApiCall(){
    const url =
  "https://api.open-meteo.com/v1/forecast" +
  "?latitude=30.9010" +
  "&longitude=75.8573" +
  "&current=temperature_2m,relative_humidity_2m,wind_speed_10m" +
  "&daily=temperature_2m_max,temperature_2m_min,weather_code" +
  "&timezone=auto";

  let response = await fetch(url)

   data = await response.json()

    temp.innerHTML = `${data.current.temperature_2m}°C`
    preci.innerHTML = `Preciption : ${data.current.relative_humidity_2m}%`
    wind.innerHTML = `Wind: ${data.current.wind_speed_10m}km`
  console.log(data)
}

weatherApiCall()

function timedate(){
    const totaldaysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturaday"]
    const monthsFull = [
  "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"
];
    let date = new Date();
    var dayofWeek = totaldaysOfWeek[date.getDay()]
    let hrs = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    header1date.innerHTML = `${date.getDate()} ${monthsFull[date.getMonth()]}, ${date.getFullYear()}`
    if(hrs>12){

        header1H1.innerHTML= `${dayofWeek},${String(hrs-12).padStart('2','0')}:${String(min).padStart('2','0')}:${String(sec).padStart('2','0')} PM`
    }else{

        header1H1.innerHTML= `${dayofWeek},${String(hrs).padStart('2','0')}:${String(min).padStart('2','0')}:${String(sec).padStart('2','0')} AM`
    }
}
setInterval(() => {
    
    timedate()
}, 1000);
}

weatherFucntion()


var theme = document.querySelector(".theme")
var rootelet = document.documentElement

var flag =0

theme.addEventListener('click',function(){
   if(flag==0){
     rootelet.style.setProperty('--pri','#90B800')
    rootelet.style.setProperty('--sec','#063B00')
    rootelet.style.setProperty('--tri1','#266210')
    flag=1
   }else if(flag==1){
     rootelet.style.setProperty('--pri','#44A1A4')
    rootelet.style.setProperty('--sec','#224248')
    rootelet.style.setProperty('--tri1','#325E6A')
    flag=2
   }else if(flag==2){
     rootelet.style.setProperty('--pri','#FFADEE')
    rootelet.style.setProperty('--sec','#92003A')
    rootelet.style.setProperty('--tri1','#F62477')
    flag=0
   }
})