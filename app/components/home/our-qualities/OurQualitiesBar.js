import Bar from "../../ui/Bar";
import Wrap from "../../ui/Wrap";
import Card from '../../ui/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faDollarSign, faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import AppearOnScroll from "../../ui/animations/AppearOnScroll";

const OurQualitiesBar = () => {

  return (
    <Bar bgColor="primary" textColor="white" style={{ overflow: 'hidden' }}>
      <AppearOnScroll fromRight threshold={0.2}>
        <Wrap className="pt-12 pb-12 md:pt-16 md:pb-16">
          <div className="flex flex-col justify-between gap-x-16 gap-y-12 text-center md:flex-row lg:gap-x-24">
            <Card className="gap-y-4">
              <FontAwesomeIcon icon={faBoxOpen} size="2xl" />
              <p className="text-2xl font-bold sm:text-3xl">Brza isporuka</p>
              <p className="sm:text-lg">Izrada i isporuka narudžbe u dogovorenom vremenskom intervalu je ono što nas izdvaja od ostalih.</p>
            </Card>
            <Card className="gap-y-4">
              <FontAwesomeIcon icon={faTrophy} size="2xl" />
              <p className="text-2xl font-bold sm:text-3xl">Preciznost</p>
              <p className="sm:text-lg">Preciznost i pedantnost su veoma bitni faktori koje poseduje naše osoblje i ujedno odlikuje našu firmu.</p>
            </Card>

            <Card className="gap-y-4">
              <FontAwesomeIcon icon={faDollarSign} size="2xl" />
              <p className="text-2xl font-bold sm:text-3xl">Pristupačnost</p>
              <p className="sm:text-lg">Mi se trudimo da Vam po što pristupačnijoj ceni isporučimo Vašu narudžbu i ispunimo sve Vaše zahteve.</p>
            </Card>
          </div>
        </Wrap>
      </AppearOnScroll>
      <div className="absolute border-[20px] border-b-0 border-l-transparent border-r-transparent border-solid border-primary left-1/2 transform -translate-x-1/2 md:block"></div>
    </Bar>
  )
}

export default OurQualitiesBar;
