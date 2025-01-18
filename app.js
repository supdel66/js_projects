//image slider
const slides=document.querySelectorAll('.slides img');
let slideindex=0;
let intervalid=null;
console.log(slides[slideindex])

initializeslider();

function initializeslider(){
console.log('initialzeslider')
slides[slideindex].style.display ='block'
}

function showslide(index){
slides.forEach((slide)=>{
    slide.style.display='none';
})
slides[index].style.display='block';
}
function prevslide(){
    slideindex--;
    if(slideindex<0){
        slideindex=slides.length-1;
       }
    showslide(slideindex);

}
function nextslide(){
   slideindex++;
   if(slideindex>=slides.length){
    slideindex=0;
   }
   showslide(slideindex);
}



//calculator program
const displayy= document.getElementById('input');
console.log(displayy)

function appendtoinput(input){
    console.log(input)
displayy.value += input;
}


function clearinput(){
displayy.value=""
}

function calculate(){
    try{
 displayy.value=eval(displayy.value)
    }
    catch(error){
        displayy.value='error'
    }
}


//errorhandling
//try catch finally(for close ups optional)


//synchronous->executes line by line and 
// asynchronous->allows aru perform without waiting chalirahanxa 

func1(func2)
function func1(callback){
    setTimeout( ()=>{console.log('taske 1')
    callback()},200)
}

function func2(){
    console.log('taske 2')
    console.log('taske 3')
    
}

//es6 module= externam file that contains reusable code that can be imported into other js file
//html ma script lai type="module" parnuparxa
// import {PI,getcircumference} from './mathuti.js';
// console.log(PI, getcircumference(23))

//stopwatch
const Display=document.getElementById('display')
let timer =null, starttime=0, elapsedtime=0, isrunning=false;


function startstopwatch(){    
    console.log('start function')
    if(!isrunning){
        starttime=Date.now()-elapsedtime;
        timer = setInterval(()=>{
            const currenttime=Date.now()
            elapsedtime=currenttime-starttime
            let hours = Math.floor(elapsedtime/(1000*60*60)).toString().padStart(2,0)
            let minutes = Math.floor(elapsedtime/(1000*60) %60).toString().padStart(2,0)
            let seconds=Math.floor(elapsedtime/1000  %60).toString().padStart(2,0)
            let milliseconds=Math.floor(elapsedtime%1000 /10).toString().padStart(2,0)
            Display.textContent= `${hours}:${minutes}:${seconds}:${milliseconds}`
        },10)
        isrunning = true;
    }
}


function stopstopwatch(){
if (isrunning){
    clearInterval(timer)
    elapsedtime=Date.now()-starttime

    isrunning=false
}
}

function resetstopwatch(){
    clearInterval(timer)
    starttime=0, elapsedtime=0, isrunning=false;
    Display.textContent="00:00:00:00"
}


//Digital Clock Program
function updateClock(){
    const now= new Date();
    let hours= now.getHours().toString().padStart(2,0);
    let minutes=now.getMinutes().toString().padStart(2,0);
    let seconds= now.getSeconds().toString().padStart(2,0);
    const timestring=`${hours}:${minutes}:${seconds}`
    document.getElementById('clock').innerText= timestring;
    }
    updateClock();
    setInterval(updateClock,1000);


//settimeout
function sayhello(){console.log('hellp')}
setTimeout(sayhello,3000)

const timeoutid=setTimeout(sayhello,2000)
clearTimeout(timeoutid);

function starttimer(){
    setTimeout(()=>{
        window.alert('Hello')
    },2000)
}


///closure func defined inside another function, inner fucntion has access to the variable and scope of the outer function
// Allow for private variables and state management
// used frequently in JS frameworks like react vue angular
function outer()
{ let message='hello'
    function inner(){
   console.log(message);
    }
    inner();
} 
outer();

function createCounyer(){
    let count=0;
    function increment(){
    count++
    console.log(`count increase to ${count}`)
}
return {increment};
}
const counter = createCounyer();
counter.increment()
counter.increment()

//date
const date = new Date(2025, 0, 12, 2,40,12)
console.log(date)  //0 is january  jan 12 2025, 2:40:12
const dat1=new Date(0)
console.log(dat1)

const dat2=new Date(2133431221120) //ms addeed to date(0)  i.e Thu Jan 01 1970 05:30:00 GMT+0530 (Nepal Time)
console.log(dat2)

