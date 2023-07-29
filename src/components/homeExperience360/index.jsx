import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';

const HomeExperience360 = () => {
  const listExperience = {
    title: "Vive la experiencia 360",
    subtitle: "Siénte como si estuvieras ahí y convencete del mejor destino para visitar",
    experiences: [
      {
        name: "Visita el Top 10 destinos  a Nivel  Nacional",
        image: "DF_Bellas_artes_04.webp",
        button: {
          name: "Top 10",
          dir: "/"
        }
      },
      {
        name: "Paisajes y Costas que  Conquistarán tus Sentido",
        image: "NAY_RinconDeGuayabitos_Playas_0529.webp",
        button: {
          name: "Norte",
          dir: "/"
        }
      },
      {
        name: "Un vistazo a Paisajes Coloniales llenos de Tradición",
        image: "GTO_guanajuato_338.webp",
        button: {
          name: "Centro",
          dir: "/"
        }
      },
      {
        name: "Las Costas y Espacios Naturales Que Cautivarán tu Corazón",
        image: "CAM_calakmul53.webp",
        button: {
          name: "Sur",
          dir: "/"
        }
      }
    ]
  };

  const experiences = () => (
    listExperience?.experiences?.map(item => (
      <div className="home-experience-360-ctn-card">
        <LazyLoadImage
          src={require(`../../assets/img/header/${item?.image}`)}
          alt={item?.name}
          className="home-experience-360-card-img"
        />
        <div className="home-experience-360-ctn-card-title">
          <div>
            <p className="home-experience-360-card-title">{item?.name}</p>
            <Link className="home-experience-360-card-button" to={item?.button?.dir}>
              {item?.button?.name}
            </Link>
          </div>
        </div>
      </div>
    ))
  );

  return (
    <div className="home-experience-360-ctn">
      <h5 className="home-experience-360-title">{listExperience?.title}</h5>
      <p className="home-experience-360-subtitle">{listExperience?.subtitle}</p>
      <div className="home-experience-360-ctn-cards">
        {experiences()}
      </div>
    </div>
  );
};

export default HomeExperience360;