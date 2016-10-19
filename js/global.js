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

var items = [
    {
        image: item.url,
        title: item.title,
        seller: item.who_made,
        price: item.price,
    },
    {
        image: item.url,
        title: item.title,
        seller: item.who_made,
        price: item.price,
    }
]

items.forEach(function(item){

})

var items = [
    {
        image: 'http://unsplash.it/200?image=23',
        title: 'Vintage Board Game',
        seller: 'franz66',
        price: '$'+ 15.00
    },
    {
        image: 'http://unsplash.it/200?image=24',
        title: 'Vintage Game of Life',
        seller: 'vintagetoolbox',
        price:'$'+  20.00
    },
    {
        image: 'http://unsplash.it/200?random',
        title: 'PaloAltoOpoly Board Game. Monoply Variant',
        seller: 'SecondSymphony',
        price:'$'+  150.00
    },
    {
        image: 'http://unsplash.it/200?random',
        title: 'Vintage 1960s split-level',
        seller: 'BuyfromGroovy',
        price:'$'+  13.00
    },
    {
        image: 'http://unsplash.it/200?random',
        title: 'retro chess chess pieces chess set',
        seller: 'Cleopatravintage',
        price:'$'+  8.48
    },
    {
        image: 'http://unsplash.it/200?random',
        title: 'Vintage Inspector Gadget Board Game',
        seller: 'FunkyKoala',
        price:'$'+ 20.89
    },
    {
        image: 'http://unsplash.it/200?random',
        title: 'vtg Go Board -- Reiss Game',
        seller: 'Vintagebyjessie',
        price:'$'+  12.00
    },
    {
        image: 'http://unsplash.it/200?random',
        title: 'Parcheesi By Selchow & Righter Co. 1959',
        seller: 'BigYellowRetro',
        price:'$'+  15.00
    },
    {
        image: 'http://unsplash.it/200?random',
        title: '1955 Candy Land, Milton Bradley vintage',
        seller: 'AhiddenNest',
        price:'$'+  54.00
    },
    {
        image: 'http://unsplash.it/200?random',
        title: 'Vintage Emperors Challenge Educational',
        seller: 'WylieOwlVintage',
        price:'$'+  12.00
    },
    {
        image: 'http://unsplash.it/200?random',
        title: 'Rules of Mille Bornes 1960, vintage game',
        seller: 'RecreVintage',
        price:'$'+  7.90
    },
    {
        image: 'http://unsplash.it/200?random',
        title: '1985 Complete Wheel of Fortune',
        seller: 'StutzyVintage',
        price:'$'+  9.99
    },
]

results.forEach(function(result) {
    makeThemBoxes(item)
})
