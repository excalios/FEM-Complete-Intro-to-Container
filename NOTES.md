The base of container is using chroot, namespace, and cgroups

# chroot

chroot changes the root directory of the process and jail it so it can't access
outside of it's own jail

# unshare

separates the processes the permissions/capabilities of the environment

# control groups

# Docker

## Dockerfile

### COPY vs ADD

Copy is the minimal thing which is better

Add will do extra things it can download from network for example github. Also
it unpack/extract from zip/tar file and then copy the file

Unless we need the extra functionality it's always better to use the minimal

## Network

It is not recommended to use the default network bridge. Create your own

`docker network create --driver=bridge ${name}`

# Docker Compose

Not suitable for production environments. Their documentatiot do say that it is
suitable for production if you only have 1 hosts but if you want to have
multiple host or it's able to scale docker compose is not the way

# Kubernetes

Kubernetes is for production level and it's hard it's an orchestration system.
Health Check
Scaling
Complex Relation

- How do people learn kubernetes? like it's a production grade software
  and it's not something easy nor cheap. How do they learn it before actually
  working with it

## Master

The brain of the cluster. The server that handles everything, every service
Google, Azure doesn't charge but amazon does

## Nodes

Worker Server that is actually running the containers and it can run multiple
containers at once.

## Pods

Pod is a thing that can't be divided and needs to be deployed together. Pods
doesn't always have multiple container it can contain only one container.

## Service

A service is a group of pods that make up one service

## Deployments

Is a state of what we want to and k8s will work to make that state

# Terms

## Snowflake

Snowflake is a term where you create and configure a server finely tuned to how
you want it. If someone were to delete that server then you are screwed since
need to create it again configure it and tune it again. But with container all
you need to do is build and run it

# Tricks

## mkdir lib{,64}

will make 2 directory one will bi caled lib and the other will be called lib64
