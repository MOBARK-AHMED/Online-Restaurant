import React from 'react'
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import item0 from './images/item-1.jpeg'
import item1 from './images/item-2.jpeg'
import item2 from './images/item-3.jpeg'
import item3 from './images/item-4.jpeg'
import item4 from './images/item-5.jpeg'
import item5 from './images/item-6.jpeg'
import item6 from './images/item-7.jpeg'
import item7 from './images/item-8.jpeg'
import item8 from './images/item-9.jpeg'

export const links = [
  {
    id: 0,
    url: '/products',
    text: 'products',
  },
  {
    id: 1,
    url: '/services',
    text: 'services',
  },
  {
    id: 2,
    url: '/about us',
    text: 'about us',
  },
  {
    id: 3,
    url: '/contact us',
    text: 'contact us',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.benance.com',
    icon: <FaBehance />,
  },
];

const menu = [
  {
    id: 0,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: item0,
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 1,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: item1,
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 2,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: item2,
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 3,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: item3,
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 4,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: item4,
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 5,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: item5,
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 6,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: item6,
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 7,
    title: 'american classic',
    category: 'lunch',
    price: 12.99,
    img: item7,
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 8,
    title: 'quarantine buddy',
    category: 'shakes',
    price: 16.99,
    img: item8,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
export default menu;

export const reviews = [
  {
    id: 1,
    name: 'Mobark Ahmed',
    job: 'web developer',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'Riham Ahmed',
    job: 'web designer',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text:
      'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'Malik Ahmed',
    job: 'intern',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text:
      'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'Mortda Ahmed',
    job: 'the boss',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text:
      'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

export const fqa = [
  {
    id: 0,
    question: 'Could you tell me about yourself?',
    answer: 'I began my career in Electronics, but a few years ago, I was drawn to the Web Development. I’ve always been skilled at bringing people together and working toward common goals. My experience successfully leading teams and managing stores led me to consider programming, and I’ve been building a career as a driven Web developer for the last four years.'
  },
  {
    id: 1,
    question: 'What kind of technologies do you use?',
    answer: 'The development of advanced web applications is Orient Software’s specialty, and we will successfully fulfill all your web application development requirements, from small-sized to wider-ranged projects. To maintain and improve our high-quality web apps, we have expertise in various web development technologies.'
  },
  {
    id: 2,
    question: 'What kinds of projects have you taken on?',
    answer: 'Word count is the number of words in a document or passage of text.<br>This project aims to recreate a pixel perfect design and make a one-page responsive layout.'
  },
  {
    id: 3,
    question: 'How long will it take to complete my project?',
    answer: 'First, it’s important to understand that every website is different. We can’t just say: Your website should take exactly two months to build” since we don’t know what kind of project you have in mind. Even if we did, chances are high that you want particular functionality or a specific look. Translating all of that from your head into a fully-working website takes time.'
  },
  {
    id: 4,
    question: 'What do you do if you can’t work out a coding issue by yourself?',
    answer: 'When I am stuck on a problem, where I turn to for help? I can’t say it enough—Googling everything is absolutely MY friend in web development! Whether I get deep into Stack Overflow or other forums, or I ask a colleague, friend, or a knowledgeable developer from my network.'
  },
];

export const features = [
  {
    id: 0,
    url: '/overview',
    text: 'overview',
  },
  {
    id: 1,
    url: '/design',
    text: 'design',
  },
  {
    id: 2,
    url: '/collaborate',
    text: 'collaborate',
  },
  {
    id: 3,
    url: '/soon to come',
    text: 'soon to come',
  },
];

export const getStarted = [
  {
    id: 0,
    url: '/video',
    text: 'video',
  },
  {
    id: 1,
    url: '/resources',
    text: 'resources',
  },
  {
    id: 2,
    url: '/guides',
    text: 'guides',
  },
  {
    id: 3,
    url: '/docs',
    text: 'docs',
  },
];

export const about = [
  {
    id: 0,
    url: '/stories',
    text: 'stories',
  },
  {
    id: 1,
    url: '/community',
    text: 'community',
  },
  {
    id: 2,
    url: '/blog',
    text: 'blog',
  },
  {
    id: 3,
    url: '/brand assets',
    text: 'brand assets',
  },
];

export const help = [
  {
    id: 0,
    url: '/contact us',
    text: 'contact us',
  },
  {
    id: 1,
    url: '/about us',
    text: 'about us',
  },
  {
    id: 2,
    url: '/terms',
    text: 'terms',
  },
  {
    id: 3,
    url: '/FAG',
    text: 'FAQ',
  },
];