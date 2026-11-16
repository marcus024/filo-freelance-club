/* All site content in one place. Edit here; pages read from it.
   DRAFT copy: review with the team before launch. */

window.FILO = {
  brand: {
    name: 'The Filo Freelance Club',
    tagline: 'Building a safe community for Filo freelancers, one tip at a time.',
    mentor: 'Miggy',
  },

  // Social links: replace '#' with the real profile URLs.
  socials: [
    { label: 'Facebook', href: '#', handle: 'The Filo Freelance Club' },
    { label: 'Instagram', href: '#', handle: '@thefilofreelanceclub' },
    { label: 'TikTok', href: '#', handle: '@thefilofreelanceclub' },
    { label: 'LinkedIn', href: '#', handle: 'The Filo Freelance Club' },
  ],

  /* ---------- General learning path ----------
     Start -> Service -> Portfolio -> Clients -> Interview -> Money -> Online Presence -> Getting Paid */
  guides: [
    {
      id: 'start-freelancing',
      step: 'Start',
      title: 'How to start freelancing or become a VA in the Philippines',
      summary: 'What freelancing really is, what a Virtual Assistant does, and the first three things to do this week.',
      minutes: 6,
      featured: true,
      sections: [
        {
          h: 'What freelancing actually means',
          p: 'Freelancing means you sell a service to clients directly instead of working for one employer. A Virtual Assistant (VA) is a freelancer who supports a business remotely: admin, social media, customer support, bookkeeping and more. Most Filipino VAs work for clients in the US, Australia, the UK and Canada.',
        },
        {
          h: 'You do not need to quit your job first',
          p: 'Many freelancers start with a few hours a week on the side. Treat your first months as practice: learn one service, build proof that you can do it, and land a small first client.',
        },
        {
          h: 'Your first three steps',
          list: [
            'Take the self-assessment so you know which path fits your skills and goals.',
            'Pick one service to learn first. You can add more later.',
            'Set up a reliable workspace: a laptop, stable internet and a backup connection.',
          ],
        },
      ],
    },
    {
      id: 'choose-a-service',
      step: 'Service',
      title: 'How to choose your first freelance service',
      summary: 'Match what you already know to what clients pay for, so you do not start from zero.',
      minutes: 5,
      featured: true,
      sections: [
        {
          h: 'Start from what you already do well',
          p: 'Your past jobs, school projects and hobbies already gave you skills. A former BPO agent can offer customer support. Someone who runs a small online shop already knows e-commerce. A person who loves organising can become an Executive VA.',
        },
        {
          h: 'Check that clients pay for it',
          list: [
            'Search the service on OnlineJobs.ph and Upwork and count the open jobs.',
            'Read five job posts. Note the tools and tasks that keep showing up.',
            'Choose the service where your skills overlap with real demand.',
          ],
        },
      ],
    },
    {
      id: 'build-a-portfolio',
      step: 'Portfolio',
      title: 'How to build a VA portfolio with no experience',
      summary: 'Sample work beats a long CV. Here is how to create proof before your first client.',
      minutes: 7,
      featured: true,
      sections: [
        {
          h: 'Make samples that look like real work',
          p: 'Clients want to see what you can do. Create two or three samples for your chosen service: a content calendar, a cleaned-up spreadsheet, an email template set, or a short edited video.',
        },
        {
          h: 'Where to put your portfolio',
          list: [
            'A free Canva website or Google Drive folder with clear file names.',
            'A short intro: who you are, the service you offer and how to reach you.',
            'One line under each sample explaining the problem and what you did.',
          ],
        },
      ],
    },
    {
      id: 'find-clients',
      step: 'Clients',
      title: 'Where to find your first freelance clients',
      summary: 'Job boards, referrals and social media: where beginners actually land work.',
      minutes: 6,
      featured: true,
      sections: [
        {
          h: 'Job boards that hire Filipino freelancers',
          list: [
            'OnlineJobs.ph: long-term VA roles, mostly paid monthly.',
            'Upwork: project-based work with a built-in payment system.',
            'LinkedIn and Facebook groups: direct posts from business owners.',
          ],
        },
        {
          h: 'Apply like a professional',
          p: 'Read the whole post, answer any test question they hide in it, and mention one specific thing about their business. Short, personal applications get more replies than long copied ones.',
        },
      ],
    },
    {
      id: 'prepare-for-interviews',
      step: 'Interview',
      title: 'How to prepare for a VA interview',
      summary: 'What clients ask, how to answer, and the setup checks to do before the call.',
      minutes: 5,
      sections: [
        {
          h: 'Questions you will likely hear',
          list: [
            'Tell me about yourself and why you want to work remotely.',
            'Walk me through how you would handle a task like ours.',
            'Which tools have you used, and how quickly do you learn new ones?',
            'What hours can you work, and what is your internet backup?',
          ],
        },
        {
          h: 'Before the call',
          p: 'Test your camera, microphone and internet. Sit somewhere quiet with good light. Keep your portfolio link ready to paste in the chat.',
        },
      ],
    },
    {
      id: 'taxes-and-money',
      step: 'Money',
      title: 'Taxes and money basics for Filipino freelancers',
      summary: 'Registering with the BIR, the 8% option, and setting your rates.',
      minutes: 8,
      sections: [
        {
          h: 'Register as self-employed',
          p: 'Freelancers in the Philippines register with the BIR as self-employed individuals. Many choose the 8% income tax option on gross receipts above ₱250,000, available if annual gross sales stay at or below ₱3 million. Check the latest rules with the BIR or an accountant before you file.',
        },
        {
          h: 'Set your rate',
          list: [
            'Research what others charge for the same service and level.',
            'Start fair, then raise your rate as you collect results and reviews.',
            'Set aside money for taxes and an emergency fund every payday.',
          ],
        },
      ],
    },
    {
      id: 'online-presence',
      step: 'Online presence',
      title: 'How to build an online presence that gets you hired',
      summary: 'A simple LinkedIn, a clean profile photo and posts that show your work.',
      minutes: 5,
      sections: [
        {
          h: 'The minimum you need',
          list: [
            'A professional photo and a headline that names your service.',
            'A LinkedIn or Facebook page that links to your portfolio.',
            'An OnlineJobs.ph or Upwork profile that matches the same story.',
          ],
        },
        {
          h: 'Show, do not just tell',
          p: 'Post what you are learning and the samples you make. Clients often hire the freelancer they have seen working, not the one with the longest list of skills.',
        },
      ],
    },
    {
      id: 'getting-paid',
      step: 'Getting paid',
      title: 'How freelancers in the Philippines get paid',
      summary: 'PayPal, Wise, Payoneer and bank transfers: fees, speed and safety.',
      minutes: 5,
      sections: [
        {
          h: 'Common payment options',
          list: [
            'Wise: low fees and good exchange rates to Philippine banks.',
            'PayPal: widely accepted, but compare its fees and rates.',
            'Payoneer: popular for marketplace payouts.',
            'Upwork and OnlineJobs.ph: built-in or recommended payment methods.',
          ],
        },
        {
          h: 'Stay safe',
          p: 'Never pay a client to get a job. Agree on the rate and schedule in writing, and be careful with anyone who asks you to receive and forward money.',
        },
      ],
    },
  ],

  /* ---------- Niche / career hubs ---------- */
  niches: [
    {
      id: 'social-media-va',
      name: 'Social Media VA',
      line: 'Plan, post and grow a brand on social media.',
      work: 'You plan content, write captions, schedule posts, reply to comments and report on what is working.',
      skills: ['Writing captions', 'Basic design', 'Community management', 'Reading analytics'],
      tools: ['Canva', 'Meta Business Suite', 'Later or Buffer', 'CapCut'],
      services: ['Monthly content calendar', 'Post design and scheduling', 'Comment and DM management'],
      portfolio: ['A 2-week content calendar for a local business', 'Five branded post designs'],
      clients: ['Small business owners', 'Coaches and creators', 'Agencies on OnlineJobs.ph and Upwork'],
    },
    {
      id: 'executive-va',
      name: 'Executive VA',
      line: 'Keep a busy founder organised.',
      work: 'You manage calendars, inboxes, travel, documents and follow-ups so your client can focus on decisions.',
      skills: ['Organisation', 'Clear written English', 'Discretion', 'Prioritising'],
      tools: ['Google Workspace', 'Microsoft 365', 'Notion', 'Calendly'],
      services: ['Inbox and calendar management', 'Meeting prep and notes', 'Travel and event booking'],
      portfolio: ['A sample weekly calendar plan', 'An email template library'],
      clients: ['Founders and executives', 'Consultants', 'Real estate and finance professionals'],
    },
    {
      id: 'bookkeeping-va',
      name: 'Bookkeeping VA',
      line: 'Keep a business\'s numbers clean and up to date.',
      work: 'You record transactions, reconcile accounts, prepare simple reports and keep receipts organised.',
      skills: ['Attention to detail', 'Basic accounting', 'Spreadsheets', 'Confidentiality'],
      tools: ['QuickBooks Online', 'Xero', 'Excel or Google Sheets'],
      services: ['Monthly bookkeeping', 'Bank reconciliation', 'Invoice and bill tracking'],
      portfolio: ['A reconciled sample ledger', 'A simple monthly profit and loss report'],
      clients: ['Small businesses', 'Accounting firms', 'Online sellers'],
    },
    {
      id: 'customer-support-va',
      name: 'Customer Support VA',
      line: 'Help customers by chat, email and phone.',
      work: 'You answer questions, solve problems, process refunds and keep customers happy.',
      skills: ['Patience', 'Clear communication', 'Problem solving', 'Typing speed'],
      tools: ['Zendesk', 'Gorgias', 'Freshdesk', 'Shopify'],
      services: ['Email and chat support', 'Order and refund handling', 'FAQ and macro writing'],
      portfolio: ['Sample replies to tricky customer emails', 'A short FAQ for an online shop'],
      clients: ['E-commerce brands', 'SaaS companies', 'Former BPO clients'],
    },
    {
      id: 'ecommerce-va',
      name: 'E-commerce VA',
      line: 'Run the back office of an online store.',
      work: 'You upload products, update listings, manage orders and inventory, and help with store promotions.',
      skills: ['Product research', 'Listing writing', 'Order management', 'Basic photo editing'],
      tools: ['Shopify', 'Amazon Seller Central', 'Etsy', 'Canva'],
      services: ['Product listing and optimisation', 'Order and inventory management', 'Store updates'],
      portfolio: ['Three rewritten product listings', 'A sample inventory tracker'],
      clients: ['Shopify store owners', 'Amazon and Etsy sellers'],
    },
    {
      id: 'real-estate-va',
      name: 'Real Estate VA',
      line: 'Support agents with leads, listings and paperwork.',
      work: 'You manage listings, follow up with leads, schedule showings and update the CRM.',
      skills: ['Organisation', 'Phone and email follow-up', 'CRM updates', 'Research'],
      tools: ['Follow Up Boss', 'Zillow', 'Canva', 'Google Workspace'],
      services: ['Lead follow-up', 'Listing management', 'Transaction coordination support'],
      portfolio: ['A sample listing description', 'A lead follow-up email sequence'],
      clients: ['US real estate agents and teams', 'Property managers'],
    },
    {
      id: 'medical-va',
      name: 'Medical VA',
      line: 'Handle admin for clinics and health practices.',
      work: 'You schedule appointments, verify insurance, manage patient records and answer calls, following privacy rules.',
      skills: ['Medical terminology', 'Privacy awareness (HIPAA)', 'Scheduling', 'Calm communication'],
      tools: ['EHR systems', 'Google Workspace', 'Phone systems'],
      services: ['Appointment scheduling', 'Insurance verification', 'Patient intake and records'],
      portfolio: ['A sample patient intake checklist', 'A HIPAA basics certificate'],
      clients: ['US clinics and private practices', 'Dental and therapy offices'],
    },
    {
      id: 'lead-generation-va',
      name: 'Lead Generation VA',
      line: 'Find and qualify potential customers.',
      work: 'You research prospects, build contact lists, verify emails and help with outreach campaigns.',
      skills: ['Online research', 'Data accuracy', 'Writing outreach messages', 'Spreadsheets'],
      tools: ['LinkedIn Sales Navigator', 'Apollo', 'Hunter', 'Google Sheets'],
      services: ['Prospect list building', 'Email verification', 'Outreach campaign support'],
      portfolio: ['A sample list of 50 verified leads', 'A three-step outreach sequence'],
      clients: ['B2B companies', 'Agencies and consultants'],
    },
    {
      id: 'digital-marketing',
      name: 'Digital Marketing',
      line: 'Help businesses get found and sell online.',
      work: 'You support email marketing, SEO, ads and website updates, and report on results.',
      skills: ['Copywriting', 'Basic SEO', 'Email marketing', 'Analytics'],
      tools: ['Mailchimp', 'Google Analytics', 'WordPress', 'Meta Ads Manager'],
      services: ['Email newsletters', 'Blog and SEO support', 'Ad campaign setup'],
      portfolio: ['A sample newsletter', 'A blog post written for a search keyword'],
      clients: ['Small businesses', 'Marketing agencies', 'Coaches and course creators'],
    },
    {
      id: 'video-editing',
      name: 'Video Editing',
      line: 'Turn raw footage into content people watch.',
      work: 'You edit short-form and long-form videos, add captions and music, and prepare thumbnails.',
      skills: ['Storytelling', 'Pacing', 'Captions and subtitles', 'Basic motion graphics'],
      tools: ['CapCut', 'Adobe Premiere Pro', 'DaVinci Resolve', 'Canva'],
      services: ['Short-form edits for Reels and TikTok', 'YouTube editing', 'Captions and thumbnails'],
      portfolio: ['Three 30-second edits from free stock footage', 'One YouTube-style edit'],
      clients: ['Content creators', 'Coaches', 'Brands and agencies'],
    },
  ],

  /* ---------- Assessment options and scoring ----------
     Each answer adds points to the niches it fits. The top three become the result. */
  assessment: {
    skills: [
      { id: 'writing', label: 'Writing', niches: { 'social-media-va': 2, 'digital-marketing': 3, 'lead-generation-va': 1, 'executive-va': 1 } },
      { id: 'social', label: 'Social media', niches: { 'social-media-va': 3, 'digital-marketing': 2 } },
      { id: 'design', label: 'Design (Canva, photos)', niches: { 'social-media-va': 2, 'ecommerce-va': 1, 'video-editing': 1 } },
      { id: 'organising', label: 'Organising and scheduling', niches: { 'executive-va': 3, 'real-estate-va': 2, 'medical-va': 2 } },
      { id: 'numbers', label: 'Numbers and spreadsheets', niches: { 'bookkeeping-va': 3, 'lead-generation-va': 2, 'ecommerce-va': 1 } },
      { id: 'people', label: 'Talking to people', niches: { 'customer-support-va': 3, 'real-estate-va': 2, 'medical-va': 1 } },
      { id: 'research', label: 'Online research', niches: { 'lead-generation-va': 3, 'ecommerce-va': 2, 'executive-va': 1 } },
      { id: 'video', label: 'Video', niches: { 'video-editing': 3, 'social-media-va': 1 } },
      { id: 'selling', label: 'Selling', niches: { 'ecommerce-va': 2, 'lead-generation-va': 2, 'real-estate-va': 1 } },
    ],
    industries: [
      { id: 'bpo', label: 'BPO / call centre', niches: { 'customer-support-va': 3, 'medical-va': 1 } },
      { id: 'healthcare', label: 'Healthcare', niches: { 'medical-va': 3 } },
      { id: 'realestate', label: 'Real estate', niches: { 'real-estate-va': 3 } },
      { id: 'retail', label: 'Retail / online selling', niches: { 'ecommerce-va': 3, 'customer-support-va': 1 } },
      { id: 'finance', label: 'Finance / accounting', niches: { 'bookkeeping-va': 3 } },
      { id: 'admin', label: 'Office / admin', niches: { 'executive-va': 3 } },
      { id: 'marketing', label: 'Marketing / media', niches: { 'digital-marketing': 3, 'social-media-va': 2, 'video-editing': 1 } },
      { id: 'none', label: 'None of these yet', niches: {} },
    ],
    hobbies: [
      { id: 'content', label: 'Making content', niches: { 'social-media-va': 2, 'video-editing': 2 } },
      { id: 'editing', label: 'Editing photos or videos', niches: { 'video-editing': 3 } },
      { id: 'shopping', label: 'Online shopping and selling', niches: { 'ecommerce-va': 2 } },
      { id: 'planning', label: 'Planning trips and events', niches: { 'executive-va': 2 } },
      { id: 'budgeting', label: 'Budgeting', niches: { 'bookkeeping-va': 2 } },
      { id: 'helping', label: 'Helping people solve problems', niches: { 'customer-support-va': 2, 'medical-va': 1 } },
      { id: 'reading', label: 'Reading and writing', niches: { 'digital-marketing': 2 } },
      { id: 'gaming', label: 'Gaming and tech', niches: { 'customer-support-va': 1, 'video-editing': 1 } },
    ],
    goals: [
      { id: 'first-client', label: 'Land my first client' },
      { id: 'side-income', label: 'Earn a side income' },
      { id: 'full-time', label: 'Freelance full-time' },
      { id: 'switch', label: 'Switch to a better niche' },
    ],
    barriers: [
      { id: 'where-to-start', label: 'I do not know where to start', guide: 'start-freelancing' },
      { id: 'which-service', label: 'I am not sure which service to offer', guide: 'choose-a-service' },
      { id: 'no-portfolio', label: 'I have no portfolio', guide: 'build-a-portfolio' },
      { id: 'no-clients', label: 'I cannot find clients', guide: 'find-clients' },
      { id: 'interviews', label: 'Interviews make me nervous', guide: 'prepare-for-interviews' },
      { id: 'money', label: 'Taxes and getting paid confuse me', guide: 'taxes-and-money' },
    ],
  },
};
