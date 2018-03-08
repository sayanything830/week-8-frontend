# Picture Gram

[![Build Status](https://travis-ci.org/sayanything830/week-8-backend.svg?branch=master)](https://travis-ci.org/sayanything830/week-8-backend)

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

