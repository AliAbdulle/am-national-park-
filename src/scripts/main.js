console.log("Run")

fetch("http://localhost:9099/parks")
    .then(response => response.json())
    .then(function (data) {
        data = JSON.stringify(data);
        data = JSON.parse(data);
        console.log(data);
        data.forEach((parks) => {
            const displayContainer = document.querySelector("#display-container")
            const articlefield = document.createElement("article")
            articlefield.className = "art"
            const parkName = document.createElement("h3")
            const parkstate = document.createElement("p")
            parkName.textContent = parks.name
            parkstate.textContent = parks.state
            if (parks.visited !== true){
                articlefield.className = "ram"
            }
            displayContainer.appendChild(articlefield)
            articlefield.appendChild(parkName)
            articlefield.appendChild(parkstate)
        })
    });