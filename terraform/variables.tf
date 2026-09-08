variable "aws_region" {
  description = "AWS region where the S3 bucket and CloudFront origin are located."
  type        = string
  default     = "eu-central-1"
}

variable "aws_account_id" {
  description = "AWS account ID."
  type        = string
  sensitive   = true
}

variable "project_name" {
  description = "Project name."
  type        = string
  default     = "devops-platform"
}

variable "s3_bucket_name" {
  description = "Existing private S3 bucket used by the website."
  type        = string
  default     = "devops-platform-eslam-2026"
}

variable "cloudfront_distribution_id" {
  description = "Existing CloudFront distribution ID."
  type        = string
  default     = "EJ0FM81LBYU31"
}

variable "cloudfront_domain_name" {
  description = "Existing CloudFront distribution domain."
  type        = string
  default     = "d2m4cwdyljzt2z.cloudfront.net"
}

variable "custom_domain" {
  description = "Website custom domain."
  type        = string
  default     = "devops.elshamy.online"
}

variable "cloudflare_zone_id" {
  description = "Cloudflare zone ID for the domain."
  type        = string
}

variable "cloudflare_api_token" {
  description = "Cloudflare API token."
  type        = string
  sensitive   = true
}

variable "github_actions_user_name" {
  description = "IAM user used by GitHub Actions deployment."
  type        = string
  default     = "github-actions-deploy"
}
