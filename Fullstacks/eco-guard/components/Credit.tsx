
import React from "react";

const listItems = [
    "Privacy Policy",
    "Cookie Policy",
    "ofcom",
    "Modern slavery statement",
];

function Credit() {
    return (
        <section>
            <div className="flex flex-wrap">
                <div className="mx-[1.3rem] md:mx-[4.6875rem]  ">
                    <ul className="flex flex-wrap">
                        {listItems.map((item, index) => (
                            <CreditList title={item} key={index} />
                        ))}
                    </ul>
                    <p className="text-[#827e7e] text-lg">
                        © 2023 ROCK. All rights reserved.{" "}
                    </p>
                </div>
            </div>
        </section>
    );
}

function CreditList({title}: {title: string}) {
    return (
        <li className="mr-[3rem] md:mr-[5rem] mb-[1.25rem]">
            <a
                href=""
                className="  after:content-[''] after:bg-[white] after:block after:h-[1px] after:w-0 after:transition-all after:duration-[0.4s] hover:after:w-full py-[7px] text-[#827e7e]  text-lg"
            >
                {title}
            </a>
        </li>
    );
}

export default Credit;