import {
  GitBranch,
  Container,
  Cloud,
  Database,
  Settings,
  ShieldCheck,
  Activity,
  Code2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

function DevOps() {
  const principles = [
    "Automation first",
    "Infrastructure as Code",
    "Continuous Integration",
    "Continuous Delivery",
    "Observability",
    "Security by design",
  ];

  const lifecycle = [
    {
      title: "Plan",
      description:
        "Define requirements, architecture and delivery goals.",
      icon: Settings,
    },
    {
      title: "Code",
      description:
        "Build applications using Git-based development workflows.",
      icon: Code2,
    },
    {
      title: "Build",
      description:
        "Compile, package and create reproducible application artifacts.",
      icon: Container,
    },
    {
      title: "Test",
      description:
        "Run automated tests and validate application changes.",
      icon: Activity,
    },
    {
      title: "Release",
      description:
        "Prepare tested artifacts for reliable deployment.",
      icon: GitBranch,
    },
    {
      title: "Deploy",
      description:
        "Deploy applications to cloud and Kubernetes environments.",
      icon: Cloud,
    },
    {
      title: "Operate",
      description:
        "Run and manage production infrastructure and services.",
      icon: Database,
    },
    {
      title: "Monitor",
      description:
        "Observe systems, detect issues and improve reliability.",
      icon: Activity,
    },
  ];

  const tools = [
    "Git",
    "GitHub",
    "GitHub Actions",
    "Docker",
    "Kubernetes",
    "Terraform",
    "AWS",
    "Linux",
    "Nginx",
    "Prometheus",
    "Grafana",
    "Cloudflare",
  ];

  return (
    <main className="devops-page">

      {/* HERO */}
      <section className="devops-hero">
        <div className="devops-hero-glow" />

        <div className="devops-hero-content">

          <div className="devops-badge">
            <GitBranch size={12} />
            DEVOPS ENGINEERING
          </div>

          <h1>
            Build. Automate.
            <br />
            <span>Deploy with confidence.</span>
          </h1>

          <p>
            A practical guide to modern DevOps engineering —
            from Git and CI/CD to containers, Kubernetes,
            cloud infrastructure and observability.
          </p>

          <div className="devops-hero-stats">
            <div>
              <strong>12+</strong>
              <span>Core Tools</span>
            </div>

            <div>
              <strong>8</strong>
              <span>Lifecycle Stages</span>
            </div>

            <div>
              <strong>∞</strong>
              <span>Automation</span>
            </div>
          </div>

        </div>
      </section>

      {/* FOUNDATION */}
      <section className="content-section">

        <div className="section-heading">

          <p className="section-label">
            01 / FOUNDATION
          </p>

          <h2>
            Development and operations,
            <br />
            working as one system.
          </h2>

          <p>
            DevOps combines culture, collaboration, automation
            and infrastructure practices to deliver software
            faster, more reliably and with better operational
            visibility.
          </p>

        </div>

        <div className="principles-grid">

          {principles.map((principle) => (
            <div
              className="principle-item"
              key={principle}
            >
              <CheckCircle2 size={15} />
              <span>{principle}</span>
            </div>
          ))}

        </div>

      </section>

      {/* LIFECYCLE */}
      <section className="content-section">

        <div className="section-heading">

          <p className="section-label">
            02 / LIFECYCLE
          </p>

          <h2>
            From idea
            <br />
            to production.
          </h2>

          <p>
            A modern DevOps workflow continuously moves
            changes through planning, development, automation,
            deployment and monitoring.
          </p>

        </div>

        <div className="lifecycle-grid">

          {lifecycle.map((item, index) => {

            const Icon = item.icon;

            return (
              <article
                className="lifecycle-card"
                key={item.title}
              >

                <span className="lifecycle-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="card-icon">
                  <Icon size={21} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <ArrowRight
                  className="lifecycle-arrow"
                  size={15}
                />

              </article>
            );
          })}

        </div>

      </section>

      {/* TOOLCHAIN */}
      <section className="content-section">

        <div className="section-heading">

          <p className="section-label">
            03 / TOOLCHAIN
          </p>

          <h2>
            The stack behind
            <br />
            modern delivery.
          </h2>

          <p>
            The tools used across source control, CI/CD,
            containers, infrastructure, cloud and observability.
          </p>

        </div>

        <div className="tools-grid">

          {tools.map((tool, index) => (
            <div
              className="tool-item"
              key={tool}
            >

              <span className="tool-index">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="tool-name">
                {tool}
              </span>

              <ArrowRight size={16} />

            </div>
          ))}

        </div>

      </section>

      {/* DEVSECOPS */}
      <section className="content-section">

        <div className="security-card">

          <div className="security-icon">
            <ShieldCheck size={28} />
          </div>

          <div className="security-content">

            <p className="section-label">
              04 / DEVSECOPS
            </p>

            <h2>
              Security belongs in every stage.
            </h2>

            <p>
              Integrate security into development,
              infrastructure and deployment workflows
              instead of treating it as a final step.
            </p>

            <div className="security-points">
              <span>Secrets Management</span>
              <span>Dependency Scanning</span>
              <span>Container Scanning</span>
              <span>Secure CI/CD</span>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="content-section">

        <div className="devops-cta">

          <div>

            <p className="section-label">
              READY TO BUILD?
            </p>

            <h2>
              Turn infrastructure
              <br />
              into a repeatable system.
            </h2>

            <p>
              Explore the projects and technologies
              behind this platform.
            </p>

          </div>

          <a
            href="/projects"
            className="btn btn-primary"
          >
            Explore Projects
            <ArrowRight size={17} />
          </a>

        </div>

      </section>

    </main>
  );
}

export default DevOps;
