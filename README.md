# Easier Homework - Psychic Game
  ![Screenshot of finished page](/assets/images/psychic-finished.jpg "Screenshot of finished page")

  * ## Project Description
    
    For this project, I was to make a game in which the user is given (9) chances to guess a random alphabet correctly. If the user inputs anything that is not an alphabet, the game does not play. If they guess it correctly, it resets the whole game but keeps tracks of this win on a counter displayed on the site. If they guess it incorrectly, it logs the previous choice and deducts (1) chance from the number of guesses left. Once the user has depleted all chances to guess correctly, the game generates a new answer for the user to guess.
  
  * ## Technologies Used

    I used HTML, CSS and JavaScript for this project.

    For HTML, I assigned the &lt;div&gt; tag with the ID "textBox" because I wanted to float it next to the crystal ball &lt;img&gt;. Within that &lt;div&gt; I also created bunch of &lt;p&gt;, each with its own ID so that I can have JS track that ID and fill in the enmpty space later with the stats of the game. Finally, I added the &lt;script&gt; linking the external JS script to the HTML file.

    For CSS, I set the background-color as black to match the crystal ball photo's background, then positioned both img and #textBox as relative so I could float both to left. I did some minor styling for the font color and size.

    For JavaScript: in lines 1 through 5, I declared the variable alphabet which is an array of all 26 letters. I also declared some variables to be used for game stats later, like wins, losses, guessesLeft, and lettersTyped (For lettersTyped, you can see I created that as an empty array so I could push user input letters into the array later); in lines 7 through 10, I gave the p IDs from the HTML file their variables equivalent names; in lines 12 through 20, I created a way for the CPU to randomly pick an alphabet as the correct answer and a function to reset the game as needed; and finally, in lines 22 through 51, that's where the magic happens. For this assignment, I had to read up on .includes() so that I could make sure the psychic would only accept alphabet keys and not random key input like numers or Tab key.

  * ## Screenshots of Essential Code
    * HTML Below

    ![Screenshot of HTML](/assets/images/psychic-html.jpg "Screenshot of HTML")
    
    * CSS Below
    
    ![Screenshot of CSS](/assets/images/psychic-css.jpg "Screenshot of CSS")

    * JavaScript Below

    ![Screenshot of JavaScript](/assets/images/psychic-js.jpg "Screenshot of JavaScript")
        
  * ## Gif Walkthrough of App Functioning 
    
    ![Gif of finished page](/assets/images/psychic-walkthrough.gif "Gif of finished page")
