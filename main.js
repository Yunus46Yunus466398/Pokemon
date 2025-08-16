import { pokemons } from "./pokemons.js";

const input = document.getElementById('input')
const btnAz = document.getElementById('btnAz')
const btnZa = document.getElementById('btnZa')
const wrapper = document.getElementById('wrapper')

function renderList(item) {
    item.map(pokemon => {
        const div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML = `
    
    <div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="${pokemon.img}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${pokemon.name}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    
    
    
    `

        wrapper.appendChild(div)
    })

}
renderList(pokemons)




input.addEventListener('input', () => {
    wrapper.innerHTML = ``
    const qwery = input.value
    const filtered = pokemons.filter(pok => pok.name.toLowerCase().includes(qwery))

    renderList(filtered)
    console.log(filtered);

})

btnAz.addEventListener('click', () => {
    wrapper.innerHTML = ``

    const sorted = pokemons.sort((a, b) =>
        a.name.localeCompare(b.name)


    )



    renderList(sorted)
})
