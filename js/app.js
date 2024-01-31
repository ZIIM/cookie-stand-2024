'use strict';

// HOURS 
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// shows 
function hour_list(){
    let table_body = document.getElementById('table-body');
    let table_row = document.createElement('tr');
    let empty_cell = document.createElement('td');
    table_row.appendChild(empty_cell);
  
    for(let hour = 0; hour < hours.length; hour++){
      let table_data = document.createElement('td');
      table_data.textContent = hours[hour];
      table_row.appendChild(table_data);
    }
  
    let total_cell = document.createElement('td');
    total_cell.textContent = 'Daily Location Total';
    table_row.appendChild(total_cell);
  
    table_body.appendChild(table_row);
  }
//   CITY CONSTRUCTOR takes in name min/max cust and avg cookies
  function City(city_name, min_cust, max_cust, avg_cookies){
    this.city_name = city_name;
    this.min_cust = min_cust;
    this.max_cust = max_cust;
    this.avg_cookies = avg_cookies;
  }
// ^^^^^ CITY CONSTRUCTOR ^^^^^

// city proto removes decimal
  City.prototype.amount_of_customers = function(){
    let customerAmount = Math.floor(Math.random() * (this.max_cust - this.min_cust + 1) + this.min_cust);

    return customerAmount;
  };

// city proto total cookeis purchased 
  City.prototype.cookies_purchased = function(){
    let cookies_purchased = Math.ceil(this.amount_of_customers() * this.avg_cookies);
    return cookies_purchased;
  };

// city proto drawa boxes/ tables aligns all the data in neat pretty boxes :D
  City.prototype.draw_row = function(){
    let total_cookies = 0;
    let table_body = document.getElementById('table-body');
    let table_row = document.createElement('tr');
  
    let city_name_cell = document.createElement('td');
    city_name_cell.textContent = this.city_name;
    table_row.appendChild(city_name_cell);
  
    for (let hour = 0; hour < hours.length; hour++) {
      let table_data = document.createElement('td');
      table_data.textContent = this.cookies_purchased();
      table_row.appendChild(table_data);
      total_cookies = this.cookies_purchased() + total_cookies;
    }
  
    let total_cell = document.createElement('td');
    total_cell.textContent = total_cookies;
    table_row.appendChild(total_cell);
  
    table_body.appendChild(table_row);
  };
  
// This was stolen from chatgpt and i looked at Ahmeds work for help
  function footer_row() {
    let table = document.getElementById('table-body');
    let number_of_columns = table.rows[0].cells.length;
    let totals = new Array(number_of_columns).fill(0);
  
    for (let rowIndex = 1; rowIndex < table.rows.length; rowIndex++) {
      let row = table.rows[rowIndex];
      for (let colIndex = 0; colIndex < number_of_columns; colIndex++) {
        let cellValue = parseInt(row.cells[colIndex].textContent) || 0;
        totals[colIndex] += cellValue;
      }
    }
// ^^^^^ chatgpt/ ahmeds work ends ^^^^^^^

// more tables //
    let footerRow = document.createElement('tr');
    footerRow.appendChild(document.createElement('td'));
  
    for (let i = 1; i < totals.length; i++) {
      let cell = document.createElement('td');
      cell.textContent = totals[i];
      footerRow.appendChild(cell);
    }
    table.appendChild(footerRow);
  }
  
  // attatching city constructor to a varibale approriate to the data
  let Seattle = new City('Seattle', 23, 65, 6.3);
  let Tokyo = new City('Tokyo', 3, 24, 1.2);
  let Dubai = new City('Dubai', 11, 38, 3.7);
  let Paris = new City('Paris', 20, 38, 2.3);
  let Lima = new City('Lima', 2, 16, 4.6);
  
  hour_list();
  Seattle.draw_row();
  Tokyo.draw_row();
  Dubai.draw_row();
  Paris.draw_row();
  Lima.draw_row();
  footer_row();
  

// function generateRandomCustomers() {
//     //math.floor function constructed with help from ChatGPT
//     return (
//       Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust
//     );
//   }
// // MOVED TO LINE 52 with minor changes
// // creates the avg cookies
// // function generateSales(){
// //   for(let i = 0; i < this.hours.length; i++){
// //     let customers = this.getRandomCustomers();
// //     let cookiesPurchased = customers * this.avgCookies;
// //     this.cookieSales.push(cookiesPurchased);
// //   }
// // }
// // creates the list with hours and sales
// function createUnorderedList(data, hours) {
//   let ul = document.createElement('ul');
//   for (let i = 0; i < data.length; i++) {
//     let li = document.createElement('li');
//     li.textContent = hours[i] + ': ' + parseInt(data[i]); // Use parseInt to remove decimal places
//     ul.appendChild(li);
//   }
//   return ul;
// }
// // get drawrow function
// // TAKEN FROM 07 Demo
// let bodyElement = document.getElementById('table-data');

