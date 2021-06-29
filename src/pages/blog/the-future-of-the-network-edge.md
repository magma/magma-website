---
templateKey: blog-post
title: "The Future of the Network Edge"
author: Bruce Davie and Amar Padmanabhan
date: 2021-06-29T09:00:00.000Z
category:
  - label: Community
    id: the-future-of-the-network-edge
---

_An explosion of devices will drive a transformation bigger than 5G_

![The Future of the Network Edge](/img/future-network-edge-header.jpg "The Future of the Network Edge")

As the internet continues to scale and evolve to connect billions of people and tens of billions of devices, it’s impressive to recall that it was originally designed to connect a few dozen computers sitting in research labs. Today, the internet serves more types of devices than you could count: smartphones, industrial controllers, inventory sensors, passenger vehicles, smart home assistants … the list goes on.

Fortunately, the founding [architects of the internet](https://dl.acm.org/doi/10.1145/52325.52336) were sufficiently farsighted, and the internet has proven remarkably adaptable. As one of those architects, Vint Cerf, famously noted, there were a [couple of flaws](https://www.businessinsider.com.au/google-vint-cerf-explains-why-early-internet-lacked-security-and-room-2019-1) in the internet’s original design, including a [lack of security](https://systemsapproach.substack.com/p/security-is-an-architectural-issue) and the failure to recognize that eventually billions of devices would need to be connected. As the computing world has evolved, networking has followed suit. Now, the network must once again redefine itself to keep up with the demands of interconnecting the world’s growing number and variety of devices.

## _The cloud changed everything_

One of the most significant transformations in networking began more than a decade ago, although it may not have been obvious to the majority of internet users. This transformation was driven by the rise of cloud computing, which underpins most of the internet services we rely on today. Companies like Amazon and Google built massive data centers upon commodity servers, and they needed a new networking paradigm to interconnect those servers. This turned out to be the sweet spot for [software-defined networking](http://www2.technologyreview.com/news/412194/tr10-software-defined-networking/) (SDN).

SDN grew out of a number of parallel efforts to make networking more robust. Notably, the “[4D architecture](https://dl.acm.org/doi/10.1145/1096536.1096541)” proposed by Greenberg et al. and the [Ethane](https://dl.acm.org/doi/10.1145/1282380.1282382) project laid the groundwork for much of what became known as SDN.

Part of the early commercial success of SDN was its application to enterprise data centers in support of network virtualization. There were a couple of key changes in the computing landscape that made this success possible:

1. The adoption of commodity servers in building large, scale-out data centers
2. The rise of server virtualization to simplify the operations of these data centers

Once it became easy to provision large numbers of (virtual) servers automatically, it became painfully obvious that the old ways of provisioning networks manually (one box at a time) were no longer fit for purpose. SDN offered a solution to this pain point, with the result that SDN became mainstream in the data centers of both hyperscalers and enterprises.

## _The edge is a new frontier_

Now, there is another computing transformation taking place that we believe is driving the next generation of network architectures. Broadly speaking, this is the rise of “the edge.”

We have already reached a point where billions of devices are connected to the edge of the internet. In our recent chat [with the Open Infrastructure Foundation](https://www.youtube.com/watch?v=-KeD5RFLNUI), we agreed that 50 billion connected devices doesn’t seem like a stretch once we add connected vehicles, wearables, and other Internet of Things (IoT) use cases to the mix.

But networks will need to accommodate more than just an increasing number of devices. We’re already seeing more heterogeneity; in other words, most devices will not be mobile phones or traditional computers. Furthermore, in many cases devices will require a greater amount of computation to be performed at the edge. This is why we consider the edge of the network to be the focal point of innovation for the foreseeable future. (Some of our colleagues [pointed this out](https://groups.csail.mit.edu/ana/Publications/PubPDFs/Making%20the%20world%20of%20communications%20a%20different%20place.pdf) as far back as 2005!)

The need for [edge computing](https://www.networkworld.com/article/3224893/what-is-edge-computing-and-how-it-s-changing-the-network.html) has been recognized for a few years now as a way to deal with latency. For some applications, such as autonomous transportation, low-latency communication is likely to be critical. Any computation will need to be done very close to the edge if a timely response is required. In other cases, low latency will be key to the user experience—think virtual and augmented reality. Furthermore, there’s an issue of cost. Some applications will generate vast amounts of data. It’s simply more cost-effective to process this data at the edge than to send it to a central location.

## _Open architectures drive innovation_

The internet was successful because it was agnostic to the applications running upon it. This enabled decades of innovation at the application layer. It is equally important that the next generation of edge architecture be as open and flexible as possible. This means network architects must avoid unwittingly optimizing for one class of application over another.

So-called “edge clouds” are pools of computational resources that sit close to the edge. These edge clouds will serve the next generation of devices. We believe that to create a successful edge environment, low-latency communication to edge clouds must be a general-purpose capability.

This is where we see Magma playing a role in the future of networking. It’s about more than bringing wireless connectivity to the edge cost-effectively (although it is that, too). Magma applies the lessons learned from the internet and SDN to edge networking.

## _It's all about heterogeneity_

Supporting a heterogeneous environment was central to the success of the internet, and it will be essential at the edge. Magma supports heterogeneity by design, both in the types of devices to be connected and the spectrum used to connect them. Because the future edge is heterogeneous, Magma is agnostic to the radio spectrum used, in contrast to a standard implementation of 4G or 5G.

Magma also draws from SDN and large-scale data center design to deliver an architecture that is robust and easy to manage. The manual, box-by-box management of routers and other network devices became an impediment in the cloud computing era; SDN solved this problem by using logically centralized control to automate the delivery of network services in the cloud. If services are to scale to the level needed for the many billions of connected devices to come, the principles of logical centralization, software control, and automation must be applied to the delivery of network services at the edge.

![Magma support for the heterogenious edge](/img/future-network-edge-diagram.jpg "Magma support for the heterogenious edge")

## _Building a network ready for the future edge_

From self-driving cars to VR goggles to AI-powered industrial robots, a world of new devices will redefine how we live and work. But without a network that can accommodate them, we’ll never see their full potential. By creating a network edge that’s ready to support any type of device, we can truly realize the next era of computing innovation.
