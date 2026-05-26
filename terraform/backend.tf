terraform {
  backend "s3" {
    bucket       = "sri-aditya-tf-state"
    key          = "sae/terraform.tfstate"
    region       = "ap-south-1"
    encrypt      = true
    use_lockfile = true
  }
}