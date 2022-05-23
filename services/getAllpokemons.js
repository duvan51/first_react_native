import axios from 'axios'

const getAllpokemons=async()=>{

    const URL = `https://pokeapi.co/api/v2/pokemon/`
    const req = await axios.get(URL)

    return req


}
export default getAllpokemons

