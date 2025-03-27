
export type Project = {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  location: string;
  size: string;
  year: string;
  category: string;
  featured: boolean;
  thumbnail: string;
  images: string[];
};

export const projects: Project[] = [
  {
    id: "luxury-garden-pavilion",
    title: "Luxury Garden Pavilion",
    description: "This elegant wooden pavilion provides a perfect outdoor relaxation space for a luxury villa. Designed with natural oak beams and a traditional roof, it harmoniously blends with the surrounding garden while offering protection from sun and light rain.",
    shortDescription: "Elegant outdoor relaxation space with natural oak structure",
    location: "Alpine Valley",
    size: "25 m²",
    year: "2023",
    category: "Garden Pavilion",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    images: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1574643156929-51fa098b0394?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1523544924739-b53cf82c499d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
  },
  {
    id: "mountain-view-gazebo",
    title: "Mountain View Gazebo",
    description: "Perched on a hillside with breathtaking mountain views, this wooden gazebo provides a spectacular vantage point. Built with weather-resistant cedar and featuring an innovative hexagonal design, it's the perfect place for entertaining guests or quiet contemplation.",
    shortDescription: "Hexagonal cedar structure with panoramic mountain views",
    location: "Mountain Ridge",
    size: "20 m²",
    year: "2022",
    category: "Gazebo",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    images: [
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
  },
  {
    id: "lakeside-shelter",
    title: "Lakeside Shelter",
    description: "This serene lakeside shelter offers a quiet retreat with stunning water views. Constructed from locally sourced pine and featuring open sides for maximum visibility, it provides the perfect balance of shelter and connection with nature.",
    shortDescription: "Open-sided pine structure with panoramic lake views",
    location: "Crystal Lake",
    size: "30 m²",
    year: "2023",
    category: "Shelter",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1587061633437-187ac80e8a81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    images: [
      "https://images.unsplash.com/photo-1587061633437-187ac80e8a81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1534301191365-13726cfb4535?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1558443336-dbb3b7755c1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
    ],
  },
  {
    id: "forest-retreat-pavilion",
    title: "Forest Retreat Pavilion",
    description: "Nestled among ancient trees, this forest pavilion creates a peaceful retreat. Built with sustainable materials and featuring a unique sloped roof design, it blends seamlessly with its woodland surroundings while providing a comfortable space for relaxation.",
    shortDescription: "Sustainable woodland structure with unique sloped roof",
    location: "Evergreen Forest",
    size: "35 m²",
    year: "2022",
    category: "Pavilion",
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    images: [
      "https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1552596265-005a93430901?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1526&q=80",
      "https://images.unsplash.com/photo-1594312464655-9ff93ea3529c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
  },
  {
    id: "modern-garden-tent",
    title: "Modern Garden Tent",
    description: "This contemporary take on the traditional garden tent combines modern design with natural materials. Its clean lines and minimalist approach create a striking appearance, while the sturdy wooden frame and premium fabric covering offer durability and style.",
    shortDescription: "Contemporary design with clean lines and premium materials",
    location: "Urban Garden",
    size: "15 m²",
    year: "2023",
    category: "Garden Tent",
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1563648814631-f7931596fb6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    images: [
      "https://images.unsplash.com/photo-1563648814631-f7931596fb6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1523713947078-b9841f280c2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
  },
  {
    id: "traditional-wooden-pergola",
    title: "Traditional Wooden Pergola",
    description: "This classically designed wooden pergola brings timeless elegance to any outdoor space. Hand-crafted using traditional joinery techniques and premium hardwood, it creates a beautiful framework for climbing plants and provides partial shade for outdoor dining.",
    shortDescription: "Classically designed structure with traditional joinery techniques",
    location: "Countryside Estate",
    size: "40 m²",
    year: "2022",
    category: "Pergola",
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1595521970622-79682e5bd442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    images: [
      "https://images.unsplash.com/photo-1595521970622-79682e5bd442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      "https://images.unsplash.com/photo-1596825205290-82ddc0f6375d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1561488111-5d800fd56b8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
  },
];

export const companyInfo = {
  name: "WoodenTents",
  slogan: "Crafting Exceptional Outdoor Structures",
  founded: "2015",
  description: "We specialize in designing and building premium wooden structures that blend seamlessly with nature. Our expert craftsmen use only the finest materials to create beautiful, durable, and functional outdoor living spaces.",
  mission: "To create beautiful outdoor spaces that connect people with nature through exceptional craftsmanship and sustainable practices.",
  values: [
    {
      title: "Craftsmanship",
      description: "We take pride in our attention to detail and commitment to excellence in every piece we create."
    },
    {
      title: "Sustainability",
      description: "We source our materials responsibly and design structures that minimize environmental impact."
    },
    {
      title: "Innovation",
      description: "We constantly explore new designs and techniques while respecting traditional woodworking methods."
    },
    {
      title: "Customer Focus",
      description: "We work closely with our clients to understand their needs and exceed their expectations."
    }
  ],
  address: "Alpine Valley, 123 Forest Road",
  phone: "+7 (123) 456-7890",
  email: "info@woodentents.com",
  socialMedia: {
    instagram: "https://instagram.com/woodentents",
    facebook: "https://facebook.com/woodentents",
    pinterest: "https://pinterest.com/woodentents"
  }
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Alexei Petrov",
    role: "Homeowner",
    company: "Private Estate",
    content: "The wooden pavilion perfectly complements our garden. The craftsmanship is outstanding, and it has become our favorite place to relax and entertain guests.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: "2",
    name: "Marina Volkova",
    role: "Director",
    company: "Luxury Resort",
    content: "We commissioned multiple structures for our resort, and the quality and attention to detail exceeded our expectations. Our guests constantly compliment the beautiful wooden gazebos.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: "3",
    name: "Sergei Ivanov",
    role: "Landscape Architect",
    company: "Green Horizons",
    content: "As a landscape architect, I've worked with many suppliers. None match the quality and reliability of this company. Their wooden structures are true works of art that enhance any outdoor space.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  }
];

export type Feature = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export const features: Feature[] = [
  {
    id: "premium-materials",
    title: "Premium Materials",
    description: "We select only the highest quality woods and materials to ensure durability and beauty.",
    icon: "gem"
  },
  {
    id: "custom-design",
    title: "Custom Design",
    description: "Each structure is designed to meet your specific needs and complement your outdoor space.",
    icon: "pencil"
  },
  {
    id: "expert-craftsmen",
    title: "Expert Craftsmen",
    description: "Our team of skilled artisans brings decades of experience to every project.",
    icon: "hammer"
  },
  {
    id: "sustainable-practices",
    title: "Sustainable Practices",
    description: "We're committed to environmentally responsible sourcing and construction methods.",
    icon: "leaf"
  }
];
