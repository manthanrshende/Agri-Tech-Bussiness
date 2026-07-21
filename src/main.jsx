import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'


const iconMap = {
  ArrowRight: '→', CheckCircle2: '✓', Flower2: '✿', HeartHandshake: '♡', Leaf: '☘', Milk: '🥛',
  PackageCheck: '▣', PhoneCall: '☎', Sprout: '♧', Star: '★', SunMedium: '☀', Truck: '▰', Wheat: '♢',
}

function IconGlyph({ name, size = 20 }) {
  return <span className="icon-glyph" style={{ fontSize: `${size}px`, width: size, height: size }} aria-hidden="true">{iconMap[name]}</span>
}

const products = [
  {
    icon: "Sprout",
    title: 'Rich Vermicompost',
    description: 'Dark, nutrient-loaded compost that improves soil health, root growth, and harvest quality.',
    tag: 'Soil booster',
  },
  {
    icon: "Flower2",
    title: 'Flower Plants',
    description: 'Healthy seasonal and decorative plants grown with care for homes, gardens, and farms.',
    tag: 'Garden ready',
  },
  {
    icon: "Wheat",
    title: 'Seeds & Saplings',
    description: 'Reliable seeds and young plants selected for strong germination and village-grown resilience.',
    tag: 'Farm picks',
  },
  {
    icon: "Milk",
    title: 'Pure Dairy Products',
    description: 'Village-style ghee, fresh milk, honey, and daily essentials prepared with honest quality.',
    tag: 'Fresh & pure',
  },
]

const highlights = [
  'Naturally grown and locally sourced',
  'Friendly guidance for garden and farm needs',
  'Fresh dairy, honey, seeds, plants, and compost in one place',
]

const categories = ['Vermicompost', 'Flower Plants', 'Vegetable Seeds', 'Pure Ghee', 'Fresh Milk', 'Village Honey']

function App() {
  return (
    <main>
      <nav className="navbar" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="MY Village Store home">
          <span className="brand-icon"><IconGlyph name="Leaf" size={24} /></span>
          <span>MY Village Store</span>
        </a>
        <div className="nav-links">
          <a href="#products">Products</a>
          <a href="#why-us">Why us</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow"><IconGlyph name="SunMedium" size={18} /> From our village to your home</p>
          <h1>Grow greener fields and enjoy pure village freshness.</h1>
          <p className="hero-text">
            MY Village Store brings together organic vermicompost, beautiful flower plants,
            dependable seeds, pure ghee, fresh milk, honey, and more dairy goodness in one
            warm, easy-to-shop agri destination.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#products">Explore products <IconGlyph name="ArrowRight" size={18} /></a>
            <a className="btn secondary" href="#contact">Order on call <IconGlyph name="PhoneCall" size={18} /></a>
          </div>
          <div className="trust-row" aria-label="Business highlights">
            <span><IconGlyph name="Star" size={17} /> Organic care</span>
            <span><IconGlyph name="Truck" size={17} /> Local delivery</span>
            <span><IconGlyph name="HeartHandshake" size={17} /> Honest quality</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Illustration of farm products">
          <div className="sun"></div>
          <div className="field-card compost-card">
            <IconGlyph name="Sprout" size={34} />
            <strong>Premium Vermicompost</strong>
            <span>For rich soil & happy crops</span>
          </div>
          <div className="basket">
            <span className="fruit fruit-one"></span>
            <span className="fruit fruit-two"></span>
            <span className="fruit fruit-three"></span>
            <span className="basket-label">Farm Fresh</span>
          </div>
          <div className="milk-card">
            <IconGlyph name="Milk" size={30} />
            <span>Pure milk • Ghee • Honey</span>
          </div>
        </div>
      </section>

      <section id="products" className="section-shell products-section">
        <div className="section-heading">
          <p className="eyebrow"><IconGlyph name="Leaf" size={18} /> What we sell</p>
          <h2>Everything your farm, garden, and family needs.</h2>
        </div>
        <div className="product-grid">
          {products.map(({ icon, title, description, tag }) => (
            <article className="product-card" key={title}>
              <div className="product-top">
                <span className="product-icon"><IconGlyph name={icon} size={30} /></span>
                <span className="product-tag">{tag}</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="why-us" className="section-shell story-section">
        <div className="story-card">
          <p className="eyebrow"><IconGlyph name="PackageCheck" size={18} /> Simple, trustworthy, village fresh</p>
          <h2>Built for customers who want quality without confusion.</h2>
          <ul>
            {highlights.map((item) => (
              <li key={item}><IconGlyph name="CheckCircle2" size={20} /> {item}</li>
            ))}
          </ul>
        </div>
        <div className="category-cloud" aria-label="Popular categories">
          {categories.map((category) => <span key={category}>{category}</span>)}
        </div>
      </section>

      <section id="contact" className="section-shell contact-section">
        <div>
          <p className="eyebrow"><IconGlyph name="PhoneCall" size={18} /> Ready to order?</p>
          <h2>Tell us what you need for your farm, garden, or kitchen.</h2>
          <p>
            Import this GitHub repo into Vercel, deploy instantly, and update the contact
            details below with your phone number, WhatsApp, address, and catalog links.
          </p>
        </div>
        <a className="btn primary large" href="tel:+910000000000">Call MY Village Store</a>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
