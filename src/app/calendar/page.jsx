"use client"
import PageHero from "@/components/PageHero";
import { FaCalendarAlt, FaBook, FaChalkboardTeacher, FaGraduationCap, FaExclamationTriangle } from "react-icons/fa";

const AcademicCalendar = () => {
  // Current semester data - update these dates as needed
  const currentSemester = {
    title: "First Semester 2023/2024 Academic Session",
    startDate: "October 2, 2023",
    endDate: "February 9, 2024",
    weeks: 18,
    activities: [
      {
        date: "October 2 - 6, 2023",
        event: "Resumption/Registration",
        icon: <FaCalendarAlt className="text-emerald-500" />,
        type: "administrative"
      },
      {
        date: "October 9, 2023",
        event: "Lectures Begin",
        icon: <FaChalkboardTeacher className="text-emerald-500" />,
        type: "academic"
      },
      {
        date: "November 13 - 17, 2023",
        event: "First Continuous Assessment",
        icon: <FaBook className="text-emerald-500" />,
        type: "assessment"
      },
      {
        date: "December 18, 2023 - January 5, 2024",
        event: "Mid-Semester Break",
        icon: <FaCalendarAlt className="text-emerald-500" />,
        type: "break"
      },
      {
        date: "January 8, 2024",
        event: "Lectures Resume",
        icon: <FaChalkboardTeacher className="text-emerald-500" />,
        type: "academic"
      },
      {
        date: "January 22 - 26, 2024",
        event: "Second Continuous Assessment",
        icon: <FaBook className="text-emerald-500" />,
        type: "assessment"
      },
      {
        date: "February 5 - 9, 2024",
        event: "Revision Week",
        icon: <FaBook className="text-emerald-500" />,
        type: "academic"
      },
      {
        date: "February 12 - 23, 2024",
        event: "First Semester Examinations",
        icon: <FaGraduationCap className="text-emerald-500" />,
        type: "examination"
      },
      {
        date: "February 26, 2024",
        event: "Semester Break Begins",
        icon: <FaCalendarAlt className="text-emerald-500" />,
        type: "break"
      },
      {
        date: "March 4, 2024",
        event: "Examination Results Released",
        icon: <FaExclamationTriangle className="text-emerald-500" />,
        type: "result"
      }
    ],
    importantNotes: [
      "All students must complete registration within the first two weeks of resumption",
      "75% lecture attendance is required to qualify for examinations",
      "Late registration attracts a penalty fee after October 13, 2023",
      "Examination malpractice will lead to severe sanctions"
    ]
  };

  // Function to determine badge color based on event type
  const getBadgeColor = (type) => {
    switch(type) {
      case 'administrative':
        return 'bg-blue-100 text-blue-800';
      case 'academic':
        return 'bg-green-100 text-green-800';
      case 'assessment':
        return 'bg-purple-100 text-purple-800';
      case 'examination':
        return 'bg-red-100 text-red-800';
      case 'break':
        return 'bg-yellow-100 text-yellow-800';
      case 'result':
        return 'bg-indigo-100 text-indigo-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <PageHero 
        img={"/calendar-hero.jpg"} 
        title="Academic Calendar" 
        description={`${currentSemester.title} Schedule`} 
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Semester Overview */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{currentSemester.title}</h2>
              <p className="text-gray-600">
                {currentSemester.startDate} - {currentSemester.endDate} • {currentSemester.weeks} Weeks
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <a 
                href="/academic-calendar.pdf" 
                className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
                download
              >
                <FaCalendarAlt className="mr-2" />
                Download Calendar (PDF)
              </a>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Semester Progress</span>
              <span>65% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-emerald-600 h-2.5 rounded-full" 
                style={{ width: '65%' }}
              ></div>
            </div>
          </div>
        </div>

        {/* Calendar Timeline */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Key Dates and Activities</h3>
          <div className="space-y-6">
            {currentSemester.activities.map((activity, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mr-4 mt-1">
                  {activity.icon}
                </div>
                <div className="flex-1 bg-white rounded-lg shadow-sm p-4 border-l-4 border-emerald-500">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h4 className="text-lg font-semibold text-gray-800">{activity.event}</h4>
                    <span className={`text-sm px-3 py-1 rounded-full ${getBadgeColor(activity.type)}`}>
                      {activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-2">{activity.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <FaExclamationTriangle className="text-yellow-500 mr-2" />
            Important Notes
          </h3>
          <ul className="space-y-3">
            {currentSemester.importantNotes.map((note, index) => (
              <li key={index} className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span className="text-gray-700">{note}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Next Semester Preview */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Next Semester Preview</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Second Semester 2023/2024</h4>
              <p className="text-gray-600">Tentative Schedule: March 11 - July 19, 2024</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Key Dates</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Resumption: March 11, 2024</li>
                <li>• Lectures Begin: March 18, 2024</li>
                <li>• Examinations: July 1-12, 2024</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicCalendar;