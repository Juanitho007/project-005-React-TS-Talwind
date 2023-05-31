/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ResponseData {
  map(arg0: (pokemon: { id: string; }) => number): pagesComponentProps;
  filter(arg0: (pokemon: { name: string }) => void): ResponseData;
  name: string;
  url: string;
  id: number;
}
export interface PokemonData {
  name: string;
  height: number;
  weight: number;
  types: string[];
  stats: {
    name: string;
    value: number;
  }[];
  abilities: {
    name: string;
  }[];
  image1: string | null;
  image2: string | null;
}
export interface UserNameContextType {
  userName: string;
  saveUserName: (name: string) => void;
  removeUserName: () => void;
}
export interface PokemonCardProps {
  pokemonId: number;
}
export interface BgColors {
  [key: string]: string;
}
export interface FiltersFormProps {
  nameInitial: string;
  typeInitial: number;
}
export interface LoaderDataProps {
  urlsPokemons: number[];
  pokemonName: string;
  pokemonType: number;
}
export interface pagesComponentProps {
  pokemonsData: number[];
  children?: React.ReactNode;
}
export interface TypesProps {
  [x: string]: any;
  id: number;
  name: string;
  url: string;
}