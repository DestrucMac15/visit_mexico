import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';

const HomeSunBeachAndSand = () => {
  const listSunBeachAndSand = {
    image: "Qroo_cancun_playa108.webp",
    title: "Sol, Playa y Arena",
    subtitle: "Las mejores playas están en México",
    description: "La privilegiada ubicación de México le permite estar “bañado” por el Océano Pacífico, el Golfo de México y el Mar Caribe, lo que hace de nuestro país un destino paradisiaco para los turistas que buscan sol y playa. Las largas extensiones de costa que superan los 11 mil kilómetros permiten que cada playa sea única por sí misma, con aguas de distintas tonalidades y arena de diferentes texturas. La flora y fauna marina también hacen de México un imán de visitantes de todas partes del mundo. El Mar de Cortés, considerado “el acuario del mundo”; la hermosa Bahía de Acapulco, con uno de los climas más privilegiados de todo el planeta; y las playas oaxaqueñas cuyo oleaje es perfecto para la práctica del surf, son solo algunos ejemplos de lo que se puede disfrutar en el Pacífico Mexicano; mientras que del lado del Golfo de México encontramos la Costa Esmeralda en Veracruz, y qué decir del azul turquesa del Caribe Mexicano, con su blanca arena.",
    button: {
      title: "Vamos",
      dir: "/sol-playa-y-arena"
    }
  };

  return (
    <div className="home-sun-beach-and-sand-ctn">
      <div className="home-sun-beach-and-sand-ctn-card">
        <LazyLoadImage 
          src={require(`../../assets/img/header/${listSunBeachAndSand?.image}`)}
          alt={listSunBeachAndSand?.title}
          className="home-sun-beach-and-sand-card-img"
        />
        <div className="home-sun-beach-and-sand-ctn-card-description">
          <h4 className="home-sun-beach-and-sand-card-description-title">{listSunBeachAndSand?.title}</h4>
          <p className="home-sun-beach-and-sand-card-description-subtitle">{listSunBeachAndSand?.subtitle}</p>
          <p className="home-sun-beach-and-sand-card-description-description">{listSunBeachAndSand?.description}</p>
          <Link 
            to={listSunBeachAndSand?.button?.dir}
            className="home-sun-beach-and-sand-card-description-button"
          >
            {listSunBeachAndSand?.button?.title}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeSunBeachAndSand;