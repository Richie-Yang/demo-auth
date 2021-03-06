# Demo-auth

Demo-auth is all about demo handmade login function, which currently you can just simply login and loggout. And since this project is lack of too many security features implemented, so please do not use for any other purpose.
<p align="center">
  <img src="https://github.com/Richie-Yang/demo-auth/blob/main/public/img/a11-demo-auth.gif">
</p>

## Features
1. User can import pre-set dummy data into DB.
2. User can test login/logout function over login page.


## Prerequisites
1. Node.js (v14.16.0 is recommended)
3. GitBash or CMder (for Windows) / terminal (for MacOS)


## Installation
1. Open your terminal, then clone the repo to your local.
```
git clone https://github.com/Richie-Yang/demo-auth.git
```
2. Move to repo directory.
```
cd demo-auth
```
3. Run the command below to start installing dependencies.
```
npm install
```


## Execution
1. Run below script to add seed data.
```
npm run seed
```
2. Start Express server in Node.js env.
```
npm run start
```
or

3. Start Express server in dev mode, which uses nodemon to start server.
```
npm run dev
```
PS: If you don't have nodemon installed, please check [Nodemon](https://www.npmjs.com/package/nodemon) first.


## All Branches
* 2021/11/8 AC-Homework-A10
* 2021/11/8 AC-Homework-A11


## Other Screenshots (updated at 11/8/2021)
### index.hbs view
![Login Page](https://github.com/Richie-Yang/demo-auth/blob/main/public/img/a11-demo-auth-login.jpg)
### result.hbs view
![Dashboard Page](https://github.com/Richie-Yang/demo-auth/blob/main/public/img/a11-demo-auth-dashboard.jpg)


## development tools (updated at 11/8/2021)
- Node.js 14.16.0
- Cookie-parser 1.4.5
- Express 4.17.1
- Express-Handlebars 5.3.4
- Express-session 1.17.2
- MongoDB
- mongoose 6.0.12


## Contributor
[Richie](https://github.com/Richie-Yang)
