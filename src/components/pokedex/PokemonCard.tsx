import { useEffect, useState } from "react";
import { getPokemonById } from "../../services/getPokemonById";
import {
  BgColors,
  PokemonCardProps,
  PokemonData,
} from "../../interfaces/interfaces";

const bg: BgColors = {
  normal: "bg-amber-200/80 border-amber-400",
  fighting: "bg-amber-600/80 border-amber-800",
  flying: "bg-rose-200/80 border-rose-400",
  poison: "bg-violet-400/80 border-violet-600",
  ground: "bg-amber-400/80 border-amber-600",
  rock: "bg-gray-400/80 border-gray-600",
  bug: "bg-lime-400/80 border-lime-600",
  ghost: "bg-purple-600/80 border-purple-800 text-white",
  steel: "bg-zinc-300/80 border-zinc-500",
  fire: "bg-yellow-400/80 border-yellow-600",
  water: "bg-sky-400/80 border-sky-600",
  grass: "bg-teal-300/80 border-teal-600",
  electric: "bg-gray-300/80 border-gray-500",
  psychic: "bg-yellow-600 border-yellow-800",
  ice: "bg-orange-200/80 border-orange-400",
  dragon: "bg-cyan-400/80 border-cyan-600",
  dark: "bg-zinc-600/80 border-zinc-800  text-white",
  fairy: "bg-pink-300/80 border-pink-500",
};
const statsTarget = ['hp', 'attack', 'defense','speed']

const PokemonCard = ({ pokemonId }: PokemonCardProps) => {
  const [pokemon, setPokemon] = useState<PokemonData>();

  useEffect(() => {
    const loadPokemon = async () => {
      const pokemonData = await getPokemonById(pokemonId);
      setPokemon(pokemonData);
    };
    loadPokemon();
  }, [pokemonId]);
  if (!pokemon) return <div className="loader"></div>;
  const { name, height, weight, types, abilities, image1, image2 } = pokemon;
  const stats = pokemon.stats.filter((stat) => statsTarget.includes(stat.name.toLowerCase()))

  return (
    <div
      className={`xs:w-[300px] w-[260px] h-full bg-white/30 rounded-[52px] flex flex-col items-center justify-between p-3 ${
        bg[types[0]]
      } border-4 saturate-[80%] hover:saturate-[150%] hover:scale-[105%]`}
    >
      <img
        src={
          image1 === null
            ? image2 === null
              ? "/img/pokemonDefault.png"
              : image2
            : image1
        }
        alt={name}
        className="w-[200px] h-[200px] object-center"
      />
      <h2 className="w-full text-start border-b-4 border-black text-xl font-semibold">
        {name}
      </h2>
      <ul className="flex justify-between  bg-white/20 w-full rounded-xl p-1">
        <li>
          <b>Weight:</b> {weight}cm
        </li>
        <li>
          <b>Height:</b> {height} cm
        </li>
      </ul>
      <ul className="flex flex-col text-start bg-white/20 w-full rounded-xl p-1">
        <li>
          <b>Type:</b>{" "}
          {types
            .map((type) => type)
            .join(", ")[0]
            .toUpperCase() +
            types
              .map((type) => type)
              .join(", ")
              .slice(1)}
        </li>
        <li>
          <b>Abilities:</b>{" "}
          {abilities
            .map((ability) => ability)
            .join(", ")[0]
            .toUpperCase() +
            abilities
              .map((ability) => ability)
              .join(", ")
              .slice(1)}
        </li>
      </ul>
      <div className="bg-white/20 w-full rounded-xl p-1">
        <p className="border-black border-b-2">
          <b>STATS</b>
        </p>
        <ul className="flex flex-col text-start">
          {stats.map((stat) => (
            <li key={stat.name}>
              <b>{stat.name[0].toUpperCase() + stat.name.slice(1)}:</b>{" "}
              {stat.value}{" "}
              <div className="max-w-full h-3 border-2 rounded-3xl">
                <div
                  className={`bg-red-500 h-2 max-w-full border-2 border-transparent rounded-xl text-[20px]  text-zinc-200 font-bold flex items-center text-end justify-end`}
                  style={{ width: `${stat.value}%` }}
                >
                  {stat.value > 100 && (
                    <i className="bx bx-plus-medical bx-flashing text-xl text-white"></i>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonCard;
