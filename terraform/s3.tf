resource "aws_s3_bucket" "website_bucket" {
  bucket = "sri-aditya-enterprises"

  tags = {
    Name = "Sri Aditya Enterprises"
  }

  lifecycle {
    prevent_destroy = true
  }
}