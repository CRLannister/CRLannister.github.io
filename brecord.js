function Redirect() {
               window.location="record.html";
            }
            
                        /*setTimeout('Redirect()', 5000);
						*/
						
						var arr =["targaryen.jpg" ,"greyjoy.jpeg" ,"Baratheon.jpeg" ,"lannister.jpeg" ,"Stark.jpeg"];
						var i = 0;
						function Check() {
							  document.getElementById("logo").src = arr[i] ;
							var a = '<img class="img-responsive center-block" id="logo" src="targaryen.jpg" alt="">' ;
							 console.log(document.getElementById("logo"));
							 i++;
							 i = i%5;
					
						}
						

/*function init() {

  // Replace the paragraph in #myDiv1 with a new paragraph
  $('#pic>img').replaceWith( " <img class="img-responsive center-block" id="logo" src="targaryen.jpg" alt="">" );

 /* // Replace the paragraph in #myDiv2 with a horizontal rule
  var hr = document.createElement('hr');
  $('#myDiv2>p').replaceWith( hr );

  // Replace the paragraph in #myDiv3 with the current time
  $('#myDiv3>p').replaceWith( currentTime );

  function currentTime() {
    var currentTime = new Date();
    var currentHours = currentTime.getHours ( );
    var currentMinutes = currentTime.getMinutes ( );
    var currentSeconds = currentTime.getSeconds ( );

    // Pad the minutes and seconds with leading zeros, if required
    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
    currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

    return ( "<p>The current time is: " + currentHours + ":" + currentMinutes + ":" + currentSeconds + "</p>" );
  }
}

setTimeout('Check()', 3500);*/

setInterval('Check()',3500);