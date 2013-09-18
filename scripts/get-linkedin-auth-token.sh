!#/bin/sh

# in browser go to : https://secure.meetup.com/oauth2/authorize?client_id=ojmnm08b79nap8om3q6c8f8nno&response_type=code&redirect_url=http://www.mastodonc.com/foo

Curl -v -X POST -d 'client_id=ojmnm08b79nap8om3q6c8f8nno&client_secret=57d7amjrk6ir34r3vfnnun4c36&grant_type=authorization_code&redirect_uri=http://www.mastodonc.com/foo&code=5a9fbeec84a829386091dda3369af914' https://secure.meetup.com/oauth2/access
