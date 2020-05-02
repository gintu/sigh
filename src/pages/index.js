import React from 'react';
import classes from '../styles/main.module.scss'
import Home from '../sections/home/home'
import Story from '../sections/story/story'
import Work from '../sections/work/work'
import Education from '../sections/education/education'
import Skill from '../sections/skills/skill'

export default function Index() {
  return (
    <div className={classes.container}>
       <Home/>
       <Story/>
       <Work/>
       <Education/>
       <Skill/>
    </div>
  );
}
