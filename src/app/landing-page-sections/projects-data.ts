import TripPlanner from "./assets/trip-planner.png";
import MasterPlanning from "./assets/master-planning.png";
import RealEstateAddOn from "./assets/real-estate-extension.png";
import VendurePlugin from "./assets/vendureio-plugin.png";

export const projects = [
  {
    title: "Trip Planner",
    description:
      "Trip Planner is a web application that enables users to effortlessly create and manage their trips. With Trip Planner, users can add itinerary stops to their trips and visualize them on a map interface.",
    tags: ["Next.js", "Tailwind CSS", "DaisyUI", "trpc"],
    link: "https://springboard-capstone-2-trip-planner.vercel.app",
    image: TripPlanner,
  },
  {
    title: "Master Planning",
    description:
      "Master Planning is a platform that empowers users to manage their personal plans, create goals, and organize tasks accordingly. It offers AI-generated tasks to expedite the planning process.",
    tags: ["ChatGPT", "Flask", "Python"],
    link: "https://springboard-capstone1.web.app/",
    image: MasterPlanning,
  },
  {
    title: "Real Estate Add-on",
    description:
      "Real Estate Add-on is a Google Chrome extension designed to assist realtors in accessing comprehensive information for real estate analysis. It is built using Vue.js and Zillow APIs itself.",
    tags: ["Vue.js", "Google Chrome", "Extension", "Reverse Engineering"],
    link: "https://chromewebstore.google.com/detail/real-estate-analysis-exte/lfphkkfnhgbjkljhaamchkfchlndjcgb",
    image: RealEstateAddOn,
  },
  {
    title: "VendureIO Simple Auth",
    description:
      "VendureIO Simple Auth is a plugin developed for VendureIO, providing users with a simple authentication method using only their email and a magic link.",
    tags: ["VendureIO", "Authentication", "Plugin"],
    link: "https://www.npmjs.com/package/@denz93/vendure-plugin-simple-auth/",
    image: VendurePlugin,
  },
];
