
import React, { useState, useEffect, useRef } from 'react';
import { menuData } from './menu';
import { blogData } from './blog';

// --- ICONS (Re-used from original) ---
const ArrowLeftIcon = (props) => ( <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>);
const FacebookIcon = (props) => ( <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>);
const InstagramIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664 4.771 4.919 4.919 1.266.058 1.644.07 4.85.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.947s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" /></svg>);

// --- DATA for Featured Recipes ---
const featuredRecipes = [
  {
    name: 'Thai Pizza',
    description: 'A unique fusion of Italian classic and Thai flavors, featuring a rich Thai red curry sauce, grilled chicken, and fresh basil.',
    image: 'https://res.cloudinary.com/dy80ftu9k/image/upload/v1755692642/Thai_Pizza_kphd2j.jpg',
  },
  {
    name: 'Prawn Cheung Fun',
    description: 'Delicate steamed rice noodle rolls filled with plump, juicy prawns, drizzled with a light and savory soy sauce for an authentic dim sum experience.',
    image: 'https://res.cloudinary.com/dy80ftu9k/image/upload/v1755693192/Prawn_Cheung_Fun_btxfn5.jpg',
  },
  {
    name: 'Chili Crab Crunch',
    description: 'Crispy golden bites filled with succulent crab meat, tossed in our signature sweet and spicy chili sauce.',
    image: 'https://res.cloudinary.com/dy80ftu9k/image/upload/v1755692791/Chilli_Crab_Crunch_g4jmcl.jpg',
  },
  {
    name: 'Tom Yum Rice Bowl',
    description: 'All the iconic, zesty, and aromatic flavors of Tom Yum soup deconstructed into a hearty and satisfying rice bowl.',
    image: 'https://res.cloudinary.com/dy80ftu9k/image/upload/v1755692642/Tom_Yum_Rice_Bowl_epakwt.jpg',
  },
  {
    name: 'Yaki Tempura Roll',
    description: 'A savory fusion roll featuring crispy tempura shrimp, creamy cheese, and cucumber wrapped in seasoned sushi rice.',
    image: 'https://res.cloudinary.com/dy80ftu9k/image/upload/v1755692643/yaki_tempura_paxthl.jpg',
  },
];

// --- HELPER COMPONENTS ---
const SectionTitle = ({ pre, title, className = '' }) => (
  <div className={`text-center mb-12 md:mb-16 ${className}`}>
    {pre && <p className="font-script text-3xl md:text-4xl text-brand-primary mb-2">{pre}</p>}
    <h2 className="font-display text-4xl md:text-5xl uppercase tracking-widest text-brand-secondary flex items-center justify-center gap-4">
      <span className="hidden md:block w-16 h-px bg-brand-primary/50"></span>
      {title}
      <span className="hidden md:block w-16 h-px bg-brand-primary/50"></span>
    </h2>
  </div>
);

