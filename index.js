
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
       

        //click event to select a brewery

        //click event listener
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


    //add brewery from the form to the "brewLog" list at the top of the page. 
    const newBrewery = document.createElement('img')
    newBrewery.src = event.target.image.value
    brewLog.append(newBrewery)


    // newBrewery.addEventListener(`click`, () =>{
    //     // document.querySelector(`.lrg-image`).src = event.target.image.value
    //     // document.querySelector(`.brewery-name`).textContent = event.target.name.value
    //     // document.querySelector(`#city`).textContent = event.target[`new-city`].value
    //     // document.querySelector(`#state`).textContent = event.target[`new-state`].value



    // })

    //replacing the above code with a POST Request 

    //turning the link and actual body of the POST request into variables
    const myUrl =   'http://localhost:3000/breweries' 
    const myData = {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: event.target.name.value,
            image: event.target.image.value,
            city: event.target[`new-city`].value,
            state: event.target[`new-state`].value
        }),
      }
      
    

    //the actual POST request using the variables above 
    fetch(myUrl, myData)
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      })










})
