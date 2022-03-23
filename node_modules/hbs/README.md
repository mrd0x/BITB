# hbs

[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![Linux Build][github-actions-ci-image]][github-actions-ci-url]
[![Windows Build][appveyor-image]][appveyor-url]
[![Test Coverage][coveralls-image]][coveralls-url]

[Express.js](https://expressjs.com/) view engine for
[handlebars.js](https://handlebarsjs.com/)

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install hbs
```

## Use ##

Using *hbs* as the default view engine requires just one line of code in your app setup. This will render `.hbs` files when `res.render` is called.

```javascript
app.set('view engine', 'hbs');
```

To use a different extension (i.e. html) for your template files:

```javascript
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);
```

## Helpers and Partials ##

hbs exposes the `registerHelper` and `registerPartial` method from handlebars.

```javascript
var hbs = require('hbs');

hbs.registerHelper('helper_name', function (options) { return 'helper value'; });
hbs.registerPartial('partial_name', 'partial value');
```

For convenience, `registerPartials` provides a quick way to load all partials from a specific directory:

```javascript
var hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials', function (err) {});
```

Partials that are loaded from a directory are named based on their filename, where spaces and hyphens are replaced with an underscore character:

```
template.html      -> {{> template}}
template 2.html    -> {{> template_2}}
login view.hbs     -> {{> login_view}}
template-file.html -> {{> template_file}}
```

See the [handlebars.js documentation](https://handlebarsjs.com/) for more
information.

The way the file is renamed to a partial name can be adjusted by providing a `rename` option. The function will recieve the file path relative to the registered directory and without the file extension. If the returned value contains any whitespace, those characters are replaced with a corresponding underscore character.

```js
var hbs = require('hbs')

hbs.registerPartials(path.join(__dirname, '/views/partials'), {
  rename: function (name) {
    // all non-word characters replaced with underscores
    return name.replace(/\W/g, '_')
  }
})
```

**Note:** This method is async; meaning that the directory is walked in a non-blocking manner to app startup.

## Exposing locals as template data ##

hbs has the ability to expose the application and request locals within any context inside a view. To enable this functionality, simply call the `localsAsTemplateData` method and pass in your Express application instance.

```javascript
var hbs = require('hbs');
var express = require('express');

var app = express();
hbs.localsAsTemplateData(app);

app.locals.foo = "bar";
```

The local data can then be accessed using the `@property` syntax:

```
top level: {{@foo}}
{{#each items}}
  {{label}}: {{@foo}}
{{/each}}
```
Note: In partials and templates, local data can be accessed without using `@` prefix.

## handlebars ##

The handlebars require used by hbs can be accessed via the `handlebars` property on the `hbs` module.

If you wish to use handlebars methods like `SafeString` please do so on this property. Do not register helpers or partials in this way.

```
// hbs.handlebars is the handlebars module
hbs.handlebars === require('handlebars');
```

## Recipes ##

### more than one instance ###
You can create isolated instances of hbs using the `create()` function on the module object.

```
var hbs = require('hbs');

var instance1 = hbs.create();
var instance2 = hbs.create();

app.engine('html', instance1.__express);
app.engine('hbs', instance2.__express);
```

Each instance has the same methods/properties as the `hbs` module object. The module object is actually just an instance created for you automatically.

### extra scripts or styles ##
Sometimes it is useful to have custom scripts or stylesheets on your pages. Handlebars does not provide a way to import or extend a template, but through the use of helpers you can create a similar result.

We can take advantage of the fact that our body template is processed before the layout template. Knowing this, we can create two helpers `block` and `extend` which can be used to 'inject' custom stylesheets or scripts into the layout template. The `block` helper will act as a placeholder for values specified in earlier `extend` helpers.

See examples/extend for a working example. Note how the index.hbs file defines extra stylesheets and scripts to be injected into the layout. They are put into the head section and at the end of the body respectively. If this was not done, the stylesheet would be in the body and the script would print `foo bar` too soon.

## Helpful Modules ##

- **[hbs-utils](https://www.npmjs.com/package/hbs-utils)**: A small utility
  library that provides helpers for registering and compiling partials
  including automatic updates when partials are changed.

[appveyor-image]: https://badgen.net/appveyor/ci/dougwilson/nodejs-hbs/master?label=windows
[appveyor-url]: https://ci.appveyor.com/project/dougwilson/nodejs-hbs
[coveralls-image]: https://badgen.net/coveralls/c/github/pillarjs/hbs/master
[coveralls-url]: https://coveralls.io/r/pillarjs/hbs?branch=master
[github-actions-ci-image]: https://badgen.net/github/checks/pillarjs/hbs/master?label=linux
[github-actions-ci-url]: https://github.com/pillarjs/hbs/actions?query=workflow%3Aci
[node-image]: https://badgen.net/npm/node/hbs
[node-url]: https://nodejs.org/en/download/
[npm-downloads-image]: https://badgen.net/npm/dm/hbs
[npm-url]: https://npmjs.org/package/hbs
[npm-version-image]: https://badgen.net/npm/v/hbs
