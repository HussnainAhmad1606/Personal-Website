"use client"
import React from 'react'
import "@/css/singleProject.css"
function ProjectCard({name, cover, description, demo, techStack, githubLink, id}) {
  const badges = ['primary', 'neutral', 'secondary', 'accent']

    const openModel = ()=>{
        document.getElementById(`my_modal_${id}`).showModal()
    };
  return (
<>
    <div style={{
      height: "500px"
    }} className="card bg-base-100 shadow-xl">
  <figure><img src={cover} alt={name + " cover img"} /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <div className='flex flex-wrap'>

    {
        techStack.map((tech, index)=>{
            return <span key={index} className={`m-2 badge badge-accent`}>{tech}</span>
        })
    }
    </div>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={()=>{
        openModel();
      }}>Open</button>
    </div>
  </div>
</div>

<dialog id={`my_modal_${id}`} className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
    <h3 className="font-bold text-center my-5 text-3xl">{name}</h3>
  <div className='flex justify-center '>
  <figure><img src={cover} alt={name + " cover img"} /></figure>

  <div className='mx-5'>
    <h1 className='text-2xl font-bold my-3'>Description:</h1>
    <p>{description}</p>
    <h1 className='text-2xl font-bold my-3'>Technologies:</h1>
    {
        techStack.map((tech)=>{
            return <span key={tech} className="m-2 badge badge-accent">{tech}</span>
        })
    }
  </div>
  </div>

    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
    <a href={demo} className='mx-2 btn btn-primary' target='_blank'>Open</a>
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
</>
  )
}

export default ProjectCard