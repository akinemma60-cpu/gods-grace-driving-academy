import { Route, Routes, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import {
  ArrowRight, ArrowUpRight, Check, Clock3, MapPin, Phone, ShieldCheck,
} from 'lucide-react';
import { business, documentServices, imageUrl } from './data/business.js';
import {
  ApprovalPanel, Button, CTASection, ContactForm, CourseGrid, Hero,
  LearningPhotos, PageShell, ProcessSteps, Reveal, SectionPhoto,
  SectionTitle, ServiceList, TrustStrip, wa,
} from './components.jsx';

function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />

      <section className="welcome section-pad" id="welcome">
        <Reveal className="welcome-copy">
          <SectionTitle
            eyebrow="GOOD GUIDANCE FOR THE ROAD AHEAD"
            title={<>Start with the basics.<br /><em>Leave ready for the road.</em></>}
            copy="Learn with practical manual or automatic lessons from a local academy serving Lagos–Badagry. We can also help with vehicle and licence documentation."
          />
          <div className="welcome-details">
            <span><MapPin size={17} /> Lagos–Badagry, Nigeria</span>
            <span><Clock3 size={17} /> Two-week training · Flexible scheduling</span>
          </div>
          <Button to="/about" variant="outline-dark">Meet the academy <ArrowRight size={16} /></Button>
        </Reveal>
        <SectionPhoto src="instructor" alt="Learner seated at the wheel during driving practice" caption="PRACTICAL LESSONS, ONE STEP AT A TIME" className="welcome-photo" />
      </section>

      <section className="training-section section-pad" id="training">
        <div className="section-heading-row">
          <SectionTitle
            eyebrow="DRIVING LESSONS"
            title={<>Choose the car.<br /><em>We’ll help with the rest.</em></>}
            copy="Clear course options, practical time behind the wheel and flexible scheduling."
          />
          <Button to="/driving-school" variant="text">Training information <ArrowRight size={16} /></Button>
        </div>
        <CourseGrid />
        <div className="training-facts" aria-label="Training information">
          <span><Clock3 size={17} /><b>2 weeks</b> of training</span>
          <span><Check size={17} /><b>Flexible</b> scheduling</span>
          <span><Check size={17} /><b>Age 17+</b> to enrol</span>
          <span><ShieldCheck size={17} /> Learner’s permit valid for 3 months after training</span>
        </div>
      </section>

      <section className="services-preview section-pad">
        <div className="services-preview-intro">
          <SectionTitle
            eyebrow="MORE THAN DRIVING"
            title={<>Practical help<br /><em>for your next move.</em></>}
            copy="Speak with our team about vehicle and driver documents, vehicle sales support or real estate services."
          />
          <Button to="/services" variant="dark">Explore services <ArrowRight size={16} /></Button>
        </div>
        <div className="services-preview-list">
          <span className="list-kicker">DOCUMENTATION SUPPORT</span>
          <ServiceList items={documentServices.slice(0, 3)} />
          <div className="service-links">
            <Link to="/vehicles"><span><b>Vehicle buying & selling</b><small>Discuss your requirements with us.</small></span><ArrowUpRight size={18} /></Link>
            <Link to="/real-estate"><span><b>Real estate</b><small>Property agency and development.</small></span><ArrowUpRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="learning-section section-pad">
        <div className="section-heading-row">
          <SectionTitle
            eyebrow="LEARNING IN PRACTICE"
            title={<>A closer look at<br /><em>life behind the wheel.</em></>}
            copy="Get familiar with the training car and the focus of practical lessons."
          />
          <Button to="/driving-school" variant="text">Explore driving lessons <ArrowRight size={16} /></Button>
        </div>
        <LearningPhotos />
      </section>

      <div className="section-pad approval-wrap"><ApprovalPanel /></div>
      <CTASection title="Your first lesson starts with a conversation." copy="Call or message us to ask about a course, schedule or service." />
    </>
  );
}

function PageHero({ eyebrow, title, copy, image, alt, actions = true }) {
  return (
    <section className="page-hero">
      <div className="page-hero-copy">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{copy}</p>
        {actions && <div className="page-hero-actions">
          <Button href={wa(`Hello, I would like to enquire about ${eyebrow.toLowerCase()}.`)} variant="gold">Make an enquiry <ArrowRight size={16} /></Button>
          <a href={`tel:${business.phone}`} className="page-call"><Phone size={16} /> {business.phoneDisplay}</a>
        </div>}
      </div>
      <div className="page-hero-photo"><img src={imageUrl(image)} alt={alt} fetchPriority="high" /></div>
    </section>
  );
}

