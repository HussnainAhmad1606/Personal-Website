import AboutMe from '@/components/AboutMe'
import PostCard from '@/components/PostCard'
import Image from 'next/image'

export default function Home() {
  return (
    <div style={{
      minHeight: "100vh"
    }}>
    <div className='my-5'>
    <h1 className='text-center my-5 text-3xl font-bold'>Playground</h1>
      <p className='text-center'>Dive into my creative space where I experiment with new ideas and innovative projects</p>
    </div>

  <div className='flex justify-center items-center'>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

<PostCard cover={"/wklyship.png"} title={"WklyShip"} id={"wklyship"} tags={["Web", "Android"]} description={"WklyShip is a challenge, where For the rest of 2024, I’ll be building one project per week across various domains"}/>

</div>

</div>

</div>
 
  )
}
