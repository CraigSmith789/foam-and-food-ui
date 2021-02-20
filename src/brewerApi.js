class BrewerApi {

  constructor(pairUrl) {
    this.baseUrl = `${pairUrl}/brewers`
  }

  fetchBrewers() {
    fetch(this.baseUrl)
      .then(resp => resp.json())
      .then(data => {
        data.forEach(element => {
          const b = new Brewer(element)
          b.attachToDom()
          b.addToDropDown()
          b.addToSort()
        })
      })
  }
}