
export const companyInfo = {
  name: "ДревоТент",
  slogan: "Деревянные шатры ручной работы",
  description: "Мы проектируем и создаем уникальные деревянные шатры и конструкции, которые сочетают в себе традиционное мастерство и современный дизайн.",
  address: "г. Москва, ул. Лесная, д. 10",
  phone: "+7 (495) 123-45-67",
  email: "info@drevotent.ru",
  socialMedia: {
    instagram: "https://instagram.com/drevotent",
    facebook: "https://facebook.com/drevotent",
  },
  founded: "2015",
  mission: "Наша миссия — создавать функциональные и эстетичные деревянные конструкции, которые гармонично вписываются в природный ландшафт и приносят радость их владельцам.",
  values: [
    {
      title: "Качество",
      description: "Мы используем только лучшие материалы и технологии для создания долговечных конструкций.",
    },
    {
      title: "Экологичность",
      description: "Заботимся о природе, используя древесину из ответственных источников.",
    },
    {
      title: "Инновации",
      description: "Сочетаем традиционные методы с современными технологиями для лучших результатов.",
    },
    {
      title: "Надежность",
      description: "Гарантируем безопасность и долговечность каждой созданной нами конструкции.",
    },
  ],
};

export const applicationTypes = [
  {
    id: "kitchen",
    title: "Летняя кухня",
    description: "Идеальное решение для приготовления пищи на открытом воздухе в окружении природы и свежего воздуха.",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    icon: "utensils"
  },
  {
    id: "restaurant",
    title: "Ресторан",
    description: "Создайте уникальную атмосферу для ваших гостей с деревянными шатрами, которые сочетают комфорт и близость к природе.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    icon: "coffee"
  },
  {
    id: "school",
    title: "Школа",
    description: "Образовательные пространства на открытом воздухе, способствующие креативности и более глубокому обучению.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1622&q=80",
    icon: "graduation-cap"
  },
  {
    id: "showroom",
    title: "Бизнес шоурум",
    description: "Презентуйте ваши продукты и услуги в уникальном пространстве, которое выделит вас среди конкурентов.",
    image: "https://images.unsplash.com/photo-1604014236812-a5f2ffe2d14d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    icon: "briefcase"
  },
  {
    id: "event",
    title: "Мероприятия",
    description: "Идеальное решение для проведения свадеб, корпоративов и других особых событий в элегантной обстановке.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1498&q=80",
    icon: "calendar"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Алексей Смирнов",
    position: "Владелец ресторана \"Лесная поляна\"",
    content: "Наш ресторан полностью преобразился благодаря деревянному шатру от ДревоТент. Посетители в восторге от атмосферы, а наша прибыль выросла на 30%!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1567515004624-219c11d31f2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 2,
    name: "Елена Михайлова",
    position: "Директор школы №158",
    content: "Деревянный павильон для занятий на свежем воздухе стал любимым местом наших учеников. Дети с удовольствием учатся в комфортной и вдохновляющей обстановке.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
  },
  {
    id: 3,
    name: "Павел Козлов",
    position: "Организатор свадебных мероприятий",
    content: "Конструкции от ДревоТент добавляют нашим свадебным мероприятиям особый шарм. Клиенты всегда остаются довольны, а фотографии получаются просто великолепными.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 4,
    name: "Марина Соколова",
    position: "Владелица загородного дома",
    content: "Заказали летнюю кухню для нашего загородного участка. Результат превзошел все ожидания! Теперь все наши друзья тоже хотят такую же.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
  }
];

export const projectImages = [
  {
    id: 1,
    title: "Шатер для ресторана",
    image: "https://images.unsplash.com/photo-1544984243-ec57ea28eba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
  },
  {
    id: 2,
    title: "Павильон для отдыха",
    image: "https://images.unsplash.com/photo-1595877244574-e90ce41ce089?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
  },
  {
    id: 3,
    title: "Летняя кухня",
    image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 4,
    title: "Беседка для сада",
    image: "https://images.unsplash.com/photo-1572202808998-5aa4487d4b0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
  },
  {
    id: 5,
    title: "Школьный павильон",
    image: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
  },
  {
    id: 6,
    title: "Шоурум для бизнеса",
    image: "https://images.unsplash.com/photo-1591017403286-fd8493524e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  }
];

// Define the Project type
export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  location: string;
  size: string;
  thumbnail: string;
  shortDescription: string;
  description: string;
  featured: boolean;
  images: string[];
}

