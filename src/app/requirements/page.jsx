'use client'
import PageHero from "@/components/PageHero";
import { FaCheckCircle, FaBook, FaUserGraduate, FaClipboardList, FaGraduationCap } from "react-icons/fa";

const Requirement = () => {
  // NCE Programs Requirements
  const ncePrograms = [
    {
      name: "NCE Primary Education Studies",
      duration: "3 Years",
      requirements: [
        "Minimum of 5 credits in SSCE/GCE/NECO/NABTEB including English Language and Mathematics",
        "Credit passes in at least 3 relevant subjects to the course of study",
        "Minimum score of 120 in UTME (for UTME candidates)",
        "Pass in the College's screening examination",
        "Completion of JAMB registration for UTME candidates"
      ],
      notes: [
        "Direct Entry candidates must have National Diploma (ND) with at least lower credit in relevant field",
        "Candidates with Teachers Grade II Certificate with 5 merits including English and Mathematics may be considered"
      ]
    },
    {
      name: "NCE Computer Science Education",
      duration: "3 Years",
      requirements: [
        "5 credits including English, Mathematics, Physics and any other 2 science subjects",
        "Minimum UTME score of 140 for Computer Science programs",
        "Credit in Further Mathematics is an added advantage",
        "Pass in the College's aptitude test for Computer Science"
      ],
      notes: [
        "Direct Entry candidates with ND in Computer Science or related field may be admitted to 200 level",
        "Basic computer literacy is required for all candidates"
      ]
    },
    // Add more NCE programs as needed
  ];

  // Degree Programs Requirements
  const degreePrograms = [
    {
      name: "B.Ed. Educational Administration",
      duration: "4 Years",
      requirements: [
        "Minimum of 5 credits in SSCE/GCE/NECO including English and Mathematics",
        "Minimum UTME score of 160",
        "Credit in Economics or Commerce is required",
        "Post-UTME screening score of at least 50%",
        "Acceptable score in UTME subject combination (English, Mathematics, Economics and any other subject)"
      ],
      notes: [
        "Direct Entry candidates require NCE with minimum of merit pass or ND with lower credit in relevant field",
        "A'Level passes in relevant subjects may be considered"
      ]
    },
    {
      name: "B.Sc. (Ed) Mathematics",
      duration: "4 Years",
      requirements: [
        "5 credits including English, Mathematics and Physics or Chemistry",
        "Minimum UTME score of 170 for Science programs",
        "Credit in Further Mathematics is an added advantage",
        "Post-UTME mathematics test score of at least 60%"
      ],
      notes: [
        "Direct Entry candidates require NCE with Mathematics major or ND in Mathematics/Statistics",
        "Candidates must show strong aptitude for mathematical reasoning"
      ]
    },
    // Add more degree programs as needed
  ];

  // General Admission Requirements
  const generalRequirements = {
    nce: [
      "Minimum age of 16 years at the time of application",
      "Medical certificate of fitness from a government hospital",
      "Birth certificate or sworn declaration of age",
      "Two recent passport photographs",
      "Certificate of Local Government of Origin",
      "Completed application form with required documents"
    ],
    degree: [
      "Minimum age of 16 years for UTME and 18 for Direct Entry",
      "Valid JAMB registration number",
      "O'Level result (WAEC/NECO/NABTEB) with not more than two sittings",
      "Medical fitness certificate",
      "Birth certificate or sworn affidavit",
      "Completed post-UTME screening form"
    ],
    both: [
      "All candidates must participate in the admission screening exercise",
      "Submission of original credentials for verification",
      "Acceptance fee payment within stipulated time",
      "All documents must be submitted before registration deadline",
      "Foreign candidates must have equivalent qualifications verified by NUC/NCCE"
    ]
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <PageHero 
        img={"/admission-hero.jpg"} 
        title="Admission Requirements" 
        description="Entry qualifications for our NCE and Degree programs" 
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Program Admission Requirements</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our institution maintains clear admission standards to ensure students are prepared for academic success. Below you'll find detailed entry requirements for all programs.
          </p>
        </div>

        {/* NCE Programs Section */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <FaUserGraduate className="text-emerald-600 text-3xl mr-3" />
            <h2 className="text-2xl font-bold text-gray-800">NCE Programs Requirements</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {ncePrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className="bg-emerald-600 p-4">
                  <h3 className="text-xl font-bold text-white">{program.name}</h3>
                  <p className="text-emerald-100">Duration: {program.duration}</p>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                    <FaClipboardList className="mr-2 text-emerald-500" />
                    Entry Requirements:
                  </h4>
                  <ul className="space-y-2 mb-4">
                    {program.requirements.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <FaCheckCircle className="text-emerald-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {program.notes.length > 0 && (
                    <>
                      <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                        <FaBook className="mr-2 text-blue-500" />
                        Additional Notes:
                      </h4>
                      <ul className="space-y-2">
                        {program.notes.map((note, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span className="text-gray-700">{note}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Degree Programs Section */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <FaGraduationCap className="text-blue-600 text-3xl mr-3" />
            <h2 className="text-2xl font-bold text-gray-800">Degree Programs Requirements</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {degreePrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className="bg-blue-600 p-4">
                  <h3 className="text-xl font-bold text-white">{program.name}</h3>
                  <p className="text-blue-100">Duration: {program.duration}</p>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                    <FaClipboardList className="mr-2 text-blue-500" />
                    Entry Requirements:
                  </h4>
                  <ul className="space-y-2 mb-4">
                    {program.requirements.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <FaCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {program.notes.length > 0 && (
                    <>
                      <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                        <FaBook className="mr-2 text-blue-500" />
                        Additional Notes:
                      </h4>
                      <ul className="space-y-2">
                        {program.notes.map((note, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span className="text-gray-700">{note}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* General Requirements */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">General Admission Requirements</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h3 className="font-bold text-emerald-800 mb-3 text-lg">For NCE Programs</h3>
              <ul className="space-y-2">
                {generalRequirements.nce.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-emerald-500 mr-2">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-800 mb-3 text-lg">For Degree Programs</h3>
              <ul className="space-y-2">
                {generalRequirements.degree.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-bold text-purple-800 mb-3 text-lg">For All Programs</h3>
              <ul className="space-y-2">
                {generalRequirements.both.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-yellow-800 mb-3">Important Notes</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span>All admission offers are provisional until final verification of credentials</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span>Meeting minimum requirements does not guarantee admission due to limited spaces</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span>Application deadlines are strictly enforced</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span>All admitted students must complete registration within two weeks of admission</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requirement;