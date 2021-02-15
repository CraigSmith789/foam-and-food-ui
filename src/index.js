const pairUrl = 'http://localhost:3000/pairings'
const form = document.querySelector("#add-pair-form")

document.addEventListener("load", fetchPairs());
function fetchPairs() {
  fetch(pairUrl)
    .then(resp => resp.json())
    .then(data => {
      renderPairs(data)

    })

  function renderPairs(data) {
    // debugger
    let pairArray = data
    pairArray.map((i) => {
      renderPair(i)
    })
  }
  function renderPair(i) {
    
    const pairDiv = document.querySelector("#pair-collection");
    // pairDiv.innerHTML = '';
    let h4 = document.createElement('h4')
    h4.innerText = i.name
    let img = document.createElement('img')
    img.setAttribute('src', i.image)
    img.setAttribute('class', 'beer-logo')
    let s = document.createElement('p')
    s.innerText = `Style: ${i.style}`
    let b = document.createElement('p')
    b.innerText = `Brewer: ${i.brewery}`
    let a = document.createElement('p')
    a.innerText = `ABV: ${i.abv}`
    let f = document.createElement('p')
    f.innerText = i.food
    let x = document.createElement('p')
    x.innerText = `x`
    x.id = `${i.id}`
    x.classList.add("admin")
    let div = document.createElement('div')
    div.classList.add("pair")
    div.id = `pair-${i.id}`
    div.append(img, h4, s, b, a, f, x)
    pairDiv.appendChild(div)
    const delBtn = div.querySelector('.admin')
    delBtn.addEventListener('click', deletePair)
  };

  let addPair = false;

  document.addEventListener("DOMContentLoaded", () => {
    const addBtn = document.querySelector("#new-pair-btn");
    const pairFormContainer = document.querySelector(".container");
    addBtn.addEventListener("click", () => {
      // hide & seek with the form
      addPair = !addPair;
      if (addPair) {
        pairFormContainer.style.display = "block";
      } else {
        pairFormContainer.style.display = "none";
      }
    })
  })



    form.addEventListener('submit', handleSubmit)

    function handleSubmit(e) {
      e.preventDefault()
      console.log("SUBMIT clicked")
      const pairInfo = {
        name: form.elements.name.value,
        image: form.elements.image.value,
        style: form.elements.style.value,
        brewery: form.elements.brewery.value,
        abv: form.elements.abv.value,
        food: form.elements.food.value
      }
      document.getElementById('add-pair-form').reset()
      const configObj = {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(pairInfo)
        
      }

      fetch("http://localhost:3000/pairings", configObj)
        .then(r => r.json())
        .then(data => renderPair(data))
    }
  }
  function deletePair(e){
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
  
