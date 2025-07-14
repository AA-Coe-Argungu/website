"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaUserTie, FaPhone, FaEnvelope, FaChevronLeft } from "react-icons/fa";
import { colleges } from "@/data/colleges";
import PageHero from "@/components/PageHero";

export default function DepartmentPage() {
  const params = useParams();
  const collegeSlug = params.colleges;
  const departmentSlug = params.department;

  // Find the college and department data
  const college = colleges.find((c) => c.slug === collegeSlug);
  const department = college?.departments.find((d) => d.slug === departmentSlug);

  if (!college || !department) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Department not found</h1>
          <Link href="/colleges" className="text-emerald-600 hover:underline">
            Back to Colleges
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Department Header */}
      <PageHero
        img={"/about-hero.jpg"}
        back={{ link: "/colleges", name: college.name }}
        title="Our Colleges"
        description={`${college.name} - ${college.acronym}`}
      />

      {/* Department Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Department Profile</h2>
            <p className="text-gray-600 mb-6">{department.description}</p>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Programs Offered</h3>
              <div className="space-y-8">
                {department.programs.map((program, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-bold text-gray-800 mb-2">
                      {program.name} ({program.degree})
                    </h4>
                    <p className="text-gray-600 mb-3">
                      <strong>Duration:</strong> {program.duration}
                    </p>

                    <div className="mb-4">
                      <h5 className="font-bold text-gray-800 mb-2">Admission Requirements:</h5>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {program.admissionRequirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-bold text-gray-800 mb-2">Course List:</h5>
                      <div className="overflow-x-auto">
                        <table className="min-w-full">
                          <thead className="bg-gray-400 text-black">
                            <tr>
                              <th className="p-3 text-left">Code</th>
                              <th className="p-3 text-left">Title</th>
                              <th className="p-3 text-left">Level</th>
                              <th className="p-3 text-left">Unit</th>
                              <th className="p-3 text-left">Lecturer</th>
                              <th className="p-3 text-left">Semester</th>
                            </tr>
                          </thead>
                          <tbody>
                            {program.courses.map((course, i) => (
                              <tr key={i} className="border-b border-gray-600 text-black">
                                <td className="p-3">{course.code}</td>
                                <td className="p-3">{course.title}</td>
                                <td className="p-3">{course.level}</td>
                                <td className="p-3">{course.creditUnit}</td>
                                <td className="p-3">{course.lecturer}</td>
                                <td className="p-3">{course.semester}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* HOD Profile */}
          <div className="bg-white rounded-lg shadow-md p-8 h-fit">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FaUserTie className="text-emerald-600 mr-3" />
              Head of Department
            </h2>
            <div className="flex flex-col items-center text-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-emerald-100">
                <Image src={department.hod.image} alt={department.hod.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">{department.hod.name}</h3>
              <p className="text-gray-600 mb-4">{department.hod.qualification}</p>

              <div className="w-full space-y-3">
                <div className="flex items-center justify-center text-gray-700">
                  <FaPhone className="text-emerald-600 mr-2" />
                  {department.hod.contact.phone}
                </div>
                <div className="flex items-center justify-center text-gray-700">
                  <FaEnvelope className="text-emerald-600 mr-2" />
                  {department.hod.contact.email}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
