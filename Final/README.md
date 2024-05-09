<h1>Final Info</h1>

link to presentation https://docs.google.com/presentation/d/1XWZ5z7r51UYgQP3s3ouK49xSWFLxnHYNyhzsf7z0LWg/edit?usp=sharing

<h2>Continuing to Add:</h2>
* Adding more to my site (with more than just photos) * Making the site more interactive for the user

<h2>Newish Website Plan:</h2>
* Add more pages to the site (such as a design and game pages) * Make the site more interactive with greensock elements and use bootstrap for grid-system

<h2>Snippets of Code:</h2>
* used to create the fade in and fade out of the loading intro page. * Basic but still cool.

      $(document).ready(function() {
        setTimeout(function() {
            $('#loading-screen').fadeOut('slow');
        }, 4000);
        });

Used to update the text of the drop down menu on the portfolio page.

Also shows and hides the images when user filters images

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

<h2>What Went Wrong:</h2>
* Tried to add some games I made to the site but doing do created havic to the site. Had to take and leave out since I haven't been able to figure it out.

* Would sometime cause elements of the game to be visable even when filtered out.

      <div id="game1" class=col-12 col-sm-6 col-md-4 col-lg-3 filter Games">
          </div>
          <script src="./js_games/Second Rewritten Code.js"></script?

<h2>Future Plans:</h2>
* I would like to be able to add the games portion to my site and continue to make it more interactive and have a less of a boring portfolio site.

* I think if I have time over the summer I will add to it and hopfully swap it out with my squarespace website to save myself some money
