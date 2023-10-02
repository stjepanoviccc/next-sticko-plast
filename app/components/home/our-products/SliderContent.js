import Card from "../../ui/Card";

const SliderContent = ({ src, alt, title }) => {
  return (
    <>
      <img className="h-[22rem] w-full rounded-tl-xl rounded-tr-xl" src={src} alt={alt}></img>
      <Card className="text-center pt-4 pb-4 border-2 border-t-0 rounded-bl-xl rounded-br-xl hover:border-gray-200">
        <p className="text-xl font-bold">{title}</p>
      </Card>
    </>
  )
}

export default SliderContent;