console.log(
    dat2.getFullYear(),   
)

dat2.setFullYear(2025)// amd similarly other dates
console.log(dat2)

//compare
if(dat2>date){
    console.log('happuuuu')
}

function getdate(){ 
    document.getElementById('date').innerText=new Date()
}


//sorting arrays
let Numbers=[1,2,3,3,2,1,2,10]
Numbers.sort((a,b)=>a-b)
console.log(Numbers)

let meme=[{name:'hi',age:23},{name:'bye',age:21}]
meme.sort((a,b)=>a.age-b.age)
console.log(meme)
meme.sort((a,b)=>a.name.localeCompare(b.name)) //for reverse just reverse a and b 
console.log(meme)

//sort
//Fisher-Yates Algorithm
const cards = ['a', 'b', 1, 2, 2, 3, 4, 5, 6, 7, 8];
shuffle(cards);
console.log(cards);

function shuffle(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
        let random = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[random]] = [cards[random], cards[i]];
    }
}

function shufflecards(){
    let playerlength=document.getElementById('length').value

    const cards = [
        'HeartsA', 'Hearts2', 'Hearts3', 'Hearts4', 'Hearts5', 'Hearts6', 'Hearts7', 'Hearts8', 'Hearts9', 'Hearts10', 'HeartsJ', 'HeartsQ', 'HeartsK',
        'SpadesA', 'Spades2', 'Spades3', 'Spades4', 'Spades5', 'Spades6', 'Spades7', 'Spades8', 'Spades9', 'Spades10', 'SpadesJ', 'SpadesQ', 'SpadesK',
        'DiamondsA', 'Diamonds2', 'Diamonds3', 'Diamonds4', 'Diamonds5', 'Diamonds6', 'Diamonds7', 'Diamonds8', 'Diamonds9', 'Diamonds10', 'DiamondsJ', 'DiamondsQ', 'DiamondsK',
        'ClubsA', 'Clubs2', 'Clubs3', 'Clubs4', 'Clubs5', 'Clubs6', 'Clubs7', 'Clubs8', 'Clubs9', 'Clubs10', 'ClubsJ', 'ClubsQ', 'ClubsK'
      ];
 
      shuffle(cards);

    const player= new Array(playerlength)
    for (let i = 0; i < playerlength; i++) {
        player[i] = [];
    }

    for (let i=0;i<playerlength;i++){
    player[i]= cards.filter((element,index)=>{
      if(index%playerlength==i)
        return true
    })

    const  play=document.getElementById('player')
    play.innerHTML = ''; // Clear any existing content

    for (let i = 0; i < playerlength; i++) {
        const newDiv = document.createElement('div');
        newDiv.innerText = `Player ${i + 1}: ${player[i].join(', ')}`;
        newDiv.classList.add('player');
        play.appendChild(newDiv);
    }
}

}


//array of objects
const fruit=[{name:'apple',color:'red'},
    {name:'apreeple',color:'rsfed'},
    {name:'ffapple',color:'rssed'},{name:'appldse',color:'black'}
]
console.log(fruit[3].name)
fruit.push({name:'sdc',color:'adsc'})
console.log(fruit)
//now same like arrays
let fruitname=fruit.map((ff)=>{

    return ff.name
})

fruitname=fruit.reduce((max, element)=>{
return max.calories>element.calories?max:element
})
console.log(fruitname)

//nested objects
const manxe={
    address:{
        thegana:'city',
        bitch:"la  chup"
    }
}
for(const property in manxe.address){
    console.log(manxe.address[property])
}

class Mom{
    constructor(name, ...address){
        this.name = name
        this.address=new Address(...address)
    }
}
class Address{
    constructor(city, country){
        this.city= city
        this.country=country
    }
}
const mom1=new Mom('name','bhakrpa','nepal')
console.log(mom1.name, mom1.address.city, mom1.address.country)

//destructuring in javascript  extract values from arrays and objects and assign them to variable in a convenient way
// [] for array {} for objects
let a =1, b=3;
[a,b]=[b,a]
console.log(a,b)

let color = ['color', 'scc','bhjbh','hjjk'];
[color[0], color[1]] = [color[1], color[0]];
console.log(color);

const [firstColor,secondColor, ...extraColors]=color
console.log(extraColors)

function display({firstName,secondName, job='unemployed'}){
    console.log(firstName,secondName, job)
}

