var quote = null; 
var character = null; 
$(document).ready(function(){ 
   $.getJSON('https://got-quotes.herokuapp.com/quotes ',function(data){ 
      $('#quote').html(data.quote + '<br>'+ '<i>- ' + data.character + '</i>').fadeIn(1500); 
       quote = data.quote; 
       character = data.character; 
    }); 

  $('#newQuote').click(function(){ 
     $.getJSON('https://got-quotes.herokuapp.com/quotes ',function(data){ 
      $('#quote').html(data.quote + '<br>'+ '<i>- ' + data.character + '</i>').fadeIn(1500); 
       quote = data.quote; 
       character = data.character; 
    }); 
  }); 
 /*  $('#tweet').click(function(){ 
     window.open('https://twitter.com/intent/tweet?text='+ quote + '  ' + character); 
   }); */
}); 