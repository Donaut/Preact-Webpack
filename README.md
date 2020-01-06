# Preact-Webpack

Preact-Webpack is a Template project is to show how to use preact with webpack.

## Installation

Just simply clone this repository.

```clone
git clone https://github.com/Donaut/Preact-Webpack.git
```

And restore the NuGet packages.

```NuGet
npm install
```

Now you can use your favorite text editor to modify the code :)

# Usage


## Production Build

A dist folder is created. And it will copy every file to the dist folder from the src/public folder.

```build
npm run build
```

An example dist folder structure.
```
dist
├── public
│   └── YOUR_FILES...
├── bundle.js
├── index.html
```

## Development Build

To make a development build. It will start a live server with a live reload.
```dev
npm run dev
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)
