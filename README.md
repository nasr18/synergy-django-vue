# Synergy Vue.js Django REST Framework

This is a simple CRUD app with Vue.js and Django REST Framework.

### Prerequisites

- Install python3+, pipenv, django.

## Getting Started

- Clone this project to your machine
- Follow the instructions below.

## Set up

You might want to use `sudo` if you encounter permissions error

### Backend (Django)

From root folder execute

```bash
$ pipenv shell
$ pipenv install
$ python3 manage.py migrate
$ python3 manage.py runserver
```

### Frontend (Vue)

Open another terminal and execute below commands from root folder

```bash
$ cd vue-app
$ yarn install
$ yarn serve
```

## Built With

- [Django REST Framework](https://www.django-rest-framework.org/) - Django REST framework is a powerful and flexible toolkit for building Web APIs
- [Vue.js](https://vuejs.org/) - The Progressive JavaScript Framework
- [SQLite](https://www.sqlite.org/index.html) - Database
