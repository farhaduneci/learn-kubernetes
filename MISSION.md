# Mission: Kubernetes

## Why
Farhad wants to be genuinely productive with Kubernetes and pass k8s-related interview questions in backend, software, and AI role interviews. The learning is aimed at eventually earning the **CKAD (Certified Kubernetes Application Developer)** certification, using its objectives as the curriculum skeleton — whether or not the exam is ultimately sat.

## Success looks like
- Can explain core k8s architecture and concepts fluently in an interview setting (pods, deployments, services, config, networking, storage, etc.)
- Can deploy, debug, and manage real workloads on a local cluster (minikube) using kubectl and YAML manifests
- Comfortable with production-adjacent tooling: Helm, ingress, basic observability, and CI/CD-to-k8s workflows
- Has enough AWS fundamentals (IAM, VPC, EC2, security groups) to understand how k8s runs on AWS (EKS) — this is **not** taught here; it's owned by the separate [`learn-aws`](https://github.com/farhaduneci/learn-aws) track. When EKS context needs AWS background, study the relevant lesson there first, then come back
- Ready to sit (or at least pass a mock version of) the CKAD exam
- Knows 1-2 active k8s communities for real-world Q&A once fundamentals are solid

## Constraints
- No fixed deadline — general prep, but move efficiently (~20-30 min sessions, 3-4x/week)
- Zero cloud spend within this track: k8s practice stays on **minikube** — no real AWS account/credit used here (the `learn-aws` track separately uses a real free-tier AWS account under its own billing guardrails)
- Prior experience: comfortable with Docker basics; Kubernetes is new. AWS fundamentals are covered in `learn-aws`, not here
- Learning style: short high-quality texts + well-vetted authoritative videos, hands-on practice by doing, light retrieval-practice quizzes, open to assigned reading/labs (book chapters, blog posts, external labs) — no existing resources in progress, so resources are curated fresh and tracked in `RESOURCES.md`
- Unified core-k8s track first; AI-infra specifics (GPU scheduling, model-serving e.g. KServe/Kubeflow) deferred as a later add-on

## Out of scope
- AWS fundamentals of any kind (IAM, VPC, EC2, billing, etc.) — owned entirely by the `learn-aws` track, not duplicated here
- Real AWS/cloud spend (no EKS on a real account, no paid cloud resources)
- AI-infra-specific k8s topics (GPU scheduling, model-serving platforms) until core CKAD-level fundamentals are solid
- Service mesh (Istio/Linkerd) and other advanced production topics beyond CKAD scope, for now
