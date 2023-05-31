const Header = () => {
  return (
    <header className="p-2 bg-gradient-to-b from-red-500 to-black/40 flex items-center gap-5 rounded-br-3xl rounded-bl-3xl flex-wrap text-center w-full lg:w-[1024px]">
      <div className="w-[55px] xs:w-[100px]h-[55px] xs:h-[100px">
        <img src="/img/logo.png" alt="logo pokemon" />
      </div>
      <h2 className="text-yellow-400 text-[42px] xs:text-[64px] font-pokeS">
        POKÉDEX
      </h2>
    </header>
  );
}

export default Header
