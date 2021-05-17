let middleColumn = document.getElementById("middle");

console.log(`Middle column HTML details: `, middleColumn);


function toggle_visibility() {

    if(middleColumn.style.display != 'none')
    middleColumn.style.display = 'none';
    else
    middleColumn.style.display = 'block';
 }

 