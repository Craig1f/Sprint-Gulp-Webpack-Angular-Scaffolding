/// <amd-dependency path="/resources/app.js" />
/// <amd-dependency path="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.20/require.js" />
var Startup = (function () {
    function Startup() {
    }
    Startup.main = function () {
        console.log('Hello World');
        return 0;
    };
    return Startup;
}());
Startup.main();
define(['angular'], function (angular) {
    angular.module("promise-test", []).controller('promise-test', model);
    model['$inject'] = ['$log', '$q', '$timeout'];
    function model($log, $q, $timeout) {
        $log.debug("hello world");
    }
});
//# sourceMappingURL=sample-component.js.map