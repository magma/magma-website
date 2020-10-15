---
templateKey: blog-post
title: Magma Release 1.3
author: Phil Ritter
date: 2020-10-15T09:00:00.000Z
category:
  - label: Release Notice
    id: Release-A7fnZYrE1
---
# Magma v1.3 Release Notes


This new major release for Magma ships with some great new features and enhanced support for the FWA use-case with federation. See the release page (https://magma.github.io/magma/versions) for more information.



## _New Features_

### CDR Exporting

This release adds support for exporting Charging Data Records (CDR)  based on the IPFix (IP Flow Information Export) protocol. Magma provides the following additional fields: imsi, msisdn, apn_name, apn_mac, pdp_start_time, app_name.


### SMS delivery service (SMSd)

This new feature was added to support delivery of mobile-terminated SMS (i.e. receive-only SMS) to allow operators to deliver alerts to users. We have introduced a new mode of operation for the MME, SMS_ORC8R. This is essentially “SMS-in-MME” mode in the 3GPP specification, with delivery coordinated by the orc8r. SMS_ORC8R mostly re-uses infrastructure for the SGs interface used for CSFB support. Magma provides a REST API that can be utilized by partner services to send such messages to particular subscribers.


### Gx,Gy interface support

Support for Gx, Gy interfaces per 3GPP Diameter protocol for the FWA use-case. Notable new features are FUA-Restrict/Redirect and ASR/ASA.

### Final Unit Action - Restriction (FUA)

Upon exhaustion of subscriber quota, this feature enables restriction of service based on pre-configured static rules.

### APN Correction

This feature enables the overriding of UE requested APN with a network specified APN via IMSI prefix based filtering. Up to 10 IMSI prefix filters and corresponding APNs to overwrite with can be defined.

### PLMN Restriction

This feature allows PLMN based filtering on subscribers that are allowed to authenticate with the configured HSS.

### Support for unmanaged eNB

This adds support for registering externally managed eNBs that aren’t configured by Magma AGW. This enables support for tracking of the state of the eNBs as well as monitoring real time status and traffic.

### Configurable VPN from API

In previous versions, remote VPN access required the manual configuration of the AGW. This feature makes this operation configurable via an API endpoint, enabling / disabling shell access to the gateway. See design proposal (https://magma.github.io/magma/docs/next/proposals/p001_vpn_config_from_api)


## _Enhancements_

### NMS Enhancements

* Added the ability to enable/disable eNodeB dhcp service on the gateways.  This was added to support unmanaged eNodeBs.
* User workflow for supporting UE IP address management





## _Notable Fixes_

### NMS

* Fixed bugs around adding Federation Fixed wireless(feg_lte) networks.
