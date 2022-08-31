---
templateKey: blog-post
title: "Sharing: the MOCN way"
author: Alexander zur Bonsen
date: 2022-08-31T09:00:00.000Z
category:
- label: Community
  id: mocn
---

# _Sharing: the MOCN way_

<div style="margin:10 auto 1rem;width:80%;text-align:center;font-size:.8em;"><em>The community is interested in expansion-friendly devices. That is why we invest in MOCN.<br>- Amar Padmanabhan, Magma Project Technical Lead</em></div>

Since the rollout of 4G in 2010, active network sharing has seen increasing popularity in markets throughout the world. It extends cooperation beyond passive infrastructure, like sites or masts, to active electronic equipment, commonly the radio access network (RAN), or parts of it. Existing networks can profit from active sharing, for example because regions with low traffic and license burdens can be shared. New networks, like 5G, can be rolled out faster and cheaper. [1,2] Especially, performant 5G networks require a fair amount of densification, which involves the deployment of many small cells - a task that is more feasible if shared.

If spectrum pooling is allowed by regulation, operators can also share carrier frequencies. Enter MOCN. MOCN stands for Multi-Operator Core Network. In a MOCN set-up, one radio access network provides access to the network of multiple operators. Each operator runs her own core network, but the radio access network, including carrier signals, is the same for all partners.

## _The technical details_

How can this work from a technical point of view? The radio station periodically broadcasts information about the available network. In a MOCN set-up, this information contains a list of networks. Mobile devices that wish to connect do the following: pick up the message, choose a network from the list and signal their choice back to the radio station, requesting to attach to the network. The radio access network routes the request to the chosen operator who decides whether the device is allowed to connect to the network or not. The figure below illustrates the basic call flow.

In more technical terms: In a MOCN configuration, the broadcast system information contains a list of IDs, the so called [PLMN](https://en.wikipedia.org/wiki/Public_land_mobile_network) IDs. Each ID consists of a mobile country code and a mobile network code ([MCC and MNC](https://en.wikipedia.org/wiki/Mobile_country_code)) and identifies a unique network. Depending on the radio technology, the list of PLMN IDs is contained in different blocks of the system information. For example, in UMTS, it is included in the Master Information Block, while in LTE, it is transmitted in the System Information Block 1 (see [here](https://blog.wirelessmoves.com/2016/04/ran-sharing-mocn-and-moran.html) for an illustrative example).

In 5G, network sharing builds on a similar routine that is augmented to include 5G-specific functionality like network slicing and non-public networks that come with additional identifiers and parameters.


![abstracted MOCN callflow](/img/mocn_callflow.png)
<div style="margin:10 auto 1rem;width:80%;text-align:center;font-size:.8em;"><em>Network selection by a mobile device in a MOCN configuration, abstracted from 3GPP TS 23.251</em></div>


## _More sharing: MORAN_

In theory, active network sharing can also extend to the core network. But this seems to be a rarely implemented scenario. It is hard to operate and makes strategic differentiation between products of different operators difficult. [3] In MOCN, operators only hand off exclusive control over the radio access network. For example, they cannot configure and optimize radio cell parameters, like the cell range, alone.

This is possible in a different sharing scenario, MORAN (Multi-Operator Radio Access Network). In a MORAN based set-up, operators use their own spectrum and share large parts of the radio access network. This allows an individual operator to exclusively control her network cell parameters. In contrast to MOCN, MORAN is not standardized by 3GPP specifications.

## _Mind the gap_

Since spectrum pooling is not allowed in many markets throughout the world, especially in emerging markets in Asia, Africa, Middle East and Latin America, MORAN sharing may often be the only alternative. But regulators seem to be opening up to spectrum pooling agreements. For example, in Germany, the regulative authority recently approved a MOCN cooperation project that is supposed to increase the number of operators in areas that are currently covered by only one company. [2,4]


### _Sources_

[1] [McKinsey: Network sharing and 5G: A turning point for lone riders](https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/network-sharing-and-5g-a-turning-point-for-lone-riders) \
[2] [A. D. Little: Network sharing in 5G area](https://www.adlittle.com/sites/default/files/reports/adl_network_sharing_5g_era.pdf) \
[3] [GSMA: Infrastructure Sharing: An overview](https://www.gsma.com/futurenetworks/wiki/infrastructure-sharing-an-overview/) \
[4] [Bunderkartellamt Fallbericht "grey spots cooperation"](https://www.bundeskartellamt.de/SharedDocs/Entscheidung/EN/Fallberichte/Kartellverbot/2022/B7-91-20.pdf?__blob=publicationFile&v=3)

_relevant 3GPP requirements and specifications:_ \
[3GPP TS 23.501: System architecture for the 5G System; Stage 2](https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=3144) \
[3GPP TS 23.251: Network Sharing](https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=830) \
[3GPP TR 22.951: Service aspects and requirements for network sharing](https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=705) 

