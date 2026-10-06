import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowDown, ArrowRight, ArrowUpRight, BadgeCheck, CarFront, Check,
  ChevronRight, Clock3, MapPin, Menu, MessageCircle, Phone, ShieldCheck, X,
} from 'lucide-react';
import { business, courses, documentServices, imageUrl, images } from './data/business.js';

export const wa = (message) => business.whatsapp(message);

export function Button({ to, href, children, variant = 'dark', className = '', ...props }) {
  const classes = `button button-${variant} ${className}`.trim();
  const content = <>{children}</>;

  if (to) return <Link className={classes} to={to} {...props}>{content}</Link>;
  return (
    <a
      className={classes}
      href={href || wa()}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noreferrer' : undefined}
      {...props}
    >
      {content}
    </a>
  );
}

export function Reveal({ children, className = '', delay = 0, as: Element = 'div' }) {
  const reduceMotion = useReducedMotion();
  const MotionElement = motion[Element] || motion.div;

  return (
    <MotionElement
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionElement>
  );
}

export function SectionTitle({ eyebrow, title, copy, light = false, className = '' }) {
  return (
    <Reveal className={`section-title ${light ? 'section-title-light' : ''} ${className}`.trim()}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </Reveal>
  );
}

const links = [
  ['Driving School', '/driving-school'],
  ['Services', '/services'],
  ['About', '/about'],
  ['Vehicles', '/vehicles'],
  ['Real Estate', '/real-estate'],
  ['Contact', '/contact'],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="navbar">
      <Link to="/" className="brand" aria-label={`${business.name} home`}>
        <span className="brand-mark" aria-hidden="true">GG</span>
        <span className="brand-copy">
          <b>GOD'S GRACE MEGA</b>
          <small>DRIVING SCHOOL ACADEMY</small>
        </span>
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        aria-expanded={open}
        aria-controls="primary-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={23} /> : <Menu size={23} />}
      </button>
      <nav id="primary-navigation" className={`nav-links ${open ? 'open' : ''}`} aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink>
        {links.map(([label, path]) => (
          <NavLink key={path} to={path}>{label}</NavLink>
        ))}
        <a className="nav-phone" href={`tel:${business.phone}`} aria-label={`Call ${business.phoneDisplay}`}>
          <Phone size={15} /> <span>{business.phoneDisplay}</span>
        </a>
        <Button to="/driving-school" className="nav-cta" variant="gold">Start learning <ArrowUpRight size={15} /></Button>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand-block">
          <Link to="/" className="brand footer-brand">
            <span className="brand-mark" aria-hidden="true">GG</span>
            <span className="brand-copy"><b>GOD'S GRACE MEGA</b><small>DRIVING SCHOOL ACADEMY</small></span>
          </Link>
          <p>Driving lessons and practical support for the road ahead in Lagos–Badagry.</p>
          <span className="footer-location"><MapPin size={15} /> {business.location}</span>
        </div>
        <div className="footer-col">
          <b>Explore</b>
          {links.map(([label, path]) => <Link key={path} to={path}>{label}</Link>)}
        </div>
        <div className="footer-col footer-contact">
          <b>Speak with our team</b>
          <a href={`tel:${business.phone}`}><Phone size={15} /> {business.phoneDisplay}</a>
          <Button href={wa('Hello, I would like to make an enquiry.')} variant="gold">WhatsApp us <ArrowUpRight size={15} /></Button>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {business.name}</span>
        <span>Federal Government Approved Driving School with FRSC</span>
      </div>
    </footer>
  );
}