// Export the projects array with sample data
export const projects: Project[] = [
  {
    id: "wooden-pavilion-1",
    title: "Деревянный павильон для ресторана",
    category: "Рестораны",
    year: "2023",
    location: "Москва",
    size: "120 м²",
    thumbnail: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    shortDescription: "Элегантный деревянный павильон для всесезонного использования в ресторане.",
    description: "Павильон выполнен из экологически чистой сибирской лиственницы и спроектирован для максимального комфорта как в летние, так и в зимние месяцы. Большие панорамные окна обеспечивают прекрасный вид на окружающую природу. Интерьер павильона оформлен в стиле современного рустика, что создает теплую и уютную атмосферу для гостей ресторана.",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1464195244916-405fa0a82545?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ]
  },
  {
    id: "summer-kitchen-1",
    title: "Летняя кухня для загородного дома",
    category: "Летние кухни",
    year: "2022",
    location: "Подмосковье",
    size: "45 м²",
    thumbnail: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    shortDescription: "Функциональная летняя кухня с зоной барбекю для семейного отдыха.",
    description: "Летняя кухня спроектирована для комфортного приготовления пищи на свежем воздухе. Она включает в себя зону барбекю, рабочие поверхности из натурального камня, раковину и место для хранения кухонной утвари. Крыша павильона защищает от солнца и легкого дождя, а открытые стороны обеспечивают прекрасную вентиляцию и вид на сад.",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1651788419228-4789a1712526?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ]
  },
  {
    id: "event-pavilion-1",
    title: "Павильон для свадебных церемоний",
    category: "Мероприятия",
    year: "2023",
    location: "Сочи",
    size: "150 м²",
    thumbnail: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1498&q=80",
    shortDescription: "Изысканный павильон для проведения свадеб с панорамным видом на море.",
    description: "Павильон расположен на берегу моря и предназначен для проведения свадебных церемоний и банкетов. Легкая конструкция с элементами декора из натурального дерева создает романтическую атмосферу. Павильон вмещает до 80 гостей и оборудован всем необходимым для проведения мероприятий высокого уровня.",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1498&q=80",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1513278974582-3e1b4a4fa35e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ]
  },
  {
    id: "educational-pavilion-1",
    title: "Павильон для школьных занятий",
    category: "Образование",
    year: "2022",
    location: "Казань",
    size: "80 м²",
    thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1622&q=80",
    shortDescription: "Павильон для проведения уроков на свежем воздухе в школьном дворе.",
    description: "Павильон предназначен для проведения уроков и творческих занятий на свежем воздухе. Он оборудован складной мебелью, которая позволяет трансформировать пространство под различные форматы занятий. Конструкция защищает от солнца и легкого дождя, а большие открытые пространства обеспечивают свободную циркуляцию воздуха.",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1622&q=80",
      "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
      "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
    ]
  },
  {
    id: "showroom-pavilion-1",
    title: "Шоурум для мебельной компании",
    category: "Бизнес",
    year: "2023",
    location: "Санкт-Петербург",
    size: "100 м²",
    thumbnail: "https://images.unsplash.com/photo-1604014236812-a5f2ffe2d14d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    shortDescription: "Современный шоурум с панорамными окнами для презентации мебели.",
    description: "Шоурум разработан для презентации мебельной продукции в естественном освещении. Панорамные окна и прозрачная крыша обеспечивают максимальное проникновение света. Деревянная конструкция павильона гармонично сочетается с представленной в нем мебелью, создавая целостное пространство, демонстрирующее экологичность и натуральность продукции компании.",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1604014236812-a5f2ffe2d14d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1591017403286-fd8493524e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1558&q=80"
    ]
  },
  {
    id: "garden-gazebo-1",
    title: "Садовая беседка",
    category: "Частные объекты",
    year: "2022",
    location: "Краснодар",
    size: "25 м²",
    thumbnail: "https://images.unsplash.com/photo-1572202808998-5aa4487d4b0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    shortDescription: "Уютная беседка для отдыха в саду частного дома.",
    description: "Садовая беседка создана для комфортного отдыха в окружении природы. В конструкции использована сосна, обработанная специальными составами для защиты от влаги и насекомых. Беседка оборудована встроенными скамейками и столом. Крыша защищает от солнца и дождя, а ажурные элементы декора создают красивую игру света и тени.",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1572202808998-5aa4487d4b0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      "https://images.unsplash.com/photo-1595877244574-e90ce41ce089?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      "https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ]
  }
];
