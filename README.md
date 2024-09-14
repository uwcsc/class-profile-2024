## Local Development

Make sure you have Node 18+ and NPM installed.

To run this locally, make sure you first install everything using `npm i` and then run `npm run dev` to start the project on localhost. If you need to use a different port than the default (`3000`), you can do `PORT=5000 npm run dev`.

To use ESLint, run `npm run lint` to get linter warnings and errors. You can also do `npm run lint:fix` to automatically fix any errors that can be corrected by the linter.

## Previewing a Production Deployment

To build the project, run `npm run build`. This will also give you linter warnings/errors. Then, use `npm start` to run the built project. You can also do `npm run preview` to do both together. Again, you can do `PORT=5000 npm start` or `PORT=5000 npm run preview`.

## Contributing

Implement changes on your own branch. The preferred branch naming scheme is `name/ticket/description`; for example, `iris/CSP-1234/fix-the-bug`, but this isn't really a big deal and won't be enforced.

The `main` branch is protected and requires a PR with one approval to merge to it. When reviewing PRs, checkout the branch and run it locally to test the changes.

Make sure you assign a ticket to yourself before you start working on it to avoid conflicts/duplicate work. Please update the status as well so everyone can keep track of what's going on and people can ask to take over tickets if they want a task and notice you haven't started.
