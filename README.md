prop-types-cleaner
==================

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]


Write simple prop-types cleaner by type.

Write original prop-types without transforming.

## Why prop-types-cleaner

When writing lots of prop-types with others, prop-types may become disordered like:

```
const propTypes = {
    isOdps: PropTypes.bool,
    report: PropTypes.xreportComponent,
    selectedComponents: PropTypes.arrayOf(PropTypes.string),
    isDragging: PropTypes.bool,
    updateReport: PropTypes.func,
    onResized: PropTypes.func,
    onStartResizing: PropTypes.func,
    toggleShortcutAttributePanel: PropTypes.func,
    shortcutAttributePanel: PropTypes.bool,
    updateUnmountComponents: PropTypes.func,
    domReportArea: PropTypes.validateDOMElem,
    toggleLinkModal: PropTypes.func,
    charts: PropTypes.shape({
      id: PropTypes.string,
      content: PropTypes.object,
    }),
    deleteChart: PropTypes.func,
    configureFilter: PropTypes.func,
    openSingleMode: PropTypes.func,
    closeSingleMode: PropTypes.func,
    isSingleMode: PropTypes.bool,
  }
```

I think writing simple prop-types(e.g. `number`, `string`) by type and other prop-types(e.g. `instanceOf`, `shape`) by original writing will be more readable.


# Installation
```js

npm install --save prop-types-cleaner

```

# Usage

```js
import propTypesCleaner from 'prop-types-cleaner';

const propTypes = propTypesCleaner({

    // Write simple prop-types cleaner by type.
    bool: {
      isRequired: [
          'bool_a',
          'bool_b',
      ],

      isNotRequired: [
          'bool_c',
          'bool_d',
      ],
    },
    number: {
      isRequired: [
          'number_a',
          'number_b',
      ],
      isNotRequired: [
          'number_c',
          'number_d',
      ],
    },

    // Write original prop-types without transforming.
    requiredObjectOf: PropTypes.objectOf(PropTypes.number).isRequired,
    optionalObjectOf: PropTypes.objectOf(PropTypes.number),
    requiredObjectWithShape: PropTypes.shape({
      color: PropTypes.string,
      fontSize: PropTypes.number
    }).isRequired,
    optionalObjectWithShape: PropTypes.shape({
      color: PropTypes.string,
      fontSize: PropTypes.number
    }),
});
```

It equals to:
```
const propTypes = {

    // simple prop-types
    array_a: PropTypes.array.isRequired,
    array_b: PropTypes.array.isRequired,
    array_c: PropTypes.array,
    array_d: PropTypes.array,
    bool_a: PropTypes.bool.isRequired,
    bool_b: PropTypes.bool.isRequired,
    bool_c: PropTypes.bool,
    bool_d: PropTypes.bool,


    // original prop-types
    requiredObjectOf: PropTypes.objectOf(PropTypes.number).isRequired,
    optionalObjectOf: PropTypes.objectOf(PropTypes.number),
    requiredObjectWithShape: PropTypes.shape({
        color: PropTypes.string,
        fontSize: PropTypes.number
    }).isRequired,
    optionalObjectWithShape: PropTypes.shape({
        color: PropTypes.string,
        fontSize: PropTypes.number
    }),
};
```




## Writing simple prop-types

`array`, `bool`, `number`, `object`, `string`, `symbol`, `func`, `node`, `element`

```js
import propTypesCleaner from 'prop-types-cleaner';

const propTypes = propTypesCleaner({
   bool: {
       isRequired: [
           'bool_a',
           'bool_b',
       ],

       isNotRequired: [
           'bool_c',
           'bool_d',
       ],
   },
});
```

It equals to:

```
const propTypes = {
    bool_a: PropTypes.bool.isRequired,
    bool_b: PropTypes.bool.isRequired,
    bool_c: PropTypes.bool,
    bool_d: PropTypes.bool,
};
```

## Writing other prop-types

`instanceOf`, `oneOfType`, `arrayOf`, `objectOf`, `shape`, `any`

```js
import propTypesCleaner from 'prop-types-cleaner';

const propTypes = propTypesCleaner({
   requiredObjectWithShape: PropTypes.shape({
       color: PropTypes.string,
       fontSize: PropTypes.number
   }).isRequired,
   optionalObjectWithShape: PropTypes.shape({
       color: PropTypes.string,
       fontSize: PropTypes.number
   }),
})
```

It equals to:
```
const propTypes = {
    requiredObjectWithShape: PropTypes.shape({
        color: PropTypes.string,
        fontSize: PropTypes.number
    }).isRequired,
    optionalObjectWithShape: PropTypes.shape({
        color: PropTypes.string,
        fontSize: PropTypes.number
    }),
};
```

# test
```
npm i
npm test
```

[npm-url]: https://npmjs.org/package/prop-types-cleaner
[downloads-url]: https://npmjs.org/package/prop-types-cleaner