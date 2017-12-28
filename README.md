# MUD of Babel

Based on [TextAdventure.js](https://github.com/TheBroox/TextAdventure.js)

## Installing and running

1. Install [Yarn](https://yarnpkg.com) (`brew install yarn` if you have Homebrew)
2. Clone/download this repository
3. Run `yarn` to install necessary packages.
4. Run `yarn start` to start the server which is now available in port 3001

## Changing the game file

There's an [Jupyter notebook](python/mud-of-babel.ipynb) (Python) in the `python` folder that can give you an idea. Running it will output a `mud_of_babel_data.json` file which you can use to overwrite the `gameData` variable in [`cartridges/mud.js`](cartridges/mud.js) (just copy/paste the entirety of the data file as the value for that variable).
