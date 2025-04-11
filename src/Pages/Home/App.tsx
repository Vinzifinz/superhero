import Cards from "../../components/Cards/Cards";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react"
import "./App.css"


interface HeroProps {
  id: number;
  name: string;
  images: {
    sm: string;
  };
}

function App() {
  const [heroes, setHeroes] = useState<HeroProps[]>([])

  useEffect(() => {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then((res) => res.json())
      .then((data) => setHeroes(data.slice(0, 20))); // On prend les 20 premiers
  }, []);
  return (
    <>
      <Header />
      <main>
        <h1 className='title'>Super Héros</h1>
        <Cards heroes={heroes} />
      </main>
      <Footer />
    </>
  )
}

export default App;
