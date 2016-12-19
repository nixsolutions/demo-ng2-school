Angular 2.0 Demo Application - School blog
====================================================

In general words it’s SPA application built with  Angular 2.0.  This simple application was developed according to the client’s requirements. Original requirements:

Simple app page, master/detail the view.
Master contains 8 dummy icons and one real called “Blogg”(UI is not important)
When the blog-button is clicked the detail view shows a view with “cards” 
Each row in the DB is a card
Each card can contain: Topic, Image, content. (The only required field is a topic, the rest can be null)
Order cards by creation date (descending order) 
Show the created date in the header of a card, if the latter is edited show the edited one instead in the same placeholder (any timestamp format is fine).
This is an example of the following:
 - project architecture 
 - routing setup in SPA app
 - responsive design
 - Parse.com database as backend

[Demo](https://nixsolutions.github.io/demo-ng2-school/). 

Features
--------

1. Select between categories
2. Blog cards with detailed information
3. Sort by added date descending
  
Technologies
------------

* [Angular2.0](https://angular.io)
* [Angular-CLI](https://github.com/angular/angular-cli)
* [Karma](https://karma-runner.github.io)
* [Protractor](http://www.protractortest.org)
* [Bootstrap](http://getbootstrap.com)
* [Font Awesome](http://fontawesome.io)

Developer notes
---------------

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.11-webpack.9-4.

*Development server*

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

*Code scaffolding*

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

*Build*

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

*Running unit tests*

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

*Running end-to-end tests*

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

*Deploying to Github Pages*

Run `ng github-pages:deploy` to deploy to Github Pages.

*Further help*

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