const person11={
    firstName:'sponeuu',
    secondName:'masmkm'
}

const person2={
    firstName:'dgfoneuu',
    secondName:'dssmkm'
}

const {firstName,secondName, job='unemployed'}= person11
console.log(firstName,secondName,job)

display(person2)


//inheritance
class Animal{
    eat(){
        console.log('eating')
    }
}
class Rabbit extends Animal{

}
const rab=new Rabbit()
rab.eat();

//super classs
class Animal1{
    constructor(){
console.log('super constructor')
    }
    eat(){
        console.log('eating')
    }
}
class Rabbit1 extends Animal1{
  constructor(name, age){
    super();
    this.name=name
    this.age=age
  }
}
const rabbit=new Rabbit1()


//getter= special method that makes a property readable 
//setter = speical method that makes a property writable 
//validate and modifying the value when creating an object

class Rectangle{
    constructor(width,height){
        this.width=width
        this.height=height
    }
    set width(newwidth)
{
    if(newwidth>0){
        this._width= newwidth
    }
    else{
        console.error('must be positive')
    }
}
set heigth(newheight)
{
    if(newheight>0){
        this._height= newheight
    }
    else{
        console.error('must be positive')
    }
}
get width(){
    return this._width;
}

get heigth(){ 
    return this._heigth;
}
get area(){
    return this._width* this._height
}
}
const rec1= new Rectangle(1,2)
console.log(rec1.height, rec1.width, rec1.area)


//static
class person{
    static PI=3.14
    static display(){
        console.log('im in a static function', person.PI) //PI matra chai chindaina
    }
}
person.display()
console.log(person.PI)


//class
class Product{
    constructor(name,price){
        this.name=name
        this.price=price
    }
    displayProduct(){
        console.log(this.name, this.price)

    }
} let p1=new Product('sd',2)
p1.displayProduct();


const person1={
    firstName:'supriya',
    lastName:'poudelll',
    sayHello:function(){console.log('hi i am spongebob')}
}
person1.sayHello()



//.reduce() reduces array to a single value
const prices=[23,32,3232,3232]
let total=prices.reduce((accumulator,element)=>{
    return accumulator+element // maybe return Math.Min(accumulator,element)
})
console.log(total)

//filter()
let numb=[23,3,3,23,32,2]
let evennum= numb.filter((element)=>{
if (element%2===0)
    return element
})
console.log(evennum)

//.map()
let num=[23,3,3,23,3]
let newnum=num.map(
    (element)=>{
        element=Number(element)
        element *=element
        return element
    }
)
console.log(newnum)

//foreach
let array=[12,23,24,2]
array.forEach((index)=>{
    console.log(index)
})
let fruits=['appe','banana']
fruits.forEach((element)=>{
    console.log(element.toUpperCase())
})


//callback
hello(bye,2)
function hello(callback,x){
    let result = x+2
    callback(result);
}
function bye(result){
    console.log(result)
}

setTimeout(()=>{
    console.log('timeout')
},3000)



//passwordgenerator
function generatepassword(pwlength,includelowercases,includeuppercases,includenumbers,includesymbols){
  
    const lowercasecharacters='abcdefghijklmnopqrstuvwxyz'
    const uppercasecharacterss='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numberchars='0123456789'
    const symbolchars='!@#$%^&*'
    let allowedcharacters=''
let password=''
allowedcharacters+=includelowercases?lowercasecharacters:''
allowedcharacters+=includeuppercases?uppercasecharacterss:''
allowedcharacters+=includenumbers?numberchars:''
allowedcharacters+=includesymbols?symbolchars:''
    
if(pwlength<1){
    alert('atleast 1')
}
else{
    for (let i = 0; i < pwlength; i++) {
        let randomindex = Math.floor(Math.random() * allowedcharacters.length);
        password+=allowedcharacters.charAt(randomindex)
    }
    
}

return password;

}

const length= document.getElementById('number')
const includelowercases=true;
const includeuppercases=true
const includesymbols=true
const includenumbers=true


document.getElementById('Numbersubmit').addEventListener('click',()=>{
   pwlength=Number(length.value)
   console.log(pwlength)
    const password =generatepassword(pwlength,includelowercases,includeuppercases,includenumbers,includesymbols);

    document.getElementById('passwordresult').innerText= password
    
})


//dice roller
//images.push(`<img src ="diceimages/${value}.png"`)



