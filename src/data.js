const data = {
  footer: {
    texto: "© Sanoma Educación S.L.U / Richmond",
    contacto: "Contacto",
    email: "richmond@richmondelt.es",
    condicionesdeuso: "Condiciones de uso",
    politicadeprivacidad: "Política de privacidad",
  },
  videoCategories: [
    { category: "Adjectives" },
    { category: "Adverbs" },
    { category: "Clauses" },
    { category: "Conditionals" },
    { category: "Future" },
    { category: "Gerund" },
    { category: "Imperatives" },
    { category: "Intensifiers" },
    { category: "Modals" },
    { category: "Nouns" },
    { category: "Passive" },
    { category: "Passives" },
    { category: "Past Continuous" },
    { category: "Past Perfect" },
    { category: "Past Simple" },
    { category: "Possessives" },
    { category: "Prepositions" },
    { category: "Present Continuous" },
    { category: "Present Perfect" },
    { category: "Present Simple" },
    { category: "Pronouns" },
    { category: "Quantifiers" },
    { category: "Tag questions" },
    { category: "Verb patterns" },
    { category: "Vocab/Spelling" },
    { category: "Wishes" },
  ],
  videos: [
    {
      title: "A1 - Starters",
      videoText: "VideoText1",
      videoDescription: "Adjectives, Possessives, Wishes",
      url: "/assets/videos/",
      video: "video1.mp4",
      cfrGrade: "A1",
      cambridgeGrade: "Starters",
      category: ["Adjectives", "Possessives", "Wishes"],
      id:0
    },
    {
      title: "A1+ - Movers",
      videoText: "adVideoText2",
      videoDescription: "Adjectives, Possessives, Wishes",
      url: "/assets/videos/",
      video: "video2.mp4",
      cfrGrade: "A1+",
      cambridgeGrade: "Movers",
      category: ["Adjectives", "Possessives", "Wishes"],
      id:1
    },
    {
      title: "A2 - Fliers",
      videoText: "VideoText3",
      videoDescription: "Adjectives, Possessives, Present Perfect",
      url: "/assets/videos/",
      video: "video3.mp4",
      cfrGrade: "A2",
      cambridgeGrade: "Fliers",
      category: ["Adjectives", "Possessives", "Present Perfect"],
      id:2
    },
    {
      title: "A1 - Movers",
      videoText: "VideoText4",
      videoDescription: "Adjectives, Possessives, Present Perfect",
      url: "/assets/videos/",
      cfrGrade: "A1",
      cambridgeGrade: "Movers",
      category: ["Adjectives", "Possessives", "Present Perfect"],
      id:3
    },
    {
      title: "A1+ - Fliers",
      videoText: "VideoText5",
      videoDescription: "Adjectives, Possessives, Present Perfect",
      url: "/assets/videos/",
      cfrGrade: "A1+",
      cambridgeGrade: "Fliers",
      category: ["Adjectives", "Possessives", "Present Perfect"],
      id:4
    },
    {
      title: "A1+ - Key",
      videoText: "VideoText6" ,
      videoDescription: "Adjectives, Gerund, Present Perfect",
      url: "/assets/videos/",
      cfrGrade: "A1+",
      cambridgeGrade: "Key",
      category: ["Adjectives", "Gerund", "Present Perfect"],
      id:5
    },
    {
      title: "B1 - First",
      videoText: "aVideoText7",
      videoDescription: "Adjectives, Gerund, Present Perfect",
      url: "/assets/videos/",
      cfrGrade: "B1",
      cambridgeGrade: "First",
      category: ["Adjectives", "Gerund", "Present Perfect"],
      id:6
    },
    {
      title: "A1 - Fliers",
      videoText: "VideoText 8",
      videoDescription: "Description 8",
      url: "/assets/videos/",
      cfrGrade: "A1",
      cambridgeGrade: "Fliers",
      category: [],
      id:7
    },
    {
      title: "B1 - Preliminary",
      videoText: "VideoText 9",
      videoDescription: "Description 9",
      url: "/assets/videos/",
      cfrGrade: "B1",
      cambridgeGrade: "Preliminary",
      category: [],
      id:8
    },
    {
      title: "B1 - Preliminary",
      videoText: "VideoText 10",
      videoDescription: "Description 10",
      url: "/assets/videos/",
      cfrGrade: "B1",
      cambridgeGrade: "Preliminary",
      category: [],
      id:9
    },
  ],
  chanelLogo: {
    url: "#",
    urlLogo: "/",
    logo: "grammar-channel-logo.png",
  },
  flippedButton: {
    url: "/assets/videos/",
    text: "FLIPPED LEARNING",
  },
  aboutButton: {
    url: "/assets/videos/",
    text: "ABOUT",
  },
  headerGrades: {
    cfr: {
      title: "CFR",
      url: "#",
      grades: [
        {
          grade: "A1",
          url: "#",
        },
        {
          grade: "A1+",
          url: "#",
        },
        {
          grade: "A2",
          url: "#",
        },
        {
          grade: "A2+",
          url: "#",
        },
        {
          grade: "B1",
          url: "#",
        },
        {
          grade: "B1+",
          url: "#",
        },
        {
          grade: "B2",
          url: "#",
        },
        {
          grade: "B2+",
          url: "#",
        },
      ],
    },
    cambridge: {
      title: "CAMBRIDGE",
      url: "#",
      grades: [
        {
          grade: "Starters",
          url: "#",
        },
        {
          grade: "Movers",
          url: "#",
        },
        {
          grade: "Fliers",
          url: "#",
        },
        {
          grade: "Key",
          url: "#",
        },
        {
          grade: "Preliminary",
          url: "#",
        },
        {
          grade: "First",
          url: "#",
        },
      ],
    },
  },
};

export const getDataFooter = data.footer;
export const getVideoCategories = data.videoCategories;
export const getVideos = data.videos;
export const getChanelLogo = data.chanelLogo;
export const getFlippedButton = data.flippedButton;
export const getAboutButton = data.aboutButton;
export const getCfr = data.cfr;
export const getHeaderGrades = data.headerGrades;
