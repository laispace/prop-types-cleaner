const PropTypes = require('prop-types');
const invariant = require('invariant');
/**
 *
 * @param PropTypes
 * @param config
 * const config = {
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
const isObject = (value) => {
    const type = typeof value;
    return value !== null && type === 'object';
};
const isArray = (value) => {
    return Array.isArray(value);
};
const cleaner = (config) => {
    invariant(
        isObject(config),
        'You provided an invalid config to cleaner(). The config should be an object'
    );
    let propTypes = {};
    Object.keys(config).forEach(key => {
        if (isArray(config[key].isRequired)) {
            const isRequiredProps = config[key].isRequired || [];
            isRequiredProps.forEach(prop => {
                propTypes[prop] = PropTypes[key].isRequired;
            });
        }
        if (isArray(config[key].isNotRequired)) {
            const isNotRequiredProps = config[key].isNotRequired || [];
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
module.exports.cleaner = cleaner;