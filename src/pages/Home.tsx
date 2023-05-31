import { useContext } from "react";
import Footer from "../components/common/Footer";
import UserNameForm from "../components/home/UserNameForm";
import { UserNameContext } from "../context/UserNameContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate= useNavigate();

  const {saveUserName} = useContext(UserNameContext)
  const handleSendName = (nameValue: string) => { 
    saveUserName(nameValue)
    navigate("/pokedex")
  }
  
  return (
    <div className="min-w-full min-h-screen bg-gradient-to-t from-white from-49% via-gray-800/30 via-51% to-red-500 flex mx-auto flex-col items-center text-center justify-between flex-wrap">
      <h1 className="p-4 text-[56px] xs:text-[86px] font-pokeS text-transparent bg-clip-text bg-gradient-to-br from-black to-gray-400">
        POKÉDEX
      </h1>
      <div className="flex flex-col gap-5">
        <section className="p-4 bg-white/50 flex items-center gap-5 rounded-br-3xl rounded-tl-3xl flex-wrap text-center justify-center">
          <div className="max-w-[100px] max-h-[100px">
            <img src="/img/logo.png" alt="logo pokemon" />
          </div>
          <div>
            <h2 className="text-red-500 font-bold text-3xl ">
              ¡Hola entrenador!
            </h2>
            <p>Para poder comenzar, dame tu nombre</p>
          </div>
        </section>
        <UserNameForm onSendName={handleSendName} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
