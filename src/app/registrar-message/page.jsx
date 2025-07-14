import PageHero from '@/components/PageHero';
import Image from 'next/image';
import { FaUserTie, FaHandshake, FaFileAlt, FaUsers, FaChartLine } from 'react-icons/fa';

const RegistrarMessage = () => {
  const keyResponsibilities = [
    {
      title: "Administrative Leadership",
      description: "Overseeing all non-academic operations of the college",
      icon: <FaUserTie className="text-emerald-600 text-2xl" />
    },
    {
      title: "Policy Implementation",
      description: "Ensuring compliance with government and NCCE regulations",
      icon: <FaFileAlt className="text-emerald-600 text-2xl" />
    },
    {
      title: "Records Management",
      description: "Maintaining institutional and student records",
      icon: <FaFileAlt className="text-emerald-600 text-2xl" />
    },
    {
      title: "Staff Coordination",
      description: "Managing non-teaching staff welfare and development",
      icon: <FaUsers className="text-emerald-600 text-2xl" />
    }
  ];

  const supportInitiatives = [
    "Streamlined student registration process (2023)",
    "Digital records management system implementation",
    "Staff training programs on administrative best practices",
    "Enhanced campus security protocols",
    "Improved student services delivery"
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <PageHero 
        img="/registrar-office.jpg" 
        title="Registrar's Message" 
        description="From the desk of Alhaji Ibrahim Musa" 
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Registrar's Message */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <div className="flex items-center mb-6">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mr-6 border-4 border-emerald-100">
                  <Image 
                    src="/registrar.jpg" 
                    alt="Alhaji Ibrahim Musa"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Alhaji Ibrahim Musa</h2>
                  <p className="text-emerald-600">Registrar, AACOE Argungu</p>
                  <p className="text-gray-500">Since 2019</p>
                </div>
              </div>

              <div className="prose max-w-none text-gray-700">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Dear Colleagues and Stakeholders,</h3>
                
                <p className="mb-4">
                  As the Chief Administrative Officer of Adamu Augie College of Education, it is my privilege to 
                  support the Provost in achieving our institutional goals while ensuring smooth day-to-day operations.
                </p>

                <p className="mb-4">
                  My office serves as the backbone of the college's administration, handling statutory compliance, 
                  records management, and coordination between academic and non-academic units. Over the past four 
                  years, we have made significant improvements in administrative efficiency through technology adoption 
                  and process optimization.
                </p>

                <p className="mb-4">
                  In supporting the Provost's vision, we have focused on creating an enabling environment for teaching, 
                  learning, and research. Our recent implementation of a digital records management system and the 
                  streamlining of student services are testaments to our commitment to administrative excellence.
                </p>

                <p className="mb-4">
                  I remain dedicated to ensuring that our administrative processes support rather than hinder the 
                  academic mission of the college. My office is always open to suggestions for improvement as we work 
                  together to make AACOE Argungu a model of administrative efficiency in teacher education.
                </p>

                <p className="font-medium">
                  Alhaji Ibrahim Musa<br />
                  Registrar, AACOE Argungu
                </p>
              </div>
            </div>

            {/* Support to Provost */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FaHandshake className="text-emerald-600 mr-3" />
                Supporting the Provost's Vision
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Policy Execution",
                    description: "Implementing academic and administrative policies set by the Provost"
                  },
                  {
                    title: "Resource Management",
                    description: "Ensuring optimal allocation and utilization of college resources"
                  },
                  {
                    title: "Statutory Compliance",
                    description: "Maintaining compliance with NCCE and government regulations"
                  },
                  {
                    title: "Stakeholder Engagement",
                    description: "Facilitating communication between administration and stakeholders"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Key Responsibilities */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FaUserTie className="text-emerald-600 mr-3" />
                Key Responsibilities
              </h2>
              <div className="space-y-6">
                {keyResponsibilities.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-4 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Initiatives */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FaChartLine className="text-emerald-600 mr-3" />
                Recent Initiatives
              </h2>
              <ul className="space-y-3">
                {supportInitiatives.map((initiative, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-emerald-500 mr-2 mt-1">•</span>
                    <span className="text-gray-700">{initiative}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Contacts */}
            <div className="bg-emerald-700 text-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">Contact Registrar's Office</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold">Office Hours</h3>
                  <p className="text-emerald-100">Monday-Friday: 8:00AM - 4:00PM</p>
                </div>
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-emerald-100">registrar@aacoe-argungu.edu.ng</p>
                </div>
                <div>
                  <h3 className="font-bold">Direct Line</h3>
                  <p className="text-emerald-100">+234 123 456 7890</p>
                </div>
                <div>
                  <h3 className="font-bold">Location</h3>
                  <p className="text-emerald-100">Administration Block, Room 101</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrarMessage;