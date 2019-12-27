provider "aws" {
  access_key = "AKIA54QO2KHFOJGDUJ5S"
  secret_key = "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"
  region     = "us-east-1"
}



resource "aws_instance" "TodoApp" {
  ami           = "ami-2757f631"
  instance_type = "t2.micro"
  key_name = "todokey"
  security_groups = ["${aws_security_group.Servicetodo.name}"]
  
tags = {
Name = "TodoApp"
}
}

 


resource "aws_security_group" "Servicetodo" {
  name        = "Servicetodo"
  description = "Create security Group for ec2 instance"
  vpc_id      = "vpc-7ca1f906"

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

 ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

ingress {
    from_port   = 3003
    to_port     = 3003
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
   from_port  	= 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

egress {
   from_port   	= 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

egress {
   from_port   	= 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
egress {
   from_port   	= 3003
    to_port     = 3003
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  
}
