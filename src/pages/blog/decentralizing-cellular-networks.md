---
templateKey: blog-post
title: Decentralizing Cellular Networks
author: Bruce Davie and Amar Padmanabhan
date: 2022-07-03T09:00:00.000Z
category:
  - label: Community
    id: decentralizing-cellular-networks
---

Decentralization is unquestionably a hot topic in networking, with the much-hyped development of “Web3” promising a return to the internet’s decentralized roots. This is viewed as a necessary corrective to the [increasing centralization of the internet](https://systemsapproach.substack.com/p/decentralizing-the-internet-again?r=cxpek&utm_campaign=post&utm_medium=web&s=r) around a few large platforms.

But what about cellular networks? We believe that a more decentralized approach to cellular networking has great potential, especially as 5G rolls out. Let’s take a look at one emerging model of decentralized cellular networking and the advantages it might offer to the industry.

## Centralization of traditional cellular networks

While the internet’s architecture is highly decentralized—routers, switches, and autonomous systems are distributed across regions and providers—the cellular network has historically been run in a more centralized fashion. The typical mobile packet core comprises a small number of devices that are centrally located. The core is connected to a set of widely dispersed base stations using backhaul links.

This model is a good fit for traditional telcos, who obtain licenses for spectrum over wide areas and can operate services using a mostly centralized packet core that is appropriately sized for the customer base.

![Decentralizing Cellular Networks](/img/dec-cel-net-img1.jpg "Decentralizing Cellular Networks") 

## Small cells will change the architecture

With the rollout of 5G, the wireless landscape is changing. Increasing bandwidth and density requirements call for a more decentralized model that can coexist alongside today’s centralized model. “Small cells,” which make use of spectrum with a range of about 10 meters to a few kilometers, will play an important role in 5G to achieve its density and bandwidth goals. This means that the set of radios connected to the cellular network will be both more numerous and more heterogeneous.

Small cells may also mean that many of these radios are no longer under the direct control of the telco. Small cell radios are typically much smaller than the giant cell towers used for long-range coverage. The smallest ones can be about the size of a home internet router. Given appropriate access to radio spectrum, individuals or businesses can put up their own small cell radio base stations on the real estate they already own. This contrasts with the typical capital-intensive approach of large cells, in which telcos must acquire rights to locations on which to construct towers. In this way, small cells effectively drive decentralization.

In the United States, the availability of [CBRS](https://en.wikipedia.org/wiki/Citizens_Broadband_Radio_Service), a “lightly licensed” spectrum band, solves the issue of access to spectrum. Now, with small cell radios and appropriate spectrum, we have two of the critical components for a decentralized cellular network. But how do we make it all work as a coherent network service?

## Magma: A decentralized mobile core

The Magma project offers a decentralized approach to building mobile packet cores. Magma pushes much of the mobile core implementation out [closer to the edge](https://www.magmacore.org/blog/software-is-eating-the-edge/), with small access gateways sitting close to radios. Unlike traditional mobile solutions, Magma readily scales up in small increments with the addition of these small access gateways. Magma also supports federation with existing cellular networks, making it possible to authenticate users against different customer databases. With this model, multiple carriers can tap into this decentralized network to extend their reach without having to make large capital investments.

An important question remains, however. How do we incentivize people to deploy these small cells? This is where the Helium Network, a novel approach to wireless networks, comes in.

## Helium offers a new business model

If we want decentralized networks, we may need a decentralized way to pay for their usage. The Helium Network leverages a novel blockchain that uses “proof of coverage” to create tokens. Individuals and businesses that stand up a small cell receive Helium Network tokens (HNT). (As with most of the blockchain world, the value of those tokens fluctuates considerably.) HNT can be used both to pay for service and to compensate the operators of base stations without the need for a central entity (like a telco) to manage subscribers. Proof of coverage compensates those who stand up small cells in advance of the arrival of traffic, incentivizing the build-out of the network. 

Although most Helium Network hotspots currently serve up LoRaWAN, Helium has recently launched a new 5G service, which leverages the Magma platform. [Dish](https://blog.helium.com/dish-first-major-carrier-to-bring-helium-5g-to-the-people-10da0e899792) is the first major carrier to announce it will allow its customers to “roam” onto the Helium 5G network wherever there is coverage. The Helium Network uses the federation capabilities of Magma to access Dish’s subscriber database. If a user is authenticated by the Dish home subscriber server (HSS) and Dish agrees to cover the costs (using Helium’s native data credit mechanism), then the Helium Network will provide service to that user. Dish owns the billing relationship with the roaming user and ensures that the Helium network receives payment for the costs incurred. It’s worth noting that some entity will need to operate a federation gateway between Helium and Dish, but this too can be decentralized. In other words, there can be more than one such gateway operated by different entities. 

## The new pillars of decentralized cellular

It’s exciting to see how a fairly traditional, centralized provider such as Dish can leverage a grassroots-operated, decentralized model like the Helium Network to extend service to its customers. Since the Helium Network is open and permissionless, there’s considerable opportunity for commercial entities to provide services directly to their users via payments based on the Helium blockchain.

It seems likely that the future wireless network will be a combination of centralized, service provider-led networks and more decentralized private- and community-deployed networks. To realize this future state, three pillars need to be in place: a cost-effective and decentralized mobile core, access to spectrum, and a decentralized economic platform. Magma, CBRS (or other lightly licensed spectrum), and the Helium Network, respectively, have proven ready to support those pillars. It is time for service providers to think about how they can benefit from expanding their business models.
