const Pokedex = require("pokeapi-js-wrapper")
const P = new Pokedex.Pokedex()

const Pokedex = require("pokeapi-js-wrapper")
const customOptions = {
  protocol: "https",
  hostName: "localhost:443",
  versionPath: "/api/v2/",
  cache: true,
  timeout: 5 * 1000, // 5s
  cacheImages: true
}
const P = new Pokedex.Pokedex(customOptions)

// with await, be sure to be in an async function (and in a try/catch)
(async () => {
  const golduck = await P.getPokemonByName("golduck")
  console.log(golduck)
})()

// or with Promises
P.getPokemonByName("eevee")
  .then(function(response) {
    console.log(response)
  })

P.resource([
  "/api/v2/pokemon/36",
  "api/v2/berry/8",
  "https://pokeapi.co/api/v2/ability/9/",
]).then( response => {
  console.log(response)
})