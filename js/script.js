/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

const numberPerpage = 9;
const ul = document.querySelector(".link-list");

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

const addPagination = (studentList) => {
  // Determines the number of pages from the length of array and number per page
  pageNumbers = Math.ceil(studentList.length / numberPerpage);

  for (let i = 1; i < pageNumbers + 1; i++) {
    const li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML = `<button type="button">${i}</button> `;
  }
  const firstLi = ul.firstElementChild.firstElementChild;
  firstLi.className = "active";

  ul.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const activeClass = document.querySelector(".active");
      activeClass.className = "";
      e.target.className = "active";
      let pageNumber = e.target.textContent;
      showPage(data, pageNumber);
      window.scrollTo(0, 0);
    }
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

  // get search input

  let search = document.querySelector("#search");
  let searchValue = "";
  let searchResults = [];
  search.addEventListener("keyup", (e) => {
    searchValue = e.target.value;

    searchResults = data.filter((x) => {
      let fullName = x.name.first.toLowerCase() + x.name.last.toLowerCase();

      if (fullName.includes(searchValue)) {
        searchResults.push(x);

        showPage(searchResults, 1);
        window.addEventListener("load", function () {
          console.log(searchResults);
        });
      }
    });
  });
};

// Call functions
searchBox(data);
showPage(data, 1);
addPagination(data);