// --- HEADER & NAVIGATION ---
const Header = ({ onNavigate, isHomePage }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavClick = (view, sectionId = null) => {
        if (isHomePage && sectionId) {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            onNavigate({ page: view, section: sectionId });
        }
        setMenuOpen(false);
    };

    const navLinks = [
        { label: 'Home', view: 'home', section: 'home' },
        { label: 'Menu', view: 'menu', section: null },
        { label: 'Experience', view: 'home', section: 'experience' },
        { label: 'Blog', view: 'blog', section: null },
        { label: 'Contact', view: 'home', section: 'contact' },
    ];
    
    return (
        <header className="absolute top-0 left-0 right-0 z-20 p-4 md:p-8">
            <div className="container mx-auto flex justify-between items-center">
                <div className="cursor-pointer z-50 mix-blend-difference" onClick={() => handleNavClick('home', 'home')}>
                    <img src="https://res.cloudinary.com/dy80ftu9k/image/upload/v1755516557/POSH-LOUNGE-Logo_ibdfyp.png" alt="Posh Lounge Logo" className="h-24 md:h-28" />
                </div>
                <nav className="hidden md:flex space-x-8 font-body text-sm font-bold uppercase tracking-widest text-brand-secondary mix-blend-difference">
                    {navLinks.map(link => (
                        <a key={link.label} href={`#${link.section || ''}`} onClick={(e) => { e.preventDefault(); handleNavClick(link.view, link.section); }} className="hover:text-brand-primary transition-colors">{link.label}</a>
                    ))}
                </nav>
                <div className="md:hidden z-50">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-brand-secondary mix-blend-difference focus:outline-none" aria-label="Open menu">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} /></svg>
                    </button>
                </div>
            </div>
            <div className={`fixed inset-0 bg-brand-bg/95 backdrop-blur-sm z-40 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
                <nav className="flex flex-col items-center justify-center h-full space-y-8 font-body text-2xl font-bold uppercase tracking-widest text-brand-secondary">
                    {navLinks.map(link => (
                        <a key={link.label} href={`#${link.section || ''}`} onClick={(e) => { e.preventDefault(); handleNavClick(link.view, link.section); }} className="hover:text-brand-primary transition-colors">{link.label}</a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

const SideNav = ({ activeSection }) => {
    const sections = ['home', 'about', 'menu', 'experience', 'blog-preview', 'contact'];
    return (
        <nav className="fixed right-0 top-1/2 -translate-y-1/2 z-30 hidden lg:block pr-8">
            <ul className="space-y-4">
                {sections.map(id => (
                    <li key={id}>
                        <a href={`#${id}`} className={`block w-3 h-3 rounded-full border-2 border-brand-primary/50 transition-all duration-300 ${activeSection === id ? 'scale-150 bg-brand-primary' : ''}`}>
                           <span className="sr-only">Go to {id} section</span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};


// --- PAGE SECTIONS ---

const HeroSection = ({ onNavigate, sectionRef }) => (
    <section ref={sectionRef} id="home" className="h-screen min-h-[700px] bg-brand-bg relative flex items-center justify-center text-brand-secondary overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center filter brightness-50" style={{ backgroundImage: "url(https://res.cloudinary.com/dy80ftu9k/image/upload/v1755443220/Heo_Secion_image_pzcktp.png)" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/40 to-transparent"></div>
        <div className="relative z-10 text-center px-4 flex flex-col items-center">
            <p className="font-script text-4xl sm:text-5xl text-brand-primary mb-2">the most delicious flavor combos</p>
            <div className="flex flex-col items-center">
                <h1 className="font-display text-6xl sm:text-8xl md:text-9xl tracking-[0.2em] -mr-[0.2em]">POSH LOUNGE</h1>
                <p className="font-body font-bold text-base sm:text-lg md:text-xl tracking-[0.6em] uppercase text-brand-primary/90 mt-2 -mr-[0.6em]">Rooftop</p>
            </div>
            <p className="font-body text-base sm:text-lg max-w-2xl mt-4 text-brand-secondary/80">Experimentation in the kitchen and focus on excellence are among our main driving forces in cooking.</p>
            <button onClick={() => onNavigate({ page: 'menu' })} className="mt-8 inline-block border border-brand-primary text-brand-primary font-bold font-body uppercase tracking-widest px-8 py-3 text-sm hover:bg-brand-primary hover:text-brand-bg transition-all">
                View Menu
            </button>
        </div>
    </section>
);

const AboutSection = ({ sectionRef }) => (
    <section ref={sectionRef} id="about" className="py-24 md:py-32">
        <div className="container mx-auto px-4">
            <SectionTitle pre="Our Story" title="About Us" />
            <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-8 lg:col-span-6">
                    <p className="text-lg md:text-xl leading-relaxed text-brand-secondary/90">
                        Welcome to Dhaka’s most beautiful rooftop restaurant, where every bite comes with a view. Nestled atop Safura Tower, Posh Lounge Rooftop blends Thai & Continental cuisine, signature coffee & desserts, and a vibrant ambiance that makes every visit unforgettable.
                    </p>
                </div>
                <div className="md:col-span-4 lg:col-span-6 grid grid-cols-2 gap-4">
                     <img src="https://res.cloudinary.com/dy80ftu9k/image/upload/v1755692123/515438287_638165645984094_4756985604823061166_n_yttwem.jpg" alt="Dining area" className="rounded-sm object-cover w-full h-48 md:h-64 filter brightness-75"/>
                    <div className="pattern-bg rounded-sm w-full h-48 md:h-64"></div>
                     <img src="https://res.cloudinary.com/dukaroz3u/image/upload/v1755442995/zlcmvesoyfjo6tquxsrr.jpg" alt="Chocolate dessert" className="rounded-sm object-cover w-full h-48 md:h-64 col-span-2 filter brightness-75"/>
                </div>
            </div>
        </div>
    </section>
);

const QuoteSection = () => (
    <section className="relative py-24 md:py-32 bg-cover bg-center bg-fixed" style={{backgroundImage: "url(https://res.cloudinary.com/dukaroz3u/image/upload/v1755442997/panr3hkcccjv6ljojlmb.jpg)"}}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-brand-secondary">
            <p className="font-script text-6xl text-brand-primary mb-8">"</p>
            <p className="font-body font-bold text-2xl md:text-4xl uppercase tracking-widest leading-snug max-w-3xl mx-auto">
                Crafted for real flavor, served with soul, handmade with care. From kitchen to table, each step is done with love.
            </p>
             <p className="mt-8 font-display tracking-widest">Andrea Chung, Cook</p>
        </div>
    </section>
);


const SpecialtiesSection = ({ onNavigate }) => (
    <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
            <SectionTitle pre="Recommendations" title="Our Best Specialties" />
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="h-96 md:h-[500px] relative">
                    <img src="https://res.cloudinary.com/dy80ftu9k/image/upload/v1755692242/Premuim_Sizzling_Platter_n3ujvf.jpg" alt="Premium Sizzling Platter" className="w-full h-full object-cover rounded-sm filter brightness-75"/>
                </div>
                <div>
                    <h3 className="font-display text-3xl md:text-4xl text-brand-secondary mb-4">Premium Sizzling Platter</h3>
                    <p className="text-brand-secondary/80 leading-relaxed mb-6">
                         Your choice of protein served piping hot with vegetables. A feast for the senses, this dish arrives with an impressive sizzle, releasing an aromatic cloud of spices and flavors that promises an unforgettable dining experience.
                    </p>
                     <button onClick={() => onNavigate({ page: 'menu' })} className="inline-block border border-brand-primary text-brand-primary font-bold font-body uppercase tracking-widest px-8 py-3 text-sm hover:bg-brand-primary hover:text-brand-bg transition-all">
                        View All
                    </button>
                </div>
            </div>
        </div>
    </section>
);

const FullMenuSection = ({ sectionRef, onNavigate }) => {
    const categories = menuData.map(cat => cat.category);
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const activeMenuItems = menuData.find(cat => cat.category === activeCategory)?.items || [];

    return (
        <section ref={sectionRef} id="menu" className="py-24 md:py-32 bg-brand-bg-light pattern-bg">
            <div className="container mx-auto px-4">
                <SectionTitle pre="Special Selection" title="From Our Menu" />
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:gap-x-8 mb-12 font-body uppercase tracking-widest text-sm">
                    {categories.map(category => (
                        <button key={category} onClick={() => setActiveCategory(category)} className={`pb-1 transition-colors duration-300 ${activeCategory === category ? 'text-brand-secondary border-b-2 border-brand-primary' : 'text-brand-primary/70 hover:text-brand-secondary'}`} aria-pressed={activeCategory === category}>
                            {category}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto font-body">
                    {activeMenuItems.map(item => (
                        <div key={item.name} className="flex flex-col">
                           <div className="flex justify-between items-baseline gap-4">
                               <h4 className="text-lg font-bold text-brand-secondary tracking-wide">{item.name}</h4>
                               <div className="flex-grow border-b border-dashed border-brand-primary/30 mx-2"></div>
                               <p className="text-lg font-bold text-brand-primary whitespace-nowrap">{item.price}</p>
                           </div>
                           {item.description && <p className="text-brand-secondary/60 text-sm mt-1">{item.description}</p>}
                        </div>
                    ))}
                </div>
                 <div className="text-center mt-16">
                     <button onClick={() => onNavigate({ page: 'menu' })} className="inline-block border border-brand-primary text-brand-primary font-bold font-body uppercase tracking-widest px-8 py-3 text-sm hover:bg-brand-primary hover:text-brand-bg transition-all">
                        View Full Menu
                    </button>
                </div>
            </div>
        </section>
    );
};

const OurTipsSection = ({ onNavigate, sectionRef }) => (
    <section ref={sectionRef} id="blog-preview" className="py-24 md:py-32">
        <div className="container mx-auto px-4">
            <SectionTitle pre="Our Food Philosophy" title="Our Tips" />
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                 <div>
                    <h3 className="font-display text-3xl md:text-4xl text-brand-secondary mb-4">From Our Journal</h3>
                    <p className="text-brand-secondary/80 leading-relaxed mb-6">
                         Discover the secrets behind our most beloved dishes, go behind the bar with our mixologists, and get inspired to host your own unforgettable events. Our journal is a celebration of flavor, craft, and the joy of sharing good food.
                    </p>
                    <button onClick={() => onNavigate({ page: 'blog' })} className="inline-block border border-brand-primary text-brand-primary font-bold font-body uppercase tracking-widest px-8 py-3 text-sm hover:bg-brand-primary hover:text-brand-bg transition-all">
                        Read More
                    </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <img src={blogData[0].image} alt="Blog post image 1" className="h-80 w-full object-cover rounded-sm filter brightness-75" />
                    <img src={blogData[1].image} alt="Blog post image 2" className="h-80 w-full object-cover rounded-sm filter brightness-75" />
                </div>
            </div>
        </div>
    </section>
);


const BookingSection = ({ sectionRef }) => (
    <section ref={sectionRef} id="contact" className="py-24 md:py-32 bg-brand-bg-light pattern-bg">
        <div className="container mx-auto px-4 text-center">
            <SectionTitle pre="Reservations" title="Book a table" />
            <p className="max-w-2xl mx-auto text-brand-secondary/80 mb-8">
                Ready to experience Posh Lounge Rooftop? For reservations, please contact us directly via phone or book through Facebook Messenger for a swift response. We look forward to welcoming you.
            </p>
            <p className="font-display text-xl text-brand-secondary mb-2">Safura Tower, Mirpur-12, Dhaka</p>
            <p className="text-lg text-brand-secondary/80 mb-8">Open: 12:00 pm - 11:00 pm</p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a href="https://m.me/poshloungerooftopbd" target="_blank" rel="noopener noreferrer" className="inline-block border border-brand-primary bg-brand-primary text-brand-bg font-bold font-body uppercase tracking-widest px-12 py-4 text-base hover:bg-brand-primary/80 transition-all w-full sm:w-auto">
                    Book via Messenger
                </a>
                <a href="tel:+8801600775177" className="inline-block border border-brand-primary text-brand-primary font-bold font-body uppercase tracking-widest px-12 py-4 text-base hover:bg-brand-primary hover:text-brand-bg transition-all w-full sm:w-auto">
                    Call to Book
                </a>
            </div>
        </div>
    </section>
);

const FeaturedRecipesSection = ({ sectionRef }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);

    // Function to get a new random index that's different from the current one
    const getNextRandomIndex = (current) => {
        if (featuredRecipes.length <= 1) return 0;
        let nextIndex;
        do {
            nextIndex = Math.floor(Math.random() * featuredRecipes.length);
        } while (nextIndex === current);
        return nextIndex;
    };

    useEffect(() => {
        // Clear previous timeout if component re-renders or index changes manually
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        
        // Set a new timeout to shuffle to the next recipe
        timeoutRef.current = setTimeout(() => {
            setCurrentIndex(prevIndex => getNextRandomIndex(prevIndex));
        }, 5000); // Change recipe every 5 seconds

        // Cleanup timeout on component unmount
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [currentIndex]); // Re-run effect whenever currentIndex changes
    
    const goToIndex = (index) => {
        setCurrentIndex(index);
    };

    const currentRecipe = featuredRecipes[currentIndex];

    return (
        <section ref={sectionRef} id="experience" className="py-24 md:py-32">
            <div className="container mx-auto px-4">
                <SectionTitle pre="Chef's Selection" title="Featured Recipes" />
                <div className="relative w-full mx-auto max-w-5xl">
                    <div className="relative h-[550px] flex items-center justify-center overflow-hidden">
                        {/* The key prop is crucial here. It tells React to create a new component instance
                            when the index changes, which re-triggers the CSS animation. */}
                        <div key={currentIndex} className="w-full text-center px-8 animate-fade-in">
                            <img src={currentRecipe.image} alt={currentRecipe.name} className="w-full sm:w-4/5 md:w-3/5 max-h-[350px] object-cover rounded-lg shadow-2xl shadow-brand-bg mb-6 border-4 border-brand-primary/20 mx-auto"/>
                            <h3 className="font-display text-3xl text-brand-secondary">{currentRecipe.name}</h3>
                            <p className="text-brand-secondary/80 max-w-md mx-auto mt-2 whitespace-normal">{currentRecipe.description}</p>
                        </div>
                    </div>
                    {/* Dots Navigation */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-3 p-4">
                        {featuredRecipes.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-brand-primary scale-125' : 'bg-brand-primary/50'}`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};


const Footer = () => (
    <footer className="py-16 md:py-24 text-center">
        <div className="container mx-auto px-4">
            <img src="https://res.cloudinary.com/dy80ftu9k/image/upload/v1755516557/POSH-LOUNGE-Logo_ibdfyp.png" alt="Posh Lounge Logo" className="h-28 mx-auto mb-8 opacity-50"/>
            <p>Posh Lounge Rooftop Restaurant & Fine dining, Safura Tower, Mirpur-12, Dhaka</p>
            <p>10013 New York, +880 1600 775 177, poshloungebd@gmail.com</p>
            <p className="mt-4">Open: 12:00 pm - 11:00 pm</p>
            <div className="flex justify-center space-x-6 mt-8">
                 <a href="https://www.facebook.com/poshloungerooftopbd" target="_blank" rel="noopener noreferrer" className="hover:text-brand-secondary transition-colors"><FacebookIcon className="w-6 h-6" /></a>
                 <a href="https://www.instagram.com/poshloungerooftop" target="_blank" rel="noopener noreferrer" className="hover:text-brand-secondary transition-colors"><InstagramIcon className="w-6 h-6" /></a>
            </div>
             <p className="text-sm text-brand-primary/50 mt-16">© 2025 Posh Lounge Rooftop | All rights reserved</p>
        </div>
    </footer>
);

// --- FULL PAGE COMPONENTS ---
const HomePage = ({ onNavigate, sectionRefs }) => (
    <>
        <HeroSection onNavigate={onNavigate} sectionRef={sectionRefs.home} />
        <AboutSection sectionRef={sectionRefs.about} />
        <QuoteSection />
        <SpecialtiesSection onNavigate={onNavigate} />
        <FullMenuSection sectionRef={sectionRefs.menu} onNavigate={onNavigate} />
        <OurTipsSection onNavigate={onNavigate} sectionRef={sectionRefs['blog-preview']} />
        <div className="relative h-[50vh] bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(https://res.cloudinary.com/dy80ftu9k/image/upload/v1755443220/Heo_Secion_image_pzcktp.png)`}}>
            <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <FeaturedRecipesSection sectionRef={sectionRefs.experience}/>
        <BookingSection sectionRef={sectionRefs.contact} />
    </>
);

const MenuPage = ({ onNavigate }) => (
    <section id="full-menu" className="py-32 md:py-40 px-4 bg-brand-bg-light pattern-bg">
        <div className="container mx-auto">
            <div className="text-center mb-16">
                <button onClick={() => onNavigate({ page: 'home' })} className="font-body text-sm uppercase tracking-widest mb-4 flex items-center gap-2 hover:opacity-80 transition-opacity mx-auto text-brand-secondary">
                    <ArrowLeftIcon className="w-4 h-4" /> Back to Home
                </button>
                 <SectionTitle pre="Our Complete Selection" title="Restaurant Menu" />
            </div>

            <div className="max-w-6xl mx-auto space-y-20">
                {menuData.map(category => (
                    <div key={category.category}>
                        <h3 className="font-display text-4xl text-brand-primary mb-8 text-center">{category.category}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 font-body">
                            {category.items.map(item => (
                                <div key={item.name} className="flex flex-col">
                                   <div className="flex justify-between items-baseline gap-4">
                                       <h4 className="text-lg font-bold text-brand-secondary tracking-wide">{item.name}</h4>
                                       <div className="flex-grow border-b border-dashed border-brand-primary/30 mx-2"></div>
                                       <p className="text-lg font-bold text-brand-primary whitespace-nowrap">{item.price}</p>
                                   </div>
                                   {item.description && <p className="text-brand-secondary/60 text-sm mt-1">{item.description}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const BlogPage = ({ onNavigate }) => (
    <section id="blog" className="py-32 md:py-40 px-4">
        <div className="container mx-auto">
            <SectionTitle pre="From Our Journal" title="Our Blog" className="mb-20"/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {blogData.map(post => (
                    <div key={post.slug} className="bg-brand-bg-light rounded-sm overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 flex flex-col border border-brand-primary/10">
                        <img src={post.image} alt={post.title} className="w-full h-48 object-cover filter brightness-75" />
                        <div className="p-6 flex flex-col flex-grow">
                            <p className="text-xs uppercase font-semibold text-brand-primary/60 mb-2">{post.date}</p>
                            <h3 className="font-display text-2xl text-brand-secondary mb-3 leading-tight flex-grow">{post.title}</h3>
                            <p className="font-body text-sm text-brand-secondary/80 mb-4">{post.excerpt}</p>
                            <button onClick={() => onNavigate({ page: 'blogPost', slug: post.slug })} className="font-bold text-brand-primary group-hover:underline text-left mt-auto self-start">
                                Read More &rarr;
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const BlogPostPage = ({ onNavigate, slug }) => {
    const post = blogData.find(p => p.slug === slug);

    if (!post) {
        return (
            <div className="py-40 text-center">
                <h2 className="font-display text-5xl">Post not found</h2>
                <button onClick={() => onNavigate({ page: 'blog' })} className="mt-8 text-brand-primary font-bold">&larr; Back to Blog</button>
            </div>
        );
    }
    return (
        <article className="pt-24">
            <div className="h-[40vh] min-h-[300px] md:h-[50vh] bg-cover bg-center flex items-end p-4 md:p-16 text-brand-secondary relative" style={{ backgroundImage: `url(${post.image})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/60 to-transparent"></div>
                <div className="relative z-10 max-w-4xl mx-auto w-full">
                    <button onClick={() => onNavigate({ page: 'blog' })} className="font-body text-sm uppercase tracking-widest mb-4 flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <ArrowLeftIcon className="w-4 h-4" /> Back to Blog
                    </button>
                    <h1 className="font-display text-4xl sm:text-5xl md:text-7xl leading-tight">{post.title}</h1>
                    <p className="mt-4 font-body text-brand-secondary/80">By {post.author} on {post.date}</p>
                </div>
            </div>
            <div className="py-16 md:py-24 px-4">
                <div className="prose max-w-3xl mx-auto font-body" dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
        </article>
    );
};

// --- MAIN APP COMPONENT ---
const App = () => {
  const [currentView, setCurrentView] = useState<{ page: string; section?: string | null; slug?: string }>({ page: 'home', section: null });
  const [activeSection, setActiveSection] = useState('home');

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    menu: useRef(null),
    experience: useRef(null),
    'blog-preview': useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (currentView.page === 'home' && currentView.section) {
        setTimeout(() => {
             document.getElementById(currentView.section)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
  }, [currentView]);

  useEffect(() => {
    const observer = new IntersectionObserver( (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
    }, { rootMargin: '-50% 0px -50% 0px' });
    
    Object.values(sectionRefs).forEach(ref => {
        if (ref.current) observer.observe(ref.current);
    });
    
    return () => {
        Object.values(sectionRefs).forEach(ref => {
            if (ref.current) observer.unobserve(ref.current);
        });
    };
  }, [currentView.page]);


  const renderPage = () => {
    switch (currentView.page) {
      case 'menu':
        return <MenuPage onNavigate={setCurrentView} />;
      case 'blog':
        return <BlogPage onNavigate={setCurrentView} />;
      case 'blogPost':
        return <BlogPostPage onNavigate={setCurrentView} slug={currentView.slug} />;
      case 'home':
      default:
        return <HomePage onNavigate={setCurrentView} sectionRefs={sectionRefs} />;
    }
  };

  const isHomePage = currentView.page === 'home';

  return (
    <div className="bg-brand-bg font-body selection:bg-brand-primary selection:text-brand-bg">
        <div className="fixed top-0 left-0 w-px h-full bg-brand-primary/10 z-30 ml-[5%] hidden lg:block"></div>
        <div className="fixed top-0 right-0 w-px h-full bg-brand-primary/10 z-30 mr-[5%] hidden lg:block"></div>
      
      <Header onNavigate={setCurrentView} isHomePage={isHomePage} />
      {isHomePage && <SideNav activeSection={activeSection} />}
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
