#!/bin/bash

# Make sure you've run npm install before this

echo "For which day would you like to run tests (eg. 2)?"
read day
npm run build
./node_modules/.bin/mocha src/day$day/tests.js