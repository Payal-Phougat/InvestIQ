// Simple Interest = (P × R × T) / 100
function calcSI() {
    let p = document.getElementById('si-p').value;
    let r = document.getElementById('si-r').value;
    let t = document.getElementById('si-t').value;

    if (p && r && t) {
        let si = (p * r * t) / 100;
        document.getElementById('si-result').innerText = "Simple Interest: ₹" + si.toFixed(2);
    } else {
        alert("Please fill all fields!");
    }
}

// Compound Interest = P (1 + R/100)^T - P
function calcCI() {
    let p = document.getElementById('ci-p').value;
    let r = document.getElementById('ci-r').value;
    let t = document.getElementById('ci-t').value;

    if (p && r && t) {
        let amount = p * Math.pow((1 + r / 100), t);
        let ci = amount - p;
        document.getElementById('ci-result').innerText = "Compound Interest: ₹" + ci.toFixed(2);
    } else {
        alert("Please enter all values!");
    }
}
