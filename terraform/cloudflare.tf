resource "cloudflare_dns_record" "website" {
  zone_id = var.cloudflare_zone_id
  name    = "devops"
  content = var.cloudfront_domain_name
  type    = "CNAME"
  proxied = true
  ttl     = 1
}
