
class Brewer {
  static all = []

  constructor({ name, city, founded, id }) {
    this.name = name
    this.city = city
    this.founded = founded
    this.id = id

    Brewer.all.push(this)

  }



  addToDropDown() {

    const option = document.createElement('option')
    option.value = this.id
    option.innerText = this.name
    dropdown.append(option)


  }

  addToSort() {

    const option = document.createElement('option')
    option.value = this.id
    option.innerText = this.name
    brewSelect.append(option)

  }


  attachToDom() {

  }



}