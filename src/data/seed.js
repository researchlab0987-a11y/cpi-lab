/**
 * SEED CONTENT – Cyber Physical Intelligence (CPI) Lab, IAT, BUET
 * src/data/seed.js
 *
 * Everything the site needs to render with no database at all. It is the
 * bottom layer of the fallback chain (see src/lib/store.js) and the content
 * that "Publish to Firestore" writes on first setup.
 *
 * Source: https://sites.google.com/view/tahsina-cpi-lab (extracted Oct 2026,
 * see _source/CONTENT.md). Images are in public/lab/.
 *
 * Anything that was unclear or possibly outdated on the old site is imported
 * with `review: '…'` (an editors-only note) and, where it should not be shown
 * yet, `hidden: true`. Editors see a "Review" badge and can clear it or make
 * the entry visible from the edit mode or the dashboard.
 */

const img = (name) => `/lab/${name}`;
const doiLink = (doi) => (doi ? `https://doi.org/${doi}` : '');
const EMAIL = 'tahsina@iat.buet.ac.bd';
const DIRECTOR_SITE = 'https://sites.google.com/site/tahsinafarahsanam/home';

/* ------------------------------------------------------------------ */
/* Site configuration                                                  */
/* ------------------------------------------------------------------ */

const config = {
  site: {
    title: 'CPI Lab · Cyber Physical Intelligence Lab, BUET',
    description:
      'The Cyber Physical Intelligence (CPI) Lab at the Institute of Appropriate Technology, BUET, turns heterogeneous sensor data into knowledge for healthcare, e-commerce, activity recognition and smart cities.',
    language: 'en',
  },
  brand: { name: 'CPI Lab', mark: 'CPI', showMark: true },
  person: {
    // Shown in the footer ("© year …").
    name: 'Cyber Physical Intelligence Lab',
    honorific: '',
    position: 'Lab directed by Dr. Tahsina Farah Sanam',
    affiliation: 'Institute of Appropriate Technology, BUET',
    photo: img('gallary-03.jpg'),
    citeAs: '',
  },
  contact: {
    email: EMAIL,
    phone: '',
    address: 'Room 213, Excellence Building (behind M.A. Rashid Hall)\nWest Palashi, Bangladesh University of Engineering and Technology\nDhaka 1000, Bangladesh',
    office: 'Room 213, Excellence Building',
    hours: '',
    mapUrl: 'https://www.google.com/maps?q=Excellence+Building,+BUET,+Dhaka&output=embed',
  },
  socials: [
    { label: 'Lab Director', url: DIRECTOR_SITE, icon: 'User' },
    { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=GHwoCWQAAAAJ&hl=en', icon: 'GraduationCap' },
    { label: 'IAT, BUET', url: 'https://iat.buet.ac.bd/', icon: 'Landmark' },
    { label: 'Email', url: `mailto:${EMAIL}`, icon: 'Mail' },
  ],
  theme: {
    preset: 'ocean',
    custom: null,
    fonts: { heading: 'Space Grotesk', body: 'Instrument Sans' },
    radius: 12,
    baseSize: 17,
    container: 1200,
  },
  nav: {
    maxVisible: 9,
    sticky: true,
    align: 'right',
    theme: 'page',
    bgColor: '',
    textColor: '',
    opacity: 88,
    blur: 14,
    topTransparent: false,
    tabStyle: 'underline',
    showIcons: false,
    textSize: 'sm',
    height: 64,
    divider: 'scroll',
    markShape: 'rounded',
  },
  footer: {
    line: 'Institute of Appropriate Technology, Bangladesh University of Engineering and Technology (BUET), Dhaka',
    showSocials: true,
    note: '',
  },
  drawer: { side: 'right', width: 70, itemClick: 'drawer' },
  effects: { cursor: true, cursorStyle: 'ring', scroll: 'rise' },
};

/* ------------------------------------------------------------------ */
/* Content types                                                       */
/* ------------------------------------------------------------------ */

const schema = {
  collections: {
    members: {
      label: 'People',
      singular: 'Person',
      icon: 'Users',
      defaultSort: { field: 'order', dir: 'asc' },
      fields: [
        { key: 'name', label: 'Name', type: 'text', role: 'title' },
        { key: 'position', label: 'Position / programme', type: 'text', role: 'subtitle' },
        {
          key: 'category',
          label: 'Group',
          type: 'select',
          role: 'group',
          options: ['Lab Director', 'Research Assistant', 'Graduate Student', 'Undergraduate Student', 'Visiting Researcher', 'Alumni'],
        },
        { key: 'background', label: 'Background', type: 'text', role: 'meta' },
        { key: 'photo', label: 'Photo', type: 'image', role: 'image' },
        { key: 'bio', label: 'Bio', type: 'markdown', role: 'body' },
        { key: 'interests', label: 'Research interests', type: 'tags', role: 'tags' },
        { key: 'period', label: 'Years in the lab', type: 'text', role: 'detail' },
        { key: 'nowAt', label: 'Now at (alumni)', type: 'text', role: 'detail' },
        { key: 'email', label: 'Email', type: 'text', role: 'detail' },
        { key: 'link', label: 'Profile link', type: 'url', role: 'link' },
      ],
    },
    projects: {
      label: 'Research projects',
      singular: 'Project',
      icon: 'Radar',
      defaultSort: { field: 'order', dir: 'asc' },
      fields: [
        { key: 'title', label: 'Title', type: 'text', role: 'title' },
        { key: 'summary', label: 'Summary', type: 'textarea', role: 'subtitle' },
        { key: 'status', label: 'Status', type: 'select', role: 'badge', options: ['Active', 'Completed'] },
        { key: 'body', label: 'Details', type: 'markdown', role: 'body' },
        { key: 'image', label: 'Image', type: 'image', role: 'image' },
        { key: 'tags', label: 'Topics', type: 'tags', role: 'tags' },
        { key: 'funding', label: 'Funding', type: 'text', role: 'detail' },
        { key: 'team', label: 'Team', type: 'text', role: 'detail' },
        { key: 'link', label: 'Link', type: 'url', role: 'link' },
      ],
    },
    publications: {
      label: 'Publications',
      singular: 'Publication',
      icon: 'BookOpen',
      citation: true,
      defaultSort: { field: 'year', dir: 'desc' },
      fields: [
        { key: 'title', label: 'Title', type: 'text', role: 'title' },
        { key: 'authors', label: 'Authors', type: 'text', role: 'meta' },
        { key: 'venue', label: 'Journal / conference', type: 'text', role: 'subtitle' },
        { key: 'details', label: 'Volume, pages, place', type: 'text', role: 'meta' },
        { key: 'year', label: 'Year', type: 'number', role: 'date' },
        { key: 'type', label: 'Type', type: 'select', role: 'group', options: ['Journal', 'Conference', 'Book chapter', 'Thesis', 'Preprint'] },
        { key: 'note', label: 'Badge (e.g. Q1)', type: 'text', role: 'badge' },
        { key: 'doi', label: 'DOI', type: 'text', role: 'detail' },
        { key: 'link', label: 'Link', type: 'url', role: 'link' },
        { key: 'pdf', label: 'PDF', type: 'url', role: 'link' },
        { key: 'abstract', label: 'Abstract', type: 'markdown', role: 'body' },
        { key: 'tags', label: 'Topics', type: 'tags', role: 'tags' },
      ],
    },
    news: {
      label: 'News',
      singular: 'News item',
      icon: 'Newspaper',
      defaultSort: { field: 'order', dir: 'asc' },
      fields: [
        { key: 'title', label: 'Headline', type: 'text', role: 'title' },
        { key: 'date', label: 'Date', type: 'text', role: 'date' },
        { key: 'category', label: 'Category', type: 'select', role: 'badge', options: ['Fellowship', 'Award', 'Paper', 'Grant', 'Event', 'Talk'] },
        { key: 'body', label: 'Details', type: 'markdown', role: 'body' },
        { key: 'image', label: 'Image', type: 'image', role: 'image' },
        { key: 'link', label: 'Link', type: 'url', role: 'link' },
      ],
    },
    grants: {
      label: 'Grants',
      singular: 'Grant',
      icon: 'Landmark',
      defaultSort: { field: 'order', dir: 'asc' },
      fields: [
        { key: 'title', label: 'Project / topic', type: 'text', role: 'title' },
        { key: 'funder', label: 'Funder', type: 'text', role: 'subtitle' },
        { key: 'year', label: 'Year', type: 'text', role: 'date' },
        { key: 'amount', label: 'Amount', type: 'text', role: 'badge' },
        { key: 'description', label: 'Description', type: 'markdown', role: 'body' },
      ],
    },
    equipment: {
      label: 'Facilities',
      singular: 'Equipment',
      icon: 'Cpu',
      defaultSort: { field: 'order', dir: 'asc' },
      fields: [
        { key: 'name', label: 'Name', type: 'text', role: 'title' },
        { key: 'category', label: 'Category', type: 'select', role: 'group', options: ['Smart communications', 'Sensing platforms', 'Computing', 'Other'] },
        { key: 'summary', label: 'Summary', type: 'textarea', role: 'subtitle' },
        { key: 'image', label: 'Photo', type: 'image', role: 'image' },
        { key: 'description', label: 'Details', type: 'markdown', role: 'body' },
        { key: 'link', label: 'Product / datasheet', type: 'url', role: 'link' },
      ],
    },
    gallery: {
      label: 'Gallery',
      singular: 'Photo',
      icon: 'Images',
      defaultSort: { field: 'order', dir: 'asc' },
      fields: [
        { key: 'image', label: 'Image', type: 'image', role: 'image' },
        { key: 'caption', label: 'Caption', type: 'text', role: 'title' },
        { key: 'year', label: 'Year', type: 'text', role: 'date' },
        { key: 'description', label: 'Description', type: 'markdown', role: 'body' },
      ],
    },
    openings: {
      label: 'Open positions',
      singular: 'Position',
      icon: 'Briefcase',
      defaultSort: { field: 'order', dir: 'asc' },
      fields: [
        { key: 'title', label: 'Position', type: 'text', role: 'title' },
        { key: 'summary', label: 'Summary', type: 'text', role: 'subtitle' },
        { key: 'status', label: 'Status', type: 'select', role: 'badge', options: ['Open', 'Closed'] },
        { key: 'deadline', label: 'Deadline', type: 'text', role: 'date' },
        { key: 'body', label: 'Details', type: 'markdown', role: 'body' },
        { key: 'link', label: 'Apply link', type: 'url', role: 'link' },
      ],
    },
  },
};

/* ------------------------------------------------------------------ */
/* Items                                                               */
/* ------------------------------------------------------------------ */

const items = [];
const add = (collection, prefix, list) =>
  list.forEach((data, i) =>
    items.push({ id: `${prefix}-${String(i + 1).padStart(2, '0')}`, collection, order: (i + 1) * 10, hidden: false, ...data })
  );

const pub = (type, authors, title, venue, year, extra = {}) => ({
  type,
  authors,
  title,
  venue,
  year,
  doi: extra.doi || '',
  link: extra.link || doiLink(extra.doi),
  details: extra.details || '',
  note: extra.note || '',
  tags: extra.tags || [],
  abstract: '',
  pdf: '',
  ...(extra.review ? { review: extra.review } : {}),
});

/* People -------------------------------------------------------------- */

add('members', 'mem', [
  {
    name: 'Dr. Tahsina Farah Sanam',
    position: 'Professor, Institute of Appropriate Technology, BUET',
    category: 'Lab Director',
    background: 'Ph.D. ECE, Rutgers University · M.Sc. EEE, BUET',
    photo: img('people-01.jpg'),
    bio: 'Dr. Tahsina Farah Sanam is a Professor in the Institute of Appropriate Technology at Bangladesh University of Engineering and Technology. Her principal research interests lie in the development of machine learning and statistical methodology, and computational systems, especially for solving problems involving automated learning, reasoning and decision-making in high-dimensional, multimodal and dynamic possible worlds in artificial, healthcare and social systems.\n\nProfessor Sanam received a Ph.D. in Electrical and Computer Engineering from Rutgers University, and an M.Sc. in Electrical and Electronic Engineering from Bangladesh University of Engineering and Technology. She serves as a guest editor of Frontiers in AI on the special topic Fuzzy System Applications in Robotics and Automation. She is a member of IEEE, the Society of Women Engineers (SWE-USA) and ACM.',
    interests: ['Machine learning', 'Statistical methods', 'Cyber-physical systems', 'Healthcare AI'],
    email: EMAIL,
    link: DIRECTOR_SITE,
  },
  // Graduate students as listed on the old People page.
  {
    name: 'Irin Laila Parvin',
    position: 'M.Sc. student, Management of Technology, IAT, BUET',
    category: 'Graduate Student',
    background: 'B.Sc. in Electronics and Communication Engineering, Khulna University',
    photo: img('people-05.jpg'),
    bio: 'Irin Laila Parvin is pursuing her M.Sc. in Management of Technology at the Institute of Appropriate Technology (IAT), BUET. She received her B.Sc. from Khulna University in Electronics and Communication Engineering (ECE). Her previous research was “De-noising ECG Signal Based on Wavelet Packet Transform and Comparison with Other Techniques”, and she was an active member of ROUTER, the science, technology and engineering club of the ECE discipline, Khulna University. She focuses on smart buildings and smart city management using IR 4.0 technologies, aiming to contribute to energy-consumption management through the smart-building concept in Bangladesh.',
    interests: ['Smart buildings', 'Smart cities', 'Energy management', 'IR 4.0'],
    review: 'Listed as a current graduate student on the old site (2022–23 text). Check whether she is still in the lab or has graduated.',
  },
  {
    name: 'Momtahin',
    position: 'M.Sc. student, Management of Technology, IAT, BUET',
    category: 'Graduate Student',
    background: 'B.Sc. in Computer Science and Engineering, University of Chittagong',
    bio: 'Momtahin is pursuing her M.Sc. in Management of Technology at the Institute of Appropriate Technology (IAT), BUET. She completed her B.Sc. in Computer Science and Engineering at the University of Chittagong. A technology-management enthusiast, she studies technology transfer, forecasting and diffusion, technology policy, risk management and technology adoption in the IR 4.0 era. Her current focus is managing big data over the Internet of Things and evaluating blockchain for securing electronic medical records, towards smart primary healthcare in Bangladesh.',
    interests: ['IoT', 'Big data', 'Blockchain', 'Healthcare technology'],
    review: 'Listed as a current graduate student on the old site. Check status; photo could not be copied from the old site (upload one).',
  },
  {
    name: 'Sadik Ahmed',
    position: 'M.Sc. student, Management of Technology, IAT, BUET',
    category: 'Graduate Student',
    background: 'B.Sc. in Electrical and Electronic Engineering, AUST',
    bio: 'Sadik Ahmed is pursuing an M.Sc. in Management of Technology at the Institute of Appropriate Technology (IAT), BUET. He received his B.Sc. in Electrical and Electronic Engineering from Ahsanullah University of Science and Technology (AUST). His research interests are artificial intelligence, blockchain, big-data analytics and the Internet of Things, and their applications in e-waste management, policy and control. He aims to reduce the toxic effects of e-waste in smart cities through modern technology practices, simulation models, and feasibility and risk analysis.',
    interests: ['E-waste management', 'AI', 'Blockchain', 'IoT'],
    review: 'Listed as a current graduate student; he received the BUET fellowship in 2022 and published at ICCIT 2024, so he may have graduated. Photo could not be copied.',
  },
  {
    name: 'Brazab Nayek',
    position: 'M.Sc. student, Management of Technology, IAT, BUET',
    category: 'Graduate Student',
    background: 'B.Sc. in Computer Science and Engineering, MIST',
    photo: img('people-08.jpg'),
    bio: 'Brazab Nayek is pursuing an M.Sc. in Management of Technology at the Institute of Appropriate Technology (IAT), BUET. He received his B.Sc. in Computer Science and Engineering from the Military Institute of Science and Technology (MIST). His research interests include cyber security, machine learning, artificial intelligence, data science, image processing and healthcare. He was the main trainer of the Arduino Programming, Microcontroller and Robotics course (2015) at the MIST Robotics Club and is an associate member of the Bangladesh Computer Society. He won the Best Project Award (2nd position) at ICEEICT 2015, was 2nd runner-up in the Power & Energy Hackathon 2017 organised by the Ministry of Power, Energy & Mineral Resources, placed 6th in the Hult Prize competition, and took part in the Mathematical Olympiad, ICT Hackathon and IHTPC 2017.',
    interests: ['Cyber security', 'Machine learning', 'Image processing', 'Healthcare'],
    review: 'Name is spelled “Nayek” in the heading and “Nayak” in the old bio. Confirm the spelling and current status.',
  },
  // Undergraduate students (names only on the old site)
  { name: 'Ishtiaque Ahmed Showmik', position: 'Undergraduate student, EEE', category: 'Undergraduate Student', review: 'Spelled “Soumik” on the old People page and “Showmik” in his publications. Confirm, and whether he is still an undergraduate.' },
  { name: 'Joy Saha', position: 'Undergraduate student, EEE', category: 'Undergraduate Student' },
  { name: 'Mahfuzur Rahman', position: 'Undergraduate student, EEE', category: 'Undergraduate Student' },
  { name: 'Fuad Alhasan', position: 'Undergraduate student, EEE', category: 'Undergraduate Student' },
  { name: 'Kowshik Shahriar Khan', position: 'Undergraduate student, EEE', category: 'Undergraduate Student' },
  { name: 'Arif Rahman', position: 'Undergraduate student, EEE', category: 'Undergraduate Student' },
  // Alumni (shown as "Graduated, M.Sc." on the old site)
  {
    name: 'Saima Alam Suha',
    position: 'M.Sc., Management of Technology, IAT, BUET',
    category: 'Alumni',
    background: 'B.Sc. in Computer Science and Engineering, MIST',
    bio: 'Saima Alam Suha completed her M.Sc. in Management of Technology at the Institute of Appropriate Technology (IAT), BUET, as a recipient of the BUET Postgraduate Fellowship. She received her B.Sc. from the Department of Computer Science and Engineering, Military Institute of Science and Technology (MIST), and was awarded the MIST Medal 2017 for first position in the department. She was formerly a Lecturer in CSE at MIST. Her research interests include health informatics, machine learning, artificial intelligence, data science, image processing, big-data analytics and human–computer interaction. She is a student member of IEEE.',
    interests: ['Health informatics', 'Machine learning', 'HCI'],
    review: 'Spelled “Saima” in the heading and gallery but “Sayma” in the old bio. Photo could not be copied; add “Now at”.',
  },
  {
    name: 'Ishrat Jahan',
    position: 'M.Sc., Management of Technology, IAT, BUET',
    category: 'Alumni',
    background: 'B.Sc. in Electrical, Electronic and Communication Engineering, MIST',
    photo: img('people-03.jpg'),
    bio: 'Ishrat Jahan completed her M.Sc. in Management of Technology at the Institute of Appropriate Technology (IAT), BUET. She received her B.Sc. from the Department of Electrical, Electronic and Communication Engineering (EECE), MIST, where she was on the Commandant’s list for three years for a CGPA above 3.8 out of 4. Her research interests include e-commerce informatics, machine learning, artificial intelligence, data science, image processing and big-data analytics. She is a student member of IEEE.',
    interests: ['E-commerce', 'Machine learning', 'Data science'],
  },
  {
    name: 'Debashis Kar Suvra',
    position: 'M.Sc., Management of Technology, IAT, BUET',
    category: 'Alumni',
    background: 'B.Sc. in Computer Science and Engineering, BRAC University',
    bio: 'Debashis Kar Suvra completed his M.Sc. in Management of Technology at the Institute of Appropriate Technology (IAT), BUET. He completed his B.Sc. in CSE at BRAC University and works as a Software Engineer at Hivecore Limited. His research interests lie in machine learning, deep learning and AI applications for traffic management systems.',
    interests: ['Deep learning', 'Traffic management', 'Computer vision'],
    nowAt: 'Software Engineer, Hivecore Limited',
    review: 'Photo could not be copied from the old site; please upload one. Check “Now at”.',
  },
  // Mentioned in news / publications or on Dr. Sanam's personal site, but not on the lab's People page
  {
    name: 'Sadia Akter',
    position: 'M.Sc. student, Management of Technology, IAT, BUET',
    category: 'Research Assistant',
    background: 'B.Sc. in Computer Science and Engineering, East West University',
    bio: 'BUET Postgraduate Fellow (2023). Works on optimising Wi-Fi signal strength through CSI analysis and on blockchain for secure healthcare data; honourable mention in the 2023 IEEE WIE Climate Tech Big Idea Pitch Competition.',
    interests: ['Wi-Fi CSI', 'Blockchain', 'Security'],
    hidden: true,
    review: 'Not on the old People page; taken from the lab news, a 2025 paper and Dr. Sanam’s personal site. Confirm her role, then show.',
  },
  {
    name: 'A.K.M. Samiul Islam',
    position: 'M.Sc. student, BUET',
    category: 'Graduate Student',
    hidden: true,
    review: 'Only mentioned in the news (BUET fellowship, Nov 2024). The personal site spells it “A.S.M. Samiul Islam”. Confirm the name, programme and role.',
  },
  {
    name: 'Mahmudul Mohtasim',
    position: 'Research Assistant · M.Sc. in ICT, IICT, BUET',
    category: 'Research Assistant',
    background: 'B.Sc. in EEE, BUET',
    bio: 'Works on AI tools that improve diagnosis and accessibility for children with autism spectrum disorder.',
    interests: ['Autism', 'Wi-Fi CSI', 'Deep learning'],
    hidden: true,
    review: 'Listed as a research assistant on Dr. Sanam’s personal site, not on the lab site. Confirm he is part of the CPI Lab.',
  },
  {
    name: 'Ahsanul Islam',
    position: 'Research Assistant · M.Sc. in EEE, BUET',
    category: 'Research Assistant',
    background: 'B.Sc. in EEE, KUET',
    bio: 'Interested in machine learning, deep learning, signal processing and computer vision; regional winner of the National Undergraduate Math Olympiad (2018).',
    interests: ['Deep learning', 'Signal processing', 'Computer vision'],
    hidden: true,
    review: 'Listed as a research assistant on Dr. Sanam’s personal site, not on the lab site. Confirm he is part of the CPI Lab.',
  },
  {
    name: 'N. Pervin',
    position: '',
    category: 'Graduate Student',
    hidden: true,
    review: 'First author of a 2024 paper with the lab, not on the People page. Full name, role and status unknown.',
  },
]);

/* Research projects --------------------------------------------------- */

add('projects', 'prj', [
  {
    title: 'AI-based Healthcare Decision Support System',
    summary: 'Intelligent decision support for diagnosis, treatment and hospital resource management where healthcare resources are scarce.',
    status: 'Active',
    image: img('research-01.png'),
    tags: ['Healthcare', 'Decision support', 'Machine learning'],
    body: 'A Healthcare Decision Support System assists healthcare practitioners by systematically analysing vital health information and making meaningful decisions for quality patient care. Clinical and non-clinical healthcare decisions are made in various ways, the most critical areas being disease diagnosis (clinical), treatment management (clinical) and resource management (non-clinical). Decision-making in these areas is complicated because of their sensitivity and diversity, yet it matters greatly to every stakeholder: physicians must diagnose and make rapid treatment decisions, while hospitals must provide appropriate treatment with limited resources.\n\nSuch systems become even more significant in least developed and developing countries, where healthcare resources are limited and management is mostly manual. There, an **Intelligent Healthcare Decision Support System (IHDSS)** can apply computational intelligence to relevant health data to support decisions across a range of healthcare concerns.',
  },
  {
    title: 'AI-driven Cognitive Computing in E-Commerce',
    summary: 'An AI-driven, integrated framework for e-commerce management: customer behaviour, churn and retention.',
    status: 'Active',
    image: img('research-02.png'),
    tags: ['E-commerce', 'Cognitive computing', 'Churn prediction'],
    body: 'Cognitive computing is a set of contextual, interactive and adaptive systems that add a human touch to user experiences online. In e-commerce it is more instinctive and therefore more successful at collecting rich personal data, and it empowers consumers to rediscover their own preferences.\n\nE-commerce has become an important part of business strategy in the global economy thanks to 24/7 availability, rapid access, wide selection and international reach. Managing it needs artificial autonomous systems that can solve cognitive problems associated with human intelligence: handling customer data, forecasting customer behaviour and processing large volumes of data. AI and machine learning offer benefits in every part of an e-commerce operation, especially in predicting customer churn and retention. This project develops an **AI-driven integrated framework for e-commerce management** using state-of-the-art cognitive computing techniques.',
  },
  {
    title: 'Smart Toll System',
    summary: 'Bangladesh’s first computer-vision and cloud-microservice toll collection: vehicles are recognised and charged without stopping.',
    status: 'Active',
    tags: ['Computer vision', 'Smart traffic', 'Cloud microservices'],
    body: 'Manual toll collection at bridges in Bangladesh causes traffic congestion, resource-intensive operations and errors. This project presents a framework that uses **computer vision and cloud-based microservices** to automate toll collection, the first such implementation in Bangladesh.\n\nThe system uses the **YOLO tiny v4** model for efficient, precise vehicle detection from about one metre away, so vehicles do not need to stop at the gate. A separate **optical character recognition (OCR)** engine processes the best captured licence-plate image (by confidence score) to recognise Bengali characters accurately. Vehicles are categorised from Bangladesh Road Transport Authority (BRTA)-approved licence plates, tolls are collected through an integrated payment server, and a successful payment opens the gate automatically. The system reaches **91% accuracy** in licence-plate recognition against ground truth.',
    review: 'The project image could not be copied from the old site; please upload it.',
  },
  {
    title: 'Activity Recognition Using Ubiquitous Data Streams',
    summary: 'Recognising human activity from the Wi-Fi signals already around us, for smart homes, monitoring and assisted living.',
    status: 'Active',
    image: img('research-04.jpg'),
    tags: ['Wi-Fi sensing', 'Activity recognition', 'Deep learning'],
    body: 'Human activity recognition (HAR) is increasingly popular because of its many applications in smart homes, monitoring and surveillance. HAR gives valuable insight into a person’s physical functioning and behaviour, which can be monitored automatically to provide individual assistance.\n\nWith advances in Wi-Fi technology, people are surrounded by devices that can both sense and communicate. This makes activity recognition from **Wi-Fi channel state information (CSI)** significantly more practical than image/video-based or wearable-sensor approaches, and it preserves privacy.',
  },
]);

/* Publications (lab list) --------------------------------------------- */

add('publications', 'pub', [
  pub('Journal', 'I. Jahan and T. F. Sanam', 'A Comprehensive Framework for Customer Retention in E-commerce Using Machine Learning Based on Churn Prediction, Customer Segmentation, and Recommendation', 'Electronic Commerce Research', 2024, { details: 'December 2024', note: 'Q1', tags: ['E-commerce', 'Churn prediction'], review: 'The old site says “Elsevier Electronic Commerce Research”. Electronic Commerce Research is a Springer journal, while Elsevier publishes Electronic Commerce Research and Applications. Confirm the journal and add the DOI.' }),
  pub('Journal', 'N. Pervin, T. F. Sanam and H. Imtiaz', 'Privacy-Preserving Human Activity Recognition Using Principal Component-Based Wavelet CNN', 'Signal, Image and Video Processing (Springer)', 2024, { details: 'August 2024', note: 'Q2', tags: ['Activity recognition', 'Privacy'], review: 'The old site gives “IF: 200”, clearly a typo, so the impact factor is left out. Add the DOI.' }),
  pub('Journal', 'I. A. Showmik, T. F. Sanam and H. Imtiaz', 'Human Activity Recognition from Wi-Fi CSI Data Using Principal Component-Based Wavelet CNN', 'Digital Signal Processing (Elsevier)', 2023, { details: 'Vol. 138, 104056', doi: '10.1016/j.dsp.2023.104056', tags: ['Wi-Fi CSI', 'Activity recognition'] }),
  pub('Journal', 'S. A. Suha and T. F. Sanam', 'Exploring Dominant Factors for Ensuring the Sustainability of Utilizing Artificial Intelligence in Healthcare Decision Making: An Emerging Country Context', 'International Journal of Information Management Data Insights (Elsevier)', 2023, { tags: ['Healthcare AI'] }),
  pub('Journal', 'S. A. Suha, M. Akhtaruzzaman and T. F. Sanam', 'A Fuzzy Model to Predict Intravenous Fluid Resuscitation Rate for Burn Patients', 'Healthcare Analytics (Elsevier)', 2022, { details: '100070', doi: '10.1016/j.health.2022.100070', tags: ['Healthcare', 'Fuzzy systems'] }),
  pub('Journal', 'S. A. Suha and T. F. Sanam', 'A Deep Convolutional Neural Network-Based Approach for Detecting Burn Severity from Skin Burn Images', 'Machine Learning with Applications (Elsevier)', 2022, { tags: ['Healthcare', 'Deep learning'] }),
  pub('Conference', 'S. Akter and T. F. Sanam', 'A Blockchain Framework for Secure Healthcare Data Management Using Role-Based Access Control and Smart Contracts', 'International Conference on Electrical, Computer and Communication Engineering (ECCE)', 2025, { details: 'Chittagong, Bangladesh, pp. 1–6', doi: '10.1109/ECCE64574.2025.11013162', tags: ['Blockchain', 'Healthcare'] }),
  pub('Conference', 'S. Ahmed and T. F. Sanam', 'An End-to-End E-waste Collection and Sorting System for Optimized Flow Regulation – from End-of-Life to Processing', '27th International Conference on Computer and Information Technology (ICCIT)', 2024, { details: 'Cox’s Bazar, Bangladesh, pp. 2369–2374', doi: '10.1109/ICCIT64611.2024.11022354', tags: ['E-waste'] }),
  pub('Conference', 'D. K. Suvra and T. F. Sanam', 'A Cloud-Based Hybrid Model for Real-Time Detection of BRTA-Approved Licence Plates Using YOLO Tiny and Haar Cascade', '27th International Conference on Computer and Information Technology (ICCIT)', 2024, { details: 'Cox’s Bazar, Bangladesh, pp. 2488–2493', doi: '10.1109/ICCIT64611.2024.11022598', tags: ['Smart toll', 'Computer vision'] }),
  pub('Conference', 'F. Sadik, I. A. Showmik, B. I. Morshed and T. F. Sanam', 'A Novel Geometric Visualization of Dual-lead ECG Signals for Beat-by-beat Arrhythmia Detection with a 2D CNN Deep Learning Classifier', '26th International Conference on Computer and Information Technology (ICCIT)', 2023, { details: 'pp. 1–6', doi: '10.1109/ICCIT60459.2023.10441002', tags: ['ECG', 'Deep learning'] }),
  pub('Conference', 'I. A. Showmik, F. Sadik, B. I. Morshed and T. F. Sanam', 'Beat-wise Classification of Arrhythmia Using Novel Combination of ECG Signal-Specific and Signal-Independent Features with ML Algorithm', '26th International Conference on Computer and Information Technology (ICCIT)', 2023, { details: 'pp. 1–6', doi: '10.1109/ICCIT60459.2023.10441167', tags: ['ECG', 'Machine learning'] }),
  pub('Conference', 'M. I. Masroor, K. S. Sakib, M. Hasan, M. A. Al Arman, P. Dey and T. F. Sanam', 'Ensemble Based Machine Learning Approach for Predicting Customer Churn in E-Commerce', '26th International Conference on Computer and Information Technology (ICCIT)', 2023, { details: 'pp. 1–6', doi: '10.1109/ICCIT60459.2023.10441468', tags: ['E-commerce', 'Churn prediction'] }),
  pub('Conference', 'I. A. Showmik, T. F. Sanam and H. Imtiaz', 'DCT-Based Feature Extraction for Human Activity Recognition Using WiFi Channel State Information Data', 'IEEE Region 10 Conference (TENCON)', 2023, { details: 'Thailand, pp. 1129–1133', doi: '10.1109/TENCON58879.2023.10322339', tags: ['Wi-Fi CSI', 'Activity recognition'] }),
  pub('Conference', 'M. A. Rahman, A. M. Fuad and T. F. Sanam', 'A Convolutional Neural Network Based Device-Free Indoor Localization Using CSI', 'IEEE Region 10 Humanitarian Technology Conference (R10-HTC)', 2023, { details: 'India', doi: '10.1109/R10-HTC57504.2023.10461886', tags: ['Wi-Fi CSI', 'Localization'] }),
  pub('Conference', 'T. S. Sheila, N. J. Nishat, A. H. Tanjila, J. Nuri, T. F. Sanam and S. A. Suha', 'Predicting Hospital Readmission for Diabetic Patients within 30 Days Using Machine Learning: A Breakthrough in Personalized Healthcare', 'IEEE Region 10 Humanitarian Technology Conference (R10-HTC)', 2023, { details: 'India', doi: '10.1109/R10-HTC57504.2023.10461808', tags: ['Healthcare', 'Machine learning'] }),
  pub('Conference', 'I. Jahan and T. F. Sanam', 'An Improved Machine Learning Based Customer Churn Prediction for Insight and Recommendation in E-commerce', 'International Conference on Computer and Information Technology (ICCIT)', 2022, { details: 'Cox’s Bazar, Bangladesh', doi: '10.1109/ICCIT57492.2022.10054771', tags: ['E-commerce', 'Churn prediction'] }),
  pub('Conference', 'S. A. Suha and T. F. Sanam', 'Predicting Burn Injury Intensity from Skin Burn Images with Hybrid Machine Learning Techniques', '12th International Conference on Electrical and Computer Engineering (ICECE)', 2022, { details: 'BUET, Dhaka', doi: '10.1109/ICECE57408.2022.10088521', tags: ['Healthcare', 'Machine learning'] }),
  pub('Conference', 'S. A. Suha and T. F. Sanam', 'A Machine Learning Approach for Predicting Patient’s Length of Hospital Stay with Random Forest Regression', 'IEEE Region 10 Symposium (TENSYMP)', 2022, { details: 'Mumbai, India', doi: '10.1109/TENSYMP54529.2022.9864447', tags: ['Healthcare', 'Machine learning'] }),
  pub('Conference', 'S. A. Suha and T. F. Sanam', 'Challenges and Prospects of Adopting Industry 4.0 and Assessing the Role of Intelligent Robotics', 'IEEE World Conference on Applied Intelligence and Computing (AIC)', 2022, { details: 'Sonbhadra, India', doi: '10.1109/AIC55036.2022.9848946', tags: ['Industry 4.0'] }),
  pub('Conference', 'S. A. Suha, T. F. Sanam and M. I. Jahan', 'National Policies & their Significance in Bangladesh for the Adoption of Industry 4.0', 'IEEE World Conference on Applied Intelligence and Computing (AIC)', 2022, { details: 'Sonbhadra, India', doi: '10.1109/AIC55036.2022.9848848', tags: ['Industry 4.0', 'Policy'] }),
]);

/* News and grants ------------------------------------------------------ */

add('news', 'nws', [
  { title: 'A.K.M. Samiul Islam received the BUET Post-Graduate Fellowship for his M.Sc. thesis', date: 'Nov 2024', category: 'Fellowship', hidden: true, review: 'The old site says “her” thesis, and the personal site spells the name “A.S.M.”. Confirm the name and pronoun, then show.' },
  { title: 'Sadia Akter received the BUET Post-Graduate Fellowship for her M.Sc. thesis', date: 'Nov 2023', category: 'Fellowship' },
  { title: 'Sadik Ahmed received the BUET Post-Graduate Fellowship for his M.Sc. thesis', date: 'Nov 2022', category: 'Fellowship', review: 'The old site says “her” thesis; changed to “his”. Confirm.' },
  { title: 'Saima Alam Suha received the BUET Post-Graduate Fellowship for her M.Sc. thesis', date: 'Mar 2022', category: 'Fellowship' },
]);

add('grants', 'grt', [
  { title: 'Plastic waste management', funder: 'Ministry of Science and Technology, Bangladesh (Special Research Grant)', year: '2023' },
  { title: 'AI-based healthcare system', funder: 'ICT Ministry, Bangladesh (Innovation Grant)', year: '2023' },
  { title: 'Smart home / office', funder: 'Ministry of Science and Technology, Bangladesh (R&D grant)', year: '', review: 'Year not given on the old site.' },
  { title: 'Smart healthcare', funder: 'University Grants Commission (UGC) Research Grant', year: '2022–2023' },
  { title: 'Basic research', funder: 'BUET Basic Research Grant', year: '2021', amount: 'BDT 100,000' },
]);

/* Facilities ------------------------------------------------------------ */

add('equipment', 'eqp', [
  {
    name: 'USRP Software Defined Radio B210',
    category: 'Smart communications',
    summary: 'Software-defined radio for building and testing new wireless communication protocols.',
    image: img('testbeds-01.jpg'),
    description: 'The USRP is the most commonly used software-defined radio for deploying new wireless communication protocols. Our B210 kit contains the motherboard (protocol and control), daughter boards (signal processing) and dual antennas.',
    link: 'https://www.ettus.com/all-products/ub210-kit/',
  },
  {
    name: 'Intel WiFi Link 5300 network interface cards',
    category: 'Smart communications',
    summary: 'IEEE 802.11a/b/g/n adapters used to capture Wi-Fi channel state information (CSI) for sensing.',
    image: img('testbeds-02.jpg'),
    description: 'Intel WiFi Link 5300 adapters operate in both the 2.4 GHz and 5.0 GHz bands and deliver up to 450 Mbps through MIMO, 40 MHz channels and packet aggregation. They are the standard hardware for extracting Wi-Fi CSI, which the lab uses for device-free activity recognition and localization.',
  },
  {
    name: 'Wireless sensing platforms',
    category: 'Sensing platforms',
    summary: 'CrossBow TelosB, MicaZ and Intel Imote motes, CH4 sensors and soil sensors.',
    image: img('testbeds-03.jpg'),
    description: 'Sensing platforms including [CrossBow TelosB motes](http://www.willow.co.uk/TelosB_Datasheet.pdf), [MicaZ motes](http://www.memsic.com/userfiles/files/Datasheets/WSN/micaz_datasheet-t.pdf), [Intel Imotes](http://wsn.cse.wustl.edu/images/e/e3/Imote2_Datasheet.pdf), CH4 sensors, soil sensors and more.',
    review: 'Some datasheet links from the old site may no longer work; check them.',
  },
  {
    name: 'Sensor network testbed',
    category: 'Sensing platforms',
    summary: 'Deployed motes and environmental sensors.',
    image: img('testbeds-04.jpg'),
    description: '',
    hidden: true,
    review: 'The old site shows this photo without a description. Add a name and description, then show.',
  },
]);

/* Gallery --------------------------------------------------------------- */

add('gallery', 'gal', [
  { caption: 'Inauguration of the CPI Lab with the research team', image: img('gallary-03.jpg'), description: '“Inauguration of my dream, my research lab ‘CPI Lab’, with my students.” – Dr. Tahsina Farah Sanam' },
  { caption: 'Dr. Sanam with thesis graduate Saima Alam Suha', image: img('gallary-01.jpg'), description: '“My thesis graduate Saima Alam Suha, with whom I had one of my best research journeys.”' },
  { caption: 'Team lunch with the lab’s research students', image: img('gallary-02.jpg') },
  { caption: 'Industry visit to Inovace Technologies', image: img('gallary-05.jpg') },
  { caption: 'Industry visit to Inovace Technologies', hidden: true, review: 'Second photo of this visit could not be copied from the old site; upload it, then show.' },
  { caption: 'With part of the CPI Lab research team, IAT, BUET', hidden: true, review: 'Photo could not be copied from the old site; upload it, then show.' },
  { caption: 'Team luncheon with the CPI Lab research team', hidden: true, review: 'Photo could not be copied from the old site; upload it, then show.' },
]);

/* Open positions ---------------------------------------------------------- */

add('openings', 'opn', [
  {
    title: 'Research Assistant (1 position)',
    summary: 'Signal processing and machine learning · BDT 26,000 / month · 1 year',
    status: 'Open',
    deadline: '',
    hidden: true,
    review: 'From the old Home page. It is not clear whether this position is still open; check before showing it.',
    body: `**Principal Investigator:** Dr. Tahsina Farah Sanam, Professor, Institute of Appropriate Technology (IAT), BUET

**Who can apply**
1. Current full-time master’s students of EEE, BME, CSE, IAT or IICT at BUET, with a bachelor’s degree in EEE, BME or CSE (preferably from BUET).
2. Strong knowledge of signal processing, machine learning and deep learning, and strong programming skills in Python and MATLAB.
3. Applicants with a strong track record of research publications will be given preference.

**Compensation:** BDT 26,000 per month
**Duration:** 1 year, on contract (signed on BDT 300 non-judicial stamp paper)

**How to apply:** email your CV to [${EMAIL}](mailto:${EMAIL}).`,
  },
]);

/* ------------------------------------------------------------------ */
/* Pages (tabs) and their sections                                     */
/* ------------------------------------------------------------------ */

const MISSION =
  'The Cyber Physical Intelligence (CPI) Laboratory’s overarching mission is to propose novel sensing paradigms that transform raw, heterogeneous sensor data into valuable information, by giving semantic meaning to the collected data, and finally into knowledge through information fusion and integration.\n\nThese paradigms apply to distributed systems that must react to sensor information in time with an effective action, such as **cyber-physical systems**, which tightly combine and coordinate computational and physical elements. The acquired knowledge broadens what cyber-physical systems can do in healthcare, e-commerce, the augmentation of human capabilities, the understanding of human activities, medical waste management and smart traffic management, to name a few.';

const TEAM_TEXT =
  'A multidisciplinary team of graduate students, undergraduate students and visiting researchers, guided by **Dr. Tahsina Farah Sanam**, Professor at the Institute of Appropriate Technology, BUET. The team combines resources from universities, private companies and the Government of Bangladesh to conduct fundamental research on making computer systems and applications more reliable, secure and efficient.';

const pages = [
  {
    id: 'home',
    title: 'Home',
    navLabel: 'Home',
    order: 0,
    inNav: true,
    header: { show: false },
    sections: [
      {
        id: 'home-hero',
        kind: 'hero',
        props: {
          eyebrow: 'CPI Lab · IAT, BUET',
          name: 'Cyber Physical Intelligence Lab',
          nameSize: 'lg',
          roles: 'Institute of Appropriate Technology\nBangladesh University of Engineering and Technology',
          bio: 'We turn raw, heterogeneous sensor data into information and knowledge, for healthcare, e-commerce, human activity understanding and smarter cities.',
          image: img('gallary-03.jpg'),
          imageAlt: 'The CPI Lab team in front of the lab',
          imageShape: 'rounded',
          imageSide: 'right',
          imageWidth: 46,
          height: 78,
          decoration: 'grid',
          keywords: 'Cyber-physical systems, Wi-Fi sensing, Machine learning, Healthcare AI, E-commerce, Smart traffic',
          showSocials: false,
          buttons: [
            { label: 'Our research', action: 'page', target: 'research', style: 'solid', icon: 'Radar' },
            { label: 'Meet the team', action: 'page', target: 'people', style: 'outline', icon: 'Users' },
            { label: 'Join us', action: 'page', target: 'join', style: 'outline', icon: 'Sparkles' },
          ],
        },
      },
      {
        id: 'home-mission',
        kind: 'richtext',
        heading: { title: 'Our mission', eyebrow: 'Welcome' },
        props: { body: MISSION, lead: true, image: img('home-01.png'), imageAlt: 'From cities and sensors to data streams, analytics and decision support', imageSide: 'right', imageWidth: 38, imageShape: 'square' },
      },
      {
        id: 'home-stats',
        kind: 'stats',
        heading: { show: false },
        props: {
          align: 'center',
          items: [
            { label: 'Research projects', source: 'projects' },
            { label: 'Publications', source: 'publications' },
            { label: 'Funded grants', source: 'grants' },
            { label: 'Lab members', source: 'members' },
          ],
        },
        style: { tone: 'contrast', paddingTop: 56, paddingBottom: 56 },
      },
      {
        id: 'home-research',
        kind: 'collection',
        heading: { title: 'Research', eyebrow: 'What we work on' },
        props: { collection: 'projects', mode: 'cards', columns: 2, imageAspect: '16/9', bodyLines: 3, showLinks: false },
        viewAll: { show: true, label: 'All research', target: 'research', mode: 'page' },
      },
      {
        id: 'home-team',
        kind: 'richtext',
        heading: { title: 'Research team', eyebrow: 'People' },
        props: { body: TEAM_TEXT },
        style: { tone: 'soft', paddingBottom: 40 },
      },
      {
        id: 'home-people',
        kind: 'collection',
        heading: { show: false },
        props: { collection: 'members', mode: 'cards', columns: 4, imageAspect: '1/1', limit: 4, showBody: false, showTags: false, showLinks: false, selection: 'filter', filterField: 'category', filterValue: 'Graduate Student' },
        style: { tone: 'soft', paddingTop: 0 },
        viewAll: { show: true, label: 'Everyone in the lab', target: 'people', mode: 'page' },
      },
      {
        id: 'home-news',
        kind: 'collection',
        heading: { title: 'News', eyebrow: 'Latest' },
        props: { collection: 'news', mode: 'minimal', limit: 4, showBody: false },
        viewAll: { show: true, label: 'All news and grants', target: 'news', mode: 'page' },
      },
      {
        id: 'home-join',
        kind: 'blocks',
        heading: { show: false },
        props: {
          blocks: [
            { id: 'j1', type: 'heading', props: { text: 'Interested in sensing, AI and cyber-physical systems?', align: 'center' } },
            { id: 'j2', type: 'text', props: { markdown: 'We welcome motivated students and researchers. See current openings or write to the lab.', align: 'center' } },
            { id: 'j3', type: 'buttons', props: { align: 'center', items: [
              { label: 'Open positions', action: 'page', target: 'join', style: 'solid', icon: 'Sparkles' },
              { label: 'Email the lab', action: 'email', target: EMAIL, style: 'outline', icon: 'Mail' },
            ] } },
          ],
        },
        style: { tone: 'accent', width: 'narrow' },
      },
    ],
  },
  {
    id: 'research',
    title: 'Research',
    navLabel: 'Research',
    order: 1,
    inNav: true,
    header: { show: true, title: 'Research', subtitle: 'Sensing, machine learning and cyber-physical systems applied to healthcare, commerce, mobility and everyday life.' },
    sections: [
      { id: 'research-projects', kind: 'collection', heading: { show: false }, props: { collection: 'projects', mode: 'cards', columns: 1, imagePosition: 'alternate', imageSize: 'lg', imageAspect: '4/3', verticalAlign: 'center', titleSize: 'lg', hover: 'lift', bodyLines: 0, showBody: true, showLinks: false } },
      {
        id: 'research-contact',
        kind: 'blocks',
        heading: { show: false },
        props: { blocks: [{ id: 'r1', type: 'text', props: { markdown: `Interested in collaborating on any of these projects? Get in touch at [${EMAIL}](mailto:${EMAIL}).`, align: 'center' } }] },
        style: { tone: 'soft', paddingTop: 40, paddingBottom: 40 },
      },
    ],
  },
  {
    id: 'people',
    title: 'People',
    navLabel: 'People',
    order: 2,
    inNav: true,
    header: { show: true, title: 'People', subtitle: 'Graduate students, undergraduate students and visiting researchers, guided by Dr. Tahsina Farah Sanam.' },
    sections: [
      { id: 'people-director', kind: 'collection', heading: { title: 'Lab Director' }, props: { collection: 'members', mode: 'list', imageAspect: '1/1', bodyLines: 0, selection: 'filter', filterField: 'category', filterValue: 'Lab Director' } },
      { id: 'people-ra', kind: 'collection', heading: { title: 'Research assistants' }, props: { collection: 'members', mode: 'cards', columns: 3, imageAspect: '1/1', bodyLines: 3, selection: 'filter', filterField: 'category', filterValue: 'Research Assistant', emptyText: '' }, style: { tone: 'soft' }, hidden: true, review: 'All research assistants are hidden until confirmed (see People in the dashboard). Show this section once at least one is visible.' },
      { id: 'people-grad', kind: 'collection', heading: { title: 'Graduate students' }, props: { collection: 'members', mode: 'cards', columns: 3, imageAspect: '1/1', bodyLines: 3, selection: 'filter', filterField: 'category', filterValue: 'Graduate Student' } },
      { id: 'people-ug', kind: 'collection', heading: { title: 'Undergraduate students' }, props: { collection: 'members', mode: 'minimal', showBody: false, showImages: false, clickable: false, selection: 'filter', filterField: 'category', filterValue: 'Undergraduate Student' }, style: { tone: 'soft' } },
      { id: 'people-alumni', kind: 'collection', heading: { title: 'Alumni' }, props: { collection: 'members', mode: 'cards', columns: 3, imageAspect: '1/1', bodyLines: 2, selection: 'filter', filterField: 'category', filterValue: 'Alumni' } },
    ],
  },
  {
    id: 'publications',
    title: 'Publications',
    navLabel: 'Publications',
    order: 3,
    inNav: true,
    header: { show: true, title: 'Publications', subtitle: 'Journal articles and conference papers from the CPI Lab. Select any entry for details and a citation.' },
    sections: [
      { id: 'pubs-all', kind: 'collection', heading: { show: false }, props: { collection: 'publications', mode: 'citation', groupBy: 'type', showSearch: true, chipsField: 'year', sortField: 'year', sortDir: 'desc' } },
    ],
  },
  {
    id: 'news',
    title: 'News',
    navLabel: 'News',
    order: 4,
    inNav: true,
    header: { show: true, title: 'News and grants', subtitle: 'The CPI Lab is an active platform for students to achieve excellence. Highlights of our activity.' },
    sections: [
      { id: 'news-all', kind: 'collection', heading: { title: 'News' }, props: { collection: 'news', mode: 'timeline' } },
      { id: 'news-grants', kind: 'collection', heading: { title: 'Received grants' }, props: { collection: 'grants', mode: 'minimal' }, style: { tone: 'soft' } },
    ],
  },
  {
    id: 'facilities',
    title: 'Facilities',
    navLabel: 'Facilities',
    order: 5,
    inNav: true,
    header: { show: true, title: 'Facilities and testbeds', subtitle: 'Equipment for wireless communication and sensing research.' },
    sections: [
      { id: 'fac-all', kind: 'collection', heading: { show: false }, props: { collection: 'equipment', mode: 'cards', columns: 2, imageAspect: '4/3', groupBy: 'category', bodyLines: 3 } },
    ],
  },
  {
    id: 'gallery',
    title: 'Gallery',
    navLabel: 'Gallery',
    order: 6,
    inNav: true,
    header: { show: true, title: 'Gallery', subtitle: 'Lab life, visits and celebrations.' },
    sections: [{ id: 'gal-all', kind: 'collection', heading: { show: false }, props: { collection: 'gallery', mode: 'masonry', columns: 3 } }],
  },
  {
    id: 'join',
    title: 'Join us',
    navLabel: 'Join us',
    order: 7,
    inNav: true,
    header: { show: true, title: 'Join the CPI Lab', subtitle: 'Research assistant positions, M.Sc. and undergraduate thesis opportunities.' },
    sections: [
      { id: 'join-open', kind: 'collection', heading: { title: 'Open positions' }, props: { collection: 'openings', mode: 'list', bodyLines: 0, showImages: false, emptyText: 'There are no open positions right now. Students interested in sensing, machine learning and cyber-physical systems are always welcome to get in touch.' } },
      {
        id: 'join-contact',
        kind: 'blocks',
        heading: { show: false },
        props: { blocks: [{ id: 'jc1', type: 'buttons', props: { align: 'center', items: [{ label: 'Email Dr. Sanam', action: 'email', target: EMAIL, style: 'solid', icon: 'Mail' }] } }] },
        style: { tone: 'soft', paddingTop: 40, paddingBottom: 40 },
      },
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    navLabel: 'Contact',
    order: 8,
    inNav: true,
    header: { show: true, title: 'Contact', subtitle: 'Room 213, Excellence Building, BUET, Dhaka.' },
    sections: [
      {
        id: 'contact-main',
        kind: 'contact',
        heading: { show: false },
        props: {
          intro: '**Parking:** you can park outside the Excellence Building with a car parking permit, which you can obtain from the CPI Lab staff.',
        },
      },
    ],
  },
];

const seed = { config, schema, pages, items };
export default seed;
