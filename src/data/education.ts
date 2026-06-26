export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  honors: string[];
}

export const educationData: EducationItem[] = [
  {
    degree: "B.E. Information Science & Engineering",
    institution: "Kumaraguru College of Technology",
    period: "2019 — 2023",
    location: "Coimbatore, India",
    description:
      "Built a strong foundation in computing, software engineering, and applied problem solving through practical and conceptual learning.",
    highlights: [
      "Graduated with First Class with Distinction, recognition of outstanding performance",
      "Awarded the Mahatma Gandhi Merit Scholarship for four consecutive years in demonstrating consistent academic excellence.",
      "Built Blood Donors & Blood Banks Tracking Application as a final-year project, which was successfully published at the 2023 2nd ICAECA Conference.",
      "Developed a strong foundation in DSA, OOPS, Computer Networks, DBMS, Cyrptography, Data Analytics and Data Science, with Software Engineering principles.",
    ],
    honors: [
      "First Class with Distinction",
      "Mahatma Gandhi Merit Scholarship (4 consecutive years)",
    ],
  },
  //   {
  //     degree: "Schooling (Higher Secondary)",
  //     institution: "Kendriya Vidyalaya No. 1, Trichy",
  //     period: "2017 — 2019",
  //     location: "Tiruchirappalli, India",
  //     description:"",
  //     highlights: [],
  //     honors: ["Consistent academic performance", "Active participation in science and technical activities"],
  //   },
];
