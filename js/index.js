const franceButton = document.getElementById("catalog-top__button-list__item-france")
const germanyButton = document.getElementById("catalog-top__button-list__item-germany")
const anglyButton = document.getElementById("catalog-top__button-list__item-angly")
const anchors = document.querySelectorAll('a[href*="#"]')
const cart = document.getElementById("cart")
const cartDot = document.getElementById("cart-dot")
let cartNum = 0

const countryList = new Map().set("1", "france").set("2", "germany").set("3", "angly")

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

function addToCart() {
    if(cartNum == 0) {
        cartDot.style.display = "flex"
        cartDot.textContent = String(cartNum = cartNum + 1)
    }

    else {
        cartDot.textContent = String(cartNum = cartNum + 1)
    }
}

function changeCountry(countryNumber) {
    for (let el = 1; el < 4; el++) {
        document.getElementById(countryList.get(String(el))).style.display = "none"
    }

    document.getElementById(countryList.get(String(countryNumber))).style.display = "block"
}

changeCountry(1)