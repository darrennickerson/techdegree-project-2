/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

const ul = document.querySelector('.student-list');



const createLi = () => {
   for(let i = 0; i < data.length; i++) {
      student = data[i];
      const li = document.createElement('li');
      li.className = 'student-item cf';
      const div = document.createElement('div');
      div.className = 'student-details';
      
      const headingThree = document.createElement('h3');
      headingThree.textContent = `${student.name.title}  ${student.name.first} ${student.name.last}`;
      const span = document.createElement('span');
      span.className = 'email';
      span.innerHTML = student.email;
      const divJoined = document.createElement('div');
      divJoined.className = 'joined-details';
      divJoined.innerHTML = `<span class="date">${student.registered.date}</span>`;
      let img = document.createElement('img');
      const createImg = (src, alt, class_name) => {
            img.setAttribute('src', src);
            img.setAttribute('alt', alt);
            img.className = class_name; 
      };

      createImg(student.picture.medium, 'Profile Picture', 'avatar');
      
      
      ul.appendChild(li);
      li.appendChild(div);
      div.appendChild(img);
      
      img.parentNode.insertBefore(headingThree, img.nextSibling);
      headingThree.parentNode.insertBefore(span, headingThree.nextSibling);
      span.parentNode.insertBefore(divJoined, span.nextSibling);
      

   }
};
createLi();

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

const showPage = () => {

}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
