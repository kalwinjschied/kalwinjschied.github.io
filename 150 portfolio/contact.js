"use strict";



$(document).ready( () => {

    // handle click on Join List button
    $("#contact_us").click( evt => {
        let isValid = true;

        // validate the first email address
        const emailPattern = 
        /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    const email1 = $("#email_1").val().trim();
    if (email1 == "") { 
        $("#email_1").next().text("This field is required.");
        isValid = false;
    } else if ( !emailPattern.test(email1) ) {
        $("#email_1").next().text("Must be a valid email address.");
        isValid = false;
    } else {
        $("#email_1").next().text("");
    }
    $("#email_1").val(email1);

        // validate the second email address
        const email2 = $("#email_2").val().trim();
        if (email2 == "") { 
            $("#email_2").next().text("This field is required.");
            isValid = false; 
        } else if (email1 != email2) { 
            $("#email_2").next().text("The email addresses must match.");
            isValid = false;
        } else {
            $("#email_2").next().text("");
        }
        $("#email_2").val(email2);
        
        // validate the first name entry  
        const Name = /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/;
    
        const fullName = $("#full_name").val().trim();
        if (fullName == "") { 
            $("#full_name").next().text("This field is required.");
            isValid = false;
        } else if ( !Name.test(fullName) ) {
            $("#full_name").next().text("Must be a valid name address.");
            isValid = false;
        } else {
            $("#full_name").next().text("");
        }
        $("#full_name").val(fullName);
        // validate the last name entry
    

        // validate the state entry
        const picker = /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/;
    
        const fullDate = $("#datepicker").val().trim();
        if (fullDate == "") { 
            $("#datepicker").next().text("This field is required.");
            isValid = false;
        } else if ( !picker.test(fullDate) ) {
            $("#datepicker").next().text("Must be a valid date address.");
            isValid = false;
        } else {
            $("#datepicker").next().text("");
        }
        $("#datepicker").val(fullDate);
			
			
		// prevent the default action of submitting the form if any entries are invalid 
		if (isValid == false) {
			evt.preventDefault();
		}
    });

    // handle click on Reset Form button
    $("#clear_form").click( () => {
        // clear text boxes
        $("#email_1").val("");
        $("#email_2").val("");
        $("#full_name").val("");
        $("#comment").val("");
        $("#datepicker").val("");

        // reset span elements
        $("#email_1").next().text("*");
        $("#email_2").next().text("*");
        $("#full_name").next().text("*");
        $("#comment").next().text("*");
        $("#calender_year").next().text("*");

  
    }); 

    // move focus to first text box
    $("#email_1").focus();
});

$(function() {
    $( "#email_1" ).tooltip({
       position: {
          my: "left bottom",
          at: "left top-3",
          collision: "none"
       }
    
    });
 });


$(document).ready( () =>
$("#datepicker").datepicker({
    minDate: new Date(),
    maxDate: +45,
    showButtonPanel: true,
    format: "dd/MM/yyyy"
})
)