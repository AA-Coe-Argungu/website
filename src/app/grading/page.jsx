"use client";
import PageHero from "@/components/PageHero";
import { FaAward, FaExclamationTriangle, FaGraduationCap, FaChartLine, FaBookOpen, FaChalkboardTeacher } from "react-icons/fa";

const GradingSystem = () => {
  // Grading systems
  const gradingSystems = [
    {
      program: "NCE (Nigerian Certificate in Education)",
      description: "The grading system for the NCE program follows the national standards set by the National Commission for Colleges of Education (NCCE).",
      grades: [
        { score: "70-100", grade: "A", points: 4.0, remark: "Excellent" },
        { score: "60-69", grade: "AB", points: 3.5, remark: "Very Good" },
        { score: "50-59", grade: "B", points: 3.0, remark: "Good" },
        { score: "45-49", grade: "BC", points: 2.5, remark: "Credit" },
        { score: "40-44", grade: "C", points: 2.0, remark: "Pass" },
        { score: "0-39", grade: "F", points: 0.0, remark: "Fail" }
      ],
      calculation: "GPA is calculated by multiplying the grade points by the credit units for each course, summing these values, and dividing by the total credit units taken.",
      passing: "Minimum CGPA of 2.0 required to graduate",
      additional: "Teaching Practice and SIWES are graded separately as Pass/Fail"
    },
    {
      program: "Degree (B.Ed/B.A.Ed/B.Sc.Ed)",
      description: "The undergraduate degree programs follow the grading system approved by the National Universities Commission (NUC).",
      grades: [
        { score: "70-100", grade: "A", points: 5.0, remark: "Excellent" },
        { score: "60-69", grade: "B", points: 4.0, remark: "Very Good" },
        { score: "50-59", grade: "C", points: 3.0, remark: "Good" },
        { score: "45-49", grade: "D", points: 2.0, remark: "Pass" },
        { score: "40-44", grade: "E", points: 1.0, remark: "Weak Pass" },
        { score: "0-39", grade: "F", points: 0.0, remark: "Fail" }
      ],
      calculation: "CGPA is calculated by summing the products of course credit units and grade points for all semesters, divided by total credit units.",
      passing: "Minimum CGPA of 1.50 required to graduate (2.00 for honors)",
      additional: "Students must pass all compulsory courses in their major"
    }
  ];

  // Academic probation information
  const academicProbation = {
    definition: "Academic probation is a warning status given to students whose academic performance falls below the minimum required standard.",
    conditions: [
      "NCE students with semester GPA below 1.50",
      "Degree students with semester GPA below 1.00",
      "Failure in more than 50% of registered courses",
      "Consistent decline in academic performance over two consecutive semesters"
    ],
    consequences: [
      "Required to meet with academic advisor regularly",
      "Limited course load (maximum 15 credit units)",
      "Restricted from certain extracurricular activities",
      "Must show improvement in next semester to avoid dismissal"
    ],
    recovery: "To be removed from probation, students must achieve the minimum required GPA in the subsequent semester."
  };

  // Tips for graduating with good grades
  const successTips = [
    {
      title: "Effective Time Management",
      description: "Create a study schedule that balances coursework, assignments, and revision. Use planners or digital tools to stay organized.",
      icon: <FaChartLine className="text-emerald-500 text-2xl" />
    },
    {
      title: "Active Participation",
      description: "Attend all classes, take notes, and engage in discussions. Research shows active learners retain 75% more information.",
      icon: <FaChalkboardTeacher className="text-emerald-500 text-2xl" />
    },
    {
      title: "Utilize Academic Resources",
      description: "Make use of the library, tutoring services, faculty office hours, and study groups. Don't hesitate to ask for help when needed.",
      icon: <FaBookOpen className="text-emerald-500 text-2xl" />
    },
    {
      title: "Continuous Assessment Focus",
      description: "Treat every assignment and test seriously. CA scores often account for 30-40% of your final grade.",
      icon: <FaAward className="text-emerald-500 text-2xl" />
    },
    {
      title: "Exam Preparation Strategy",
      description: "Begin revision early, practice with past questions, and focus on understanding concepts rather than memorization.",
      icon: <FaGraduationCap className="text-emerald-500 text-2xl" />
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <PageHero 
        img={"/grading-hero.jpg"} 
        title="Academic Grading System" 
        description="Understanding our evaluation framework and academic policies" 
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Academic Grading Systems</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our institution maintains rigorous academic standards to ensure quality education. Below you'll find detailed information about our grading systems, academic standing policies, and strategies for success.
          </p>
        </div>

        {/* Grading Systems */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {gradingSystems.map((system, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-emerald-600 p-4">
                <h3 className="text-xl font-bold text-white">{system.program}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{system.description}</p>
                
                <h4 className="font-bold text-black mb-3">Grading Scale:</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-emerald-700 text-white">
                      <tr>
                        <th className="py-2 px-4 border-b">Score (%)</th>
                        <th className="py-2 px-4 border-b">Grade</th>
                        <th className="py-2 px-4 border-b">Points</th>
                        <th className="py-2 px-4 border-b">Remark</th>
                      </tr>
                    </thead>
                    <tbody>
                      {system.grades.map((grade, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-emerald-300 text-white" : "bg-emerald-500 text-whie"}>
                          <td className="py-2 px-4 border-b">{grade.score}</td>
                          <td className="py-2 px-4 border-b">{grade.grade}</td>
                          <td className="py-2 px-4 border-b">{grade.points}</td>
                          <td className="py-2 px-4 border-b">{grade.remark}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4">
                  <h4 className="font-bold text-gray-800 mb-2">GPA Calculation:</h4>
                  <p className="text-gray-700">{system.calculation}</p>
                </div>

                <div className="mt-4">
                  <h4 className="font-bold text-gray-800 mb-2">Graduation Requirement:</h4>
                  <p className="text-gray-700">{system.passing}</p>
                  {system.additional && (
                    <p className="text-gray-700 mt-1">{system.additional}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Probation */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-16">
          <div className="bg-yellow-500 p-4 flex items-center">
            <FaExclamationTriangle className="text-white text-2xl mr-3" />
            <h3 className="text-xl font-bold text-white">Academic Probation Policy</h3>
          </div>
          <div className="p-6">
            <p className="text-gray-700 mb-4">{academicProbation.definition}</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Conditions for Probation:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {academicProbation.conditions.map((condition, i) => (
                    <li key={i}>{condition}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Consequences:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {academicProbation.consequences.map((consequence, i) => (
                    <li key={i}>{consequence}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-2">Recovery from Probation:</h4>
              <p className="text-blue-700">{academicProbation.recovery}</p>
            </div>
          </div>
        </div>

        {/* Graduating with Good Grades */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Strategies for Academic Success</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-8">
            Achieving excellent academic results requires discipline, strategy, and effective use of available resources. Here are proven strategies our top students use:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {successTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:border-emerald-300 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    {tip.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{tip.title}</h3>
                </div>
                <p className="text-gray-700">{tip.description}</p>
              </div>
            ))}

            <div className="bg-emerald-50 rounded-lg shadow-sm p-6 border border-emerald-100 md:col-span-2 lg:col-span-3">
              <h3 className="text-xl font-bold text-emerald-800 mb-3">Additional Success Factors:</h3>
              <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span>Maintain consistent study habits rather than cramming before exams</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span>Develop good relationships with faculty and mentors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span>Balance academics with adequate rest and recreation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span>Set clear academic goals and track your progress</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span>Participate in relevant academic competitions and conferences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span>Seek internship opportunities to apply classroom knowledge</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradingSystem;