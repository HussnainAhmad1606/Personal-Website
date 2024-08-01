"use client"
import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import '@splidejs/react-splide/css';
function ProjectSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const getProjects = async() => {
    setIsLoading(true);
    const request = await fetch("/api/getProjects");
    const data = await request.json();
    setProjects(data.projects)
    setIsLoading(false);
  }

  useEffect(() => {
    getProjects();
  }, [])
  
  return (
    <div>
        <h1 className='my-10 text-3xl text-center font-bold'>My Projects</h1>
    <div className='flex justify-center items-center'>
      {
        isLoading?(
          <span className="loading loading-infinity loading-lg"></span>
        ):null
      }



        <Splide  options={ {
          rewind: true,
        perPage: 3,
        perMove: 1,
        gap    : '1rem',
      focus  : 'center',
      } }>

  {
    projects.map((project, index)=> {
      return <SplideSlide
     
      
      >
          <ProjectCard key={"project"+project.id} demo={project.demo} cover={project.cover} id={project.id} name={project.name} description={project.description} techStack={project.technologies}/>
          </SplideSlide>
        

        })
      }
</Splide>
    </div>
    </div>
  )
}

export default ProjectSection