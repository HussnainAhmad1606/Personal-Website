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

{/* <PostCard cover={"https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} title={"Test Article"} id={"543324"} tags={["Firebase", "Web dev","2", "#", "Webb"]} description={"This is testing article description"}/> */}

</div>

  </div>
<p className='text-center text-3xl font-bold'>COMING SOON!</p>

    </div>
  )
}
