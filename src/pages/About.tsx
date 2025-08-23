import { assets } from "../assets/assets"
import NewsletterBox from "../components/NewsletterBox"
import Title from "../components/Title"

const AboutPage = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1="ABOUT" text2="US" />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px] " src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nostrum, atque officiis ad officia laudantium? Numquam et ipsum deserunt, odio sequi magnam suscipit ad, sint a velit architecto impedit facilis!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto earum sunt, consectetur asperiores sequi molestiae dolor magnam harum! Totam illum unde quam voluptas natus similique laborum in minus, labore distinctio corrupti! Libero est inventore ut iste nostrum necessitatibus dolore vero.</p>
          <b className="text-gray-800">Our Mission</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro at veritatis adipisci quae quam corrupti ratione officia, a, veniam pariatur iusto consequatur incidunt voluptate reprehenderit dolorem quibusdam rem velit vitae aut neque provident? Ratione, nostrum?</p>
        </div>
      </div>

      <div className="text-4xl py-4">
        <Title text1="WHY" text2="CHOOSE US" />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">With our   user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">Our team of dedicated professionals is here to support you, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>
      
      <NewsletterBox />
    </div>
  )
}

export default AboutPage