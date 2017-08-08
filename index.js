var PropTypes = require('prop-types');
var invariant = require('invariant');
/**
 *
 * @param PropTypes
 * @param config
 * var config = {
        array: {
            isRequired: [
                'array_a',
                'array_b',
            ],
            isNotRequired: [
                'array_c',
                'array_d',
            ],
        },
    }
 * @returns {{}}
 * {
 *  array_a: Proptypes.array.isRequired,
 *  array_b: Proptypes.array.isRequired,
 *  array_c: Proptypes.array,
 *  array_d: Proptypes.array,
 * }
 */
var isObject = function (value) {
    var type = typeof value;
    return value !== null && type === 'object';
};
var isArray = function (value) {
    return Array.isArray(value);
};
var cleaner = function (config) {
    invariant(
        isObject(config),
        'You provided an invalid config to cleaner(). The config should be an object'
    );
    var propTypes = {};
    Object.keys(config).forEach(function (key) {
        if (isArray(config[key].isRequired)) {
            var isRequiredProps = config[key].isRequired || [];
            isRequiredProps.forEach(prop => {
                propTypes[prop] = PropTypes[key].isRequired;
            });
        }
        if (isArray(config[key].isNotRequired)) {
            var isNotRequiredProps = config[key].isNotRequired || [];
            isNotRequiredProps.forEach(prop => {
                propTypes[prop] = PropTypes[key];
            });
        }
        if (!isArray(config[key].isRequired) && !isArray(config[key].isNotRequired)) {
            propTypes[key] = config[key];
        }
    });
    return propTypes;
};
module.exports = cleaner;