//htmlprogram for restspread operator
const fullname=document.getElementById('namee')
document.getElementById('Namesubmit').addEventListener('click',() => {
    let final=[...fullname.value].join('-')
    document.getElementById('nameresult').innerText=final 
})
   

//rest parameters
function openfridge(...foods){ //designed to accept any number of elements and foods comes out as an array
    console.log(foods)
}
const food1='pizza'
const food2='burger'

openfridge(food1,food2) //food will be an array of elements food1 and food2

function sum(...numbers){
    let result=0;
    for(let number of numbers){
        result+=number
    }
    return result;
}
console.log(sum(1,2,3,4,5))


//spread operator
let numbers=[1,2,3,4]
let maximum=Math.max(...numbers) //spreads our array into different elements
let myname='supriya'
let letters=[...myname].join('-')
console.log(letters)


//temperature conversion
const input=document.getElementById('input')

const celtofar=document.getElementById('celtofar')

const fartocel=document.getElementById('fartocel')

const ssubmit= document.getElementById('submit')

ssubmit.addEventListener('click',()=>{
    let result=0
    if(celtofar.checked){
        result = Number(input.value)*9/5+32
        document.getElementById('result').textContent=result+'F'
    }
    if(fartocel.checked){
        result =(Number(input.value)-32)*5/9
        document.getElementById('result').textContent=result+'C'
    }
})

//card box 
const mycheckbox=document.getElementById('mycheckbox');
const visabtn=document.getElementById('visabtn');
const mastercardbtn=document.getElementById('mastercardbtn');
const paypalbtn=document.getElementById('paypalbtn');
const subresult=document.getElementById('subresult')
const payresult=document.getElementById('payresult')

const submit=document.getElementById('btn')

5
submit.addEventListener('click',()=>{
    if (mycheckbox.checked){
        subresult.textContent="you are subscribed"
    }
    else{
        subresult.textContent="you are not subscribed"
    }

    if(visabtn.checked){
        payresult.textContent="You is visa"
    }
    else if(mastercardbtn.checked){
        payresult.textContent="You is mastercard"
    }
    else if(paypalbtn.checked){
        payresult.textContent="You is paypal"
    }
    else{
        payresult.textContent="You is not select payment type"
    }
})

const username= "asd ddc"
let result = username.startsWith('a')
console.log(result)
console.log(username.slice(1,5)) //so display is char at 1 2 3 4 
console.log(username.slice(0, username.indexOf(' ')))
console.log(username.slice(username.indexOf(' ')+1))

result= username.includes('a')
console.log(result)

let phonenumber='01-5133119'
result = phonenumber.replaceAll('-','')
console.log(phonenumber,result)
console.log(phonenumber.padStart(12,'*'))


let arrays=['s','s','e']
console.log(arrays.indexOf('s'))


// let yourname='';
// while(yourname===""||yourname===null)
// {
//     yourname=prompt('your name ')
// }
// console.log(yourname)

// isnumber=Number(yourname)

// DOM: document object Model  
// object{} that represent the page your see in the web browser and provides you with an API to interact with it 
const h4lelements= document.getElementsByTagName('h4')
for (h4lelement of h4lelements){
    h4lelements.style.backgroundColor='yelllow'
}

//queryselector first element or null

//dom navigation
// const element = document.getElementById('id')
// const firstchild=element.firstElementChild
// element.lastElementChild

// nextElementChild
// previousElementSibling
// parentElement
// children

//document.body.insertBefore(h4lelements, body)

const mouseevents=document.getElementById('mouseevents')
mouseevents.addEventListener('click',()=>mouseevents.textContent
='you clicked me')

mouseevents.addEventListener('mouseover',()=>mouseevents.textContent
='you over me')

mouseevents.addEventListener('mouseout',()=>mouseevents.textContent
='you abandoned me')

//eventlistener
document.addEventListener('keydown',(event)=>mouseevents.textContent
=  `${event.key} was pressed`)



//hideshow element
// Hide/Show element
const Mybutton = document.getElementById('Mybutton');
const box = document.getElementById('boxxx');
let isvisible = true;

Mybutton.addEventListener('click', (event) => {
    if (isvisible) {
        box.style.display = 'none'; // Hide the element
        Mybutton.textContent = "Show";
        isvisible = false; // Update the state
    } else {
        box.style.display = 'block'; // Show the element
        Mybutton.textContent = "Hide";
        isvisible = true; // Update the state
    }
});


