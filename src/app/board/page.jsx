import PageHero from "@/components/PageHero";
import Image from "next/image";
import { FaUserTie, FaUniversity, FaBalanceScale, FaGraduationCap, FaUsers, FaBook } from "react-icons/fa";

const Board = () => {
  const boardMembers = [
    {
      name: "Dr. Hussaini Suleiman Kangiwa",
      position: "Chairman",
      role: "Governing Council Chairman",
      image: "/board-chairman.jpg",
    },
    // {
    //   name: "Prof. Aisha Mohammed",
    //   position: "Member",
    //   role: "Representative of National Commission for Colleges of Education",
    //   image: "/lecturer-3.jpg",
    // },
    // {
    //   name: "Barr. Yusuf Ibrahim",
    //   position: "Member",
    //   role: "Legal Representative",
    //   image: "/lecturer-5.jpg",
    // },
    // {
    //   name: "Dr. Fatima Abubakar",
    //   position: "Member",
    //   role: "Representative of Kebbi State Government",
    //   image: "/lecturer-6.jpg",
    // },
    // {
    //   name: "Dr. Samuel Okon",
    //   position: "Member",
    //   role: "Academic Staff Representative",
    //   image: "/lecturer-2.jpg",
    // },
    // {
    //   name: "Mrs. Grace Oluwaseun",
    //   position: "Member",
    //   role: "Non-Academic Staff Representative",
    //   image: "/dean-1.jpg",
    // },
    // {
    //   name: "Comrade Ibrahim Musa",
    //   position: "Member",
    //   role: "Student Representative",
    //   image: "/lecturer-1.jpg",
    // },
  ];

  const committees = [
    { name: "Executive Committee" },
    { name: "Finance & General Purpose" },
    { name: "Academic Committee" },
    { name: "Appointments & Promotions" },
    { name: "Works & Services" },
    { name: "Disciplinary Committee" },
    { name: "Student Welfare" },
    { name: "Research & Development" },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}

      <PageHero img={"/admin.jpeg"} title="Governing Council" description="Our distinguished board members" />
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Board of Governors</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The Governing Council is the highest policy-making body of the college, providing strategic direction and oversight to ensure the
            institution fulfills its mandate of excellence in teacher education.
          </p>
        </div>

        {/* Board Members */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
            <FaUsers className="text-emerald-600 mr-3" />
            Council Members
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-64 w-full">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    {member.position === "Chairman" && <FaUserTie className="text-emerald-600 text-2xl mr-3 mt-1" />}
                    {member.role.includes("Representative") && <FaUniversity className="text-emerald-600 text-2xl mr-3 mt-1" />}
                    {member.role.includes("Legal") && <FaBalanceScale className="text-emerald-600 text-2xl mr-3 mt-1" />}
                    {member.role.includes("Student") && <FaGraduationCap className="text-emerald-600 text-2xl mr-3 mt-1" />}
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                      <p className="text-emerald-600">{member.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Committees */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
            <FaUsers className="text-emerald-600 mr-3" />
            Council Committees
          </h3>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
              {committees.map((committee, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">{committee.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Governing Documents */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaBook className="text-emerald-600 mr-3" />
            Governing Documents
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "College Establishment Act", year: "1992" },
              { title: "Governing Council Charter", year: "2018" },
              { title: "Strategic Plan 2020-2025", year: "2020" },
              { title: "Financial Regulations", year: "2019" },
              { title: "Staff Conditions of Service", year: "2021" },
              { title: "Quality Assurance Policy", year: "2020" },
            ].map((doc, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <h4 className="font-bold text-gray-800">{doc.title}</h4>
                <p className="text-gray-500">Year: {doc.year}</p>
                <a href="#" className="text-emerald-600 hover:underline inline-flex items-center text-sm mt-2">
                  View Document
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
