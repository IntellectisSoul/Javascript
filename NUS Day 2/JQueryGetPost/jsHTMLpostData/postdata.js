/*Syntax: */

function postToServer(form){
  
  
      if (form.id.value =="") return false;
    postData = { id: form.id.value,     //creating a JSON object.
      first_name: form.first_name.value, 
      last_name: form.last_name.value,  
      email: form.email.value,
      mobile: form.mobile.value,
      }; 

      addData(postData);
}  
     


function addData(data){// pass your data to SERVER in method
     $.ajax({
             type: "POST",
             url: "https://9851c3b1-a2c1-44cf-bd7a-4bb482dd0be0.mock.pstmn.io/addcustomer",  //url from backend developer
             data: JSON.stringify(data),// now data come in this function
            contentType: "application/json; charset=utf-8",
             crossDomain: true,
             dataType: "json",

             success: function (serverdata, status, jqXHR) {    //success and error are keywords from ajax

                 alert("success");// write success in " "
             },

             error: function (jqXHR, status) {
                 // error handler
                 console.log(jqXHR);
                 alert('fail ' + status.code);
             }
          });

          alert("done");
    }


 