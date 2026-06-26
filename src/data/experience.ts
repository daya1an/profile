export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
  level: number;
}

export const experienceData: Experience[] = [
  {
    title: "Parts Control Application",
    company: "New App Development",
    period: "2026Q2 – Present",
    description:
      "Base - Mainframe application, Functioning as SPOC for the Modernized Part of this Application",
    highlights: [
      "Maintaining Spring Batch jobs processing 10k+ daily records, pulling multi-format data from enterprise platforms into GCS buckets.",
      "Automating input & output file storage in GCS buckets, multi-format data transformation, and SFTP delivery to downstream systems.",
      "Rapidly deploying workloads on GCP Cloud Run with Cloud Scheduler for daily batch processing, configured via Terraform.",
      "Orchestrating Tekton CI/CD pipelines, resolving pipeline failures, and migrating it to GitHub Actions for improved workflow reliability.",
    ],
    tech: [
      "React","Redux","TypeScript","Spring","IBM DB2","BigQuery","GCP","Batch Processing"],
    level: 5,
  },
  {
    title: "Ecommerce Catalog",
    company: "COTS Application - Infrastructure Migration",
    period: "2025Q3 – Present",
    description:
      "Enabling successful migration by providing architecture, design, and technical guidance to vendor teams, ensuring alignment with enterprise standards and scalable migration practices.",
    highlights: [
      "Owning infrastructure responsibilities and providing assistance on CaaS Services, monitoring, and troubleshooting to ensure availability and integrity.",
      "Migrated MS SQL Server to GCP Cloud SQL, transitioning data sources, configuring DDL/DML, and maintaining infrastructure automation with Terraform.",
      "Configured weekly maintenance jobs to update statistics, rebuild indexes, and perform integrity checks, ensuring downtime avoidance and data integrity.",
      "Contributed technical expertise to system design reviews through driving feasibility analysis, POC, prototyping and R&D initiatives.",
      "Established Entra ID authentication with MFA, supported stakeholders in integrating it into code, and executed testing using JMeter and Dynatrace.",
    ],
    tech: ["Angular","JavaScript","Terraform","MS SQL Server","Entra Id","GCP","OpenShift","B2B"],
    level: 4,
  },
  {
    title: "Global Brand Protection System",
    company: "Legacy Application Modernization",
    period: "2025Q4 – 2026Q1",
    description:
      "Modernized legacy applications by rebuilding UI, optimizing data handling, enforcing security standards, and delivering resilient APIs with enterprise compliance.",
    highlights: [
      "Rewrote legacy UI and built reusable react components with custom hooks and wrapper classes, aligned with enterprise standards",
      "Implemented DB-driven dynamic dropdowns and paginated data tables with robust input validation and optimized backend integration.",
      "Enforced data governance and privacy controls for PII/SPII data through AES-GCM encryption and secure data handling strategies.",
      "Remediated 50+ vulnerabilities identified by 42Crunch, SonarQube, Fossa and Cycode, ensuring alignment with enterprise standards. ",
      "Built APIs and Batch Jobs by applying DDD, SDD and SOLID principles with Redis caching, pagination, rate limiting, and query optimization.",
      "Adopted TDD using GitHub Copilot with JUnit and Mockito to build robust test suites validating complex business logic and edge cases."
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Spring", "Redis", "PostgreSQL", "GCP", "ADFS","Tekton"],
    level: 3,
  },
  {
    title: "Global Catalog",
    company: "Enhancement Project",
    period: "2025Q1 – 2025Q3",
    description:
      "Enhanced application's modules by delivering new features, building resilient APIs, strengthening authentication, and streamlining CI/CD for performance and security.",
    highlights: [
      "Developed responsive web pages incorporating features such as lazy loading, breadcrumb navigation, and authorization strategies.",
      "Built reusable shared modules with complex business-critical logic with enhanced capabilities beyond the legacy application.",
      "Delivered resilient REST APIs backed by ACID-compliant CRUD services using Spring - Data, MVC, Web and Security.",
      "Built APIs integrated with message queues for event-driven processing and reliable message persistence on every write operation.",
      "Implemented Redis-backed JWT caching for Entra ID OIDC, cutting auth latency 50% with token expiry and revocation enforcement.",
      "Enabled pre-authorized service‑to‑service communication using Spring Cloud & RestTemplate across 10 distributed microservices.",
      "Resolved an Apigee API Gateway file transfer limitation by architecting a GCS bucket solution with signed URLs for secure access."
    ],
    tech: ["Angular","TypeScript","PrimeNG","Spring","PostgreSQL","GCP","Entra ID","Pub/Sub","Redis","GitHub Actions"],
    level: 2,
  },
  {
    title: "Packaging & Logistics Application",
    company: "Legacy Application - Infrastructure Migration",
    period: "2024Q1 – 2026Q3",
    description:
      "Modernized legacy infrastructure by upgrading codebase, migrating workloads to OpenShift, strengthening API security, and optimizing batch operations with enterprise standards.",
    highlights: [
      "Migrated WAS Liberty app from PCF to RedHat Quay & OpenShift, moving S3/SMB to PVC and Nexus/local jars to JFrog Artifactory.",
      "Shifted build system from Ant to Gradle and enabled Ecoboost Tekton PAC pipeline, reducing deployment complexity and time.",
      "Deployed APIs and Jobs, using Deployments, Services, Ingress, Egress, Routes, and Secrets, while ensuring Kyverno policy compliance.",
      "Developed Docker File and integrated Dynatrace and Splunk via sidecar containers to carry out Load and Performance Testing.",
      "Strengthened release governance and security via CI/CD, DevSecOps, auth controls, and Apigee for APIs consumed by 5+ internal apps.",
      "Led reverse KT sessions, mentoring team members on CronJob scheduling, SSL/DNS mapping, and alerts and rules for batch APIs.",
      "Managed OpenShift CronJob deployments for batch jobs, optimizing cost and performance while ensuring Kyverno policy compliance."
    ],
    tech: ["Java","Struts","WAS Liberty","Spring","MS SQL Server","IBM DB2","AWS","Red Hat OpenShift","ADFS","JFrog", "Tekton", "Batch Processing"],
    level: 1,
  },
];