import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './index.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Logo and asset URLs
const LOGO = 'https://ext.same-assets.com/2090949236/4057211834.bin';
const AI_GRAPHIC = 'https://ext.same-assets.com/2090949236/19336533.bin';


function App() {
  // Refs for animation
  const heroRef = useRef(null);
  const heroImageRef = useRef(null); // Ref for the hero image
  const cardRefs = useRef<HTMLDivElement[]>([]); // Specify type as HTMLDivElement[]
  const infoRefs = useRef<HTMLDivElement[]>([]);
  const productRefs = useRef<HTMLDivElement[]>([]);
  const blogRefs = useRef<HTMLDivElement[]>([]);
  const footerRef = useRef(null);

  useEffect(() => {
    // Hero Section Animation with Hero Image - Scrub and Yoyo
    const heroTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top', // Start animation when hero section reaches the top of the viewport
        end: 'bottom top', // End animation when the bottom of hero section reaches the top of the viewport
        scrub: 1, // Smooth scrubbing, tied to scroll position
        // markers: true, // Enable markers for debugging the scroll trigger
      },
    });

    heroTimeline.fromTo(
      heroRef.current,
      {  y: 0, opacity: 1 },
      {  y: -50, opacity: 0, duration: 1, ease: 'power2.inOut' },  // fade out and move the hero up when scrolling through
    );

    heroTimeline.fromTo(
      heroImageRef.current,
      { x: 0, opacity: 1, scale: 1 },
      { x: 100, opacity: 0, scale: 0.8, duration: 1, ease: 'power2.inOut' }, // Image moves and fades out
      '-=0.5' // Start image animation slightly before text
    );


    // Cards Animation - Scrub and Yoyo
    gsap.utils.toArray(cardRefs.current).forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 20%', // end animation with scrubbing
            scrub: 1,  // scrubbing
            // markers: true,
          },
        }
      );
    });

    // Info Blocks Animation - Scrub and Yoyo
    gsap.utils.toArray(infoRefs.current).forEach((infoBlock, index) => {
        gsap.fromTo(infoBlock,
            { y: 40, opacity: 0, scale: 0.95 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.6,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: infoBlock,
                    start: 'top 80%',
                    end: 'bottom 20%', // end animation with scrubbing
                    scrub: 1, // scrubbing
                  //  markers: true,
                },
            }
        );
    });



    // Product Cards Animation - Scrub
    productRefs.current.forEach((product, index) => {
      gsap.fromTo(
        product,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: product,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
            // markers: true,
          },
        }
      );
    });

    // Blog Cards Animation - Scrub and Yoyo with different easing
    gsap.utils.toArray(blogRefs.current).forEach((blog, index) => {
      gsap.fromTo(
        blog,
        { opacity: 0, x: 50, scale: 0.95 }, // Scale to give a subtle "zoom-in" effect
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.5,
          ease: 'circ.out',  // Different easing
          scrollTrigger: {
            trigger: '.blog-section',
            start: 'top 70%',
            end: 'bottom 30%',
            scrub: 1,
            // markers: true,
          },
        }
      );
    });

    // Footer Animation - Scrub and Yoyo
    gsap.fromTo(
      footerRef.current,
      { opacity: 1, y: 0, scale: 1 }, // start
      {
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 0.6,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <div className="bg-[#f6f2f9] min-h-screen flex flex-col">
      {/* NAVIGATION */}
      <header className="w-full bg-white shadow-sm py-3 px-6 flex items-center justify-between z-50">
        {/* Left side: Logo only */}
        <div className="flex items-center gap-4">
          <img src={LOGO} alt="Random Walk Logo" className="h-7" />
        </div>

        {/* Right side: Navigation + Contact */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6 text-[#3c54a9] font-medium text-sm">
            <a href="#services">Services</a>
            <a href="#products">Products</a>
            <a href="#academy">Academy</a>
            <a href="#company">Company</a>
            <a href="#resources">Resources</a>
            <a href="#events">Events</a>
          </nav>
          <button className="bg-[#3c54a9] hover:bg-[#243b7d] text-white px-5 py-1.5 rounded-lg font-semibold text-sm shadow-lg">
            Contact
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="bg-[#3c54a9] relative text-white text-center py-16 px-4 md:py-20 overflow-hidden" // Added overflow-hidden
      >
        <div className="max-w-3xl mx-auto z-10 relative"> {/* Added relative and z-index */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
            Maximize Your Business Potential
            <br /> With Seamless AI Integration.
          </h1>
          <p className="text-lg md:text-xl font-medium opacity-80 mb-10">
            With our AI consulting and AI integration services, you now have the
            ability to choose from an entire gamut of AI solutions and tools to
            deliver quick results.
          </p>
        </div>
        <img
          src={AI_GRAPHIC}
          alt="AI Graphic"
          ref={heroImageRef} // Attach the ref
          className="absolute right-8 top-6 w-64 opacity-40 pointer-events-none hidden lg:block z-0"  // Ensure the image is behind the text
        />
      </section>

      {/* AI INTEGRATION SECTION */}
      <section className="bg-[#f6f2f9] py-16 px-4">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#3c54a9] mb-8">
          Leading The World's AI Integration
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el as HTMLDivElement)} // Type assertion
              className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#aa4473]"
            >
              <h3 className="font-bold text-lg mb-3 text-[#3c54a9]">
                {index === 0
                  ? 'Custom AI Tools'
                  : index === 1
                  ? 'Random Walk'
                  : 'AI Integration Requester'}
              </h3>
              <p className="text-[#827f80] text-sm">
                {index === 0
                  ? 'With our engineers, specialize in seamless integration...'
                  : index === 1
                  ? 'Choose the ideal AI tools for your business...'
                  : 'From business functions like marketing, HR and finance...'}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* INFO BLOCKS AND GRADIENTS */}
      <section className="py-16 px-4 bg-gradient-to-tr from-[#f6f2f9] via-[#e8c6d4] to-[#c2cae7] relative">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-8">
          {[0, 1].map((index) => (
            <div
              key={index}
              ref={(el) => (infoRefs.current[index] = el as HTMLDivElement)} // Type assertion
              className="bg-white/60 rounded-lg p-7 shadow border border-[#bdb8b8]"
            >
              <h4 className="font-semibold text-xl text-[#7d4787] mb-2">
                {index === 0 ? 'AI Integration' : 'Learn Corporate AI Fundamentals'}
              </h4>
              <p className="text-[#895b87] text-sm">
                {index === 0
                  ? 'With our extensive experience...'
                  : 'We offer enhanced learning through industry-oriented sessions...'}
              </p>
            </div>
          ))}
          <div
            key={2}
            ref={(el) => (infoRefs.current[2] = el as HTMLDivElement)} // Type assertion
            className="bg-white/60 rounded-lg p-7 shadow border border-[#bdb8b8] md:col-span-2" // Span the full width on smaller screens
          >
            <h4 className="font-semibold text-xl text-[#7d4787] mb-2">
              AI Managed Services
            </h4>
            <p className="text-[#895b87] text-sm">
              Benefit from our experienced AI professionals...
            </p>
          </div>
        </div>
        <div className="absolute -top-20 left-2 w-40 h-40 bg-gradient-to-br from-pink-200 via-[#cda0b5]/50 to-[#9ba4cb]/30 rounded-full blur-2xl opacity-60 pointer-events-none"></div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-16 px-4 bg-white">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#3c54a9] mb-8">
          Products
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              ref={(el) => (productRefs.current[index] = el as HTMLDivElement)} // Type assertion
              className={`bg-gradient-to-tr text-white rounded-xl shadow-lg p-6 transition-transform duration-300 hover:scale-105 ${
                index === 0
                  ? 'from-[#6a80e4] to-[#3c54a9]'
                  : index === 1
                  ? 'from-[#cda0b5] to-[#aa4473]'
                  : 'from-[#4cc1a4] to-[#3c54a9]'
              }`}
            >
              <h3 className="font-bold text-lg mb-2">
                {index === 0
                  ? 'AI Readiness Index'
                  : index === 1
                  ? 'BrandCut'
                  : 'AI Fortune Cookie'}
              </h3>
              <p className="text-sm">
                {index === 0
                  ? 'Identify gaps between your AI aspirations...'
                  : index === 1
                  ? 'Brand Sponsorship Analytics Platform...'
                  : 'Fortune Cookie is a cutting-edge Secure Knowledge Model...'}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BLOGS */}
      <section className="blog-section py-16 px-4 bg-[#f6f2f9]">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#3c54a9] mb-8">
          Our Blogs
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-5">
          {[1, 2, 3, 4, 5].map((i, index) => (
            <div
              key={i}
              ref={(el) => (blogRefs.current[index] = el as HTMLDivElement)} // Type assertion
              className="bg-white rounded-lg border border-[#c2cae7] p-4 h-36 flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow duration-200"
            >
              <p className="font-medium text-[#aa4473] text-sm mb-2">
                Blog Title {i}
              </p>
              <p className="text-xs text-[#827f80]">
                Short description for blog {i} goes here...
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer
        ref={footerRef}
        className="bg-[#3c54a9] text-white py-12 text-center mt-auto text-sm"
      >
        <div className="mx-auto max-w-5xl grid md:grid-cols-6 gap-6 text-left mb-8">
          {['Services', 'Products', 'Company', 'Resources', 'Events', 'Support'].map(
            (item, index) => (
              <div key={index}>
                <h6 className="font-bold mb-2">{item}</h6>
                <p className="opacity-80">
                  {item === 'Services'
                    ? 'AI Integration\nAI Managed Services...'
                    : item === 'Products'
                    ? 'AI Readiness Index\nBrandCut...'
                    : item === 'Company'
                    ? 'About Us\nCareers'
                    : item === 'Resources'
                    ? 'Blog\nBrochures...'
                    : item === 'Events'
                    ? 'Podcasts\nWebinars...'
                    : 'Contact Us\nTerms...'}
                </p>
              </div>
            )
          )}
        </div>
        <p className="opacity-90">© Random Walk. All Rights Reserved 2024.</p>
      </footer>
    </div>
  );
}

export default App;