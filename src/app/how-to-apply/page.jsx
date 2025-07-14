'use client'
import PageHero from "@/components/PageHero";
import { FaUserPlus, FaCheckCircle, FaSignInAlt, FaUpload, FaMoneyBillWave, FaEnvelope, FaSignOutAlt } from "react-icons/fa";
import { BsFillPersonLinesFill, BsCardChecklist } from "react-icons/bs";
import { MdOutlinePhotoCamera } from "react-icons/md";

const HowToApply = () => {
  const steps = [
    {
      step: 1,
      title: "Visit Admission Portal",
      description: "Go to admission.aacoeargungu.edu.ng",
      icon: <FaUserPlus className="text-2xl text-blue-500" />,
      isSubStep: false
    },
    {
      step: 2,
      title: "Create Account",
      description: "Click on 'New Application' and fill in your details to create an account",
      icon: <FaUserPlus className="text-2xl text-blue-500" />,
      isSubStep: false
    },
    {
      step: 3,
      title: "Confirm Account",
      description: "Check your email for confirmation link and activate your account",
      icon: <FaCheckCircle className="text-2xl text-green-500" />,
      isSubStep: false
    },
    {
      step: 4,
      title: "Login to Account",
      description: "Return to admission.aacoeargungu.edu.ng and login with your credentials",
      icon: <FaSignInAlt className="text-2xl text-purple-500" />,
      isSubStep: false
    },
    {
      step: "4a",
      title: "Upload Referees",
      description: "Provide contact details of 2 referees (Academic/Professional)",
      icon: <BsFillPersonLinesFill className="text-2xl text-orange-500" />,
      isSubStep: true
    },
    {
      step: "4b",
      title: "Update Bio Data",
      description: "Complete all personal information sections accurately",
      icon: <BsFillPersonLinesFill className="text-2xl text-orange-500" />,
      isSubStep: true
    },
    {
      step: "4c",
      title: "Upload Result Sittings",
      description: "Select number of O'Level sittings (1 or 2 sittings maximum)",
      icon: <FaUpload className="text-2xl text-blue-400" />,
      isSubStep: true
    },
    {
      step: "4c1",
      title: "Upload Results",
      description: "Upload clear scanned copies of your O'Level results (WAEC/NECO/NABTEB)",
      icon: <FaUpload className="text-2xl text-blue-400" />,
      isSubStep: true
    },
    {
      step: "4d",
      title: "Pay Application Fee",
      description: "Generate payment invoice and pay ₦5,000 application fee online or at designated banks",
      icon: <FaMoneyBillWave className="text-2xl text-green-600" />,
      isSubStep: true
    },
    {
      step: "4e",
      title: "Confirm Payment",
      description: "Verify your payment status (may take up to 24 hours to reflect)",
      icon: <FaCheckCircle className="text-2xl text-green-500" />,
      isSubStep: true
    },
    {
      step: "4f",
      title: "Upload Passport Photograph",
      description: "Upload recent passport photo (white background, 200x200 pixels minimum)",
      icon: <MdOutlinePhotoCamera className="text-2xl text-red-500" />,
      isSubStep: true
    },
    {
      step: "4g",
      title: "Complete Application",
      description: "Select admission type (UTME/DE), choose programs, upload required documents and submit",
      icon: <BsCardChecklist className="text-2xl text-purple-600" />,
      isSubStep: true
    },
    {
      step: "4h",
      title: "Check Admission Status",
      description: "Regularly check your portal for admission status updates (notification emails will also be sent)",
      icon: <FaEnvelope className="text-2xl text-blue-500" />,
      isSubStep: true
    },
    {
      step: "4i",
      title: "Logout",
      description: "Always logout after each session for security",
      icon: <FaSignOutAlt className="text-2xl text-red-600" />,
      isSubStep: true
    }
  ];

  const requirements = {
    documents: [
      "Scanned O'Level results (WAEC/NECO/NABTEB)",
      "Scanned birth certificate or affidavit",
      "Scanned local government identification",
      "Scanned JAMB result slip (for UTME candidates)",
      "Scanned A'Level/ND/NCE certificate (for Direct Entry)",
      "Recent passport photograph (white background)"
    ],
    specifications: [
      "All documents must be in PDF or JPEG format",
      "Each file size should not exceed 200KB",
      "Passport photo must be recent (not more than 3 months old)",
      "Ensure all uploaded documents are clear and readable",
      "Names on all documents must match exactly"
    ],
    importantNotes: [
      "Application fee is non-refundable",
      "Incomplete applications will not be processed",
      "False information leads to automatic disqualification",
      "Check your email regularly for updates",
      "Admission is subject to meeting all requirements"
    ]
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <PageHero 
        img={"/apply-hero.jpg"} 
        title="How to Apply" 
        description="Step-by-step guide to our admission process" 
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Application Process</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Follow these steps carefully to complete your application to Adamu Augie College of Education, Argungu.
          </p>
        </div>

        {/* Application Steps */}
        <div className="mb-16">
          <div className="space-y-6">
            {steps.map((item, index) => (
              <div 
                key={index} 
                className={`flex items-start ${item.isSubStep ? 'ml-8 md:ml-12' : ''}`}
              >
                <div className={`flex-shrink-0 mr-4 mt-1 ${item.isSubStep ? 'text-gray-500' : 'text-blue-600 font-bold'}`}>
                  {item.step}
                </div>
                <div className={`flex-1 bg-white rounded-lg shadow-sm p-5 ${item.isSubStep ? 'border-l-4 border-blue-200' : 'border-l-4 border-blue-500'}`}>
                  <div className="flex items-center mb-2">
                    <div className="mr-3">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                  </div>
                  <p className="text-gray-700 ml-10">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Required Documents</h3>
            <ul className="space-y-3">
              {requirements.documents.map((doc, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Document Specifications</h3>
            <ul className="space-y-3">
              {requirements.specifications.map((spec, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span className="text-gray-700">{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-red-500">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Important Notes</h3>
            <ul className="space-y-3">
              {requirements.importantNotes.map((note, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span className="text-gray-700">{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">Need Help With Your Application?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-gray-800 mb-2">Admission Office Contacts:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>Email: admissions@aacoeargungu.edu.ng</li>
                <li>Phone: 08012345678, 09087654321</li>
                <li>Office Hours: 8:00am - 4:00pm (Weekdays)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-2">Technical Support:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>Portal Issues: support@aacoeargungu.edu.ng</li>
                <li>Phone: 08098765432</li>
                <li>WhatsApp: 08012345678</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-white p-4 rounded-lg border border-blue-300">
            <h4 className="font-bold text-gray-800 mb-2">Visit Us:</h4>
            <p className="text-gray-700">
              Admission Office, Admin Block, Adamu Augie College of Education, 
              P.M.B. 1014, Argungu, Kebbi State
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToApply;