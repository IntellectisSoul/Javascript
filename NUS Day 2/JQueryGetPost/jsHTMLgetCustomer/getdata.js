//Notice Use of Jquery script in html. the $ sign is a Jquery syntax.

function getFromServer(){   //API end-point
    $.getJSON('https://9851c3b1-a2c1-44cf-bd7a-4bb482dd0be0.mock.pstmn.io/users', function(data) {   //requires 2 argument. data, function
          var text ="<ul>";
          data.forEach(function(item){    
          text = text + `<li> Account: ${item.id}, ${item.first_name} ${item.last_name}<br>
                      Email: ${item.email} </li>`
          
          });
          text += "</ul>"
          $(".mypanel").html(text);  
      });
    }


    //another way of writing is : 
    //  $.getJSON('https://9851c3b1-a2c1-44cf-bd7a-4bb482dd0be0.mock.pstmn.io/users', (data) ==>