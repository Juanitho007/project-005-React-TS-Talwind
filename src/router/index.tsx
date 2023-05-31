import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/layout/Layout";
import ProtectedRouter from "../components/common/ProtectedRouter";
import Home from "../pages/Home";
import Pokedex from "../pages/Pokedex";
import { pokedexLoader } from "./loaders/pokedexLoader";
import PokemonsDetail from "../pages/PokemonsDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pokedex",
    element: (
      <ProtectedRouter>
        <Layout />
      </ProtectedRouter>
    ),
    children: [
      {
        path: "",
        element: <Pokedex />,
        loader: pokedexLoader
      },
      {
        path: ":pokemonId",
        element: <PokemonsDetail/>
      },
    ],
  },
]);
