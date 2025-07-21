import PageHero from "@/components/PageHero";
import Image from "next/image";
import { FaUserTie, FaChalkboardTeacher, FaBook, FaCalculator, FaUserGraduate } from "react-icons/fa";

const Management = () => {
  const managementTeam = [
    {
      name: "Dr. Abubakar Abubakar",
      position: "Provost",
      bio: "Professor of Education with over 25 years of experience in teacher education and administration.",
      image: "/provost.jpeg",
      responsibilities: ["Overall administration of the college", "Academic leadership", "Policy implementation", "External relations"],
    },
    {
      name: "Dr. Usman Gado Birnin Tudu",
      position: "Deputy Provost",
      bio: "Specialist in Curriculum Development with a PhD in Educational Administration.",
      image: "/deputy-provost.jpeg",
      responsibilities: ["Assisting the Provost", "Academic affairs oversight", "Staff development", "Student welfare"],
    },
    {
      name: "Alhaji Ibrahim Musa",
      position: "Registrar",
      bio: "Seasoned administrator with 20 years of experience in tertiary education management.",
      image: "/registrar.jpg",
      responsibilities: ["Secretary to Governing Council", "Student records management", "Administrative coordination", "Statutory compliance"],
    },
    {
      name: "Mrs. Amina Yusuf",
      position: "College Librarian",
      bio: "MLS holder with specialization in digital library systems and information management.",
      image: "/librarian.jpg",
      responsibilities: ["Library administration", "Information resources management", "Research support", "Digital library development"],
    },
    {
      name: "Mr. Abdullahi Tanko",
      position: "Chief Accountant",
      bio: "Fellow of the Institute of Chartered Accountants of Nigeria (ICAN) with 18 years experience.",
      image: "/accountant.jpg",
      responsibilities: ["Financial management", "Budget preparation", "Financial reporting", "Grant administration"],
    },
    {
      name: "Dr. Samuel Okoro",
      position: "Dean of Students",
      bio: "Educational psychologist with expertise in student development and counseling.",
      image: "/dean-students.jpg",
      responsibilities: ["Student affairs", "Disciplinary matters", "Student organizations", "Welfare services"],
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <PageHero img={"/admin.jpeg"} title="College Management" description="Meet our dedicated administrative team" />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Leadership Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our management team brings together experienced professionals committed to academic excellence and institutional development.
          </p>
        </div>

        {/* Management Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {managementTeam.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-64 w-full">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {member.position === "Provost" && <FaUserTie className="text-emerald-600 text-2xl mr-3" />}
                  {member.position === "Deputy Provost" && <FaChalkboardTeacher className="text-emerald-600 text-2xl mr-3" />}
                  {member.position === "Registrar" && <FaBook className="text-emerald-600 text-2xl mr-3" />}
                  {member.position === "College Librarian" && <FaBook className="text-emerald-600 text-2xl mr-3" />}
                  {member.position === "Chief Accountant" && <FaCalculator className="text-emerald-600 text-2xl mr-3" />}
                  {member.position === "Dean of Students" && <FaUserGraduate className="text-emerald-600 text-2xl mr-3" />}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                    <p className="text-emerald-600">{member.position}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {member.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Organizational Structure */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Organizational Structure</h2>
          <div className="relative h-96 w-full rounded-lg overflow-hidden border border-gray-200">
            <Image src="/org-chart.jpg" alt="College Organizational Structure" fill className="object-contain" />
          </div>
          <div className="mt-6 text-center">
            <a href="/org-chart.pdf" className="inline-flex items-center text-emerald-600 font-semibold hover:underline" download>
              Download Full Organizational Chart (PDF)
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;
