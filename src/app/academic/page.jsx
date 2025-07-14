"use client";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import { staff } from "@/data/staff";
const Academics = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <PageHero 
        img={"/academic-hero.jpg"} 
        title="Academic Staff" 
        description="Meet our distinguished faculty members" 
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Academic Staff</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The college boasts a team of highly qualified and experienced academic staff committed to excellence in teaching and research.
          </p>
        </div>

        {/* Departments Accordion */}
        <div className="space-y-8">
          {staff.map((department, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex items-center bg-emerald-50 p-4 border-b border-emerald-100">
                {department.icon}
                <h3 className="text-xl font-bold text-gray-800 ml-3">{department.name}</h3>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {department.staff.map((staff, staffIndex) => (
                  <div key={staffIndex} className="flex items-start space-x-4 border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <div className="relative h-20 w-20 flex-shrink-0 rounded-full overflow-hidden border-2 border-emerald-100">
                      <Image src={staff.image} alt={staff.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{staff.name}</h4>
                      <p className="text-emerald-600 text-sm">{staff.position}</p>
                      <p className="text-gray-500 text-sm mt-1">{staff.qualification}</p>
                      <div className="mt-2">
                        <p className="text-sm font-medium text-gray-700">Courses:</p>
                        <ul className="text-sm text-gray-600 list-disc list-inside">
                          {staff.courses.map((course, i) => (
                            <li key={i}>{course}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Staff Statistics */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Academic Staff Statistics</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-emerald-50 p-6 rounded-lg text-center">
              <p className="text-4xl font-bold text-emerald-600">45+</p>
              <p className="text-gray-700 mt-2">Professors & Senior Lecturers</p>
            </div>
            <div className="bg-emerald-50 p-6 rounded-lg text-center">
              <p className="text-4xl font-bold text-emerald-600">80+</p>
              <p className="text-gray-700 mt-2">Lecturers & Assistant Lecturers</p>
            </div>
            <div className="bg-emerald-50 p-6 rounded-lg text-center">
              <p className="text-4xl font-bold text-emerald-600">15:1</p>
              <p className="text-gray-700 mt-2">Student to Lecturer Ratio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
