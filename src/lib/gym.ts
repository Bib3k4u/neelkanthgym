export const phone = "+91 98106 42646";
export const whatsapp = "https://wa.me/919810642646";
export const inquiry = (message: string) =>
  `${whatsapp}?text=${encodeURIComponent(message)}`;
export const mapLink =
  "https://www.google.com/maps/place/Neelkanth+Gym/@28.6348889,77.2760903,17.27z/data=!4m6!3m5!1s0x390cfd0d26760729:0x84d7dc5a00e18e70!8m2!3d28.6349314!4d77.2762768!16s%2Fg%2F11g2vk2k_d";
export const mapEmbed =
  "https://maps.google.com/maps?q=Neelkanth+Gym+M+-+122%2C+Near+Jagat+Ram+Park%2C+Laxmi+Nagar%2C+New+Delhi%2C+Delhi+110092&z=17&output=embed";
export const branches = [
  {
    id: "laxmi-nagar",
    name: "Laxmi Nagar",
    address: "M - 122, Near Jagat Ram Park, Laxmi Nagar, New Delhi, Delhi 110092",
    mapLink,
    mapEmbed,
  },
  {
    id: "madhu-vihar",
    name: "Madhu Vihar",
    address: "C-7, Sai Chowk, Madhu Vihar Rd, near FITNEST GYM, Madhu Vihar, I.P.Extension, Patparganj, Delhi, 110092",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Neelkanth+Gym+C-7%2C+Sai+Chowk%2C+Madhu+Vihar+Rd%2C+near+FITNEST+GYM%2C+Madhu+Vihar%2C+I.P.Extension%2C+Patparganj%2C+Delhi%2C+110092",
    mapEmbed:
      "https://maps.google.com/maps?q=Neelkanth+Gym+C-7%2C+Sai+Chowk%2C+Madhu+Vihar+Rd%2C+near+FITNEST+GYM%2C+Madhu+Vihar%2C+I.P.Extension%2C+Patparganj%2C+Delhi%2C+110092&z=16&output=embed",
  },
];
export type Trainer = { name: string; role?: string; photo?: string };
/** Coaches per branch (keyed by branch id). */
export const trainersByBranch: Record<string, Trainer[]> = {
  "laxmi-nagar": [
    { name: "Sam", role: "Senior Instructor In-charge", photo: "/images/trainers/sam.webp" },
    { name: "Hemant", role: "Weight Training Instructor" },
    { name: "Rohit", role: "Weight Training Instructor" },
    { name: "Sachin", role: "Aerobic Instructor" },
    { name: "Anaya", role: "Zumba Instructor" },
    { name: "Ashish", role: "Bollywood & Hollywood Instructor" },
  ],
  "madhu-vihar": [
    { name: "Manish Chaudhary" },
    { name: "Neeraj Saini" },
    { name: "Karan" },
  ],
};
export type ClassSlot = {
  title: string;
  days: string;
  time: string;
  coach: string;
  note?: string;
  activities: string[];
};
/** Group class timetable for the Laxmi Nagar branch. */
export const laxmiNagarSchedule: ClassSlot[] = [
  {
    title: "Morning group fitness",
    days: "Mon – Sat",
    time: "7:30 – 8:30 AM",
    coach: "Sam",
    activities: ["Aerobic exercise", "HIIT cardio", "Group fitness training"],
  },
  {
    title: "Ladies special batch",
    days: "Mon – Sat",
    time: "11:00 AM onwards",
    coach: "Sam",
    activities: [
      "Aerobic exercise",
      "HIIT cardio",
      "Strength training",
      "Stepper exercise",
      "CrossFit",
      "Circuit training",
      "HYROX training",
    ],
  },
  {
    title: "Evening group fitness",
    days: "Mon – Sat",
    time: "Evening",
    coach: "Sam",
    note: "Tuesday off",
    activities: [
      "HIIT cardio group",
      "Strength training",
      "CrossFit",
      "Circuit training",
      "HYROX training",
      "Stepper exercise",
      "Full body workout",
      "Dumbbell & barbell group exercise",
    ],
  },
  {
    title: "Evening Zumba",
    days: "Mon & Fri",
    time: "7:00 – 8:00 PM",
    coach: "Anaya",
    activities: ["Zumba", "Dance fitness", "Cardio"],
  },
  {
    title: "Bollywood dance",
    days: "Tuesday",
    time: "7:30 – 8:30 PM",
    coach: "Ashish",
    activities: ["Bollywood"],
  },
  {
    title: "Bollywood dance",
    days: "Thursday",
    time: "6:30 – 7:30 PM",
    coach: "Ashish",
    activities: ["Bollywood"],
  },
];
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "The club", href: "#the-club" },
  { label: "Programs", href: "#programs" },
  { label: "Schedule", href: "#schedule" },
  { label: "Our trainers", href: "#trainers" },
  { label: "Member app", href: "#member-app" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQs", href: "#faqs" },
  { label: "Visit us", href: "#visit" },
];
/** Group class timetable for the Madhu Vihar branch. DUMMY DATA: replace with the real timetable. */
export const madhuViharSchedule: ClassSlot[] = [
  {
    title: "Morning group fitness",
    days: "Mon – Sat",
    time: "6:30 – 7:30 AM",
    coach: "Manish Chaudhary",
    activities: ["Aerobic exercise", "HIIT cardio", "Group fitness training"],
  },
  {
    title: "Ladies batch",
    days: "Mon – Sat",
    time: "10:00 AM onwards",
    coach: "Neeraj Saini",
    activities: ["Aerobic exercise", "Strength training", "Stepper exercise"],
  },
  {
    title: "Evening group fitness",
    days: "Mon – Sat",
    time: "6:00 – 7:00 PM",
    coach: "Karan",
    activities: ["HIIT cardio", "CrossFit", "Circuit training", "Full body workout"],
  },
  {
    title: "Weekend Zumba",
    days: "Sat & Sun",
    time: "8:00 – 9:00 AM",
    coach: "Neeraj Saini",
    activities: ["Zumba", "Dance fitness", "Cardio"],
  },
];
export const scheduleByBranch: Record<string, ClassSlot[]> = {
  "laxmi-nagar": laxmiNagarSchedule,
  "madhu-vihar": madhuViharSchedule,
};
/** Developer credit shown in the footer. Set the Instagram profile URL, e.g. "https://instagram.com/yourhandle". */
export const creditInstagram = "https://www.instagram.com/_zha_bibek_?psln=M21pdGpyOG9wMTd5&utm_source=qr";
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
export const programs = [
  {
    name: "Weight training",
    category: "Strength",
    icon: "dumbbell",
    description: "Build strength, master your form, and make every rep count.",
    tag: "BUILD YOUR FOUNDATION",
  },
  {
    name: "Personal training",
    category: "Strength",
    icon: "target",
    description: "Your goals. Your pace. A coach and a plan focused on you.",
    tag: "ONE-TO-ONE. ALL FOR YOU.",
  },
  {
    name: "Group training",
    category: "Energy",
    icon: "users",
    description: "Find your rhythm with a crew that keeps you showing up.",
    tag: "BRING YOUR ENERGY",
  },
  {
    name: "Yoga & mobility",
    category: "Balance",
    icon: "wind",
    description:
      "Find your flow, move with intention, and make room to breathe.",
    tag: "STRENGTH IN STILLNESS",
  },
  {
    name: "Zumba",
    category: "Energy",
    icon: "music",
    description:
      "More rhythm. More movement. A whole new reason to love cardio.",
    tag: "TURN THE ENERGY UP",
  },
  {
    name: "Bollywood",
    category: "Energy",
    icon: "sparkles",
    description: "Dance to the beat of your favourite hits and burn calories without noticing.",
    tag: "DANCE IT OUT",
  },
  {
    name: "Hollywood",
    category: "Energy",
    icon: "clapperboard",
    description: "Move to global chart-toppers in a high-energy, feel-good dance workout.",
    tag: "STAR OF THE FLOOR",
  },
  {
    name: "Calisthenics",
    category: "Strength",
    icon: "activity",
    description: "Master your own bodyweight with pull-ups, push-ups, and skills that build real strength.",
    tag: "BODYWEIGHT. NO LIMITS.",
  },
  {
    name: "Fitness",
    category: "Balance",
    icon: "zap",
    description: "Move better in the gym, and feel the difference outside it.",
    tag: "MADE FOR EVERYDAY LIFE",
  },
] as const;
export const faqs = [
  {
    question: "I’m new to the gym. Can I join?",
    answer:
      "Absolutely. Neelkanth Gym welcomes beginners. Speak with our team about your goals and experience so we can help you find a comfortable starting point and the right training option.",
  },
  {
    question: "What training programs do you offer?",
    answer:
      "We offer weight training, personal training (PT), group training (GT), yoga, Zumba, Bollywood, Hollywood, calisthenics, and fitness. Message us for the current class schedule and availability.",
  },
  {
    question: "What’s included in the member app?",
    answer:
      "Our personalized member app helps you keep track of performance, workouts, meals, nutrition, and macros, so you can build consistency and see your progress. The app is launching soon. Ask the team to notify you when it is ready.",
  },
  {
    question: "How much is a membership?",
    answer:
      "Contact us on WhatsApp or call +91 98106 42646 for current membership options, personal training packages, and pricing. We’ll help you find an option that fits your goals.",
  },
  {
    question: "Where are you located, and when can I visit?",
    answer:
      "We have two branches. Laxmi Nagar: M - 122, Near Jagat Ram Park, Laxmi Nagar, New Delhi, Delhi 110092. Madhu Vihar: C-7, Sai Chowk, Madhu Vihar Rd, near FITNEST GYM, Madhu Vihar, I.P. Extension, Patparganj, Delhi 110092. Call or WhatsApp +91 98106 42646 to confirm current opening hours and arrange your visit.",
  },
  {
    question: "Do you have more than one branch?",
    answer:
      "Yes. Neelkanth Gym has two branches in Delhi, one in Laxmi Nagar near Jagat Ram Park and one in Madhu Vihar, Patparganj. Pick your branch in the schedule, trainers and reviews sections of this page.",
  },
];

