
const weatherAPIURL = "https://api.openweathermap.org"
const weatherAPIKey = "bf20521a7eb62dbd6a15e97075ca1eae"
let searchHistory = [ ]

let searchInput = $("#search-input")
let searchForm = $("#search-form");
let searchHistoryContainer =$("#history")



function fetchCoord(search){
    let queryURL = `${weatherAPIURL}/geo/1.0/direct?q=${search}&limit=5&appid=${weatherAPIKey}`;
    console.log(queryURL);
    fetch(queryURL, { method: "GET"}).then(function(data){
        return data.json()
    }).then (function(response){
        if(!response[0]){
            alert("Response not found")
        }else{
            if(searchHistory.indexOf(search) !== -1){
                return
            }
            searchHistory.push(search);

            localStorage.setItem("search-history", JSON.stringify(search));
            
            searchHistoryContainer.htm("")

            for(let i = 0; i < searchHistory.length; i++){
                let btn = $("<button>");
                btn.attr("type","button")
                btn.addClass("history-btn btn-hitso")


                btn.attr("data-search", searchHistory[i])
                searchHistoryContainer.append(btn)
            }


        }
      
    })

}
function submitSearchForm(event){

    event.preventDefult();


    let search = searchInput.val().trim()

    fetchCoord (search);
}


searchForm.on("submit",submitSearchForm);











