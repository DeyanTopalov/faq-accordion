"use client";
import { useState } from "react";

const Accordion = () => {
  return (
    <div>
      <button className="flex w-full items-center justify-between gap-4 text-left">
        <span>
          How can I get help if I'm stuck on a Frontend Mentor challenge?
        </span>
        <span>+</span>
      </button>
      <div>
        <div>This is the answer</div>
      </div>
    </div>
  );
};

export default Accordion;
