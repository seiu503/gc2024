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
        newDiv.style["padding"] = "10px";
        newDiv.style["border"] = "1px solid #46b450";
        newDiv.style["text-align"] = "center";
        let p1 = document.createElement("p");
        p1.innerText = "Congratulations! You solved the first puzzle!";
        p1.after('&#127881;');
        let p2 = document.createElement("p");
        p2.innerText = "Puzzle number 2 will be published at 6am on Friday August 2. If you try to click the link before then, you'll get a 'Page Not Found' error.";
        let p3 = document.createElement("p");
        p3.innerText = "If you click the link after Friday at 6am and see 'Page Not Found', try clearing your browser cache."
        p2.style["margin-top"] = "20px";
        let a1 = document.createElement("a");
        a1.classList.add("btn");
        a1.innerText = "Go to Puzzle #2";
        a1.style["font-size"] = "1.2em";
        a1.setAttribute('href', "https://seiu503.org/faq/ckl5ju6rz2gtzjxau/");
        newDiv.appendChild(p1);
        newDiv.appendChild(p2);
        newDiv.appendChild(p3);
        newDiv.appendChild(a1);
        submitButton.before(newDiv);
        submitButton.style["display"] = "none";
        setTimeout(() => {
          document.querySelector('.wpcf7-response-output').style["display"] = "none";
          document.querySelector('.wpcf7-quiz-label').style["display"] = "none";
          document.getElementById('quiz').style["display"] = "none";  
        }, "500");
        }, false );
    document.addEventListener( 'wpcf7invalid', function( event ) {
      console.log( "invalid!" );
      let newDiv = document.createElement("div");
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
        a1.innerText = "Reload Puzzle #1";
        a1.setAttribute('href', "https://seiu503.org/clue");
        newDiv.appendChild(p1);
        newDiv.appendChild(p2);
        newDiv.appendChild(a1);
        newDiv.appendChild(p3);
        submitButton.before(newDiv);
        submitButton.style["display"] = "none";
        setTimeout(() => {
          document.querySelector('.wpcf7-not-valid-tip').style["display"] = "none";
          document.querySelector('.wpcf7-response-output').style["display"] = "none";
        }, "500");
    }, false );
    document.addEventListener( 'wpcf7submit', function( event ) {
      console.log( "submit!" );
      
    }, false );

  
        
    }, false );
