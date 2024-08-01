import HeroSection from '@/components/HeroSection'
import ProjectSection from '@/components/ProjectSection'
import Technologies from '@/components/Technologies'
import Image from 'next/image'

export default function Home() {
  return (
    <div style={{
      minHeight: "100vh"
    }}>
      <HeroSection/>


      <h1 className='text-center font-bold text-3xl my-5'>Technologies</h1>
      <Technologies/>
    </div>
  )
}
