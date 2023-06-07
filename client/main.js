const button = document.querySelector('button')
const main = document.querySelector('main')
const section = document.querySelector('section')

const buttonClicked = (evt) => {
    axios.get('https://swapi.dev/api/planets/?search=Alderaan')
        .then((res) => {
            let planet = res.data.results
            let people = planet[0].residents

            section.innerHTML = ``

            for(let i = 0; i < people.length; i ++){
                axios.get(people[i])
                    .then(res => {
                        newH2 = document.createElement('h2')
                        newH2.textContent = res.data.name
                        section.appendChild(newH2)
                    })
                    .catch(err => console.log(err))
            }

        })
}
        


button.addEventListener('click',buttonClicked)

