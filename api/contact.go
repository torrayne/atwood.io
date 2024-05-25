package api

import (
	"net/http"

	"github.com/djatwood/formailer"
	"github.com/djatwood/formailer/handlers"
)

func Contact(w http.ResponseWriter, r *http.Request) {
	contact := formailer.New("Contact")
	contact.Redirect = "/thank-you/"
	contact.ReCAPTCHA = true
	contact.AddEmail(formailer.Email{
		To:      "rayne@atwood.io",
		From:    `"Atwood.io" <rayne@atwood.io>`,
		Subject: "New Contact Form Submission",
	})

	handlers.Vercel(formailer.DefaultConfig, w, r)
}
