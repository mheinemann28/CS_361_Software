var step = 0;
var explainText = document.getElementById('explain');

function noGuided(){
  document.getElementById('btns').remove();
  explainText.textContent = "Thanks for stopping by, visit this page whenever you need help.";
}

function startGuided(){
  switch (step) {
    case 0:{
      document.getElementById('btns').remove();
      document.getElementById('nextBtn').style.visibility = "visible";
      explainText.textContent = "Welcome to the guided overview of EDGEGATE, we will go over the major functionality of this website.";
      break;
    }
    case 1:{
      document.getElementById('home').style.backgroundColor = "#5856d6";
      explainText.textContent = "This is the Home page. It is your dashboard for progress/notifications and access to the discussion board.";
      break;
    }
    case 2:{
      document.getElementById('home').style.backgroundColor = null;
      document.getElementById('courses').style.backgroundColor = "#5856d6";
      explainText.textContent = "This is the Courses page. This is where your lectures, projects, and interview questions are located.";
      break;
    }
    case 3:{
      document.getElementById('courses').style.backgroundColor = null;
      document.getElementById('profile').style.backgroundColor = "#5856d6";
      explainText.textContent = "This is the Profile page. This is where you change your personal account settings.";
      break;
    }
    case 4:{
      document.getElementById('profile').style.backgroundColor = null;
      document.getElementById('help').style.backgroundColor = "#5856d6";
      explainText.textContent = "This is the Help page. This is where you guided tour of all the website features.";
      break;
    }
    case 5:{
      document.getElementById('help').style.backgroundColor = null;
      document.getElementById('logout').style.backgroundColor = "#5856d6";
      explainText.textContent = "This is the Logout button. This is where you logout out of your session.";
      break;
    }
    case 6:{
      document.getElementById('logout').style.backgroundColor = null;
      document.getElementById('nextBtn').remove();
      explainText.textContent = "This is the end of the guided tour. Stop by whenever you need help.";
      break;
    }
  }
  step++;
}