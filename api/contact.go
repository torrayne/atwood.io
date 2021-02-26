package api

import (
	"net/http"

	"github.com/djatwood/formailer"
)

func Formailer(w http.ResponseWriter, r *http.Request) {
	cfg := make(formailer.Config)
	cfg.Set(&formailer.Form{
		Name:    "Contact",
		To:      "daniel@atwood.io",
		From:    `"Atwood.io" <daniel@atwood.io>`,
		Subject: "New Contact Submission",
	})

	cfg.Vercel(w, r)
}
