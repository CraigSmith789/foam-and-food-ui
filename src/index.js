const imgUrl = 'http://localhost:3000/pairings'

document.addEventListener("load", fetchPairs());
function fetchPairs() {
  fetch(imgUrl)
    .then(resp => resp.json())
    .then(data => {
      addPairsToDom(data)
    })
}
function addPairsToDom(data){
  const pairDiv = document.querySelector("#pair-collection");
  pairDiv.innerHTML = '';
  let pairArray = data;
  pairArray.map((i) => {
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
    let div = document.createElement('div')
    div.classList.add("pair")
    div.append(img, h4, s, b, a, f)
    pairDiv.appendChild(div)
    
  })

}
