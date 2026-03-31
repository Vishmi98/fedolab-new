import ScrollLine from '@/components/ScrollAnimation'
import About from '@/modules/home/ui/About'
import FeaturedWorks from '@/modules/home/ui/FeaturedWorks'
import Hero from '@/modules/home/ui/Hero'
import Services from '@/modules/home/ui/Services'
import WhoWeAre from '@/modules/home/ui/WhoWeAre'

const HomePage = () => {
  return (
    <div className="relative overflow-x-hidden bg-gray-100">      {/* The SVG Line stays in the background */}
      <ScrollLine />

      {/* Your content stays in the foreground */}
      <div className="relative z-10">
        <Hero />
        <WhoWeAre />
        <Services />
        {/* <FeaturedWorks /> */}
        {/* <About /> */}
      </div>
    </div>
  )
}

export default HomePage