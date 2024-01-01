import React from 'react'
import ProjectCard from './ProjectCard'

function ProjectSection() {
  return (
    <div>
        <h1 className='my-10 text-3xl text-center font-bold'>Projects</h1>
    <div className='flex justify-center items-center'>

    <div className='grid grid-cols-1 md: grid-cols-2 lg: grid-cols-3'>
        <ProjectCard id={1} name={"Test"} techStack={["HTML"]}/>
        <ProjectCard id={2} name={"Test 2"} techStack={["HTML", "CSS"]}/>
        </div>
    </div>
    </div>
  )
}

export default ProjectSection