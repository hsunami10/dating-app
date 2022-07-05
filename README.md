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

- [AutoComplate Shell](https://marketplace.visualstudio.com/items?itemName=truman.autocomplate-shell)
- [Bash IDE](https://marketplace.visualstudio.com/items?itemName=mads-hartmann.bash-ide-vscode)
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [gitignore](https://marketplace.visualstudio.com/items?itemName=codezombiech.gitignore)
- [Gitlens - Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [GraphQL](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql)
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [React Native Tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native)
- [Shell Syntax](https://marketplace.visualstudio.com/items?itemName=bmalehorn.shell-syntax)
- [shell-format](https://marketplace.visualstudio.com/items?itemName=foxundermoon.shell-format)
- [Terminal](https://marketplace.visualstudio.com/items?itemName=formulahendry.terminal)

- [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons)
- [YAML](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml)

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
  "[ignore]": {
    "editor.defaultFormatter": "foxundermoon.shell-format"
  },
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
