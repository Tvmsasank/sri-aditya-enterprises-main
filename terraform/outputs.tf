# output "cloudfront_domain" {
#   value = aws_cloudfront_distribution.website_cdn.domain_name
# }

output "bucket_name" {
  value = aws_s3_bucket.website_bucket.bucket
}