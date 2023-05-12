
function changeColor() {
    var currentColor = document.getElementById("tristanhawk").style.color;
    var newColor = selectNewColor(currentColor);
    document.getElementById("tristanhawk").style.color = "red"
}


function selectNewColor(currentColor) { 
    var newColor = "";

    if (currentColor === "") { 
        newColor = "red";  
    } else if (currentColor === "red") {
        newColor = "purple";
    } else if (currentColor === "purple") {
        newColor = "green";
    } else if (currentColor === "green") {
    }
    }
    return newColor;
