/**
 * Created by zenghong on 16/1/6.
 */
angular.module('agilisales')
  .controller('DailyCtrl', ['$scope', '$state', function ($scope, $state) {
    $scope.options = {
      defaultDate: new Date(),
      dayNamesLength: 1, // 1 for "M", 2 for "Mo", 3 for "Mon"; 9 will show full day names. Default is 1.
      mondayIsFirstDay: true,//set monday as first day of week. Default is false
      eventClick: function(date) { // called before dateClick and only if clicked day has events
        console.log(date);
      },
      dateClick: function(date) { // called every time a day is clicked
        console.log(date);
      },
      changeMonth: function(month, year) {
        console.log(month, year);
      },
      filteredEventsChange: function(filteredEvents) {
        console.log(filteredEvents);
      },
    };

    $scope.events = [
      {foo: 'bar', eventClass: 'expired', date: "2015-08-18"}, //value of eventClass will be added to CSS class of the day element
      {foo: 'bar', date: "2015-08-20"}
    ];
  }]);
