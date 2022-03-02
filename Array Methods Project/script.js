'use strict';


const btnsContainer =  document.querySelector('.btns-container')

const infoContainer =  document.querySelector('.info-container')

const randomButton = document.querySelector('#add-user');

const doubleButton = document.querySelector('#double-money');

const showButton = document.querySelector('#show-mill');

const sortButton = document.querySelector('#sort-richest');

const calculateButton = document.querySelector('#calculate-rich');



let data = []




// This is a function is for doubling  money
const doubleMoney =  function (){
    data = data.map((user) => {
        return {...user, money: user.money*2}
    })
    updateUI()
}

// This is a function for sorting money
const sortByRichest =  function(){
    data.sort((a,b) => b.money -  a.money);
    updateUI()
}

// This is a function for filtering millionares
const filterByMillionares = function(){
    data = data.filter((user) =>  user.money > 1000000)
    updateUI()
}

// This is a function used to calculate total wealth
const calculateWealth =  function(){

    let wealth = data.reduce((a,b) => a+b.money,0);
    let html = `<div class="title-container">
         <h2> Total Wealth:</h2>
         <h2> ${formatCurrency(wealth)} </h2>
    </div>`

    infoContainer.insertAdjacentHTML('beforeend',html)

}
// This function is for formatting number to currencies
const formatCurrency = function(num){
    let formatter = new Intl.NumberFormat('en-Us',{
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits:0,
    })
    return formatter.format(num)
}


// This is a function for updating the UI
const updateUI =  function(providedData = data){
    infoContainer.innerHTML = ` <div class="title-container">
    <h2 class="person">Person</h2>
    <h2 class="wealth"> Wealth</h2></div> <hr>`              
    let html = ``

    providedData.forEach((curr) => {
        html = `<div class="title-container">
              <h2> ${curr.name}</h2>
              <h2> ${formatCurrency(curr.money)}</h2>
        </div>`
        infoContainer.insertAdjacentHTML('beforeend',html)
    })

}

// Used to add the data into the data array
const addData =  function(obj){
   
    data.push(obj);
    // We are here updating the UI
    updateUI();
}


// This is used to fetch random userNames
async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
  
    const user = data.results[0];
  
    // Creates new User object
    const newUser = {
      name: `${user.name.first} ${user.name.last}`,
      money: Math.floor(Math.random() * 1000000)
    };
  
    addData(newUser); // We call this function
  }

getRandomUser()
getRandomUser()
getRandomUser()



// Event Listeners
randomButton.addEventListener('click',getRandomUser);

doubleButton.addEventListener('click',doubleMoney);

sortButton.addEventListener('click',sortByRichest);

showButton.addEventListener('click',filterByMillionares);

calculateButton.addEventListener('click',calculateWealth)