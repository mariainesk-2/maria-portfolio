export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description?: string;
  fullDescription?: string;
  tools?: string;
  client?: string;
  year?: string;
  additionalImages?: string[];
}

export const portfolioData: PortfolioItem[] = [
  {
    id: 'banner-1',
    title: "Banner",
    category: "Graphic Design",
    image: "https://ext.same-assets.com/876827235/656741228.png",
    description: "A vibrant banner design created for digital marketing campaigns.",
    fullDescription: "This banner was designed to catch the viewer's attention while maintaining brand consistency. The use of color and typography was carefully considered to ensure maximum impact across different platforms.",
    tools: "Adobe Photoshop, Illustrator",
    client: "Marketing Agency",
    year: "2023",
    additionalImages: [
      "https://ext.same-assets.com/876827235/656741228.png",
      "https://ext.same-assets.com/876827235/3914977732.png"
    ]
  },
  {
    id: 'poster-1',
    title: "Poster Contest",
    category: "Graphic Design",
    image: "https://ext.same-assets.com/876827235/3103605280.png",
    description: "An award-winning poster design for a local festival.",
    fullDescription: "This poster was created for a design competition for a local festival. The challenge was to incorporate traditional elements while maintaining a modern aesthetic. The design won first place in the contest.",
    tools: "Adobe Illustrator, Photoshop",
    year: "2022",
    additionalImages: [
      "https://ext.same-assets.com/876827235/3103605280.png",
      "https://ext.same-assets.com/876827235/2917340859.png"
    ]
  },
  {
    id: 'landing-1',
    title: "Landing Page",
    category: "UI/UX",
    image: "https://ext.same-assets.com/876827235/1356369272.png",
    description: "A conversion-focused landing page design for a fintech startup.",
    fullDescription: "This landing page was designed to introduce a new financial service to potential customers. The design prioritizes clear communication of value propositions and encourages user sign-ups through strategic CTAs.",
    tools: "Figma, Adobe XD",
    client: "FinTech Startup",
    year: "2023",
    additionalImages: [
      "https://ext.same-assets.com/876827235/1356369272.png",
      "https://ext.same-assets.com/876827235/635313583.png"
    ]
  },
  {
    id: 'linkedin-1',
    title: "LinkedIn Ads",
    category: "Social Media",
    image: "https://ext.same-assets.com/876827235/4105212796.jpeg",
    description: "A series of targeted LinkedIn advertisements for professional services.",
    fullDescription: "This campaign consisted of multiple ad formats designed specifically for LinkedIn's business audience. The ads were designed to be professional yet eye-catching, with careful attention to both visual design and copywriting.",
    tools: "Adobe Photoshop, Canva",
    client: "Corporate Training Company",
    year: "2023"
  },
  {
    id: 'brand-1',
    title: "Brand Book",
    category: "Branding",
    image: "https://ext.same-assets.com/876827235/2244080446.png",
    description: "A comprehensive brand book for a modern retail company.",
    fullDescription: "This brand book establishes the complete visual identity for a retail brand, including logo usage, color palette, typography, photography style, and application examples. The goal was to create a consistent and recognizable brand across all touchpoints.",
    tools: "Adobe InDesign, Illustrator",
    client: "Retail Brand",
    year: "2022",
    additionalImages: [
      "https://ext.same-assets.com/876827235/2244080446.png",
      "https://ext.same-assets.com/876827235/2078429302.jpeg"
    ]
  },
  {
    id: 'illustration-1',
    title: "Illustration",
    category: "Art",
    image: "https://ext.same-assets.com/876827235/4205327836.jpeg",
    description: "Original illustration created for an environmental awareness campaign.",
    fullDescription: "This illustration was created for a campaign promoting environmental conservation. The style balances artistic expression with clear communication of the message, using symbolism to convey the importance of protecting natural resources.",
    tools: "Procreate, Adobe Illustrator",
    client: "Environmental Non-profit",
    year: "2022"
  },
  {
    id: 'gif-1',
    title: "GIF Animation",
    category: "Animation",
    image: "https://ext.same-assets.com/876827235/2876625454.gif",
    description: "Animated GIF created for digital marketing and social media campaigns.",
    fullDescription: "This animation was designed to grab attention in social media feeds and email campaigns. The simple yet effective motion design communicates the brand message in just a few seconds, making it ideal for digital marketing purposes.",
    tools: "Adobe After Effects, Photoshop",
    client: "Digital Marketing Agency",
    year: "2023"
  },
  {
    id: 'product-1',
    title: "Product Design UI/UX",
    category: "UI/UX",
    image: "https://ext.same-assets.com/876827235/635313583.png",
    description: "User interface and experience design for a food delivery application.",
    fullDescription: "This UI/UX project involved the complete redesign of a food delivery app. The project included user research, wireframing, prototyping, and the final UI design. The focus was on creating an intuitive, user-friendly experience that simplifies the ordering process.",
    tools: "Figma, Sketch, Principle",
    client: "Food Delivery Service",
    year: "2023",
    additionalImages: [
      "https://ext.same-assets.com/876827235/635313583.png",
      "https://ext.same-assets.com/876827235/1356369272.png"
    ]
  },
  {
    id: 'facebook-1',
    title: "Facebook Promo",
    category: "Social Media",
    image: "https://ext.same-assets.com/876827235/1456471187.png",
    description: "Facebook promotional campaign for a home appliance brand.",
    fullDescription: "This Facebook campaign was designed to promote a new line of energy-efficient home appliances. The visual design highlights the product benefits while maintaining brand consistency across multiple ad formats and placements.",
    tools: "Adobe Photoshop, Facebook Ads Manager",
    client: "Home Appliance Manufacturer",
    year: "2022"
  }
];
