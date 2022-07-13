

//get value of bill in dollars
const bill = document.querySelector('#bill')

//get value of total people
const people = document.querySelector('#numOfPeople')

//get reset button
const reset = document.querySelector('#reset')

// function to calculate
function calcTip(){


        let billNum;
        let peopleNum;
        let totalAmount = document.querySelector('#total')


        bill.addEventListener("input", () => {
            billNum = bill.value
            totalAmount.textContent = parseFloat( billNum / peopleNum ).toFixed(2)
            console.log(totalAmount)
        })

        people.addEventListener("input", () => {
            peopleNum = people.value
            totalAmount.textContent = parseFloat( billNum / peopleNum ).toFixed(2)
            console.log(totalAmount)
        })




        
        const btn = document.getElementsByClassName("tipButton")
        const custom = document.querySelector('#custom')
        let tipAmount = document.querySelector('#tipNum')
        let tipNum;
        let currTip;
        

        for (let i = 0; i < btn.length; i++){
            btn[i].addEventListener('click', () => {
                currTip = parseFloat(`.${btn[i].innerHTML}`)
                tipNum = currTip * totalAmount.textContent
                tipAmount.textContent = tipNum
                console.log(`currTip is ${currTip} and the tip per person is ${tipNum}`)
            })
        }


        reset.addEventListener('click', () => {
            totalAmount.textContent = '0.00'
            bill.value = '0'
            people.value = '0'
            tipAmount.textContent = '0.00'
        })
}

export { calcTip }





