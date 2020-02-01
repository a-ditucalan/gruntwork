import EKS from "../assets/svg/img-eks.svg"
import Ecs from "../assets/images/ecs.png"
import Nomad from "../assets/images/nomad.png"
import AutoScaling from "../assets/images/auto-scaling2.png"
import SingleService from "../assets/images/single-service.png"
import MySQL from "../assets/images/mysql.png"
import Post from "../assets/images/post.png"
import SQLServer from "../assets/images/sql-server.png"
import Oracle from "../assets/images/oracle.png"
import Aurora from "../assets/images/aurora.png"
import Redis from "../assets/images/redis.png"
import Memcached from "../assets/images/memcached.png"
import MongoDB from "../assets/images/mongodb.png"
import Couchbase from "../assets/images/couchbase.png"
import Zookeeper from "../assets/images/zookeeper.png"
import Consul from "../assets/images/consul.png"
import Istio from "../assets/images/istio.png"
import CloudFront from "../assets/images/cloudfront.png"
import CloudFlare from "../assets/images/cloudflare.png"
import Cloudwatch from "../assets/images/cloudwatch.png"
import Tick from "../assets/images/tick.png"
import DataDog from "../assets/images/datadog.png"
import Prometheus from "../assets/images/prometheus.png"
import Elk from "../assets/images/elk.png"
import SumoLogic from "../assets/images/sumo.png"
import VPC from "../assets/images/vpc.png"
import Elastic from "../assets/images/elastic.png"
import OpenVPN from "../assets/images/openvpn.png"
import Grunt from "../assets/images/grunt.png"
import AwsVpn from "../assets/images/awsvpn.png"
import Transit from "../assets/images/transit.png"
import GitLab from "../assets/images/gitlab.png"
import Jenkins from "../assets/images/jenkins.png"
import CircleCi from "../assets/images/circleci.png"
import TravisCi from "../assets/images/travisci.png"
import TerraForm from "../assets/images/terra.png"
import Github from "../assets/images/github.png"
import Lambda from "../assets/images/lambda.png"
import Gateway from "../assets/images/gateway.png"
import Kafka from "../assets/images/kafka.png"
import Kinesis from "../assets/images/kinesis.png"
import SQS from "../assets/images/sqs.png"
import SNS from "../assets/images/sns.png"
import Services from "../assets/images/services.png"
import Prevention from "../assets/images/prevention.png"
import Lockdown from "../assets/images/lockdown.png"
import Update from "../assets/images/update.png"
import KMS from "../assets/images/kms.png"
import SecretManager from "../assets/images/secretmanager.png"
import Palo from "../assets/images/palo.png"
import Vault from "../assets/images/vault.png"
import Organization from "../assets/images/organization.png"
import CloudTrail from "../assets/images/cloudtrail.png"
import Config from "../assets/images/config.png"

export const Docker = {
  title: "Docker Orchestration",
  data: [
    {
      id: "docker",
      image: EKS,
      cardTitle: "EC2 Kubernetes Service",
      cardDescription:
        "Deploy a best-practices EKS cluster and run Docker containers on it as Kubernetes services. Supports zero-downtime, rolling deployment, IAM to RBAC mapping, auto scaling, IAM roles for Pods, deploying",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    },
    {
      image: Ecs,
      cardTitle: "EC2 Container Service",
      cardSubscribe: "1",
      cardDescription:
        "Deploy a best-practices ECS Cluster and run Docker containers on it as ECS Services. Includes zero-downtime, rolling deployments, and auto scaling.",
      community: "1",
      ease: "2",
      maturity: "1",
      dollar: "3"
    },
    {
      image: Nomad,
      cardTitle: "Nomad",
      cardSubscribe: "1",
      cardDescription:
        "Deploy a best-practices HashiCorp Nomad cluster. Includes support for automatic bootstrapping, automatic discovery of Consul servers (for cluster coordination), automatic recovery of failed servers.",
      community: "2",
      ease: "1",
      maturity: "1",
      dollar: "2"
    }
  ]
}

