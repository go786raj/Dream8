'use strict';

/**
 * @ngdoc function
 * @name dynamicFormApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dynamicFormApp
 */
angular.module('dynamicFormApp')
  .controller('MainCtrl', function ($scope,$uibModal,$log,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // we would get this from the api
    $scope.entity = {
      name : "People", 
      fields :
        [
          {type: "text", name: "firstname", label: "Name" , required: true, data:""},
          {type: "radio", name: "gender", label: "Gender" ,
           options:[
           {id: 1, name: "male"},
           {id: 4, name: "female"}],
            required: true, data:""},
          {type: "email", name: "emailUser", label: "Email" , required: true, data:""},
          {type: "select", name: "profession_id", label: "Iam" , options:[{name: "BussinessMan"},
          {name: "IT Employee"},{name: "Student"},{name: "Retired"}], required: true, data:""}
        ]
      };

 $scope.entities = [];
var url='http://192.168.0.149:1337/entities'


 $http.get(url)
    .then(function(response) {
        $scope.responseData = response.data;
console.log($scope.responseData);		
 $scope.entities=$scope.responseData;
    });

  //   $scope.entities = [{
  //     name : "People", 
  //     objects :
  //       [
  //         {"firstname": "Gokul","gender":"Male","email":"gok@gmail.com","iam":"Working"},
  //         {"firstname": "Vimal","gender":"Male","email":"vkv@gmail.com","iam":"Working"},
	// 	   {"firstname": "Radha","gender":"FeMale","email":"radha@gmail.com","iam":"Working"},
  //         {"firstname": "guru","gender":"Male","email":"guru@gmail.com","iam":"Working"}
  //           ]
  //     },
	//   {
  //     name : "Office", 
  //  objects :
  //       [
  //         {"firstname": "Gokul","gender":"Male","email":"gok@gmail.com","iam":"Working"},
  //         {"firstname": "Vimal","gender":"Male","email":"vkv@gmail.com","iam":"Working"},
  //         {"firstname": "guru","gender":"Male","email":"guru@gmail.com","iam":"Working"}
  //           ]
  //     },
  //     	  {
  //     name : "Tree", 
  //  objects :
  //       [
  //         {"firstname": "Gokul","gender":"Male","email":"gok@gmail.com","iam":"Working"},
  //         {"firstname": "guru","gender":"Male","email":"guru@gmail.com","iam":"Working"}
  //           ]
  //     }
	  
	  
	  
	//   ];


      $scope.submitForm = function(){
        $log.debug($scope.entity);

        console.log($scope.entity);

var posturl='http://192.168.0.149:1337/entities/postData';


    var config = {
            headers: {
                'Content-Type': '*'
            }
        }
var data=$scope.entity;
         $http.post(posturl,data,config)
    .then(function(response) {
        $scope.responseData = response.data;
console.log($scope.responseData);		
 $scope.entities=$scope.responseData;
    });


      }



  $scope.open = function (type) {

console.log(type+'type');
$scope.type=type;
    var modalInstance = $uibModal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      resolve: {
        type: function () {
          return $scope.type;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };








  })  .directive("dynamicName",function($compile){
    return {
        restrict:"A",
        terminal:true,
        priority:1000,
        link:function(scope,element,attrs){
            element.attr('name', scope.$eval(attrs.dynamicName));
            element.removeAttr("dynamic-name");
            $compile(element)(scope);
        }
    }
}).controller('ModalInstanceCtrl', function ($uibModalInstance,$scope,type,$log,$http, $window) {




if(type=="People")
{
$scope.entity = {
      name : "People", 
      fields :
        [
          {type: "text", name: "firstname", label: "Name" , required: true, data:""},
          {type: "radio", name: "gender", label: "Gender" ,
           options:[
           {id: 1, name: "male"},
           {id: 4, name: "female"}],
            required: true, data:""},
          {type: "email", name: "email", label: "Email" , required: true, data:""},
          {type: "select", name: "profession_id", label: "Iam" , options:[{name: "BussinessMan"},
          {name: "IT Employee"},{name: "Student"},{name: "Retired"}], required: true, data:""}
        ]
      };
}

if(type=="Office")
{
$scope.entity = {
      name : "Office", 
      fields :
        [
          {type: "text", name: "firstname", label: "Name" , required: true, data:""},
          {type: "radio", name: "Type", label: "T" ,
           options:[
           {id: 1, name: "male"},
           {id: 4, name: "female"}],
            required: true, data:""},
          {type: "email", name: "email", label: "Email" , required: true, data:""}
        ]
      };
}

if(type=="Tree")
{
$scope.entity = {
      name : "Tree", 
      fields :
        [
          {type: "text", name: "firstname", label: "Name" , required: true, data:""},
          {type: "radio", name: "gender", label: "Gender" ,
           options:[
           {id: 1, name: "male"},
           {id: 4, name: "female"}],
            required: true, data:""},
          {type: "email", name: "email", label: "Email" , required: true, data:""}
        ]
      };
}



  // var data = {
  //           "name": name,
  //           "description": description,
  //           "ipAddress": ipAddress
  //       };




$scope.postData={};

      $scope.submitForm = function(){
        $log.debug($scope.entity);
  console.log("inside submitForm");
        console.log($scope.entity);


    var config = {
            headers: {
                'Content-Type': '*'
            }
        }
        var data=$scope.entity;
          var datas = {
            "data":data
        }
var data=$scope.entity;
console.log(data+"data");

var posturl='http://192.168.0.149:1337/entities/postData';

         $http.post(posturl,data,config)
    .then(function(response) {
        $scope.responseData = response.data;
console.log($scope.responseData);		
 $scope.entities=$scope.responseData;
    });

 $scope.ok();
 
 };

  $scope.type = type;
  console.log("items",type);

  $scope.selected = {
    type: $scope.type
  };

  $scope.ok = function () {
    console.log("inside save");
    $window.location.reload();
    $uibModalInstance.close();

  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});