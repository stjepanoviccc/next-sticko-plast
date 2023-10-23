import Link from "next/link";
import Card from "../../../ui/Card";
import ButtonHolder from "../../../ui/ButtonHolder";

const SliderContent = ({ src, alt, title, href }) => {
  return (
    <>
      <img className="h-[22rem] w-full border-2 border-b-0 rounded-tl-xl rounded-tr-xl" src={src} alt={alt}></img>
      <Card className="text-center pt-4 pb-4 border-2 border-t-0 rounded-bl-xl rounded-br-xl hover:border-gray-200">
        <p className="text-xl font-bold">{title}</p>
        <ButtonHolder className="py-8 text-center">
          <button type="button">
            <Link href={href} className="uppercase px-6 py-4 font-bold leading-6 border-2 rounded-xl transition duration-300">Pregledajte sve</Link>
          </button>
        </ButtonHolder>
      </Card>
    </>
  )
}

export default SliderContent;