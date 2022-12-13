"use strict";

$(document).ready( () => {

$("#faqs h2").click( evt => {


    const h2 = evt.currentTarget;

    $(h2).toggleClass("minus");

    if($(h2).attr("class") !== "minus"){
        $(h2).next().hide();
    }
    else{
        $(h2).next().show();
    }

    evt.preventDefault()

})

    $("#faqs").find("a:first").focus();
})

/*
// the event handler for the click event of each h2 element
const toggle = evt => {
    const h2Element = evt.currentTarget;                 // get the clicked h2 element
    const divElement = h2Element.nextElementSibling;     // get h2's sibling div

 //  h2Element.classList.toggle("minus");
   // divElement.classList.toggle("open");

    if(h2Element.hasAttribute("class")){
        h2Element.removeAttribute("class");
    } else {
        h2Element.className ="minus";
    }

    if(divElement.hasAttribute("class")){
        divElement.removeAttribute("class")
    } else{
        divElement.className ="open";
    }


  



    evt.preventDefault();   // cancel default action of h2 tag's <a> tag
};

document.addEventListener("DOMContentLoaded", () => {
    // get the h2 tags
    const h2Elements = faqs.querySelectorAll("#faqs h2");
    
    // attach event handler for each h2 tag	    
    for (let h2Element of h2Elements) {
        h2Element.addEventListener("click", toggle);
    }

    // set focus on first h2 tag's <a> tag
 
});

*/