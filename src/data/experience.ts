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
      "Developing APIs serving 25+ apps, supporting enterprise reporting infrastructure and audit requirements at sub-100ms latency.",
      "Maintaining batch processing applications, processing millions of records daily, by periodically pulling differnet formats of data from enterprise platforms into GCS, transforming it into differnt format, and transferring it via SFTP.",
      "Migrated 10 REST endpoints to GraphQL over BigQuery, reducing payload size for downstream applications by eliminating over-fetching.",
      "Optimized Bigquery stored procedures, reducing ETL job execution time by 35% and eliminating data reconciliation errors.",
      "Deployed workloads on GCP Cloud Run, configured Cloud Scheduler for daily batch processing and provisioned APIGEE for API with robust security measures.",
    ],
    tech: [
      "React","Redux","TypeScript","Spring","GraphQL","IBM DB2","PostgreSQL","GCP","Batch Processing"],
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
    title: "Brand Protection System",
    company: "Legacy Application Modernization",
    period: "2025Q4 – 2026Q1",
    description:
      "Modernized legacy applications by rebuilding UI, optimizing data handling, enforcing security standards, and delivering resilient APIs with enterprise compliance.",
    highlights: [
      "Rewrote legacy UI and built reusable react comps with custom hooks, wrapper classes and context API, aligned with enterprise standards.",
      "Implemented DB‑driven dropdowns and virtualized data tables, achieving sub‑150 ms render time for minimum 10k+ rows.",
      "Enforced AES-GCM for PII/SPII data, remediated 60+ OWASP issues, achieving full compliance with 42Crunch and GCP Cloud Armor WAF.",
      "Implemented SDD and resolved 42Crunch defects to maintain secure API design standards via via code reviews and security validation.",
      "Built APIs by applying SOLID principles and Domain Driven Design, with Redis caching, pagination, rate limiting, and query optimization.",
      "In UAT testing, leveraged GitHub Copilot with JUnit & Mockito to build test suites validating complex business logic and edge cases."
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Spring", "Redis", "MongoDB Atlas", "GCP", "ADFS","Tekton"],
    level: 3,
  },
  {
    title: "Inventory Catalog",
    company: "Enhancement Project",
    period: "2025Q1 – 2025Q3",
    description:
      "Enhanced application's modules by delivering new features, building resilient APIs, strengthening authentication, and streamlining CI/CD for performance and security.",
    highlights: [
      "Developed responsive web pages incorporating features such as lazy loading, breadcrumb navigation, and authorization strategies.",
      "Implemented ACID compliant CRUD services and concurrent batch jobs using Spring Data – JPA & Hibernate, Batch, MVC, and Security.",
      "Built Pub/Sub APIs with WebFlux and Virtual Threads for non-blocking, high-throughput event processing via Java concurrency.",
      "Implemented Redis-backed JWT caching for Entra ID OIDC, cutting auth latency 50% with token expiry and revocation enforcement.",
      "Enabled pre-authorized service‑to‑service communication using Spring Cloud & RestTemplate across 10 distributed microservices.",
      "Led CI/CD migration from Tekton to GitHub Actions, improving deployment reliability and reducing deployment time by 60%.",
      "Conducted peer code reviews, implemented robust test cases, and enhanced coding standards by remediating vulnerabilities flagged by SAST tools (SonarQube, Fossa, Cycode)."
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
      "Modernized codebase by migrating from Java 8 & Spring 2.x to Java 17 & Spring 3.x, and shifting build system from Ant to Gradle with JARs managed in JFrog Artifactory.",
      "Migrated the Legacy Monolithic WAS Liberty app from PCF and AWS to RedHat Quay & OpenShift and configured Tekton PAC pipeline, reducing deployment time, effort, and cost by 50%.",
      "Developed and deployed CRUD APIs on OpenShift, utilizing resources like Deployments, Cronjobs, Secrets, Services, Ingress, Egress, Routes, and Prometheus.",
      "Integrated Splunk & Dynatrace via sidecar containers for LnP Testing and enabling proactive incident response and reduced MTTR.",
      "Strengthened release governance and security via CI/CD, DevSecOps, auth controls, and Apigee for APIs consumed by 5+ internal apps.",
      "Led reverse KT sessions, mentoring team members on CronJob scheduling, SSL/DNS mapping, and alerts and rules for batch APIs.",
      "Managed OpenShift CronJob deployments for batch jobs, optimizing cost and performance while ensuring Kyverno policy compliance."
    ],
    tech: ["Java","Struts","WAS Liberty","Spring","MS SQL Server","IBM DB2","AWS","Red Hat OpenShift","ADFS","JFrog", "Tekton", "Batch Processing"],
    level: 1,
  },
];