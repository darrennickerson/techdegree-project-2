/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering

Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

const numberPerpage = 9;
const ulStudent = document.querySelector(".student-list");
const ulLink = document.querySelector(".link-list");

const showPage = (studentList, pageNumber) => {
  pageNumber = parseInt(pageNumber);
  startIndex = pageNumber * numberPerpage - numberPerpage;
  endIndex = pageNumber * numberPerpage;
  ulStudent.innerHTML = "";

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

      ulStudent.insertAdjacentHTML("beforeend", html);
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
    ulLink.appendChild(li);
    li.innerHTML = `<button type="button">${i}</button> `;
  }
  const firstLi = ulLink.firstElementChild.firstElementChild;
  firstLi.className = "active";

  ulLink.addEventListener("click", (e) => {
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
  let search = document.querySelector("#search");
  let searchValue = "";
  let searchResults = [];
  let studentObjectArray = [];
  search.addEventListener("keyup", (e) => {
    searchValue = e.target.value;

    // Pick out the students who match the search results
    searchResults = data.filter((x) => {
      let fullName = x.name.first.toLowerCase() + x.name.last.toLowerCase();

      // if the student matches put them into an array
      if (fullName.includes(searchValue.toLowerCase())) {
        searchResults.push(x);
        studentObjectArray = searchResults;
        showPage(searchResults, 1);
        ulLink.innerHTML = "";
        addPagination(studentObjectArray);
      }
      //If there are no search matches
      if (studentObjectArray.length === 0 || studentObjectArray.length === 42) {
        ulStudent.innerHTML = `<h1>No Results</h1> <p>Try your search again or <a href="/">Go Back</a></p>`;
      }
    });
    console.log(studentObjectArray);
  });
};

// Call functions
searchBox(data);
showPage(data, 1);
addPagination(data);
