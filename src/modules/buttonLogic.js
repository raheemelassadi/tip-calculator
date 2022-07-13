function btnEvent(num){
    const btn = document.getElementsByClassName("tipButton")
    const custom = document.querySelector('#custom')
    let totalNum;
    let currTip;

    for (let i = 0; i < btn.length; i++){
        btn[i].addEventListener('click', () => {
            currTip = btn[i].innerHTML
            totalNum = currTip * num
            console.log(`currTip is ${currTip} and the total is ${totalNum}`)
        })
    }
}


export { btnEvent }