export const Ec2 = {
  title: "EC2 Orchestration",
  data: [
    {
      id: "ec2",
      image: AutoScaling,
      cardSubscribe: "1",
      cardTitle: "Auto Scaling Group",
      cardDescription:
        "Run stateless and stateful services on top of an Auto Scaling Group. Supports zero-downtime, rolling deployment, attaching EBS volumes and ENIs, load balancing, health checks, service discovery, and",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    },
    {
      image: SingleService,
      cardTitle: "Single Server",
      cardDescription:
        "Deploy a best-practices single EC2 instance, including IAM role, EBS Volumes, EIPs, ENIs",
      community: "1",
      ease: "2",
      maturity: "1",
      dollar: "3"
    }
  ]
}

export const Database = {
  title: "Database",
  data: [
    {
      id: "database",
      image: MySQL,
      cardSubscribe: "1",
      cardTitle: "MySQL",
      cardDescription:
        "Run MySQL on Amazon’s Relational Database Service (RDS). Supports read replicas, multi-zone automatic failover, and automatic backup.",
      community: "2",
      ease: "1",
      maturity: "1",
      dollar: "2"
    },
    {
      image: Post,
      cardTitle: "PostgreSQL",
      cardSubscribe: "1",
      cardDescription:
        "Run PostgreSQL on Amazon’s Relational Database Service (RDS). Supports read replicas, multi-zone automatic failover, and automatic backup.",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    },
    {
      image: SQLServer,
      cardTitle: "SQL Server",
      cardSubscribe: "1",
      cardDescription:
        "Run SQL Server on Amazon’s Relational Database Service (RDS). Supports read replicas, multi-zone automatic failover, and automatic backup.",
      community: "2",
      ease: "1",
      maturity: "1",
      dollar: "2"
    },
    {
      image: Oracle,
      cardTitle: "Oracle",
      cardSubscribe: "1",
      cardDescription:
        "Run Oracle on Amazon’s Relational Database Service (RDS). Supports read replicas, multi-zone automatic failover, and automatic backup.",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    },
    {
      image: Aurora,
      cardTitle: "Aurora",
      cardDescription:
        "Run Aurora, Amazon’s MySQL and PostgreSQL compatible cloud DB. Supports read replicas, multi-zone automatic failover, and automatic backup.",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    }
  ]
}

export const Distributed = {
  title: "Distributed Cache",
  data: [
    {
      id: "distributed",
      image: Redis,
      cardSubscribe: "1",
      cardTitle: "Redis",
      cardDescription:
        "Run Redis clusters using Amazon’s ElastiCache Service. Creates",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    },
    {
      image: Memcached,
      cardTitle: "Memcached",
      cardSubscribe: "1",
      cardDescription:
        "Run Memcached clusters using Amazon’s ElastiCache Service. Creates",
      community: "1",
      ease: "2",
      maturity: "1",
      dollar: "1"
    }
  ]
}

export const OtherData = {
  title: "Other Data Stores",
  data: [
    {
      id: "otherData",
      image: MongoDB,
      cardTitle: "MongoDB",
      cardDescription:
        "Deploy a MongoDB cluster, including replica sets, sharding, an automated bootstrapp",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    },
    {
      image: Couchbase,
      cardTitle: "Couchbase",
      cardSubscribe: "1",
      cardDescription:
        "Deploy a best-practices Couchbase cluster. Includes support for automatic bootstrapp",
      community: "1",
      ease: "2",
      maturity: "1",
      dollar: "3"
    },
    {
      image: Zookeeper,
      cardTitle: "ZooKeeper",
      cardSubscribe: "1",
      cardDescription:
        "Deploy an Apache ZooKeeper cluster that can automatically bootstrap itself. Inc",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    }
  ]
}

