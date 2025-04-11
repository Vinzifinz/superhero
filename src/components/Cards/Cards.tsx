import "./Cards.css"


interface HeroProps {
    id: number;
    name: string;
    images: {
        sm: string
    };

};

interface CardsProps {
    heroes: HeroProps[]
}

function Cards({ heroes }: CardsProps) {

    return (
        <div className="cards">
            {heroes.map((hero) => (
                <div key={hero.id} className="hero-card">
                    <img className="hero-img" src={hero.images.sm} alt={`image de ${hero.name}`} />
                    <h2>{hero.name}</h2>
                </div>
            ))}
        </div>
    );
}


export default Cards;
