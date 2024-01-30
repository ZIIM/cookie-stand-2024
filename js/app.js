'use strict'

function generateRandomCustomers() {
    //math.floor function constructed with help from ChatGPT
    return (
      Math.floor(Math.random() * (this.maxcost - this.mincost + 1)) + this.mincost
    );
  }
  
let citySeattle = {
    name: 'Seattle',
    mincost: 23,
    maxcost: 65,
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
}

// let cityTokyo = {
//     name: 'Tokyo',
//     mincost: 3,
//     maxcost: 24,
//     avgCookies: 1.2,
//     getRandomCustomers: generateRandomCustomers
// }

// let cityDubai = {
//     name: 'Dubai',
//     mincost: 11,
//     maxcost: 38,
//     avgCookies: 3.7,
//     getRandomCustomers: generateRandomCustomers
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