export const ServiceDiscovery = {
  title: "Service Discovery & Mesh",
  data: [
    {
      id: "serviceDiscovery",
      image: Consul,
      cardSubscribe: "1",
      cardTitle: "Consul",
      cardDescription:
        "Deploy a best-practices HashiCorp Consul cluster. Includes support for automatic bootstrapping, configuring dnsmasq to use Consul as a DNS server, access to the Consul UI, and automatic recovery of",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    },
    {
      type: "1",
      link: "#",
      image: Istio,
      cardTitle: "Istio",
      cardDescription:
        "Deploy Istio, an open source service mesh that provides traffic management, policy enforcement, and telemetry collection.",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    }
  ]
}

export const StaticContent = {
  title: "Static Content",
  data: [
    {
      id: "staticContent",
      image: CloudFront,
      cardTitle: "S3 + CloudFront",
      cardDescription:
        "Deploy your static content and static websites on S3, optionally with a CloudFront distribution in front of it as a CDN. Includes bucket versioning, access logging, cache settings, Route 53 DNS entries, and TLS",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    },
    {
      type: "1",
      link: "#",
      image: CloudFlare,
      cardTitle: "S3 + CloudFlare",
      cardDescription:
        "Deploy your static content and static websites on S3, optionally with a CloudFlare in front of it as a CDN.",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    }
  ]
}

export const Monitoring = {
  title: "Monitoring and Alerting",
  data: [
    {
      id: "monitoring",
      image: Cloudwatch,
      cardTitle: "CloudWatch Metrics & Al",
      cardDescription:
        "Configure monitoring, log aggregation, and alerting using CloudWatch, SNS, and S3. Includes Slack integration.",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    },
    {
      image: Tick,
      cardTitle: "TICK Stack",
      cardDescription:
        "Deploy a best-practices TICK stack (Telegraf, InfluxDB, Chronograf, Kapacitor) in Google Cloud Platform. Includes support for automatic bootstrapping, automatic node discovery, and automatic recovery of",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    },
    {
      type: "1",
      link: "#",
      image: DataDog,
      cardTitle: "DataDog",
      cardDescription:
        "Send all metrics to DataDog. Define alerts and dashboards as code.",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    },
    {
      type: "1",
      link: "#",
      image: Prometheus,
      cardTitle: "Prometheus",
      cardDescription:
        "Deploy Prometheus as a time series database. Send all metrics to Prometheus. Configure alerts and dashboards as code.",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    }
  ]
}

export const Log = {
  title: "Log Aggregation",
  data: [
    {
      id: "log",
      image: Cloudwatch,
      cardSubscribe: "1",
      cardTitle: "CloudWatch Logs",
      cardDescription:
        "Configure monitoring, log aggregation, and alerting using CloudWatch, SNS, and S3. Includes Slack integration.",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    },
    {
      image: Elk,
      cardTitle: "ELK StackCloudWatch Logs",
      cardSubscribe: "1",
      cardDescription:
        "Deploy and manage an ELK cluster. Includes support for deploying separate Elasticsearch, Logstash and Kibana clusters, each with automated zero-downtime rolling deployment, automatic recovery of failed",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    },
    {
      type: "1",
      link: "#",
      image: SumoLogic,
      cardTitle: "SumoLogic",
      cardDescription:
        "Send all logs to Sumo Logic, so you can search, filter, and analyze log data in a single place.",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    }
  ]
}

export const Networking = {
  title: "Networking",
  data: [
    {
      id: "networking",
      image: VPC,
      cardTitle: "VPC",
      cardDescription:
        "Create a best-practices Virtual Private Cloud (VPC) on AWS. Includes multiple subnet tiers, network ACLs, security groups, NAT gateways, Internet Gateways, and VPC peering.",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    },
    {
      image: Elastic,
      cardTitle: "Elastic Load Balancer",
      cardSubscribe: "1",
      cardDescription:
        "Run the highly-available and scalable load balancers in AWS: Application Load Balancer (ALB), Network Load Balancer (NLB), and the Classic Load Balancer (CLB).",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    },
    {
      image: OpenVPN,
      cardSubscribe: "1",
      cardTitle: "OpenVPN",
      cardDescription:
        "Deploy an OpenVPN server and manage user accounts using IAM groups. Includes automatic install and configuration of a high-availability OpenVPN server, public key infrastructure (PKI), data backup, IAM",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    },
    {
      image: Grunt,
      cardTitle: "ssh-grunt",
      cardSubscribe: "1",
      cardDescription:
        "A tool that allows you to manage SSH access to EC2 Instances using either AWS IAM or your Identity Provider (e.g., ADFS, Google, Okta, etc). Developers can use their personal SSH keys to log in.",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    },
    {
      type: "1",

      link: "#",
      image: AwsVpn,
      cardTitle: "ssh-AWS VPN",
      cardDescription:
        "This service has not been created yet. Contact us if you’re interested in building this module with Gruntwork.",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    },
    {
      type: "1",
      link: "#",
      image: Transit,
      cardTitle: "Transit Gateway",
      cardDescription:
        "Connect all of your VPCs, VPNs, and on-premise networks to a single gateway.",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    }
  ]
}

