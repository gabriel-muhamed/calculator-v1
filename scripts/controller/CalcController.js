class CalcController {
    constructor() {

        this._locale = 'pt-BR';
        this._displayCalcEl = document.getElementById("display")
        this._dateEl = document.getElementById("data")
        this._timeEl = document.getElementById("hora")
        this.initialize();
        this.initButtonsEvents()

    }

    initialize() {

        this.setDisplayTime

        setInterval(() => {

            this.setDisplayTime()

        }, 0)

    }

    addEventListenerAll(element, events, fn){

        events.split(' ').forEach(event => {

            element.addEventListener(event, fn, false);

        })

    }

    initButtonsEvents() {

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach(btn => {

            this.addEventListenerAll(btn, 'mouseover', e => {

                btn.style.cursor = "pointer"

            });

        })
    }

    setDisplayTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale)
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale)
    }

    // Display Time
    get displayTime() {
        return this._timeEl;
    }

    set displayTime(time) {
        this._timeEl.innerHTML = time;
    }

    // Display Date
    get displayDate() {
        return this._dateEl.innerHTML;
    }

    set displayDate(date) {
        this._dateEl.innerHTML = date;
    }

    // Dispaly Calc
    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value;
    }

    // Current Date
    get currentDate() {
        return new Date();
    }

}
