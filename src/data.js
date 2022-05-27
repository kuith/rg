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
      title: "Titulo 1",
      videoText: "VideoText 1",
      videoDescription: "Description 1",
      url: "/assets/videos/",
      video: "video1.mp4",
      cfrGrade: "",
      cambridgeGrade: "",
      category: [],
    },
    {
      title: "Titulo 2",
      videoText: "VideoText 2",
      videoDescription: "Description 2",
      url: "/assets/videos/",
      video: "video2.mp4",
      cfrGrade: "",
      cambridgeGrade: "",
      category: [],
    },
    {
      title: "Titulo 3",
      videoText: "VideoText 3",
      videoDescription: "Description 3",
      url: "/assets/videos/",
      video: "video3.mp4",
      cfrGrade: "",
      cambridgeGrade: "",
      category: [],
    },
    {
      title: "Titulo 4",
      videoText: "VideoText 4",
      videoDescription: "Description 4",
      url: "/assets/videos/",
      cfrGrade: "",
      cambridgeGrade: "",
      category: [],
    },
    {
      title: "Titulo 5",
      videoText: "VideoText 5",
      videoDescription: "Description 5",
      url: "/assets/videos/",
      cfrGrade: "",
      cambridgeGrade: "",
      category: [],
    },
    {
      title: "Titulo 6",
      videoText: "VideoText 6",
      videoDescription: "Description 6",
      url: "/assets/videos/",
      cfrGrade: "",
      cambridgeGrade: "",
      category: [],
    },
    {
      title: "Titulo 7",
      videoText: "VideoText 7",
      videoDescription: "Description 7",
      url: "/assets/videos/",
      cfrGrade: "",
      cambridgeGrade: "",
      category: [],
    },
    {
      title: "Titulo 8",
      videoText: "VideoText 8",
      videoDescription: "Description 8",
      url: "/assets/videos/",
      cfrGrade: "",
      cambridgeGrade: "",
      category: [],
    },
    {
      title: "Titulo 9",
      videoText: "VideoText 9",
      videoDescription: "Description 9",
      url: "/assets/videos/",
      cfrGrade: "",
      cambridgeGrade: "",
      category: [],
    },
    {
      title: "Titulo 10",
      videoText: "VideoText 10",
      videoDescription: "Description 10",
      url: "/assets/videos/",
      cfrGrade: "",
      cambridgeGrade: "",
      category: [],
    },
  ],
  chanelLogo: {
    url: "/assets/videos/",
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
      grades: [
        {
          grade: "A1",
          url: "/assets/videos/",
        },
        {
          grade: "A1+",
          url: "/assets/videos/",
        },
        {
          grade: "A2",
          url: "/assets/videos/",
        },
        {
          grade: "A2+",
          url: "/assets/videos/",
        },
        {
          grade: "B1",
          url: "/assets/videos/",
        },
        {
          grade: "B1+",
          url: "/assets/videos/",
        },
        {
          grade: "B2",
          url: "/assets/videos/",
        },
        {
          grade: "B2+",
          url: "/assets/videos/",
        },
      ],
      url: "/assets/videos/",
    },
    cambridge: {
      title: "CAMBRIDGE",
      grades: [
        {
          grade: "Starters",
          url: "/assets/videos/",
        },
        {
          grade: "Movers",
          url: "/assets/videos/",
        },
        {
          grade: "Fliers",
          url: "/assets/videos/",
        },
        {
          grade: "Key",
          url: "/assets/videos/",
        },
        {
          grade: "Preliminary",
          url: "/assets/videos/",
        },
        {
          grade: "First",
          url: "/assets/videos/",
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
