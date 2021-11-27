//generate manager card
const generateManagerCard = function (manager) {
    return `
<div class="card" style="width: 18rem;">

  <div class="card-body">
    <h5 class="card-title">${manager.name}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID:${manager.id}</li>
    <li class="list-group-item">${manager.email}</li>
    <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
  </ul>
</div>`
};

//generate Engineer card
const generateEngineerCard = function (engineer) {
    return `
    <div class="card" style="width: 18rem;">
    
      <div class="card-body">
        <h5 class="card-title">${engineer.name}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID:${engineer.id}</li>
        <li class="list-group-item">Email: ${engineer.email}</li>
        <li class="list-group-item">GitHub: ${engineer.github}</li>
      </ul>
    </div>`
};


//generate Intern card
const generateInternCard = function (intern) {
    return `
    <div class="card" style="width: 18rem;">
    
      <div class="card-body">
        <h5 class="card-title">${intern.name}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID:${intern.id}</li>
        <li class="list-group-item">Email: ${intern.email}</li>
        <li class="list-group-item"> School: ${intern.school}</li>
      </ul>
    </div>`
};

// push array to page
generateHTML = (data) => {
    //array for cards
    pageArray = [];
    console.log(data)
  

    for (let i = 0; i < data.length; i++) {
      const teamMember = data[i];
      const role = teamMember.getRole();
       
      ;

        //mangager function 
        if (role === "Manager") {
            const managerCard = generateManagerCard(teamMember);
            pageArray.push(managerCard);
        }

        if (role === "Engineer") {
            const engineerCard = generateEngineerCard(teamMember);
            pageArray.push(engineerCard);
        }
        else {
            const internCard = generateInternCard(teamMember);

            pageArray.push(internCard);
        };
      }
    

//join the cards 
const employeeCards = pageArray.join("")


//return to generate html

const generateTeam = generateTeamPage(employeeCards) 
    return generateTeam;
};



// generate html page 
const generateTeamPage = function (employeeCards) {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
      <nav class="navbar" id="navbar">
      <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
  </nav>

      </header>
      <main>
         
      <div class="container">
      <div class="row justify-content-center" id="team-cards">
          <!--Team Cards-->
          ${employeeCards}
      </div>
  </div>
      </main>
      
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <!-- JavaScript Bundle with Popper -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>
`;
}

// export to index
module.exports = generateHTML;