package api

import (
	"net/http"

	"github.com/djatwood/formailer"
	"github.com/djatwood/formailer/handlers"
)

func Contact(w http.ResponseWriter, r *http.Request) {
	f := make(formailer.Forms)
	f.Add("contact", formailer.Email{
		To:      "daniel@atwood.io",
		From:    `"Atwood.io" <daniel@atwood.io>`,
		Subject: "New Contact Form Submission",
	})

	handlers.Vercel(f, w, r)
}
