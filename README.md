<div align="center">

# James Hunter

<img src="https://readme-typing-svg.demolab.com/?font=Fira+Code&size=22&pause=1000&color=2F81F7&center=true&vCenter=true&width=600&height=50&lines=Low-level+systems+programming;Databases+%E2%80%A2+Storage+engines+%E2%80%A2+Networks;Building+a+company+network+from+scratch" alt="Low-level systems programming — databases, storage engines, networks" />

📍 Welland, ON

![C++20](https://img.shields.io/badge/C%2B%2B20-00599C?style=for-the-badge&logo=cplusplus&logoColor=white)
![Rust](https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Debian](https://img.shields.io/badge/Debian_13-A81D33?style=for-the-badge&logo=debian&logoColor=white)

![pfSense](https://img.shields.io/badge/pfSense-212121?style=for-the-badge&logo=pfsense&logoColor=white)
![WireGuard](https://img.shields.io/badge/WireGuard-88171A?style=for-the-badge&logo=wireguard&logoColor=white)
![Windows Server](https://img.shields.io/badge/Windows_Server_2025-0078D4?style=for-the-badge)
![VirtualBox](https://img.shields.io/badge/VirtualBox-183A61?style=for-the-badge&logo=virtualbox&logoColor=white)
![Ansible](https://img.shields.io/badge/Ansible-EE0000?style=for-the-badge&logo=ansible&logoColor=white)
![PowerShell](https://img.shields.io/badge/PowerShell-5391FE?style=for-the-badge)
![Grafana](https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=grafana&logoColor=white)
![Wazuh](https://img.shields.io/badge/Wazuh-3585F9?style=for-the-badge&logo=wazuh&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-FF9900?style=for-the-badge&logoColor=white)

</div>

```cpp
// james.hpp
#pragma once
#include <array>

struct James {
    static constexpr auto location  = "Welland, ON";
    static constexpr auto building  = "ad-homelab";              // a company network, from bare VMs up
    static constexpr auto completed = std::array{ "vector-db",   // WAL · ARIES recovery · O_DIRECT
                                                  "fitness-app"};// React Native, cross-platform
    static constexpr auto rule      = "assume every abstraction is guilty until proven useful";
};
```

## 🌐 Now Building · [ad-homelab](https://github.com/Jameshunter1/ad-homelab)

A small corporate network built from scratch in VirtualBox — real zones, real failure modes, documented like production.

| Layer | What's running |
| --- | --- |
| 🔀 **Network** | pfSense firewall with four isolated zones (LAN · SERVERS · DMZ · BRANCH), OSPF routing via FRRouting, planned WireGuard link to AWS |
| 🗂 **Domain** | Windows Server 2025 Active Directory (AD DS · DNS · DHCP) with a domain-joined Windows 11 client |
| 📦 **Fleet** | ~12 VMs cut from Debian 13 golden images and linked clones — all on 16 GB RAM and a single SSD |
| ⚙️ **Automation** | Ansible and PowerShell provisioning |
| 📈 **Observability** | Grafana dashboards and a Wazuh SIEM |
| 📓 **Docs** | Break/fix writeups (symptom → cause → fix) with screenshot evidence for every module |

<details>
<summary><b>🗺 Module roadmap (M0–M7)</b></summary>
<br>

| Module | Milestone |
| --- | --- |
| M0 | VM factory — golden images and snapshots |
| M1 | pfSense network with zone separation |
| M2 | First server with an HTTPS wiki |
| M3 | Dynamic routing — OSPF via FRRouting |
| M4 | Windows Active Directory domain |
| M5 | Automation — Ansible and PowerShell |
| M6 | Monitoring — Grafana and Wazuh SIEM |
| M7 | Cloud — AWS, WireGuard, backups |

</details>

## ✅ Completed · Production-Ready

* **Vector database engine** — disk-first storage: write-ahead logging, ARIES-style recovery, direct I/O *(private repo)*
* **Fitness mobile app** — cross-platform, built with React Native *(private repo)*

## 📊 Activity

<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://streak-stats.demolab.com/?user=Jameshunter1&hide_border=true&theme=dark">
  <img alt="Contribution streak" src="https://streak-stats.demolab.com/?user=Jameshunter1&hide_border=true">
</picture>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github-readme-activity-graph.vercel.app/graph?username=Jameshunter1&theme=react-dark&hide_border=true&area=true">
  <img alt="Contribution graph" src="https://github-readme-activity-graph.vercel.app/graph?username=Jameshunter1&theme=github-compact&hide_border=true&area=true">
</picture>

<br>

*Correctness over performance · Simplicity over flexibility · Predictability over cleverness*

</div>
