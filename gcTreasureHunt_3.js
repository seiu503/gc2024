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
        p1.innerText = "Congratulations! You solved the third puzzle!";
        p1.after('&#127881;');
        let p2 = document.createElement("p");
        p2.innerText = "Puzzle number 4 will be published at 6am on Saturday August 3.";
        let p3 = document.createElement("p");
        p3.innerText = "If it's not live yet, bookmark the link now to load it later."
        p2.style["margin-top"] = "20px";
        let a1 = document.createElement("a");
        a1.classList.add("btn");
        a1.innerText = "Go to Puzzle #4";
        a1.style["font-size"] = "1.2em";
        a1.setAttribute('href', "https://seiu503.org/faq/ic7emg4p4mfqmeeex/");
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
          document.getElementById('quiz-sorry').style["display"] = "none"; 
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
        a1.innerText = "Reload Puzzle #3";
        a1.setAttribute('href', "https://seiu503.org/faq/l4yqcfkpzherw84xu/"); 
        newDiv.appendChild(p1);
        newDiv.appendChild(p2);
        newDiv.appendChild(a1);
        newDiv.appendChild(p3);
        submitButton.before(newDiv);
        submitButton.style["display"] = "none";
        setTimeout(() => {
          document.querySelector('.wpcf7-not-valid-tip').style["display"] = "none";
          document.querySelector('.wpcf7-response-output').style["display"] = "none";
          document.getElementById('quiz-congrats').style["display"] = "none"; 
        }, "500");
    }, false );
    document.addEventListener( 'wpcf7submit', function( event ) {
      console.log( "submit!" );
      
    }, false );

  
        
    }, false );
