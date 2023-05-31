import { axiosInstance } from "../api/axiosInstance";
import { PokemonData } from "src/interfaces/interfaces";

export const getPokemonById = async (id: number):Promise<PokemonData> => {
  try {
    const response = await axiosInstance.get(`pokemon/${id}/`);
    const data = response.data;
    const pokemon:PokemonData = {
      name: data.name[0].toUpperCase() + data.name.slice(1),
      height: data.height,
      weight: data.weight,
      types: data.types.map(
        (type: { type: { name: string } }) => type.type.name
      ),
      stats: data.stats.map(
        (stat: { base_stat: number; stat: { name: string } }) => ({
          name: stat.stat.name,
          value: stat.base_stat,
        })
      ),
      abilities: data.abilities.map(
        (ability: { ability: { name: string } }) => ability.ability.name
      ),
      image1: data.sprites.other.home.front_default,
      image2: data.sprites.other.dream_world.front_default,
    };
    return pokemon;
  } catch (error) {
    throw new Error("Existe un error en la petición");
  }
};
