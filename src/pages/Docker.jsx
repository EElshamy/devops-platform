import {
  Container,
  Box,
  FileCode2,
  Layers,
  Database,
  Network,
  ShieldCheck,
  GitBranch,
  Terminal,
  Cloud,
  ArrowRight,
} from "lucide-react";

function Docker() {
  const concepts = [
    {
      number: "01",
      title: "Images",
      description:
        "Immutable application packages that contain everything required to run a workload.",
      icon: Box,
    },
    {
      number: "02",
      title: "Containers",
      description:
        "Isolated runtime environments created from Docker images.",
      icon: Container,
    },
    {
      number: "03",
      title: "Dockerfile",
      description:
        "A declarative recipe used to build reproducible Docker images.",
      icon: FileCode2,
    },
    {
      number: "04",
      title: "Volumes",
      description:
        "Persistent storage that keeps application data outside the container lifecycle.",
      icon: Database,
    },
    {
      number: "05",
      title: "Networks",
      description:
        "Virtual networks that allow containers and services to communicate securely.",
      icon: Network,
    },
    {
      number: "06",
      title: "Registry",
      description:
        "A centralized location for storing, versioning and distributing container images.",
      icon: Cloud,
    },
  ];

  const workflow = [
    {
      number: "01",
      title: "Code",
      description: "Write application source code.",
      icon: GitBranch,
    },
    {
      number: "02",
      title: "Build",
      description: "Create an image from a Dockerfile.",
      icon: FileCode2,
    },
    {
      number: "03",
      title: "Run",
      description: "Start the application as a container.",
      icon: Container,
    },
    {
      number: "04",
      title: "Ship",
      description: "Push the image to a registry.",
      icon: Cloud,
    },
    {
      number: "05",
      title: "Deploy",
      description: "Run the image on production infrastructure.",
      icon: Layers,
    },
  ];

  const commands = [
    "docker build -t app:latest .",
    "docker images",
    "docker run -d -p 8080:80 app:latest",
    "docker ps",
    "docker logs <container>",
    "docker exec -it <container> sh",
    "docker stop <container>",
    "docker rm <container>",
  ];

  return (
    <main className="docker-page">
      {/* HERO */}
      <section className="page-hero docker-hero">
        <div className="docker-hero-glow" />

        <div className="docker-badge">
          <Container size={15} />
          CONTAINER ENGINEERING
        </div>

        <h1>
          Build once.
          <br />
          <span>Run anywhere.</span>
        </h1>

        <p className="page-hero-description">
          Learn Docker fundamentals, containerization, image building,
          networking, storage and production workflows.
        </p>

        <div className="docker-stats">
          <div>
            <strong>6+</strong>
            <span>CORE CONCEPTS</span>
          </div>

          <div>
            <strong>5</strong>
            <span>WORKFLOW STAGES</span>
          </div>

          <div>
            <strong>∞</strong>
            <span>PORTABILITY</span>
          </div>
        </div>
      </section>

      {/* FOUNDATION */}
      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">01 / FOUNDATION</p>

          <h2>
            Docker packages applications
            <br />
            with their environment.
          </h2>

          <p>
            Containers provide a consistent way to package, ship and run
            applications across development, testing and production.
          </p>
        </div>

        <div className="docker-principles">
          <div>
            <Container size={18} />
            <span>Application containers</span>
          </div>

          <div>
            <Box size={18} />
            <span>Immutable images</span>
          </div>

          <div>
            <Network size={18} />
            <span>Isolated networking</span>
          </div>

          <div>
            <ShieldCheck size={18} />
            <span>Controlled environments</span>
          </div>
        </div>
      </section>

      {/* CORE CONCEPTS */}
      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">02 / CORE CONCEPTS</p>

          <h2>
            The building blocks
            <br />
            of Docker.
          </h2>

          <p>
            Understand the core components that make containerized
            applications portable and reproducible.
          </p>
        </div>

        <div className="docker-concepts-grid">
          {concepts.map((concept) => {
            const Icon = concept.icon;

            return (
              <article className="docker-concept-card" key={concept.title}>
                <div className="concept-top">
                  <span>{concept.number}</span>

                  <div className="card-icon">
                    <Icon size={21} />
                  </div>
                </div>

                <h3>{concept.title}</h3>

                <p>{concept.description}</p>

                <ArrowRight className="concept-arrow" size={17} />
              </article>
            );
          })}
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">03 / CONTAINER WORKFLOW</p>

          <h2>
            From source code
            <br />
            to running container.
          </h2>

          <p>
            Docker connects application development with a repeatable
            container build and deployment workflow.
          </p>
        </div>

        <div className="docker-workflow">
          {workflow.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="docker-workflow-step" key={item.title}>
                <div className="workflow-number">{item.number}</div>

                <div className="workflow-icon">
                  <Icon size={20} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                {index < workflow.length - 1 && (
                  <ArrowRight
                    className="workflow-arrow"
                    size={17}
                  />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* DOCKERFILE */}
      <section className="content-section">
        <div className="dockerfile-card">
          <div className="dockerfile-content">
            <p className="eyebrow">04 / DOCKERFILE</p>

            <h2>
              Infrastructure starts
              <br />
              with a reproducible image.
            </h2>

            <p>
              A Dockerfile defines how an application image is built,
              making the build process predictable and repeatable.
            </p>
          </div>

          <div className="docker-code">
            <div className="code-header">
              <span>Dockerfile</span>
              <FileCode2 size={15} />
            </div>

            <pre>
{`FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=0 /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]`}
            </pre>
          </div>
        </div>
      </section>

      {/* COMMANDS */}
      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">05 / ESSENTIAL COMMANDS</p>

          <h2>
            Commands you should
            <br />
            know by heart.
          </h2>

          <p>
            The Docker CLI is the primary interface for building,
            running and troubleshooting containers.
          </p>
        </div>

        <div className="docker-commands">
          {commands.map((command, index) => (
            <div className="docker-command" key={command}>
              <span>{String(index + 1).padStart(2, "0")}</span>

              <Terminal size={16} />

              <code>{command}</code>
            </div>
          ))}
        </div>
      </section>

      {/* DOCKER + KUBERNETES */}
      <section className="content-section">
        <div className="docker-kubernetes-card">
          <div>
            <p className="eyebrow">06 / DOCKER + KUBERNETES</p>

            <h2>
              Containers are the
              <br />
              foundation.
            </h2>

            <p>
              Docker builds and packages application containers.
              Kubernetes can then orchestrate those containers across
              a cluster.
            </p>
          </div>

          <div className="docker-kubernetes-flow">
            <div>
              <Container size={19} />
              <span>Docker</span>
            </div>

            <ArrowRight size={18} />

            <div>
              <Box size={19} />
              <span>Image</span>
            </div>

            <ArrowRight size={18} />

            <div>
              <Layers size={19} />
              <span>Kubernetes</span>
            </div>
          </div>
        </div>
      </section>

      {/* THIS PLATFORM */}
      <section className="content-section">
        <div className="docker-project-card">
          <div>
            <p className="eyebrow">07 / THIS PLATFORM</p>

            <h2>
              React.
              <br />
              Docker.
              <br />
              K3s.
            </h2>

            <p>
              This platform uses Docker to package the React application
              into a production-ready container that can run locally
              with K3d and K3s.
            </p>
          </div>

          <div className="docker-project-flow">
            <div>React</div>

            <ArrowRight size={18} />

            <div>Dockerfile</div>

            <ArrowRight size={18} />

            <div>Docker Image</div>

            <ArrowRight size={18} />

            <div>K3s</div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Docker;
