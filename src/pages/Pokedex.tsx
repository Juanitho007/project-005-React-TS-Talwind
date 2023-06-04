import { useContext } from "react";
import { UserNameContext } from "../context/UserNameContext";
import PagesComponent from "../components/pokedex/PagesComponent";
import FiltersForm from "../components/pokedex/FilterForm";
import { useLoaderData, useNavigate } from "react-router-dom";
import { LoaderDataProps } from "../interfaces/interfaces";

const Pokedex = () => {
  const { userName } = useContext(UserNameContext);
  const { urlsPokemons, pokemonName, pokemonType } =
    useLoaderData() as LoaderDataProps;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/pokedex");
  };
  return (
    <div className="flex flex-col justify-between items-center text-center gap-4">
      <h2 className="text-xl font-semibold ">
        <b className="text-white"> Bienvenido {userName}</b>, aqui podras
        encontrar tu pokemon favorito, hay un total de {urlsPokemons.length}{" "}
        pokemones
      </h2>
      {!urlsPokemons.length ? (
        <>
          <p className="text-black font-bold text-3xl">
            ¡No hay pokemons que coincidan con tu busqueda!, regresa a ver todos
            los Pokemons
          </p>

          <button
            className="p-4 rounded-full bg-red-500/80 text-white z-50"
            type="button"
            onClick={handleClick}
          >
            <i className="bx bx-home bx-tada text-3xl font-bold"></i>
          </button>
        </>
      ) : (
        <>
          <FiltersForm nameInitial={pokemonName} typeInitial={pokemonType} />
          <PagesComponent pokemonsData={urlsPokemons} />
        </>
      )}
    </div>
  );
};

export default Pokedex;
