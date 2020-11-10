---
templateKey: blog-post
title: Magma Release 1.3.1
author: Phil Ritter
date: 2020-11-10 T09:00:00.000Z
category:
  - label: Release Notice
    id: release-notice
---
# Magma v1.3.1

## Introduction

This minor release for Magma contains support for some new features and fixes for other known issues. See therelease page (https://magma.github.io/magma/versions)for more information.

## Key Features

### SMS delivery service (SMSd)

This new feature was added to support delivery of mobile-terminated SMS (i.e., receive-only SMS) to allow operators to deliver alerts to users. We have introduced a new mode of operation for the MME, SMS_ORC8R. This is essentially a limited version “SMS-in-MME” mode in the 3GPP specification, with delivery coordinated by the orc8r. Magma provides a REST API that can be utilized by partner-developed services to send such messages to subscribers and check the status of message delivery.

### Support for unmanaged eNB

This adds support for registering externally managed eNBs that aren’t configured by Magma Access Gateway over tr-69. This enables support for tracking of the state of the registered unmanaged eNBs as well as monitoring real time status and traffic usage.

## Critical bug fixes

* Added a patch to gracefully handle missing "router_ip" option in DHCP response in cases where DHCP does not set upstream router IP. #3572
* Fixed pipelined restart setup instabilities #3533, #3527
* Added fixes to recover from corrupted state when a stateless services fails to start due to a bad Redis state and crashes infinitely
* Fixed an issue related to the MME not handling a restart procedure properly when magma starts, and sends a reset to the VLR through CSFB service, then the VLR responds with Restart acknowledge which is forwarded by the FeG to the MME #3415

## Other

* Updated eNodeb docs and metrics to use datapath gtp stats collected by pipelined service that are retrieved for all eNB setups. Also added eNB IP address to be reported on eNB state, so metrics can be filtered by this parameter for single eNBs #3534
