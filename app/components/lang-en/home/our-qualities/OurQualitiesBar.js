import Bar from "../../../ui/Bar";
import Wrap from "../../../ui/Wrap";
import Card from '../../../ui/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faDollarSign, faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import AppearOnScroll from "../../../ui/animations/AppearOnScroll";

const OurQualitiesBar = () => {

  return (
    <Bar bgColor="primary" textColor="white" style={{ overflow: 'hidden' }}>
      <AppearOnScroll fromRight threshold={0.2}>
        <Wrap className="pt-12 pb-12 md:pt-16 md:pb-16">
          <div className="flex flex-col justify-between gap-x-16 gap-y-12 text-center md:flex-row lg:gap-x-24">
            <Card className="gap-y-4">
              <FontAwesomeIcon icon={faBoxOpen} className="h-8" />
              <p className="text-2xl font-bold sm:text-3xl">Fast delivery</p>
              <p className="sm:text-lg">Making and delivering the order in the agreed time interval is what sets us apart from the rest.</p>
            </Card>
            <Card className="gap-y-4">
              <FontAwesomeIcon icon={faTrophy} className="h-8" />
              <p className="text-2xl font-bold sm:text-3xl">Precision</p>
              <p className="sm:text-lg">Precision and meticulousness are very important factors possessed by our staff and at the same time distinguish our company.</p>
            </Card>

            <Card className="gap-y-4">
              <FontAwesomeIcon icon={faDollarSign} className="h-8" />
              <p className="text-2xl font-bold sm:text-3xl">Accessibility</p>
              <p className="sm:text-lg">We try to deliver your order at the most affordable price and fulfill all your requirements.</p>
            </Card>
          </div>
        </Wrap>
      </AppearOnScroll>
      <div className="absolute border-[20px] border-b-0 border-l-transparent border-r-transparent border-solid border-primary left-1/2 transform -translate-x-1/2 md:block"></div>
    </Bar>
  )
}

export default OurQualitiesBar;
