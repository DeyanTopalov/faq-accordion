"use client";
import { useState, useEffect } from "react";
import PlusIcon from "./plus-icon";
import MinusIcon from "./minus-icon";

const Accordion = () => {
  const [faqData, setFaqData] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  const setIcon = (index) => {
    return openIndex === index ? <MinusIcon /> : <PlusIcon />;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setFaqData(data);
      } catch (error) {
        console.error("Error fetching FAQ data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  useEffect(() => {
    const accordionItems = document.querySelectorAll(".faq-answer"); // Adjust selector if needed

    accordionItems.forEach((item) => {
      if (item.style.display === "block") {
        item.classList.add("transition-all", "duration-1000", "ease-in-out");
      }
    });
  }, [openIndex]);

  return (
    <section>
      {faqData.map((item, index) => (
        <div
          key={item.id}
          className=" border-b-[1px] border-clr-light-pink py-5  md:py-6"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex h-auto w-full cursor-pointer items-center justify-between gap-4 text-left  "
          >
            <span className="text-base font-semibold text-clr-dark-purple hover:text-violet-800">
              {item.question}
            </span>
            {setIcon(index)}
          </button>
          <div
            className={`faq-answer mt-6 ${openIndex === index ? "block  " : "hidden  "}`}
          >
            <div>
              <p className="text-sm text-clr-grayish-purple ">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Accordion;
