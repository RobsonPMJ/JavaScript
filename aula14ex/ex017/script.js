function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.value.length != 0){
        let n = Number(num.value)
        tab.innerHTML = ''

        for(let c = 0; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.valuie = `tab${c}`
            tab.appendChild(item)
        }
    } else {
        window.alert('Por favor, digite um número!')
    }
}