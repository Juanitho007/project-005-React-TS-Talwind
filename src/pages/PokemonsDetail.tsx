import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPokemonById } from "../services/getPokemonById";
import { PokemonData } from "src/interfaces/interfaces";

const PokemonsDetail = () => {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState<PokemonData>();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/pokedex");
  };
  useEffect(() => {
    const loadPokemon = async () => {
      const pokemon = await getPokemonById(Number(pokemonId));
      setPokemon(pokemon);
    };
    loadPokemon();
  }, [pokemonId]);

  if (!pokemon) return <div className="loader"></div>;
  const {
    name,
    height,
    weight,
    types,
    stats,
    abilities,
    image1,
    image2,
    moves,
  } = pokemon;
  return (
    <>
      <button
        className="p-4 rounded-full bg-red-500/80 text-white fixed right-3 border-2 top-3 border-white z-50"
        type="button"
        onClick={handleClick}
      >
        <i className="bx bx-home bx-tada text-3xl font-bold "></i>
      </button>
      <div
        className={` max-w-[1024px] w-full h-full bg-white/30 rounded-[52px] flex flex-col items-center justify-between p-3 saturate-[150%]`}
      >
        <img
          src={
            image2 === null
              ? image1 === null
                ? "/img/pokemonDefault.png"
                : image1
              : image2
          }
          alt={name}
          className="w-[200px] h-[200px] scale-[135%] object-center overflow-hidden"
        />
        <h2 className="w-full text-start border-b-4 border-black text-xl font-semibold">
          {name}
        </h2>
        <ul className="flex justify-around  bg-white/20 w-full rounded-xl p-1">
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
              .map((type: string) => type)
              .join(", ")[0]
              .toUpperCase() +
              types
                .map((type: string) => type)
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
        <section className="bg-white/20 w-full rounded-xl p-1">
          <p className="border-black border-b-2">
            <b>STATS</b>
          </p>
          <ul className="flex flex-col text-start">
            {stats.map((stat: { name: string; value: number }) => (
              <li key={stat.name}>
                <b>{stat.name[0].toUpperCase() + stat.name.slice(1)}:</b>{" "}
                {stat.value}
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
        </section>
        <section className="bg-white/20 w-full rounded-xl p-1">
          <p className="border-black border-b-2">
            <b>MOVES</b>
          </p>
          <ul className="flex gap-4 flex-wrap justify-between">
            {moves.map((move: string) => (
              <li key={move} className="list-none bg-zinc-400/20 p-2 rounded-3xl">
                {move[0].toUpperCase() + move.slice(1)}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default PokemonsDetail;
