class PokeClass {
    
    constructor(){
        this._pokeSelectEl = document.querySelector('.poke-select');
    }

    escolhiVoce(){
        let pokeNumber = document.querySelector(".pokeCode").textContent;
        console.log("escolhi Voce " + pokeNumber)
    }

    firstPokemon(){
    }

    get pokeSelect(){
        return this._pokeSelectEl.innerHTML;
    }

    set pokeSelect(value){
        this._pokeSelectEl = value;
        }
}