# MUD of Babel

Generative Redis-based Multi-User Dungeon (MUD). The rooms are built from the [Library of Congress Classification Outline](https://www.loc.gov/catdir/cpso/lcco/).

I talked about the background on this project during a ligtning talk in <a href="https://2018.code4lib.org/">Code4lib 2018</a>. <a href="https://docs.google.com/presentation/d/1dUykBduQxtdpqEn4dh3ePcAj5meFc1NXiqr0n3uTa40/present?includes_info_params=1#slide=id.p3">View the slides</a>.

## Installing and running

This MUD uses [Redis](https://redis.io) for session and state management.

1. Install [Yarn](https://yarnpkg.com) (`brew install yarn` if you have Homebrew)
2. Clone/download this repository
3. Run `yarn` to install necessary packages.
4. Run `yarn start` to start the server which is now available in port 3001

## Changing the game file

There's a [Jupyter notebook](python/mud-of-babel.ipynb) (Python) in the `python` folder that can give you an idea. Running it will output a `mud_of_babel_data.json` file which you can use to overwrite the `gameData` variable in [`cartridges/mud.js`](cartridges/mud.js) (just copy/paste the entirety of the data file as the value for that variable).

## Credits

Built on a heavily-modified version of [TextAdventure.js](https://github.com/TheBroox/TextAdventure.js).
