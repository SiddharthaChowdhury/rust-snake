System must have rust and node installed

## Setup

```
- cd rust_pkg
- cargo install wasm-pack
- wasm-pack build --target web

- cd ../react-snake-game
- npm install
- npm start
```

## Key points

- This command `wasm-pack build --target web` will **build** new "pkg" dir with wasm content and a \*.js file in it, which will help glue the wasm with our react application
- In `/react-snake-game/package.json` lookout for the dependency `rust_pkg` which is linking our compiled rust code in `/rust_pkg/pkg` dir as a local dependency in our react app. This way we can use the wasm in our app.
- Out of the box, create-react-app will not support WebAssembly. Which is why we are using `react-app-rewired` which is going to allow us to modify the webpack without ejecting, and `wasm-load` package will help webpack handle WebAssembly
