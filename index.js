
//Global Var. 
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
        // console.log(brewPic)
        brewLog.append(brewPic)

        //click event listener
        brewPic.addEventListener('click', () => {
            document.querySelector('#brewery-lrg img').src = brewery.image
            document.querySelector('.brewery-name').textContent = brewery.name
            document.querySelector('#city').textContent = brewery.city
            document.querySelector('#state').textContent = brewery.state

        })

    })
}


//submit form+auto prevent auto refresh

const newBrew = document.getElementById(`new-brewery`);

newBrew.addEventListener(`submit`,(event)=>{
    event.preventDefault()    //prevents the form from autosubmitting

    const newBrewery = document.createElement('img')
    newBrewery.src = event.target.image.value
    newBrewlog.append(newBrewery)
    newBrewery.addEventListener(``)

})