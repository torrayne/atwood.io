package api

import (
	"net/http"

	"github.com/djatwood/formailer"
	"github.com/djatwood/formailer/handlers"
)

func Contact(w http.ResponseWriter, r *http.Request) {
	contact := formailer.Form{
		Name:     "contact",
		Redirect: "/thank-you/",
	}
	contact.AddEmail(formailer.Email{
		To:      "daniel@atwood.io",
		From:    `"Atwood.io" <daniel@atwood.io>`,
		Subject: "New Contact Form Submission",
	})

	formailer.Add(contact)
	handlers.Vercel(formailer.DefaultConfig, w, r)
}
