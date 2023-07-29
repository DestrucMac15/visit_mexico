import React from 'react';
import { useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import experiences from '../../assets/data/experiences/index.json';
import './styles.css';

const ExperienceImages = () => {
  const location = useLocation();
  const stateId = location?.pathname?.split('/')[2];
  const getStateInfo = experiences?.experiences?.filter(experience => experience.id === stateId);
  const data = getStateInfo?.[0];

  const getGallery = () => (
    data?.gallery?.map(item => (
      <div className="experience-images-ctn-img-experience">
        <LazyLoadImage 
          src={require(`../../assets/img/experiences/${item?.imageUrl}`)}
          alt={item?.title}
          className="experience-images-img-experience"
        />
        <div className="experience-images-ctn-img-experience-description">
          <p className="experience-images-img-experience-description">{item?.title}</p>
        </div>
      </div>
    ))
  )

  return (
    <section className="experience-images-ctn">
      <h1 className="experience-images-title">{data?.title}</h1>
      <div className="experience-images-ctn-img">
        {getGallery()}
      </div>
    </section>
  )
};

export default ExperienceImages;
