# Picture Gram

This is an application that allows a user to sign up and/or sign in, then redirects the user to their dashboard.

Currently, the user must sign up at:
```
localhost:8080/welcome/signup
```

Then the user needs to navigate to:
```
localhost:8080/welcome/signin
```

Once a user has been signed in or signed up, they may navigate to the dashboard at any time. If a user attempts to access the dashboard for the first time, the dashboard route will redirect the user to the signup route.

Dashboard route:
```
localhost:8080/dashboard
```

A navbar exists to direct a user to their dashboard and settings once they have signed in. The settings includes a form to create a profile and upload an avitar picture.

---

### Environment Variables:

front-end:
```
.dev.env:

NODE_ENV=dev
API_URL="http://localhost:3000"
CDN_URL="/"
```

back-end:
```
.env:

PORT=3000
DEBUG=true
CORS_ORIGINS=http://localhost:8080
SECRET=PUMPKIN
MONGO_URI=mongodb://localhost/picgram

AWS_ACCESS_KEY_ID='<a aws access key id>'
AWS_SECRET_ACCESS_KEY='<a aws secret access key>'
AWS_BUCKET='<a aws bucket>'
```
