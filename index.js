const brewLog = document.getElementById('brewery-list')
document.addEventListener('DOMContentLoaded', () => {
    return fetch('http://localhost:3000/breweries')
    .then(res => res.json())
    .then(data => createBrewery(data))
})

function createBrewery(breweries){
    breweries.forEach(brewery => {
        
        //image
        const brewPic = document.createElement('img')
        brewPic.setAttribute('src', brewery.image)
        console.log(brewPic)
       

        //click event to select a brewery

        brewPic.addEventListener('click', () => {
            document.querySelector('#brewery-lrg img').src = brewery.image
            document.querySelector('.brewery-name').textContent = brewery.name
            document.querySelector('#city').textContent = brewery.city
            document.querySelector('#state').textContent = brewery.state

        })
        brewLog.append(brewPic)

    })
}


//submit form+auto prevent auto refresh

document.getElementById(`new-brewery`).addEventListener(`submit`,function(event){
    event.preventDefault()    //prevents the form from autosubmitting

const newBrewery = document.createElement('img')
newBrewery.src = e.target. image. value
newBrewlog.append(newBrewery)
    newBrewery.addEventListener(`click`, () =>{
        document.querySelector(`.brewery-lrg img`).src = event.target.image.value
        document.querySelector(`brewey-name`).textContent = event.name.value
        document.querySelector(`#city`).textContent = event.target[`new-comment`].value
        document.querySelector(`#state`).textContent = event.target[`new-state`].value



    })
})
