
window.addEventListener("load", function(){

    

    // let button = document.getElementById("submit");
    let form = document.getElementById("searchForm");
    

    form.addEventListener("submit", function(event){
        let input = document.getElementById("searchTerm");
        console.log(input.value);

        let totalCities = document.getElementById("totalCities");

        let cities = document.getElementById("cities");

        //only letters a-z A-Z no spaces or numbers 
        let regexLetters = /^[a-zA-Z]+$/;
        if(input.value === "" || !regexLetters.test(input.value)){ 
            alert("Please provide the valid input.");
            totalCities.style.display = "none";
            return event.preventDefault();
        } 


        event.preventDefault();
        totalCities.style.display = "block";

        fetch("https://jsonmock.hackerrank.com/api/cities/?city="+input.value).then(function(response){
            response.json().then( function(json){
                console.log(json);

                cities.innerHTML = json["data"].length;

                let table = document.getElementById("tableData");
                for(let i = 0; i < json.data.length; i++){
                    table.innerHTML +=
                    `
                    <tr>
                        <td>${json.data[i].state}</td>
                        <td>${json.data[i].city}</td>
                    </tr>
                `
                }
            });
        });
    });
});





    
