import React, { useState, useEffect } from 'react';
import ClassFilterButton from './ClassFilterButton';
import FilterFormLabel from './FilterFormLabel';
import './ClassFilter.css';

const classIcons = {
  demonhunter: require('../../img/class-icons/demonhunter.png'),
  druid: require('../../img/class-icons/druid.png'),
  hunter: require('../../img/class-icons/hunter.png'),
  mage: require('../../img/class-icons/mage.png'),
  paladin: require('../../img/class-icons/paladin.png'),
  priest: require('../../img/class-icons/priest.png'),
  rogue: require('../../img/class-icons/rogue.png'),
  shaman: require('../../img/class-icons/shaman.png'),
  warlock: require('../../img/class-icons/warlock.png'),
  warrior: require('../../img/class-icons/warrior.png'),
  neutral: require('../../img/class-icons/neutral.png')
}

const darkClassIcons = {
  demonhunter: require('../../img/class-icons/demonhunter-dark.png'),
  druid: require('../../img/class-icons/druid-dark.png'),
  hunter: require('../../img/class-icons/hunter-dark.png'),
  mage: require('../../img/class-icons/mage-dark.png'),
  paladin: require('../../img/class-icons/paladin-dark.png'),
  priest: require('../../img/class-icons/priest-dark.png'),
  rogue: require('../../img/class-icons/rogue-dark.png'),
  shaman: require('../../img/class-icons/shaman-dark.png'),
  warlock: require('../../img/class-icons/warlock-dark.png'),
  warrior: require('../../img/class-icons/warrior-dark.png'),
  neutral: require('../../img/class-icons/neutral-dark.png')
}

const classColors = {
  demonhunter: 'hsl(135, 63%, 35%)',
  druid: 'hsl(30, 55%, 50%)',
  hunter: '#2e9c24',
  mage: '#4e9ec7',
  paladin: '#e8d73a',
  priest: '#e8e5c8',
  rogue: '#7d7a80',
  shaman: '#1d3396',
  warlock: '#593380',
  warrior: '#d41d0d',
  neutral: '#75665d'
}

function ClassFilter(props) {
  const [classSelections, setClassSelections] = useState({});
  const [noneSelected, setNoneSelected] = useState(true);

  useEffect(() => {
    // preload all images
    Object.values(classIcons).forEach(image => {
      const img = new Image();
      img.src = image;
    });
    Object.values(darkClassIcons).forEach(image => {
      const img = new Image();
      img.src = image;
    });
  }, [])

  useEffect(() => {
    const classSlugs = [];
    Object.keys(classSelections).forEach(key => {
      if (classSelections[key]) classSlugs.push(key);
    });
    setNoneSelected(classSlugs.length === 0);
    props.setFilterValue('classes', classSlugs);
  }, [classSelections]);

  const toggleClassSelection = (classSlug) => {
    let newClassSelections = {};
    Object.assign(newClassSelections, classSelections);
    if (newClassSelections[classSlug] !== undefined) {
      newClassSelections[classSlug] = !newClassSelections[classSlug];
    }
    else {
      newClassSelections[classSlug] = true;
    }
    setClassSelections(newClassSelections);
  }

  return (
    <>
    <FilterFormLabel label='CLASS' />
    <div className='ClassFilter'>
      {props.classes.map(_class => (
        <ClassFilterButton 
          key={'ClassFilterButton-' + _class.slug}
          class={_class}
          image={(classSelections[_class.slug] || noneSelected) ? classIcons[_class.slug] : darkClassIcons[_class.slug]}
          color={classColors[_class.slug]}
          selected={classSelections[_class.slug] === true}
          handleClick={() => toggleClassSelection(_class.slug)}
        />
      ))}
    </div>
    </>
  );
}

export default ClassFilter;