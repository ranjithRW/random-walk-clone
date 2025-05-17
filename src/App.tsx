import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './index.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Logo and asset URLs
const LOGO = 'https://ext.same-assets.com/2090949236/4057211834.bin';

function App() {
  // Refs for animation
  const heroRef = useRef(null);
  const cardRefs = useRef([]);
  const infoRefs = useRef([]);
  const productRefs = useRef([]);
  const blogRefs = useRef([]);
  const footerRef = useRef(null);

  useEffect(() => {
    // Hero section animation
    gsap.fromTo(heroRef.current, 
      { y: 35, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 80%'
        }
      }
    );

    // Cards animation
    gsap.fromTo(cardRefs.current,
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.18,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardRefs.current[0],
          start: 'top 85%'
        }
      }
    );

    // Info blocks animation
    gsap.fromTo(infoRefs.current,
      { y: 40, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        stagger: 0.16,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: infoRefs.current[0],
          start: 'top 90%'
        }
      }
    );

    // Product cards animation
    productRefs.current.forEach((product, index) => {
      gsap.fromTo(product,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: product,
            start: 'top 95%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Blog cards animation
    gsap.fromTo(blogRefs.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.blog-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Footer animation
    gsap.fromTo(footerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 95%',
          toggleActions: 'play none none reverse'
        }
      }
    );

  }, []);

  return (
    <div className="bg-[#f6f2f9] min-h-screen flex flex-col">
      {/* NAVIGATION */}
      <header className="w-full bg-white shadow-sm py-3 px-6 flex items-center justify-between">
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
        className="bg-[#3c54a9] relative text-white text-center py-16 px-4 md:py-20"
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
            Maximize Your Business Potential<br /> With Seamless AI Integration.
          </h1>
          <p className="text-lg md:text-xl font-medium opacity-80 mb-10">
            With our AI consulting and AI integration services, you now have the ability to choose from an entire gamut of AI solutions and tools to deliver quick results.
          </p>
        </div>
        <img src="https://ext.same-assets.com/2090949236/19336533.bin" alt="AI Graphic" className="absolute right-8 top-6 w-64 opacity-40 pointer-events-none hidden lg:block" />
      </section>

      {/* AI INTEGRATION SECTION */}
      <section className="bg-[#f6f2f9] py-16 px-4">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#3c54a9] mb-8">Leading The World's AI Integration</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              ref={el => (cardRefs.current[index] = el)}
              className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#aa4473]"
            >
              <h3 className="font-bold text-lg mb-3 text-[#3c54a9]">
                {index === 0 ? 'Custom AI Tools' : 
                 index === 1 ? 'Random Walk' : 'AI Integration Requester'}
              </h3>
              <p className="text-[#827f80] text-sm">
                {index === 0 ? 'With our engineers, specialize in seamless integration...' :
                 index === 1 ? 'Choose the ideal AI tools for your business...' :
                 'From business functions like marketing, HR and finance...'}
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
              ref={el => (infoRefs.current[index] = el)}
              className="bg-white/60 rounded-lg p-7 shadow border border-[#bdb8b8]"
            >
              <h4 className="font-semibold text-xl text-[#7d4787] mb-2">
                {index === 0 ? 'AI Integration' : 'Learn Corporate AI Fundamentals'}
              </h4>
              <p className="text-[#895b87] text-sm">
                {index === 0 ? 'With our extensive experience...' : 
                'We offer enhanced learning through industry-oriented sessions...'}
              </p>
            </div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto">
          <div
            ref={el => (infoRefs.current[2] = el)}
            className="bg-white/60 rounded-lg p-7 shadow border border-[#bdb8b8]"
          >
            <h4 className="font-semibold text-xl text-[#7d4787] mb-2">AI Managed Services</h4>
            <p className="text-[#895b87] text-sm">Benefit from our experienced AI professionals...</p>
          </div>
        </div>
        <div className="absolute -top-20 left-2 w-40 h-40 bg-gradient-to-br from-pink-200 via-[#cda0b5]/50 to-[#9ba4cb]/30 rounded-full blur-2xl opacity-60 pointer-events-none"></div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-16 px-4 bg-white">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#3c54a9] mb-8">Products</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[0, 1, 2].map((index) => (
            <div 
              key={index}
              ref={el => (productRefs.current[index] = el)}
              className={`bg-gradient-to-tr text-white rounded-xl shadow-lg p-6 ${
                index === 0 ? 'from-[#6a80e4] to-[#3c54a9]' :
                index === 1 ? 'from-[#cda0b5] to-[#aa4473]' :
                'from-[#4cc1a4] to-[#3c54a9]'
              }`}
            >
              <h3 className="font-bold text-lg mb-2">
                {index === 0 ? 'AI Readiness Index' :
                 index === 1 ? 'BrandCut' : 'AI Fortune Cookie'}
              </h3>
              <p className="text-sm">
                {index === 0 ? 'Identify gaps between your AI aspirations...' :
                 index === 1 ? 'Brand Sponsorship Analytics Platform...' :
                 'Fortune Cookie is a cutting-edge Secure Knowledge Model...'}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BLOGS */}
      <section className="blog-section py-16 px-4 bg-[#f6f2f9]">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#3c54a9] mb-8">Our Blogs</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-5">
          {[1,2,3,4,5].map((i, index) => (
            <div 
              key={i}
              ref={el => (blogRefs.current[index] = el)}
              className="bg-white rounded-lg border border-[#c2cae7] p-4 h-36 flex flex-col justify-between shadow-sm"
            >
              <p className="font-medium text-[#aa4473] text-sm mb-2">Blog Title {i}</p>
              <p className="text-xs text-[#827f80]">Short description for blog {i} goes here...</p>
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
          {['Services', 'Products', 'Company', 'Resources', 'Events', 'Support'].map((item, index) => (
            <div key={index}>
              <h6 className="font-bold mb-2">{item}</h6>
              <p className="opacity-80">
                {item === 'Services' ? 'AI Integration\nAI Managed Services...' :
                 item === 'Products' ? 'AI Readiness Index\nBrandCut...' :
                 item === 'Company' ? 'About Us\nCareers' :
                 item === 'Resources' ? 'Blog\nBrochures...' :
                 item === 'Events' ? 'Podcasts\nWebinars...' : 'Contact Us\nTerms...'}
              </p>
            </div>
          ))}
        </div>
        <p className="opacity-90">© Random Walk. All Rights Reserved 2024.</p>
      </footer>
    </div>
  );
}

export default App;