export function PageShell({ children }) {
  const { pathname } = useLocation();
  const reduceMotion = useReducedMotion();

  useEffect(() => window.scrollTo({ top: 0, behavior: 'auto' }), [pathname]);

  return (
    <>
      <Navbar />
      <main id="main-content">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pathname}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <a className="floating-wa" href={wa('Hello, I would like to make an enquiry.')} target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp">
        <MessageCircle size={21} aria-hidden="true" />
      </a>
    </>
  );
}

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <Reveal>
          <div className="hero-location"><MapPin size={15} /> LAGOS–BADAGRY, NIGERIA</div>
          <h1>Take the wheel.<br /><em>We’ll guide you.</em></h1>
          <p>Practical manual and automatic driving lessons, with the local support you need to get moving.</p>
          <div className="hero-actions">
            <Button to="/driving-school" variant="gold">Start learning <ArrowRight size={17} /></Button>
            <Button href={wa('Hello, I would like to ask about driving lessons.')} variant="outline-light">WhatsApp us <ArrowUpRight size={16} /></Button>
          </div>
          <div className="hero-approval"><ShieldCheck size={17} /><span>Federal Government Approved Driving School with FRSC</span></div>
        </Reveal>
      </div>
      <div className="hero-visual">
        <img src={images.hero} alt="God’s Grace Mega Driving School Academy training car on a Lagos–Badagry road" fetchPriority="high" />
        <span className="hero-image-caption"><i /> LOCAL LESSONS. REAL ROAD EXPERIENCE.</span>
        <span className="hero-image-index">01 <span>/ 03</span></span>
      </div>
      <a className="hero-scroll" href="#welcome"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
    </section>
  );
}

export function TrustStrip() {
  const facts = [
    [<ShieldCheck size={20} />, 'FRSC approved', 'Federal Government Approved Driving School'],
    [<CarFront size={20} />, 'Manual & automatic', 'Choose your learning path'],
    [<Clock3 size={20} />, 'Two-week training', 'Flexible lesson scheduling'],
    [<MapPin size={20} />, 'Lagos–Badagry', 'Serving our local community'],
  ];

  return (
    <section className="trust-strip" aria-label="Academy information">
      {facts.map(([icon, title, detail]) => (
        <div className="trust-item" key={title}>
          <span className="trust-icon">{icon}</span>
          <span><b>{title}</b><small>{detail}</small></span>
        </div>
      ))}
    </section>
  );
}

export function CourseCard({ course, index }) {
  return (
    <Reveal as="article" className={`course-card course-card-${index}`} delay={index * 0.08}>
      <div className="course-image">
        <img src={imageUrl(course.image)} alt={`${course.type} driving school training vehicle`} loading="lazy" />
        <span className="course-label">0{index + 1} / {course.type.toUpperCase()}</span>
      </div>
      <div className="course-content">
        <div className="course-heading"><h3>{course.type}</h3><span className="course-price">{course.price}</span></div>
        <p>{course.description}</p>
        <a className="course-link" href={wa(`Hello, I would like to enquire about ${course.type.toLowerCase()} driving lessons.`)} target="_blank" rel="noreferrer">
          Ask about {course.type.toLowerCase()} lessons <ArrowUpRight size={16} />
        </a>
      </div>
    </Reveal>
  );
}

export function CourseGrid() {
  return (
    <div className="course-grid">
      {courses.map((course, index) => <CourseCard key={course.type} course={course} index={index} />)}
    </div>
  );
}

export function SectionPhoto({ src, alt, caption, className = '' }) {
  return (
    <figure className={`section-photo ${className}`}>
      <img src={imageUrl(src)} alt={alt} loading="lazy" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export function ProcessSteps() {
  const steps = [
    ['01', 'Choose your course', 'Tell us whether you want to learn in a manual or automatic car.'],
    ['02', 'Plan your lessons', 'We’ll discuss a flexible schedule that works for you.'],
    ['03', 'Build road confidence', 'Complete two weeks of practical training and continue with your learner’s permit.'],
  ];

  return (
    <div className="process-list">
      {steps.map(([number, title, copy], index) => (
        <Reveal as="article" className="process-step" key={number} delay={index * 0.08}>
          <span className="process-number">{number}</span>
          <div><h3>{title}</h3><p>{copy}</p></div>
          <ChevronRight className="process-arrow" size={20} />
        </Reveal>
      ))}
    </div>
  );
}

export function ServiceList({ items = documentServices }) {
  return (
    <div className="service-list">
      {items.map(([title, copy], index) => (
        <Reveal as="article" className="service-row" key={title} delay={(index % 3) * 0.04}>
          <span className="service-index">{String(index + 1).padStart(2, '0')}</span>
          <div><h3>{title}</h3><p>{copy}</p></div>
          <a href={wa(`Hello, I would like assistance with ${title.toLowerCase()}.`)} target="_blank" rel="noreferrer" aria-label={`Ask about ${title}`}><ArrowUpRight size={18} /></a>
        </Reveal>
      ))}
    </div>
  );
}

export function LearningPhotos() {
  const photos = [
    { image: 'practice', alt: 'Learner practising steering inside a training car', caption: 'Practice on the road' },
    { image: 'instructor', alt: 'Learner seated at the wheel of a training car', caption: 'Time behind the wheel' },
    { image: 'manual', alt: 'God’s Grace Mega manual training car in Badagry', caption: 'Our training vehicle' },
  ];

  return (
    <div className="learning-gallery">
      {photos.map((photo, index) => (
        <Reveal as="figure" className={`learning-photo learning-photo-${index + 1}`} key={photo.image} delay={index * 0.06}>
          <img src={imageUrl(photo.image)} alt={photo.alt} loading="lazy" />
          <figcaption><span>0{index + 1}</span>{photo.caption}</figcaption>
        </Reveal>
      ))}
    </div>
  );
}

export function ApprovalPanel() {
  return (
    <section className="approval-panel">
      <div className="approval-emblem"><ShieldCheck size={28} /><span>FRSC</span><small>APPROVED<br />DRIVING SCHOOL</small></div>
      <div className="approval-copy"><span className="eyebrow">A FOUNDATION OF TRUST</span><h2>Learn with an approved driving school.</h2><p>{business.name} is a Federal Government Approved Driving School with FRSC.</p></div>
      <BadgeCheck className="approval-check" size={26} />
    </section>
  );
}

export function CTASection({ title = 'Ready to get started?', copy = 'Call or message our team to talk about lessons, documents, vehicles or property.', dark = true }) {
  return (
    <section className={`cta-band ${dark ? 'cta-dark' : ''}`}>
      <div><span className="eyebrow">YOUR NEXT STEP STARTS HERE</span><h2>{title}</h2><p>{copy}</p></div>
      <div className="cta-actions">
        <Button href={`tel:${business.phone}`} variant={dark ? 'light' : 'dark'}><Phone size={16} /> Call {business.phoneDisplay}</Button>
        <Button href={wa('Hello, I would like to make an enquiry.')} variant="gold">WhatsApp us <ArrowUpRight size={16} /></Button>
      </div>
    </section>
  );
}

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = `Hello, my name is ${form.get('name')} and my phone number is ${form.get('phone')}. I would like to enquire about ${form.get('topic')}. ${form.get('message')}`;
    window.open(wa(message), '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label>Your name<input name="name" autoComplete="name" required /></label>
        <label>Phone number<input name="phone" type="tel" autoComplete="tel" required /></label>
      </div>
      <label>What can we help with?
        <select name="topic" defaultValue="Driving lessons">
          <option>Driving lessons</option><option>Vehicle documentation</option><option>Buying or selling a vehicle</option><option>Real estate enquiry</option><option>Other enquiry</option>
        </select>
      </label>
      <label>Your message<textarea name="message" rows="4" required /></label>
      <button className="button button-dark" type="submit">{sent ? 'Continue in WhatsApp' : 'Prepare WhatsApp enquiry'} <ArrowRight size={16} /></button>
      <small>Your message opens in WhatsApp for you to review and send.</small>
    </form>
  );
}
