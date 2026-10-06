export const business = {
  name: "God's Grace Mega Driving School Academy",
  phoneDisplay: '08035682998',
  phone: '2348035682998',
  location: 'Lagos / Badagry, Nigeria',
  whatsapp(message = 'Hello God’s Grace Mega Driving School Academy, I would like to make an enquiry.') {
    return `https://wa.me/${this.phone}?text=${encodeURIComponent(message)}`;
  },
};

export const courses = [
  { type: 'Manual', price: '₦150,000', image: 'manual.jpeg', description: 'Build confident control and learn to handle a manual vehicle on the road.', features: ['2 weeks of training', 'Flexible lesson schedule', 'Learner’s permit after completion'] },
  { type: 'Automatic', price: '₦135,000', image: 'automatic.jpeg', description: 'Learn smooth, practical driving in an automatic vehicle at your pace.', features: ['2 weeks of training', 'Flexible lesson schedule', 'Learner’s permit after completion'] },
];

export const services = [
  ['Plate Number & Vehicle Registration', 'Get assistance with vehicle registration documentation.'],
  ["Driver’s Licence Processing", 'Processing support and guidance for your licence enquiry.'],
  ['International Driver’s Licence', 'Ask us about assistance with international licence documentation.'],
  ['Vehicle Document Renewal', 'Get help preparing for vehicle document renewals.'],
  ["Driver’s Licence Renewal", 'Enquire about driver’s licence renewal support.'],
  ['Tinted Permit Approval', 'Get assistance with your tinted permit enquiry.'],
];

export const images = {
  hero: '/images/car%20in%20motion.avif',
  manual: '/images/manual.jpeg',
  automatic: '/images/automatic.jpeg',
  instructor: '/images/instructor%20traing%20a%20student.webp',
  practice: '/images/inside%20a%20car%20during%20drivers%20practice.webp',
  testimonials: ['/images/testimonial1.avif', '/images/testimonial2.avif', '/images/testimonial3.webp'],
  vehicle: '/images/car%20in%20motion.avif',
  property: '/images/real-estate.jpg',
};
export const imageUrl = (fileOrId) => images[fileOrId] || `/images/${fileOrId}`;
