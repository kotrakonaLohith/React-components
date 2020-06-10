# My Rotary

Parts kit for My Rotary.


## Install

Pull repo down:

```
git clone git@github.com:vigetlabs/my-rotary-parts-kit.git

or

git clone https://BauzaL@delphi.rotaryintl.org/bitbucket/scm/wc/theme---my-rotary.git

cd my-rotary-parts-kit
```

Make sure correct node.js version is being used (shown here using [nvm](https://github.com/creationix/nvm)):

```
nvm use
```

install required node.js version (if missing):

```
nvm install
```

Install dependencies for js with [yarn](https://yarnpkg.com/en/):

```
yarn install

or

yarn
```


## Development

### Storybook

To work on documentation start storybook

```
yarn storybook
```

A window should open automatically and you should see an output like this:

```
╭───────────────────────────────────────────────╮

    Storybook 4.0.6 started

    Local:            http://localhost:9001/
    On your network:  http://192.168.77.91:9001/

╰───────────────────────────────────────────────╯
```

## Typechecking

On a separate terminal to check code as you work

```
yarn type-check-watch
```

Or before committing to check code passes type checking

```
yarn type-check
```


## Builds

```
@TODO
```

## Writing Guides

Guides are non-technical documentation for the my-rotary parts kit. They are located in the `/src/js/stories/01_guides/` directory. Guides are broken down into multiple types:

1. Top level guides address general topics and do not live in a subdirectory (eg. colors, getting started, etc.) The naming conventions for these are (eg `file-name-guide.mdx`.)
2. Part guides document best practices for using `parts` and live in the `parts` subdirectory. The naming convention for these is `<part-name>-guide.mdx`.
3. Component guides document best practices for using `components` and live in the `components` subdirectory. The naming convention for these is `<component-name>-guide.mdx`.

To create a new guide (in github):

- From `/src/js/stories/01_guides/` copy the contents of `_template-guide.mdx`

- Create a new file for the appropriate kind of guide (parts, components, or general.) Follow the naming conventions above, and paste the contents of `_template-guide.mdx`

- Write your guide

- Once finished fill out the commit message form and select `Create a new branch for this commit and start a pull request.` Name the branch `ab/<name>-guide-new` where `ab` are your initials and `name` is the name of the guide.

- Submit the pull request and assign a developer to review it

## Technologies

This project uses:

1. [Tailwind](https://tailwindcss.com/): Utility first CSS framework for UI development
2. [Storybook](https://storybook.js.org/): A UI development environment to build and document web components
3. [Webpack](https://webpack.js.org/): An asset bundler
4. [MDX](https://mdxjs.com/): Markdown with embedded JSX