angular.module('dataBindingApp', [])
.controller('ExerciciosController', function($scope) {
  
  $scope.helloMessage = "Olá mundo";

  $scope.link = "https://www.example.com";

  $scope.paragrafoClicado = false;
  $scope.toggleParagrafo = function() {
    $scope.paragrafoClicado = !$scope.paragrafoClicado;
  };

  $scope.selecaoTextos = "";
  $scope.textos = {
    "Opção 1": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; ",
    "Opção 2": "Donec vulputate justo a scelerisque scelerisque. Phasellus fringilla enim velit. ",
    "Opção 3": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in est vel tellus tincidunt Integer",
    "Opção 4": "sit amet pellentesque velit posuere condimentum. Nulla pellentesque ornare rutrum. Nunc magna dui."
  };
})
.component('exercicio', {
  template: `
    <p>{{helloMessage}}</p>
    <p ng-click="toggleParagrafo()" ng-style="{ 'background-color': paragrafoClicado ? 'red' : 'white', 'color': paragrafoClicado ? 'white' : 'black' }">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. </p>
    <p ng-click="toggleParagrafo()" ng-style="{ 'background-color': paragrafoClicado ? 'yellow' : 'white', 'color': paragrafoClicado ? 'white' : 'black' }">Donec vulputate justo a scelerisque scelerisque. Phasellus fringilla enim velit. </p>
    <p ng-click="toggleParagrafo()" ng-style="{ 'background-color': paragrafoClicado ? 'green' : 'white', 'color': paragrafoClicado ? 'white' : 'black' }">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in est vel tellus tincidunt Integer.</p>
    <p ng-click="toggleParagrafo()" ng-style="{ 'background-color': paragrafoClicado ? 'purple' : 'white', 'color': paragrafoClicado ? 'white' : 'black' }">sit amet pellentesque velit posuere condimentum. Nulla pellentesque ornare rutrum. Nunc magna dui.</p>
    <a ng-href="{{link}}">Link</a>
    <select ng-model="selecaoTextos" ng-options="opcao for opcao in textos"></select>
    <p ng-show="selecaoTextos !== ''">{{textos[selecaoTextos]}}</p>
  `,
  controller: 'ExerciciosController'
});