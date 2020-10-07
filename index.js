import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

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
	
	//divide text in aboutme into divs
	let texts = document.querySelectorAll(".amtext");
	for (var i = 0; i <= texts.length - 1; i++){
		let words = []
		words = [...words, ...texts[i].innerHTML.split(' ')]
		let newText = ""
		for (var j = 0; j <= words.length - 1; j++)
			if(words[j] != "")
				newText += "<div class='word amanim'>" + words[j] + "</div>"
		texts[i].innerHTML = newText;
	}

	//about me animation
	setTimeout( function(){
		const amAnim = gsap.to(".amanim", 
			{opacity: 1, y: 0, duration: 1, stagger: 0.01, ease: "power4.out"});

		ScrollTrigger.create({
			trigger: "#amtrigger",
			animation: amAnim
		})
	}, (getWidth() < 1100)? 0 : 2500)

	//skills animation
	setTimeout( function(){
		const sAnim = gsap.to(".sanim", 
			{opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power4.out"});

		ScrollTrigger.create({
			trigger: "#strigger",
			animation: sAnim
		})

	}, (getWidth() < 1100)? 0 : 3500)

	//projects animation
	setTimeout( function(){
		const pAnim = gsap.to(".panim", 
			{opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power4.out"});

		ScrollTrigger.create({
			trigger: "#ptrigger",
			animation: pAnim
		})

	}, (getWidth() < 1100)? 0 : 4000)


};