/**
 * @license Angulartics v0.17.2
 * (c) 2013 Luis Farzati http://luisfarzati.github.io/angulartics
 * Yandex Metrika update contributed by http://github.com/esvit
 * License: MIT
 */
(function (angular) {
  'use strict';

  /**
   * @ngdoc overview
   * @name angulartics.yaMetrika
   * Enables analytics support for Yandex Metrika (https://metrika.yandex.ru/)
   */
  angular.module('angulartics.yaMetrika', ['angulartics'])
    .config(['$analyticsProvider', function ($analyticsProvider) {

      var yaCounter = null;
      for (var i in window) {
        if (window.hasOwnProperty(i) && i.substring(0, 9) == 'yaCounter') {
          yaCounter = window[i];
        }
      }
      $analyticsProvider.settings.trackRelativePath = true;
      $analyticsProvider.registerPageTrack(function (path) {
        yaCounter.hit(path);
      });

    }]);
})(angular);
