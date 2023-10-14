import Link from "next/link";
import useCheckDevice from "../../../../custom-hooks/CheckDevice";
import Wrap from "../../../ui/Wrap";
import ButtonHolder from "../../../ui/ButtonHolder";
import AppearOnScroll from "../../../ui/animations/AppearOnScroll";

const AboutUs = () => {
  const windowWidth = useCheckDevice();

  return (
    <section id="our-mission">
      <AppearOnScroll fromLeft threshold={`${windowWidth > 1280 ? 0.3 : 0.1}`}>
        <Wrap className="py-12 md:py-32">
          <div className="flex justify-center items-center lg:justify-start">
            <h2 className="pb-2 font-bold text-2xl border-b-2 border-primary sm:text-4xl">About us</h2>
          </div>
          <div className="flex flex-col gap-x-20 gap-y-10 py-8 sm:text-lg lg:py-12 lg:flex-row">
            <div className="flex-1 flex flex-col justify-center text-center lg:justify-start lg:text-left">
              <p>
                We are revolutionaries in the world of installing doors, windows and other PVC and aluminum joinery.
                Our early beginning dates back to the year 2000, where we started our wonderful story after the first successful installation and
                the first satisfied customer. From the very beginning, we have been dedicated to turning houses into homes, one flawlessly at a time
                designed project. Our vision is to transform homes and businesses through the installation of superior joinery
                quality. We strive to be a trusted partner that improves aesthetic appeal, energy efficiency
                and the safety of every space we touch.
                Our portfolio boasts a number of different projects, each of which is a testament to our careful
                attention to detail and our unwavering commitment to enhancing the aesthetics and functionality of homes.
                This wonderful journey has been marked by growth, learning and a relentless pursuit of excellence, and we look forward to it
                to share our expertise with you in order to achieve everything you have imagined.
                Thank you for being a part of our journey as we continue into the future.
              </p>
              <ButtonHolder className="pt-12 py-4 lg:text-left">
                <button type="button">
                  <Link href="/en/about-us" className="uppercase px-6 py-4 font-bold leading-6 text-white bg-primary border-2 border-primary rounded-xl
                    transition duration-300 hover:text-primary hover:bg-white hover:border-primary">More about us
                  </Link>
                </button>
              </ButtonHolder>
            </div>
            <div className="flex-1 flex justify-center lg:justify-end">
              <img className="max-h-[500px]" src="../../assets/about/our-mission.jpg" alt="about-img"></img>
            </div>
          </div>
          <div>
          </div>
        </Wrap>
      </AppearOnScroll>
    </section >
  )
}

export default AboutUs;