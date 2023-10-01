$("section").hide();
$(document).ready(function(){
    $("#intro").hide(); 
    $("#loader").fadeOut("medium");  
    $("section").fadeIn("slow");
    setTimeout(function(){ 
        $("#intro").slideDown("slow");
        },2000);
  });
  $(document).ready(function(){  
    setTimeout(function(){
        $("#hi").fadeOut("medium");
        $("#hi").fadeIn("slow");
        $("#hi").fadeOut("medium");
        $("#hi").fadeIn("slow");
    },500);
});


function projects(){
    document.getElementById('projects').scrollIntoView();
}

function contactMe(){
    var mailID = prompt("Enter your Email ID.");
    if(mailID === null || mailID === "")
        {
            alert("You have not entered your Email ID. Please try again.")
        }
    else{
        alert("Thank you, we will get in touch with you shortly.");  
    }   
}

function about()
{
    document.getElementById('resume').scrollIntoView();
}

function diceWar(){
    window.open("https://h11tesh.github.io/dicegame/");
}

function drumKit(){
    window.open("https://h11tesh.github.io/drumkitv3/");
}

function simonGame(){
    window.open("https://h11tesh.github.io/simongame/");
}

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}