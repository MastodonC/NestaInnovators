#!/bin/sh

curl -i -u mastodonc-data-analytics -d '{"client_id": "fe72502286f4cc067433", "client_secret": "2bff952f3995fce5f39c6ffb2dca2e3365740553", "scopes": ["repo", "user"]' https://api.github.com/authorizations
