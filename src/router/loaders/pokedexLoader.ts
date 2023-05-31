import { getAllPokemons } from "../../services/getAllPokemons";
import { getPokemonsByType } from "../../services/getPokemonsByType";

export const pokedexLoader = async ({ request }) => {
  const url = new URL(request.url);
  const pokemonName = url.searchParams.get("pokemonName")?? '';
  const pokemonType = url.searchParams.get("pokemonType")?? '';
  let pokemonsData;
  if (pokemonName && pokemonType) {
    pokemonsData = await getPokemonsByType(Number(pokemonType));
    pokemonsData = pokemonsData.filter((pokemon: { name: string }) =>
      pokemon.name.toUpperCase().includes(pokemonName.toUpperCase())
    );
  } else if (!pokemonName && !pokemonType) {
    pokemonsData = await getAllPokemons();
  } else if (pokemonName && !pokemonType) {
    pokemonsData = await getAllPokemons();
    pokemonsData = pokemonsData.filter((pokemon: { name: string }) =>
      pokemon.name.toUpperCase().includes(pokemonName.toUpperCase())
    );
  } else if (pokemonType && !pokemonName) {
    pokemonsData = await getPokemonsByType(Number(pokemonType));
  }
  const urlsPokemons = pokemonsData&& pokemonsData.map((pokemon: { id: string }) =>
    Number(pokemon.id)
  );
  return { urlsPokemons, pokemonName, pokemonType };
};
