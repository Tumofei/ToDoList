/**
 * Created by timox on 01.11.2016.
 */
(function(){
    angular.module("components").
    component("toDoList",{
        templateUrl:"/components/toDoList/toDoList.template.html",
        controller:["dataService", toDoListController],
        controllerAs:"toDoCtrl"
    });
    function toDoController (service){
        var vm = this;
        vm.getData=getData;

        function getRandom(){
            return Math.floor(Math.random() * 3);
        }

        function getData(){
            var id = getRandom();
            service.getData(id);
            vm.userInfo=service.getUserInfo();
            vm.taskList=service.getTaskList();
            vm.meetList=service.getMeetList();

        }
    }
})();