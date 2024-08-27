import Link from 'next/link'
import React from 'react'

function PostCard({cover, title, id, tags, description}) {
    const badges = ['primary']
  return (
    <div className="my-5 card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={cover}
      alt={"Article Cover"} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>

    <div className='grid grid-cols-3 gap-3'>
    {
        tags.map((tag, index) => (
            <div key={index} className={`badge badge-primary`}>
            {tag}
        </div>
        ))
    }
    </div>


    <div className="card-actions justify-end">
      <Link href={`/playground/${id}`} className="btn btn-primary">Open</Link>
    </div>
  </div>
</div>
  )
}

export default PostCard