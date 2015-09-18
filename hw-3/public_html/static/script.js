/* script.js */

/* When the madlib form is submitted, run this function */
$("#madlibForm").submit(function() {
    
    /* Our beginning madlib story (is empty) */
    var madlibStory = ""

    /* Start Validations */

    /* Get text from "name" input field. */
    var nameValue = $("#madlibForm input[name='name']").val();
    var numValue = $("#madlibForm input[name='number']").val();
    var pGpValue = $("#pronoun :selected").val();
    var objectVal = $('input[name="object"]:checked').val();
    var bevVal = $('input[name="beverage"]:checked').val();




    /* If the value in the text input field is empty */
    if(nameValue === "") {

        /* pop up an alert screen saying the form is invalid */
        alert("Form is invalid");

        /* Don't load a new page after clicking submit */
        return false;

    }

    /* If the value in the text input field is not empty, set that
        as the madlib story */
    else {
        madlibStory = " "
        ;
    }

    /* Validate Number Field */

        if(numValue === "") {

        /* pop up an alert screen saying the form is invalid */
        alert("You need a number");

        /* Don't load a new page after clicking submit */
        return false;

    }
        else if(isNaN(numValue)== true){
             alert("You need a real number");
             return false;

        }
        else {
             madlibStory = "Literally nothing happened in " + nameValue +"'s life -- there had been nothing worth noting in the past " + numValue + " years. " 
             + pGpValue + " slowly meandered to a coffee shop and bought a somewhat expensive cup of " + bevVal + 
             " but it really did taste like " + objectVal + ". " + nameValue + " experienced another banal day.";
                 
    }


    /*Validate that all fiels are filled*/

      var atLeastOneIsChecked = $('input:checkbox').is(':checked');
      var atLeastOneRadio = $('input:radio').is(':checked');
      //console.log(atLeastOneRadio);

      if (atLeastOneIsChecked && atLeastOneRadio){
          console.log("true");
      }
      else{
          alert("check at least one box");
          return false;
      }


    /* END VALIDATIONS */

    /* If all validations pass, add the story to the page */
    $("#madlibStory").html(madlibStory);
    
    /* Don't load a new page after clicking submit */
    return false;
});