export const Ci = {
  title: "CI / CD",
  data: [
    {
      id: "ci",
      image: Jenkins,
      cardTitle: "Jenkins",
      cardDescription:
        "Deploy Jenkins and configure CI / CD pipelines for your apps as code using Jenkinsfiles and Gruntwork build and deploy scripts.",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    },
    {
      image: CircleCi,
      cardSubscribe: "1",
      cardTitle: "CircleCi",
      cardDescription:
        "Configure CI / CD pipelines for your apps as code in CircleCi using CircleCi config files and Gruntwork build and deploy scripts.",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    },
    {
      image: TravisCi,
      cardSubscribe: "1",
      cardTitle: "TravisCi",
      cardDescription:
        "Configure CI / CD pipelines for your apps as code in TravisCi using TravisCi config files and Gruntwork build and deploy scripts.",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    },
    {
      image: TerraForm,
      cardSubscribe: "1",
      cardTitle: "Build & Deploy Scripts",
      cardDescription:
        "A collection of scripts and Terraform code that implement common CI and build pipeline tasks including running Jenkins, configuring CircleCi, building a Docker image, building a Packer image, updating",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    },
    {
      type: "1",
      link: "#",
      image: Github,
      cardTitle: "GitHub Actions",
      cardDescription:
        "Configure CI / CD pipelines for your apps as code in GitHub Actions using GitHub Actions workflows and Gruntwork build and deploy scripts.",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    },
    {
      type: "1",
      link: "#",
      image: GitLab,
      cardTitle: "GitLab",
      cardDescription:
        "Configure CI / CD pipelines for your apps as code in GitLab using GitLab config files and Gruntwork build and deploy scripts.",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    }
  ]
}

export const ServerLess = {
  title: "Serverless",
  data: [
    {
      id: "serverless",
      image: Lambda,
      cardTitle: "Lambda",
      cardDescription:
        "Deploy and manage Lambda functions with Terraform and build serverless apps. Automatically upload source code, configure environment variables, create an IAM Role, associate with a VPC. enable",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    },
    {
      image: Gateway,
      cardTitle: "API Gateway",
      cardDescription:
        "Build serverless applications by defining APIs in Swagger, running your app locally using SAM, and deploying the app to production using Terraform and API Gateway.",
      community: "1",
      ease: "2",
      maturity: "1",
      dollar: "3"
    }
  ]
}

export const Streaming = {
  title: "Messaging and Streaming",
  data: [
    {
      id: "streaming",
      image: Kafka,
      cardTitle: "Apache Kafka",
      cardDescription:
        "Deploy a cluster of Apache brokers that can automatically bootstrap themselves. Includes support for automatically discovering a ZooKeeper cluster, EBS Volumes for better log performance, automated",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    },
    {
      image: Kinesis,
      cardTitle: "Kinesis",
      cardSubscribe: "1",
      cardDescription:
        " Create Kinesis streams with configurable or auto-calculated shard and retention settings.",
      community: "1",
      ease: "2",
      maturity: "1",
      dollar: "1"
    },
    {
      image: SQS,
      cardSubscribe: "1",
      cardTitle: "SQS",
      cardDescription:
        "Create SQS queues with support for FIFO, message retention, message delays, content-based deduplication, dead-letter queues, and IP-based access controls.",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    },
    {
      image: SNS,
      cardSubscribe: "1",
      cardTitle: "SNS",
      cardDescription:
        "Create SNS topics with configurable IAM and delivery policies.",
      community: "1",
      ease: "2",
      maturity: "1",
      dollar: "1"
    }
  ]
}

