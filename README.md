# Suncoast Developers Guild

[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is the SDG website, at [https://suncoast.io](https://suncoast.io).

## Setup

The project is a [Gatsby](https://www.gatsbyjs.org/) based site. We also use [Contentful](https://www.contentful.com/) for some content management. You can request Contentful access from @ambethia. You will need to create an `.env.development` file at the root of the project, with the following configurations:

```
CONTENTFUL_SPACE_ID=
CONTENTFUL_ACCESS_TOKEN=
GATSBY_GATEWAY_API_URL=http://localhost:3000
```

After cloning the project, run `yarn` to install dependencies, and `yarn start` to launch the development server on http://localhost:8000/.

## Issues

Please, feel free to submit issues and enhancement requests.

## Contributing

In general, we follow this workflow:

1.  **Fork** the repo on GitHub.
2.  **Clone** the project to your own machine.
3.  **Commit** changes to your own branch.
4.  **Push** your work back up to your fork.
5.  Submit a **Pull Request** so that we can review your changes.

**NOTE**: Be sure to merge the latest from _upstream_ before making a Pull Request.

Before committing be sure to run `npm run lint` against your project and fix any formatting issues. Pull Requests won't be merged without clean linter output.

## License

The content of this project itself is licensed under the [Creative Commons Attribution Share Alike 4.0 license](https://creativecommons.org/licenses/by-sa/4.0/), and the underlying source code used to format and display that content is licensed under the [MIT license](http://opensource.org/licenses/mit-license.php).
