import { Link } from "react-router-dom";
import {
  ArrowRight,
  Cloud,
  Container,
  GitBranch,
  Server,
  ShieldCheck,
  Terminal,
} from "lucide-react";

function Home() {
  const technologies = [
    {
      name: "AWS",
      description: "Cloud infrastructure, services and architecture.",
      icon: Cloud,
      path: "/cloud",
    },
    {
      name: "Docker",
      description: "Build, package and run applications anywhere.",
      icon: Container,
      path: "/devops",
    },
    {
      name: "Kubernetes",
      description: "Container orchestration and scalable deployments.",
      icon: Server,
      path: "/kubernetes",
    },
    {
      name: "Terraform",
      description: "Infrastructure as Code for modern cloud platforms.",
      icon: Terminal,
      path: "/devops",
    },
    {
      name: "CI/CD",
      description: "Automate testing, builds and deployments.",
      icon: GitBranch,
      path: "/devops",
    },
    {
      name: "DevSecOps",
      description: "Integrate security into the DevOps lifecycle.",
      icon: ShieldCheck,
      path: "/devops",
    },
  ];

  return (
    <main className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-glow" />

        <div className="hero-content">
          <div className="eyebrow">
            DEVOPS PLATFORM
          </div>

          <h1>
            Master DevOps.
            <br />
            <span>Build. Automate. Deploy.</span>
          </h1>

          <p className="hero-description">
            Explore DevOps technologies, cloud infrastructure,
            Kubernetes, automation and real-world projects.
          </p>

          <div className="hero-actions">
            <Link to="/devops" className="btn btn-primary">
              Explore Technologies
              <ArrowRight size={17} />
            </Link>

            <Link to="/projects" className="btn btn-secondary">
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="technologies section">
        <div className="section-heading">
          <div>
            <div className="section-label">
              TECHNOLOGIES
            </div>

            <h2>
              Everything you need to build
              <br />
              modern infrastructure.
            </h2>
          </div>

          <Link to="/skills" className="section-link">
            View all
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="technology-grid">
          {technologies.map((technology) => {
            const Icon = technology.icon;

            return (
              <article
                className="technology-card"
                key={technology.name}
              >
                <div className="technology-icon">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                <div className="technology-content">
                  <h3>{technology.name}</h3>

                  <p>{technology.description}</p>
                </div>

                <Link
                  to={technology.path}
                  className="card-link"
                >
                  Learn more
                  <ArrowRight size={14} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {/* PLATFORM */}
      <section className="platform section">
        <div className="platform-card">
          <div>
            <div className="section-label">
              DEVOPS HUB
            </div>

            <h2>
              Learn the tools.
              <br />
              Build real infrastructure.
            </h2>

            <p>
              From Linux and networking to AWS,
              containers, Kubernetes, Terraform and CI/CD.
            </p>
          </div>

          <Link to="/projects" className="btn btn-primary">
            Explore Projects
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
