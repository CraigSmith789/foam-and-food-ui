

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
      const option = document.createElement('option')
      option.innerText = style
      styleSelect.append(option)

    })

  }



  attachToDom() {
    this.renderPair()
  }
  renderPair() {
    // console.log(this)
    const brewId = this.brewerId
    let found = Brewer.all.find(brewer => { return brewer.id === brewId })
    const pairDiv = document.querySelector("#pair-collection");
    let h4 = document.createElement('h4')
    h4.innerText = this.name
    let img = document.createElement('img')
    img.setAttribute('src', this.image)
    img.setAttribute('class', 'beer-logo')
    let s = document.createElement('p')
    s.innerText = `Style: ${this.style}`
    let b = document.createElement('p')
    if (found != undefined) {

      b.innerText = `Brewer: ${found.name}`
    }

    let a = document.createElement('p')
    a.innerText = `ABV: ${this.abv}`

    let x = document.createElement('p')
    x.innerText = `-`
    x.id = `${this.id}`
    x.classList.add("admin")
    let div = document.createElement('div')
    div.classList.add("pair")
    div.id = `pair-${this.id}`
    div.append(img, h4, s, b, a, x)
    pairDiv.appendChild(div)
    const delBtn = div.querySelector('.admin')
    delBtn.addEventListener('click', deletePair)

  };



}