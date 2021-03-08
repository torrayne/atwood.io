package main

import (
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/djatwood/formailer"
	"github.com/djatwood/formailer/handlers"
)

func main() {
	f := make(formailer.Forms)
	f.Add("Contact", formailer.Email{
		To:      "daniel@atwood.io",
		From:    `"Atwood.io" <daniel@atwood.io>`,
		Subject: "New Contact Form Submission",
	})

	lambda.Start(handlers.Netlify(f))
}
