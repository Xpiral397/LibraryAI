
import React from "react";

const Button = ({value, color}: {color: string, value: string}) => {
    return (
        <div className="flex flex-col  lg:mb-4 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="/auth/create-account">
                <span
                    className={
                        "inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-indigo-900  hover:bg-gray-900 hover:lg:text-white hover:cursor-pointer " +
                        (color &&
                            "border-white lg:text-white !text-white hover:bg-white hover:!text-gray-900")
                    }
                >
                    {value}
                    <svg
                        className="ml-2 -mr-1 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </span>
            </a>
            <div></div>
        </div>
    );
};

export default Button;