import Stopwatch from './Stopwatch.js'

class StopwatchWithResults extends Stopwatch {

  results: string[] = []

  constructor(element: HTMLDivElement) {
    super(element)
    this.prepareElements(element)
    this.prepareActions()
  }

  prepareElements(element: HTMLDivElement): void {
    this.dom.resultsList = <HTMLDivElement>element.querySelector('.stopwatch__results')
    this.dom.addToListBtn = <HTMLButtonElement>element.querySelector('.stopwatch__add-to-list-btn')
    this.dom.resetListBtn = <HTMLButtonElement>element.querySelector('.stopwatch__reset-list-btn')
  }

  prepareActions() {
    /*
    Funkcja ta powinna dodawać nasłuchwiacze do buttonów this.dom.addToListBtn oraz this.dom.resetListBtn.
    Pierwszy powinien po kliknięciu uruchamiać metodę this.addToList, a druga this.resetList.
    */
    this.dom.addToListBtn.addEventListener('click', () => this.addToList())
    this.dom.resetListBtn.addEventListener('click', () => this.resetList())
  }

  renderList() {
    /*
    Funkcja ta powinna czyścić zawartość this.dom.resultsList, a następnie
    renderować w niej nowe elementy li
    na podstawie zawartości tablicy this.results.
    Każdy jej element powinien być renderowany bez żadnych zmian.

    np. <li>00:12:00</li>
    */
    this.dom.resultsList.innerHTML = ''
    for (let i: number = 0; i < this.results.length; i++) {
      const listElement: HTMLLIElement = document.createElement('li');
      this.dom.resultsList.appendChild(listElement)
      listElement.innerHTML += this.results[i]
    }
  }

  addToList() {
    /*
    Funkcja ta powinna pobierać aktualny czas z this.currentTime, formatować
    go i w takiej postaci zapisywać do tablicy this.results.
    Następnie powinna renderować aktualną listę na stronie (this.renderList).
    */

    const time: Date = new Date(this.currentTime)
    const timeStr: string = time.toTimeString().split(' ')[0];
    this.results.push(timeStr)
    this.renderList
  }

  resetList() {
    /*
    Funkcja ta powinna czyścić tablicę this.results oraz zawartość this.dom.resultsList
    */
    this.results = []
    this.dom.resultsList.innerHTML = ''
  }

}

export default StopwatchWithResults
