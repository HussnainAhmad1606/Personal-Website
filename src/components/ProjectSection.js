import React from 'react'
import ProjectCard from './ProjectCard'

function ProjectSection() {
  return (
    <div>
        <h1 className='my-10 text-3xl text-center font-bold'>Projects</h1>
    <div className='flex justify-center items-center'>

    <div className='grid grid-cols-2'>
        <ProjectCard/>
        <ProjectCard/>
        </div>
    </div>
    </div>
  )
}

export default ProjectSection