'use client'
import PageHero from "@/components/PageHero";
import { FaMoneyBillWave, FaHome, FaBook, FaPrint, FaUniversity } from "react-icons/fa";

const FeesPage = () => {
  // Fee structure data
  const feeStructure = {
    nce: {
      tuition: {
        indigene: 45000,
        nonIndigene: 58500, // 30% higher
        description: "Per semester tuition fee for NCE programs"
      },
      otherFees: [
        { name: "Registration Fee", amount: 5000, both: true },
        { name: "ICT Fee", amount: 3000, both: true },
        { name: "Library Fee", amount: 2000, both: true },
        { name: "Sports Fee", amount: 1500, both: true },
        { name: "Examination Fee", amount: 3000, both: true },
        { name: "Student Handbook", amount: 1000, both: true },
        { name: "ID Card", amount: 1000, both: true },
        { name: "Medical Fee", amount: 2500, both: true },
        { name: "Development Levy", amount: 5000, indigeneOnly: true },
        { name: "Development Levy", amount: 7500, nonIndigeneOnly: true }
      ],
      total: {
        indigene: 67500,
        nonIndigene: 84000
      }
    },
    degree: {
      tuition: {
        indigene: 65000,
        nonIndigene: 84500, // 30% higher
        description: "Per semester tuition fee for Degree programs"
      },
      otherFees: [
        { name: "Registration Fee", amount: 7000, both: true },
        { name: "ICT Fee", amount: 5000, both: true },
        { name: "Library Fee", amount: 3000, both: true },
        { name: "Sports Fee", amount: 2000, both: true },
        { name: "Examination Fee", amount: 5000, both: true },
        { name: "Student Handbook", amount: 1500, both: true },
        { name: "ID Card", amount: 1500, both: true },
        { name: "Medical Fee", amount: 3500, both: true },
        { name: "Development Levy", amount: 7000, indigeneOnly: true },
        { name: "Development Levy", amount: 10000, nonIndigeneOnly: true }
      ],
      total: {
        indigene: 94000,
        nonIndigene: 118500
      }
    },
    hostel: {
      options: [
        { type: "Standard Room (4 students)", amount: 15000, per: "semester" },
        { type: "Executive Room (2 students)", amount: 25000, per: "semester" },
        { type: "Premium Room (1 student)", amount: 40000, per: "semester" }
      ],
      notes: [
        "Hostel fees are the same for all students regardless of state of origin",
        "Hostel accommodation is optional but limited",
        "A refundable caution fee of ₦5,000 is required for hostel allocation"
      ]
    },
    additionalFees: [
      { name: "Examination Card Printing", amount: 1000, when: "Per semester" },
      { name: "Late Registration", amount: 5000, when: "After deadline" },
      { name: "Transcript Processing", amount: 10000, when: "On request" },
      { name: "Convocation Fee", amount: 15000, when: "Final year" },
      { name: "Project Supervision (Degree)", amount: 5000, when: "Final year" },
      { name: "Teaching Practice (NCE)", amount: 10000, when: "300 level" }
    ],
    paymentInfo: {
      accountDetails: {
        bank: "First Bank of Nigeria",
        accountName: "Adamu Augie College of Education",
        accountNumber: "1234567890"
      },
      instructions: [
        "All payments should be made to the college account only",
        "Include your registration number as payment reference",
        "Print and bring payment receipt to Bursary department",
        "Payment confirmation takes 24-48 hours",
        "Beware of fraudsters - the college will never ask for payment to personal accounts"
      ],
      deadlines: {
        firstSemester: "October 30, 2023",
        secondSemester: "March 15, 2024"
      }
    }
  };

  // Function to format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-NG', { 
      style: 'currency', 
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <PageHero 
        img={"/fees-hero.jpg"} 
        title="Fees Structure" 
        description="Complete breakdown of all academic and accommodation fees" 
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">College Fees Structure</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Below is the detailed breakdown of all fees for the 2023/2024 academic session. Note that non-indigenes pay 30% higher tuition fees.
          </p>
        </div>

        {/* Tuition Fees */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* NCE Fees */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-emerald-100">
            <div className="bg-emerald-600 p-4 flex items-center">
              <FaBook className="text-white text-2xl mr-3" />
              <h3 className="text-xl font-bold text-white">NCE Program Fees</h3>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-3">Tuition Fees:</h4>
                <p className="text-gray-700 mb-2">{feeStructure.nce.tuition.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-emerald-50 p-3 rounded-lg">
                    <p className="font-semibold text-emerald-800">Indigene</p>
                    <p className="text-xl font-bold">{formatCurrency(feeStructure.nce.tuition.indigene)}</p>
                  </div>
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <p className="font-semibold text-emerald-800">Non-Indigene</p>
                    <p className="text-xl font-bold">{formatCurrency(feeStructure.nce.tuition.nonIndigene)}</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-3">Other Compulsory Fees:</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="py-2 px-4 border-b text-left">Fee Type</th>
                        <th className="py-2 px-4 border-b text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {feeStructure.nce.otherFees.map((fee, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="py-2 px-4 border-b">{fee.name}</td>
                          <td className="py-2 px-4 border-b text-right">{formatCurrency(fee.amount)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                <h4 className="font-bold text-gray-800 mb-2">Total Estimated Fees Per Semester:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-emerald-800">For Indigenes:</p>
                    <p className="text-xl font-bold">{formatCurrency(feeStructure.nce.total.indigene)}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-emerald-800">For Non-Indigenes:</p>
                    <p className="text-xl font-bold">{formatCurrency(feeStructure.nce.total.nonIndigene)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Degree Fees */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-blue-100">
            <div className="bg-blue-600 p-4 flex items-center">
              <FaUniversity className="text-white text-2xl mr-3" />
              <h3 className="text-xl font-bold text-white">Degree Program Fees</h3>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-3">Tuition Fees:</h4>
                <p className="text-gray-700 mb-2">{feeStructure.degree.tuition.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="font-semibold text-blue-800">Indigene</p>
                    <p className="text-xl font-bold">{formatCurrency(feeStructure.degree.tuition.indigene)}</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <p className="font-semibold text-blue-800">Non-Indigene</p>
                    <p className="text-xl font-bold">{formatCurrency(feeStructure.degree.tuition.nonIndigene)}</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-3">Other Compulsory Fees:</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="py-2 px-4 border-b text-left">Fee Type</th>
                        <th className="py-2 px-4 border-b text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {feeStructure.degree.otherFees.map((fee, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="py-2 px-4 border-b">{fee.name}</td>
                          <td className="py-2 px-4 border-b text-right">{formatCurrency(fee.amount)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-bold text-gray-800 mb-2">Total Estimated Fees Per Semester:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-blue-800">For Indigenes:</p>
                    <p className="text-xl font-bold">{formatCurrency(feeStructure.degree.total.indigene)}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-800">For Non-Indigenes:</p>
                    <p className="text-xl font-bold">{formatCurrency(feeStructure.degree.total.nonIndigene)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hostel Accommodation */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-16 border border-purple-100">
          <div className="bg-purple-600 p-4 flex items-center">
            <FaHome className="text-white text-2xl mr-3" />
            <h3 className="text-xl font-bold text-white">Hostel Accommodation Fees</h3>
          </div>
          <div className="p-6">
            <div className="mb-6">
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="py-2 px-4 border-b text-left">Hostel Type</th>
                      <th className="py-2 px-4 border-b text-right">Fee</th>
                      <th className="py-2 px-4 border-b text-left">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeStructure.hostel.options.map((option, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="py-2 px-4 border-b">{option.type}</td>
                        <td className="py-2 px-4 border-b text-right">{formatCurrency(option.amount)}</td>
                        <td className="py-2 px-4 border-b">{option.per}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-bold text-gray-800 mb-2">Hostel Information:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {feeStructure.hostel.notes.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Fees */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-16 border border-yellow-100">
          <div className="bg-yellow-500 p-4 flex items-center">
            <FaMoneyBillWave className="text-white text-2xl mr-3" />
            <h3 className="text-xl font-bold text-white">Other Fees and Charges</h3>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Fee Description</th>
                    <th className="py-2 px-4 border-b text-right">Amount</th>
                    <th className="py-2 px-4 border-b text-left">When Applicable</th>
                  </tr>
                </thead>
                <tbody>
                  {feeStructure.additionalFees.map((fee, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="py-2 px-4 border-b">{fee.name}</td>
                      <td className="py-2 px-4 border-b text-right">{formatCurrency(fee.amount)}</td>
                      <td className="py-2 px-4 border-b">{fee.when}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Payment Information */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-green-100">
          <div className="bg-green-600 p-4 flex items-center">
            <FaPrint className="text-white text-2xl mr-3" />
            <h3 className="text-xl font-bold text-white">Payment Information</h3>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-800 mb-3">Bank Account Details:</h4>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="font-semibold">{feeStructure.paymentInfo.accountDetails.bank}</p>
                  <p className="mt-1">Account Name: {feeStructure.paymentInfo.accountDetails.accountName}</p>
                  <p className="mt-1">Account Number: {feeStructure.paymentInfo.accountDetails.accountNumber}</p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-3">Payment Deadlines:</h4>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p><span className="font-semibold">First Semester:</span> {feeStructure.paymentInfo.deadlines.firstSemester}</p>
                  <p className="mt-2"><span className="font-semibold">Second Semester:</span> {feeStructure.paymentInfo.deadlines.secondSemester}</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-bold text-gray-800 mb-3">Important Payment Instructions:</h4>
              <ul className="list-disc list-inside bg-yellow-50 p-4 rounded-lg border border-yellow-200 space-y-2">
                {feeStructure.paymentInfo.instructions.map((instruction, index) => (
                  <li key={index} className="text-gray-700">{instruction}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeesPage;