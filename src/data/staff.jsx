import { FaChalkboardTeacher, FaUserGraduate, FaBookOpen, FaFlask, FaLanguage, FaCalculator } from "react-icons/fa";
export const staff = [
  {
    name: "School of Science Education",
    icon: <FaChalkboardTeacher className="text-emerald-600 text-2xl" />,
    staff: [
      {
        name: "Malam Umar Isah",
        position: "Head of Department",
        qualification: "Computer Science Department",
        image: "/hod-com-sci.jpg",
        // courses: ["Educational Psychology", "Child Development"],
      },
      {
        name: "Malam Haruna Muhammad",
        position: "Head of Department",
        qualification: "Mathematics Department",
        image: "/hod-math.jpg",
        // courses: ["Curriculum Development", "Teaching Methods"],
      },
    ],
  },
  {
    name: "School of Early Child Care Development Education",
    icon: <FaLanguage className="text-emerald-600 text-2xl" />,
    staff: [
      {
        name: "Malam Basheer Hassan Aliyu",
        position: "Head of Department",
        qualification: "Primary Education Department",
        image: "/hod-ped.jpg",
        // courses: ["English Literature", "Linguistics"],
      },
      {
        name: "Malam Harisu Ahmad ",
        position: "Head of Department",
        qualification: "Early Childhood Care Development Education Department",
        image: "/hod-eccde.jpg",
        // courses: ["English Literature", "Linguistics"],
      },
      // Add more staff...
    ],
  },
  {
    name: "School of Sciences",
    icon: <FaFlask className="text-emerald-600 text-2xl" />,
    staff: [
      {
        name: "Dr. Sa'ad Ibrahim",
        position: "Desk Officer ",
        qualification: "Geography Department",
        image: "/col-desk-officer.jpg",
        // courses: ["Biochemistry", "Molecular Biology"],
      },
      // Add more staff...
    ],
  },
  // {
  //   name: "School of Vocational and Technical Education",
  //   icon: <FaCalculator className="text-emerald-600 text-2xl" />,
  //   staff: [
  //     {
  //       name: "Dr. Ibrahim K. Bello",
  //       position: "Head of Department",
  //       qualification: "PhD Technical Education",
  //       image: "/dean-1.jpg",
  //       courses: ["Technical Drawing", "Workshop Practice"],
  //     },
  //     // Add more staff...
  //   ],
  // },
  // Add more departments...
];
