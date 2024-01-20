# Undergraduate Thesis
## An Architecture to Allow Direct File-System Access on GPU

Starting in late January 2022, I joined Dr. Alexandra (Sasha) Fedorova's research group to complete an undergraduate thesis. The group identified a bottle neck in many modern workloads which require massive parallelization and data handling: Many of these workloads operate largely on specialized processors (such as GPUs), and use a centralized CPU only to coordinate between subsystems and facilitate data transfers. Noting that many periferals today have their own processors (SSDs, smart NICs, memory), the group envisioned a decentralized, CPU-less system, in which independent, specialized devices communicate together to execute workloads.

As a first step to this vision, the team wanted to explore the possibility of direct communication between a GPU, 

<object data="embedations/undergrad_thesis.pdf" width="1000" height="1000" type='application/pdf'></object>