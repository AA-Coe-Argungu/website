import PageHero from "@/components/PageHero";
import Image from "next/image";
import { FaHistory, FaBullseye, FaEye, FaUsers, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <PageHero img={"/about-hero.jpg"} title="About AACOE Argungu" description="Excellence in Teacher Education Since 1992" />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* History Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <FaHistory className="text-emerald-600 text-3xl mr-4" />
            <h2 className="text-3xl font-bold text-gray-800">Our History</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-4">
                Adamu Augie College of Education, Argungu was established in 1992 by the Kebbi State Government to address the critical need for
                qualified teachers in Northern Nigeria.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                The college started with just 200 students and 15 academic staff, offering only NCE programs in core subjects. Today, we have grown to
                become one of the leading teacher education institutions in Nigeria.
              </p>
              <p className="text-lg text-gray-600">
                In 2005, we expanded our programs to include degree courses in affiliation with Usmanu Danfodiyo University, Sokoto, marking a
                significant milestone in our development.
              </p>
            </div>
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image src="/admin.jpeg" alt="College History" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <FaBullseye className="text-emerald-600 text-3xl mr-4" />
                <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-600">
                To produce highly qualified, morally sound, and professionally competent teachers through quality teacher education, research, and
                community service that meets national and global standards.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <FaEye className="text-emerald-600 text-3xl mr-4" />
                <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-600">
                To be a center of excellence in teacher education that produces graduates capable of transforming the educational landscape of Nigeria
                and beyond through innovative teaching and research.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Excellence", description: "Commitment to the highest standards in teaching and learning" },
              { title: "Integrity", description: "Upholding moral and ethical principles in all our activities" },
              { title: "Innovation", description: "Embracing creativity and modern teaching methodologies" },
              { title: "Professionalism", description: "Maintaining competence and dedication in our work" },
              { title: "Service", description: "Contributing to the development of our community and nation" },
              { title: "Diversity", description: "Valuing and respecting individual differences" },
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-emerald-600 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">College Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Aliyu Mohammed", position: "Provost", image: "/provost.jpeg" },
              { name: "Dr. Usman Gado Birnin Tudu", position: "Deputy Provost", image: "/deputy-provost.jpeg" },
              { name: "Alhaji Ibrahim Musa", position: "Registrar", image: "/dean-1.jpg" },
            ].map((leader, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-64 w-full">
                  <Image src={leader.image} alt={leader.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{leader.name}</h3>
                  <p className="text-emerald-600">{leader.position}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-emerald-700 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-2xl mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Address</h3>
                <p>Along Birnin Kebbi Road, Argungu, Kebbi State, Nigeria</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaPhone className="text-2xl mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p>+234 123 456 7890</p>
                <p>+234 987 654 3210</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaEnvelope className="text-2xl mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p>info@aacoe-argungu.edu.ng</p>
                <p>admissions@aacoe-argungu.edu.ng</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