function DrivingPage() {
  return (
    <>
      <PageHero eyebrow="DRIVING SCHOOL · LAGOS–BADAGRY" title={<>Learn with purpose.<br /><em>Drive with confidence.</em></>} copy="Choose manual or automatic training, then build control and confidence through practical lessons over two weeks." image="manual" alt="God’s Grace Mega manual driving school car in Badagry" />
      <section className="training-section section-pad inner-training">
        <SectionTitle eyebrow="COURSE OPTIONS" title="Find the right way to begin." copy="Both courses include two weeks of training and flexible scheduling. Students must be 17 or older." />
        <CourseGrid />
        <div className="permit-note"><ShieldCheck size={21} /><p>A learner’s permit is provided after successful training and remains valid for 3 months.</p></div>
      </section>
      <section className="process-section section-pad">
        <SectionTitle eyebrow="A CLEAR START" title="From first enquiry to first drive." copy="Talk through your course, agree a schedule and get started with practical training." />
        <ProcessSteps />
      </section>
      <CTASection title="Ready to choose your course?" copy="Call or message the academy to ask about manual and automatic lessons." />
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="DOCUMENTATION & SUPPORT" title={<>Help with the details<br /><em>that keep you moving.</em></>} copy="Ask our team about vehicle registration, driver licence processing, renewals and other documentation services." image="automatic" alt="God’s Grace Mega driving school automatic training vehicle" />
      <section className="documents-section section-pad">
        <div className="documents-intro">
          <SectionTitle eyebrow="VEHICLE & DRIVER DOCUMENTS" title="Support for the paperwork." copy="Choose a service and tell us what you need. We’ll guide you through the next step for your enquiry." />
          <div className="service-contact-card"><span>NEED A HAND?</span><h3>Talk it through with our team.</h3><p>Call or send a WhatsApp message and let us know which document you need help with.</p><Button href={wa('Hello, I would like help with vehicle or driver documentation.')} variant="gold">Ask about documents <ArrowUpRight size={16} /></Button></div>
        </div>
        <ServiceList />
      </section>
      <section className="other-services section-pad">
        <SectionTitle eyebrow="OTHER SERVICES" title="More ways we can help." copy="Our academy also supports vehicle enquiries and real estate agency and development." />
        <div className="other-service-links">
          <Link to="/vehicles"><span className="other-service-icon"><CarIcon /></span><span><small>VEHICLE SERVICES</small><b>Buying and selling vehicles</b><em>Discuss your needs with us.</em></span><ArrowUpRight size={19} /></Link>
          <Link to="/real-estate"><span className="other-service-icon"><HomeIcon /></span><span><small>REAL ESTATE</small><b>Property agency and development</b><em>Make a property enquiry.</em></span><ArrowUpRight size={19} /></Link>
        </div>
      </section>
      <CTASection title="Ask us about a service." />
    </>
  );
}

function VehiclePage() {
  return (
    <>
      <PageHero eyebrow="VEHICLE SERVICES" title={<>Buying or selling?<br /><em>Start with a conversation.</em></>} copy="Enquire about vehicle sourcing or sales support. Tell our team what you have in mind and we’ll take it from there." image="automatic" alt="God’s Grace Mega automatic driving school vehicle" />
      <section className="vehicle-section section-pad">
        <SectionPhoto src="manual" alt="God’s Grace Mega driving school vehicle on a Badagry road" caption="GOD’S GRACE MEGA · BADAGRY" className="vehicle-feature-photo" />
        <div className="vehicle-copy"><SectionTitle eyebrow="BUYING & SELLING" title="The right vehicle starts with the right questions." copy="We support vehicle sourcing and sales enquiries. Share your requirements or tell us about a vehicle you would like to sell." /><ul className="check-list"><li><Check size={17} /> Vehicle sourcing enquiries</li><li><Check size={17} /> Vehicle sales support</li><li><Check size={17} /> Direct conversation with our team</li></ul><Button href={wa('Hello, I would like to enquire about buying or selling a vehicle.')} variant="dark">Enquire about a vehicle <ArrowRight size={16} /></Button></div>
      </section>
      <CTASection title="Tell us what you’re looking for." copy="Call or message the academy to discuss a vehicle enquiry." />
    </>
  );
}

function RealEstatePage() {
  return (
    <>
      <PageHero eyebrow="REAL ESTATE" title={<>Property, with a<br /><em>local point of contact.</em></>} copy="God’s Grace Mega also works in real estate property agency and development. Contact us to discuss your property enquiry." image="property" alt="Contemporary residential property exterior" />
      <section className="estate-section section-pad">
        <div className="estate-copy"><SectionTitle eyebrow="PROPERTY SERVICES" title="Make your next property move." copy="Speak with our team about property agency, development and real estate enquiries in Lagos–Badagry." /><ul className="check-list"><li><Check size={17} /> Real estate property agency</li><li><Check size={17} /> Property development</li><li><Check size={17} /> Property enquiries</li></ul><Button href={wa('Hello, I would like to enquire about real estate services.')} variant="dark">Make a property enquiry <ArrowRight size={16} /></Button></div>
        <SectionPhoto src="property" alt="Residential property exterior" caption="REAL ESTATE · LAGOS–BADAGRY" className="estate-photo" />
      </section>
      <CTASection title="Have a property enquiry?" copy="Call or message us to start a conversation." />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="ABOUT THE ACADEMY" title={<>Local guidance.<br /><em>Practical learning.</em></>} copy="God’s Grace Mega Driving School Academy serves Lagos–Badagry with manual and automatic driver training, vehicle documentation assistance and other practical services." image="hero" alt="God’s Grace Mega driving school car on a local road" />
      <section className="about-section section-pad">
        <SectionPhoto src="instructor" alt="Learner at the steering wheel during driving practice" caption="PRACTICAL DRIVER TRAINING" className="about-photo" />
        <div className="about-copy"><SectionTitle eyebrow="WHO WE ARE" title="Good guidance at every turn." copy="We bring driving lessons, documentation assistance, vehicle services and real estate enquiries together through one local point of contact." /><p className="about-approval"><ShieldCheck size={19} /> Federal Government Approved Driving School with FRSC</p><Button to="/contact" variant="dark">Talk with our team <ArrowRight size={16} /></Button></div>
      </section>
      <div className="section-pad"><ApprovalPanel /></div>
      <CTASection title="How can we help you move forward?" />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero eyebrow="CONTACT THE ACADEMY" title={<>Let’s talk about<br /><em>your next step.</em></>} copy="Ask about lessons, vehicle and driver documents, vehicle services or real estate enquiries." image="practice" alt="Driver practising behind the wheel" actions={false} />
      <section className="contact-section section-pad">
        <div className="contact-details">
          <SectionTitle eyebrow="WE’RE HERE TO HELP" title="A good next step starts with a conversation." copy="Call or message God’s Grace Mega Driving School Academy in Lagos–Badagry." />
          <a className="contact-method" href={`tel:${business.phone}`}><span><Phone size={19} /></span><div><small>CALL THE ACADEMY</small><b>{business.phoneDisplay}</b></div><ArrowUpRight size={18} /></a>
          <a className="contact-method" href={wa('Hello, I would like to make an enquiry.')} target="_blank" rel="noreferrer"><span><MessageIcon /></span><div><small>WHATSAPP</small><b>Message our team</b></div><ArrowUpRight size={18} /></a>
          <div className="contact-method contact-location"><span><MapPin size={19} /></span><div><small>AREA SERVED</small><b>{business.location}</b></div></div>
        </div>
        <div className="contact-form-wrap"><div className="form-heading"><span className="eyebrow">SEND AN ENQUIRY</span><h2>What can we help with?</h2><p>Complete the form and review your message in WhatsApp before sending.</p></div><ContactForm /></div>
      </section>
    </>
  );
}

function CarIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 11 1.4-4.1A2 2 0 0 1 8.3 5.5h7.4a2 2 0 0 1 1.9 1.4L19 11m-15 0h16a1 1 0 0 1 1 1v5h-2m-14 0H4v-5a1 1 0 0 1 1-1Zm2 5h10m-10 0H7m10 0h1M7 14h.01M17 14h.01" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>; }
function HomeIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 11 9-7 9 7M5 10v10h14V10M9 20v-6h6v6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>; }
function MessageIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a7.5 7.5 0 0 1-11 6.6L4 20l1.5-4.1A7.5 7.5 0 1 1 20 11.5Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>; }

function NotFound() {
  return <section className="not-found"><span className="eyebrow">PAGE NOT FOUND</span><h1>Let’s get you back on the road.</h1><Button to="/" variant="dark">Return home <ArrowRight size={16} /></Button></section>;
}

const pageMeta = {
  '/': ["God's Grace Mega Driving School Academy | Lagos–Badagry", 'Manual and automatic driving lessons, vehicle documentation assistance and more in Lagos–Badagry, Nigeria.'],
  '/driving-school': ['Driving Lessons in Lagos–Badagry | God’s Grace Mega', 'Manual and automatic driving lessons, course information and flexible scheduling in Lagos–Badagry.'],
  '/services': ['Vehicle & Driver Documentation | God’s Grace Mega', 'Ask about vehicle registration, driver licence processing, renewals and documentation support.'],
  '/vehicles': ['Vehicle Services | God’s Grace Mega', 'Enquire about vehicle sourcing and vehicle sales support in Lagos–Badagry.'],
  '/real-estate': ['Real Estate | God’s Grace Mega', 'Property agency, development and real estate enquiries in Lagos–Badagry.'],
  '/about': ['About the Academy | God’s Grace Mega', 'Learn about God’s Grace Mega Driving School Academy and its services in Lagos–Badagry.'],
  '/contact': ['Contact | God’s Grace Mega Driving School Academy', 'Call or message the academy about lessons, documents, vehicles or property services.'],
};

function RouteMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const [title, description] = pageMeta[pathname] || ['Page not found | God’s Grace Mega', 'The requested page could not be found.'];
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.content = description;
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <RouteMetadata />
      <PageShell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/driving-school" element={<DrivingPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/vehicles" element={<VehiclePage />} />
          <Route path="/real-estate" element={<RealEstatePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageShell>
    </>
  );
}
