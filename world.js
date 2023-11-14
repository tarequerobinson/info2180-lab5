document.addEventListener('DOMContentLoaded', function () {







    const searchButton=document.getElementById("lookup");
    const resultDiv=document.getElementById("result");
    const searchField = document.getElementById("country");
    console.log(searchButton);
    console.log(searchField);
    
    
    
    
    
    searchButton.addEventListener("click", function(event) {
        // event.preventDefault(); 
        // Prevent the default form submission  
        resultFunction();
    });
    async function resultFunction () {
    
        console.log("resultFunction triggered");
        const searchText = searchField.value;
        console.log(searchText);    
    
        const url = `http://localhost/info2180-lab5/world.php?country=${sanitize(searchText)}`;
        console.log("URL:"+ url);
        const response = await fetch(url);
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
