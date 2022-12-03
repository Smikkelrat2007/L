console.log("javascript searchbar.js is opgestart");
let zoeken_op = "naam"

const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")
const span = document.getElementById('span')


let users = []
const data = [
{
  "id": 1,
  "money": "40",
  "name": "C&A chino beige",
  "img1": "https://img01.ztat.net/article/spp-media-p1/666b6764fc444629b9cf028d2f713129/795d0b52dc4f4254964d848bda67c174.jpg",
  "garment": "long_pants",
  "color": "broun",
  "size": "",
  "gender": "man",
  "type": "chino",
  "material": "",
  "rgb_colors": {
    "color_rgb1": "rgb(148,109,41)"
  }
},
{
  "id": 2,
  "money": "13",
  "name": "Nike SportswearTrainingsbroek - midnight navy",
  "img1": "https://img01.ztat.net/article/spp-media-p1/cd93c092a75b4bd4802542cc77fa3eb6/d9cbd18c5e3c44ea9d0ce2e06b05b45d.jpg?imwidth=1800",
  "garment": "jeans",
  "color": "donkerblauw",
  "size": "",
  "gender": "man",
  "type": "oversized",
  "material": "",
  "rgb_colors": {
    "color_rgb1": "rgb(0,0,100)"
  }
},
{
  "id": 3,
  "money": "13",
  "name": "Bershka wit met print groen",
  "img1": "https://cdn.aboutstatic.com/file/images/9b1da765e6f9cdd1b1a46c83663e4f90.jpg?brightness=0.96&quality=75&trim=1&height=480&width=360",
  "garment": "t-shirt",
  "color": "broun",
  "size": "",
  "gender": "man",
  "type": "oversized",
  "material": "",
  "rgb_colors": {
    "color_rgb1": "rgb(255,255,255)"
  }
},
{
  "id": 4,
  "money": "30",
  "name": "BershkaStraight leg jeans - light blue denim",
  "img1": "https://img01.ztat.net/article/spp-media-p1/d04459c1e3af42859c371ef15953686b/cfd85f61ba184247915f17ea74810936.jpg?imwidth=1800",
  "garment": "jeans",
  "color": "lichtblauw",
  "size": "",
  "gender": "man",
  "type": "oversized",
  "material": "",
  "rgb_colors": {
    "color_rgb1": "rgb(100,100,255)"
  }
},
{
  "id": 5,
  "money": "60",
  "name": "ConbipelBLEND - Trui - naturale",
  "img1": "https://img01.ztat.net/article/spp-media-p1/a6a5f62fbca24411a3175c382380e570/a9405df3b4144ecb9c8bbab7ee3da546.jpg?imwidth=762",
  "garment": "t-shirt",
  "color": "donkerblauw",
  "size": "",
  "gender": "man",
  "type": "oversized",
  "material": "",
  "rgb_colors": {
    "color_rgb1": "rgb(0,0,100)"
  }
},
{
  "id": 6,
  "money": "35",
  "name": "Upscale by Mister TeeVIVE LA LIBERTE - T-shirt print - black acid washed",
  "img1": "https://img01.ztat.net/article/spp-media-p1/c73c1ecf433b4c22bd3c3ef2b63730c9/90065d9569a647b6a4906d99fad86041.jpg?imwidth=762&filter=packshot",
  "garment": "t-shirt",
  "color": "zwart",
  "size": "",
  "gender": "man",
  "type": "oversized",
  "material": "",
  "rgb_colors": {
    "color_rgb1": "rgb(20,20,20)"
  }
},
]

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  users.forEach(user => {
    if (zoeken_op == "naam") {
      const isVisible =
        user.name.toLowerCase().includes(value)
      user.element.classList.toggle("hide", !isVisible)
    }
    if (zoeken_op == "prijs") {
      const isVisible =
        user.money.toLowerCase().includes(value)
      user.element.classList.toggle("hide", !isVisible)
    } else {
      console.log('error');
    }
  })
})

selectData = (data) => {
  users = data.map(user => {
    const card = userCardTemplate.content.cloneNode(true).children[0]

    const header = card.querySelector("[data-header]")
    const body = card.querySelector("[data-body]")
    const money = card.querySelector("[data-price]")
    const color_rgb = card.querySelector("[data-color_rgb]")

    color_rgb.style.backgroundColor = user.rgb_colors.color_rgb1;
    color_rgb.style.border = "solid 5px black";
    color_rgb.style.width = "30px";
    color_rgb.style.height = "30px";

    header.style.fontFamilly = "'Montserrat', sans-serif";



    header.textContent = user.name
    money.textContent = user.money + "$"
    body.src = user.img1
    userCardContainer.append(card)
    return { name: user.name, email: user.email, money: user.money, element: card }
  })
}
selectData(data)

function myFunction(a, b) {
  if (zoeken_op == "prijs"){
    zoeken_op = "naam";
    span.innerHTML = "naam van het product ";
  }else if (zoeken_op == "naam"){
    zoeken_op = "prijs";
    span.innerHTML = "prijs van het product";
  }
}
