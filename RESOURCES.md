# Kubernetes Resources

## Knowledge

- [CNCF CKAD Curriculum](https://github.com/cncf/curriculum/tree/master/ckad)
  The official exam domain/weighting breakdown published by CNCF/Linux Foundation. This is the curriculum skeleton for the whole mission — use it to decide topic order and depth. Current domains: Application Environment/Config/Security (25%), Application Design and Build (20%), Application Deployment (20%), Services and Networking (20%), Observability and Maintenance (15%).
- [Kubernetes Concepts (official docs)](https://kubernetes.io/docs/concepts/)
  Primary source for every core concept (pods, controllers, services, volumes, config). Written and maintained by the project itself — always the first citation to reach for.
- [Kubernetes Basics — interactive tutorial](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
  Official in-browser walkthrough (cluster, deploy, scale, update, expose). Good for a first hands-on pass before touching minikube for real.
- [kubectl Cheat Sheet (official docs)](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)
  Canonical command reference. Feed into reference docs rather than re-deriving syntax from memory.
- [TechWorld with Nana — Kubernetes Tutorial for Beginners (YouTube)](https://www.youtube.com/watch?v=X48VuDVv0do)
  Widely-recommended free intro video course; strong at building the mental model of architecture before diving into YAML. Use for: first pass on core architecture and why-Kubernetes framing.
- [killer.sh CKAD Simulator](https://killer.sh/ckad)
  The official CKAD exam simulator (included with real exam purchase, but scenarios/tips are documented publicly). Save for late-stage mock-exam practice, not early learning — it's calibrated to real exam difficulty.
- Book: _Kubernetes in Action_ — Marko Lukša (Manning)
  Well-regarded deep-dive text covering the "why" behind k8s design decisions. Use for: topics where the official docs are too terse (e.g. scheduler internals, networking model).

## Wisdom (Communities)

- [r/kubernetes](https://reddit.com/r/kubernetes)
  Active, reasonably high-signal subreddit. Use for: real-world troubleshooting patterns, "how do people actually do X in production" questions.
- [Kubernetes Slack](https://slack.k8s.io/) — `#kubernetes-novice` channel
  Official community Slack; the novice channel is explicitly for learners. Use for: unblocking on specific errors, CKAD study-group threads.

## Gaps

- No AWS/EKS/LocalStack-specific resources curated yet — deferred per `MISSION.md` until core CKAD fundamentals are solid. Revisit when the AWS-fundamentals-via-LocalStack phase starts.
- No CKAD-specific paid course selected yet (e.g. KodeKloud). Free resources are sufficient for now; revisit if progress stalls or exam date is set.
