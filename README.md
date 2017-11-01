# MUD of Babel

Based on [TextAdventure.js](https://github.com/TheBroox/TextAdventure.js)

## Installing and running

1. Clone/download this repository
2. `npm install`
3. `node server.js` (this will open a browser window)
4. `load mud` making sure cursor is in the bottom part (below green line)

## Reload

To reload the MUD cartridge while playing, you can “hot swap” it by entering the `die` command and then `load mud` again.

More information on TextAdventure.js commands available in the [repository](https://github.com/TheBroox/TextAdventure.js).

## Changing the game file

There's an [Jupyter notebook](python/mud-of-babel.ipynb) (Python) in the `python` folder that can give you an idea. Running it will output a `mud_of_babel_data.json` file which you can use to overwrite the `gameData` variable in [`cartridges/mud.js`](cartridges/mud.js) (just copy/paste the entirety of the data file as the value for that variable).
