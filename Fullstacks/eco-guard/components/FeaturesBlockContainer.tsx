
import React from "react";
import FeaturesBlock from "./FeaturesBlock";

const FeaturesBlockContainer = ({data, img}: {data: Array<any>, img: boolean}) => {
    return (
        <>
            {data.map((item, index) => (
                <FeaturesBlock
                    title={item[Object.keys(item)[0]].title}
                    desc={item[Object.keys(item)[0]].desc}
                    img={img}
                    key={index}
                />
            ))}
        </>
    );
};

export default FeaturesBlockContainer;