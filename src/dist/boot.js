function activateLink(link) { 
    const navLinks = document.querySelectorAll('.nav-link'); 
    navLinks.forEach(navLink => { 
      navLink.classList.remove('active'); 
    }); 
    link.classList.add('active'); 
  } 

  function toggleMenu() { 
    const navbarNav = document.querySelector('#navbarNav'); 
    navbarNav.classList.toggle('show'); 
  }

  function sendMessage(event) { 
    event.preventDefault();  
   
    var name = document.getElementById("fullname").value; 
    var email = document.getElementById("email").value; 
    var phone= document.getElementById("phone").value;
    var message = document.getElementById("message").value; 
   
    var subject = encodeURIComponent("Contact Me"); 
    var body = encodeURIComponent("Name: " + name + "\nEmail: " + email+ "\nPhone: " + phone + "\nMessage: " + message); 
    var mailtoURL = "mailto:asratmaedot@gmail.com?subject=" + subject + "&body=" + body; 
   
     
    window.location.href = mailtoURL; 
  }
  function redirect() {
    window.location.href = "contact.html";
  }