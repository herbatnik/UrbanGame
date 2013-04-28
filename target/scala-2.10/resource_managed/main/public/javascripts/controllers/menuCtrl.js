app.controller('menuCtrl', [
  '$scope', function($scope) {
    $scope.location = window.location.pathname;
    return $scope.$watch('selectLanguage', function(newVal) {
      if (!_.isUndefined(newVal)) {
        return langform.submit();
      }
    });
  }
]);