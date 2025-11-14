<script>
    import AOS from "aos";
    import "aos/dist/aos.css";
    import { onMount } from "svelte";
    import { once } from "svelte/legacy";

    onMount(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    });
</script>

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfolio Wepsite</title>
</head>

<body>
    <div id="root">
        <div data-aos="fade-down" id="nav-container">
            <b id="logo-name">AM</b>
            <nav>
                <ul id="navi-ul">
                    <li><a href="#greeting">Home</a></li>
                    <li><a href="#About-me">About</a></li>
                    <li><a href="#Skills">Skills</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#Touch">Contact</a></li>
                </ul>
            </nav>
            
        </div>
        <div data-aos="fade-down" id="greeting">
            <div id="greeting-p1">
                <p>Hi, I'm</p>
            </div>
            <div>
                <h3><span>Ali</span> Mohammed</h3>
            </div>
            <div id="greeting-p2">
                <p>
                    A passionate full-stack developer crafting beautiful,
                    functional web experiences.
                </p>
                <p>
                    I turn ideas into elegant solutions with modern technologies
                </p>
            </div>
            <div>
                <button id="button-2"
                    ><a href="#Projects">View my work</a></button
                >
                <button id="button-1"><a href="#Touch">Get In Touch</a></button>
            </div>
            <div class="arrow-down"></div>
        </div>
    </div>
    <div id="About-me">
        <h2 data-aos="fade-down">About <span>Me</span></h2>
        <div data-aos="fade-down" id="About-me-p">
            <p>
                I'm a passionate developer with over 5 years of experience
                building modern web applications.
            </p>
            <p>
                I specialize in creating responsive, accessible, and performant
                solutions that solve real-world problems.
            </p>
            <br />
            <p>
                My approach combines technical expertise with design thinking,
                ensuring every project not only works flawlessly but also
                delivers an exceptional user experience.
            </p>
            <div id="cart-container">
                <div id="About-cart-me1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-code-icon lucide-code"
                    >
                        <path d="m16 18 6-6-6-6" />
                        <path d="m8 6-6 6 6 6" />
                    </svg>
                    <h3>Clean Code</h3>
                    <p>
                        Writing maintainable, scalable code following best
                        practices and modern patterns
                    </p>
                </div>
                <div id="About-cart-me2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-paintbrush-vertical-icon lucide-paintbrush-vertical"
                    >
                        <path d="M10 2v2" />
                        <path d="M14 2v4" />
                        <path d="M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z" />
                        <path
                            d="M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1"
                        />
                    </svg>
                    <h3>Design Focus</h3>
                    <p>
                        Creating beautiful, intuitive interfaces that users love
                        to interact with
                    </p>
                </div>
                <div id="About-cart-me3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-gauge-icon lucide-gauge"
                    >
                        <path d="m12 14 4-4" />
                        <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                    </svg>
                    <h3>Performance</h3>
                    <p>
                        Optimizing for speed, accessibility, and exceptional
                        user experiences
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div id="Skills">
        <h2 data-aos="fade-down">Technical <span>Skills</span></h2>
        <div data-aos="fade-down" id="Skills-tech">
            <div id="Frontend">
                <h4>Frontend</h4>
                <ul id="Frontend-ul">
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Vue.js</li>
                </ul>
            </div>
            <div id="Backend">
                <h4>Backend</h4>
                <ul id="Backend-ul">
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>C#</li>
                    <li>C</li>
                </ul>
            </div>
            <div id="Tools-others">
                <h4>Tools & Others</h4>
                <ul id="Tools-ul">
                    <li>Git</li>
                    <li>Vite</li>
                    <li>Docker</li>
                    <li>Wordpress</li>
                </ul>
            </div>
        </div>
    </div>
    <div id="Projects">
        <h2 data-aos="fade-down">Featured <span>Projects</span></h2>
        <div data-aos="fade-down" id="Projects-Parent">
            <div id="Projects-1">
                <h4>Cinema App</h4>
                <p>
                    A modern web application, view details, and manage cinema
                    schedules. It offers an easy and engaging way to discover
                    films and showtimes.
                </p>
                <ul id="Projects-ul">
                    <li>C#</li>
                </ul>
                <a href="https://github.com/NOT-Ali0/CinemaPro" target="_blank"
                    ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-github-icon lucide-github"
                    >
                        <path
                            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                        />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg> Code</a
                >
            </div>
            <div id="Projects-2">
                <h4>Keep Goaler Game</h4>
                <p>
                    A fast-paced ball game where you play as the goalkeeper
                    trying to stop goals. It tests your reflexes, timing, and
                    focus with fun, challenging levels.
                </p>
                <ul id="Projects-ul2">
                    <li>Python</li>
                </ul>
                <a href="https://github.com/NOT-Ali0/KeepGoaler" target="_blank"
                    ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-github-icon lucide-github"
                    >
                        <path
                            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                        />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg> Code</a
                >
            </div>
            <div id="Projects-3">
                <h4>Shopping Cart</h4>
                <p>
                    An interactive e-commerce web app to browse and manage
                    products. Users can add, remove, and purchase items through
                    a simple, clean interface.
                </p>
                <ul id="Projects-ul3">
                    <li>html</li>
                    <li>javascript</li>
                    <li>Tailwind</li>
                </ul>
                <a
                    href="https://github.com/NOT-Ali0/Shopping-Cart"
                    target="_blank"
                    ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-github-icon lucide-github"
                    >
                        <path
                            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                        />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg> Code</a
                >
            </div>
        </div>
    </div>
    <div id="Touch">
        <h2 data-aos="fade-down">Get In <span>Touch</span></h2>
        <div data-aos="fade-down" id="Forma">
            <label for="name-input">Name</label>
            <input id="name-input" type="text" placeholder="Your name" />
            <label for="email-input">Email</label>
            <input id="email-input" type="email" placeholder="Your@email.com" />
            <label for="subject-input">Subject</label>
            <input
                id="subject-input"
                type="text "
                placeholder="What's this about?"
            />
            <label for="areatext-input">Message</label>
            <textarea id="areatext-input" placeholder="Your Message"></textarea>
            <button id="css-web">Send Message</button>
        </div>
        <div data-aos="fade-down" id="Touch-links">
            <a href="https://github.com/NOT-Ali0" target="_blank"
                ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-github-icon lucide-github"
                >
                    <path
                        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                    />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg></a
            >
            <a href="mailto:tretrams@gmail.com" target="_blank"
                ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-mail-icon lucide-mail"
                >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg></a
            >
            <a
                href="https://www.linkedin.com/in/ali-mohammed-95a0a82a6/"
                target="_blank"
                ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-linkedin-icon lucide-linkedin"
                >
                    <path
                        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                    />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                </svg></a
            >
        </div>
    </div>
</body>
