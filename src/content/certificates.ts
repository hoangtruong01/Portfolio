import microsoftLogo from "../assets/images/logos/microsoft.svg";
import sapLogo from "../assets/images/logos/sap.svg";
import googleLogo from "../assets/images/logos/google.svg";
import ibmLogo from "../assets/images/logos/IBM_logo.svg.webp";
import awsLogo from "../assets/images/logos/Amazon_Web_Services_Logo.svg.webp";
import skillupLogo from "../assets/images/logos/image.png";
import metaLogo from "../assets/images/logos/images.jpg";
import fptLogo from "../assets/images/logos/Logo_Trường_Đại_học_FPT.svg.webp";
import javaLogo from "../assets/images/logos/360x360-1-.png";

export interface Certificate {
  name: string;
  issuer: string;
  issuerShort: string;
  issuerColor: string;
  issuerLogo: string;
  date: string;
  url: string;
}

export const certificates: Certificate[] = [
  {
    name: "Microsoft IT Support Specialist",
    issuer: "Microsoft",
    issuerShort: "MS",
    issuerColor: "#00a4ef",
    issuerLogo: microsoftLogo,
    date: "Apr 2026",
    url: "https://www.coursera.org/account/accomplishments/specialization/RY9D6VF8A3UO",
  },
  {
    name: "SAP Business Analyst",
    issuer: "SAP",
    issuerShort: "SAP",
    issuerColor: "#0faaff",
    issuerLogo: sapLogo,
    date: "Apr 2026",
    url: "https://www.coursera.org/account/accomplishments/specialization/2GETAIUSHU3C",
  },
  {
    name: "Google IT Support",
    issuer: "Google",
    issuerShort: "G",
    issuerColor: "#4285f4",
    issuerLogo: googleLogo,
    date: "Apr 2026",
    url: "https://www.coursera.org/account/accomplishments/specialization/GWQC4JFRX4AK",
  },
  {
    name: "IBM AI Developer",
    issuer: "IBM",
    issuerShort: "IBM",
    issuerColor: "#0f62fe",
    issuerLogo: ibmLogo,
    date: "Mar 2026",
    url: "https://www.coursera.org/account/accomplishments/specialization/DJVNUEQZTYMW",
  },
  {
    name: "IBM AI Product Manager",
    issuer: "IBM & SkillUp",
    issuerShort: "IBM",
    issuerColor: "#0f62fe",
    issuerLogo: ibmLogo,
    date: "Mar 2026",
    url: "https://www.coursera.org/account/accomplishments/specialization/RJT6T74OPOCH",
  },
  {
    name: "AWS Fundamentals",
    issuer: "Amazon Web Services",
    issuerShort: "AWS",
    issuerColor: "#ff9900",
    issuerLogo: awsLogo,
    date: "Jan 2026",
    url: "https://www.coursera.org/account/accomplishments/specialization/QSSSAH2E5FFR",
  },
  {
    name: "IBM Data Science",
    issuer: "IBM",
    issuerShort: "IBM",
    issuerColor: "#0f62fe",
    issuerLogo: ibmLogo,
    date: "Jan 2026",
    url: "https://www.coursera.org/account/accomplishments/specialization/E4ID6O95ZG0C",
  },
  {
    name: "Meta Back-End Developer",
    issuer: "Meta",
    issuerShort: "META",
    issuerColor: "#0668e1",
    issuerLogo: metaLogo,
    date: "Jan 2026",
    url: "https://www.coursera.org/account/accomplishments/specialization/QAN5XXA0PQ71",
  },
  {
    name: "Scrum Master Certification Prep",
    issuer: "SkillUp EdTech",
    issuerShort: "SU",
    issuerColor: "#6c63ff",
    issuerLogo: skillupLogo,
    date: "Jan 2026",
    url: "https://www.coursera.org/account/accomplishments/specialization/51AKF76LICL5",
  },
  {
    name: "Google UX Design",
    issuer: "Google",
    issuerShort: "G",
    issuerColor: "#4285f4",
    issuerLogo: googleLogo,
    date: "Dec 2025",
    url: "https://www.coursera.org/account/accomplishments/specialization/AG9OFNBA2U92",
  },
  {
    name: "Google Data Analytics",
    issuer: "Google",
    issuerShort: "G",
    issuerColor: "#34a853",
    issuerLogo: googleLogo,
    date: "Dec 2025",
    url: "https://www.coursera.org/account/accomplishments/specialization/KM1FUY6Y5TEL",
  },
  {
    name: "Project Management Principles and Practices",
    issuer: "University of California, Irvine",
    issuerShort: "UCI",
    issuerColor: "#002b49",
    issuerLogo: "",
    date: "Dec 2025",
    url: "https://www.coursera.org/account/accomplishments/specialization/4JZVKP3G004O",
  },
  {
    name: "IBM Full-Stack JavaScript Developer",
    issuer: "IBM",
    issuerShort: "IBM",
    issuerColor: "#0f62fe",
    issuerLogo: ibmLogo,
    date: "Dec 2025",
    url: "https://www.coursera.org/account/accomplishments/specialization/PRVSYDVF2BYC",
  },
  {
    name: "Google Project Management",
    issuer: "Google",
    issuerShort: "G",
    issuerColor: "#4285f4",
    issuerLogo: googleLogo,
    date: "Dec 2025",
    url: "https://www.coursera.org/account/accomplishments/specialization/W2SUTK3KKXBX",
  },
  {
    name: "Meta Front-End Developer",
    issuer: "Meta",
    issuerShort: "META",
    issuerColor: "#0668e1",
    issuerLogo: metaLogo,
    date: "Nov 2025",
    url: "https://www.coursera.org/account/accomplishments/specialization/8QY7CAAAWM5K",
  },
  {
    name: "Core Java for Beginners",
    issuer: "LearnKartS",
    issuerShort: "LKS",
    issuerColor: "#ff6b00",
    issuerLogo: javaLogo,
    date: "Nov 2025",
    url: "https://www.coursera.org/account/accomplishments/specialization/J00ZOA8VCAUN",
  },
  {
    name: "Amazon Junior Software Developer",
    issuer: "Amazon",
    issuerShort: "AWS",
    issuerColor: "#ff9900",
    issuerLogo: awsLogo,
    date: "Nov 2025",
    url: "https://www.coursera.org/account/accomplishments/specialization/Y3MYAWQKA5VU",
  },
  {
    name: "Digital Transformation: Key Activities",
    issuer: "FPT University",
    issuerShort: "FPT",
    issuerColor: "#f27023",
    issuerLogo: fptLogo,
    date: "Nov 2025",
    url: "https://www.coursera.org/account/accomplishments/badge/3_AGbtByRf6wBm7QcoX-_Q",
  },
  {
    name: "Digital Ecosystem: Governance to Business",
    issuer: "FPT University",
    issuerShort: "FPT",
    issuerColor: "#f27023",
    issuerLogo: fptLogo,
    date: "Nov 2025",
    url: "https://www.coursera.org/account/accomplishments/badge/XJuJFRMSSgabiRUTEloG6A",
  },
];
