export interface Achievement {
  title: string;
  description: string;
  icon: "trophy" | "medal" | "star" | "certificate" | "award";
  year: string;
}

export const achievementsData: Achievement[] = [
  {
    title: "Spring Boot Microservices Expert",
    description: "Implemented enterprise-grade microservices with design patterns at scale",
    icon: "trophy",
    year: "2024",
  },
  {
    title: "Query Optimization — 50% Latency Reduction",
    description: "Optimized SQL on million-record datasets through strategic indexing and ACID compliance",
    icon: "award",
    year: "2024",
  },
  {
    title: "GCP Cloud Architecture",
    description: "Deployed production applications on Cloud Run, Cloud SQL, BigQuery, and Pub/Sub",
    icon: "certificate",
    year: "2024",
  },
  {
    title: "GenAI Integration",
    description: "Built Spring AI REST service with Gemini model, Resilience4j, and Prometheus observability",
    icon: "star",
    year: "2025",
  },
  {
    title: "B.E. Information Science & Engineering",
    description: "Graduated with First Class with Distinction, earned the Mahatma Gandhi Merit Scholarship in all four academic years, and built a Blood Donors & Blood Banks Tracking Application that was published at the 2023 2nd ICAECA Conference.",
    icon: "trophy",
    year: "2023",
  },
];
