

class Pairing {

  static all = []

  constructor({ id, name, style, image, abv, brewer_id }) {

    this.name = name
    this.style = style
    this.image = image
    this.abv = abv
    this.id = id
    this.brewerId = brewer_id

    Pairing.all.push(this)


  }





  static filterByBrewer(brewer) {
    document.getElementById("pair-collection").innerHTML = "";
    for (const pairing of Pairing.all) {

      if (pairing.brewerId === parseInt(brewer)) {
        pairing.attachToDom()

      }
    }
  }

  static filterByStyle(style) {
    document.getElementById("pair-collection").innerHTML = "";
    for (const pairing of Pairing.all) {

      if (pairing.style === style) {
        pairing.attachToDom()

      }
    }
  }

  static addToSDropDown() {
    let styleTypes = []
    Pairing.all.forEach(function (pairing) {
      styleTypes.push(pairing.style)

    })

    const uniqueSet = new Set(styleTypes);
    const backToArray = [...uniqueSet]
    backToArray.forEach(function (style) {
      const choice = document.createElement('option')
      choice.innerText = style
      styleSelect.append(choice)

    })

  }



  attachToDom() {
    this.renderPair()
  }
  renderPair() {
    
    const brewId = this.brewerId
    let found = Brewer.all.find(brewer => { return brewer.id === brewId })
    const pairDiv = document.querySelector("#pair-collection");
    let beerName = document.createElement('div')
    beerName.setAttribute('class', 'beer-name');
    beerName.innerText = this.name
    let img = document.createElement('img')
    img.setAttribute('src', this.image)
    img.setAttribute('class', 'beer-logo')
    let s = document.createElement('div')
    s.innerText = `Style: ${this.style}`
    s.setAttribute('class', 'beer-metadata')

    let b = document.createElement('div')
    if (found != undefined) {

      b.innerText = `Brewer: ${found.name}`
    }
    b.setAttribute('class', 'beer-metadata')
    let a = document.createElement('div')
    a.innerText = `ABV: ${this.abv}`
    a.setAttribute('class', 'beer-metadata')

    let x = document.createElement('div')
    x.innerText = `-`
    x.id = `${this.id}`
    x.classList.add("admin")

    let div = document.createElement('div')
    div.classList.add("pair")
    div.id = `pair-${this.id}`
    div.append(img, beerName, s, b, a, x)
    pairDiv.appendChild(div)
    const delBtn = div.querySelector('.admin')
    delBtn.addEventListener('click', PairingApi.deletePair)

  };

  static localRefresh() {
    Pairing.all.forEach(function (pairing) {
      pairing.attachToDom()

    })

  }



}