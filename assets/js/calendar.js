// The array below will probably be useful.
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dateInput = document.querySelector('input#month');

dateInput.onchange = () => createCalendar(dateInput.value);

createCalendar = date => {
  // Clear previous output
  document.querySelector('div.output').innerHTML = null;
  // Create a Date object set at that date
  date = new Date(date);
  date.setDate(date.getDate() + 1);

  // Grab the number of the month and year
  let dateMonth = date.getMonth();
  let dateYear = date.getFullYear();

  // Set the date to the Sunday of the week the month begins on
  date.setDate(date.getDate() - date.getDay());

  // Create a multidimensional array of the date
  let month = [];
  do {
    let week = [];
    for (let i = 0; i < 7; i++) {
      (date.getMonth() != dateMonth) ? week.push(null) : week.push(date.getDate());
      date.setDate(date.getDate() + 1);
    }
    month.push(week);
  } while (date.getMonth() == dateMonth);

  // Create the month table
  let table = document.createElement('table');
  table.style.height = '700px';
  let thead = document.createElement('thead');
  thead.innerHTML = `
    <tr>
      <th colspan="7">${monthNames[dateMonth]} ${dateYear}</th>
    </tr>
    <tr>
      <th>Sun<span class="long">day</span></th>
      <th>Mon<span class="long">day</span></th>
      <th>Tue<span class="long">sday</span></th>
      <th>Wed<span class="long">nesday</span></th>
      <th>Thu<span class="long">rsday</span></th>
      <th>Fri<span class="long">day</span></th>
      <th>Sat<span class="long">urday</span></th>
    </tr>`;
  let tbody = document.createElement('tbody');
  // For every week...
  for (let i = 0; i < month.length; i++) {
    let tr = document.createElement('tr');
    // For every day...
    for (let j = 0; j < month[i].length; j++) {
      let td = document.createElement('td');
      (month[i][j] == null) ? td.classList.add('gray') : td.innerText = month[i][j];
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }

  // Append all
  table.append(thead, tbody);
  document.querySelector('div.output').appendChild(table);
}

// Show the current calendar on load
let now = new Date();
let formattedDate = `${now.getFullYear()}-${now.getMonth() + 1}`;
dateInput.value = formattedDate;
createCalendar(formattedDate);