/** Owner portrait. Drop a photo in public/images (e.g. owner.webp) and set this to "/images/owner.webp". */
export const ownerPhoto: string | null = null;

/**
 * Google reviews shown in the testimonial carousel.
 * Real 5-star reviews copied from the Google Business Profile, newest first.
 */
export type Review = {
  name: string;
  rating: number;
  text: string;
  when: string;
  sample?: boolean;
};
export const reviews: Review[] = [
  {
    name: "Bibek Jha",
    rating: 5,
    text: "I’ve been coming to this gym for nearly 3 years, and it has been an amazing experience. The owner and coaches are incredibly supportive, and the overall environment is super welcoming and positive. Highly recommend it to anyone looking for a great fitness community!",
    when: "7 minutes ago",
  },
  {
    name: "Sadhvi",
    rating: 5,
    text: "The gym is quite nice and there are a lot of different types of machines, the trainers are also helpful. The space is clean and well maintained for such an old gym. It gives old school vibes and quite cool in my opinion.",
    when: "9 months ago",
  },
  {
    name: "Rishabh Prasad",
    rating: 5,
    text: "Facilities are good, Trainers are better and Prices are the best. Total value for money 💰.",
    when: "9 months ago",
  },
  {
    name: "Asim",
    rating: 5,
    text: "The GYM is quite nice with all useful equipments available. Their trainers are also experienced to train you well for all exercises",
    when: "6 months ago",
  },
  {
    name: "Aashutosh Singh",
    rating: 5,
    text: "Best gym in Laxmi Nagar one can get all the facilities under one roof. It is very spacious, it expands in four floors, one should surely try it, you’ll love it.",
    when: "3 years ago",
  },
  {
    name: "Komal Gupta",
    rating: 5,
    text: "Neat n clean environment, best equipments at reasonable rates, so safe specially being a girl, good trainers. Best gym in Laxmi Nagar.",
    when: "3 years ago",
  },
  {
    name: "Roshan Sehwag",
    rating: 5,
    text: "It’s a good place to workout, all the trainers are very supportive. You also can do zumba here, latest equipment and at reasonable rate.",
    when: "4 years ago",
  },
  {
    name: "Anuj Nigam",
    rating: 5,
    text: "Nice place for workout, even the owner of the gym personally takes interest and takes sessions. It’s a four floor gym for workout sessions.",
    when: "5 years ago",
  },
  {
    name: "Sandeep Sehgal",
    rating: 5,
    text: "Best gym of the area. Well trained, competent & helpful supporting staff. Softspoken & helpful owner. Latest equipments, sufficient space, well designed layout.",
    when: "6 years ago",
  },
  {
    name: "Kartik Sharma",
    rating: 5,
    text: "I took membership of 3 months after visiting the gym. Everything is perfect within the gym that a person needs for hardcore workout sessions and training.",
    when: "6 years ago",
  },
];

/** Madhu Vihar reviews. PLACEHOLDERS: replace with real Google reviews for that branch and remove `sample: true`. */
export const madhuViharReviews: Review[] = [
  { name: "Sample Reviewer 1", rating: 5, text: "Replace this with a real Google review from a Madhu Vihar member.", when: "a month ago", sample: true },
  { name: "Sample Reviewer 2", rating: 5, text: "Replace this with a real Google review from a Madhu Vihar member.", when: "2 months ago", sample: true },
  { name: "Sample Reviewer 3", rating: 5, text: "Replace this with a real Google review from a Madhu Vihar member.", when: "3 months ago", sample: true },
];
export const reviewsByBranch: Record<string, Review[]> = {
  "laxmi-nagar": reviews,
  "madhu-vihar": madhuViharReviews,
};
