# Ember-read-more
[![Build Status](https://travis-ci.org/sprocketc/ember-read-more.svg?branch=master)](https://travis-ci.org/sprocketc/ember-read-more) [![Code Climate](https://codeclimate.com/github/sprocketc/ember-read-more/badges/gpa.svg)](https://codeclimate.com/github/sprocketc/ember-read-more) [![npm version](https://badge.fury.io/js/ember-read-more.svg)](https://badge.fury.io/js/ember-read-more)

A simple read-more component for ember, using maximum height.

## Installation

`ember install ember-read-more`

## Usage

```
{{#read-more}}
  Lorem ipsum...
{{/read-more}}
```

## Options

* `isOpen` -  The on-load state of the component (default: `false`)
* `maxHeight` - The maximum visible height when the component is closed (default: `'200px'`)
* `toggleClass` - The class of the toggle link (default: `'read-more-toggle'`)
* `openText` - The open action text of the toggle link (default: `'Read more'`)
* `closeText` - The close action text of the toggle link (default: `'Close'`)
* `bodyClass` - The class of the content div (default: `'read-more-body'`)
* `bodyCss` - The default styles of the content div (default: `'overflow-y: hidden; width: 100%; display: block;'`)

## Actions

The `onClose` or the `onOpen` action is triggered when the toggle link is clicked.

You can set these actions like the example below:
```
{{#read-more onClose='yourCloseAction' onOpen='yourOpenAction'}}
  Lorem ipsum...
{{/read-more}}
```

## Class bindings

The `is-open` or the `is-closed` class is automatically added to the component.
Use these classes if you want to style your component differently for each state.

## Animations

This component is using css `max-height` to toggle your content.
Adding the following in your project styles should do the trick:
```
.read-more-body {
  max-height: 1000px; // set a height that your content will not exceed
  transition: max-height .3s;  // change the .3s to the duration you want
}
```

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
