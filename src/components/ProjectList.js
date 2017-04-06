import React from 'react'
import {Project} from './Project'

export const ProjectList = (props) => (
  <ul>
    {props.projects.map(project =>
      <Project {...project} />
    )}
  </ul>
);
