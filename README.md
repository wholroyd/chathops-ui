# chathops-ui
## Responsive, bloat free, bootstrap powered admin style dashboard!

Extending from the [original repository](https://github.com/rdash/rdash-ui), chathops-ui is a stylish admin dashboard without the plugins/bloat which many premium dashboard themes come with. It is fully responsive using Bootstrap 3 framework as the base. All animations are CSS3.

> This repository provides only the stying needed to implement chathops-ui interface, not the logic behind the application.

### Requirements
* [NodeJS](http://nodejs.org/) (with [NPM](https://www.npmjs.org/))
* [Bower](http://bower.io)
* [Gulp](http://bower.io)

### Contributing
> Do not use the `dist` directory for contributions, please edit the `less` files.

1. Clone the repository: `git clone https://github.com/wholroyd/chathops-ui.git`
2. Install the NodeJS depencanies: `npm install`. This should automatically run a `bower install` command. You may need to use sudo on linux.
3. Run the gulp build task: `gulp build`.
4. Run the gulp default task: `gulp`. This will build any changes made automatically, and also run a live reload server on [http://localhost:8888](http://localhost:8080).

All project distribution files will be located within the `dist` directory. Use the `index.html` to test your changes/features.

### Pull Requests
1. Fork this repository.
2. Create a new branch, with the name of your fix/feature.
3. Send the pull requests into the projects `develop` branch.

## Credits
* [Elliot Hesp](https://github.com/Ehesp)
* [Leonel Samayoa](https://github.com/lsamayoa)
* [Mathew Goldsborough](https://github.com/mgoldsborough)
* [Ricardo Pascua Jr](https://github.com/rdpascua)
