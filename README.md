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

Run `ng new my-app-name` to create a new application. This command will also run `npm install` to download all the packages.
Additional flags can be used:
--dryRun             just report, no action
--skipTests          no test files generated
--routing            module for routing will be added
--style=css|scss|sass|less|styl  file extension or preprocessor to use for style files
      
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Workspace files

angular.json - CLI configuration defaults for the project, including configuration options for build, serve, and test tools, such as TSLint, Karma, and Protractor.

package.json - Configures npm package dependencies that are available to the project.

package-lock.json - Provides version information for all packages installed into node_modules by the npm client.

node_modules - Provides npm packages.

tsconfig.json - Default TypeScript configuration for apps in the workspace, including TypeScript and Angular template compiler options.

tslint.json - Default TSLint configuration for the project

## Default project files

src/app/  - Contains the component files in which your app logic and data are defined.

src/assets/ - Contains image files and other asset files to be copied as-is when you build your application.

src/environments/ - Contains build configuration options for particular target environments.

index.html - The main HTML page that is served when someone visits your site. The CLI automatically adds all JavaScript and CSS files when building the app.

main.ts - The main entry point for your app. Compiles the application with the JIT compiler and bootstraps the application's root module (AppModule) to run in the browser.

polyfills.ts - Provides polyfill scripts for browser support.

## Lab 0: create a new app

1. Run the command `ng new my-app --skipTests --routing --style=scss` 
2. Go into app folder `cd my-app`
3. Serve the app `ng serve -o`

Answer in branch: `init-app`

## Lab 1a: create a component

1. Checkout branch `1-lab-create-component-begin` (run `git checkout 1-lab-create-component-begin`)
2. Add <app-princesses></app-princesses> into app.component.html
3. Open princesses folder in terminal and run `ng g c princess-detail`  (alias to `ng generate component princess-detail`)
4. Add @Input() princess; into princess-detail.component.ts
5. Uncomment code for app-princess-detail component in princesses.component.html
6. Copy code from hero-detail.component.html, insert in princess-detail.component.html, replace hero properties by princess properties
7. Copy code from hero-detail.component.scss, insert into princess-detail.component.scss, add background: #fc99cc; for class .title
8. Test the application, you should be able to see princesses together with heroes.

Answer in branch: `1-lab-create-second-component`

## Lab 1b: create services

1. Checkout branch `1-lab-create-services-begin` 
2. Open princesses folder in terminal and run `ng g s princesses` (alias to `ng generate service princesses`)
3. Move princesses from princesses.component.ts to the service
4. In princesses.component.ts inject PrincessesService into constructor
5. Add getPrincesses function to ngOnInit in princesses.component.ts
6. Add getPrincesses function to the service
7. Test the application, it should work as previously. Just less code in the component.

Answer in branch: `1-lab-create-services`

## Lab 2: Typescript

1. Checkout branch `2-lab-typescript-begin`
2. Create a new file prinsess.ts in core/model and add class Princess there. Add file to core/model/index.ts.
3. In princesses.component.ts add types to princesses, selectedPrincess, and function selectPrincess
4. Add classes in princesses.service.ts
5. Add classes in princess-detail.component.ts
6. Test the application, it should work as previously

Answer in branch: `2-lab-typescript`

## Lab 3: refactor with routes

1. Checkout branch `3-lab-routing-begin`
2. Remove components from app.component.html
<app-heroes></app-heroes>
<app-princesses></app-princesses>
3. Uncomment router outlet in app.component.html
4. Uncomment navigation links in app.component.html
5. Replace empty routes by routes to components in app-routing.module.ts
6. Test the application, it should work as previously

Answer in branch: `3-lab-routing`

## Lab 4: modules

1. Checkout branch `4-lab-modules-begin`
2. Create princesses module: run `ng g m princesses` from app folder
3. In PrincessesModule: insert PrincessesComponent and PrincessDetailComponent into declarations AND export
4. In AppModule: insert PrincessesModule into imports
5. In AppModule: remove PrincessesComponent and PrincessDetailComponent from  declarations
6. Test the application, it should work as previously

Bonus: move routing to PrincessesModule

1. Create file princesses-routing.module.ts in princesses folder
2. In the new file select snippet `a-module-with-routing` (start typing a-module... and select from the list). Rename the module to PrincessesRoutingModule. Add RouterModule to exports.
In PrincessesModule: import PrincessesRoutingModule.
3. Use snippet `a-route-path-eager` inside const routes: Routes = []; in PrincessesRoutingModule. Replace path by princesses, and component by PrincessesComponent.
4. Test the application, it should work as previously. Just less code in AppModule

Answer in branch: `4-lab-modules`

## More information

Typescript
1. Learn TypeScript: http://bit.ly/learn-ts
2. TypeScript: http://typescriptlang.org 
3. TypeScript deep dive: http://bit.ly/ts-deepdive 

Observables
1. Getting started with Rx.js: http://bit.ly/rxjs-get-started
2. Learn Rx.js: https://www.learnrxjs.io/
3. Rx.js docs: http://bit.ly/rxjs-docs 
4. Observables: http://bit.ly/ng-rxjs
