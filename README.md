# Used tools:

1. Vite(bundler),
2. JS,
3. React,
4. Redux,
5. HTML,
6. CSS,
7. SCSS,
8. GIT,
9. GitHub
10. IGDB.API

# Scripts:

* npm run dev
* Open http://localhost:3000 to view it in your browser.

* predeploy = npm run build,
* deploy = gh-pages -d build,
* dev = vite,
* build = vite build,
* preview = vite preview,

# Describes:

Games-catalog for searching different games.

    User must sing in or fill in the form before using application.

    On main page user can insert name of any game to input, result - array (500 - items), user can filter the result
        by game genre, platforms, engines, age-rating, game mode, popularity rating.

    And also user can choose in other filter option any (it`s literaly turn off filter).
    Also user can add games to his own page, and delete games from his page.

* User information and fetched array of games saves to redux store. 
* For imitation DB created array of users.
    Js functions will check mail and password to valid lexical value.

* to enter the app - insert mail: user@mail.com / password: User001

* App have responsive design.
* App work in Chrome / Opera / Edge.

# close time tasks:

1. Pagination?
2. Tests?

3. Fix some problems (forms have no reaction on enter button)

# Problems:

1. have some wrong with deploying on git-hub pages
2. I`m not sure that I realise filters right (second wariant - filter datas on API server, with help API commands)


