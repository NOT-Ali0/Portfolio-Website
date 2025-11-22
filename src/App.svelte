<script>
    import AOS from "aos";
    import "aos/dist/aos.css";
    import { onMount } from "svelte";
    import { once } from "svelte/legacy";
    import gsap from "gsap";
    import Nav from "./component/nav.svelte";
    import AboutMe from "./component/about-me.svelte";
    import Skills from "./component/skills.svelte";
    import Projects from "./component/Projects.svelte";
    import FormStuff from "./component/form_stuff.svelte";
    import { TextPlugin } from "gsap/TextPlugin";
    import { SplitText } from "gsap/SplitText";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import {ScrollSmoother} from "gsap/ScrollSmoother"
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(SplitText);
    gsap.registerPlugin(ScrollSmoother) 
    onMount(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });

        gsap.fromTo(
            "#prot-Name",
            {
                y: -25,
                rotate: -1,
                duration: 20,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
            },
            {
                rotate: 2,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
            },
        );
        let split = SplitText.create("#greeting-p2", {
            type: "chars , words , lines",
        });
        gsap.from(split.chars, {
            autoAlpha: 0,
            stagger: {
                amount: 3,
            },
        });
        let split_about = SplitText.create("#about-p", {
            type: "chars , words , lines",
        });
        gsap.from(split_about.lines, {
            scrollTrigger: {
                trigger: "#About-me-h2",
                start: "top 80%",
                toggleActions: "play none none none",
            },
            autoAlpha: 0,
            stagger: {
                amount: 2,
            },
        });

        ScrollSmoother.create({
            wrapper: "#wrapper",
            content: "#content",
            smooth: 2,
            effects: true,
        });
    });
</script>

<div id="wrapper">
    <div id="content">
        <Nav />
        <AboutMe />
        <Skills />
        <Projects />
        <FormStuff />
    </div>
</div>
