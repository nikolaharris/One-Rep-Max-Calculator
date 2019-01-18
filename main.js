function calcMax() {
    let w = Number(document.getElementById('w').value)
    let r = Number(document.getElementById('r').value)
    const x = .0333
    let max = Math.floor(((w * r) * x) + w) 
   document.getElementById('max').innerHTML = max
}