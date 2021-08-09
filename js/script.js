/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

// createLi();
/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

const numberPerpage = 9;

const showPage = (studentList, pageNumber) => {
  const ul = document.querySelector(".student-list");
  pageNumber = parseInt(pageNumber);
  startIndex = pageNumber * numberPerpage - numberPerpage;
  endIndex = pageNumber * numberPerpage;
  ul.innerHTML = "";

  for (let i = 0; i < studentList.length; i++) {
    if (i >= startIndex && i < endIndex) {
      student = studentList[i];
      //Card Goes in here (Template Literal)
      let html = `<li class="student-item cf">
                        <div class="student-details">
                           <img class="avatar" src="${student.picture.large}" alt="Profile Picture">
                           <h3>${student.name.first} ${student.name.last}</h3>
                           <span class="email">${student.email}</span>
                        </div>
                           <div class="joined-details">
                           <span class="date">Joined ${student.registered.date}</span>
                        </div>
                     </li> `;

      ul.insertAdjacentHTML("beforeend", html);
    }
  }
};

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

const ul = document.querySelector(".link-list");
const addPagination = (data) => {
  pageNumbers = Math.ceil(data.length / numberPerpage);

  for (let i = 1; i < pageNumbers + 1; i++) {
    const li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML = `<button type="button">${i}</button> `; //add active class
  }

  ul.addEventListener("click", (e) => {
    let number = e.target.textContent;
    showPage(data, number);
    window.scrollTo(0, 0);
  });
};

// create searchBox

const searchBox = (data) => {
  html = `<label for="search" class="student-search">
   <span>Search by name</span>
   <input id="search" placeholder="Search by name...">
   <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
 </label>`;
  const header = document.querySelector(".header");
  header.insertAdjacentHTML("beforeend", html);

  // put all names in an array
  let studentNames = [];
  for (let i = 0; i < data.length; i++) {
    let student = data[i];

    let studentName = student.name.first + " " + student.name.last;

    studentNames.push(studentName.toLowerCase());
  }
  // get search input

  let search = document.querySelector("#search");
  let searchValue = "";
  search.addEventListener("keyup", (e) => {
    searchValue = e.target.value;

    console.log(searchValue);
    let searchResults = [];
    searchResults = studentNames.filter((x) => x.includes(searchValue));
    let objects = [];
    let firstName;
    let lastName;
    if (searchResults.length < data.length) {
      console.log(`This is it ${searchResults.length}`);
      for (let i = 0; i < searchResults.length; i++) {
        let split = searchResults[i].split(" ");
        firstName = split[0];
        let lastName = split[1];
      }
      let object = data.find(
        (obj) => obj.name.first.toLowerCase() === firstName
      );
      console.log(object);
    }
  });

  console.log(studentNames);
};

// Call functions
searchBox(data);
showPage(data, 1);
addPagination(data);
