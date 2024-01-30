'use strict'

function generateRandomCustomers() {
    //math.floor function constructed with help from ChatGPT
    return (
      Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust
    );
  }
// MOVED TO LINE 52 with minor changes
// creates the avg cookies
// function generateSales(){
//   for(let i = 0; i < this.hours.length; i++){
//     let customers = this.getRandomCustomers();
//     let cookiesPurchased = customers * this.avgCookies;
//     this.cookieSales.push(cookiesPurchased);
//   }
// }
// creates the list with hours and sales
function createUnorderedList(data, hours) {
  let ul = document.createElement('ul');
  for (let i = 0; i < data.length; i++) {
    let li = document.createElement('li');
    li.textContent = hours[i] + ': ' + parseInt(data[i]); // Use parseInt to remove decimal places
    ul.appendChild(li);
  }
  return ul;
}
// seattle object
let citySeattle = {
    city: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgCookies: 6.3,
    getRandomCustomers: generateRandomCustomers,
    hours: [
        '6am',
        '7am',
        '8am',
        '9am',
        '10am',
        '11am',
        '12pm',
        '1pm',
        '2pm',
        '3pm',
        '4pm',
        '5pm',
        '6pm',
        '7pm',
    ],
    cookieSales: [],
    projectedCookieSales: function () {
      for (let i = 0; i < this.hours.length; i++) {
        let customers = this.getRandomCustomers(); // generates random customers per hour
        let cookiesPurchased = customers * this.avgCookies; // Getting amount of cookies purchased
        this.cookieSales.push(cookiesPurchased); // Putting our previously collected data into our empty array
      }
    },
  };
  citySeattle.getRandomCustomers();
  citySeattle.projectedCookieSales(); // Calculate and stores sales for each hour open
  console.log('Seattle sales:', citySeattle.cookieSales);


  let seattleSalesList = createUnorderedList(citySeattle.cookieSales, citySeattle.hours); // list of sales with hours
document.body.appendChild(seattleSalesList); // shows in html

// let cityTokyo = {
//     name: 'Tokyo',
//     mincost: 3,
//     maxcost: 24,
//     avgCookies: 1.2,
//     getRandomCustomers: generateRandomCustomers,
// }

// let cityDubai = {
//     name: 'Dubai',
//     mincost: 11,
//     maxcost: 38,
//     avgCookies: 3.7,
//     getRandomCustomers: generateRandomCustomers,
// }

// let cityParis = {
//     name: 'Paris',
//     mincost: 20,
//     maxcost: 38,
//     avgCookies: 2.3,
//     getRandomCustomers: generateRandomCustomers,
// }

// let cityLima = {
//     name: 'Lima',
//     mincost: 2,
//     maxcost: 16,
//     avgCookies: 4.6,
//     getRandomCustomers: generateRandomCustomers,
// }

