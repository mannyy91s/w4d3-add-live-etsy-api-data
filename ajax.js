// http://swapi.co/api/planets/1/

//old school way of doing this
// var starwarsPlanets = new XMLHttpRequest()
// starwarsPlanets.addEventListener('load', planetListener) //(event, function) we want it to load the function planetListener
// starwarsPlanets.open('GET', 'http://swapi.co/api/planets/') // we are using the open method to get
// starwarsPlanets.send() //it does the hard work and sends. without this line it wont connect
//
// var starwarsPlanets = new XMLHttpRequest()
// starwarsPlanets.addEventListener('load', planetListener)
// starwarsPlanets.open('GET', 'http://swapi.co/api/planets/?page=2')
// starwarsPlanets.send()

// function planetListener(){
//     // console.log(JSON.parse(this.responseText))  //json is built in bject that handles json formated data into somthing we can work with ex array and object
//     var planets = JSON.parse(this.responseText)
//     listPlanets(planets.results)
// }


//modern way of doing this using polyfill
fetch('http://swapi.co/api/planets/') //this fetchs the api data
    //after fetching you run .then to tell it to do somthing in sequence
    //short hand way of doing this
    .then(response => response.json()) // this is so common basically its saying take the raw response and parse it into json
    .then(response => listPlanets(response.results))       // then we are running the function listPlanets we hae below

fetch('http://swapi.co/api/planets/1/')
    .then(response => response.json())
    .then(response => listPlanet(response))


//long hand way of doing the same thing above
    // .then(function(response){
    //     return response.json()
    // })
    // .then(function(responseJson){
    //     listPlanets(responseJson)
    // })


function listPlanets(planetsArray){
    console.log('this comes after the first one')
    planetsArray.forEach(function(planet){
        var planetTitle = document.createElement('h4')
        planetTitle.innerHTML = planet.name
        document.querySelector('body').appendChild(planetTitle)
    })
}

function listPlanet(planet){
    var list = document.createElement('ul')
    var planetName = document.createElement('li')
    planetName.innerHTML = planet.name
    list.appendChild(planetName)
    var planetGravity = document.createElement('li')
    planetGravity.innerHTML = planet.gravity
    list.appendChild(planetGravity)
    var planetPopulation = document.createElement('li')
    planetPopulation.innerHTML = planet.population
    list.appendChild(planetPopulation)

document.querySelector('body').appendChild(list)
}
console.log('this comes first.')
