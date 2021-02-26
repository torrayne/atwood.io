package api

import (
	"net/http"

	"github.com/djatwood/formailer"
)

func Contact(w http.ResponseWriter, r *http.Request) {
	formailer.Vercel(w, r)
}
