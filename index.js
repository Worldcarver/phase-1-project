const brewLog = document.getElementById('brewery-lrg')
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

        })
        brewLog.append(brewPic)

    })
}
