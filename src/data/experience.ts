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
      "Base - Mainframe application, birth place of Engineering and Serive Parts Details. Functioning as SPOC for the Modernized Part of this Application.",
    highlights: [
      "Maintaining ETL jobs ingesting multi-format files from enterprise platforms into GCS, generating mainframe-readable outputs of 10K+ records per run.",
      "Leveraged GCS Buckets for I/O files management and optimized SFTP transfers with email notifications, surpassing mainframe capabilities.",
      "Provisioned GCP Cloud Run and Cloud Scheduler with Terraform, enabling fully automated daily batch processing with zero manual intervention.",
      "Resolved Tekton PAC pipeline failures and leading migration to GitHub Actions, improving CI/CD reliability and pipeline scalability.",
    ],
    tech: [
      "React",
      "Redux",
      "TypeScript",
      "Spring",
      "IBM DB2",
      "BigQuery",
      "GCP",
      "Batch Processing",
    ],
    level: 5,
  },
  {
    title: "Ecommerce Catalog",
    company: "COTS Application - Infrastructure Migration",
    period: "2025Q3 – Present",
    description:
      "An Ecommerce Site that allows users to browse ford vehicles and its associated parts. Enabling successful migration by providing architecture, design, and technical guidance to vendor teams, ensuring alignment with enterprise standards and scalable migration practices.",
    highlights: [
      "Owning infrastructure responsibilities and providing assistance on CaaS Services, monitoring, and troubleshooting to ensure availability and integrity.",
      "Migrated MS SQL Server to GCP Cloud SQL, transitioning data sources, configuring DDL/DML, and maintaining infrastructure automation with Terraform.",
      "Configured weekly maintenance jobs to update statistics, rebuild indexes, and perform integrity checks, ensuring downtime avoidance and data integrity.",
      "Contributed technical expertise to system design reviews through driving feasibility analysis, POC, prototyping and R&D initiatives.",
      "Established Entra ID authentication with MFA, supported stakeholders in integrating it into code, and executed testing using JMeter and Dynatrace.",
    ],
    tech: [
      "Angular",
      "JavaScript",
      "Terraform",
      "MS SQL Server",
      "Entra Id",
      "GCP",
      "OpenShift",
      "B2B",
    ],
    level: 4,
  },
  {
    title: "Global Brand Protection System",
    company: "Legacy Application Modernization",
    period: "2025Q4 – 2026Q1",
    description:
      "An application used to seek Exemptions approvals and track trademark compliance, which connects Global Analysts and Supervisors, to raise Requests, Proposals, and Approvals. Modernized this legacy application by rebuilding UI, optimizing data handling, enforcing security standards, and delivering resilient APIs with enterprise compliance.",
    highlights: [
      "Rebuilt legacy UI with reusable React components, custom hooks, and wrapper classes, reducing cross-team UI development effort by 25%.",
      "Implemented DB-driven dropdowns and dynamic tables with robust input validation, improving data load efficiency for large-volume datasets.",
      "Enforced PII/SPII compliance using AES-GCM encryption and secure data handling across all sensitive data flows, meeting enterprise security standards.",
      "Built APIs applying SDD, DDD and SOLID principles with Redis caching and optimized queries, reducing response time for data-heavy operations by 30%.",
      "Adopted TDD with JUnit, Mockito, and GitHub Copilot, increasing test coverage by 30% and validating complex business logic and edge cases.",
      "Remediated 50+ security vulnerabilities flagged by 42Crunch, SonarQube, Fossa, and Cycode, achieving maximum enterprise security standards.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Spring",
      "Redis",
      "PostgreSQL",
      "GCP",
      "ADFS",
      "Tekton",
    ],
    level: 3,
  },
  {
    title: "Global Catalog",
    company: "Enhancement Project",
    period: "2025Q1 – 2025Q3",
    description:
      "An Inventory Management System that retrieves part details from Parts Control, allows users to catalog them, and distributes the information to multiple downstream systems. Enhanced application's modules by delivering new features, building resilient APIs, strengthening authentication, and streamlining CI/CD for performance and security.",
    highlights: [
      "Built Angular components including dynamic tables, tree views, and modals, delivering intuitive UI and seamless interactions.",
      "Developed reusable Angular shared modules encapsulating complex business-critical logic, extending application capabilities beyond the legacy system.",
      "Delivered ACID-compliant REST APIs using Spring Data, MVC, and Security, ensuring transactional consistency across all CRUD operations.",
      "Architected event-driven APIs with MQ integration, ensuring reliable message persistence and decoupling services for independent scalability.",
      "Implemented Redis-backed JWT caching for Entra ID OIDC flows, cutting auth latency by 50% with full token expiry and revocation enforcement.",
      "Enabled pre-authorized service-to-service communication via Spring Cloud across 10 distributed microservices, eliminating redundant auth overhead.",
      "Resolved Apigee file transfer limitation by architecting a GCS signed URL solution, enabling secure access for large files for users.",
    ],
    tech: [
      "Angular",
      "TypeScript",
      "PrimeNG",
      "Spring",
      "PostgreSQL",
      "GCP",
      "Entra ID",
      "Pub/Sub",
      "Redis",
      "GitHub Actions",
    ],
    level: 2,
  },
  {
    title: "Global Service Parts Packaging System",
    company: "Legacy Application - Infrastructure Migration",
    period: "2024Q1 – 2026Q3",
    description:
      "Global Application for creating and managing packaging and logistics specifications of Engineering and Service Parts. Modernized legacy infrastructure by upgrading codebase, migrating workloads to OpenShift, strengthening API security, and optimizing batch operations with enterprise standards.",
    highlights: [
      "Migrated Legacy WAS Liberty application from PCF to Red Hat OpenShift, eliminating AWS S3 and SMB-NAS dependencies by relocating storage to PVC and migrating artifacts from Nexus and local jars to JFrog Artifactory.",
      "Shifted build system from Ant to Gradle and enabled Tekton PAC pipelines, reducing deployment complexity and time significantly.",
      "Deployed APIs and batch jobs on OpenShift using Deployments, Services, Ingress, Egress, Routes, and Secrets while enforcing Kyverno policy compliance.",
      "Developed Dockerfiles and integrated Dynatrace and Splunk via sidecar containers, enabling comprehensive observability during load and performance testing.",
      "Strengthened release governance and security via CI/CD, DevSecOps controls, auth enforcement, and Apigee-managed APIs consumed by multiple enterprise applications.",
      "Led reverse KT sessions mentoring team members on workloads, CronJob scheduling, SSL/DNS mapping, Promethoeus rules and alerts for batch jobs and APIs, reducing SPOC dependencies for OpenShift operations.",
    ],
    tech: [
      "Java",
      "Struts",
      "JSF",
      "WAS Liberty",
      "Spring",
      "MS SQL Server",
      "IBM DB2",
      "AWS",
      "Red Hat OpenShift",
      "ADFS",
      "JFrog",
      "Tekton",
      "Batch Processing",
    ],
    level: 1,
  },
];
