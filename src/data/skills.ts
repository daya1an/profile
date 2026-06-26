export interface Skill {
  name: string;
  icon: string;
  level?: number;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skillsData: { categories: SkillCategory[] } = {
  categories: [
    {
      name: "Programming Languages",
      skills: [
        { name: "Java", icon: "auto", level: 95 },
        { name: "Python", icon: "auto", level: 85 },
        { name: "TypeScript", icon: "auto", level: 88 },
        { name: "JavaScript", icon: "auto", level: 90 },
        { name: "SQL", icon: "auto", level: 90 },
        { name: "C/C++", icon: "auto", level: 75 },
      ],
    },
    {
      name: "Frontend",
      skills: [
        { name: "React", icon: "auto", level: 88 },
        { name: "Angular", icon: "auto", level: 85 },
        { name: "Redux", icon: "auto", level: 82 },
        { name: "HTML5", icon: "auto", level: 95 },
        { name: "CSS3", icon: "auto", level: 90 },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Spring Framework", icon: "auto", level: 80 },
        { name: "Spring Boot", icon: "auto", level: 95 },
        { name: "Spring Batch", icon: "auto", level: 88 },
        { name: "Spring Data", icon: "auto", level: 88 },
        { name: "Spring Security", icon: "auto", level: 80 },
        { name: "Spring GraphQL", icon: "auto", level: 75 },
        { name: "RestFUL API", icon: "auto", level: 80 },
        { name: "GraphQL", icon: "auto", level: 75 },

      ],
    },
    {

      name: "Cloud and Other Platforms",
      skills: [
        { name: "GCP", icon: "auto", level: 85 },
        { name: "AWS", icon: "auto", level: 75 },
        { name: "Kubernetes", icon: "auto", level: 78 },
        { name: "OpenShift", icon: "auto", level: 78 },
        { name: "Kafka", icon: "auto", level: 82 },
        { name: "Redis", icon: "auto", level: 80 },
        { name: "Databricks", icon: "auto", level: 80 },
      ],
    },
    {
      name: "Databases",
      skills: [
        { name: "PostgreSQL", icon: "auto", level: 88 },
        { name: "Microsoft SQL Server", icon: "auto", level: 85 },        
        { name: "Oracle", icon: "auto", level: 78 },
        { name: "MySQL", icon: "auto", level: 85 },
        { name: "MongoDB", icon: "auto", level: 82 },
        { name: "BigQuery", icon: "auto", level: 80 },
      ],
    },
    {
      name: "DevSecOps and Tools",
      skills: [
        { name: "GitHub", icon: "auto", level: 92 },
        { name: "Jira", icon: "auto", level: 80 },
        { name: "Docker", icon: "auto", level: 85 },        
        { name: "Splunk", icon: "auto", level: 80 },
        { name: "Dynatrace", icon: "auto", level: 80 },
        { name: "Terraform", icon: "auto", level: 75 },
        { name: "Jenkins", icon: "auto", level: 80 },
        { name: "GitHub Actions", icon: "auto", level: 82 }
      ],
    },
    {
      name: "AI Tools, Models and Frameworks",
      skills: [
        { name: "OpenAI", icon: "auto", level: 85 },
        { name: "Google Gemini", icon: "auto", level: 80 },
        { name: "Claude", icon: "auto", level: 80 },
        { name: "Spring AI", icon: "auto", level: 80 },
        { name: "LangChain", icon: "auto", level: 75 },
        { name: "LangGraph", icon: "auto", level: 75 },
        { name: "Scikit-Learn", icon: "auto", level: 70 },
      ],
    },
  ],
};

const deviconMap: Record<string, string> = {
  "Java": "java.svg",
  "Python": "python.svg",
  "TypeScript": "typescript.svg",
  "JavaScript": "javascript.svg",
  "SQL": "sql.svg",
  "C/C++": "cplusplus.svg",

  "React": "react.svg",
  "Angular": "angularjs.svg",
  "Redux": "redux.svg",
  "HTML5": "html5.svg",
  "CSS3": "css3.svg",

  "Spring Framework": "springframework.svg",
  "Spring Boot": "springboot.svg",
  "Spring AI": "springai.svg",
  "Spring Batch": "springbatch.svg",
  "Spring Data": "springdata.svg",
  "Spring Security": "springsecurity.svg",
  "Spring GraphQL": "springgraphql.svg",
  "RestFUL API": "restapi.svg",
  "GraphQL": "graphql.svg",

  "GCP": "gcp.svg",
  "AWS": "AWS.svg",
  "Kubernetes": "kubernetes.svg",
  "OpenShift": "openshift.svg",
  "Kafka": "kafka.svg",
  "Redis": "redis.svg",
  "Databricks": "databricks.svg",

  "PostgreSQL": "postgresql.svg",
  "Microsoft SQL Server": "ssms2025.svg",
  "Oracle": "oracle.svg",
  "MySQL": "mysql.svg",
  "MongoDB": "mongodb.svg",
  "BigQuery": "bigquery.svg",

  "GitHub": "github.svg",
  "Jira": "jira.svg",
  "Docker": "docker.svg",
  "Splunk": "splunk.svg",
  "Dynatrace": "dynatrace.svg",
  "Terraform": "terraform.svg",
  "Jenkins": "jenkins.svg",
  "GitHub Actions": "githubactions.svg",  
  
  "OpenAI": "chatgpt.svg",
  "Google Gemini": "gemini.svg",
  "Claude": "claude.svg",
  "LangChain": "langchain.svg",
  "LangGraph": "langgraph.svg",
  "Scikit-Learn": "scikitlearn.svg",
};

export function getIconUrl(skill: Skill): string {
  if (skill.icon !== "auto") return skill.icon;
  const key = deviconMap[skill.name];
  if (!key) return "";
  return `https://raw.githubusercontent.com/daya1an/profile/main/assets/icons/${key}`;
}
