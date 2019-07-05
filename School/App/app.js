(function () {
    angular.module("app", ["ngResource", "ui.router", 'toastr', 'ui.select', 'ngSanitize']);

    angular.module("app").config(function (toastrConfig) {
        angular.extend(toastrConfig, {
            autoDismiss: false,
            containerId: 'toast-container',
            maxOpened: 0,
            newestOnTop: true,
            positionClass: 'toast-bottom-right',
            preventDuplicates: false,
            preventOpenDuplicates: false,
            target: 'body'
        });
    });
})();

