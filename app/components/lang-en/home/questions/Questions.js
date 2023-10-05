import Link from "next/link";
import Wrap from "../../../ui/Wrap";
import Accordion from "./Accordion";
import ButtonHolder from '../../../ui/ButtonHolder';
import AppearOnScroll from "../../../ui/animations/AppearOnScroll";
import useCheckDevice from "../../../../custom-hooks/CheckDevice";

const Questions = ({ page }) => {
  const windowWidth = useCheckDevice();

  const children = <Wrap className="py-12 md:py-32">
    <div className="flex justify-center items-center">
      <h2 className="pb-2 font-bold text-2xl border-b-2 border-primary sm:text-4xl">Frequently asked questions</h2>
    </div>
    <div className="flex flex-col justify-center items-center pt-8 pb-4 text-center font-bold sm:text-lg lg:pt-12 lg:pb-8">
      <p>Here you can find answers to the most frequently asked questions by our customers.</p>
      <p>If you did not find the answers you were looking for, you can always contact us and we will do our best to explain everything you are interested in as best as possible..</p>
    </div>
    <div className="flex flex-col justify-between gap-0 py-0 lg:py-4 lg:flex-row lg:gap-12">
      <div className="flex flex-col items-center w-full">
        <Accordion title="Pitanje broj 1 glasi" text="U ovaj panel ide odgovor za pitanje U ovaj panel ide odgovor za pitanje U ovaj panel ide odgovor za pitanje U ovaj panel ide odgovor za pitanje U ovaj panel ide odgovor za pitanje" />
        <Accordion title="Pitanje broj 2 glasi" text="U ovaj panel ide odgovor za pitanje" />
        <Accordion title="Pitanje broj 3 glasi" text="U ovaj panel ide odgovor za pitanje" />
      </div>
      <div className="flex flex-col items-center w-full">
        <Accordion title="Pitanje broj 4 glasi" text="U ovaj panel ide odgovor za pitanje" />
        <Accordion title="Pitanje broj 5 glasi" text="U ovaj panel ide odgovor za pitanje" />
        <Accordion title="Pitanje broj 6 glasi" text="U ovaj panel ide odgovor za pitanje" />
      </div>
    </div>
    {page !== "contact" && (
      <ButtonHolder className="pt-16 pb-8 text-center">
        <button type="button">
          <Link href="/en/contact" className="uppercase px-6 py-4 font-bold leading-6 text-primary bg-transparent border-2 border-primary rounded-xl
          transition duration-300 hover:text-white hover:bg-primary hover:border-primary">Contact us
          </Link>
        </button>
      </ButtonHolder>
    )}
  </Wrap>

  return (
    <section id="frequently-asked-questions" className={page === "contact" ? "bg-light" : ''}>
      {page === "contact" && children}
      {page !== "contact" && (
        <AppearOnScroll fromLeft threshold={`${windowWidth > 1280 ? 0.3 : 0.2}`}>
          {children}
        </AppearOnScroll>
      )}
    </section>
  )
}

export default Questions;