//classlist
// const mybutton= document.getelementbyid();
// Mybutton,addeventlistener('click',(e)=>{
//     e.target.classlist.toggle('hove')
//     e.target.classlist.replace('enabble','disabled') 
//     if(e.target.classlist.contains('disabled')){ condition}
// })



//callbackhell
// function task1(callback){
//     setTimeout(console.log('task 1'),1000);
//     callback();
// }
// function task2(callback){
//     console.log('task 2')
//     callback();
// }
// function task3(callback){
//     console.log('task 3')
//     callback();
// }

// task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             console.log('all tasks completed')
//         })
//     })
// })

console.log(34)
//asynawait
let dog=!false
function task1(){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            if(dog){      
    resolve('task 1');
            }
            else{
                reject
                ('no task 1')
            }
        },1000);

    })}
function task2(){
    
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            if(dog){      
    resolve('task 2');
            }
            else{
                reject
                ('no task 1')
            }
        },1000);
})}
function task3(){
    
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            if(dog){      
    resolve('task 3');
            }
            else{
                reject
                ('no task 1')
            }
        },1000);
    })
}

async function alltasks(){
try{
    const task1result=await task1();
    console.log(task1result);

    const task2result=await task2();
    console.log(task2result);

    const task3result=await task3();
    console.log(task3result);

    console.log('alltasks done')
}
catch(error){
    
}
}
alltasks();


//JSON FILES
// JSON.stringify()=> converts a js object to a JSON File
// JSON.parse() => converts a JSON string to a js objrcts


//fetch
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu").then(response=>response.json()).then(data=>console.log(data))
// .catch(error=>console.log(error));

async function fetchData(){
    try{

        const pokemonName=document.getElementById("pokemonName").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

    if (!response.ok){
        throw new Error("could not fetch resource")
    }    
    const data = await response.json();
    const pokemonSprite= data.sprites.front_default;
    const imageElement=document.getElementById('pokemonSprite');
    imageElement.src=pokemonSprite;
    imageElement.style.display="block";
}
    catch(error){
        console.log(error)

    }
}


//weatherapi

const weatherForm=document.querySelector('.weatherForm')
const cityInput= document.querySelector('.cityInput')
const card= document.querySelector('.card')
const apikey="f9934dde59715442ee82b54e56913a4b"

weatherForm.addEventListener("submit", async event=>{
    event.preventDefault();
   console.log('in add event')
   const city = cityInput.value;
    if(city){
        try{
            const weatherData= await getWeatherData(city);
            displayWeather(weatherData)
        }
        catch(error){
            displayError(error)
        }
        
    }
    else{
        displayError("no city");
    }
})

async function getWeatherData(city){
const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
const response = await fetch(apiUrl);
if(!response.ok){
    throw new Error('Couldnt fetch data')
}
return await response.json()
;}

function displayWeather(data){
const {name:city,main:{temp,humidity},weather:[{description,id}]}=data;
card.textContent=''
card.style.display='flex'

const cityDisplay=document.createElement('p');
const tempDisplay=document.createElement('p');
const humidityDisplay=document.createElement('p');
const descriptionDisplay=document.createElement('p');
const emoji=getWeatherEmoji(id)

cityDisplay.textContent = `${city}\nTemperature: ${temp}K\nHumidity: ${humidity}%\n${description} ${emoji}`;
cityDisplay.innerHTML = cityDisplay.textContent.replace(/\n/g, "<br>");


cityDisplay.classList.add("weatherdisplayy")

card.appendChild(cityDisplay)

}

function getWeatherEmoji(weatherId) {
    switch(true) {
        case (weatherId >= 200 && weatherId < 300):
            return "⛈️";
        case (weatherId >= 300 && weatherId < 400):
            return "🌧️";
        case (weatherId >= 500 && weatherId < 600):
            return "🌦️";
        case (weatherId >= 600 && weatherId < 700):
            return "❄️";
        case (weatherId >= 700 && weatherId < 800):
            return "🌫️";
        case (weatherId === 800):
            return "☀️";
        case (weatherId >= 801 && weatherId < 810):
            return "☁️";
        default:
            return "❓";
    }
}

function displayError(message){
    const errorDisplay= document.createElement('p');
    errorDisplay.textContent=message;
    card.textContent=''
    card.style.display="flex";
    card.appendChild(errorDisplay);
}