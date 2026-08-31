import { createRoot } from 'react-dom/client'
import { ArrowRight, ChevronDown, Fence, Hammer, Menu, Phone, Warehouse, X } from 'lucide-react'
import { useState } from 'react'
import logo from './assets/logo.png'
import './styles.css'

const services = [
  {
    icon: Fence,
    title: 'Bespoke Wooden Gates',
    text: 'Custom side gates, driveway gates, and field gates crafted with strong mortise-and-tenon joints and heavy-duty galvanized hardware.',
  },
  {
    icon: Warehouse,
    title: 'Garden Sheds & Workshops',
    text: 'Heavy-duty tongue-and-groove sheds, potting sheds, garden workshops, and tool storage units built to your size and specification.',
  },
  {
    icon: Hammer,
    title: 'Custom Timber Buildings',
    text: 'Garden offices, summerhouses, and bespoke outdoor storage solutions tailored for year-round use.',
  },
]

const faqs = [
  ['Do you offer custom sizes?', 'Yes. Everything we build is made to measure to ensure a precise fit for your property.'],
  ['Is the timber pressure-treated?', 'Yes, we use high-grade pressure-treated (tanalised) timber to protect against rot, fungal decay, and harsh weather.'],
  ['Do you handle installation?', 'We offer full delivery and professional installation services across our local coverage area.'],
  ['Do I need a prepared base for a shed?', 'A solid, flat, and level base is essential before assembly. We can advise on base requirements during quotation.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Grahams Gates and Sheds home">
          <img className="brand-logo" src={logo} alt="Grahams Gates and Sheds" />
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#faq" onClick={closeMenu}>FAQs</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Get a quote <ArrowRight size={16} /></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">Handcrafted for the outdoors</p>
            <h1>Built to Last.<br />Crafted for Your Home.</h1>
            <p className="hero-copy">Premium bespoke timber gates, garden sheds, and custom outdoor structures built with quality craftsmanship.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Request a Free Quote <ArrowRight size={18} /></a>
              <a className="button button-quiet" href="#services">View Our Work</a>
            </div>
          </div>
          <div className="hero-note"><span /> Made to measure. Made properly.</div>
        </section>

        <section className="intro section" id="about">
          <div className="section-label"><span>01</span> The Graham's way</div>
          <div className="intro-grid">
            <h2>Quality timber,<br /><em>honest craftsmanship.</em></h2>
            <div>
              <p>At Grahams Gates and Sheds, we believe outdoor timber structures should be as durable as they are functional. With years of hands-on joinery experience, we take pride in using pressure-treated timber, heavy-duty ironmongery, and traditional construction methods to ensure every project stands the test of time.</p>
              <a className="text-link" href="#contact">Talk through your project <ArrowRight size={17} /></a>
            </div>
          </div>
          <div className="values">
            {[
              ['Bespoke fitting', 'Made-to-measure designs tailored to your garden’s exact dimensions.'],
              ['Quality materials', 'Premium, weather-treated timber built for longevity.'],
              ['Full service', 'From site prep to professional assembly and installation.'],
            ].map(([title, text], index) => <article key={title} className="value"><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>

        <section className="services section" id="services">
          <div className="section-label"><span>02</span> What we build</div>
          <div className="section-heading"><h2>Outdoor spaces,<br /><em>built around you.</em></h2><p>From a single secure side gate to the garden workshop you have been planning for years.</p></div>
          <div className="service-list">
            {services.map(({ icon: Icon, title, text }, index) => <article className="service" key={title}>
              <div className="service-icon"><Icon size={30} strokeWidth={1.4} /></div>
              <div><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></div>
              <a href="#contact" aria-label={`Enquire about ${title}`}><ArrowRight size={21} /></a>
            </article>)}
          </div>
        </section>

        <section className="process section">
          <div><p className="eyebrow">Straightforward from start to finish</p><h2>Measured. Made.<br /><em>Installed.</em></h2></div>
          <div className="process-steps">
            <p><b>01</b> Tell us what you need</p><p><b>02</b> We measure and quote</p><p><b>03</b> We build and install</p>
          </div>
        </section>

        <section className="faq section" id="faq">
          <div className="section-label"><span>03</span> Common questions</div>
          <div className="faq-grid"><h2>A few things<br /><em>you may ask.</em></h2><div className="faq-list">
            {faqs.map(([question, answer], index) => <article className={openFaq === index ? 'faq-item open' : 'faq-item'} key={question}>
              <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}>{question}<ChevronDown size={20} /></button>
              <p>{answer}</p>
            </article>)}
          </div></div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-copy"><p className="eyebrow">Start your project</p><h2>Let's discuss<br /><em>your project.</em></h2><p>Ready to upgrade your outdoor space? Get in touch for advice, site measurements, or a no-obligation quote.</p><a href="tel:+440000000000" className="phone"><Phone size={19} /> Your contact number</a></div>
          <form onSubmit={(event) => event.preventDefault()}>
            <div className="form-row"><label>Name<input required name="name" type="text" placeholder="Your name" /></label><label>Phone<input name="phone" type="tel" placeholder="Your number" /></label></div>
            <label>Email<input required name="email" type="email" placeholder="you@example.com" /></label>
            <label>Service needed<select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Gates</option><option>Sheds</option><option>Custom build</option></select></label>
            <label>Project details & dimensions<textarea name="details" rows="4" placeholder="Tell us a little about your project" /></label>
            <button className="button button-primary" type="submit">Send enquiry <ArrowRight size={18} /></button>
          </form>
        </section>
      </main>
      <footer><a className="brand" href="#home"><img className="brand-logo" src={logo} alt="Grahams Gates and Sheds" /></a><p>Serving your local area and surrounding regions.</p><p>© 2026 Grahams Gates & Sheds</p></footer>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)