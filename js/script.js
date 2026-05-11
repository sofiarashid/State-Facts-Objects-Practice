let stateList = document.getElementById('state-list');

// when someone changed the state in the drop down, this function happens
stateList.onchange = function() {
    let selected = this.value
    // page changes to say state abbreviation
    document.getElementById("info-abbreviation").textContent = stateData[selected].abbr
    //page changes to say capitol
    document.getElementById("info-capitol").textContent = stateData[selected].capitol
    //page changes to say population
    document.getElementById("info-population").textContent = stateData[selected].pop
    //page changes to say statehood
    document.getElementById("info-statehood").textContent = stateData[selected].statehood
    //page changes to say mammal
    document.getElementById("info-mammal").textContent = stateData[selected].mammal
    //page changes to say bird
    document.getElementById("info-bird").textContent = stateData[selected].bird  
    //page changes to say tree
    document.getElementById("info-tree").textContent = stateData[selected].tree
    //page changes to say flower
    document.getElementById("info-flower").textContent = stateData[selected].flower
    //page changes to say nickname
    document.getElementById("info-nickname").textContent = stateData[selected].nickname
    //page changes to have the state image
    document.getElementById("info-pic").src = `img/${stateData[selected].abbr.toLowerCase()}.jpg`
    //page changes to have state name under state image
    document.getElementById("info-name").textContent = stateData[selected].name
}
