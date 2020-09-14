import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

window.onload = () => {

	//plugin register
	gsap.registerPlugin(ScrollTrigger)

	//landing animation
	gsap.to(".letter", 1.8, { 
		rotationZ: 360,
		x: 0,
		ease: "elastic.out",
		opacity: 1,
		stagger: 0.2
	});
	gsap.to(".without", 1, {
		delay: 1,
		opacity: 1,
		x: 0,
		stagger: 0.2,
		ease: "bounce.out"
	})
	gsap.to(".data", 1, {
		delay: 1.6,
		y: 0,
		opacity: 1,
		ease: "power4",
		stagger: 0.2
	})

	//about me animation
	const abtAnim = gsap.to(".amanim", 
		{opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power4.out"});

	ScrollTrigger.create({
		trigger: "#amtrigger",
		animation: abtAnim
	})


};