const pairUrl = 'http://localhost:3000'
const pairingApi = new PairingApi(pairUrl)
const brewerApi = new BrewerApi(pairUrl)
const form = document.querySelector("#add-pair-form")
const pairFormContainer = document.querySelector(".container");
const dropdown = document.getElementById('brew-dropdown')
const brewSelect = document.getElementById('brew-selector')
const styleSelect = document.getElementById('style-selector')

document.getElementById('brew-selector').onchange = function () {
  Pairing.filterByBrewer(this.value)
}

document.getElementById('style-selector').onchange = function () {
  Pairing.filterByStyle(this.value)
}



pairFormContainer.style.display = "none";

document.addEventListener("load", pairingApi.fetchPairs());
document.addEventListener("load", brewerApi.fetchBrewers());

form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
  console.log("js.12")
  e.preventDefault()
  pairingApi.createPairing()
}




function deletePair(e) {
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
document.addEventListener("keypress", function onEvent(event) {
  if (event.key === "+") {
    pairFormContainer.style.display = "block";
  }
  else if (event.key === "-") {
    pairFormContainer.style.display = "none";
  }
});


