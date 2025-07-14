import { FaChalkboardTeacher, FaUserGraduate, FaBookOpen, FaFlask, FaLanguage, FaCalculator } from "react-icons/fa";
export const staff = [
  {
    name: "School of Education",
    icon: <FaChalkboardTeacher className="text-emerald-600 text-2xl" />,
    staff: [
      {
        name: "Dr. Aminu S. Bello",
        position: "Head of Department",
        qualification: "PhD Educational Psychology",
        image: "/staff/education-1.jpg",
        courses: ["Educational Psychology", "Child Development"],
      },
      {
        name: "Prof. Halima Y. Abdullahi",
        position: "Professor",
        qualification: "PhD Curriculum Studies",
        image: "/staff/education-2.jpg",
        courses: ["Curriculum Development", "Teaching Methods"],
      },
      // Add more staff...
    ],
  },
  {
    name: "School of Arts and Social Sciences",
    icon: <FaLanguage className="text-emerald-600 text-2xl" />,
    staff: [
      {
        name: "Dr. Yakubu G. Mohammed",
        position: "Head of Department",
        qualification: "PhD English Literature",
        image: "/staff/arts-1.jpg",
        courses: ["English Literature", "Linguistics"],
      },
      // Add more staff...
    ],
  },
  {
    name: "School of Sciences",
    icon: <FaFlask className="text-emerald-600 text-2xl" />,
    staff: [
      {
        name: "Dr. Fatima A. Sani",
        position: "Head of Department",
        qualification: "PhD Biochemistry",
        image: "/staff/science-1.jpg",
        courses: ["Biochemistry", "Molecular Biology"],
      },
      // Add more staff...
    ],
  },
  {
    name: "School of Vocational and Technical Education",
    icon: <FaCalculator className="text-emerald-600 text-2xl" />,
    staff: [
      {
        name: "Dr. Ibrahim K. Bello",
        position: "Head of Department",
        qualification: "PhD Technical Education",
        image: "/staff/vocational-1.jpg",
        courses: ["Technical Drawing", "Workshop Practice"],
      },
      // Add more staff...
    ],
  },
  // Add more departments...
];
