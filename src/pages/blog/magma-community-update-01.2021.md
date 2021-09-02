---
templateKey: blog-post
title: Open Infrastructure Foundation Magma Community Update 2021
author: Kendall Waters
date: 2021-01-29T09:00:00.000Z
category:
  - label: Community
    id: Magma-Community-Update-01.2021
---
[Magma](https://github.com/magma/) is an open source software platform that delivers an open, flexible and extendable mobile network core solution. Magma’s mission is to connect the world to a faster network by enabling service providers to build cost-effective and extensible carrier-grade networks.  It is designed to be access network agnostic (4G, 5G or WiFi), flexibly supporting a radio access network with minimal development and deployment effort.

Magma was developed as an open source project as part of Facebook Connectivity’s incubator program, with significant contributions from the OpenAirInterface Software Alliance.  In July of 2020 Magma’s code and documentation was contributed to a new, independent software project magmacore.org.

Magma’s architecture consists of three major subsystems:

* The Access Gateway (AGW) provides network services and policy enforcement. In an LTE network, the AGW implements an evolved packet core (EPC), and a combination of an AAA and a PGW. It works with existing, unmodified commercial radio hardware.  Support of 5G radios is under active development.
* Orchestrator is a service that provides a simple and consistent way to configure and monitor the wireless network securely. The orchestrator can be is normally hosted on a public or private cloud. The metrics acquired through the platform allow you to see the analytics and traffic flows of the wireless users through the Magma web UI.  Orchestrator also provides REST APIs allowing simple integration with monitoring and management systems.
* The federation gateway allows Magma to integrate with other Mobile Network Operator core network functions using standard 3GPP interfaces. It acts as a proxy between the Magma AGW and the operator's network and facilitates core functions, such as authentication, data plans, policy enforcement, and charging to stay uniform between an existing MNO network and the expanded network with Magma.

## Community

At the Open Infrastructure Summit in October 2020, the Open Infrastructure Foundation announced its support of the Magma project. With help from the Foundation, magmacore.org has been structured to make it easy to contribute to the project. It is centered around a developer-led governance with Maintainers providing code review and approval for contributions and a small Technical Committee selected from among the project maintainers providing overall architecture and roadmap oversight. In addition, the Open Infrastructure Foundation also helped launch the Magma Slack workspace back where many community and technical conversations take place. After the Summit announcement, the Slack workspace grew by over 100 people. 

The Open Infrastructure Foundation also assists with the monthly Magma community meetings where project updates and use cases are presented. Community members also get the opportunity to ask questions directly to the Magma engineers. The first community meeting took place in November 2020 and had over 20 attendees. [View the meeting recordings here](https://etherpad.opendev.org/p/r.2846b991172abd605b49c6366b743b2f).
