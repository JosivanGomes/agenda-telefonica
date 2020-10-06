angular.module('agendaTel', [])
    .controller('AgendaTelController', ($scope)=>{
        $scope.listaContato = []

        $scope.imprimeContatos = (contatos = $scope.listaContato) => {
            if(contatos.length === 0){
                return [{msg: 'Você não tem contatos em sua agenda =('}]
            }
            
            return contatos
            
        }

        $scope.smsSemContatos = (contatos = $scope.listaContato) => {
            if(contatos.length === 0)
                return 2
            
        }

        $scope.addContatos = (contato) => {
            $scope.listaContato.push(angular.copy(contato))
        }

        $scope.buscaContato = (params) => {
            var copiaContato = []
            for(contato in $scope.listaContato){
                if($scope.listaContato[contato].nome.toUpperCase().includes(params.toUpperCase())||$scope.listaContato[contato].fone.includes(params)){
                    copiaContato.push($scope.listaContato[contato])
                }
            }

            if(params.length > 0){
                return copiaContato
            }
            
            
                
        }

    })
