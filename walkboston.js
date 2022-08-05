// function renderPosts(boston, container) {
//   const people = boston.data;
//   const len = boston.data.length;
//   let html = '';
//   for (let i = 0; i < len; i++) {
//     html +=
//       '<li class="post">' + '<h2>' + people[i][8] + '</h2>' + '<h3>' + people[i][11] + '</h3>';
//   }


//   container.innerHTML = '<ul id = "data">' + html + '<ul/>';

  // function renderTopSalaries(boston, container){
  //   var people = boston.data; //people now represents array
  //   let html = ''; //creating an empty string that will later be appended
  //   var topSalaries = people.sort((a, b) => b[11] - a[11]).slice(0, 5); //sorting the top 5 salaries in descending order
  //   var len = topSalaries.length; // the length of the top 5 salaries array
  //   for(let i = 0; i < len; i ++){//the array items are attached to the html string
  //     html += 
  //     '<li class = "top">' + 
  //      '<h2>' +  topSalaries[i][8] + '</h2>' +
  //      '<h3>' + topSalaries[i][11] + '</h3>';
  //   }
  //   container.innerHTML = '<ul id = "topSalaries">' + html + '</ul>';
  // }


  function renderTopEmployees(boston, container) {
    var people = boston.data;//people now represents array
    var topEmployees = people.filter((a) => a[11] > 200000);//filter through the array to find employees that make over 200,000
    const len = topEmployees.length;
    var html = '';
    for (let i = 0; i < len; i++) {//for the length of employees found, add to string
      html +=
        '<li class="top">' +
        '<h2>' +
        topEmployees[i][8] +
        '</h2>' +
        '<h3>' +
        topEmployees[i][11] +
        '</h3>';
    }
  
    container.innerHTML += '<ul id = "topEmployees">' + html + '</ul>';
  }
  
 

  // TODO: add code to display the html variable inside a ul element with id="data"
  // Hint: you can use the container parameter's innerHTML property to insert Html tags

// renderPosts(boston, document.getElementById('container'));


// renderTopSalaries(boston, document.getElementById('container'));
renderTopEmployees(boston, document.getElementById('container'));