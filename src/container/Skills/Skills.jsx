import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import { useMediaQuery } from 'react-responsive';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client'; 
import './Skills.scss';


const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [filterSkills, setFilterSkills] = useState([]);
  const [activeFilter, setActiveFilter] = useState('frontend');
  const [experiences, setExperiences] = useState([]);

  const isTablet = useMediaQuery({ query: '(max-width: 800px)' });

  useEffect(() => {
    const query = `*[_type == "experiences"]`;
    const skillsQuery = `*[_type == "skills"]`;

    client.fetch(query)
      .then((data) => {
        setExperiences(data);
      });

    client.fetch(skillsQuery)
      .then((data) => {
        setSkills(data);
        setFilterSkills(data.filter( skill => skill.type === 'frontend'));
      });  
  },[])

  const handleSkillsFilter = (item) => {
    setActiveFilter(item);
    setFilterSkills(skills.filter( skill => skill.type === item))
  }

  return (
    <>
     <h2 className='head-text'>Skills and Experience</h2>

     <div className='app__skills-filter'>
          {
            ['frontend', 'backend'].map((item, index) => (
              <div
                key={index}
                onClick={() => handleSkillsFilter(item)}
                className={`app__skills-filter-item app__flex ${ activeFilter === item ? 'item-active' : ''}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </div>  
            ))
          }
      </div>

     <div className='app__skills-container'>

       <motion.div className='app__skills-list'>
        {filterSkills?.map((skill) => (
          <motion.div
            whileInView={{opacity: [0, 1]}}
            transition={{ duration: 0.5 }}
            className='app__skills-item app__flex'
            key={skill.name}
          >
            <div className='app__flex' style={{ backgroundColor: skill.bgColor }}>
              <img src={urlFor(skill.icon)} alt={skill.name} />
            </div>
            <p className='p-text'>{skill.name}</p>
          </motion.div>
        ))}
       </motion.div>

       <motion.div className='app__skills-exp'>
         {experiences?.map((experience) => (
           <motion.div
             className='app__skills-exp-item'
             key={experience.year}
           >
             <div className='app__skills-exp-year'>
              <p className='bold-text'>{experience.year}</p>
             </div>
             <motion.div className='app__skills-exp-works'>
              {experience.works?.map((work) => (
                <>
                  <motion.div
                  whileInView={{opacity: [0, 1]}}
                  transition={{ duration: 0.5 }}
                  className='app__skills-exp-work app__flex'
                  data-tip
                  data-for={work.name}
                  key={work.name}
                  >
                    <h4 className='bold-text'>{work.name}</h4>
                    <p className='p-text'>{work.company}</p>
                  </motion.div>
                  <ReactTooltip
                    id={work.name}
                    place={ isTablet ? 'bottom' : 'right'}
                    effect='solid'
                    arrowColor='#fff'
                    className='skills-tooltip'
                  >
                    {work.desc}
                  </ReactTooltip>
                </>
              ))}
             </motion.div>
           </motion.div>
         ))}
          
       </motion.div>
     </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills') , 
  'skills',
  'app__secondarybg'
);