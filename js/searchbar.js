console.log("het werkt!!");
const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")
let users = []
const data = [
{
  "id": 1,
  "name": "boris is erg mooi en ik zou zn pik afzuigen als hij dat wou... maar ik geloof dat hij me nu haat omdat ik zn pik is een keer probeerde te zuien;()",
  "img1": "https://media.indebuurt.nl/deventer/2020/08/15101850/foto-sander-claasen-1024x683.jpg",
  "img2": "https://fotoaanjemuur.nl/411/leidsegracht-amsterdam.jpg",
  "img3": "Bret",
  "img4": "Bret",
  "img5": "Bret",
  "img6": "Bret",
  "img7": "Bret",
  "img8": "Bret",
  "img9": "Bret",
  "img10": "Bret",
  "email": "",
  "filters": {
    "garment": "long_pants",
    "color": "broun",
    "size": "150",
    "gender": "man",
    "type": "cargo",
    "price": "50",
    "material": "flanel",
    "rgb_colors": {
      "color_rgb1": "rgb(148,109,41)"
    }
  }
}   ,
{
  "id": 2,
  "name": "hoi",
  "img1": "https://media.indebuurt.nl/deventer/2020/08/15101850/foto-sander-claasen-1024x683.jpg",
  "img2": "Bret",
  "img3": "Bret",
  "img4": "Bret",
  "img5": "Bret",
  "img6": "Bret",
  "img7": "Bret",
  "img8": "Bret",
  "img9": "Bret",
  "img10": "Bret",
  "email": "",
  "filters": {
    "garment": "long_pants",
    "color": "broun",
    "size": "150",
    "gender": "man",
    "type": "cargo",
    "price": "50",
    "material": "flanel",
    "rgb_colors": {
      "color_rgb1": "rgb(148,109,41)"
    }
  }
},
{
  "id": 3,
  "name": "wowie",
  "img1": "https://media.indebuurt.nl/deventer/2020/08/15101850/foto-sander-claasen-1024x683.jpg",
  "img2": "Bret",
  "img3": "Bret",
  "img4": "Bret",
  "img5": "Bret",
  "img6": "Bret",
  "img7": "Bret",
  "img8": "Bret",
  "img9": "Bret",
  "img10": "Bret",
  "email": "",
  "filters": {
    "garment": "long_pants",
    "color": "broun",
    "size": "150",
    "gender": "man",
    "type": "cargo",
    "price": "50",
    "material": "flanel",
    "rgb_colors": {
      "color_rgb1": "rgb(148,109,41)"
    }
  }
},
{
  "id": 4,
  "name": "berta",
  "img1": "https://media.indebuurt.nl/deventer/2020/08/15101850/foto-sander-claasen-1024x683.jpg",
  "img2": "Bret",
  "img3": "Bret",
  "img4": "Bret",
  "img5": "Bret",
  "img6": "Bret",
  "img7": "Bret",
  "img8": "Bret",
  "img9": "Bret",
  "img10": "Bret",
  "email": "",
  "filters": {
    "garment": "long_pants",
    "color": "broun",
    "size": "150",
    "gender": "man",
    "type": "cargo",
    "price": "50",
    "material": "flanel",
    "rgb_colors": {
      "color_rgb1": "rgb(148,109,41)"
    }
  }
},
{
  "id": 5,
  "name": "gert",
  "img1": "https://media.indebuurt.nl/deventer/2020/08/15101850/foto-sander-claasen-1024x683.jpg",
  "img2": "Bret",
  "img3": "Bret",
  "img4": "Bret",
  "img5": "Bret",
  "img6": "Bret",
  "img7": "Bret",
  "img8": "Bret",
  "img9": "Bret",
  "img10": "Bret",
  "email": "",
  "filters": {
    "garment": "long_pants",
    "color": "broun",
    "size": "150",
    "gender": "man",
    "type": "cargo",
    "price": "50",
    "material": "flanel",
    "rgb_colors": {
      "color_rgb1": "rgb(148,109,41)"
    }
  }
},
{
  "id": 6,
  "name": "hihihiha",
  "img1": "https://media.indebuurt.nl/deventer/2020/08/15101850/foto-sander-claasen-1024x683.jpg",
  "img2": "Bret",
  "img3": "Bret",
  "img4": "Bret",
  "img5": "Bret",
  "img6": "Bret",
  "img7": "Bret",
  "img8": "Bret",
  "img9": "Bret",
  "img10": "Bret",
  "email": "",
  "filters": {
    "garment": "long_pants",
    "color": "broun",
    "size": "150",
    "gender": "man",
    "type": "cargo",
    "price": "50",
    "material": "flanel",
    "rgb_colors": {
      "color_rgb1": "rgb(148,109,41)"
    }
  }
},{
  "id": 2,
  "name": "boris zwietink zn hele mooie ...... wenkbrouwen",
  "img1": "https://media.indebuurt.nl/deventer/2020/08/15101850/foto-sander-claasen-1024x683.jpg",
  "img2": "Bret",
  "img3": "Bret",
  "img4": "Bret",
  "img5": "Bret",
  "img6": "Bret",
  "img7": "Bret",
  "img8": "Bret",
  "img9": "Bret",
  "img10": "Bret",
  "email": "",
  "filters": {
    "garment": "long_pants",
    "color": "broun",
    "size": "150",
    "gender": "man",
    "type": "cargo",
    "price": "50",
    "material": "flanel",
    "rgb_colors": {
      "color_rgb1": "rgb(148,109,41)"
    }
  }
},
{
  "id": 3,
  "name": "je bent echt heel erg mooi :)",
  "img1": "https://media.indebuurt.nl/deventer/2020/08/15101850/foto-sander-claasen-1024x683.jpg",
  "img2": "Bret",
  "img3": "Bret",
  "img4": "Bret",
  "img5": "Bret",
  "img6": "Bret",
  "img7": "Bret",
  "img8": "Bret",
  "img9": "Bret",
  "img10": "Bret",
  "email": "",
  "filters": {
    "garment": "long_pants",
    "color": "broun",
    "size": "150",
    "gender": "man",
    "type": "cargo",
    "price": "50",
    "material": "flanel",
    "rgb_colors": {
      "color_rgb1": "rgb(148,109,41)"
    }
  }
},
{
  "id": 4,
  "name": "berta",
  "img1": "https://media.indebuurt.nl/deventer/2020/08/15101850/foto-sander-claasen-1024x683.jpg",
  "img2": "Bret",
  "img3": "Bret",
  "img4": "Bret",
  "img5": "Bret",
  "img6": "Bret",
  "img7": "Bret",
  "img8": "Bret",
  "img9": "Bret",
  "img10": "Bret",
  "email": "",
  "filters": {
    "garment": "long_pants",
    "color": "broun",
    "size": "150",
    "gender": "man",
    "type": "cargo",
    "price": "50",
    "material": "flanel",
    "rgb_colors": {
      "color_rgb1": "rgb(148,109,41)"
    }
  }
}
]

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  users.forEach(user => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible)
  })
})

selectData = (data) => {
  users = data.map(user => {
    const card = userCardTemplate.content.cloneNode(true).children[0]

    const header = card.querySelector("[data-header]")
    const body = card.querySelector("[data-body]")
    const money = card.querySelector("[data-price]")
    const color_rgb = card.querySelector("[data-color_rgb]")

    color_rgb.style.backgroundColor = user.filters.rgb_colors.color_rgb1;
    color_rgb.style.border = "solid 5px black";
    color_rgb.style.width = "30px";
    color_rgb.style.height = "30px";





    header.textContent = user.name
    money.textContent = user.filters.price + "$"
    body.src = user.img1
    userCardContainer.append(card)
    return { name: user.name, email: user.email, money: user.price, element: card }
  })
}
selectData(data)
