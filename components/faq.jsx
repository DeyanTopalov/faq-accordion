import Accordion from "./accordion";
import StarIcon from "./star-icon";

const FAQ = () => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-2xl md:w-[37.5rem] md:rounded-3xl md:p-10">
      <div className="flex items-center justify-start gap-6">
        <div className="-ml-2">
          <StarIcon />
        </div>
        <h1 className="text-[2rem] font-bold text-clr-dark-purple">FAQs</h1>
      </div>
      <Accordion />
    </div>
  );
};

export default FAQ;
