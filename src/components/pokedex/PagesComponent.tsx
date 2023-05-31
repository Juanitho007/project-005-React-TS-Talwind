import { useState } from "react";
import { usePagination } from "../../hooks/usePagination";
import PokemonCard from "./PokemonCard";
import { pagesComponentProps } from "../../interfaces/interfaces";
import { Link } from "react-router-dom";
const PagesComponent = ({pokemonsData}:pagesComponentProps) => {
   const [quantityPagination, setQuantityPagination] = useState<number>(16);
   const [pageNumber, listSlice, pages, changePageTo] = usePagination(
     pokemonsData,
     quantityPagination
   );
  const currentPageIndex = pages.findIndex((p) => p === pageNumber);

  return ( <>
    {pages.length > 1 && (
      <>
        <div className="flex flex-wrap items-center justify-center text-center max-w-[900px] mx-auto gap-4">
          <button
            onClick={() => changePageTo(pageNumber - 1)}
            className="bg-white/70 rounded-full w-12 h-12"
          >
            <i className="bx bxs-skip-previous-circle text-3xl text-cyan-800"></i>
          </button>
          {pages
            .slice(
              Math.max(currentPageIndex - 3, 0),
              Math.min(currentPageIndex + 3, pages.length)
            )
            .map((i: number) => (
              <button
                key={i}
                onClick={() => changePageTo(i)}
                style={{
                  color: pageNumber === i ? "red" : undefined,
                }}
                className=" text-xl p-2 bg-white/70 rounded-full w-12 h-12 font-bold"
              >
                {i}
              </button>
            ))}
          <button
            onClick={() => changePageTo(pageNumber + 1)}
            className="bg-white/70 rounded-full w-12 h-12"
          >
            <i className="bx bxs-skip-next-circle text-3xl text-cyan-800"></i>
          </button>
        </div>
        <div className="pb-4">
          Cards por paginas:
          <select
            name="quantityPerPages"
            value={quantityPagination}
            onChange={(e) => setQuantityPagination(Number(e.target.value))}
          >
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="12">12</option>
            <option value="16">16</option>
            <option value="20">20</option>
          </select>
        </div>
      </>
    )}
    <section className="grid grid-cols-1 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full lg:w-[1024px] gap-5 justify-items-center p-4">
      {listSlice.map((i: number) => (
        <div key={i}>
          <Link to={`/pokedex/${i}`}>
               <PokemonCard pokemonId={i} />
          </Link>
        </div>
      ))}
    </section>
  </>
  )
}

export default PagesComponent