// let tableRow = document.createElement('tr');
// bodyElement.appendChild(tableRow);

// function createCell(value, row) {
//     let cell = document.createElement('td');
//     cell.textContent = value;
//     row.appendChild(cell);
//   }
// // ^^^^^^^ TAKEN FROM 07 DEMO ^^^^^^^^^

// // CONSTRUCTOR FUNCTION BELOW
// function City(minCust, maxCust, AvgCookies,){
//     this.minCust = minCust;
//     this.maxCust = maxCust;
//     this.AvgCookies = AvgCookies;
//     this.row = document.createElement('tr');
// }

// // ?????????Prototype array?????????????
// City.prototype.hours = function(){

//     perhour = ['6am', '7am', '8am', '9am','10am','11am', '12pm','1pm', '2pm', '3pm', '4pm', '5pm',
//     '6pm', '7pm',];
//  } ;

// // Prototype table
// City.prototype.drawRow = function(){
//     createCell(this.minCust, this.row);
//     createCell(this.maxCust, this.row);
//     createCell(this.AvgCookies, this.row);
//     bodyElement.appendChild(this.row);
// }

// let Seattle = new City('Seattle',23,65,6.3);
// Seattle.drawRow();
// console.log(Seattle);

// //^^^^^^^^CONSTRUCTOR FUNCTION^^^^^^

// // seattle object
// let citySeattle = {
//     city: 'Seattle',
//     minCust: 23,
//     maxCust: 65,
//     avgCookies: 6.3,
//     document_id: document.getElementById('City-Seattle'),
//     getRandomCustomers: generateRandomCustomers,
//     // Make hours a global const at the top!
//     hours: [
//         '6am',
//         '7am',
//         '8am',
//         '9am',
//         '10am',
//         '11am',
//         '12pm',
//         '1pm',
//         '2pm',
//         '3pm',
//         '4pm',
//         '5pm',
//         '6pm',
//         '7pm',
//     ],
//     cookieSales: [],
//     projectedCookieSales: function () {
//       for (let i = 0; i < this.hours.length; i++) {
//         // REMEMBER TO ADD DEBUGGER IN LOOP
//         // debugger;
//         let customers = this.getRandomCustomers(); // generates random customers per hour
//         let cookiesPurchased = customers * this.avgCookies; // Getting amount of cookies purchased
//         // ADD TOTAL HERE!!!!!!
//         // let total = total + cookiesPurchased;
//         this.cookieSales.push(cookiesPurchased); // Putting our previously collected data into our empty array
//       }
//     },
//   };
//   citySeattle.getRandomCustomers();
//   citySeattle.projectedCookieSales(); // Calculate and stores sales for each hour open
//   console.log('Seattle sales:', citySeattle.cookieSales);


//   let seattleSalesList = createUnorderedList(citySeattle.cookieSales, citySeattle.hours); // list of sales with hours
// document.body.appendChild(seattleSalesList); // shows in html



// // TABLES

// //   let bodyElement = document.getElementById('table-data');
  
// //   let tableRow = document.createElement('tr');
// //   bodyElement.appendChild(tableRow);

// //   let tableCell1 = document.createElement('td');
// //   tableCell1.textContent = 'Seattle';

// // ^^^^ TABLES ^^^^



// // let cityTokyo = {
// //     name: 'Tokyo',
// //     mincost: 3,
// //     maxcost: 24,
// //     avgCookies: 1.2,
// //     getRandomCustomers: generateRandomCustomers,
// // }

// // let cityDubai = {
// //     name: 'Dubai',
// //     mincost: 11,
// //     maxcost: 38,
// //     avgCookies: 3.7,
// //     getRandomCustomers: generateRandomCustomers,
// // }

// // let cityParis = {
// //     name: 'Paris',
// //     mincost: 20,
// //     maxcost: 38,
// //     avgCookies: 2.3,
// //     getRandomCustomers: generateRandomCustomers,
// // }

// // let cityLima = {
// //     name: 'Lima',
// //     mincost: 2,
// //     maxcost: 16,
// //     avgCookies: 4.6,
// //     getRandomCustomers: generateRandomCustomers,
// // }

