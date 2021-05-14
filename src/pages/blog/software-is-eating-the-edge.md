---
templateKey: blog-post
title: "Software is Eating the Edge"
author: Amar Padmanabhan and Bruce Davies
date: 2021-05-14T09:00:00.000Z
category:
  - label: Community
    id: software-is-eating-the-edge
---

It is hard to believe that Marc Andreessen’s famous [“Software is eating the world” essay](https://a16z.com/2011/08/20/why-software-is-eating-the-world/) is not yet ten years old. (It’s also hard to imagine someone saying “Today’s stock market actually hates technology” as Andreessen did in that essay.) We had reason to reflect back on that essay recently while preparing some course material on the Magma project. It is clear that the software technologies underlying modern clouds and software-defined networks are reshaping the way mobile telecommunications networks are built. This is particularly true for 5G, which is the first version of the 3GPP architecture to [adopt cloud native principles](https://systemsapproach.substack.com/p/why-5g-matters). Magma takes this transformation of the mobile network to the next level, using the technologies that were at the heart of Andreessen’s argument to deliver significant advances in mobile networking.

As Andreessen said:
> Six decades into the computer revolution, four decades since the invention of the microprocessor, and two decades into the rise of the modern Internet, all of the technology required to transform industries through software finally works and can be widely delivered at global scale.

Given that we have had those technologies for a long time now, it is surprising that it has taken so long to transform the mobile access network. It may be that the high cost of licenced spectrum has inhibited the entry of disruptive players into the ecosystem of equipment providers and mobile network operators. But that is definitely changing, and Magma is positioned to play a substantial role in transforming wireless and mobile network access.

Magma is an open source implementation of a mobile core network–the collection of functionality known as an EPC in 4G networks or NG-Core in 5G. But that rather undersells what Magma is. It really represents a new way of thinking about how to build mobile networks. We would argue that it’s what results when you take a “[systems approach](https://systemsapproach.substack.com/p/defining-a-systems-approach)” to the traditional mobile network architecture defined by 3GPP and similar standards bodies. 

One of the [key principles of systems design](https://arxiv.org/abs/2011.02455) is to use abstractions to limit complexity. And one thing that jumps out at systems people when they look at mobile network architectures is the lack of abstraction of the details of the radio technology. For example, 4G and 5G don’t just define different ways to use radio spectrum (although they do that); they also define significantly different internal architectures for the mobile core. So if you look inside a mobile core at almost any component, you can figure out what radio technology is being used at the edge. By analogy, imagine if you could look at a core router deep inside the backbone of the Internet and figure out which users were connected on Ethernet, and which ones on WiFi, and even figure out which generation of WiFi standard they were using! That’s what a mobile core looks like, and that’s a good example of what happens from not having a clean abstraction of the radio interface.

Magma started off with the goal of providing a cost-effective and easy-to-manage mobile core solution, aiming to simplify the task of extending network access out to remote regions and communities. It’s already being used to bring network access to [Native American reservations](https://www.muralnet.org/) in the U.S. and to [remote communities in Brazil](https://www.bnamericas.com/en/news/brisanet-brings-connectivity-to-remote-areas-in-the-northeast-with-magma), and is being [rolled out](http://www.globenewswire.com/fr/news-release/2021/04/07/2206119/0/en/In-Time-for-Summer-US-National-and-State-Parks-Getting-High-Speed-Wireless-Access.html) in U.S. National Parks. The Magma team brought a systems view to the problem, leveraging technologies from cloud native application design and many of the same architectural ideas that underpin software-defined networking. 

A mobile core has to support all sorts of standard interfaces, both on the radio side and to interoperate with existing mobile networks for things like billing and subscriber management. One key innovation of Magma is that it terminates all those protocols as close to the edge as possible and then abstracts them in such a way that the bulk of the implementation is independent of the radio technology. That means you can use Magma with any generation of cellular technology using licensed spectrum (4G,5G, etc), with “lightly licensed” cellular approaches like [CBRS](https://www.networkworld.com/article/3180615/faq-what-in-the-wireless-world-is-cbrs.html), or with unlicensed spectrum (e.g., WiFi). The components of Magma that are specific to a given radio technology expose common interfaces to the rest of Magma, which can thus be agnostic to the radio technology in use. The image below illustrates the manner in which interfaces specific to the radio network, or to a federated mobile network, are terminated as close to the edge as possible. 

![Magma terminates protocols specific to the wireless network at the edge](/img/magma-terminates-protocols-specific-to-the-wireless-network-at-the-edge.png "Magma terminates protocols specific to the wireless network at the edge")


<div style="width:100%;">
	<div style="margin:0 auto; width: 60%;text-align:center;font-size:.8em;margin-bottom:15px;margin-top:-15px;"><em>Magma terminates protocols specific to the wireless network at the edge; communication among components within Magma is via gRPC</em></div>
</div>



The second notable innovation in Magma is its SDN-like approach. Whereas traditional mobile networks are made up of components that are managed individually, Magma adopts a centralized controller, called an orchestrator, that allows an entire mobile network to be centrally managed from a single API. As with other SDN systems, the management and control planes are logically centralized to allow the central API to be used for all configuration and management tasks. The implementation of these planes is distributed for scalability and high availability. The data plane is fully distributed for scale and performance. In the case of Magma, the data plane is implemented in a set of components called Access Gateways, each of which connect to a handful of radio base stations (e.g., eNodeBs). 

![The SDN-inspired architecture of Magma](/img/the-sdn-inspired-architecture-of-magma.png "The SDN-inspired architecture of Magma")

<div style="width:100%;">
	<div style="margin:0 auto; width: 60%;text-align:center;font-size:.8em;margin-bottom:15px;margin-top:-15px;"><em>The SDN-inspired architecture of Magma</em></div>
</div>



Magma brings in lots of other common ideas from cloud native applications, notably the principle that any component can be expected to fail and the system must handle that gracefully. Thus, it uses small fault domains (another contrast to typical telco systems) and ensures that individual modules can restart and be upgraded independently of each other. 

There is much more to be said about Magma, and we will have more blogs on the topic coming up, as well as the aforementioned course coming soon on EdX. The edge is clearly one of the most dynamic places in networking currently, and will only become more so as the number and diversity of connected devices grows dramatically in the coming years. It is exciting to see an approach to re-architecting the edge that brings some of the best practices from cloud computing and the Internet to the mobile access network. 


