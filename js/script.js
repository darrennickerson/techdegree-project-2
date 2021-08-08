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



const showPage = (pageNumber, studentList) => {
pageNumber = parseInt(pageNumber);
   startIndex = (pageNumber * 9) - 9;
   endIndex = pageNumber * 9

   const ul = document.querySelector('.student-list');
   ul.innerHTML = ''; 

   for (let i = 0; i < studentList.length; i++) {
      if(i >= startIndex && i < endIndex){
         student = studentList[i];
            //Card Goes in here (Template Literal)
            let html = `  <li class="student-item cf">
            <div class="student-details">
              <img class="avatar" src="${student.picture.large}" alt="Profile Picture">
              <h3>${student.name.first} ${student.name.last}</h3>
              <span class="email">${student.email}</span>
            </div>
            <div class="joined-details">
              <span class="date">Joined ${student.registered.date}</span>
            </div>
          </li>
`        

            ul.insertAdjacentHTML('beforeend', html)
      };
   
   };

};



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

const addPagination = () => {

   const pagination = document.querySelector('.link-list');
   pageNumbers = Math.ceil(data.length / 9);

   for (let i = 1; i < pageNumbers + 1; i++ )  {
   const li = document.createElement('li');
   pagination.appendChild(li);
   li.innerHTML =  `<button type="button">${i}</button> ` //add active class 
     
   }
   const li = document.querySelector('.link-list');
   li.addEventListener('click', (e)  => {
      
      let number = e.target.textContent;
      showPage(number, data);
      window.scrollTo(0,0);
  });

}

// Call functions
showPage(1, data);
addPagination();