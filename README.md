## Node Base

This is the typical base NodeJS server side starting project we can use.
You can write code using ES2015 and this has asyncFunctions support as well.

### Coding

You can start writing code inside the `server` directory.

### Running

There are few ways you can run your app:

* npm run dev - watches file changes and restart
* npm run prod - run the app in the production
* npm run localprod - run the app locally with production configurations

> You may need to change some shell scripts in `scripts` directory according to your project.

### Testing

You can write tests anywhere in the `server` directory. But you need to put them inside a directory called `__tests__`.
Then you can num these tests as:

* `npm run testonly`
* `npm run test` will also check for lint errors as well

### Linting

We use eslint for liniting. Coding styles follows some of the rules mentioned in facebook's graphql repo.

* `npm run eslint` to lint the code
* `npm run eslintfix` to lint and fix some issues which can be fixed automatically.
