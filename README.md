# James Hunter
**Lead Systems Engineer | Vectis Database Core**

I specialize in database internals, high-performance storage engines, and system durability. My work focuses on building low-level infrastructure that is mechanically verifiable, simple, and crash-safe.

* 🌍 **Location:** Welland, ON
* 🚀 **Current Focus:** Leading development on [Vectis](https://github.com/Jameshunter1/VectorDBMS), a disk-first vector engine.
* 🛠 **Principles:** Correctness over performance. Simplicity over flexibility. Predictability over cleverness.

---

## 🏗 Core Expertise

### Systems Programming & Databases
* **Languages:** C++23 (Core Engine), Python (SDKs/Tooling), Rust.
* **Storage Internals:** ARIES Recovery, WAL implementation, Buffer Pool Management (LRU-K).
* **Disk I/O:** `O_DIRECT`, Linux `io_uring` pipelines, 32KB page-aligned storage systems.
* **Vector Search:** SIMD-optimized HNSW indexing and similarity search.

### Infrastructure & Environments
* **Linux:** Kernel-level I/O tuning and resource management.
* **Cloud:** AWS (S3, EC2, EBS optimization).
* **Reliability:** CI/CD for systems software, automated durability testing.

---

## 🔭 Featured Project: Vectis
Vectis is a persistent vector database engine designed for absolute data durability.
* **32KB Page Unit:** Optimized for NVMe physical sector alignment.
* **Direct I/O:** Bypasses OS page cache for total buffer pool authority.
* **Crash Safety:** Strict ARIES-style Write-Ahead Logging.

---

## 📊 Engineering Impact
![GitHub Stats](./github-metrics.svg)

---

## 📬 Connectivity
* **Source:** [GitHub](https://www.github.com/jameshunter1)

> "Assume every abstraction is guilty until proven useful."
