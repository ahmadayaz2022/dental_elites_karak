import doctor1 from "../assets/images/doctors/dr-amir.jpeg";
import doctor2 from "../assets/images/doctors/mr-anwar.jpeg";

export const doctors = [
  {
    id: 1,
    name: "Dr. Amir Khattak",
    designation: "Dental Surgeon",
    experience: "10+ Years",
    qualification: "BDS",
    image: doctor1,
    description:
      "Specializes in general dentistry, restorative procedures, cosmetic dentistry, and oral surgery.",
    specialties: [
      "Dental Implants",
      "Root Canal",
      "Smile Design",
      "Tooth Extraction",
    ],
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },

  {
    id: 2,
    name: "Mr. Anwar Khattak",
    designation: "Dental Technologist",
    experience: "8+ Years",
    qualification: "Dental Technology",
    image: doctor2,
    description:
      "Expert in crowns, bridges, dentures, veneers, and advanced dental laboratory procedures.",
    specialties: [
      "Crowns",
      "Bridges",
      "Dentures",
      "Veneers",
    ],
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
];