document.addEventListener("DOMContentLoaded", function(){
  console.log('dom loaded');

    var quizForm = document.querySelector( '.wpcf7-form' );
    let quizInput = document.getElementById('quiz');
    quizInput.setAttribute("type", "number");
    quizInput.setAttribute("pattern", "[0-9]*"); 
    quizInput.setAttribute("inputmode", "numeric");
    const submitButton = document.querySelector('.wpcf7-submit');
    submitButton.classList.add("btn");

    document.addEventListener( 'wpcf7mailsent', function( event ) {
          console.log( "mailSent!" );
          let newDiv = document.createElement("div");
          newDiv.setAttribute("id", "quiz-congrats");
        newDiv.style["padding"] = "10px";
        newDiv.style["border"] = "1px solid #46b450";
        newDiv.style["text-align"] = "center";
        let p1 = document.createElement("p");
        p1.innerText = "Congratulations! You solved the fourth puzzle!";
        p1.after('&#127881;');
        let p2 = document.createElement("p");
        p2.innerText = "Now you need to find the QR code to get the link to puzzle #5.";
        let p3 = document.createElement("p");
        p3.innerText = "Go to the Plaza level. Stand facing the door to any of the Broadway rooms, and turn right. Walk all the way to the end of the hall, until you find the window seat nook to the left of the mirror. Start your search there. When you find the QR code, either scan it to load Puzzle #5, or save the URL for later to open when Puzzle #5 is published."
        p2.style["margin-top"] = "20px";
        // let a1 = document.createElement("a");
        // a1.classList.add("btn");
        // a1.innerText = "Go to Puzzle #4";
        // a1.style["font-size"] = "1.2em";
        // a1.setAttribute('href', "https://seiu503.org/faq/ic7emg4p4mfqmeeex/");
        newDiv.appendChild(p1);
        newDiv.appendChild(p2);
        newDiv.appendChild(p3);
        // newDiv.appendChild(a1);
        submitButton.before(newDiv);
        submitButton.style["display"] = "none";
        setTimeout(() => {
          document.querySelector('.wpcf7-response-output').style["display"] = "none";
          document.querySelector('.wpcf7-quiz-label').style["display"] = "none";
          document.getElementById('quiz').style["display"] = "none";  
          document.getElementById('quiz-sorry') ? document.getElementById('quiz-sorry').style["display"] = "none" : null; 
        }, "500");
        }, false );
    document.addEventListener( 'wpcf7invalid', function( event ) {
      console.log( "invalid!" );
      let newDiv = document.createElement("div");
        newDiv.setAttribute("id", "quiz-sorry");
        newDiv.style["padding"] = "10px";
        newDiv.style["border"] = "1px solid red";
        newDiv.style["text-align"] = "center";
        let p1 = document.createElement("p");
        p1.innerText = "Sorry, that's not correct";
        p1.after('&#128546;');
        let p2 = document.createElement("p");
        p2.innerText = "That's OK! You can try again!";
        let p3 = document.createElement("p");
        p3.innerText = ""
        p3.style["margin-top"] = "20px";
        let a1 = document.createElement("a");
        a1.classList.add("btn");
        a1.style["font-size"] = "1.2em";
        a1.innerText = "Reload Puzzle #4";
        a1.setAttribute('href', "https://seiu503.org/faq/ic7emg4p4mfqmeeex/"); 
        newDiv.appendChild(p1);
        newDiv.appendChild(p2);
        newDiv.appendChild(a1);
        newDiv.appendChild(p3);
        submitButton.before(newDiv);
        submitButton.style["display"] = "none";
        setTimeout(() => {
          document.querySelector('.wpcf7-not-valid-tip').style["display"] = "none";
          document.querySelector('.wpcf7-response-output').style["display"] = "none";
          document.getElementById('quiz-congrats') ? document.getElementById('quiz-congrats').style["display"] = "none" : null; 
        }, "500");
    }, false );
    document.addEventListener( 'wpcf7submit', function( event ) {
      console.log( "submit!" );
      
    }, false );

  
        
    }, false );
