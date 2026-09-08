output "s3_bucket_name" {
  value = aws_s3_bucket.website.bucket
}

output "cloudfront_distribution_id" {
  value = var.cloudfront_distribution_id
}

output "cloudfront_domain_name" {
  value = var.cloudfront_domain_name
}

output "custom_domain" {
  value = var.custom_domain
}

output "acm_certificate_arn" {
  value = data.aws_acm_certificate.website.arn
}

output "github_actions_policy_arn" {
  value = aws_iam_policy.github_actions_deploy.arn
}
