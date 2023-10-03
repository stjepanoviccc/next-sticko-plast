import Wrap from "../../ui/Wrap";

const NewInTheOffer = () => {

    return (
        <section id="new-in-the-offer py-64">
            <Wrap className="py-12 md:py-32">
                <div className="flex justify-center items-center">
                    <h2 className="pb-2 font-bold text-2xl border-b-2 border-primary sm:text-4xl">USKORO NOVO U PONUDI !</h2>
                </div>
                <div className="flex flex-col justify-center items-center pt-8 pb-4 text-center font-bold sm:text-lg lg:pt-12 lg:pb-8">
                    <p>Pvc 6 komora u laminacija drvo . Koje Vam se više svidja, svetlije ili tamnije drvo?</p>
                </div>
                <div className="rounded-xl pt-6">
                    <img className="cursor-pointer" src="../../../../assets/products/new/new.jpg"></img>
                </div>
            </Wrap>
        </section >
    )
}

export default NewInTheOffer;