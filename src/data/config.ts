const config = {
  title: "Hardik Jain | Game Developer (Unity & Unreal Engine)",
  description: {
    long: "Passionate Game Developer specializing in Unity and Unreal Engine. I combine sharp problem-solving skills and clear communication with hands-on expertise in gameplay mechanics, AI systems, UI design, and animation to build engaging, polished games from the ground up.",
    short:
      "Passionate Game Developer specializing in Unity and Unreal Engine. Gameplay mechanics, AI systems, UI design, and animation.",
  },
  keywords: [
    "Hardik Jain",
    "portfolio",
    "game developer",
    "game programmer",
    "Unity",
    "Unreal Engine",
    "Unreal Engine 5",
    "C#",
    "Blueprints",
    "AI Behavior Systems",
    "Behavior Trees",
    "NavMesh",
    "Isla Sentinel",
    "gameplay mechanics",
  ],
  author: "Hardik Jain",
  email: "hardikjoy@gmail.com",
  phone: "+91-8958298119",
  location: "Indore, India",
  site: "https://hardikjain.dev",

  // for github stars button
  githubUsername: "AAkar-org",
  githubRepo: "gamedevportfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com",
    linkedin: "https://www.linkedin.com/in/hardik-jain-3790bb158",
    instagram: "https://www.instagram.com",
    facebook: "https://www.facebook.com",
    github: "https://github.com/AAkar-org",
  },
};
export { config };
