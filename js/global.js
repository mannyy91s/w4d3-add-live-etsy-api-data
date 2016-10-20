
var searchTerm

function fetchData(){fetch('https://thinksaydo.com/tiyproxy.php?url=' + encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=' + encodeURIComponent('board games') + '&includes=Images,Shop'))
.then(response => response.json())
.then(response => response.results.forEach(function(item){
    makeThemBoxes(item)
}))
}

var searchInput = document.getElementById('search-input')
var searchButton = document.getElementById('search-button')

searchInput.addEventListener('keypress', searchEnter)
searchButton.addEventListener('click', search)

function searchEnter(enter){
    if(enter.key === 'Enter' ){
        search()
    }
}

function search(){
    searchTerm = document.getElementById('search-input').value
    fetchData()
    document.getElementById('search-input').innerHTML = ''
}


function makeThemBoxes(item){
    var card = document.createElement('div')
    card.className ='col-sm-3 card'

    var cardImg = document.createElement('img')
    cardImg.src = item.Images[0].url_170x135
    card.appendChild(cardImg)

    var cardTitle = document.createElement('div')
    cardTitle.classList.add('card-title')
    cardTitle.innerHTML = item.title
    card.appendChild(cardTitle)

    var cardTextArea = document.createElement('div')
    card.appendChild(cardTextArea)

    var cardTextLeft = document.createElement('div')
    cardTextLeft.className ='col-xs-6 text-muted'
    cardTextLeft.innerHTML = item.who_made
    cardTextArea.appendChild(cardTextLeft)

    var cardTextRight = document.createElement('div')
    cardTextRight.className = 'col-xs-6 text-right text-success'
    cardTextRight.innerHTML = item.price
    cardTextArea.appendChild(cardTextRight)

    document.querySelector('#searchResults ').appendChild(card)
}
