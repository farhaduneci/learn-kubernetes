// Single source of truth for the learning path rendered on index.html.
// Add one entry per lesson/reference doc here — index.html renders from this,
// nothing about a lesson's title/description/status should be re-typed there.
// status: "done" | "in-progress" | "next" | "upcoming"
window.LESSONS = [
  {
    title: "Lesson 1 &middot; Control Plane vs Node",
    description: "Core architecture: control plane components, node components, the reconciliation loop, and what a Pod is.",
    href: "lessons/0001-core-architecture.html",
    status: "in-progress",
  },
  {
    title: "Lesson 2 &middot; Pods &amp; Controllers (Deployments)",
    description: "First hands-on lesson on minikube — creating Pods via a Deployment, kubectl basics.",
    href: null,
    status: "next",
  },
];

window.REFERENCES = [
  {
    title: "Reference: Kubernetes Architecture",
    description: "control plane/node components, the core loop, the Pod.",
    href: "reference/architecture.html",
  },
];
