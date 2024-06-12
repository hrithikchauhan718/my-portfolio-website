document.addEventListener("DOMContentLoaded", function() {
    // Display default content
    document.getElementById("default").style.display = "block";

    // Handle navigation clicks
    var links = document.querySelectorAll("nav a");
    links.forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            var targetId = this.getAttribute("href").substring(1);
            var contents = document.querySelectorAll(".content");
            contents.forEach(function(content) {
                if (content.id === targetId) {
                    content.style.display = "block";
                } else {
                    content.style.display = "none";
                }
            });
        });
    });
});
