export const colleges = [
  {
    name: "College of Education",
    acronym: "COED",
    slug: "coed",
    description: "The flagship college offering comprehensive teacher education programs to produce qualified educators for primary and secondary schools.",
    image: "/college-education.jpg",
    departments: [
      {
        name: "Arts and Social Sciences Education",
        slug: "arts-social-sciences",
        description: "Training teachers for humanities and social science subjects with innovative pedagogical approaches.",
        image: "/dept-arts.jpg",
        programs: [
          {
            name: "NCE Social Studies",
            degree: "NCE",
            duration: "3 years",
            admissionRequirements: [
              "5 O'Level credits including English, History/Government, and any 3 other subjects",
              "Minimum UTME score of 160",
              "Credit pass in Social Studies preferred"
            ],
            courses: [
              {
                code: "SSE 101",
                title: "Introduction to Social Studies",
                level: "100",
                creditUnit: 2,
                lecturer: "Dr. Ahmed Musa",
                semester: "First"
              },
              {
                code: "SSE 102",
                title: "Nigerian Peoples and Culture",
                level: "100",
                creditUnit: 2,
                lecturer: "Prof. Binta Hassan",
                semester: "Second"
              },
              // More courses...
            ]
          },
          {
            name: "B.Ed Social Studies",
            degree: "B.Ed",
            duration: "4 years",
            admissionRequirements: [
              "5 O'Level credits including English, Mathematics, and 3 relevant subjects",
              "Minimum UTME score of 180",
              "Direct Entry: NCE/ND in related fields"
            ],
            courses: [
              {
                code: "EDU 201",
                title: "Foundations of Education",
                level: "200",
                creditUnit: 3,
                lecturer: "Dr. Amina Bello",
                semester: "First"
              },
              {
                code: "SSE 211",
                title: "Advanced Social Studies Methods",
                level: "200",
                creditUnit: 3,
                lecturer: "Dr. Yusuf Mohammed",
                semester: "First"
              },
              // More courses...
            ]
          }
        ],
        hod: {
          name: "Dr. Amina Bello",
          qualification: "PhD in Social Studies Education",
          image: "/hod-aminabello.jpg",
          contact: { phone: "+2348012345678", email: "ass@aacoe.edu.ng" }
        }
      }
    ],
    dean: {
      name: "Prof. Fatima Ahmed",
      qualification: "PhD in Educational Administration",
      image: "/dean-fatima.jpg",
      contact: { phone: "+2348034567890", email: "coed@aacoe.edu.ng" }
    }
  },
  {
    name: "College of Science Education",
    acronym: "COSED",
    slug: "cosed",
    description: "Specializing in training science educators with strong theoretical knowledge and practical skills.",
    image: "/college-science.jpg",
    departments: [
      {
        name: "Mathematics Education",
        slug: "mathematics-education",
        description: "Developing mathematics teachers with strong problem-solving skills.",
        image: "/dept-math.jpg",
        programs: [
          {
            name: "NCE Mathematics",
            degree: "NCE",
            duration: "3 years",
            admissionRequirements: [
              "5 O'Level credits including English, Mathematics, and 3 science subjects",
              "Minimum UTME score of 160"
            ],
            courses: [
              {
                code: "MTH 101",
                title: "General Mathematics I",
                level: "100",
                creditUnit: 3,
                lecturer: "Dr. Grace Okoro",
                semester: "First"
              },
              {
                code: "MTH 102",
                title: "General Mathematics II",
                level: "100",
                creditUnit: 3,
                lecturer: "Dr. Samuel Johnson",
                semester: "Second"
              },
              // More courses...
            ]
          },
          {
            name: "B.Ed Mathematics",
            degree: "B.Ed",
            duration: "4 years",
            admissionRequirements: [
              "5 O'Level credits including English, Mathematics, Physics, and 2 other science subjects",
              "Minimum UTME score of 180",
              "Direct Entry: NCE/ND in Mathematics"
            ],
            courses: [
              {
                code: "MTH 201",
                title: "Advanced Calculus",
                level: "200",
                creditUnit: 3,
                lecturer: "Prof. Kabiru Bello",
                semester: "First"
              },
              {
                code: "EDM 202",
                title: "Mathematics Teaching Methods",
                level: "200",
                creditUnit: 2,
                lecturer: "Dr. Ngozi Eze",
                semester: "Second"
              },
              // More courses...
            ]
          }
        ],
        hod: {
          name: "Dr. Grace Okoro",
          qualification: "PhD in Mathematics Education",
          image: "/hod-grace.jpg",
          contact: { phone: "+2348056789012", email: "math@aacoe.edu.ng" }
        }
      }
    ],
    dean: {
      name: "Prof. Samuel Johnson",
      qualification: "PhD in Science Education",
      image: "/dean-samuel.jpg",
      contact: { phone: "+2348067890123", email: "cosed@aacoe.edu.ng" }
    }
  },
];
