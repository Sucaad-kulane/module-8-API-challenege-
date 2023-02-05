
const weatherAPIURL = "https://api.openweathermap.org"
const weatherAPIKey = "bf20521a7eb62dbd6a15e97075ca1eae"

let searchInput = $("#search-input")
let searchForm = $("#search-form");


function fetchCoord(search){
    let queryURL = `${weatherAPIURL}/geo/1.0/direct?q={search}`

}
function submitSearchForm(event){

    event.preventDefult();


    let search = searchInput.val().trim()

    fetchCoord (search);
}


searchForm.on("submit",submitSearchForm);











