---
templateKey: blog-post
title: "MagmaML: Towards Automated Management for Low-resource 5G Cellular Network Deployments"
author: Rahman Doost-Mohammady and Ashutosh Sabharwal
date: 2021-03-29T09:00:00.000Z
category:
  - label: Community
    id: magmaml-towards-automated-management-for-low-resource-5g-cellular-network-deployments
---

Troubleshooting of cellular networks is contributing billions of dollars to the operational expenditure (OPEX) of mobile network operators (MNOs) every year. This process involves monitoring KPIs throughout the network and detecting anomalies either manually or through automation[^1]. In many cases, once such 'anomaly' is detected, often manual intervention is needed for root cause analysis that may require site access to investigate the root cause which in turn may take 10s of man-hours to fix.

The rollout of 5G is set to complicate this process even further largely due to three major trends:

* The adoption of advanced technologies such as massive multiple-input multiple-output (MIMO) where each base station is equipped with many antennas and can perform multi-user beamforming, substantially increases the pieces that can contribute to failuresand poor KPIs.
* Cellular network densification through the deployment of small cells in addition to the macrocells creates increased inter-cell interference, potentially much larger and more unpredictable compared to the carefully planned cells in the previous generation of networks.
* Lastly, the adoption of virtualization and network slicing makes the networks prone to a variety of problems caused by faults at the data center infrastructure, software bugs manifested after deployment, unsuccessful live updates, etc.

All of these justify the need for automated tools to effectively diagnose issues and provide potential solutions to recover from faults as fast and reliably as possible.

## The Role of Research and Open-source Developer Community

Given the complexities of 5G networks, there is a clear need for the research community to get deeply involved in developing effective automated diagnosis tools and demonstrate them on open-source systems. For example, the advent of deep learning provides great opportunities in dealing with such complexities to find patterns during network fault diagnosis. In particular, if large-scale labeled datasets of network KPIs in abnormal states and the associated underlying root causes existed or could be generated, effective ML models could be developed to automate the diagnosis. However such large-scale networks and in effect respective datasets are typically available only to big MNOs and the research and open-source developer community is severely limited in contributing to this field.  Even for the MNOs, the type of data that can be logged is limited to the KPIs and control-plane information that are exposed by their vendor-locked hardware. Therefore, many key information that could help in the troubleshootingprocessing, including the data-plane information at the intermediate layers, are not observable. To enable the research community to take on this challenge, two key components are needed: 1) large-scale open-access platforms, and 2) open-source 5G software stacks. Together these two components will allow researchers to not only collect datasets, test and demonstrate their automated tools, but most importantly, to work as a community towards the vision of low-cost management of networks.

## City-Scale Wireless Testbeds as Open-access Platform

