4.2.0 / 2021-11-16
==================

  * Add `rename` option to `registerPartials`
  * Ensure all partials are registered before rendering
  * Fix function context in async helpers
  * deps: walk@2.3.15

4.1.2 / 2021-04-15
==================

  * deps: handlebars@4.7.7

4.1.1 / 2020-04-03
==================

  * deps: handlebars@4.7.6

4.1.0 / 2020-01-14
==================

  * deps: handlebars@4.5.3
    - Add `handlebars.parseWithoutProcessing`
    - Add support for iterable objects in `#each` helper
    - Block access to non-enumerable special properties on objects
    - Fix error when helper defined with array properties
    - Fix parsing of empty raw blocks
    - Fix work-around for `constructor` blocking
    - Validate arguments to `#if`, `#unless` and `#with` helpers

4.0.6 / 2019-10-09
==================

  * deps: handlebars@4.3.5
    - Fix error object inheritance
    - Fix work-around for `constructor` blocking

4.0.5 / 2019-09-27
==================

  * Fix async helpers not working when cache enabled
  * Fix handling of exceptions from layout
  * Fix handling of exceptions when cache enabled
  * deps: handlebars@4.3.3
    - Block calling `helperMissing` and `blockHelperMissing` from templates
    - Fix work-around for `constructor` blocking
  * deps: walk@2.3.14

4.0.4 / 2019-04-14
==================

  * deps: handlebars@4.0.14
    - Block `constructor` property using `lookup`

4.0.3 / 2019-03-01
==================

  * Fix path for partials multiple dirs deep on Windows

4.0.2 / 2019-02-18
==================

  * deps: handlebars@4.0.13

4.0.1 / 2016-09-18
==================

  * Support params for async helper
  * deps: handlebars@4.0.5
  * deps: walk@2.3.9

4.0.0 / 2015-11-02
==================

  * Fix caching of non default filename layouts
  * deps: handlebars@4.0.3

3.1.1 / 2015-09-11
==================

  * Fix `localsAsTemplateData` when cache is enabled

3.1.0 / 2015-06-10
==================

  * Make `@data` available to layouts

3.0.1 / 2015-03-12
==================

  * Fix using custom extensions when using view engine layouts

3.0.0 / 2015-03-09
==================

  * deps: handlebars@3.0.0

2.9.0 / 2015-03-06
==================

  * Scope internal async tracker to per middleware
  * Support multiple view folders from Express

2.8.0 / 2014-12-26
==================

  * Scope internal async tracker to per hbs instance
  * deps: handlebars@2.0.0

2.7.0 / 2014-06-02
==================

  * Fix registering directories of partials on Windows
  * Add API to expose locals as template data

2.6.0 / 2014-04-06
==================

  * Fix support for custom handlebars instance

2.5.0 / 2014-02-19
==================

  * deps: handlebars@1.3.0

2.4.0 / 2013-09-13
==================

  * Add support for multi-level partial paths

2.3.1 / 2013-08-01
==================

  * deps: after@0.8.1
  * deps: handlebars@1.0.12

2.3.0 / 2013-05-30
==================

  * Add `registerPartials`

2.1.0 / 2013-03-19
==================

  * Add `create` for multiple instances

2.0.2 / 2013-02-21
==================

  * deps: handlebars@1.0.9

2.0.1 / 2012-11-30
==================

  * Ignore layout error when not using layout

2.0.0 / 2012-11-21
==================

  * deps: handlebars@1.0.7
