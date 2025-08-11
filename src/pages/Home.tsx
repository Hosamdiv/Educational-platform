import BestSeller from "../components/BestSeller"
import CurPolicy from "../components/CurPolicy"
import Hero from "../components/Hero"
import LatestCollection from "../components/LatestCollection"
import NewsletterBox from "../components/NewsletterBox"

const HomePage = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <CurPolicy />
      <NewsletterBox />
    </div>
  )
}

export default HomePage