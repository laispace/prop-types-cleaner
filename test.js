const PropTypes = require('prop-types');
const cleaner = require('./index');
const expect = require('expect');

describe('set cleaner config', function () {
    it('set prop-types of array', function () {
        expect(cleaner({
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
        })).toEqual({
            array_a: PropTypes.array.isRequired,
            array_b: PropTypes.array.isRequired,
            array_c: PropTypes.array,
            array_d: PropTypes.array,
        });
    });

    it('set prop-types of bool', function () {
        expect(cleaner({
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
        })).toEqual({
            bool_a: PropTypes.bool.isRequired,
            bool_b: PropTypes.bool.isRequired,
            bool_c: PropTypes.bool,
            bool_d: PropTypes.bool,
        });
    });

    it('set prop-types of number', function () {
        expect(cleaner({
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
        })).toEqual({
            number_a: PropTypes.number.isRequired,
            number_b: PropTypes.number.isRequired,
            number_c: PropTypes.number,
            number_d: PropTypes.number,
        });
    });

    it('set prop-types of object', function () {
        expect(cleaner({
            object: {
                isRequired: [
                    'object_a',
                    'object_b',
                ],
                isNotRequired: [
                    'object_c',
                    'object_d',
                ],
            },
        })).toEqual({
            object_a: PropTypes.object.isRequired,
            object_b: PropTypes.object.isRequired,
            object_c: PropTypes.object,
            object_d: PropTypes.object,
        });
    });

    it('set prop-types of string', function () {
        expect(cleaner({
            string: {
                isRequired: [
                    'string_a',
                    'string_b',
                ],
                isNotRequired: [
                    'string_c',
                    'string_d',
                ],
            },
        })).toEqual({
            string_a: PropTypes.string.isRequired,
            string_b: PropTypes.string.isRequired,
            string_c: PropTypes.string,
            string_d: PropTypes.string,
        });
    });

    it('set prop-types of symbol', function () {
        expect(cleaner({
            symbol: {
                isRequired: [
                    'symbol_a',
                    'symbol_b',
                ],
                isNotRequired: [
                    'symbol_c',
                    'symbol_d',
                ],
            },
        })).toEqual({
            symbol_a: PropTypes.symbol.isRequired,
            symbol_b: PropTypes.symbol.isRequired,
            symbol_c: PropTypes.symbol,
            symbol_d: PropTypes.symbol,
        });
    });

    it('set prop-types of func', function () {
        expect(cleaner({
            func: {
                isRequired: [
                    'func_a',
                    'func_b',
                ],
                isNotRequired: [
                    'func_c',
                    'func_d',
                ],
            },
        })).toEqual({
            func_a: PropTypes.func.isRequired,
            func_b: PropTypes.func.isRequired,
            func_c: PropTypes.func,
            func_d: PropTypes.func,
        });
    });

    it('set prop-types of node', function () {
        expect(cleaner({
            node: {
                isRequired: [
                    'node_a',
                    'node_b',
                ],
                isNotRequired: [
                    'node_c',
                    'node_d',
                ],
            },
        })).toEqual({
            node_a: PropTypes.node.isRequired,
            node_b: PropTypes.node.isRequired,
            node_c: PropTypes.node,
            node_d: PropTypes.node,
        });
    });

    it('set prop-types of element', function () {
        expect(cleaner({
            element: {
                isRequired: [
                    'element_a',
                    'element_b',
                ],
                isNotRequired: [
                    'element_c',
                    'element_d',
                ],
            },
        })).toEqual({
            element_a: PropTypes.element.isRequired,
            element_b: PropTypes.element.isRequired,
            element_c: PropTypes.element,
            element_d: PropTypes.element,
        });
    });
});

describe('set original config', function () {
    it('set prop-types of instanceOf', function () {
        const CustomClass = function () {};
        expect(cleaner({
            requiredMessage: PropTypes.instanceOf(CustomClass).isRequired,
            optionalMessage: PropTypes.instanceOf(CustomClass),
        })).toEqual({
            requiredMessage: PropTypes.instanceOf(CustomClass).isRequired,
            optionalMessage: PropTypes.instanceOf(CustomClass),
        });
    });
    it('set prop-types of oneOfType', function () {
        expect(cleaner({
            requiredUnion: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
                PropTypes.instanceOf(Object)
            ]).isRequired,
            optionalUnion: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
                PropTypes.instanceOf(Object)
            ]),
        })).toEqual({
            requiredUnion: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
                PropTypes.instanceOf(Object)
            ]).isRequired,
            optionalUnion: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
                PropTypes.instanceOf(Object)
            ]),
        });
    });
    it('set prop-types of arrayOf', function () {
        expect(cleaner({
            requiredArrayOf: PropTypes.arrayOf(PropTypes.number).isRequired,
            optionalArrayOf: PropTypes.arrayOf(PropTypes.number)
        })).toEqual({
            requiredArrayOf: PropTypes.arrayOf(PropTypes.number).isRequired,
            optionalArrayOf: PropTypes.arrayOf(PropTypes.number)
        });
    });
    it('set prop-types of objectOf', function () {
        expect(cleaner({
            requiredObjectOf: PropTypes.objectOf(PropTypes.number).isRequired,
            optionalObjectOf: PropTypes.objectOf(PropTypes.number)
        })).toEqual({
            requiredObjectOf: PropTypes.objectOf(PropTypes.number).isRequired,
            optionalObjectOf: PropTypes.objectOf(PropTypes.number)
        });
    });
    it('set prop-types of shape', function () {
        expect(cleaner({
            requiredObjectWithShape: PropTypes.shape({
                color: PropTypes.string,
                fontSize: PropTypes.number
            }).isRequired,
            optionalObjectWithShape: PropTypes.shape({
                color: PropTypes.string,
                fontSize: PropTypes.number
            }),
        })).toEqual({
            requiredObjectWithShape: PropTypes.shape({
                color: PropTypes.string,
                fontSize: PropTypes.number
            }).isRequired,
            optionalObjectWithShape: PropTypes.shape({
                color: PropTypes.string,
                fontSize: PropTypes.number
            }),
        });
    });
    it('set prop-types of any', function () {
        expect(cleaner({
            requiredAny: PropTypes.any.isRequired,
            optionalAny: PropTypes.any,
        })).toEqual({
            requiredAny: PropTypes.any.isRequired,
            optionalAny: PropTypes.any,
        });
    });
});

describe('set mixed config', function () {
    it('set prop-types of array/bool/arrayOf/shape', function () {
        expect(cleaner({
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
        })).toEqual({
            array_a: PropTypes.array.isRequired,
            array_b: PropTypes.array.isRequired,
            array_c: PropTypes.array,
            array_d: PropTypes.array,
            bool_a: PropTypes.bool.isRequired,
            bool_b: PropTypes.bool.isRequired,
            bool_c: PropTypes.bool,
            bool_d: PropTypes.bool,
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
    });

});
