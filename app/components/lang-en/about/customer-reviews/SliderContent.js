import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const SliderContent = ({ src, alt, name, text }) => {
  const stars = Array(5).fill(null);

  return (
      <div className="py-8 px-4 bg-transparent border-2 rounded-xl border-primary">
        <img className="h-20 w-20 absolute -top-10 left-1/2 transform -translate-x-1/2 rounded-full border-2 border-primary" src={src} alt={alt}></img>
        <div className="pt-4 flex justify-center">
          {stars.map((_, index) => (
            <FontAwesomeIcon key={index} icon={faStar} className="h-4" />
          ))}
        </div>
        <h5 className="text-lg pt-2 font-bold">{name}</h5>
        <p className="pt-4">{text}</p>
      </div>
  )
}

export default SliderContent
