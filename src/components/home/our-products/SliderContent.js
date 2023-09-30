import Card from "../../ui/Card";

const SliderContent = ({ src, alt, title, text }) => {
  return (
    <>
      <img className="h-80 w-full rounded-tl-xl rounded-tr-xl" src={src} alt={alt}></img>
      <Card className="text-center pt-4 pb-8 border-2 border-t-0 rounded-bl-xl rounded-br-xl hover:border-gray-200">
        <p className="text-xl font-bold">{title}</p>
        <p className="p-2">{text}</p>
      </Card>
    </>
  )
}

export default SliderContent;
