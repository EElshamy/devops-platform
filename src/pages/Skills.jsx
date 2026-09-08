import {
  Cloud,
  Container,
  Boxes,
  Workflow,
  Terminal,
  Server,
  Globe,
  ShieldCheck,
  Activity,
  GitBranch,
  Database,
  Code2,
  ArrowRight,
} from "lucide-react";

function Skills() {
  const skills = [
    {
      number: "01",
      name: "AWS",
      category: "CLOUD",
      level: "ADVANCED",
      description:
        "Cloud infrastructure, IAM, S3, CloudFront, networking and production architecture.",
      icon: Cloud,
      technologies: ["EC2", "S3", "IAM", "VPC", "CloudFront"],
    },
    {
      number: "02",
      name: "Docker",
      category: "CONTAINERS",
      level: "ADVANCED",
      description:
        "Containerization, image building, Dockerfiles, networking, volumes and registries.",
      icon: Container,
      technologies: ["Images", "Containers", "Dockerfile", "Networks"],
    },
    {
      number: "03",
      name: "Kubernetes",
      category: "ORCHESTRATION",
      level: "INTERMEDIATE",
      description:
        "Container orchestration, workloads, services, ingress and declarative deployments.",
      icon: Boxes,
      technologies: ["Pods", "Deployments", "Services", "Ingress"],
    },
    {
      number: "04",
      name: "K3s",
      category: "KUBERNETES",
      level: "INTERMEDIATE",
      description:
        "Lightweight Kubernetes for local environments, labs and resource-conscious clusters.",
      icon: Server,
      technologies: ["K3s", "K3d", "kubectl", "Namespaces"],
    },
    {
      number: "05",
      name: "Terraform",
      category: "IaC",
      level: "INTERMEDIATE",
      description:
        "Infrastructure as Code for repeatable and version-controlled cloud infrastructure.",
      icon: Code2,
      technologies: ["Providers", "Resources", "Variables", "State"],
    },
    {
      number: "06",
      name: "GitHub Actions",
      category: "CI/CD",
      level: "INTERMEDIATE",
      description:
        "Automated testing, builds, deployments and cloud delivery pipelines.",
      icon: Workflow,
      technologies: ["Workflows", "Jobs", "Secrets", "OIDC"],
    },
    {
      number: "07",
      name: "Linux",
      category: "SYSTEMS",
      level: "ADVANCED",
      description:
        "Linux administration, processes, permissions, networking, services and troubleshooting.",
      icon: Terminal,
      technologies: ["Ubuntu", "Shell", "SSH", "Systemd"],
    },
    {
      number: "08",
      name: "Nginx",
      category: "WEB",
      level: "INTERMEDIATE",
      description:
        "Reverse proxying, static content delivery and container-based web serving.",
      icon: Globe,
      technologies: ["Reverse Proxy", "Static Files", "HTTP", "TLS"],
    },
    {
      number: "09",
      name: "Cloudflare",
      category: "NETWORKING",
      level: "INTERMEDIATE",
      description:
        "DNS, edge networking, domain management and secure application delivery.",
      icon: Globe,
      technologies: ["DNS", "CDN", "SSL", "Edge"],
    },
    {
      number: "10",
      name: "Git",
      category: "VERSION CONTROL",
      level: "ADVANCED",
      description:
        "Version control, branching, collaboration and infrastructure change management.",
      icon: GitBranch,
      technologies: ["Git", "Branches", "Commits", "Pull Requests"],
    },
    {
      number: "11",
      name: "Monitoring",
      category: "OBSERVABILITY",
      level: "INTERMEDIATE",
      description:
        "Infrastructure visibility through metrics, logs, health checks and operational monitoring.",
      icon: Activity,
      technologies: ["Metrics", "Logs", "Health Checks", "CloudWatch"],
    },
    {
      number: "12",
      name: "Security",
      category: "DEVSECOPS",
      level: "INTERMEDIATE",
      description:
        "Identity, access control, secrets and security practices integrated into delivery.",
      icon: ShieldCheck,
      technologies: ["IAM", "OIDC", "Secrets", "Policies"],
    },
  ];

  const categories = [
    {
      name: "Cloud",
      count: "03",
      icon: Cloud,
    },
    {
      name: "Containers",
      count: "03",
      icon: Container,
    },
    {
      name: "Infrastructure",
      count: "03",
      icon: Database,
    },
    {
      name: "Automation",
      count: "03",
      icon: Workflow,
    },
  ];

  return (
    <main className="skills-page">
      {/* HERO */}
      <section className="page-hero skills-hero">
        <div className="skills-hero-glow" />

        <div className="skills-badge">
          <Code2 size={15} />
          DEVOPS SKILLS
        </div>

        <h1>
          Tools.
          <br />
          <span>Systems. Automation.</span>
        </h1>

        <p className="page-hero-description">
          A practical DevOps stack covering cloud infrastructure,
          containers, Kubernetes, automation, Linux and security.
        </p>

        <div className="skills-stats">
          <div>
            <strong>12+</strong>
            <span>CORE SKILLS</span>
          </div>

          <div>
            <strong>4</strong>
            <span>DOMAINS</span>
          </div>

          <div>
            <strong>∞</strong>
            <span>LEARNING</span>
          </div>
        </div>
      </section>

      {/* DOMAINS */}
      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">01 / DOMAINS</p>

          <h2>
            A stack built around
            <br />
            real infrastructure.
          </h2>

          <p>
            DevOps connects cloud platforms, containers, infrastructure
            automation and operational tooling into one engineering workflow.
          </p>
        </div>

        <div className="skills-domains">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <article className="skills-domain-card" key={category.name}>
                <div className="skills-domain-icon">
                  <Icon size={21} />
                </div>

                <div>
                  <span>{category.count} SKILLS</span>
                  <h3>{category.name}</h3>
                </div>

                <ArrowRight size={17} />
              </article>
            );
          })}
        </div>
      </section>

      {/* SKILLS */}
      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">02 / TECHNOLOGY STACK</p>

          <h2>
            Technologies I use
            <br />
            to build infrastructure.
          </h2>

          <p>
            Each technology represents a practical part of the DevOps
            workflow, from source control to production operations.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <article className="skill-card" key={skill.name}>
                <div className="skill-card-top">
                  <span className="skill-number">
                    {skill.number}
                  </span>

                  <div className="skill-icon">
                    <Icon size={21} />
                  </div>
                </div>

                <div className="skill-heading-row">
                  <div>
                    <span className="skill-category">
                      {skill.category}
                    </span>

                    <h3>{skill.name}</h3>
                  </div>

                  <span className="skill-level">
                    {skill.level}
                  </span>
                </div>

                <p>{skill.description}</p>

                <div className="skill-technologies">
                  {skill.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="content-section">
        <div className="skills-workflow-card">
          <div className="skills-workflow-content">
            <p className="eyebrow">03 / DEVOPS WORKFLOW</p>

            <h2>
              Connect the tools.
              <br />
              Automate the delivery.
            </h2>

            <p>
              The real value of DevOps comes from connecting individual
              technologies into an automated software delivery system.
            </p>
          </div>

          <div className="skills-flow">
            <div>
              <GitBranch size={18} />
              <span>Git</span>
            </div>

            <ArrowRight size={17} />

            <div>
              <Workflow size={18} />
              <span>CI/CD</span>
            </div>

            <ArrowRight size={17} />

            <div>
              <Container size={18} />
              <span>Docker</span>
            </div>

            <ArrowRight size={17} />

            <div>
              <Boxes size={18} />
              <span>Kubernetes</span>
            </div>

            <ArrowRight size={17} />

            <div>
              <Cloud size={18} />
              <span>AWS</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOCUS */}
      <section className="content-section">
        <div className="skills-focus">
          <div>
            <p className="eyebrow">04 / ENGINEERING FOCUS</p>

            <h2>
              Learn by building
              <br />
              real systems.
            </h2>

            <p>
              The goal is not simply to know tools. The focus is on
              designing infrastructure, automating repetitive work,
              troubleshooting failures and operating reliable systems.
            </p>
          </div>

          <div className="skills-focus-list">
            <div>
              <span>01</span>
              <strong>Infrastructure as Code</strong>
              <p>Build repeatable environments.</p>
            </div>

            <div>
              <span>02</span>
              <strong>Containerization</strong>
              <p>Package applications consistently.</p>
            </div>

            <div>
              <span>03</span>
              <strong>Automation</strong>
              <p>Reduce manual operational work.</p>
            </div>

            <div>
              <span>04</span>
              <strong>Observability</strong>
              <p>Understand system health and failures.</p>
            </div>

            <div>
              <span>05</span>
              <strong>Security</strong>
              <p>Protect infrastructure by design.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM */}
      <section className="content-section">
        <div className="skills-platform-card">
          <div>
            <p className="eyebrow">05 / THIS PLATFORM</p>

            <h2>
              These skills
              <br />
              work together here.
            </h2>

            <p>
              This DevOps platform combines React, Docker, K3s,
              Kubernetes, AWS, CloudFront, Cloudflare and GitHub Actions
              into one practical project.
            </p>
          </div>

          <div className="skills-platform-stack">
            <span>React</span>
            <span>Docker</span>
            <span>K3d</span>
            <span>K3s</span>
            <span>Kubernetes</span>
            <span>AWS</span>
            <span>CloudFront</span>
            <span>Cloudflare</span>
            <span>GitHub Actions</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Skills;
