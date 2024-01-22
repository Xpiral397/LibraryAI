"use client"
import {useRef} from "react";
import {info, reasons, aboutUs, featureHeader, features} from "@/config/data.json";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import IntroBlock from "@/components/IntroBlock";
import Header from "@/components/Header";
import Navigation from "@/components/navigtion/Navigation";
import Hero from "@/components/Hero";
import StickyScrollBlock from "@/components/StickyScrollBlock";
import FeaturesBlockContainer from "@/components/FeaturesBlockContainer";
import ContactUs from "@/components/contactUs";
import Credit from "@/components/Credit";
AOS.init()
function App() {
	const homeRef = useRef(null);
	const infoRef = useRef(null);
	const aboutRef = useRef(null);
	const whyUsRef = useRef(null);
	const contactUsRef = useRef(null);

	const stickyDesc = (
		<>
			<div className="md:block hidden">
				<IntroBlock title={featureHeader.title} desc={featureHeader.desc} />
			</div>

			<Header title={info.title} style="md:hidden" />
		</>
	);

	return (
		<>
			<Navigation
				PositionList={[homeRef, infoRef, aboutRef, whyUsRef, contactUsRef]}
			/>
			<Hero ref={homeRef} />
			<section className="container__block container" ref={infoRef}>
				<IntroBlock title={info.title} desc={info.desc} />
			</section>

			<StickyScrollBlock
				desc={stickyDesc}
				block={<FeaturesBlockContainer data={features} img={true} />}
			/>

			<section className="bg-gray-900 container__block" ref={aboutRef}>
				<div className="container ">
					<IntroBlock
						title={aboutUs.title}
						desc={aboutUs.desc}
						color={aboutUs.color}
					/>
				</div>
			</section>

			<section ref={whyUsRef} className="container__block container">
				<IntroBlock
					title="why choose EcoGuard"
					desc="we offer a smart solution for conservation.We leverage the power of technology to enhance the monitoring and management of ecosystem's. we help conservationist, researchers, and environmental organization to  "
					btn={false}
				/>
				<div className=" grid grid--1x2">
					<FeaturesBlockContainer data={reasons} img={false} />
				</div>
			</section>

			<section className="bg-gray-900" ref={contactUsRef}>
				<div className="container container__block">
					<ContactUs />
				</div>
				<Credit />
			</section>
		</>
	);
}

export default App;