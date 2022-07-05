# Setup Instructions
[toc]

## Install brew packages

```bash
brew install postgresql git watchman ruby node nvm yarn emacs
```

## Setup Development Environment

```bash
# Install Xcode Dev Tools
xcode-select --install
sudo xcodebuild -license accept

sudo gem install cocoapods
yarn global add expo-cli

# Create expo project, bare workflow
expo init DatingApp

# Init with Typescript
touch tsconfig.json
mv App.js App.tsx
yarn start
```

## Install VSCode

### Extensions
- vscode-icons
- YAML
- React Native Tools
- Prettier - Code formatter
- Path Intellisense
- Terminal
- GraphQL
- Gitlens - Git supercharged
- gitignore
- Better Comments
- DotENV
- ESLint
- ES7+ React/Redux/React-Native snippets
- Bash IDE
- shell-format
- AutoComplate Shell
- Shell Syntax

### Settings.json

```json
{
  "workbench.iconTheme": "vscode-icons",
  "redhat.telemetry.enabled": true,
  "explorer.confirmDelete": false,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.organizeImports": true,
    "source.fixAll.eslint": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.tabSize": 2,
  "editor.insertSpaces": false,
  "editor.stickyTabStops": true,
  "eslint.alwaysShowStatus": true,
  "editor.detectIndentation": false
}
```

## Troubleshooting

**yarn start**

```
Starting Metro Bundler
› Metro waiting on http://192.168.0.14:8081
› Linking is disabled because the client scheme cannot be resolved.
```

Per [this link](https://github.com/expo/expo-cli/issues/4140#issue-1101274588), run:

```bash
npx uri-scheme
npx uri-scheme add dating-app

# Should print out:
# › iOS: Added URI protocol "dating-app" to project
# › Android: Added URI protocol "dating-app" to project
```



```
jest-haste-map: Watchman crawl failed. Retrying once with node crawler.
  Usually this happens when watchman isn't running. Create an empty `.watchmanconfig` file in your project's root folder or initialize a git or hg repository in your project.
  Error: Watchman error: std::__1::system_error: open: /Users/michaelhsu/Documents/DatingApp: Operation not permitted. Make sure watchman is running for this project. See https://facebook.github.io/watchman/docs/troubleshooting.
/Users/michaelhsu/Documents/DatingApp/node_modules/metro-hermes-compiler/src/emhermesc.js:77
          throw ex;
          ^.
```

Try out the following per [this link](https://github.com/facebook/draft-js/issues/2183#issue-495697228):

- For MacOS: go to `System Preferences > Security & Privacy > Privacy > Files and Folders` and enable `watchman` access to the correct directory / parent directory
- Run `brew reinstall watchman`
- Restart computer (this worked for me)

**Metro bundler**

On QR code camera, if it says `No usable data found`:

- 

When reloading the app, if it says:

```
warn No apps connected. Sending "reload" to all React Native apps failed. Make sure your app is running in the simulator or on a phone connected via USB
```

- 
