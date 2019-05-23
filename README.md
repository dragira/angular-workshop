# AngularApp

This is a set of exercises for the workshop about Angular built in Angular 7 using Angular CLI 7.

## Prerequisites

In order to be able to build and run this project, you will need the following setup to be installed on your computer.

1. Node.js 10.15.x (latest stable), can be downloaded from https://nodejs.org. This will install NPM 6, which is used by Angular CLI.
You can verify your installations by running following commands `node -v`, `npm -v`.

2. Visual Studio Code (https://code.visualstudio.com/) is a good tool when develop Angular applications. It provides rich editing experience, consistency in code formatting across the team, linting tool. It can be configured to better serve your needs. 

3. Angular Essentials extension pack for VS Code is also recommended (can be installed from VS Code or downloaded from https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials). This extention is a set of plugins which provides additional editing options, snippets, and theme.

4. Angular CLI 7.3 installed globally with npm by running `npm install -g @angular/cli`. You can verify your installation by running `ng --version`.

5. Git (https://git-scm.com/) is used for version control. To recap, following Git commands will be used for this workshop
`git clone <repository>` - to clone this repository to your computer
`git checkout <branch>` - to checkout a specific branch
`git commit` - to commit your changes locally
`git stash` - to save your current changes in the branch on a stack of unfinished changes that you can reapply at any time (to be able to checkout another branch)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. Or run `ng serve -o`, a browser window will be opened automatically. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


