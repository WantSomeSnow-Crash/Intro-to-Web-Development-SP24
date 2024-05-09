# Final Info:

* also main_page_java.js from last month is the intro to js basic code that I presented in class on 4/9. Sorry I know it's kinda confusing. 

* link to presentation [https://docs.google.com/presentation/d/1XWZ5z7r51UYgQP3s3ouK49xSWFLxnHYNyhzsf7z0LWg/edit?usp=sharing](url)

<h3>Continuing to Add:</h3> 
 * Adding more to my site (with more than just photos) 
 * Making the site more interactive for the user

 
 <h3>Newish Website Plan:</h3>
 * Add more pages to the site (such as a design and game pages) 
 * Make the site more interactive with greensock elements and use bootstrap for grid-system 

 <h3>Snippets of Code:</h3>
 * used to create the fade in and fade out of the loading intro page.
 * Basic but still cool. 

  
        $(document).ready(function() {
            setTimeout(function() {
                $('#loading-screen').fadeOut('slow');
            }, 4000);
        });
   

* Used to update the text of the drop down menu on the portfolio page.
* Also shows and hides the images when user filters images 

      $(document).ready(function(){
            $(".filter-button").click(function(){
                var value = $(this).attr('data-filter');
                var buttonText = $(this).text();
                $("#filterDropdown").text(buttonText); 
                if(value == "all") {
                    $('.filter').show('1000');
                } else {
                    $(".filter").not('.'+value).hide('3000');
                    $('.filter').filter('.'+value).show('3000');
                }
            });


  <h3>What Went Wrong:</h3>
  * Tried to add some games I made to the site but doing do created havic to the site. Had to take and leave out since I haven't been able to figure it out.
  * Would sometime cause elements of the game to be visable even when filtered out. 
  
        <div id="game1" class=col-12 col-sm-6 col-md-4 col-lg-3 filter Games">
        </div>
        <script src="./js_games/Second Rewritten Code.js"></script?
  
   <h3>Future Plans:</h3>
    * I would like to be able to add the games portion to my site and continue to make it more interactive and have a less of a boring portfolio site.
    * I think if I have time over the summer I will add to it and hopfully swap it out with my squarespace website to save myself some money 

