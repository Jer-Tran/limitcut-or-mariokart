
var _mechs = []
var _isLimitCut = false

function NextMech() {
    const index = Math.floor(Math.random() * _mechs.length)
    SetMech(_mechs[index])
}

function SetMech(mech) {
    console.log(mech)
    _name.innerText = mech.name
    _desc.innerText = mech.desc
    _image.src = mech.img
}

function PressLimitCut() {
    console.log("limit cut")
}

function PressMarioKart() {
    console.log("mario kart")
    console.log(_mechs)
}

function GetMechs() {
    fetch('./mechs.json').then(res => {return res.json();}).then(mechs => {
        _mechs = mechs

        document.getElementById("limitcut").onclick = PressLimitCut
        document.getElementById("mariokart").onclick = PressMarioKart
        document.getElementById("next").onclick = NextMech

        NextMech()
    }
    ).catch((error) => { console.log(error) })
}

const _name = document.getElementById("name")
const _desc = document.getElementById("desc")
const _image = document.getElementById("image")

GetMechs()