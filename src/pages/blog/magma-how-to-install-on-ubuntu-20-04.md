---
templateKey: blog-post
title: Magma Installation on Ubuntu 20.04
author: Milind Kumar Vaddiraju
date: 2022-03-21T09:00:00.000Z
category:
  - label: Community
    id: magma-how-to-install-on-ubuntu-20-04
---

Follow along this post to see how to install Magma in a virtual environment on Ubuntu 20.04 and set up a basic LTE connection.<!-- more -->

__Note 1:__ The Magma gateway cannot be set upon Apple computers with the M1 chip. Using Rosetta or even double virtualization will not do the trick. On MacOS, the installation of most prerequisites can be done relatively easily, especially with the help of brew. While brew can be set up for Ubuntu, a more roundabout approach will be taken here.

__Note 2:__ When choosing a host machine, ensure that it has enough RAM and memory. Insufficient RAM will lead to errors such as the host closing the connection to the gateway VM when building the gateway.

#Installing the prerequisites
##Docker

- Remove any existing installation of docker on system using the commands given [in this guide on uninstalling docker engine](https://docs.docker.com/engine/install/ubuntu/#uninstall-docker-engine) and [this guide on uninstalling old docker versions](https://docs.docker.com/engine/install/ubuntu/#uninstall-old-versions).
- Install docker engine using the instructions [in this guide on installing docker using the repository](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository).
- If you are unable to run docker using `sudo docker run hello-world` due to an inability to connect to the Docker daemon, then try running (based on the instructions [in this Stack Overflow post on connecting to docker](https://stackoverflow.com/questions/44678725/cannot-connect-to-the-docker-daemon-at-unix-var-run-docker-sock-is-the-docker) ):

```bash
systemctl start docker
```

- To stop having to use `sudo` before all docker commands, follow the instructions [in this guide on post-installation steps for Docker on Linux](https://docs.docker.com/engine/install/linux-postinstall/). The link outlines steps to create a new Unix group that can run the docker command without `sudo` and add users to it.

###Installing docker compose

- Install docker compose version **1.29.2** using the instructions [in this guide on installing Docker Compose](https://docs.docker.com/compose/install/).
- Setup command completion using the steps described [in this guide on Command-line completion](https://docs.docker.com/compose/completion/).

##Setting up Virtualbox

- Install Virtualbox from [the Downloads page](https://phoenixnap.com/kb/install-virtualbox-on-ubuntu#ftoc-heading-2). Use [this blog post on installing VirtualBox from Oracle's repositories](https://phoenixnap.com/kb/install-virtualbox-on-ubuntu#ftoc-heading-2) and [this similar post](https://linuxize.com/post/how-to-install-virtualbox-on-ubuntu-20-04/) for reference.
- During the installation, you will run into the following message

![Message1](/img/inst-ub-20-04-installing_virtual_box_1.png)
![Message2](/img/inst-ub-20-04-install_virtual_box_2.png)

- Click on `<Ok>` and create a new passphrase.
- To finish setting up Virtualbox, you need to complete two more steps
  - Restarting the system will take you to a screen asking for the passphrase generated above. Suppy this and the start the system.
  - If errors such as the following are produced, you will also have to log into the BIOS and disable secure boot.

![Error](/img/inst-ub-20-04-error_virtualbox.png)
![virtualbox commands](/img/inst-ub-20-04-virtualbox_commands_to_fix_error.png)

##Installing Vagrant

Vagrant helps manage virtual machines and allows users to interact with them in a uniform way across systems.

- Install vagrant following the instructions [in the documentation on installation](https://www.vagrantup.com/downloads) and [the downloads page](https://www.vagrantup.com/downloads) using the following commands

```bash
curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -

sudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"

sudo apt-get update && sudo apt-get install vagrant
```

##Setting up Go

The command given in the [Magma prerequisites page](https://docs.magmacore.org/docs/basics/prerequisites) indicates that Go 1.13 is necessary.

- Obtain the compressed file from the archived versions from [the Go downloads page](https://go.dev/dl/).
- Run `sudo rm -rf /usr/local/go && sudo tar -C /usr/local -xzf go1.13.15.linuxamd64.tar.gz`
- Add Go to the path in `~/.profile` as below

```bash
export PATH=$PATH:/usr/local/go/bin
```

The Magma prerequisites page asks for the path to added to `~/.bash_profile` instead of `~/.bashrc`. Look at this medium post and this Stack Exchange question for the difference between `~/.bash_profile`, `~/.bashrc` and `~/.profile`.

- To check the correctness of the Go installation run

```bash
source ~/.profile
go version
```

The output should be similar to that below

```
go version go1.13.15 linux/amd64
```

- This will however not apply to any new terminals you create as the change is not in `~/.bashrc`. Therefore, restart the system (interchangeably used with **host** from now on) for this change to take hold.

##Setting up Python 3.7.3

The [Magma prerequisites page](https://docs.magmacore.org/docs/basics/prerequisites) recommends that pyenv be installed to set up Python 3.7.3. However, we will use **conda** in this setup instead as we were unable to proceed with the following steps using pyenv on Ubuntu 20.04. A global installation of Python 3.7.3 is not recommended as discussed [in this post on Python best practices](https://snarky.ca/why-you-should-use-python-m-pip/).

- Miniconda can be installed following the instructions on the [conda installation page](https://docs.conda.io/projects/conda/en/latest/user-guide/install/linux.html).
- Set

```
conda config --set auto_activate_base false
```

to prevent the base environment from activating by default when a terminal starts.

- Created a conda environment named `magma_python` with **Python 3.7.3** and **pip 21.2.2**. Refer to [this conda cheat sheet](https://docs.conda.io/projects/conda/en/4.6.0/_downloads/52a95608c49671267e40c689e0bc00ca/conda-cheatsheet.pdf) for conda commands.
- Activate the environment using

```
conda activate magma_python
```

- Install the remaining libraries in this environment as given in the [prerequisites page](https://docs.magmacore.org/docs/basics/prerequisites).

##vagrant-vbguest

Install as in the [prerequisites page](https://docs.magmacore.org/docs/basics/prerequisites).

##Magma

Magma can be cloned from the repository [on the official GitHub page](https://github.com/magma/magma).

###Prerequisites for deployment

- Set up aws-iam-authenticator using the instructions in the [official documentation for aws-iam authenticator](https://docs.aws.amazon.com/eks/latest/userguide/install-aws-iam-authenticator.html)
- Install kubectl using apt from the official [documentation on kubectl installation](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/)
- Install helm using apt using the steps in the [official documentation on installing Helm](https://helm.sh/docs/intro/install/)
- Set up terraform using the instructions in the [official documentation on installing Terraform](https://www.terraform.io/cli/install/apt)

#Running the quick start guide

- Open two terminal tabs as directed in the [Quick Start Guide](https://docs.magmacore.org/docs/basics/quick_start_guide) (called guide from here on).
- Activate the conda environment created previously in each terminal

```
conda activate magma_python
```

- Check out the branch you want to use. If you want to use, say, **v1.6**, you would navigate to the magma git repository and do

```bash
git checkout v1.6
```

- Provision the AGW VM as directed in the guide using one of the terminals.
- As the Magma Quick Start Guide mentions, the development VMs are in the 192.168.60.0/24, 192.168.128.0/24 and 192.168.129.0/24 address spaces. These need to be made allowed ranges. If not, `vagrant up magma` will terminate with an error similar to the one below

  ![Address errors](/img/inst-ub-20-04-address_error.png)

- Follow the instructions in the [VirtualBox manual on Host-Only Networking](https://www.virtualbox.org/manual/ch06.html#network_hostonly) and add

```
* 192.168.60.0/24 192.168.128.0/24 192.168.129.0/24
```

to `/etc/vbox/networks.conf` creating it in the process if necessary.

- Further, in order to set up the magma VM, virtualization needs to be enabled on the host system. If it is not, it will produce an error such as that below

![virtualization disabled](/img/inst-ub-20-04-agw_error_2.png)

To fix this, log in to your BIOS (the method to do this varies from host to host) and enable **Virtualization Technology**. You will likely find this in `System Configuration` or `Security`. If this option is not available, then virtualization is not possible on your machine and you will require an new one.

- Upon making these changes, `vagrant up magma` should finish with an output similar to that shown below. It is important that the number of failures be zero i.e failed = 0.

![Ansible provisioning successful](/img/inst-ub-20-04-ansible_provisioning.png)

- The first time around, provisioning the AGW VM (the whole process from `vagrant up magma`) took **34 minutes** on the author's host machine.
* 192.168.60.0/24 192.168.128.0/24 192.168.129.0/24
- Now, follow the instructions in the guide to ssh into the VM and build the AGW.
- To set up the Orchestrator, once again follow the instructions in the **Build Orchestrator** section of the guide. This took around **29 minutes** on the author's machine.
- Start the Orchestrator as directed in the guide. If run with metrics, this should terminate with an output similar to that below

![running_orchestrator](/img/inst-ub-20-04-running_orchestrator.png)

- Navigating to the `magma/cache/test_certs` folder (open using `nautilus/magma/cache/test_certs`) and double clicking on the `admin_operator.pfx` and supplying the password **"magma"** produces the following dialog box

![double_click_.pfx_file](/img/inst-ub-20-04-admin_operator_expiry.png)

Add the certificate to Firefox by navigating to **Preferences** and looking for *"View certificates"* and adding the `.pfx` file to the *"Your certificates"* tab of Certificate manager. As this has to be imported from the sytem and `.cache` is a hidden folder, transfer the `.pfx` file to a visible directory outside the repository and import it from there. This results in the following dialog box

![firefox certificate](/img/inst-ub-20-04-adding_certificate.png)  

Upon opening https://localhost:9443/swagger/v1/ui in Firefox, you will see the following warning (as mentioned in the guide)

![Firefox warning](/img/inst-ub-20-04-firefox_warning.png)

Click on **Advanced** and then choose to continue. This will open the following

![Swagger UI](/img/inst-ub-20-04-swagger_ui.png)

- Attempting to connect the Orc8r and LTE Gateway using

```bash
fab -f dev_tools.py register_vm
```

might produce an error such as the one below

```bash
.
.
.
PermissionError: [Errno 13] Permission denied:
'./../../.cache/test_certs/admin_operator.key.pem'
.
.
.
```

- Run the following command (from the magma directory) to provide the necessary permissions (refer to [this Stack Overflow post on permissions](https://stackoverflow.com/a/58907316) for more details).

```bash
sudo chown -R $USER .cache/test_certs/
```

- Start the magmad service as directed in the guide. Note that you might see errors relating to `td-agent-bit`. These are to be expected as the Quick Start Guide doesn't enable this service. Refer to this [issue about FluentBit](https://github.com/magma/magma/issues/4422) for more details.
- Finally run the NMS UI as directed in the guide. Note that if the **Gateway Error 502** persists, check the status of the `magmalte` docker container using

```
docker container ls
```

and kill it if it is unhealthy using

```
docker kill <container_id>
```

and set up the NMS UI again.

- If your Orchestrator (Orc8r) and AGW are connected and the magma services are running on the AGW, then the health of the gateway in the NMS UI (navigate to the Equipment tab on the left of the NMS UI and scroll down to Gateways) should read **Good**. This health status is based on how often the gateway checks in. Look at [this comment on the gateway health](https://github.com/magma/magma/issues/7645#issuecomment-871485357).
- The Orc8r can be shut down using `docker-compose down`. If this fails, try

```bash
HOST [magma/orc8r/cloud/docker]$ ./run.py
```

and then `docker-compose down`.

If you would like to learn more about the project and get involved check the [website](https://www.magmacore.org) for more information or [download the code](https://github.com/magma/magma) and start to experiment with the platform.
