

class PairingApi {

  constructor(pairUrl) {
    this.baseUrl = `${pairUrl}/pairings`
  }


  fetchPairs() {
    fetch(this.baseUrl)
      .then(resp => resp.json())
      .then(data => {
        data.forEach(element => {
          const p = new Pairing(element)
          p.attachToDom()
        })
        Pairing.addToSDropDown()

      }
      )

  }
  renderPairs(data) {
    let pairArray = data
    pairArray.map((i) => {
      renderPair(i)
    })
  }
  createPairing() {
    console.log("pApi30")
    const pairInfo = {
      name: form.elements.name.value,
      image: form.elements.image.value,
      style: form.elements.style.value,
      abv: form.elements.abv.value,
      brewer_id: form.elements.brewer_id.value

    }
    console.log(pairInfo)
    document.getElementById('add-pair-form').reset()
    console.log("pApi40")
    const configObj = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(pairInfo)


    }
    console.log(this)
    console.log(this.baseUrl)

    fetch(this.baseUrl, configObj)
      .then(r => r.json())
      .then(data => {
        const p = new Pairing(data)
        console.log(p)
        p.attachToDom()
      }
      )


  }

}