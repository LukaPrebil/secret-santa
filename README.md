# Secret Santa generator

This is a simple project to generate and mail out a secret santa list.

It takes a list of people and their email addresses, pairs them up randomly, and sends each person an email telling them who they have to buy a present for.

## Usage

For the app to work, you will need to generate an auth0 app in your GCP project, generate the `credentials.json` file and put it in the root of the project.
See more in the GCP docs https://developers.google.com/gmail/api/quickstart/nodejs#authorize_credentials_for_a_desktop_application

The script expects you to create a file called `people.json` in the root of the project, with the following format:

```jsonc
[
  {
    "name": "Janez",
    "nameRec": "Janeza", // name in the accusative case
    "email": "janez@example.com"
  }
]
```
    
The first time you run `npm start`, it will redirect you to a google authentication page. You will need to log in with the account you want to send emails from, and give this app permission to do so.

```bash
npm install
npm start
```