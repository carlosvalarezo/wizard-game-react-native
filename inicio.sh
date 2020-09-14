#!/bin/bash

echo 'installing dependencies'
npm install
echo 'running test'
npm start
echo 'starting android app'
npm run android
