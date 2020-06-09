const url = 'https://covid19.mathdro.id/api';

let app = angular.module("MyApp",[]);

app.controller("MyCtrl",($scope,$http)=>{

    $scope.name = "COVID19 GLOBLE COUNTER(LIVE)"; 
    console.log("loaded");
    $http.get(url).then((response)=>{
        console.log(response.data);
        $scope.all_data = response.data;
        
    },(error)=>{
        console.log(error);
        
    });
});




let appc = angular.module("MyAppc",[]);

appc.controller("MyCtrlc",($scope,$http)=>{

    $scope.namec = "COVID19 COUNTRY COUNTER(LIVE)"; 
    console.log("loaded");
   
    $scope.get_c_data = ()=>{
        let country = $scope.c;
        if(country == ""){
            $scope.c_data = undefined;
            return;
        }
        $http.get(`${url}/countries/${country}`).then((response)=>{
             console.log(response.data);
             $scope.c_data = response.data;
        }
        ,(error)=>{
            console.log(error);
            
        }); 
         
    };
});


