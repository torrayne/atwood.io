package api

import (
	"net/http"

	"github.com/djatwood/formailer"
)

func Contact(w http.ResponseWriter, r *http.Request) {
	f := make(formailer.Config)
	f.Set(&formailer.Form{
		Name:     "Contact",
		To:       "daniel@atwood.io",
		From:     `"Atwood.io" <daniel@atwood.io>`,
		Subject:  "New Contact Form Submission",
		Redirect: "/thank-you/",
	})

	f.Vercel(w, r)
}
