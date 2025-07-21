import PageHero from "@/components/PageHero";
import Image from "next/image";
import { FaCheckCircle, FaChartLine, FaUniversity, FaBook, FaUserGraduate } from "react-icons/fa";

const ProvostMessage = () => {
  const achievements = [
    {
      title: "NCCE Accreditation",
      description: "Full accreditation of all our NCE programs by the National Commission for Colleges of Education",
      year: "2023",
    },
    {
      title: "Student Enrollment Growth",
      description: "Increased student population by 40% over the last 3 years",
      year: "2021-2024",
    },
    {
      title: "Research Grant Awards",
      description: "Secured ₦50 million in research grants for staff projects",
      year: "2022",
    },
    {
      title: "Digital Infrastructure",
      description: "Completed campus-wide WiFi coverage and digital classrooms",
      year: "2023",
    },
  ];

  const ongoingProjects = [
    {
      title: "New Faculty Building",
      description: "Construction of a 500-capacity faculty building for Science Education",
      progress: "65%",
      completion: "December 2024",
    },
    {
      title: "E-Learning Platform",
      description: "Development of a comprehensive online learning management system",
      progress: "80%",
      completion: "August 2024",
    },
    {
      title: "Staff Housing Scheme",
      description: "Building of 20 units of staff housing within campus",
      progress: "30%",
      completion: "2025",
    },
  ];

  const upcomingInitiatives = [
    "Establishment of a Center for Educational Innovation",
    "Partnership with international teacher training institutions",
    "Introduction of new vocational education programs",
    "Campus security enhancement project",
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <PageHero img={"/admin.jpeg"} title="Provost's Message" description="From the desk of Professor Aliyu Mohammed" />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Provost's Message */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <div className="flex items-center mb-6">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mr-6 border-4 border-emerald-100">
                  <Image src="/provost.jpeg" alt="Professor Aliyu Mohammed" fill className="object-cover" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Dr. Abubakar Abubakar</h2>
                  <p className="text-emerald-600">Provost, AACOE Argungu</p>
                  <p className="text-gray-500">Since 2020</p>
                </div>
              </div>

              <div className="prose max-w-none text-gray-700">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Dear Stakeholders,</h3>

                <p className="mb-4">
                  It gives me great pleasure to welcome you to Adamu Augie College of Education, Argungu. As we navigate the evolving landscape of
                  teacher education in Nigeria, our commitment remains steadfast in producing highly qualified educators who will shape the minds of
                  future generations.
                </p>

                <p className="mb-4">
                  Over the past three years, we have made significant strides in infrastructure development, academic excellence, and community
                  engagement. Our recent accreditation success and growing student enrollment are testaments to our collective efforts.
                </p>

                <p className="mb-4">
                  We have embarked on ambitious projects to modernize our facilities and enhance the learning experience. The ongoing construction of
                  our new Faculty Building and the implementation of our E-Learning platform demonstrate our commitment to providing world-class
                  teacher education.
                </p>

                <p className="mb-4">
                  Our vision for the coming years includes expanding our international collaborations and introducing innovative programs that address
                  current educational needs. I invite you to join us in this exciting journey as we continue to raise the standard of teacher
                  education in Nigeria.
                </p>

                <p className="font-medium">
                  Professor Aliyu Mohammed
                  <br />
                  Provost, AACOE Argungu
                </p>
              </div>
            </div>

            {/* Ongoing Projects */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FaUniversity className="text-emerald-600 mr-3" />
                Ongoing Projects
              </h2>
              <div className="space-y-6">
                {ongoingProjects.map((project, index) => (
                  <div key={index} className="border-l-4 border-emerald-500 pl-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">Progress: {project.progress}</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Completion: {project.completion}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Key Achievements */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FaCheckCircle className="text-emerald-600 mr-3" />
                Key Achievements
              </h2>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex">
                    <div className="bg-emerald-100 text-emerald-600 p-2 rounded-full mr-4 flex-shrink-0">
                      <FaChartLine className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">{achievement.title}</h3>
                      <p className="text-gray-600 text-sm mb-1">{achievement.description}</p>
                      <span className="text-xs text-gray-500">{achievement.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Initiatives */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FaBook className="text-emerald-600 mr-3" />
                Upcoming Initiatives
              </h2>
              <ul className="space-y-3">
                {upcomingInitiatives.map((initiative, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-emerald-500 mr-2 mt-1">•</span>
                    <span className="text-gray-700">{initiative}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Facts */}
            <div className="bg-emerald-700 text-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <FaUserGraduate className="mr-3" />
                Quick Facts
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold">Years as Provost</h3>
                  <p className="text-emerald-100">4 years</p>
                </div>
                <div>
                  <h3 className="font-bold">Programs Accredited</h3>
                  <p className="text-emerald-100">18 NCE programs</p>
                </div>
                <div>
                  <h3 className="font-bold">Staff Promotions</h3>
                  <p className="text-emerald-100">25 in last 2 years</p>
                </div>
                <div>
                  <h3 className="font-bold">Community Projects</h3>
                  <p className="text-emerald-100">12 initiated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProvostMessage;
