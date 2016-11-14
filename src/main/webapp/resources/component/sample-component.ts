/// <amd-dependency path=”https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.7/angular.min.js” />
/// <amd-dependency path="/resources/app.js" />
/// <amd-dependency path="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.20/require.js" />
declare var define:any; // Magic

class Startup {
    public static main(): number {
        console.log('Hello World');
        return 0;
    }
}

Startup.main();
define(['angular'], function(angular){
    angular.module("promise-test", []).controller('promise-test',
            model);
    model['$inject'] = ['$log', '$q', '$timeout'];
    function model($log, $q, $timeout) {      
        $log.debug("hello world");  
    }
})