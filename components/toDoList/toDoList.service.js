/**
 * Created by timox on 01.11.2016.
 */
    (function(){
        angular.module("toDoList").
        service("dataService", DataService);

        Dataservice.$inject = ['$http'];
        function DataService($http){

            var vm = this;
            vm.getData=getData;
            vm.getUserInfo=getUserInfo;
            vm.getMeetList=getMeetList;
            vm.getTaskList=getTaskList;
            var arrListUrl=[
                "/json/userInfo/dave.json",
                "/json/userInfo/john.json",
                "/json/userInfo/steve.json"
            ];
            var arrUserInfo=[];
            var arrMeetList=[];
            var arrTasksList=[];

            var id;

            function getUserInfo(){
                return arrUserInfo[id];
            }
            function getTaskList(){
                return arrTasksList[id];
            }
            function getMeetList(){
                return arrMeetList[id];
            }

            function getUserId(id){
                return $http.get(arrListUrl[id]).then(function(res){
                    arrUserInfo[id].data=res.data;
                    return res.data.todoListUrl;
                })
            }
            function getUserTasks(path){
                return $http.get(path).then(function(res){
                    arrTasksList[id].data=res.data;
                    return res.data.meetingsListUrl;
                });
            }
            function getUserMeets(path){
                return $http.get(path).then(function(res){
                    arrTasksList[id].data=res.data;
                });
            }
            function getData(id){
                getUserId(id).then(getUserTasks).then(getUserMeets);
            }
        }
    }
)();