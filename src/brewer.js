
class Brewer {
  static all = []

  constructor({ name, city, founded, id }) {
    this.name = name
    this.city = city
    this.founded = founded
    this.id = id

    Brewer.all.push(this)

  }

  pairings() {
    return Pairing.all.filter((pairing) => pairing.brewerId == this.id)
  }

  addToDropDown() {
    const option = document.createElement('option')
    option.value = this.id
    option.innerText = this.name
    dropdown.append(option)
    brewSelect.append(option)
  }
  attachToDom() {

  }


}