export const Secrets = {
  title: "Secrets Management",
  data: [
    {
      id: "secrets",
      image: KMS,
      cardSubscribe: "1",
      cardTitle: "KMS",
      cardDescription:
        "Encrypt and decrypt secrets using Amazon's Key Management Service (KMS).",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    },
    {
      image: SecretManager,
      cardSubscribe: "1",
      cardTitle: "AWS Secrets Manager",
      cardDescription: "Store and retrieve secrets from AWS Secrets Manager.",
      community: "1",
      ease: "2",
      maturity: "1",
      dollar: "3"
    },
    {
      image: Vault,
      cardSubscribe: "1",
      cardTitle: "Vault",
      cardDescription:
        "Deploy a best-practices HashiCorp Vault cluster for secrets management. Includes",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    }
  ]
}

export const Auth = {
  title: "Auth",
  data: [
    {
      id: "auth",
      image: Services,
      cardSubscribe: "1",
      cardTitle: "IAM Users",
      cardDescription:
        "Create and manage IAM users as code, including group membership, tags, and",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    },
    {
      image: Services,
      cardSubscribe: "1",
      cardTitle: "IAM Groups",
      cardDescription: "Create a best-practices set of IAM groups.",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    },
    {
      image: Services,
      cardSubscribe: "1",
      cardTitle: "IAM Roles",
      cardDescription:
        "Create a best practices set of IAM roles, including IAM roles to manage cross-account ",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    },
    {
      type: "1",
      link: "#",
      image: Services,
      cardTitle: "Federated  Auth",
      cardDescription:
        "Authenticate to your AWS account via the web, CLI, VPN, and SSH using an existing identity provider, such as ADFS, Google, Okta, OneLogin, etc.",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    }
  ]
}

export const Hardening = {
  title: "Server Hardening",
  data: [
    {
      id: "hardening",
      cardSubscribe: "1",
      image: Prevention,
      cardTitle: "Intrusion Prevention",
      cardDescription:
        "Automatically ban malicious ip addresses from connecting to the server.",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    },
    {
      image: Lockdown,
      cardSubscribe: "1",
      cardTitle: "IP Lockdown",
      cardDescription:
        "lockdown outgoing IP addresses on a server so only specific OS users can access them. This is primarily used to protect the EC2 metadata endpoint and the IAM permissions attached to it.",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    },
    {
      image: Update,
      cardSubscribe: "1",
      cardTitle: "Auto Update",
      cardDescription:
        "Automatically install critical security updates on each server on a nightly basis.",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    },
    {
      type: "1",
      link: "#",
      image: Palo,
      cardTitle: "Intrusion Preventions System (Palo Alto)",
      cardDescription:
        "Examine network traffic flows and automatically detect and prevent vulnerability exploits.",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    }
  ]
}

export const Foundations = {
  title: "Foundations",
  data: [
    {
      id: "foundation",
      image: Organization,
      cardSubscribe: "1",
      cardTitle: "AWS Organizations",
      cardDescription:
        "Centrally manage billing, control access, compliance, and security, and share resources across multiple AWS accounts.",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    },
    {
      image: CloudTrail,
      cardSubscribe: "1",
      cardTitle: "AWS CloudTrail",
      cardDescription:
        "Maintain an audit log of all events happening in your AWS account.",
      community: "1",
      ease: "2",
      maturity: "1",
      dollar: "3"
    },
    {
      image: Config,
      cardTitle: "AWS Config",
      cardSubscribe: "1",
      cardDescription:
        "Maintain an audit log of how all of your resources are configured in AWS and how those configurations change over time.",
      community: "1",
      ease: "1",
      maturity: "1",
      dollar: "2"
    }
  ]
}
