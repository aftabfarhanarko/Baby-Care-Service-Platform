import { Baby, Users, Stethoscope } from "lucide-react";

export const services = [
  {
    id: 1,
    name: "Baby Care Service",
    icon: Baby,
    description: "Professional baby sitting and care services",
    details:
      "Our trained babysitters provide feeding, playing, safety and care.",
    charge: 500,
    features: [
      "Experienced Caretakers",
      "Safety Certified",
      "24/7 Available",
      "Activity Planning",
    ],
  },
  {
    id: 2,
    name: "Elderly Care Service",
    icon: Users,
    description: "Compassionate care for senior citizens",
    details:
      "Medication support, mobility help, companionship and daily care.",
    charge: 600,
    features: [
      "Medical Assistance",
      "Companion Care",
      "Mobility Support",
      "Meal Preparation",
    ],
  },
  {
    id: 3,
    name: "Sick People Service",
    icon: Stethoscope,
    description: "Professional nursing care at home",
    details:
      "Health monitoring, wound care, medication and emergency support.",
    charge: 700,
    features: [
      "Nursing Care",
      "Health Monitoring",
      "Medication Management",
      "Emergency Support",
    ],
  },
];

export default Servicepage;