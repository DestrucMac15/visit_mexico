import React from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import ExperienceVideo from '../../components/experienceVideo';
import ExperienceImages from '../../components/experienceImages';
import ExperienceContent from '../../components/experienceContent';
import './styles.css';

const Experience = () => {
  return (
    <div className="main-content">
      <ExperienceVideo />
      <LazyLoadComponent>
        <ExperienceImages />
        <ExperienceContent />
      </LazyLoadComponent>
    </div>
  );
};

export default Experience;
