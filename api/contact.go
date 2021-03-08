package api

import (
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/djatwood/formailer"
	"github.com/djatwood/formailer/handlers"
)

func main() {
	f := make(formailer.Config)
	f.Set(&formailer.Form{
		Name:     "Contact",
		To:       "daniel@atwood.io",
		From:     `"Atwood.io" <daniel@atwood.io>`,
		Subject:  "New Contact Form Submission",
		Redirect: "/thank-you/",
	})

	lambda.Start(handlers.Netlify(&f))
}
