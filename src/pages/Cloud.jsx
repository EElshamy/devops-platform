import {
  Cloud,
  Server,
  Database,
  ShieldCheck,
  Network,
  Globe,
  Activity,
  LockKeyhole,
  ArrowRight,
} from "lucide-react";

function CloudPage() {
  const services = [
    {
      number: "01",
      title: "Compute",
      description: "Run applications and workloads on scalable cloud infrastructure.",
      icon: Server,
      examples: "EC2 • Containers • Auto Scaling",
    },
    {
      number: "02",
      title: "Storage",
      description: "Store application assets, backups and static content reliably.",
      icon: Database,
      examples: "S3 • EBS • Backups",
    },
    {
      number: "03",
      title: "Networking",
      description: "Design secure and highly available cloud networks.",
      icon: Network,
      examples: "VPC • Subnets • Load Balancers",
    },
    {
      number: "04",
      title: "Security",
      description: "Control access and protect infrastructure using cloud security practices.",
      icon: ShieldCheck,
      examples: "IAM • Policies • Secrets",
    },
    {
      number: "05",
      title: "CDN & DNS",
      description: "Deliver applications globally with fast and reliable networking.",
      icon: Globe,
      examples: "CloudFront • Route 53 • Cloudflare",
    },
    {
      number: "06",
      title: "Observability",
      description: "Monitor infrastructure, applications and operational health.",
      icon: Activity,
      examples: "CloudWatch • Metrics • Logs",
    },
  ];

  const awsServices = [
    "EC2",
    "S3",
    "IAM",
    "VPC",
    "CloudFront",
    "Route 53",
    "CloudWatch",
    "ECR",
  ];

  return (
    <main className="cloud-page">
      {/* HERO */}
      <section className="page-hero cloud-hero">
        <div className="hero-badge">
          <Cloud size={15} />
          CLOUD ENGINEERING
        </div>

        <h1>
          Build cloud infrastructure.
          <br />
          <span>Scale with confidence.</span>
        </h1>

        <p className="page-hero-description">
          Learn how modern cloud infrastructure is designed, secured,
          automated and operated at scale.
        </p>

        <div className="hero-stats">
          <div>
            <strong>8+</strong>
            <span>AWS SERVICES</span>
          </div>

          <div>
            <strong>3</strong>
            <span>CORE LAYERS</span>
          </div>

          <div>
            <strong>∞</strong>
            <span>SCALABILITY</span>
          </div>
        </div>
      </section>

      {/* FOUNDATION */}
      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">01 / FOUNDATION</p>

          <h2>
            Cloud is more than running
            <br />
            servers.
          </h2>

          <p>
            Modern cloud engineering combines compute, networking,
            storage, security and observability into reliable systems
            that can evolve with application requirements.
          </p>
        </div>

        <div className="cloud-principles">
          <div>
            <LockKeyhole size={18} />
            <span>Security by design</span>
          </div>

          <div>
            <Activity size={18} />
            <span>Observable systems</span>
          </div>

          <div>
            <Network size={18} />
            <span>Reliable networking</span>
          </div>

          <div>
            <Cloud size={18} />
            <span>Elastic infrastructure</span>
          </div>
        </div>
      </section>

      {/* CLOUD LAYERS */}
      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">02 / CLOUD LAYERS</p>

          <h2>
            The building blocks of
            <br />
            cloud infrastructure.
          </h2>
        </div>

        <div className="cloud-services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="cloud-service-card" key={service.title}>
                <div className="service-top">
                  <span>{service.number}</span>

                  <div className="card-icon">
                    <Icon size={21} />
                  </div>
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="service-examples">
                  {service.examples}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* AWS */}
      <section className="content-section">
        <div className="aws-card">
          <div className="aws-card-content">
            <p className="eyebrow">03 / AWS</p>

            <h2>
              Build production infrastructure
              <br />
              on AWS.
            </h2>

            <p>
              Explore the AWS services commonly used to build,
              deploy and operate modern applications.
            </p>

            <div className="aws-services">
              {awsServices.map((service) => (
                <span key={service}>{service}</span>
              ))}
            </div>
          </div>

          <div className="aws-icon">
            <Cloud size={42} />
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">04 / ARCHITECTURE</p>

          <h2>
            Infrastructure should be
            <br />
            repeatable.
          </h2>

          <p>
            Use Infrastructure as Code, automation and managed cloud
            services to create predictable environments.
          </p>
        </div>

        <div className="architecture-flow">
          <div>
            <span>01</span>
            <strong>Code</strong>
            <p>Terraform</p>
          </div>

          <ArrowRight size={20} />

          <div>
            <span>02</span>
            <strong>Provision</strong>
            <p>AWS</p>
          </div>

          <ArrowRight size={20} />

          <div>
            <span>03</span>
            <strong>Deploy</strong>
            <p>GitHub Actions</p>
          </div>

          <ArrowRight size={20} />

          <div>
            <span>04</span>
            <strong>Operate</strong>
            <p>CloudWatch</p>
          </div>
        </div>
      </section>

      {/* PROJECT */}
      <section className="content-section">
        <div className="cloud-project-card">
          <div>
            <p className="eyebrow">05 / THIS PLATFORM</p>

            <h2>
              S3.
              <br />
              CloudFront.
              <br />
              Cloudflare.
            </h2>

            <p>
              This platform itself is designed as a practical example
              of a serverless static architecture using AWS.
            </p>
          </div>

          <div className="project-flow">
            <div>React</div>
            <ArrowRight size={18} />

            <div>S3</div>
            <ArrowRight size={18} />

            <div>CloudFront</div>
            <ArrowRight size={18} />

            <div>Cloudflare</div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CloudPage;
