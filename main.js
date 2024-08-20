
var _mechs = []
var _solved = false
var _isLimitCut = false

function NextMech() {
    _next.style.display = "none"
    _image.src = "./placeholder.png"
    const index = Math.floor(Math.random() * _mechs.length)
    SetMech(_mechs[index])
}

function SetMech(mech) {
    console.log(mech)
    _name.innerText = mech.name
    _desc.innerText = mech.desc
    _image.src = mech.img
    _isLimitCut = mech.limitcut
    _remark.innerText = mech.remark
}

function PressLimitCut() {
    if (_solved) {return}
    _next.style.display = "inline-block"
    if (_isLimitCut) {
        Correct()
    }
    else {
        Incorrect()
    }
    
}

function PressMarioKart() {
    if (_solved) {return}
    _next.style.display = "inline-block"
    if (!_isLimitCut) {
        Correct()
    }
    else {
        Incorrect()
    }
}

function GetMechType() {
    if (_isLimitCut) {
        return "Limit Cut"
    }
    return "Mario Kart"
}

function Correct() {
    if (_remark.innerText != "") {return}

    _remark.innerText = "Yes, it is a " + GetMechType()
}

function Incorrect() {
    if (_remark.innerText != "") {return}

    _remark.innerText = "No, it is actually a " + GetMechType()
}

function GetMechs() {
    fetch('./mechs.json').then(res => {return res.json();}).then(mechs => {
        _mechs = mechs

        document.getElementById("limitcut").onclick = PressLimitCut
        document.getElementById("mariokart").onclick = PressMarioKart
        _next.onclick = NextMech

        NextMech()
    }
    ).catch((error) => { console.log(error) })
}

function ToggleDarkMode() {
    // lmao no
}

const _name = document.getElementById("name")
const _desc = document.getElementById("desc")
const _image = document.getElementById("image")
const _remark = document.getElementById("remark")
const _next = document.getElementById("result")

GetMechs()