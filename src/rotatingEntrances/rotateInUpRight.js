/*! Animate.js | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animate) {
    'use strict';
    animate.rotateInUpRight = function (selector, options) {
        var keyframeset = [
            {
                transformOrigin: 'right bottom',
                transform: 'rotate3d(0, 0, 1, -90deg)',
                opacity: 0,
                offset: 0
            },
            {
                transformOrigin: 'right bottom',
                transform: 'none',
                opacity: 1,
                offset: 1
            }
        ];
        return animate._animate(selector, keyframeset, options);
    }
})(window.animate = window.animate || {});