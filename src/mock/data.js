import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Devin Stagg | Marketer & Developer', // e.g: 'Name | Developer'
  lang: 'eng', // e.g: en, es, fr, jp
  description: 'Marketing Consulting & Web Development', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi 👋 My name is',
  name: 'Devin Stagg.',
  subtitle: 'I can build you a website and also help grow your business.',
  cta: 'Contact Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'devin_stagg_headshot.JPG',
  paragraphOne: '📱 Build an eCommerce, service-based, or blog-style website that converts.',
  paragraphTwo: '📣 Consult on SEO, email marketing, social media ads, and more.',
  paragraphThree: '👨🏼‍💻 Help you understand your market and create valuable content to entice potential customers.',
  resume: 'https://www.linkedin.com/in/devinstagg7/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'the_peaceful_sleeper.png',
    title: 'The Peaceful Sleeper',
    info: 'Built website using Wordpress and eCommerce functionality using Woocommerce.',
    info2: 'Led initatives and implemented systems to help grow revenue from first dollar to $12,000 per month.',
    url: 'https://thepeacefulsleeper.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pupford.png',
    title: 'Pupford',
    info: 'Ran all marketing to grow company from first $1,000 to first $2 million + in sales.',
    info2: 'Handled initiatives and strategy for email, lead gen, SEO, social media, paid social, PPC, landing page building, and more.',
    url: 'https://pupford.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dog_breed_database.png',
    title: 'Dog Breed Database (in progress)',
    info: 'Built front-end from scratch using React.',
    info2: 'Compiled database and created API using Node.js',
    url: 'https://modest-hoover-c65dc0.netlify.app/',
    repo: 'https://github.com/devinstagg/dog-breed-ui', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Affordable and reasonable pricing, contact me to get your project started today!',
  btn: 'Contact Me',
  email: 'devinstagg7@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/devinstagg',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/devinstagg',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
