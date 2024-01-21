import React from "react";

const StickyScrollBlock = ({ block, desc }) => {
  return (
    <section className="md:h-100vh p-4 pl-5 overflow-x-hidden sm:overflow-x-visible">
      <div className="">
        <div className="flex flex-wrap">
          <div className="md:py-[8.125rem] md:w-[32.66667%] md:flex-grow-0 md:flex-shrink-0 md:basis-auto">
            <div className="md:sticky top-1/2 -translate-y-1/2 pr-[8.33333%]">
              {desc}
            </div>
          </div>
          <div className="md:py-[8.125rem] md:translate-y-0 md:grid md:gap-[1.875rem]  md:w-[50.66667%] md:flex-grow-0 md:flex-shrink-0 md:basis-auto md:box-border">
            {block}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyScrollBlock;
