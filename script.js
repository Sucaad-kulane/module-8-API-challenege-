

let searchInput = $("#search-input")
let searchForm = $("#search-form");


function submitSearchForm(event){

    event.preventDefult();


    alert(searchInput.val().trim())
}


searchForm.on("submit",submitSearchForm);











