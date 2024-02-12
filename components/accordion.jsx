"use client";
import { useState } from "react";
import PlusIcon from "./plus-icon";
import MinusIcon from "./minus-icon";

const Accordion = () => {
  return (
    <section>
      <div className="border-b-[1px] border-clr-light-pink py-5 md:py-6">
        <button className="flex w-full items-center justify-between gap-4 text-left">
          <span className="text-base font-semibold text-clr-dark-purple">
            How can I get help if I'm stuck on a challenge?
          </span>
          <MinusIcon />
        </button>
        <div>
          <div className="mt-6">
            <p className="text-sm text-clr-grayish-purple">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              dicta fuga nam a vel eligendi?
            </p>
          </div>
        </div>
      </div>
      <div className="border-b-[1px] border-clr-light-pink py-5 md:py-6">
        <button className="flex w-full items-center justify-between gap-4 text-left">
          <span>
            How can I get help if I'm stuck on a Frontend Mentor challenge?
          </span>
          <PlusIcon />
        </button>
        {/* <div>
        <div>This is the answer</div>
      </div> */}
      </div>
    </section>
  );
};

export default Accordion;

// answer with margin top 24px
// border with margin top20/24px
