# data "aws_route53_zone" "main" {
#   name = "sriadityaenterprises.com"
# }

# resource "aws_route53_record" "website" {
#   zone_id = data.aws_route53_zone.main.zone_id
#   name    = "sriadityaenterprises.com"
#   type    = "A"

#   alias {
#     name                   = aws_cloudfront_distribution.website_cdn.domain_name
#     zone_id                = aws_cloudfront_distribution.website_cdn.hosted_zone_id
#     evaluate_target_health = false
#   }
# }