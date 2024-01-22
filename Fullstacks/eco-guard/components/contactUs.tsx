
import React from "react";
import Image from "next/image";
import personIcon from "@/public/assets/person.svg";
import mailIcon from "@/public/assets/mail.svg";
import {useRef} from "react";
import Button from "./Button";
import IntroBlock from "./IntroBlock";
import Header from "./Header";

const ContactUs = () => {
    const username = useRef(null);
    const email = useRef(null);
    const message = useRef(null);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        const inp = e.target;

        // Check if nextElementSibling exists before accessing its properties
        if(inp.nextElementSibling) {
            (inp.nextElementSibling as HTMLElement).style.top = "-5px";
        }
    };


    // if the input loses focus no value it will take the label down,
    //  else the label will at the top
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const inp = e.target;

        // Check if nextElementSibling exists before accessing its properties
        if(inp.nextElementSibling) {
            if(inp.value.length >= 1) (inp.nextElementSibling as HTMLElement).style.top = "-5px";
            else(inp.nextElementSibling as HTMLElement).style.top = "50%";
        }
    };

    //if the two password entered does not match it will throw a warning to the user

    return (
        <section className="">
            <div className="flex flex-wrap justify-center md:justify-between">
                <div className="font-bold font-small md:text-xl  flex flex-col my-7">
                    <Header
                        title="Research"
                        color="white"
                        style="md:!text-7xl !text-6xl after:text-white after:content-['.']"
                        duration="800"
                    />
                    <Header
                        title="Research"
                        color="white"
                        style="md:!text-6xl !text-5xl after:text-gray-900 after:content-['.']"
                        duration="1200"
                    />
                    <Header
                        title="Research"
                        color="white"
                        style="md:!text-6xl !text-5xl after:text-white after:content-['.']"
                        duration="1000"
                    />
                </div>
                <form className="md:w-[40%] font-bold font-small md:text-xl order-1 md:order-2">
                    <Header title="Contact us" color={"white"} />
                    {/* Your name */}
                    <div className=" input-box  flex  position  relative  w-[90%]  h-12 input-bg rounded-full mb-7 md:my-7">
                        <Image
                            src={personIcon}
                            alt=""
                            width='0'
                            height='0'
                            className="w-5 h-5 absolute right-4 top-4"
                        />
                        <input
                            type="text"
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                            minLength={10}
                            maxLength={50}
                            required
                            ref={username}
                            className=" w-full  h-full  bg-transparent  outline-none  font-semibold pl-8 px-4"
                        />
                        <label className=" absolute  top-1/2 left-8  text-sm md:text-lg -translate-y-1/2  font-medium  pointer-events-none  transition-[.5s]">
                            Your name
                        </label>
                    </div>
                    {/* Email */}
                    <div className=" input-box  flex  position  relative  w-[95%]  h-12 input-bg rounded-full  my-7">
                        <Image
                            src={mailIcon}
                            alt=""
                            width={'0'}
                            height={'0'}
                            className="w-5 h-5 absolute right-4 top-4"
                        />
                        <input
                            type="email"
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                            minLength={10}
                            maxLength={50}
                            required
                            ref={email}
                            className=" w-full  h-full  bg-transparent  outline-none  font-semibold pl-8 px-4"
                        />
                        <label className=" absolute  top-1/2 left-8  text-sm md:text-lg -translate-y-1/2  font-medium  pointer-events-none  transition-[.5s]">
                            email
                        </label>
                    </div>
                    {/* message */}
                    <div className=" input-box  flex  position  relative  w-full  h-[30vh] input-bg rounded-3xl  my-7">
                        <Image
                            src={personIcon}
                            alt=""
                            className="w-5 h-5 absolute right-4 top-4"
                        />
                        <input
                            type="text"
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                            minLength={10}
                            maxLength={50}
                            required
                            ref={message}
                            className=" w-full  h-full  bg-transparent  outline-none  font-semibold pl-8 px-4"
                        />
                        <label className=" absolute  top-[10%] left-8  text-sm md:text-lg -translate-y-1/2  font-medium  pointer-events-none  transition-[.5s]">
                            Your message
                        </label>
                    </div>
                    <Button value="Submit" color={"white"} />
                </form>
            </div>
        </section>
    );
};

export default ContactUs;