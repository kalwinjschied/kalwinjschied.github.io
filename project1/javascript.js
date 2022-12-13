"use strict"


//It might seem wierd that I made two different page of javascript that has the same code. 
//But this page is a "JIC" for any other circumstances. 












const $ = selector => document.querySelector(selector);


const joinList = evt => {
        // get values user entered in textboxes
        const email1 = $("#email_1").value;
        const email2 = $("#sign_up").value;
        const fullName = $("#full_name").value;
        const Comment = $("#comment").value;
     //   const Subscribe = $("#Subscriptions").value;
    
        // create an error message and set it to an empty string
        let isValid = true;

        // check user entries - add text to error message if invalid
        if (email1 == "") { 
            $("#email_1_error").textContent = "Email is required.";
            isValid = false;
        } else { 
            $("#email_1_error").textContent = ""; 
        }
    
      
    
   
    
        if (fullName == "") {
            $("#name_error").textContent = "Your name is required.";
            isValid = false;
        } else { 
            $("#name_error").textContent = ""; 
        }


        if (email2 == "") { 
            $("#email_2_error").textContent = "Your email for weekly subscription.";
            isValid = false;
        } else { 
            $("#email_2_error").textContent = ""; 
        }

     //   if (Subscribe && fullName == "") {
      //      errorMessage += "Please Fill out the following to sign up.\n";
       // }

        if(Comment == ""){
            $("#comment_error").textContent = "Inquiry is required.";
            isValid = false;
        } else { 
            $("#comment_error").textContent = ""; 
        }
    
   

   // cancel form submit if any user entries are invalid
   if ( !isValid ) {
    evt.preventDefault(); 
}

    };

    const clearForm = () => {
        $("#email_1").value = "";
        $("#sign_up").value = "";
        $("#full_name").value = "";
        $("#comment").value = "";
      //  $("#Subscriptions").value = "";

        $("#email_1").focus();
    }
    
    document.addEventListener("DOMContentLoaded", () => {
        // hook up click events for both buttons
        $("#contact_us").addEventListener("click", joinList);
        $("#clear_form").addEventListener("click", clearForm);
    
        // set focus on first text box after the form loads
        $("#email_1").focus();
      
    });

    $( function() {
        $( "#datepicker" ).datepicker();
      } );