import { ResponseData } from "src/interfaces/interfaces";
import { axiosInstance } from "../api/axiosInstance";

export const getPokemonsByType = async (
  typeId: number
): Promise<ResponseData> => {
  try {
    const response = await axiosInstance.get(`type/${typeId}`);

    const res = response.data.pokemon.map(
      (pokemonData: { pokemon: ResponseData }) => ({
        name: pokemonData.pokemon.name,
        id: pokemonData.pokemon.url.split("/").at(-2),
      })
    );
    console.log(res);
    return res;
  } catch (error) {
    throw new Error("Existe un error en la petición");
  }
};
