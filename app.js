class InterestCalculator {
    constructor(principal, rate, time){
        this.principal = Number(principal)
        this.rate = Number(rate)
        this.time = Number(time)

        // Checks
        if(isNaN(this.principal) || isNaN(this.rate) || isNaN(this.time)){
            throw new Error('All Inputs must be a Valid Number')
        }
        if(this.principal <= 0 || this.rate <= 0 || this.time <= 0){
            throw new Error('All Inputs must be a Positive Number')
        }
    }

    calculateSimpleInterest(){
        return (this.principal * this.rate * this.time) / 100
    }

    calculateCompoundInterest(compoundYear = 1){
        // Convert rate to decimal
        const rateInDecimal = this.rate / 100
        return this.principal * Math.pow(1 + (rateInDecimal / compoundYear), compoundYear * this.time)
    }
}

form.addEventListener('submit', event => {
    event.preventDefault()

    // Get input values
    let principal = document.querySelector('#principal-amount').value
    let time = document.querySelector('#year').value
    let rate = document.querySelector('#interest-rate').value

    try {
        // create instance of InterestCalculator
        const app = new InterestCalculator(principal, rate, time)

        const simpleInterest = app.calculateSimpleInterest()
        const compoundInterest = app.calculateCompoundInterest(1)

        // Format compound interest
        const formatCompoundInterest = compoundInterest.toLocaleString('en-NG', {style: "currency", currency: 'NGN'})

        // Display result
        total.innerHTML = `<p>Your compound interest is: <span id="compound">${formatCompoundInterest}</span> \u{1F60A}</p>`
    } catch (error) {
        total.innerHTML = `<p>Error: ${error.message}</p>`
    }
})

resetBtn.addEventListener('click', () => {
    form.reset()
    total.innerHTML = ''
})
