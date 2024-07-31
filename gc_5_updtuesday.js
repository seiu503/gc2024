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
      if (!document.getElementById('quiz-congrats')) {    
            let newDiv = document.createElement("div");
            newDiv.setAttribute("id", "quiz-congrats");
            newDiv.style["padding"] = "10px";
            newDiv.style["border"] = "1px solid #46b450";
            newDiv.style["text-align"] = "center";
            let p1 = document.createElement("p");
            p1.innerText = "Congratulations! You solved the last puzzle! All that’s left is to find the hidden container with the prizes!";
            p1.after('&#127881;');
            let p2 = document.createElement("p");
            p2.innerText = "First, figure out which room in the hotel was built over a filled-in swimming pool. Hotel staff may be able to help you, or you can use your intuition. Look for clues in ceiling construction and lighting. In which of these rooms can you imagine floating on your back?";
            let p3 = document.createElement("p");
            p3.innerText = "Go to the door at the Northeast corner of this room. Stand outside the door to the room and look for a much smaller door to open. Behind this small door, look for a black metal box, about the size of a deck of cards.";
            let p4 = document.createElement("p");
            p4.innerText = "When you find it: open the box. If you’re the very first team to complete the hunt, remove the first-finders prize, but leave the QR code and gamification codes for the next finders. Then please carefully replace the box exactly as you found it.";
            let p5 = document.createElement("p");
            p5.innerText = "Please use stealth when opening and replacing the box, to keep its location secret until other teams have solved the last puzzle!"
            p2.style["margin-top"] = "20px";
            p3.style["margin-top"] = "20px";
            p4.style["margin-top"] = "20px";
            // let a1 = document.createElement("a");
            // a1.classList.add("btn");
            // a1.innerText = "Go to Puzzle #4";
            // a1.style["font-size"] = "1.2em";
            // a1.setAttribute('href', "https://seiu503.org/faq/ic7emg4p4mfqmeeex/");
            newDiv.appendChild(p1);
            newDiv.appendChild(p2);
            newDiv.appendChild(p3);
            newDiv.appendChild(p4);
            newDiv.appendChild(p5);
            // newDiv.appendChild(a1);
            submitButton.before(newDiv);
            submitButton.style["display"] = "none";
            setTimeout(() => {
              document.querySelector('.wpcf7-response-output').style["display"] = "none";
              document.querySelector('.wpcf7-quiz-label').style["display"] = "none";
              document.getElementById('quiz').style["display"] = "none";  
              document.getElementById('quiz-sorry') ? document.getElementById('quiz-sorry').style["display"] = "none" : null; 
            }, "500");
        }
        }, false );

    document.addEventListener( 'wpcf7invalid', function( event ) {
      console.log( "invalid!" );
      if (!document.getElementById('quiz-sorry')) {
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
        a1.innerText = "Reload Puzzle #5";
        a1.setAttribute('href', "https://seiu503.org/faq/wuqw9u2v2nccvljov/"); 
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
      }
      
    }, false );

    document.addEventListener( 'wpcf7submit', function( event ) {
      console.log( "submit!" );
      
    }, false );

  
        
}, false );
