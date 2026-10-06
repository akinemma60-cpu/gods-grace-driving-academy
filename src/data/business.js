export const business = {
  name: "God's Grace Mega Driving School Academy",
  phoneDisplay: '08035682998',
  phone: '2348035682998',
  location: 'Lagos–Badagry, Nigeria',
  whatsapp(message = "Hello, I'd like to make an enquiry.") {
    return `https://wa.me/${this.phone}?text=${encodeURIComponent(message)}`;
  },
};

export const courses = [
  {
    type: 'Manual',
    price: '₦150,000',
    image: 'manual',
    description: 'Build a strong feel for clutch control, gears and the road through practical lessons.',
  },
  {
    type: 'Automatic',
    price: '₦135,000',
    image: 'automatic',
    description: 'Learn smooth, confident vehicle control with practical automatic driving lessons.',
  },
];

export const documentServices = [
  ['Plate Number & Vehicle Registration', 'Guidance and processing support for vehicle registration enquiries.'],
  ["Driver's Licence Processing", 'Support with driver licence application enquiries.'],
  ["International Driver's Licence", 'Ask our team about international driver licence documentation.'],
  ['Vehicle Document Renewal', 'Assistance with preparing vehicle documents for renewal.'],
  ["Driver's Licence Renewal", 'Guidance for driver licence renewal enquiries.'],
  ['Tinted Permit Approval', 'Support with tinted permit documentation enquiries.'],
];

export const images = {
  hero: '/images/car%20in%20motion.avif',
  manual: '/images/manual.jpeg',
  automatic: '/images/automatic.jpeg',
  instructor: '/images/instructor%20traing%20a%20student.webp',
  practice: '/images/inside%20a%20car%20during%20drivers%20practice.webp',
  property: '/images/real-estate.jpg',
};

export const imageUrl = (name) => images[name] || `/images/${name}`;
