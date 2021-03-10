$(function() {
    $("#close").click(function() {
        $("#announcementBar").hide();
    });
});

function listener() {
    const searchBar = document.getElementById("searchBar");

    searchBar.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            redirect();
        }
    })
}

function redirect() {
    const content = document.getElementById("searchBar").value;
    if (content && content.length >= 3) {
        window.location.assign(`home.html?state=${content.toLowerCase().replace(" ", "+")}`);
    } else {
        window.location.assign("404.html");
    }
}