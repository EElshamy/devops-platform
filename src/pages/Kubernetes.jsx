import {
  Box,
  Server,
  Network,
  Layers,
  Settings,
  ShieldCheck,
  Activity,
  GitBranch,
  ArrowRight,
} from "lucide-react";

function Kubernetes() {
  const concepts = [
    {
      number: "01",
      title: "Pods",
      description:
        "The smallest deployable units in Kubernetes. Pods run one or more containers together.",
      icon: Box,
    },
    {
      number: "02",
      title: "Deployments",
      description:
        "Manage application replicas, rolling updates and desired application state.",
      icon: Layers,
    },
    {
      number: "03",
      title: "Services",
      description:
        "Expose applications and provide stable networking between workloads.",
      icon: Network,
    },
    {
      number: "04",
      title: "Ingress",
      description:
        "Route external HTTP and HTTPS traffic to services inside the cluster.",
      icon: GlobeIcon,
    },
    {
      number: "05",
      title: "ConfigMaps",
      description:
        "Store non-sensitive configuration separately from application containers.",
      icon: Settings,
    },
    {
      number: "06",
      title: "Secrets",
      description:
        "Store sensitive configuration such as credentials and application secrets.",
      icon: ShieldCheck,
    },
  ];

  const workflow = [
    {
      number: "01",
      title: "Code",
      description: "Application source code",
      icon: GitBranch,
    },
    {
      number: "02",
      title: "Container",
      description: "Build a Docker image",
      icon: Box,
    },
    {
      number: "03",
      title: "Deploy",
      description: "Apply Kubernetes manifests",
      icon: Layers,
    },
    {
      number: "04",
      title: "Service",
      description: "Expose the workload",
      icon: Network,
    },
    {
      number: "05",
      title: "Observe",
      description: "Monitor application health",
      icon: Activity,
    },
  ];

  return (
    <main className="kubernetes-page">
      {/* HERO */}
      <section className="page-hero kubernetes-hero">
        <div className="kubernetes-hero-glow" />

        <div className="kubernetes-badge">
          <Box size={15} />
          KUBERNETES ENGINEERING
        </div>

        <h1>
          Deploy everywhere.
          <br />
          <span>Scale with control.</span>
        </h1>

        <p className="page-hero-description">
          Learn Kubernetes fundamentals, container orchestration,
          networking and production deployment workflows.
        </p>

        <div className="kubernetes-stats">
          <div>
            <strong>6+</strong>
            <span>CORE CONCEPTS</span>
          </div>

          <div>
            <strong>5</strong>
            <span>WORKFLOW STAGES</span>
          </div>

          <div>
            <strong>K3s</strong>
            <span>LOCAL PLATFORM</span>
          </div>
        </div>
      </section>

      {/* FOUNDATION */}
      <section className="content-section">
        <div className="section-heading kubernetes-foundation">
          <p className="eyebrow">01 / FOUNDATION</p>

          <h2>
            Kubernetes turns containers
            <br />
            into a managed system.
          </h2>

          <p>
            Kubernetes provides the control plane, scheduling,
            networking and automation required to run containerized
            applications reliably across infrastructure.
          </p>
        </div>

        <div className="kubernetes-principles">
          <div>
            <Layers size={18} />
            <span>Declarative workloads</span>
          </div>

          <div>
            <Activity size={18} />
            <span>Self-healing systems</span>
          </div>

          <div>
            <Network size={18} />
            <span>Service networking</span>
          </div>

          <div>
            <Settings size={18} />
            <span>Automated scheduling</span>
          </div>
        </div>
      </section>

      {/* CORE CONCEPTS */}
      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">02 / CORE CONCEPTS</p>

          <h2>
            The building blocks of
            <br />
            Kubernetes.
          </h2>

          <p>
            Understand the resources that make Kubernetes applications
            deployable, scalable and manageable.
          </p>
        </div>

        <div className="kubernetes-concepts-grid">
          {concepts.map((concept) => {
            const Icon = concept.icon;

            return (
              <article
                className="kubernetes-concept-card"
                key={concept.title}
              >
                <div className="concept-top">
                  <span>{concept.number}</span>

                  <div className="card-icon">
                    <Icon size={21} />
                  </div>
                </div>

                <h3>{concept.title}</h3>

                <p>{concept.description}</p>

                <ArrowRight
                  className="concept-arrow"
                  size={17}
                />
              </article>
            );
          })}
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">03 / DEPLOYMENT WORKFLOW</p>

          <h2>
            From source code
            <br />
            to running workload.
          </h2>

          <p>
            A Kubernetes deployment workflow connects application
            development, containerization and cluster operations.
          </p>
        </div>

        <div className="kubernetes-workflow">
          {workflow.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="workflow-step" key={item.title}>
                <div className="workflow-number">
                  {item.number}
                </div>

                <div className="workflow-icon">
                  <Icon size={20} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                {index < workflow.length - 1 && (
                  <ArrowRight className="workflow-arrow" size={17} />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* K3S */}
      <section className="content-section">
        <div className="k3s-card">
          <div className="k3s-content">
            <p className="eyebrow">04 / K3S</p>

            <h2>
              Lightweight Kubernetes.
              <br />
              Built for practical infrastructure.
            </h2>

            <p>
              K3s provides a lightweight Kubernetes distribution that
              is ideal for local development, labs, edge environments
              and resource-conscious infrastructure.
            </p>

            <div className="k3s-points">
              <span>Lightweight</span>
              <span>Production capable</span>
              <span>Easy to operate</span>
              <span>Great for labs</span>
            </div>
          </div>

          <div className="k3s-icon">
            <Server size={42} />
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">05 / ARCHITECTURE</p>

          <h2>
            Infrastructure should
            <br />
            be declarative.
          </h2>

          <p>
            Kubernetes manifests describe the desired state while the
            cluster continuously works to keep the actual state aligned.
          </p>
        </div>

        <div className="kubernetes-architecture">
          <div className="architecture-node">
            <div className="node-icon">
              <GitBranch size={20} />
            </div>

            <strong>Git</strong>
            <span>Source & manifests</span>
          </div>

          <ArrowRight size={20} />

          <div className="architecture-node">
            <div className="node-icon">
              <Settings size={20} />
            </div>

            <strong>Kubernetes</strong>
            <span>Desired state</span>
          </div>

          <ArrowRight size={20} />

          <div className="architecture-node">
            <div className="node-icon">
              <Box size={20} />
            </div>

            <strong>Pods</strong>
            <span>Running workloads</span>
          </div>

          <ArrowRight size={20} />

          <div className="architecture-node">
            <div className="node-icon">
              <Network size={20} />
            </div>

            <strong>Service</strong>
            <span>Application access</span>
          </div>
        </div>
      </section>

      {/* THIS PLATFORM */}
      <section className="content-section">
        <div className="kubernetes-project-card">
          <div>
            <p className="eyebrow">06 / THIS PLATFORM</p>

            <h2>
              React.
              <br />
              Docker.
              <br />
              K3s.
            </h2>

            <p>
              This platform uses the same application source to
              demonstrate containerization and Kubernetes deployment
              locally.
            </p>
          </div>

          <div className="kubernetes-project-flow">
            <div>React</div>
            <ArrowRight size={18} />

            <div>Docker</div>
            <ArrowRight size={18} />

            <div>K3d</div>
            <ArrowRight size={18} />

            <div>K3s</div>
            <ArrowRight size={18} />

            <div>Kubernetes</div>
          </div>
        </div>
      </section>
    </main>
  );
}

function GlobeIcon(props) {
  return <Network {...props} />;
}

export default Kubernetes;
