angular.module('myApp', [])
  .controller('MainController', ['$scope', '$location', function ($scope, $location) {
    // Main data
    $scope.data = {
      logo: null,
      backgroundImage: 'bg.jpg',
      image: null,
      paragraphContent: null,
      footerdata: null,
    };

    $scope.downloadImage = function () {
      alert('Downloading Image!');
    };
    // Temporary data for editing
    $scope.editData = {};

    $scope.downloadImage = function () {
      document.getElementById('avoid').style.display = 'none';
      document.getElementById('avoidedit').style.display = 'none';
      document.getElementById('avoidmenu').style.display = 'none';
      html2canvas(document.body, {
        onrendered: function (canvas) {
          var imgData = canvas.toDataURL("image/png");
          var link = document.createElement('a');
          link.href = imgData;
          link.download = 'ui_layout.png';
          link.click();
          document.getElementById('avoid').style.display = 'inline';
          document.getElementById('avoidedit').style.display = 'inline';
          document.getElementById('avoidmenu').style.display = 'inline';
        }
      });
    };
    $scope.showModal = false;

    $scope.openEditModal = function () {
      // Copy main data to editData for editing
      $scope.editData = { ...$scope.data };
      $scope.showModal = true;
    };

    $scope.closeEditModal = function () {
      $scope.showModal = false;
    };

    function readFile(file, callback) {
      const reader = new FileReader();
      reader.onload = function (e) {
        callback(e.target.result);
      };
      reader.readAsDataURL(file);
    }

    $scope.updateFile = function (field, file) {
      readFile(file, function (data) {
        $scope.$apply(function () {
          $scope.editData[field] = data;
        });
      });
    };

    $scope.saveChanges = function () {
      // Apply edits to the main data
      $scope.data = { ...$scope.editData };
      $scope.showModal = false;
    };

    $scope.openHiPage = function() {
      $location.path('/hi'); 
    };
    $scope.activityDescription = "This is the activity description.";
    $scope.activityDescriptionn = "English Lab Activity";
  }]);


