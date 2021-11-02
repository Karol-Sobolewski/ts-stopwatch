import Stopwatch from './Stopwatch.js';
class StopwatchWithResults extends Stopwatch {
    constructor(element) {
        super(element);
        this.results = [];
        this.prepareElements(element);
        this.prepareActions();
    }
    prepareElements(element) {
        this.dom.resultsList = element.querySelector('.stopwatch__results');
        this.dom.addToListBtn = element.querySelector('.stopwatch__add-to-list-btn');
        this.dom.resetListBtn = element.querySelector('.stopwatch__reset-list-btn');
    }
    prepareActions() {
        /*
        Funkcja ta powinna dodawać nasłuchwiacze do buttonów this.dom.addToListBtn oraz this.dom.resetListBtn.
        Pierwszy powinien po kliknięciu uruchamiać metodę this.addToList, a druga this.resetList.
        */
        this.dom.addToListBtn.addEventListener('click', () => this.addToList());
        this.dom.resetListBtn.addEventListener('click', () => this.resetList());
    }
    renderList() {
        /*
        Funkcja ta powinna czyścić zawartość this.dom.resultsList, a następnie
        renderować w niej nowe elementy li
        na podstawie zawartości tablicy this.results.
        Każdy jej element powinien być renderowany bez żadnych zmian.
    
        np. <li>00:12:00</li>
        */
        this.dom.resultsList.innerHTML = '';
        for (let i = 0; i < this.results.length; i++) {
            const listElement = document.createElement('li');
            this.dom.resultsList.appendChild(listElement);
            listElement.innerHTML += this.results[i];
        }
    }
    addToList() {
        /*
        Funkcja ta powinna pobierać aktualny czas z this.currentTime, formatować
        go i w takiej postaci zapisywać do tablicy this.results.
        Następnie powinna renderować aktualną listę na stronie (this.renderList).
        */
        const time = new Date(this.currentTime);
        const timeStr = time.toTimeString().split(' ')[0];
        this.results.push(timeStr);
        this.renderList;
    }
    resetList() {
        /*
        Funkcja ta powinna czyścić tablicę this.results oraz zawartość this.dom.resultsList
        */
        this.results = [];
        this.dom.resultsList.innerHTML = '';
    }
}
export default StopwatchWithResults;
//# sourceMappingURL=StopwatchWithResults.js.map