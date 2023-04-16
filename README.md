# Backend - Backend repo for invoices, feedbacks and hellocar

This is the backend repo for all the projects on my portfolio.

Check docs/architecture.md for folder structure.

[:arrow_up:\[Back to Top\]](https://github.com/hermkan/backend)

The validate() method deserves some discussion.

For the jwt-strategy, Passport first

- verifies the JWT's signature
- and decodes the JSON.

It then

- invokes our validate() method passing the decoded JSON as its single parameter.

Based on the way JWT signing works, we're guaranteed that we're receiving a valid token that we have previously signed and issued to a valid user.
