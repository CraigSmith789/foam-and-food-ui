const pairUrl = 'http://localhost:3000';
const pairingApi = new PairingApi(pairUrl);
const brewerApi = new BrewerApi(pairUrl);
const form = document.querySelector("#add-pair-form");
const pairFormContainer = document.querySelector(".container");
const dropdown = document.getElementById('brew-dropdown');
const brewSelect = document.getElementById('brew-selector');
const styleSelect = document.getElementById('style-selector');
const resetBtn = document.getElementById("reset-btn");

document.getElementById('brew-selector').onchange = function () {
  Pairing.filterByBrewer(this.value)
}

document.getElementById('style-selector').onchange = function () {
  Pairing.filterByStyle(this.value)
}



pairFormContainer.style.display = "none";

document.addEventListener("load", pairingApi.fetchPairs());
document.addEventListener("load", brewerApi.fetchBrewers());





const handleSubmit = (e) => {
  e.preventDefault();
  pairingApi.createPairing();

}

form.addEventListener('submit', handleSubmit);


const deletePair = (e) => {
  e.target.parentElement.remove()
  const id = e.target.id
  const configObj = {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  }

  fetch(`http://localhost:3000/pairings/${id}`, configObj)
    .then(r => r.json())
    .then(json => alert(json.message))

}



const ResetClick = () => {
  document.getElementById("pair-collection").innerHTML = "";
  Pairing.localRefresh()

}

resetBtn.addEventListener("click", ResetClick);

const validateForm = () => {
  var n = document.forms["newBeer"]["name"].value;
  if (n == "") {
    alert("Name must be filled out");
    return false;
  }

  var i = document.forms["newBeer"]["image"].value;
  if (i == "") {
    alert("Image must be filled out");
    return false;
  }

  var s = document.forms["newBeer"]["style"].value;
  if (s == "") {
    alert("Style must be filled out");
    return false;
  }

  var a = document.forms["newBeer"]["abv"].value;
  if (a == "") {
    alert("ABV must be filled out");
    return false;
  }
}


document.addEventListener("keypress", function onEvent(event) {
  if (event.key === "+") {
    pairFormContainer.style.display = "block";
  }
  else if (event.key === "-") {
    pairFormContainer.style.display = "none";
  }
});


