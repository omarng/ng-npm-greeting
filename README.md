# ng-npm-greeting

[![npm (scoped)](https://img.shields.io/npm/v/@ngomar/ng-npm-greeting.svg)](https://www.npmjs.com/package/@ngomar/ng-npm-greeting)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@ngomar/ng-npm-greeting.svg)](https://www.npmjs.com/package/@ngomar/ng-npm-greeting)

Greeting from Nuara Group.

## Install

```
$ npm install @ngomar/ng-npm-greeting
```

## Usage

```js
const ngGreet = require("@ngomar/ng-npm-greeting");

ngGreet("Lord Sayur");
//=> "Hello Lord Sayur! Greeting from Nuara Group."

ngGreet(1337);
//=> Uncaught TypeError: Ng wants a string!
//    at ngGreet (<anonymous>:2:41)
//    at <anonymous>:1:1
```
