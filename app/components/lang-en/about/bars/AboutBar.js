import Bar from "../../../ui/Bar";
import Wrap from "../../../ui/Wrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassHalf, faPeopleGroup, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Card from "../../../ui/Card";
import NumberCounter from "../../../ui/animations/NumberCounter";

const AboutBar = () => {

    return (
        <Bar style={{ backgroundImage: `url('../../assets/about/about-bar-min.jpg')`, backgroundAttachment: 'fixed', backgroundPosition: 'bottom', color: 'white' }}>
            <Wrap className="pt-12 pb-12 md:pt-16 md:pb-16">
                <div className="flex flex-col justify-between gap-x-16 gap-y-12 text-center font-bold md:flex-row lg:gap-x-24">
                    <Card className="gap-y-2 border-2 border-white p-8">
                        <FontAwesomeIcon icon={faHourglassHalf} size="2xl" />
                        <NumberCounter target={20}>+</NumberCounter>
                        <p className="sm:text-lg">Year on the market</p>
                    </Card>
                    <Card className="gap-y-2 border-2 border-white p-8">
                        <FontAwesomeIcon icon={faPeopleGroup} size="2xl" />
                        <NumberCounter target={10}></NumberCounter>
                        <p className="sm:text-lg">Number of employees</p>
                    </Card>
                    <Card className="gap-y-2 border-2 border-white p-8">
                        <FontAwesomeIcon icon={faBriefcase} size="2xl" />
                        <NumberCounter target={500}>+</NumberCounter>
                        <p className="sm:text-lg">Completed works</p>
                    </Card>
                </div>
            </Wrap>
        </Bar>
    )
}

export default AboutBar;
