document.addEventListener('DOMContentLoaded', function () {







    const searchCountryButton=document.getElementById("lookup");
    const searchCityButton=document.getElementById("lookup-city");

    const resultDiv=document.getElementById("result");
    const searchField = document.getElementById("country");
    // const citysearchField = document.getElementById("city");

    console.log(searchCountryButton);
    console.log(searchCityButton);

    // console.log(countrysearchField);
    // console.log(citysearchField);

    
    
    
    
    
    searchCountryButton.addEventListener("click", function(event) {
        // event.preventDefault(); 
        // Prevent the default form submission  
        resultFunction();
    });

    searchCityButton.addEventListener("click", function(event) {
        // event.preventDefault(); 
        // Prevent the default form submission  
        resultFunction();
    });




    async function resultFunction () {
    
        console.log("resultFunction triggered");
        const searchText = searchField.value;
        console.log(searchText);
        console.log(event.target);

        var buttonElement = event.target;
    
        // Accessing the button's ID
        var buttonId = buttonElement.id;
        
        console.log("Button ID: " + buttonId);
    
    
        const url = `http://localhost/info2180-lab5/world.php?country=${sanitize(searchText)}&lookup=${buttonId}`;
        console.log("URL:"+ url);
        const response = await fetch(url);
        console.log(response.json);

        const htmlContent = await response.text();
        console.log(htmlContent);
        
    
    
    
        resultDiv.innerHTML= htmlContent;
        console.log(resultDiv.innerHTML);
    
    }
    
    function sanitize(userInput) {
     
        // Sanitize the user input using the replace method
        const sanitizedInput = replaceSpecialCharacters(userInput);
    
        console.log("sanitize function triggered");
        console.log(sanitizedInput);
    
        return sanitizedInput ;
    
    }
    
    function replaceSpecialCharacters(input) {
    
        console.log("replaceSpecialCharacters function triggered")
    
        // Define a regular expression to match characters with special meanings in HTML
        const regex = /[&<>"'/]/g;
    
        // Replace the matched characters with their corresponding HTML entities
        const replacements = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;"
        };
    
        return input.replace(regex, match => replacements[match]);
        
    }
    

















})
