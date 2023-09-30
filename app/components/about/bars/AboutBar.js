import Bar from "../../ui/Bar";
import Wrap from "../../ui/Wrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassHalf, faPeopleGroup, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Card from "../../ui/Card";

const AboutBar = () => {

    return (
        <Bar style={{ backgroundImage: `url('../../assets/about/about-bar-min.jpg')`, backgroundAttachment: 'fixed', backgroundPosition: 'bottom', color: 'white'}}>
            <Wrap className="pt-12 pb-12 md:pt-16 md:pb-16">
                <div className="flex flex-col justify-between gap-x-16 gap-y-12 text-center font-bold md:flex-row lg:gap-x-24">
                    <Card className="gap-y-2 border-2 border-white p-8">
                        <FontAwesomeIcon icon={faHourglassHalf} size="2xl" />
                        <p className="text-3xl font-bold pt-2 sm:text-5xl">20+</p>
                        <p className="sm:text-lg">Godina na tržištu</p>
                    </Card>
                    <Card className="gap-y-2 border-2 border-white p-8">
                        <FontAwesomeIcon icon={faPeopleGroup} size="2xl" />
                        <p className="text-3xl font-bold pt-2 sm:text-5xl">10</p>
                        <p className="sm:text-lg">Broj zaposlenih</p>
                    </Card>
                    <Card className="gap-y-2 border-2 border-white p-8">
                        <FontAwesomeIcon icon={faBriefcase} size="2xl" />
                        <p className="text-3xl font-bold pt-2 sm:text-5xl">500+</p>
                        <p className="sm:text-lg">Završenih radova</p>
                    </Card>
                </div>
            </Wrap>
        </Bar>
    )
}

export default AboutBar