The advent of city-scale testbeds such as the ones funded and being deployed through the NSF [platform for advanced wireless research (PAWR)](https://advancedwireless.org/) initiative provides a great opportunity towards this vision. As part of these testbeds, hundreds of software-defined base station class radios, including massive MIMO and mmWave technologies, are being deployed in relatively large geographic areas and in diverse frequency bands. For example, the University of Utah runs the [POWDER](https://powderwireless.net/) testbed that includes many software-defined radio base stations across its campus with remote access to the community.

As part of the RENEW project at Rice University, a highly capable and fully open-source software-defined massive MIMO base station, called Faros, has been developed in collaboration with [Skylark Wireless](https://skylarkwireless.com/), and has been deployed on the campuses of Rice Universityand the University of Utah.

Such platforms provide a unique opportunity for the open-source community to leverage these systems to deploy and test virtualized cellular networks at a large scale, and through that also generate the much-needed labeled datasets. Using these highly configurable testbeds, many of the faults that can occur in cellular networks are possible to emulate, such as the excessive cell load, inter-cell interference, faulty UEs, among others. For example, let’s look at aparticular inter-cell interference scenario that occurs in current networks. In a heterogeneous deployment, where both macrocells and small cells are deployed in a geographic area, the downlink connection of the macrocell could adversely affect the downlink transmission of the small cell. Similarly, when a macrocell user is in the proximity of the small cell and far from the macrocell, its high uplink power could swamp the uplink connection for users of the small cell (see Fig. 1). These types of problems usually go unnoticed due to the lack of coordination between the small cell and macrocell base stations, particularly because small cells are supposed to be cheap (low-resource) and unplanned.

Many other similar scenarios could hamper the performance of cells in the network. These scenarios are possible to replicate in these open-access testbeds. Through a community effort, relevant datasets could be generated for these scenarios to use in training models for automated network diagnosis.


![Figure 1](/img/Figure-1.png "Figure-1")
###### Figure 1. Inter-cell interference scenarios between macro and small cells[^2]

## Open-Source 5G Software

To fully unlock the potential of automated network diagnosis, we need reliable open-source 5G systems where all aspects of the hardware and software are observable. In the past few years, several open-source software projects have been started, including [Magma](https://connectivity.fb.com/magma/) and [OpenAirInerface](https://openairinterface.org/), the two most active open-source communities for the core and radio access network, respectively.

Magma provides an open, flexible, and extendable mobile core network solution to network operators. It is designed to lower the cost of ownership for the entire mobile network and thus enables service providers to build cost-effective and extensible carrier-grade networks. It is already deployed in the field by some operators in several hard-to-reach areas, and therefore it is operationally tested.

OpenAirInterface is another open-source community software that is being used by many researchers in academia, research centers, and R&D groups in companies largely for validating new ideas on radio access networks. However, its use has largely remained at lab-scale test setups and is not widely tested in the field. It also does not currently implement all the advanced features of 5G networks such as massive MIMO. As part of the [RENEW](https://renew-wireless.org/) project, a new massive MIMO-based radio access network (RAN) is being developed that is fully virtualized and is capable of running on commercial off-the-shelf many-core servers in real-time. The Layer-1 (PHY Layer) of this RAN, which is the most computationally expensive part of a massive MIMO-based RAN, is called [Agora](https://www.github.com/jianding17/agora) [^3] and shown to achieve gigabit-level data rates. As part of the RENEW project, there is an effort to integrate all these components including Magma as the core network, OpenAirInterface as the higher layers of RAN, Agora as the layer-1 of the RAN, and Faros as the 5G massive MIMO radio hardware to create a full-stack open-source 5G system. Note that Faros hardware is fully open-source including its firmware and software drivers, and provides unprecedented access into the interworking and reconfiguration of the hardware. Together, all these pieces constitute a full-stack open-source 5G system needed to start the work in automated network diagnosis.


## MagmaML

MagmaML is an ongoing project to develop a software module for Magma that uses a variety of rule-based and deep learning techniques to observe, diagnose and provide fixes for the core and radio access network. MagmaML will be part of the Magma orchestrator, as a microservice and will observe the network at every layer through both control-plane and data-plane. When run on a test network, MagmaML enables the user to reconfigure the network to certain states that could lead to faults (Fault injection). Through this process, MagmaML observes various KPIs, probes the data plane, and "learns" from those faults. These observations could be added as data points to a new or existing labeled dataset, which is in turn used to train new ML models or updating existing models, or become part of a reinforcement learning strategy. Lastly, the MagmaML microservice is envisaged to have a fault suggestion tool that provides a diagnosis to the network operator once a fault occurs in the network. The first set of datasets to implement and demonstrate MagmaML will use the Magma core network plus the RENEW RAN run on POWDER-RENEW testbed. A block diagram of the system is sketched below.


![Figure 2](/img/Figure-2.png "Figure-2")
###### Figure 2. A Block Diagram of MagmaML Deployed in Magma+RENEW-RAN 5G Network

In the future, as Magma is deployed by operators in operational networks, we hope MagmaML will play a key role in keeping different elements of the network in check and providing sound diagnoses when problems occur. We also envisage that MagmaML would pave the way to the ultimate goal of self-organizing networks, where sound decisions for optimal network performance can be made automatically.

## Authors

**Rahman Doost-Mohammady** is an assistant research professor at Rice University. His research interests span wireless systems design and networking and embedded reconfigurable computing. He is the technical lead for the Rice RENEW, an NSF PAWR Project developing an open-source massive MIMO community platform.

**Ashutosh Sabharwal's** research interests are in wireless theory, design, and large-scale deployed testbeds. He is the founder of the WARP project (warp.rice.edu), an open-source project which is now in use at more than 125 research groups worldwide and has been used by more than 500 research articles. He is currently leading several NSF-funded center-scale projects, notably Rice RENEW (renew-wireless.org), to develop an open-source software-defined wireless network platform. He received the 2017 IEEE Jack Neubauer Memorial Award, 2018 IEEE Advances in Communications Award, 2019 ACM Test-of-time Award, and 2019 ACM MobiCom Community Contribution Award. He is a Fellow of IEEE and the National Academy of Inventors.

## References

[^1]: Anand Padmanabha Iyer, Li Erran Li, and Ion Stoica. 2017. Automating Diagnosis of Cellular Radio Access Network Problems. In Proceedings of the 23rd Annual International Conference on Mobile Computing and Networking (MobiCom '17). Association for Computing Machinery, New York, NY, USA, 79–87. DOI:https://doi.org/10.1145/3117811.3117813

[^2]: W. Yu, H. Xu, H. Zhang, D. Griffith and N. Golmie, "Ultra-Dense Networks: Survey of State of the Art and Future Directions," 2016 25th International Conference on Computer Communication and Networks (ICCCN), Waikoloa, HI, USA, 2016, pp. 1-10, doi: 10.1109/ICCCN.2016.7568592.

[^3]: Jian Ding, Rahman Doost-Mohammady, Anuj Kalia, and Lin Zhong. 2020. Agora: Real-time massive MIMO baseband processing in software. In Proceedings of the 16th International Conference on Emerging Networking EXperiments and Technologies (CoNEXT '20). Association for Computing Machinery, New York, NY, USA, 232–244. DOI:https://doi.org/10.1145/3386367.3431296


