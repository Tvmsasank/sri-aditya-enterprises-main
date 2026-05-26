# resource "aws_cloudfront_distribution" "website_cdn" {

#   enabled = true

#   origin {
#     domain_name = aws_s3_bucket.website_bucket.bucket_regional_domain_name
#     origin_id   = "s3-origin"
#   }

#   default_cache_behavior {
#     allowed_methods = ["GET", "HEAD"]
#     cached_methods  = ["GET", "HEAD"]

#     target_origin_id = "s3-origin"

#     viewer_protocol_policy = "redirect-to-https"

#     forwarded_values {
#       query_string = false

#       cookies {
#         forward = "none"
#       }
#     }
#   }

#   default_root_object = "index.html"

#   restrictions {
#     geo_restriction {
#       restriction_type = "none"
#     }
#   }

#   viewer_certificate {
#     cloudfront_default_certificate = true
#   }
# }