export interface ServiceSummary {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  highlights: string[];
  iconName: string;
}

export const GYM_DETAILS = {
  name: 'World Gym Fitness Point',
  phone: '8699196866',
  formattedPhone: '+91 86991 96866',
  whatsappUrl:
    'https://wa.me/918699196866?text=Hi%20World%20Gym%20Fitness%20Point%2C%20I%20want%20to%20inquire%20about%20membership%20and%20trial%20sessions.',
  address: 'SCO 26, PUDA Complex, Ladowali Rd, Near Alaska Chowk, Jalandhar, Punjab 144001',
  shortAddress: 'SCO 26, PUDA Complex, Ladowali Rd, Jalandhar',
  landmark: 'Near Alaska Chowk (PUDA Complex)',
  rating: '4.7',
  reviewsCount: 238,
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=SCO+26+PUDA+complex+Ladowali+Rd+Near+Alaska+Chowk+Jalandhar+Punjab+144001',
  timings: {
    weekdays: 'Mon – Sat: 5:00 AM – 10:00 PM',
    sunday: 'Sunday: 7:00 AM – 1:00 PM'
  }
};

export const SERVICES_LIST: ServiceSummary[] = [
  {
    id: 'shoulder-joint-rehab',
    title: 'Shoulder & Joint Pain Rehab',
    category: 'Therapeutic',
    shortDesc: 'Relief for rotator cuff impingement, frozen shoulder, and hip joint stiffness.',
    highlights: ['Targeted rotator cuff strengthening', 'Hip capsule & knee tracking correction'],
    iconName: 'ShieldCheck'
  },
  {
    id: 'diet-nutrition',
    title: 'Diet & Nutrition Counselling',
    category: 'Nutrition',
    shortDesc: 'Custom diet charts adapted to North Indian & Punjabi lifestyle without starvation.',
    highlights: ['Custom calorie & macro splits', 'Weekly body composition checks'],
    iconName: 'Apple'
  },
  {
    id: 'teen-nutrition',
    title: 'Teen Nutrition & Youth Fitness',
    category: 'Youth',
    shortDesc: 'Safe posture coaching and growth-phase nutrition for ages 12–19.',
    highlights: ['Proper posture & foundational lifts', 'Growth spurt dietary fuel'],
    iconName: 'GraduationCap'
  },
  {
    id: 'hiit-classes',
    title: 'HIIT Exercise Classes',
    category: 'Cardio',
    shortDesc: 'Fast-paced interval circuits designed for quick fat burn and stamina.',
    highlights: ['45-min calorie-torching sessions', 'Cardiovascular endurance boost'],
    iconName: 'Zap'
  },
  {
    id: 'kickboxing',
    title: 'Kickboxing & Combat Conditioning',
    category: 'Striking',
    shortDesc: 'Heavy bag drills, pad work, core conditioning, and self-defense skills.',
    highlights: ['Pad work & striking mechanics', 'High-energy stress relief'],
    iconName: 'Swords'
  },
  {
    id: 'aerobics',
    title: 'Aerobics & Rhythm Cardio',
    category: 'Fitness',
    shortDesc: 'Music-driven group cardio that is gentle on joints and boosts energy.',
    highlights: ['Low-impact joint-friendly cardio', 'Fun and motivating batches'],
    iconName: 'HeartPulse'
  },
  {
    id: 'strength',
    title: 'Strength & Free Weights',
    category: 'Weights',
    shortDesc: 'Olympic barbells, power racks, dumbbell sets up to 50kg, and form coaching.',
    highlights: ['Certified form corrections', 'Heavy duty resistance machines'],
    iconName: 'Dumbbell'
  },
  {
    id: 'therapeutic-exercise',
    title: 'Therapeutic Exercise',
    category: 'Clinical',
    shortDesc: 'Active physical conditioning to decompress joints and correct posture.',
    highlights: ['Lower back & neck relief', 'Spinal alignment exercises'],
    iconName: 'Activity'
  }
];

export const BATCH_SCHEDULE = [
  { time: '5:00 AM – 6:30 AM', name: 'Sunrise HIIT & Cardio', tag: 'Morning Batch' },
  { time: '6:30 AM – 8:00 AM', name: 'Strength & Hypertrophy', tag: 'Morning Batch' },
  { time: '8:00 AM – 9:00 AM', name: 'Aerobics & Rhythm Cardio', tag: 'Morning Batch' },
  { time: '9:00 AM – 10:30 AM', name: 'Shoulder & Joint Mobility', tag: 'Morning Batch' },
  { time: '10:30 AM – 4:30 PM', name: 'Open Gym Floor & General Fitness', tag: 'Continuous Access' },
  { time: '4:30 PM – 5:30 PM', name: 'Teen Fitness & Foundational Form', tag: 'Evening Batch' },
  { time: '5:30 PM – 6:30 PM', name: 'Kickboxing & Bag Work', tag: 'Evening Batch' },
  { time: '6:30 PM – 7:30 PM', name: 'Evening HIIT Burn', tag: 'Evening Batch' },
  { time: '7:30 PM – 9:30 PM', name: 'Heavy Iron & Open Floor', tag: 'Evening Batch' },
  { time: '9:30 PM – 10:00 PM', name: 'Cool Down & Recovery', tag: 'Evening Batch' }
];

export const PRICING_TIERS = [
  {
    id: '1m',
    name: '1 Month',
    price: '₹1,500',
    subtitle: 'Flexible starter pass',
    perks: ['Full Gym & Equipment Access', 'Locker & Shower Facilities', 'Trainer Form Guidance']
  },
  {
    id: '3m',
    name: '3 Months',
    price: '₹3,800',
    subtitle: 'Transformation pass',
    popular: true,
    perks: [
      'All 1-Month Inclusions',
      'HIIT, Aerobics & Kickboxing',
      'Diet & Nutrition Consultation',
      'Monthly Body Measurements'
    ]
  },
  {
    id: '6m',
    name: '6 Months',
    price: '₹6,800',
    subtitle: 'Consistent progress',
    perks: [
      'All 3-Month Inclusions',
      'Shoulder & Joint Mobility Support',
      'Updated Workout & Diet Charts',
      'Free Shaker Bottle'
    ]
  },
  {
    id: '12m',
    name: '1 Year',
    price: '₹11,500',
    subtitle: 'Best yearly value',
    perks: [
      '365 Days Unlimited Access',
      'All Classes & Group Batches',
      'Quarterly Nutrition Reviews',
      '1 Month Membership Freeze'
    ]
  }
];

export const TOP_REVIEWS = [
  {
    name: 'Harpreet Singh',
    stars: 5,
    text: 'Fixed my severe shoulder pinch in 6 weeks with therapeutic exercises. Great trainers who actually check your lifting posture.',
    tag: 'Shoulder Pain Rehab'
  },
  {
    name: 'Ramanjot Kaur',
    stars: 5,
    text: 'The Kickboxing and Aerobics classes are energetic. Lost 8 kg following their simple Punjabi meal plan. Clean, safe environment for women.',
    tag: 'Kickboxing & Diet'
  },
  {
    name: 'Dr. Vivek Mehra',
    stars: 5,
    text: 'Located right near Alaska Chowk with easy parking. Their joint and spine recovery exercises relieved my long-standing back fatigue.',
    tag: 'Joint Rehab'
  }
];
