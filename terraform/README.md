# Terraform Infrastructure

Terraform configuration describing the DevOps Platform AWS/Cloudflare infrastructure.

## Existing infrastructure

This project infrastructure already exists and is currently running. These Terraform files document the intended infrastructure configuration.

- AWS region: `eu-central-1`
- S3 bucket: `devops-platform-eslam-2026`
- CloudFront distribution ID: `EJ0FM81LBYU31`
- CloudFront domain: `d2m4cwdyljzt2z.cloudfront.net`
- Custom domain: `devops.elshamy.online`
- ACM certificate region: `us-east-1`
- GitHub Actions IAM user: `github-actions-deploy`

## Important

The resources in AWS/Cloudflare were created and configured separately from this repository.

**Terraform has not been applied to the existing production resources.**

Before using Terraform to manage these resources in the future, the existing resources must be imported into Terraform state and the configuration must be reconciled with the live infrastructure.

Do not run `terraform apply` against production without reviewing the complete plan.

## Security

Never commit:

- `terraform.tfvars`
- Terraform state files
- AWS access keys
- Cloudflare API tokens
- GitHub tokens
- private keys
- `.env` files containing secrets
