#!/usr/bin/env node
// importing our modules
var boxen = require('boxen'),
    chalk = require('chalk');

// Because we like console, and captains.log sounds cool
const captains = console;

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'single',
};

// Text + chalk definitions
const data = {
  name: chalk.white('Alestor Aldous /'),
  handle: chalk.cyan('A Mortal Web Developer With Immortal Dreams'),
  work: chalk.white('As A Full Stack Developer'),
  github: chalk.cyan('https://github.com/alestor123'),
  web: chalk.cyan('http://alestor123.github.io/'),
  npx: chalk.white('npx alestor123-card'),
  labelWork: chalk.white.bold('      Work:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:'),
};

// Actual strings we're going to output
const newline = '\n';
const heading = `${data.name} ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

