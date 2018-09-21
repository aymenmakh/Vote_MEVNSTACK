<template>
    <div class="slider-wrap">
            <div id="slider_1" class="owl-carousel" data-nav="false" data-dots="true" data-autoplay="true" data-autoplaytimeout="17000">

                <div class="slider_item_container" data-bg_img="../../static/images/Tunisie.jpg" data-bg_color="#264676" data-bg_opacity="0.1">
                    <div class="item">
                        <div class="slider-content">
                            <div class="container text-left">
                                <div class="row">
                                    <div class="slider-bg">                                    
                                        <div class="col-sm-12 wow zoomInUp" data-wow-duration="1s">  
                                            
                                                <h3 class="text-dark">Choose the best for a better future!</h3>
                                                <h2 class="text-dark">
                                                    DREAM TOGETHER
                                                    <br>
                                                    AND MAKE IT HAPPEN! 
                                                    
                                                </h2>
                                                <a style="color:white;" v-on:click="buyTokens" class="btn btn-theme btn-theme margin-top-24">Vote</a>
                                            </div>                                      
                                    </div> <!-- end .col-sm-12  -->
                                </div> <!-- end .row  -->
                            </div><!-- end .container -->
                        </div> <!--  end .slider-content -->
                    </div> <!-- end .item  -->
                </div> <!-- end .slider_item_container  -->

                <!-- end .slider_item_container  -->

            </div> <!-- end .slider_1  -->
        </div>
  </template>

<script>
import web3 from "web3";
import $ from "jquery";
import contract from "truffle-contract";
//import voting_artifacts from "C:/Users/Aymen/Desktop/git/project/build/contracts/Voting.json";
var voting_artifacts = {
  "contractName": "Voting",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "votesReceived",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalTokens",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "tokenPrice",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "candidateList",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "voterInfo",
      "outputs": [
        {
          "name": "voterAddress",
          "type": "address"
        },
        {
          "name": "tokensBought",
          "type": "uint256"
        },
        {
          "name": "voted",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "electionEnd",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "balanceTokens",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "tokens",
          "type": "uint256"
        },
        {
          "name": "pricePerToken",
          "type": "uint256"
        },
        {
          "name": "candidateNames",
          "type": "bytes32[]"
        },
        {
          "name": "_electionTime",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "candidate",
          "type": "bytes32"
        }
      ],
      "name": "totalVotesFor",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "candidateNames",
          "type": "bytes32[]"
        }
      ],
      "name": "pushCandidates",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "candidate",
          "type": "bytes32"
        },
        {
          "name": "votesInTokens",
          "type": "uint256"
        }
      ],
      "name": "voteForCandidate",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "candidate",
          "type": "bytes32"
        }
      ],
      "name": "indexOfCandidate",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "buy",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "tokensSold",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "user",
          "type": "address"
        }
      ],
      "name": "voterDetails",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "x",
          "type": "bytes32"
        }
      ],
      "name": "set",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "get",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "account",
          "type": "address"
        }
      ],
      "name": "transferTo",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "allCandidates",
      "outputs": [
        {
          "name": "",
          "type": "bytes32[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x6060604052341561000f57600080fd5b604051610fbd380380610fbd83398101604052808051906020019091908051906020019091908051820191906020018051906020019091905050816003908051906020019061005f929190610087565b50836004819055508360058190555082600681905550804201600781905550505050506100ff565b8280548282559060005260206000209081019282156100c9579160200282015b828111156100c85782518290600019169055916020019190600101906100a7565b5b5090506100d691906100da565b5090565b6100fc91905b808211156100f85760008160009055506001016100e0565b5090565b90565b610eaf8061010e6000396000f3006060604052600436106100fc576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632ca9cd13146101015780632f265cf71461015b578063518ab2a8146101965780635938750d146101bf5780636b2dc6b5146102545780636d4ce63c146102845780637021939f146102b55780637e1c0c09146102f05780637ff9b5961461031957806381c4071514610342578063a03fa7e3146103ac578063a6f2ae3a146103e5578063b13c744b14610403578063cdf58d3514610442578063ce7ea161146104cd578063db80813f146104f6578063e4494a0f1461051d578063ecd098b014610546575b600080fd5b341561010c57600080fd5b610159600480803590602001908201803590602001908080602002602001604051908101604052809392919081815260200183836020028082843782019150505050505091905050610581565b005b341561016657600080fd5b61018060048080356000191690602001909190505061059b565b6040518082815260200191505060405180910390f35b34156101a157600080fd5b6101a96105c0565b6040518082815260200191505060405180910390f35b34156101ca57600080fd5b6101f6600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506105ce565b6040518083815260200180602001828103825283818151815260200191508051906020019060200280838360005b8381101561023f578082015181840152602081019050610224565b50505050905001935050505060405180910390f35b341561025f57600080fd5b6102826004808035600019169060200190919080359060200190919050506106b8565b005b341561028f57600080fd5b6102976109c0565b60405180826000191660001916815260200191505060405180910390f35b34156102c057600080fd5b6102da6004808035600019169060200190919050506109c9565b6040518082815260200191505060405180910390f35b34156102fb57600080fd5b6103036109e1565b6040518082815260200191505060405180910390f35b341561032457600080fd5b61032c6109e7565b6040518082815260200191505060405180910390f35b341561034d57600080fd5b6103556109ed565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561039857808201518184015260208101905061037d565b505050509050019250505060405180910390f35b34156103b757600080fd5b6103e3600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610a4f565b005b6103ed610aa9565b6040518082815260200191505060405180910390f35b341561040e57600080fd5b6104246004808035906020019091905050610c36565b60405180826000191660001916815260200191505060405180910390f35b341561044d57600080fd5b610479600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610c5a565b604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200182151515158152602001935050505060405180910390f35b34156104d857600080fd5b6104e0610cb1565b6040518082815260200191505060405180910390f35b341561050157600080fd5b61051b600480803560001916906020019091905050610cb7565b005b341561052857600080fd5b610530610cc5565b6040518082815260200191505060405180910390f35b341561055157600080fd5b61056b600480803560001916906020019091905050610ccb565b6040518082815260200191505060405180910390f35b8060039080519060200190610597929190610d92565b5050565b6000600260008360001916600019168152602001908152602001600020549050919050565b600060055460045403905090565b60006105d8610de5565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201808054806020026020016040519081016040528092919081815260200182805480156106a857602002820191906000526020600020905b815481526020019060010190808311610694575b5050505050905091509150915091565b60008060006106c685610ccb565b92507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83141515156106f757600080fd5b600754421115151561070857600080fd5b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002018054905014156107df57600091505b6003805490508210156107de57600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020180548060010182816107bc9190610df9565b916000526020600020900160008090919091505550818060010192505061075b565b5b610878600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020180548060200260200160405190810160405280929190818152602001828054801561086e57602002820191906000526020600020905b81548152602001906001019080831161085a575b5050505050610d49565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101540390508381101515156108cd57600080fd5b836002600087600019166000191681526020019081526020016000206000828254019250508190555083600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002018481548110151561094657fe5b9060005260206000209001600082825401925050819055506000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160006101000a81548160ff0219169083151502179055505050505050565b60008054905090565b60026020528060005260406000206000915090505481565b60045481565b60065481565b6109f5610e25565b6003805480602002602001604051908101604052809291908181526020018280548015610a4557602002820191906000526020600020905b81546000191681526020019060010190808311610a2d575b5050505050905090565b8073ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f193505050501515610aa657600080fd5b50565b60008060065434811515610ab957fe5b0490506005548111151515610acd57600080fd5b33600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008282540192505081905550806005600082825403925050819055508091505090565b600381815481101515610c4557fe5b90600052602060002090016000915090505481565b60016020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060030160009054906101000a900460ff16905083565b60075481565b806000816000191690555050565b60055481565b600080600090505b600380549050811015610d1f578260001916600382815481101515610cf457fe5b906000526020600020900154600019161415610d1257809150610d43565b8080600101915050610cd3565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff91505b50919050565b6000806000809150600090505b8351811015610d88578381815181101515610d6d57fe5b90602001906020020151820191508080600101915050610d56565b8192505050919050565b828054828255906000526020600020908101928215610dd4579160200282015b82811115610dd3578251829060001916905591602001919060010190610db2565b5b509050610de19190610e39565b5090565b602060405190810160405280600081525090565b815481835581811511610e2057818360005260206000209182019101610e1f9190610e5e565b5b505050565b602060405190810160405280600081525090565b610e5b91905b80821115610e57576000816000905550600101610e3f565b5090565b90565b610e8091905b80821115610e7c576000816000905550600101610e64565b5090565b905600a165627a7a723058206441c56491d8e1cece162ca7a4971ab1e87896bb2378f0590c623a28863f6e190029",
  "deployedBytecode": "0x6060604052600436106100fc576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632ca9cd13146101015780632f265cf71461015b578063518ab2a8146101965780635938750d146101bf5780636b2dc6b5146102545780636d4ce63c146102845780637021939f146102b55780637e1c0c09146102f05780637ff9b5961461031957806381c4071514610342578063a03fa7e3146103ac578063a6f2ae3a146103e5578063b13c744b14610403578063cdf58d3514610442578063ce7ea161146104cd578063db80813f146104f6578063e4494a0f1461051d578063ecd098b014610546575b600080fd5b341561010c57600080fd5b610159600480803590602001908201803590602001908080602002602001604051908101604052809392919081815260200183836020028082843782019150505050505091905050610581565b005b341561016657600080fd5b61018060048080356000191690602001909190505061059b565b6040518082815260200191505060405180910390f35b34156101a157600080fd5b6101a96105c0565b6040518082815260200191505060405180910390f35b34156101ca57600080fd5b6101f6600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506105ce565b6040518083815260200180602001828103825283818151815260200191508051906020019060200280838360005b8381101561023f578082015181840152602081019050610224565b50505050905001935050505060405180910390f35b341561025f57600080fd5b6102826004808035600019169060200190919080359060200190919050506106b8565b005b341561028f57600080fd5b6102976109c0565b60405180826000191660001916815260200191505060405180910390f35b34156102c057600080fd5b6102da6004808035600019169060200190919050506109c9565b6040518082815260200191505060405180910390f35b34156102fb57600080fd5b6103036109e1565b6040518082815260200191505060405180910390f35b341561032457600080fd5b61032c6109e7565b6040518082815260200191505060405180910390f35b341561034d57600080fd5b6103556109ed565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561039857808201518184015260208101905061037d565b505050509050019250505060405180910390f35b34156103b757600080fd5b6103e3600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610a4f565b005b6103ed610aa9565b6040518082815260200191505060405180910390f35b341561040e57600080fd5b6104246004808035906020019091905050610c36565b60405180826000191660001916815260200191505060405180910390f35b341561044d57600080fd5b610479600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610c5a565b604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200182151515158152602001935050505060405180910390f35b34156104d857600080fd5b6104e0610cb1565b6040518082815260200191505060405180910390f35b341561050157600080fd5b61051b600480803560001916906020019091905050610cb7565b005b341561052857600080fd5b610530610cc5565b6040518082815260200191505060405180910390f35b341561055157600080fd5b61056b600480803560001916906020019091905050610ccb565b6040518082815260200191505060405180910390f35b8060039080519060200190610597929190610d92565b5050565b6000600260008360001916600019168152602001908152602001600020549050919050565b600060055460045403905090565b60006105d8610de5565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201808054806020026020016040519081016040528092919081815260200182805480156106a857602002820191906000526020600020905b815481526020019060010190808311610694575b5050505050905091509150915091565b60008060006106c685610ccb565b92507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83141515156106f757600080fd5b600754421115151561070857600080fd5b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002018054905014156107df57600091505b6003805490508210156107de57600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020180548060010182816107bc9190610df9565b916000526020600020900160008090919091505550818060010192505061075b565b5b610878600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020180548060200260200160405190810160405280929190818152602001828054801561086e57602002820191906000526020600020905b81548152602001906001019080831161085a575b5050505050610d49565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101540390508381101515156108cd57600080fd5b836002600087600019166000191681526020019081526020016000206000828254019250508190555083600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002018481548110151561094657fe5b9060005260206000209001600082825401925050819055506000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160006101000a81548160ff0219169083151502179055505050505050565b60008054905090565b60026020528060005260406000206000915090505481565b60045481565b60065481565b6109f5610e25565b6003805480602002602001604051908101604052809291908181526020018280548015610a4557602002820191906000526020600020905b81546000191681526020019060010190808311610a2d575b5050505050905090565b8073ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f193505050501515610aa657600080fd5b50565b60008060065434811515610ab957fe5b0490506005548111151515610acd57600080fd5b33600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008282540192505081905550806005600082825403925050819055508091505090565b600381815481101515610c4557fe5b90600052602060002090016000915090505481565b60016020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060030160009054906101000a900460ff16905083565b60075481565b806000816000191690555050565b60055481565b600080600090505b600380549050811015610d1f578260001916600382815481101515610cf457fe5b906000526020600020900154600019161415610d1257809150610d43565b8080600101915050610cd3565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff91505b50919050565b6000806000809150600090505b8351811015610d88578381815181101515610d6d57fe5b90602001906020020151820191508080600101915050610d56565b8192505050919050565b828054828255906000526020600020908101928215610dd4579160200282015b82811115610dd3578251829060001916905591602001919060010190610db2565b5b509050610de19190610e39565b5090565b602060405190810160405280600081525090565b815481835581811511610e2057818360005260206000209182019101610e1f9190610e5e565b5b505050565b602060405190810160405280600081525090565b610e5b91905b80821115610e57576000816000905550600101610e3f565b5090565b90565b610e8091905b80821115610e7c576000816000905550600101610e64565b5090565b905600a165627a7a723058206441c56491d8e1cece162ca7a4971ab1e87896bb2378f0590c623a28863f6e190029",
  "sourceMap": "97:5895:0:-;;;1715:345;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1868:14;1852:13;:30;;;;;;;;;;;;:::i;:::-;;1903:6;1889:11;:20;;;;1932:6;1916:13;:22;;;;1958:13;1945:10;:26;;;;1998:13;1992:3;:19;1978:11;:33;;;;1715:345;;;;97:5895;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "97:5895:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2185:135;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2066:113;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4959:96;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5061:161;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;5061:161:0;;;;;;;;;;;;;;;;;;2488:1188;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5290:79;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1227:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1318:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1479:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5882:98;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;5882:98:0;;;;;;;;;;;;;;;;;5789:87;;;;;;;;;;;;;;;;;;;;;;;;;;;;4545:408;;;;;;;;;;;;;;;;;;;;;;;1280:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1029:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1507:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5228:58;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1397:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4030:233;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2185:135;2269:14;2253:13;:30;;;;;;;;;;;;:::i;:::-;;2185:135;:::o;2066:113::-;2129:4;2149:13;:24;2163:9;2149:24;;;;;;;;;;;;;;;;;;2142:31;;2066:113;;;:::o;4959:96::-;5002:4;5036:13;;5022:11;;:27;5015:34;;4959:96;:::o;5061:161::-;5118:4;5124:6;;:::i;:::-;5147:9;:15;5157:4;5147:15;;;;;;;;;;;;;;;:28;;;5177:9;:15;5187:4;5177:15;;;;;;;;;;;;;;;:38;;5139:77;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5061:161;;;:::o;2488:1188::-;2616:10;2979:6;3224:20;2629:27;2646:9;2629:16;:27::i;:::-;2616:40;;2691:2;2677:5;:17;;2669:26;;;;;;;;2717:11;;2710:3;:18;;2702:27;;;;;;;;2962:1;2907:9;:21;2917:10;2907:21;;;;;;;;;;;;;;;:44;;:51;;;;:56;2903:204;;;2988:1;2979:10;;2975:120;2995:13;:20;;;;2991:1;:24;2975:120;;;3033:9;:21;3043:10;3033:21;;;;;;;;;;;;;;;:44;;:52;;;;;;;;;;;:::i;:::-;;;;;;;;;;3083:1;3033:52;;;;;;;3017:3;;;;;;;2975:120;;;2903:204;3284:61;3300:9;:21;3310:10;3300:21;;;;;;;;;;;;;;;:44;;3284:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:15;:61::i;:::-;3247:9;:21;3257:10;3247:21;;;;;;;;;;;;;;;:34;;;:98;3224:121;;3379:13;3360:15;:32;;3352:41;;;;;;;;3430:13;3402;:24;3416:9;3402:24;;;;;;;;;;;;;;;;;;:41;;;;;;;;;;;3613:13;3558:9;:21;3568:10;3558:21;;;;;;;;;;;;;;;:44;;3603:5;3558:51;;;;;;;;;;;;;;;;;;;:68;;;;;;;;;;;3663:5;3633:9;:21;3643:10;3633:21;;;;;;;;;;;;;;;:27;;;:35;;;;;;;;;;;;;;;;;;2488:1188;;;;;:::o;5290:79::-;5330:7;5353:10;;5345:18;;5290:79;:::o;1227:46::-;;;;;;;;;;;;;;;;;:::o;1318:23::-;;;;:::o;1479:22::-;;;;:::o;5882:98::-;5929:9;;:::i;:::-;5960:13;5953:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5882:98;:::o;5789:87::-;5840:7;:16;;:30;5857:4;:12;;;5840:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5789:87;:::o;4545:408::-;4584:4;4642:16;4673:10;;4661:9;:22;;;;;;;;4642:41;;4713:13;;4698:11;:28;;4690:37;;;;;;;;4771:10;4734:9;:21;4744:10;4734:21;;;;;;;;;;;;;;;:34;;;:47;;;;;;;;;;;;;;;;;;4821:10;4784:9;:21;4794:10;4784:21;;;;;;;;;;;;;;;:34;;;:47;;;;;;;;;;;;;;;;;;4876:11;4838:9;:21;4848:10;4838:21;;;;;;;;;;;;;;;:34;;;:49;;;;;;;;;;;4911:11;4894:13;;:28;;;;;;;;;;;4936:11;4929:18;;4545:408;;:::o;1280:30::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1029:43::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1507:23::-;;;;:::o;5228:58::-;5279:1;5266:10;:14;;;;;;;5228:58;:::o;1397:25::-;;;;:::o;4030:233::-;4096:4;4113:6;4122:1;4113:10;;4109:127;4129:13;:20;;;;4125:1;:24;4109:127;;;4189:9;4169:29;;;:13;4183:1;4169:16;;;;;;;;;;;;;;;;;;;:29;;;;4165:64;;;4218:1;4211:8;;;;4165:64;4151:3;;;;;;;4109:127;;;4254:2;4242:15;;4030:233;;;;;:::o;3748:276::-;3827:4;3840:20;3875:6;3863:1;3840:24;;3884:1;3875:10;;3871:119;3891:23;:30;3887:1;:34;3871:119;;;3956:23;3980:1;3956:26;;;;;;;;;;;;;;;;;;3937:45;;;;3923:3;;;;;;;3871:119;;;4003:15;3996:22;;3748:276;;;;;:::o;97:5895::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.4.18; //We have to specify what version of the compiler this code will use\r\n\r\ncontract Voting {\r\n    bytes32 storedData;\r\n  // We use the struct datatype to store the voter information.\r\n  struct voter {\r\n    address voterAddress; // The address of the voter\r\n    uint tokensBought;    // The total no. of tokens this voter owns\r\n    uint[] tokensUsedPerCandidate;\r\n    bool voted ;\r\n\r\n     // Array to keep track of votes per candidate.\r\n    /* We have an array of candidates initialized below.\r\n     Every time this voter votes with her tokens, the value at that\r\n     index is incremented. Example, if candidateList array declared\r\n     below has [\"Rama\", \"Nick\", \"Jose\"] and this\r\n     voter votes 10 tokens to Nick, the tokensUsedPerCandidate[1]\r\n     will be incremented by 10.\r\n     */\r\n  }\r\n\r\n  /* mapping is equivalent to an associate array or hash\r\n   The key of the mapping is candidate name stored as type bytes32 and value is\r\n   an unsigned integer which used to store the vote count\r\n   */\r\n\r\n  mapping (address => voter) public voterInfo;\r\n\r\n  /* Solidity doesn't let you return an array of strings yet. We will use an array of bytes32\r\n   instead to store the list of candidates\r\n   */\r\n\r\n  mapping (bytes32 => uint) public votesReceived;\r\n\r\n  bytes32[] public candidateList ;\r\n\r\n  uint public totalTokens; // Total no. of tokens available for this election\r\n  uint public balanceTokens; // Total no. of tokens still available for purchase\r\n  uint public tokenPrice; \r\n  uint public electionEnd;// Price per token\r\n\r\n  /* When the contract is deployed on the blockchain, we will initialize\r\n   the total number of tokens for sale, cost per token and all the candidates\r\n   */\r\n  function Voting(uint tokens, uint pricePerToken,bytes32[] candidateNames,uint _electionTime) public {\r\n  //bytes32[] candidateNames\r\n    candidateList = candidateNames;\r\n    totalTokens = tokens;\r\n    balanceTokens = tokens;\r\n    tokenPrice = pricePerToken;\r\n    electionEnd = now + _electionTime;\r\n   // voterInfo[msg.sender].voted = true;\r\n  }\r\n\r\n  function totalVotesFor(bytes32 candidate) view public returns (uint) {\r\n    return votesReceived[candidate];\r\n  }\r\n\r\n  function pushCandidates (bytes32[] candidateNames)  public {\r\n      candidateList = candidateNames;\r\n     // return candidateList;\r\n  }\r\n\r\n\r\n  \r\n  /* Instead of just taking the candidate name as an argument, we now also\r\n   require the no. of tokens this voter wants to vote for the candidate\r\n   */\r\n  function voteForCandidate(bytes32 candidate, uint votesInTokens) public {\r\n  //  if( voterInfo[msg.sender].voted == true){\r\n    uint index = indexOfCandidate(candidate);\r\n    \r\n    require(index != uint(-1));\r\n    require(now <= electionEnd);\r\n   \r\n   // voterInfo[msg.sender].voted = true;\r\n\r\n    \r\n    // msg.sender gives us the address of the account/voter who is trying\r\n    // to call this function\r\n    \r\n    if (voterInfo[msg.sender].tokensUsedPerCandidate.length == 0 ) {\r\n      for(uint i = 0; i < candidateList.length; i++) {\r\n        voterInfo[msg.sender].tokensUsedPerCandidate.push(0);\r\n      }\r\n   \r\n    }\r\n\r\n  \r\n //voterInfo[msg.sender].voted = false;\r\n    // Make sure this voter has enough tokens to cast the vote\r\n    uint availableTokens = voterInfo[msg.sender].tokensBought - totalTokensUsed(voterInfo[msg.sender].tokensUsedPerCandidate);\r\n    require(availableTokens >= votesInTokens);\r\n\r\n    votesReceived[candidate] += votesInTokens;\r\n  // voterInfo[msg.sender].tokensBought = 0;\r\n \r\n    // Store how many tokens were used for this candidate\r\n    voterInfo[msg.sender].tokensUsedPerCandidate[index] += votesInTokens;\r\n    voterInfo[msg.sender].voted = false;\r\n    }\r\n // }\r\n\r\n  // Return the sum of all the tokens used by this voter.\r\n  function totalTokensUsed(uint[] _tokensUsedPerCandidate) private pure returns (uint) {\r\n    uint totalUsedTokens = 0;\r\n    for(uint i = 0; i < _tokensUsedPerCandidate.length; i++) {\r\n      totalUsedTokens += _tokensUsedPerCandidate[i];\r\n    }\r\n    return totalUsedTokens;\r\n  }\r\n\r\n  function indexOfCandidate(bytes32 candidate) view public returns (uint) {\r\n    for(uint i = 0; i < candidateList.length; i++) {\r\n      if (candidateList[i] == candidate) {\r\n        return i;\r\n      }\r\n    }\r\n    return uint(-1);\r\n  }\r\n\r\n  /* This function is used to purchase the tokens. Note the keyword 'payable'\r\n   below. By just adding that one keyword to a function, your contract can\r\n   now accept Ether from anyone who calls this function. Accepting money can\r\n   not get any easier than this!\r\n   */\r\n\r\n  function buy() payable public returns (uint) {\r\n\r\n    //voterInfo[msg.sender].voted = true;\r\n    uint tokensToBuy = msg.value / tokenPrice;\r\n    require(tokensToBuy <= balanceTokens);\r\n    voterInfo[msg.sender].voterAddress = msg.sender;  voterInfo[msg.sender].voterAddress = msg.sender;\r\n    voterInfo[msg.sender].tokensBought += tokensToBuy;\r\n    balanceTokens -= tokensToBuy;\r\n    return tokensToBuy;\r\n  }\r\n\r\n  function tokensSold() view public returns (uint) {\r\n    return totalTokens - balanceTokens;\r\n  }\r\n\r\n  function voterDetails(address user) view public returns (uint, uint[]) {\r\n    return (voterInfo[user].tokensBought, voterInfo[user].tokensUsedPerCandidate);\r\n  }\r\n\r\n  function set (bytes32 x) public{\r\n    storedData = x;\r\n  }\r\n\r\nfunction get() public constant returns (bytes32){\r\n    return  storedData;\r\n  }\r\n \r\n\r\n  /* All the ether sent by voters who purchased the tokens is in this\r\n   contract's account. This method will be used to transfer out all those ethers\r\n   in to another account. *** The way this function is written currently, anyone can call\r\n   this method and transfer the balance in to their account. In reality, you should add\r\n   check to make sure only the owner of this contract can cash out.\r\n   */\r\n\r\n  function transferTo(address account) public {\r\n    account.transfer(this.balance);\r\n  }\r\n\r\n  function allCandidates()  view public returns (bytes32[]) {\r\n  \r\n      return candidateList ;\r\n  }\r\n\r\n\r\n \r\n\r\n}\r\n",
  "sourcePath": "C:\\Users\\Aymen\\Desktop\\git\\project\\contracts\\Voting.sol",
  "ast": {
    "absolutePath": "/C/Users/Aymen/Desktop/git/project/contracts/Voting.sol",
    "exportedSymbols": {
      "Voting": [
        389
      ]
    },
    "id": 390,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 389,
        "linearizedBaseContracts": [
          389
        ],
        "name": "Voting",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 3,
            "name": "storedData",
            "nodeType": "VariableDeclaration",
            "scope": 389,
            "src": "120:18:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 2,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "120:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "canonicalName": "Voting.voter",
            "id": 13,
            "members": [
              {
                "constant": false,
                "id": 5,
                "name": "voterAddress",
                "nodeType": "VariableDeclaration",
                "scope": 13,
                "src": "228:20:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 4,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "228:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7,
                "name": "tokensBought",
                "nodeType": "VariableDeclaration",
                "scope": 13,
                "src": "283:17:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 6,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "283:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 10,
                "name": "tokensUsedPerCandidate",
                "nodeType": "VariableDeclaration",
                "scope": 13,
                "src": "353:29:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                  "typeString": "uint256[] storage pointer"
                },
                "typeName": {
                  "baseType": {
                    "id": 8,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "353:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9,
                  "length": null,
                  "nodeType": "ArrayTypeName",
                  "src": "353:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                    "typeString": "uint256[] storage pointer"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 12,
                "name": "voted",
                "nodeType": "VariableDeclaration",
                "scope": 13,
                "src": "389:10:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 11,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "389:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "voter",
            "nodeType": "StructDefinition",
            "scope": 389,
            "src": "208:608:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 17,
            "name": "voterInfo",
            "nodeType": "VariableDeclaration",
            "scope": 389,
            "src": "1029:43:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_voter_$13_storage_$",
              "typeString": "mapping(address => struct Voting.voter storage ref)"
            },
            "typeName": {
              "id": 16,
              "keyType": {
                "id": 14,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1038:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1029:26:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_voter_$13_storage_$",
                "typeString": "mapping(address => struct Voting.voter storage ref)"
              },
              "valueType": {
                "contractScope": null,
                "id": 15,
                "name": "voter",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 13,
                "src": "1049:5:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_voter_$13_storage_ptr",
                  "typeString": "struct Voting.voter storage pointer"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 21,
            "name": "votesReceived",
            "nodeType": "VariableDeclaration",
            "scope": 389,
            "src": "1227:46:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
              "typeString": "mapping(bytes32 => uint256)"
            },
            "typeName": {
              "id": 20,
              "keyType": {
                "id": 18,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "1236:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "1227:25:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                "typeString": "mapping(bytes32 => uint256)"
              },
              "valueType": {
                "id": 19,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "1247:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 24,
            "name": "candidateList",
            "nodeType": "VariableDeclaration",
            "scope": 389,
            "src": "1280:30:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
              "typeString": "bytes32[] storage ref"
            },
            "typeName": {
              "baseType": {
                "id": 22,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "1280:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "id": 23,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "1280:9:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                "typeString": "bytes32[] storage pointer"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 26,
            "name": "totalTokens",
            "nodeType": "VariableDeclaration",
            "scope": 389,
            "src": "1318:23:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 25,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "1318:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 28,
            "name": "balanceTokens",
            "nodeType": "VariableDeclaration",
            "scope": 389,
            "src": "1397:25:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 27,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "1397:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 30,
            "name": "tokenPrice",
            "nodeType": "VariableDeclaration",
            "scope": 389,
            "src": "1479:22:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 29,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "1479:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 32,
            "name": "electionEnd",
            "nodeType": "VariableDeclaration",
            "scope": 389,
            "src": "1507:23:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 31,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "1507:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 66,
              "nodeType": "Block",
              "src": "1815:245:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 46,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 44,
                      "name": "candidateList",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 24,
                      "src": "1852:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                        "typeString": "bytes32[] storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 45,
                      "name": "candidateNames",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 39,
                      "src": "1868:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[] memory"
                      }
                    },
                    "src": "1852:30:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                      "typeString": "bytes32[] storage ref"
                    }
                  },
                  "id": 47,
                  "nodeType": "ExpressionStatement",
                  "src": "1852:30:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 50,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 48,
                      "name": "totalTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26,
                      "src": "1889:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 49,
                      "name": "tokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34,
                      "src": "1903:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1889:20:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 51,
                  "nodeType": "ExpressionStatement",
                  "src": "1889:20:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 54,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 52,
                      "name": "balanceTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28,
                      "src": "1916:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 53,
                      "name": "tokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34,
                      "src": "1932:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1916:22:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 55,
                  "nodeType": "ExpressionStatement",
                  "src": "1916:22:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 58,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 56,
                      "name": "tokenPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 30,
                      "src": "1945:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 57,
                      "name": "pricePerToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36,
                      "src": "1958:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1945:26:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 59,
                  "nodeType": "ExpressionStatement",
                  "src": "1945:26:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 64,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 60,
                      "name": "electionEnd",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32,
                      "src": "1978:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 63,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 61,
                        "name": "now",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 404,
                        "src": "1992:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 62,
                        "name": "_electionTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41,
                        "src": "1998:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1992:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1978:33:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 65,
                  "nodeType": "ExpressionStatement",
                  "src": "1978:33:0"
                }
              ]
            },
            "documentation": null,
            "id": 67,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "Voting",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 42,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34,
                  "name": "tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 67,
                  "src": "1731:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 33,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1731:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 36,
                  "name": "pricePerToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 67,
                  "src": "1744:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 35,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1744:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 39,
                  "name": "candidateNames",
                  "nodeType": "VariableDeclaration",
                  "scope": 67,
                  "src": "1763:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[] memory"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 37,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "1763:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 38,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1763:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[] storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41,
                  "name": "_electionTime",
                  "nodeType": "VariableDeclaration",
                  "scope": 67,
                  "src": "1788:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 40,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1788:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1730:77:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 43,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1815:0:0"
            },
            "scope": 389,
            "src": "1715:345:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 78,
              "nodeType": "Block",
              "src": "2135:44:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 74,
                      "name": "votesReceived",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21,
                      "src": "2149:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                        "typeString": "mapping(bytes32 => uint256)"
                      }
                    },
                    "id": 76,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 75,
                      "name": "candidate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 69,
                      "src": "2163:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2149:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 73,
                  "id": 77,
                  "nodeType": "Return",
                  "src": "2142:31:0"
                }
              ]
            },
            "documentation": null,
            "id": 79,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalVotesFor",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 70,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 69,
                  "name": "candidate",
                  "nodeType": "VariableDeclaration",
                  "scope": 79,
                  "src": "2089:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 68,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2089:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2088:19:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 73,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 72,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 79,
                  "src": "2129:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 71,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2129:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2128:6:0"
            },
            "scope": 389,
            "src": "2066:113:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 89,
              "nodeType": "Block",
              "src": "2244:76:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 87,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 85,
                      "name": "candidateList",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 24,
                      "src": "2253:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                        "typeString": "bytes32[] storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 86,
                      "name": "candidateNames",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 82,
                      "src": "2269:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[] memory"
                      }
                    },
                    "src": "2253:30:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                      "typeString": "bytes32[] storage ref"
                    }
                  },
                  "id": 88,
                  "nodeType": "ExpressionStatement",
                  "src": "2253:30:0"
                }
              ]
            },
            "documentation": null,
            "id": 90,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "pushCandidates",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 83,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 82,
                  "name": "candidateNames",
                  "nodeType": "VariableDeclaration",
                  "scope": 90,
                  "src": "2210:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[] memory"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 80,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "2210:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 81,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "2210:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[] storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2209:26:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 84,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2244:0:0"
            },
            "scope": 389,
            "src": "2185:135:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 196,
              "nodeType": "Block",
              "src": "2560:1116:0",
              "statements": [
                {
                  "assignments": [
                    98
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 98,
                      "name": "index",
                      "nodeType": "VariableDeclaration",
                      "scope": 197,
                      "src": "2616:10:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 97,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2616:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 102,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 100,
                        "name": "candidate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92,
                        "src": "2646:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 99,
                      "name": "indexOfCandidate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 266,
                      "src": "2629:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_uint256_$",
                        "typeString": "function (bytes32) view returns (uint256)"
                      }
                    },
                    "id": 101,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2629:27:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2616:40:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 109,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 104,
                          "name": "index",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 98,
                          "src": "2677:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 107,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "-",
                              "prefix": true,
                              "src": "2691:2:0",
                              "subExpression": {
                                "argumentTypes": null,
                                "hexValue": "31",
                                "id": 106,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2692:1:0",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_-1_by_1",
                                "typeString": "int_const -1"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_-1_by_1",
                                "typeString": "int_const -1"
                              }
                            ],
                            "id": 105,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2686:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": "uint"
                          },
                          "id": 108,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2686:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2677:17:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 103,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 405,
                      "src": "2669:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 110,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2669:26:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 111,
                  "nodeType": "ExpressionStatement",
                  "src": "2669:26:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 115,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 113,
                          "name": "now",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 404,
                          "src": "2710:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 114,
                          "name": "electionEnd",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32,
                          "src": "2717:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2710:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 112,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 405,
                      "src": "2702:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 116,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2702:27:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 117,
                  "nodeType": "ExpressionStatement",
                  "src": "2702:27:0"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 125,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 118,
                            "name": "voterInfo",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17,
                            "src": "2907:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_voter_$13_storage_$",
                              "typeString": "mapping(address => struct Voting.voter storage ref)"
                            }
                          },
                          "id": 121,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 119,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 402,
                              "src": "2917:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 120,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2917:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2907:21:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_voter_$13_storage",
                            "typeString": "struct Voting.voter storage ref"
                          }
                        },
                        "id": 122,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "tokensUsedPerCandidate",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 10,
                        "src": "2907:44:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 123,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2907:51:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 124,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2962:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "2907:56:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 149,
                  "nodeType": "IfStatement",
                  "src": "2903:204:0",
                  "trueBody": {
                    "id": 148,
                    "nodeType": "Block",
                    "src": "2966:141:0",
                    "statements": [
                      {
                        "body": {
                          "id": 146,
                          "nodeType": "Block",
                          "src": "3022:73:0",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "30",
                                    "id": 143,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "3083:1:0",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_0_by_1",
                                      "typeString": "int_const 0"
                                    },
                                    "value": "0"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_0_by_1",
                                      "typeString": "int_const 0"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "baseExpression": {
                                        "argumentTypes": null,
                                        "id": 137,
                                        "name": "voterInfo",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 17,
                                        "src": "3033:9:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_mapping$_t_address_$_t_struct$_voter_$13_storage_$",
                                          "typeString": "mapping(address => struct Voting.voter storage ref)"
                                        }
                                      },
                                      "id": 140,
                                      "indexExpression": {
                                        "argumentTypes": null,
                                        "expression": {
                                          "argumentTypes": null,
                                          "id": 138,
                                          "name": "msg",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 402,
                                          "src": "3043:3:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_magic_message",
                                            "typeString": "msg"
                                          }
                                        },
                                        "id": 139,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "sender",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "3043:10:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      },
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "IndexAccess",
                                      "src": "3033:21:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_voter_$13_storage",
                                        "typeString": "struct Voting.voter storage ref"
                                      }
                                    },
                                    "id": 141,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "tokensUsedPerCandidate",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 10,
                                    "src": "3033:44:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                      "typeString": "uint256[] storage ref"
                                    }
                                  },
                                  "id": 142,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "push",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "3033:49:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$",
                                    "typeString": "function (uint256) returns (uint256)"
                                  }
                                },
                                "id": 144,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3033:52:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 145,
                              "nodeType": "ExpressionStatement",
                              "src": "3033:52:0"
                            }
                          ]
                        },
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 133,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 130,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 127,
                            "src": "2991:1:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 131,
                              "name": "candidateList",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 24,
                              "src": "2995:13:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                "typeString": "bytes32[] storage ref"
                              }
                            },
                            "id": 132,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2995:20:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2991:24:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 147,
                        "initializationExpression": {
                          "assignments": [
                            127
                          ],
                          "declarations": [
                            {
                              "constant": false,
                              "id": 127,
                              "name": "i",
                              "nodeType": "VariableDeclaration",
                              "scope": 197,
                              "src": "2979:6:0",
                              "stateVariable": false,
                              "storageLocation": "default",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "typeName": {
                                "id": 126,
                                "name": "uint",
                                "nodeType": "ElementaryTypeName",
                                "src": "2979:4:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "value": null,
                              "visibility": "internal"
                            }
                          ],
                          "id": 129,
                          "initialValue": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 128,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2988:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "nodeType": "VariableDeclarationStatement",
                          "src": "2979:10:0"
                        },
                        "loopExpression": {
                          "expression": {
                            "argumentTypes": null,
                            "id": 135,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "UnaryOperation",
                            "operator": "++",
                            "prefix": false,
                            "src": "3017:3:0",
                            "subExpression": {
                              "argumentTypes": null,
                              "id": 134,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 127,
                              "src": "3017:1:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 136,
                          "nodeType": "ExpressionStatement",
                          "src": "3017:3:0"
                        },
                        "nodeType": "ForStatement",
                        "src": "2975:120:0"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    151
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 151,
                      "name": "availableTokens",
                      "nodeType": "VariableDeclaration",
                      "scope": 197,
                      "src": "3224:20:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 150,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3224:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 165,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 164,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 152,
                          "name": "voterInfo",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17,
                          "src": "3247:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_voter_$13_storage_$",
                            "typeString": "mapping(address => struct Voting.voter storage ref)"
                          }
                        },
                        "id": 155,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 153,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 402,
                            "src": "3257:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 154,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3257:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3247:21:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_voter_$13_storage",
                          "typeString": "struct Voting.voter storage ref"
                        }
                      },
                      "id": 156,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "tokensBought",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7,
                      "src": "3247:34:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 158,
                              "name": "voterInfo",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 17,
                              "src": "3300:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_voter_$13_storage_$",
                                "typeString": "mapping(address => struct Voting.voter storage ref)"
                              }
                            },
                            "id": 161,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 159,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 402,
                                "src": "3310:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 160,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "3310:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3300:21:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_voter_$13_storage",
                              "typeString": "struct Voting.voter storage ref"
                            }
                          },
                          "id": 162,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "tokensUsedPerCandidate",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 10,
                          "src": "3300:44:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                            "typeString": "uint256[] storage ref"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                            "typeString": "uint256[] storage ref"
                          }
                        ],
                        "id": 157,
                        "name": "totalTokensUsed",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 231,
                        "src": "3284:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_array$_t_uint256_$dyn_memory_ptr_$returns$_t_uint256_$",
                          "typeString": "function (uint256[] memory) pure returns (uint256)"
                        }
                      },
                      "id": 163,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3284:61:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3247:98:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3224:121:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 169,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 167,
                          "name": "availableTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 151,
                          "src": "3360:15:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 168,
                          "name": "votesInTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 94,
                          "src": "3379:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "3360:32:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 166,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 405,
                      "src": "3352:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 170,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3352:41:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 171,
                  "nodeType": "ExpressionStatement",
                  "src": "3352:41:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 176,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 172,
                        "name": "votesReceived",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21,
                        "src": "3402:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                          "typeString": "mapping(bytes32 => uint256)"
                        }
                      },
                      "id": 174,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 173,
                        "name": "candidate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92,
                        "src": "3416:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3402:24:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 175,
                      "name": "votesInTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 94,
                      "src": "3430:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3402:41:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 177,
                  "nodeType": "ExpressionStatement",
                  "src": "3402:41:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 186,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 178,
                            "name": "voterInfo",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17,
                            "src": "3558:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_voter_$13_storage_$",
                              "typeString": "mapping(address => struct Voting.voter storage ref)"
                            }
                          },
                          "id": 181,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 179,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 402,
                              "src": "3568:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 180,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "3568:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3558:21:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_voter_$13_storage",
                            "typeString": "struct Voting.voter storage ref"
                          }
                        },
                        "id": 182,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "tokensUsedPerCandidate",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 10,
                        "src": "3558:44:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 184,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 183,
                        "name": "index",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 98,
                        "src": "3603:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3558:51:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 185,
                      "name": "votesInTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 94,
                      "src": "3613:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3558:68:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 187,
                  "nodeType": "ExpressionStatement",
                  "src": "3558:68:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 194,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 188,
                          "name": "voterInfo",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17,
                          "src": "3633:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_voter_$13_storage_$",
                            "typeString": "mapping(address => struct Voting.voter storage ref)"
                          }
                        },
                        "id": 191,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 189,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 402,
                            "src": "3643:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 190,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3643:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3633:21:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_voter_$13_storage",
                          "typeString": "struct Voting.voter storage ref"
                        }
                      },
                      "id": 192,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "voted",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 12,
                      "src": "3633:27:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "66616c7365",
                      "id": 193,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3663:5:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "3633:35:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 195,
                  "nodeType": "ExpressionStatement",
                  "src": "3633:35:0"
                }
              ]
            },
            "documentation": null,
            "id": 197,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "voteForCandidate",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 95,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92,
                  "name": "candidate",
                  "nodeType": "VariableDeclaration",
                  "scope": 197,
                  "src": "2514:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 91,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2514:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 94,
                  "name": "votesInTokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 197,
                  "src": "2533:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 93,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2533:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2513:39:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 96,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2560:0:0"
            },
            "scope": 389,
            "src": "2488:1188:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 230,
              "nodeType": "Block",
              "src": "3833:191:0",
              "statements": [
                {
                  "assignments": [
                    206
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 206,
                      "name": "totalUsedTokens",
                      "nodeType": "VariableDeclaration",
                      "scope": 231,
                      "src": "3840:20:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 205,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3840:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 208,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 207,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3863:1:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3840:24:0"
                },
                {
                  "body": {
                    "id": 226,
                    "nodeType": "Block",
                    "src": "3928:62:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 224,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 220,
                            "name": "totalUsedTokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 206,
                            "src": "3937:15:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 221,
                              "name": "_tokensUsedPerCandidate",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 200,
                              "src": "3956:23:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            },
                            "id": 223,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 222,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 210,
                              "src": "3980:1:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3956:26:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3937:45:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 225,
                        "nodeType": "ExpressionStatement",
                        "src": "3937:45:0"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 216,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 213,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 210,
                      "src": "3887:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 214,
                        "name": "_tokensUsedPerCandidate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 200,
                        "src": "3891:23:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      "id": 215,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "3891:30:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3887:34:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 227,
                  "initializationExpression": {
                    "assignments": [
                      210
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 210,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 231,
                        "src": "3875:6:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 209,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "3875:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 212,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 211,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3884:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3875:10:0"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 218,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "3923:3:0",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 217,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 210,
                        "src": "3923:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 219,
                    "nodeType": "ExpressionStatement",
                    "src": "3923:3:0"
                  },
                  "nodeType": "ForStatement",
                  "src": "3871:119:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 228,
                    "name": "totalUsedTokens",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 206,
                    "src": "4003:15:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 204,
                  "id": 229,
                  "nodeType": "Return",
                  "src": "3996:22:0"
                }
              ]
            },
            "documentation": null,
            "id": 231,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalTokensUsed",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 201,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 200,
                  "name": "_tokensUsedPerCandidate",
                  "nodeType": "VariableDeclaration",
                  "scope": 231,
                  "src": "3773:30:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[] memory"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 198,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "3773:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 199,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "3773:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[] storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3772:32:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 204,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 203,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 231,
                  "src": "3827:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 202,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3827:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3826:6:0"
            },
            "scope": 389,
            "src": "3748:276:0",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 265,
              "nodeType": "Block",
              "src": "4102:161:0",
              "statements": [
                {
                  "body": {
                    "id": 258,
                    "nodeType": "Block",
                    "src": "4156:80:0",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "id": 253,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 249,
                              "name": "candidateList",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 24,
                              "src": "4169:13:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                "typeString": "bytes32[] storage ref"
                              }
                            },
                            "id": 251,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 250,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 239,
                              "src": "4183:1:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "4169:16:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 252,
                            "name": "candidate",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 233,
                            "src": "4189:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "4169:29:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 257,
                        "nodeType": "IfStatement",
                        "src": "4165:64:0",
                        "trueBody": {
                          "id": 256,
                          "nodeType": "Block",
                          "src": "4200:29:0",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 254,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 239,
                                "src": "4218:1:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "functionReturnParameters": 237,
                              "id": 255,
                              "nodeType": "Return",
                              "src": "4211:8:0"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 245,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 242,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 239,
                      "src": "4125:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 243,
                        "name": "candidateList",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24,
                        "src": "4129:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                          "typeString": "bytes32[] storage ref"
                        }
                      },
                      "id": 244,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "4129:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4125:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 259,
                  "initializationExpression": {
                    "assignments": [
                      239
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 239,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 266,
                        "src": "4113:6:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 238,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "4113:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 241,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 240,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4122:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4113:10:0"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 247,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "4151:3:0",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 246,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 239,
                        "src": "4151:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 248,
                    "nodeType": "ExpressionStatement",
                    "src": "4151:3:0"
                  },
                  "nodeType": "ForStatement",
                  "src": "4109:127:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 262,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "-",
                        "prefix": true,
                        "src": "4254:2:0",
                        "subExpression": {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 261,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4255:1:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_-1_by_1",
                          "typeString": "int_const -1"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_-1_by_1",
                          "typeString": "int_const -1"
                        }
                      ],
                      "id": 260,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "4249:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": "uint"
                    },
                    "id": 263,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4249:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 237,
                  "id": 264,
                  "nodeType": "Return",
                  "src": "4242:15:0"
                }
              ]
            },
            "documentation": null,
            "id": 266,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "indexOfCandidate",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 234,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 233,
                  "name": "candidate",
                  "nodeType": "VariableDeclaration",
                  "scope": 266,
                  "src": "4056:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 232,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4056:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4055:19:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 237,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 236,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 266,
                  "src": "4096:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 235,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4096:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4095:6:0"
            },
            "scope": 389,
            "src": "4030:233:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 316,
              "nodeType": "Block",
              "src": "4590:363:0",
              "statements": [
                {
                  "assignments": [
                    272
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 272,
                      "name": "tokensToBuy",
                      "nodeType": "VariableDeclaration",
                      "scope": 317,
                      "src": "4642:16:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 271,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "4642:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 277,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 276,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 273,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 402,
                        "src": "4661:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 274,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "4661:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 275,
                      "name": "tokenPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 30,
                      "src": "4673:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4661:22:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4642:41:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 281,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 279,
                          "name": "tokensToBuy",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 272,
                          "src": "4698:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 280,
                          "name": "balanceTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28,
                          "src": "4713:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4698:28:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 278,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 405,
                      "src": "4690:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 282,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4690:37:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 283,
                  "nodeType": "ExpressionStatement",
                  "src": "4690:37:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 291,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 284,
                          "name": "voterInfo",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17,
                          "src": "4734:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_voter_$13_storage_$",
                            "typeString": "mapping(address => struct Voting.voter storage ref)"
                          }
                        },
                        "id": 287,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 285,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 402,
                            "src": "4744:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 286,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "4744:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "4734:21:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_voter_$13_storage",
                          "typeString": "struct Voting.voter storage ref"
                        }
                      },
                      "id": 288,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "voterAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5,
                      "src": "4734:34:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 289,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 402,
                        "src": "4771:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 290,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "4771:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "4734:47:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 292,
                  "nodeType": "ExpressionStatement",
                  "src": "4734:47:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 300,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 293,
                          "name": "voterInfo",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17,
                          "src": "4784:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_voter_$13_storage_$",
                            "typeString": "mapping(address => struct Voting.voter storage ref)"
                          }
                        },
                        "id": 296,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 294,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 402,
                            "src": "4794:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 295,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "4794:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "4784:21:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_voter_$13_storage",
                          "typeString": "struct Voting.voter storage ref"
                        }
                      },
                      "id": 297,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "voterAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5,
                      "src": "4784:34:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 298,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 402,
                        "src": "4821:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 299,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "4821:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "4784:47:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 301,
                  "nodeType": "ExpressionStatement",
                  "src": "4784:47:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 308,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 302,
                          "name": "voterInfo",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17,
                          "src": "4838:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_voter_$13_storage_$",
                            "typeString": "mapping(address => struct Voting.voter storage ref)"
                          }
                        },
                        "id": 305,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 303,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 402,
                            "src": "4848:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 304,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "4848:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "4838:21:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_voter_$13_storage",
                          "typeString": "struct Voting.voter storage ref"
                        }
                      },
                      "id": 306,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "tokensBought",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7,
                      "src": "4838:34:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 307,
                      "name": "tokensToBuy",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 272,
                      "src": "4876:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4838:49:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 309,
                  "nodeType": "ExpressionStatement",
                  "src": "4838:49:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 312,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 310,
                      "name": "balanceTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28,
                      "src": "4894:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 311,
                      "name": "tokensToBuy",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 272,
                      "src": "4911:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4894:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 313,
                  "nodeType": "ExpressionStatement",
                  "src": "4894:28:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 314,
                    "name": "tokensToBuy",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 272,
                    "src": "4936:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 270,
                  "id": 315,
                  "nodeType": "Return",
                  "src": "4929:18:0"
                }
              ]
            },
            "documentation": null,
            "id": 317,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "buy",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 267,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4557:2:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 270,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 269,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 317,
                  "src": "4584:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 268,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4584:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4583:6:0"
            },
            "scope": 389,
            "src": "4545:408:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 326,
              "nodeType": "Block",
              "src": "5008:47:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 324,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 322,
                      "name": "totalTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26,
                      "src": "5022:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 323,
                      "name": "balanceTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28,
                      "src": "5036:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5022:27:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 321,
                  "id": 325,
                  "nodeType": "Return",
                  "src": "5015:34:0"
                }
              ]
            },
            "documentation": null,
            "id": 327,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokensSold",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 318,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4978:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 321,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 320,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 327,
                  "src": "5002:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 319,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "5002:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5001:6:0"
            },
            "scope": 389,
            "src": "4959:96:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 347,
              "nodeType": "Block",
              "src": "5132:90:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 337,
                            "name": "voterInfo",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17,
                            "src": "5147:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_voter_$13_storage_$",
                              "typeString": "mapping(address => struct Voting.voter storage ref)"
                            }
                          },
                          "id": 339,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 338,
                            "name": "user",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 329,
                            "src": "5157:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "5147:15:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_voter_$13_storage",
                            "typeString": "struct Voting.voter storage ref"
                          }
                        },
                        "id": 340,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "tokensBought",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7,
                        "src": "5147:28:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 341,
                            "name": "voterInfo",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17,
                            "src": "5177:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_voter_$13_storage_$",
                              "typeString": "mapping(address => struct Voting.voter storage ref)"
                            }
                          },
                          "id": 343,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 342,
                            "name": "user",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 329,
                            "src": "5187:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "5177:15:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_voter_$13_storage",
                            "typeString": "struct Voting.voter storage ref"
                          }
                        },
                        "id": 344,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "tokensUsedPerCandidate",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 10,
                        "src": "5177:38:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      }
                    ],
                    "id": 345,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "5146:70:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_array$_t_uint256_$dyn_storage_$",
                      "typeString": "tuple(uint256,uint256[] storage ref)"
                    }
                  },
                  "functionReturnParameters": 336,
                  "id": 346,
                  "nodeType": "Return",
                  "src": "5139:77:0"
                }
              ]
            },
            "documentation": null,
            "id": 348,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "voterDetails",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 330,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 329,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 348,
                  "src": "5083:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 328,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5083:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5082:14:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 336,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 332,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 348,
                  "src": "5118:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 331,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "5118:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 335,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 348,
                  "src": "5124:6:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[] memory"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 333,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "5124:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 334,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "5124:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[] storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5117:14:0"
            },
            "scope": 389,
            "src": "5061:161:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 357,
              "nodeType": "Block",
              "src": "5259:27:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 355,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 353,
                      "name": "storedData",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3,
                      "src": "5266:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 354,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 350,
                      "src": "5279:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "5266:14:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 356,
                  "nodeType": "ExpressionStatement",
                  "src": "5266:14:0"
                }
              ]
            },
            "documentation": null,
            "id": 358,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "set",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 351,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 350,
                  "name": "x",
                  "nodeType": "VariableDeclaration",
                  "scope": 358,
                  "src": "5242:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 349,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5242:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5241:11:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 352,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5259:0:0"
            },
            "scope": 389,
            "src": "5228:58:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 365,
              "nodeType": "Block",
              "src": "5338:31:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 363,
                    "name": "storedData",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 3,
                    "src": "5353:10:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 362,
                  "id": 364,
                  "nodeType": "Return",
                  "src": "5345:18:0"
                }
              ]
            },
            "documentation": null,
            "id": 366,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "get",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 359,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5302:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 362,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 361,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 366,
                  "src": "5330:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 360,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5330:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5329:9:0"
            },
            "scope": 389,
            "src": "5290:79:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 378,
              "nodeType": "Block",
              "src": "5833:43:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 374,
                          "name": "this",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 413,
                          "src": "5857:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Voting_$389",
                            "typeString": "contract Voting"
                          }
                        },
                        "id": 375,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "5857:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 371,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 368,
                        "src": "5840:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 373,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "5840:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 376,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5840:30:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 377,
                  "nodeType": "ExpressionStatement",
                  "src": "5840:30:0"
                }
              ]
            },
            "documentation": null,
            "id": 379,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferTo",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 369,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 368,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 379,
                  "src": "5809:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 367,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5809:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5808:17:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 370,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5833:0:0"
            },
            "scope": 389,
            "src": "5789:87:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 387,
              "nodeType": "Block",
              "src": "5940:40:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 385,
                    "name": "candidateList",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 24,
                    "src": "5960:13:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                      "typeString": "bytes32[] storage ref"
                    }
                  },
                  "functionReturnParameters": 384,
                  "id": 386,
                  "nodeType": "Return",
                  "src": "5953:20:0"
                }
              ]
            },
            "documentation": null,
            "id": 388,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allCandidates",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 380,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5904:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 384,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 383,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 388,
                  "src": "5929:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[] memory"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 381,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "5929:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 382,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "5929:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[] storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5928:11:0"
            },
            "scope": 389,
            "src": "5882:98:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 390,
        "src": "97:5895:0"
      }
    ],
    "src": "0:5994:0"
  },
  "legacyAST": {
    "absolutePath": "/C/Users/Aymen/Desktop/git/project/contracts/Voting.sol",
    "exportedSymbols": {
      "Voting": [
        389
      ]
    },
    "id": 390,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 389,
        "linearizedBaseContracts": [
          389
        ],
        "name": "Voting",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 3,
            "name": "storedData",
            "nodeType": "VariableDeclaration",
            "scope": 389,
            "src": "120:18:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 2,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "120:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "canonicalName": "Voting.voter",
            "id": 13,
            "members": [
              {
                "constant": false,
                "id": 5,
                "name": "voterAddress",
                "nodeType": "VariableDeclaration",
                "scope": 13,
                "src": "228:20:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 4,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "228:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7,
                "name": "tokensBought",
                "nodeType": "VariableDeclaration",
                "scope": 13,
                "src": "283:17:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 6,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "283:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 10,
                "name": "tokensUsedPerCandidate",
                "nodeType": "VariableDeclaration",
                "scope": 13,
                "src": "353:29:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                  "typeString": "uint256[] storage pointer"
                },
                "typeName": {
                  "baseType": {
                    "id": 8,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "353:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9,
                  "length": null,
                  "nodeType": "ArrayTypeName",
                  "src": "353:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                    "typeString": "uint256[] storage pointer"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 12,
                "name": "voted",
                "nodeType": "VariableDeclaration",
                "scope": 13,
                "src": "389:10:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 11,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "389:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "voter",
            "nodeType": "StructDefinition",
            "scope": 389,
            "src": "208:608:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 17,
            "name": "voterInfo",
            "nodeType": "VariableDeclaration",
            "scope": 389,
            "src": "1029:43:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_voter_$13_storage_$",
              "typeString": "mapping(address => struct Voting.voter storage ref)"
            },
            "typeName": {
              "id": 16,
              "keyType": {
                "id": 14,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1038:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1029:26:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_voter_$13_storage_$",
                "typeString": "mapping(address => struct Voting.voter storage ref)"
              },
              "valueType": {
                "contractScope": null,
                "id": 15,
                "name": "voter",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 13,
                "src": "1049:5:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_voter_$13_storage_ptr",
                  "typeString": "struct Voting.voter storage pointer"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 21,
            "name": "votesReceived",
            "nodeType": "VariableDeclaration",
            "scope": 389,
            "src": "1227:46:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
              "typeString": "mapping(bytes32 => uint256)"
            },
            "typeName": {
              "id": 20,
              "keyType": {
                "id": 18,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "1236:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "1227:25:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                "typeString": "mapping(bytes32 => uint256)"
              },
              "valueType": {
                "id": 19,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "1247:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 24,
            "name": "candidateList",
            "nodeType": "VariableDeclaration",
            "scope": 389,
            "src": "1280:30:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
              "typeString": "bytes32[] storage ref"
            },
            "typeName": {
              "baseType": {
                "id": 22,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "1280:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "id": 23,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "1280:9:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                "typeString": "bytes32[] storage pointer"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 26,
            "name": "totalTokens",
            "nodeType": "VariableDeclaration",
            "scope": 389,
            "src": "1318:23:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 25,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "1318:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 28,
            "name": "balanceTokens",
            "nodeType": "VariableDeclaration",
            "scope": 389,
            "src": "1397:25:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 27,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "1397:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 30,
            "name": "tokenPrice",
            "nodeType": "VariableDeclaration",
            "scope": 389,
            "src": "1479:22:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 29,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "1479:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 32,
            "name": "electionEnd",
            "nodeType": "VariableDeclaration",
            "scope": 389,
            "src": "1507:23:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 31,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "1507:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 66,
              "nodeType": "Block",
              "src": "1815:245:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 46,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 44,
                      "name": "candidateList",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 24,
                      "src": "1852:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                        "typeString": "bytes32[] storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 45,
                      "name": "candidateNames",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 39,
                      "src": "1868:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[] memory"
                      }
                    },
                    "src": "1852:30:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                      "typeString": "bytes32[] storage ref"
                    }
                  },
                  "id": 47,
                  "nodeType": "ExpressionStatement",
                  "src": "1852:30:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 50,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 48,
                      "name": "totalTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26,
                      "src": "1889:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 49,
                      "name": "tokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34,
                      "src": "1903:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1889:20:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 51,
                  "nodeType": "ExpressionStatement",
                  "src": "1889:20:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 54,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 52,
                      "name": "balanceTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28,
                      "src": "1916:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 53,
                      "name": "tokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34,
                      "src": "1932:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1916:22:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 55,
                  "nodeType": "ExpressionStatement",
                  "src": "1916:22:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 58,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 56,
                      "name": "tokenPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 30,
                      "src": "1945:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 57,
                      "name": "pricePerToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36,
                      "src": "1958:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1945:26:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 59,
                  "nodeType": "ExpressionStatement",
                  "src": "1945:26:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 64,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 60,
                      "name": "electionEnd",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32,
                      "src": "1978:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 63,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 61,
                        "name": "now",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 404,
                        "src": "1992:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 62,
                        "name": "_electionTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41,
                        "src": "1998:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1992:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1978:33:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 65,
                  "nodeType": "ExpressionStatement",
                  "src": "1978:33:0"
                }
              ]
            },
            "documentation": null,
            "id": 67,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "Voting",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 42,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34,
                  "name": "tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 67,
                  "src": "1731:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 33,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1731:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 36,
                  "name": "pricePerToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 67,
                  "src": "1744:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 35,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1744:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 39,
                  "name": "candidateNames",
                  "nodeType": "VariableDeclaration",
                  "scope": 67,
                  "src": "1763:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[] memory"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 37,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "1763:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 38,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1763:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[] storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41,
                  "name": "_electionTime",
                  "nodeType": "VariableDeclaration",
                  "scope": 67,
                  "src": "1788:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 40,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1788:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1730:77:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 43,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1815:0:0"
            },
            "scope": 389,
            "src": "1715:345:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 78,
              "nodeType": "Block",
              "src": "2135:44:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 74,
                      "name": "votesReceived",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21,
                      "src": "2149:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                        "typeString": "mapping(bytes32 => uint256)"
                      }
                    },
                    "id": 76,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 75,
                      "name": "candidate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 69,
                      "src": "2163:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2149:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 73,
                  "id": 77,
                  "nodeType": "Return",
                  "src": "2142:31:0"
                }
              ]
            },
            "documentation": null,
            "id": 79,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalVotesFor",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 70,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 69,
                  "name": "candidate",
                  "nodeType": "VariableDeclaration",
                  "scope": 79,
                  "src": "2089:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 68,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2089:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2088:19:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 73,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 72,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 79,
                  "src": "2129:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 71,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2129:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2128:6:0"
            },
            "scope": 389,
            "src": "2066:113:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 89,
              "nodeType": "Block",
              "src": "2244:76:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 87,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 85,
                      "name": "candidateList",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 24,
                      "src": "2253:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                        "typeString": "bytes32[] storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 86,
                      "name": "candidateNames",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 82,
                      "src": "2269:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[] memory"
                      }
                    },
                    "src": "2253:30:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                      "typeString": "bytes32[] storage ref"
                    }
                  },
                  "id": 88,
                  "nodeType": "ExpressionStatement",
                  "src": "2253:30:0"
                }
              ]
            },
            "documentation": null,
            "id": 90,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "pushCandidates",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 83,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 82,
                  "name": "candidateNames",
                  "nodeType": "VariableDeclaration",
                  "scope": 90,
                  "src": "2210:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[] memory"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 80,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "2210:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 81,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "2210:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[] storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2209:26:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 84,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2244:0:0"
            },
            "scope": 389,
            "src": "2185:135:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 196,
              "nodeType": "Block",
              "src": "2560:1116:0",
              "statements": [
                {
                  "assignments": [
                    98
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 98,
                      "name": "index",
                      "nodeType": "VariableDeclaration",
                      "scope": 197,
                      "src": "2616:10:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 97,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2616:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 102,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 100,
                        "name": "candidate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92,
                        "src": "2646:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 99,
                      "name": "indexOfCandidate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 266,
                      "src": "2629:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_uint256_$",
                        "typeString": "function (bytes32) view returns (uint256)"
                      }
                    },
                    "id": 101,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2629:27:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2616:40:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 109,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 104,
                          "name": "index",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 98,
                          "src": "2677:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 107,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "-",
                              "prefix": true,
                              "src": "2691:2:0",
                              "subExpression": {
                                "argumentTypes": null,
                                "hexValue": "31",
                                "id": 106,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2692:1:0",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_-1_by_1",
                                "typeString": "int_const -1"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_-1_by_1",
                                "typeString": "int_const -1"
                              }
                            ],
                            "id": 105,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2686:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": "uint"
                          },
                          "id": 108,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2686:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2677:17:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 103,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 405,
                      "src": "2669:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 110,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2669:26:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 111,
                  "nodeType": "ExpressionStatement",
                  "src": "2669:26:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 115,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 113,
                          "name": "now",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 404,
                          "src": "2710:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 114,
                          "name": "electionEnd",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32,
                          "src": "2717:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2710:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 112,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 405,
                      "src": "2702:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 116,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2702:27:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 117,
                  "nodeType": "ExpressionStatement",
                  "src": "2702:27:0"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 125,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 118,
                            "name": "voterInfo",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17,
                            "src": "2907:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_voter_$13_storage_$",
                              "typeString": "mapping(address => struct Voting.voter storage ref)"
                            }
                          },
                          "id": 121,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 119,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 402,
                              "src": "2917:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 120,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2917:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2907:21:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_voter_$13_storage",
                            "typeString": "struct Voting.voter storage ref"
                          }
                        },
                        "id": 122,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "tokensUsedPerCandidate",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 10,
                        "src": "2907:44:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 123,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2907:51:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 124,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2962:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "2907:56:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 149,
                  "nodeType": "IfStatement",
                  "src": "2903:204:0",
                  "trueBody": {
                    "id": 148,
                    "nodeType": "Block",
                    "src": "2966:141:0",
                    "statements": [
                      {
                        "body": {
                          "id": 146,
                          "nodeType": "Block",
                          "src": "3022:73:0",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "30",
                                    "id": 143,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "3083:1:0",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_0_by_1",
                                      "typeString": "int_const 0"
                                    },
                                    "value": "0"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_0_by_1",
                                      "typeString": "int_const 0"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "baseExpression": {
                                        "argumentTypes": null,
                                        "id": 137,
                                        "name": "voterInfo",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 17,
                                        "src": "3033:9:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_mapping$_t_address_$_t_struct$_voter_$13_storage_$",
                                          "typeString": "mapping(address => struct Voting.voter storage ref)"
                                        }
                                      },
                                      "id": 140,
                                      "indexExpression": {
                                        "argumentTypes": null,
                                        "expression": {
                                          "argumentTypes": null,
                                          "id": 138,
                                          "name": "msg",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 402,
                                          "src": "3043:3:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_magic_message",
                                            "typeString": "msg"
                                          }
                                        },
                                        "id": 139,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "sender",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "3043:10:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      },
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "IndexAccess",
                                      "src": "3033:21:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_voter_$13_storage",
                                        "typeString": "struct Voting.voter storage ref"
                                      }
                                    },
                                    "id": 141,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "tokensUsedPerCandidate",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 10,
                                    "src": "3033:44:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                      "typeString": "uint256[] storage ref"
                                    }
                                  },
                                  "id": 142,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "push",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "3033:49:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$",
                                    "typeString": "function (uint256) returns (uint256)"
                                  }
                                },
                                "id": 144,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3033:52:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 145,
                              "nodeType": "ExpressionStatement",
                              "src": "3033:52:0"
                            }
                          ]
                        },
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 133,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 130,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 127,
                            "src": "2991:1:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 131,
                              "name": "candidateList",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 24,
                              "src": "2995:13:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                "typeString": "bytes32[] storage ref"
                              }
                            },
                            "id": 132,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2995:20:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2991:24:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 147,
                        "initializationExpression": {
                          "assignments": [
                            127
                          ],
                          "declarations": [
                            {
                              "constant": false,
                              "id": 127,
                              "name": "i",
                              "nodeType": "VariableDeclaration",
                              "scope": 197,
                              "src": "2979:6:0",
                              "stateVariable": false,
                              "storageLocation": "default",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "typeName": {
                                "id": 126,
                                "name": "uint",
                                "nodeType": "ElementaryTypeName",
                                "src": "2979:4:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "value": null,
                              "visibility": "internal"
                            }
                          ],
                          "id": 129,
                          "initialValue": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 128,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2988:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "nodeType": "VariableDeclarationStatement",
                          "src": "2979:10:0"
                        },
                        "loopExpression": {
                          "expression": {
                            "argumentTypes": null,
                            "id": 135,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "UnaryOperation",
                            "operator": "++",
                            "prefix": false,
                            "src": "3017:3:0",
                            "subExpression": {
                              "argumentTypes": null,
                              "id": 134,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 127,
                              "src": "3017:1:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 136,
                          "nodeType": "ExpressionStatement",
                          "src": "3017:3:0"
                        },
                        "nodeType": "ForStatement",
                        "src": "2975:120:0"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    151
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 151,
                      "name": "availableTokens",
                      "nodeType": "VariableDeclaration",
                      "scope": 197,
                      "src": "3224:20:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 150,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3224:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 165,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 164,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 152,
                          "name": "voterInfo",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17,
                          "src": "3247:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_voter_$13_storage_$",
                            "typeString": "mapping(address => struct Voting.voter storage ref)"
                          }
                        },
                        "id": 155,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 153,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 402,
                            "src": "3257:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 154,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3257:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3247:21:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_voter_$13_storage",
                          "typeString": "struct Voting.voter storage ref"
                        }
                      },
                      "id": 156,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "tokensBought",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7,
                      "src": "3247:34:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 158,
                              "name": "voterInfo",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 17,
                              "src": "3300:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_voter_$13_storage_$",
                                "typeString": "mapping(address => struct Voting.voter storage ref)"
                              }
                            },
                            "id": 161,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 159,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 402,
                                "src": "3310:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 160,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "3310:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3300:21:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_voter_$13_storage",
                              "typeString": "struct Voting.voter storage ref"
                            }
                          },
                          "id": 162,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "tokensUsedPerCandidate",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 10,
                          "src": "3300:44:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                            "typeString": "uint256[] storage ref"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                            "typeString": "uint256[] storage ref"
                          }
                        ],
                        "id": 157,
                        "name": "totalTokensUsed",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 231,
                        "src": "3284:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_array$_t_uint256_$dyn_memory_ptr_$returns$_t_uint256_$",
                          "typeString": "function (uint256[] memory) pure returns (uint256)"
                        }
                      },
                      "id": 163,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3284:61:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3247:98:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3224:121:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 169,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 167,
                          "name": "availableTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 151,
                          "src": "3360:15:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 168,
                          "name": "votesInTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 94,
                          "src": "3379:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "3360:32:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 166,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 405,
                      "src": "3352:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 170,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3352:41:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 171,
                  "nodeType": "ExpressionStatement",
                  "src": "3352:41:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 176,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 172,
                        "name": "votesReceived",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21,
                        "src": "3402:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                          "typeString": "mapping(bytes32 => uint256)"
                        }
                      },
                      "id": 174,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 173,
                        "name": "candidate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92,
                        "src": "3416:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3402:24:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 175,
                      "name": "votesInTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 94,
                      "src": "3430:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3402:41:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 177,
                  "nodeType": "ExpressionStatement",
                  "src": "3402:41:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 186,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 178,
                            "name": "voterInfo",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17,
                            "src": "3558:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_voter_$13_storage_$",
                              "typeString": "mapping(address => struct Voting.voter storage ref)"
                            }
                          },
                          "id": 181,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 179,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 402,
                              "src": "3568:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 180,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "3568:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3558:21:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_voter_$13_storage",
                            "typeString": "struct Voting.voter storage ref"
                          }
                        },
                        "id": 182,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "tokensUsedPerCandidate",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 10,
                        "src": "3558:44:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 184,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 183,
                        "name": "index",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 98,
                        "src": "3603:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3558:51:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 185,
                      "name": "votesInTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 94,
                      "src": "3613:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3558:68:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 187,
                  "nodeType": "ExpressionStatement",
                  "src": "3558:68:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 194,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 188,
                          "name": "voterInfo",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17,
                          "src": "3633:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_voter_$13_storage_$",
                            "typeString": "mapping(address => struct Voting.voter storage ref)"
                          }
                        },
                        "id": 191,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 189,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 402,
                            "src": "3643:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 190,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3643:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3633:21:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_voter_$13_storage",
                          "typeString": "struct Voting.voter storage ref"
                        }
                      },
                      "id": 192,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "voted",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 12,
                      "src": "3633:27:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "66616c7365",
                      "id": 193,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3663:5:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "3633:35:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 195,
                  "nodeType": "ExpressionStatement",
                  "src": "3633:35:0"
                }
              ]
            },
            "documentation": null,
            "id": 197,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "voteForCandidate",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 95,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92,
                  "name": "candidate",
                  "nodeType": "VariableDeclaration",
                  "scope": 197,
                  "src": "2514:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 91,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2514:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 94,
                  "name": "votesInTokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 197,
                  "src": "2533:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 93,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2533:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2513:39:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 96,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2560:0:0"
            },
            "scope": 389,
            "src": "2488:1188:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 230,
              "nodeType": "Block",
              "src": "3833:191:0",
              "statements": [
                {
                  "assignments": [
                    206
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 206,
                      "name": "totalUsedTokens",
                      "nodeType": "VariableDeclaration",
                      "scope": 231,
                      "src": "3840:20:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 205,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3840:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 208,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 207,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3863:1:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3840:24:0"
                },
                {
                  "body": {
                    "id": 226,
                    "nodeType": "Block",
                    "src": "3928:62:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 224,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 220,
                            "name": "totalUsedTokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 206,
                            "src": "3937:15:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 221,
                              "name": "_tokensUsedPerCandidate",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 200,
                              "src": "3956:23:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            },
                            "id": 223,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 222,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 210,
                              "src": "3980:1:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3956:26:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3937:45:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 225,
                        "nodeType": "ExpressionStatement",
                        "src": "3937:45:0"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 216,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 213,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 210,
                      "src": "3887:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 214,
                        "name": "_tokensUsedPerCandidate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 200,
                        "src": "3891:23:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      "id": 215,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "3891:30:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3887:34:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 227,
                  "initializationExpression": {
                    "assignments": [
                      210
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 210,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 231,
                        "src": "3875:6:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 209,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "3875:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 212,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 211,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3884:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3875:10:0"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 218,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "3923:3:0",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 217,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 210,
                        "src": "3923:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 219,
                    "nodeType": "ExpressionStatement",
                    "src": "3923:3:0"
                  },
                  "nodeType": "ForStatement",
                  "src": "3871:119:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 228,
                    "name": "totalUsedTokens",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 206,
                    "src": "4003:15:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 204,
                  "id": 229,
                  "nodeType": "Return",
                  "src": "3996:22:0"
                }
              ]
            },
            "documentation": null,
            "id": 231,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalTokensUsed",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 201,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 200,
                  "name": "_tokensUsedPerCandidate",
                  "nodeType": "VariableDeclaration",
                  "scope": 231,
                  "src": "3773:30:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[] memory"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 198,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "3773:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 199,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "3773:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[] storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3772:32:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 204,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 203,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 231,
                  "src": "3827:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 202,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3827:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3826:6:0"
            },
            "scope": 389,
            "src": "3748:276:0",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 265,
              "nodeType": "Block",
              "src": "4102:161:0",
              "statements": [
                {
                  "body": {
                    "id": 258,
                    "nodeType": "Block",
                    "src": "4156:80:0",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "id": 253,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 249,
                              "name": "candidateList",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 24,
                              "src": "4169:13:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                "typeString": "bytes32[] storage ref"
                              }
                            },
                            "id": 251,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 250,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 239,
                              "src": "4183:1:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "4169:16:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 252,
                            "name": "candidate",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 233,
                            "src": "4189:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "4169:29:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 257,
                        "nodeType": "IfStatement",
                        "src": "4165:64:0",
                        "trueBody": {
                          "id": 256,
                          "nodeType": "Block",
                          "src": "4200:29:0",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 254,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 239,
                                "src": "4218:1:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "functionReturnParameters": 237,
                              "id": 255,
                              "nodeType": "Return",
                              "src": "4211:8:0"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 245,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 242,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 239,
                      "src": "4125:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 243,
                        "name": "candidateList",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24,
                        "src": "4129:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                          "typeString": "bytes32[] storage ref"
                        }
                      },
                      "id": 244,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "4129:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4125:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 259,
                  "initializationExpression": {
                    "assignments": [
                      239
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 239,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 266,
                        "src": "4113:6:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 238,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "4113:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 241,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 240,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4122:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4113:10:0"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 247,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "4151:3:0",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 246,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 239,
                        "src": "4151:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 248,
                    "nodeType": "ExpressionStatement",
                    "src": "4151:3:0"
                  },
                  "nodeType": "ForStatement",
                  "src": "4109:127:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 262,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "-",
                        "prefix": true,
                        "src": "4254:2:0",
                        "subExpression": {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 261,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4255:1:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_-1_by_1",
                          "typeString": "int_const -1"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_-1_by_1",
                          "typeString": "int_const -1"
                        }
                      ],
                      "id": 260,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "4249:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": "uint"
                    },
                    "id": 263,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4249:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 237,
                  "id": 264,
                  "nodeType": "Return",
                  "src": "4242:15:0"
                }
              ]
            },
            "documentation": null,
            "id": 266,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "indexOfCandidate",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 234,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 233,
                  "name": "candidate",
                  "nodeType": "VariableDeclaration",
                  "scope": 266,
                  "src": "4056:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 232,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4056:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4055:19:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 237,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 236,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 266,
                  "src": "4096:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 235,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4096:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4095:6:0"
            },
            "scope": 389,
            "src": "4030:233:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 316,
              "nodeType": "Block",
              "src": "4590:363:0",
              "statements": [
                {
                  "assignments": [
                    272
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 272,
                      "name": "tokensToBuy",
                      "nodeType": "VariableDeclaration",
                      "scope": 317,
                      "src": "4642:16:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 271,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "4642:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 277,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 276,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 273,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 402,
                        "src": "4661:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 274,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "4661:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 275,
                      "name": "tokenPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 30,
                      "src": "4673:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4661:22:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4642:41:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 281,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 279,
                          "name": "tokensToBuy",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 272,
                          "src": "4698:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 280,
                          "name": "balanceTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28,
                          "src": "4713:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4698:28:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 278,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 405,
                      "src": "4690:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 282,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4690:37:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 283,
                  "nodeType": "ExpressionStatement",
                  "src": "4690:37:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 291,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 284,
                          "name": "voterInfo",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17,
                          "src": "4734:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_voter_$13_storage_$",
                            "typeString": "mapping(address => struct Voting.voter storage ref)"
                          }
                        },
                        "id": 287,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 285,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 402,
                            "src": "4744:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 286,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "4744:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "4734:21:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_voter_$13_storage",
                          "typeString": "struct Voting.voter storage ref"
                        }
                      },
                      "id": 288,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "voterAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5,
                      "src": "4734:34:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 289,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 402,
                        "src": "4771:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 290,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "4771:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "4734:47:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 292,
                  "nodeType": "ExpressionStatement",
                  "src": "4734:47:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 300,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 293,
                          "name": "voterInfo",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17,
                          "src": "4784:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_voter_$13_storage_$",
                            "typeString": "mapping(address => struct Voting.voter storage ref)"
                          }
                        },
                        "id": 296,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 294,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 402,
                            "src": "4794:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 295,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "4794:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "4784:21:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_voter_$13_storage",
                          "typeString": "struct Voting.voter storage ref"
                        }
                      },
                      "id": 297,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "voterAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5,
                      "src": "4784:34:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 298,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 402,
                        "src": "4821:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 299,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "4821:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "4784:47:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 301,
                  "nodeType": "ExpressionStatement",
                  "src": "4784:47:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 308,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 302,
                          "name": "voterInfo",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17,
                          "src": "4838:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_voter_$13_storage_$",
                            "typeString": "mapping(address => struct Voting.voter storage ref)"
                          }
                        },
                        "id": 305,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 303,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 402,
                            "src": "4848:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 304,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "4848:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "4838:21:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_voter_$13_storage",
                          "typeString": "struct Voting.voter storage ref"
                        }
                      },
                      "id": 306,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "tokensBought",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7,
                      "src": "4838:34:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 307,
                      "name": "tokensToBuy",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 272,
                      "src": "4876:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4838:49:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 309,
                  "nodeType": "ExpressionStatement",
                  "src": "4838:49:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 312,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 310,
                      "name": "balanceTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28,
                      "src": "4894:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 311,
                      "name": "tokensToBuy",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 272,
                      "src": "4911:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4894:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 313,
                  "nodeType": "ExpressionStatement",
                  "src": "4894:28:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 314,
                    "name": "tokensToBuy",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 272,
                    "src": "4936:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 270,
                  "id": 315,
                  "nodeType": "Return",
                  "src": "4929:18:0"
                }
              ]
            },
            "documentation": null,
            "id": 317,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "buy",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 267,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4557:2:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 270,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 269,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 317,
                  "src": "4584:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 268,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4584:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4583:6:0"
            },
            "scope": 389,
            "src": "4545:408:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 326,
              "nodeType": "Block",
              "src": "5008:47:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 324,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 322,
                      "name": "totalTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26,
                      "src": "5022:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 323,
                      "name": "balanceTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28,
                      "src": "5036:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5022:27:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 321,
                  "id": 325,
                  "nodeType": "Return",
                  "src": "5015:34:0"
                }
              ]
            },
            "documentation": null,
            "id": 327,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokensSold",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 318,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4978:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 321,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 320,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 327,
                  "src": "5002:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 319,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "5002:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5001:6:0"
            },
            "scope": 389,
            "src": "4959:96:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 347,
              "nodeType": "Block",
              "src": "5132:90:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 337,
                            "name": "voterInfo",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17,
                            "src": "5147:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_voter_$13_storage_$",
                              "typeString": "mapping(address => struct Voting.voter storage ref)"
                            }
                          },
                          "id": 339,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 338,
                            "name": "user",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 329,
                            "src": "5157:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "5147:15:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_voter_$13_storage",
                            "typeString": "struct Voting.voter storage ref"
                          }
                        },
                        "id": 340,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "tokensBought",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7,
                        "src": "5147:28:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 341,
                            "name": "voterInfo",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17,
                            "src": "5177:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_voter_$13_storage_$",
                              "typeString": "mapping(address => struct Voting.voter storage ref)"
                            }
                          },
                          "id": 343,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 342,
                            "name": "user",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 329,
                            "src": "5187:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "5177:15:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_voter_$13_storage",
                            "typeString": "struct Voting.voter storage ref"
                          }
                        },
                        "id": 344,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "tokensUsedPerCandidate",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 10,
                        "src": "5177:38:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      }
                    ],
                    "id": 345,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "5146:70:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_array$_t_uint256_$dyn_storage_$",
                      "typeString": "tuple(uint256,uint256[] storage ref)"
                    }
                  },
                  "functionReturnParameters": 336,
                  "id": 346,
                  "nodeType": "Return",
                  "src": "5139:77:0"
                }
              ]
            },
            "documentation": null,
            "id": 348,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "voterDetails",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 330,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 329,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 348,
                  "src": "5083:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 328,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5083:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5082:14:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 336,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 332,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 348,
                  "src": "5118:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 331,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "5118:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 335,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 348,
                  "src": "5124:6:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[] memory"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 333,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "5124:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 334,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "5124:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[] storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5117:14:0"
            },
            "scope": 389,
            "src": "5061:161:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 357,
              "nodeType": "Block",
              "src": "5259:27:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 355,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 353,
                      "name": "storedData",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3,
                      "src": "5266:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 354,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 350,
                      "src": "5279:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "5266:14:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 356,
                  "nodeType": "ExpressionStatement",
                  "src": "5266:14:0"
                }
              ]
            },
            "documentation": null,
            "id": 358,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "set",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 351,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 350,
                  "name": "x",
                  "nodeType": "VariableDeclaration",
                  "scope": 358,
                  "src": "5242:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 349,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5242:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5241:11:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 352,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5259:0:0"
            },
            "scope": 389,
            "src": "5228:58:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 365,
              "nodeType": "Block",
              "src": "5338:31:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 363,
                    "name": "storedData",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 3,
                    "src": "5353:10:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 362,
                  "id": 364,
                  "nodeType": "Return",
                  "src": "5345:18:0"
                }
              ]
            },
            "documentation": null,
            "id": 366,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "get",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 359,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5302:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 362,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 361,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 366,
                  "src": "5330:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 360,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5330:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5329:9:0"
            },
            "scope": 389,
            "src": "5290:79:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 378,
              "nodeType": "Block",
              "src": "5833:43:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 374,
                          "name": "this",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 413,
                          "src": "5857:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Voting_$389",
                            "typeString": "contract Voting"
                          }
                        },
                        "id": 375,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "5857:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 371,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 368,
                        "src": "5840:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 373,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "5840:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 376,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5840:30:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 377,
                  "nodeType": "ExpressionStatement",
                  "src": "5840:30:0"
                }
              ]
            },
            "documentation": null,
            "id": 379,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferTo",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 369,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 368,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 379,
                  "src": "5809:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 367,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5809:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5808:17:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 370,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5833:0:0"
            },
            "scope": 389,
            "src": "5789:87:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 387,
              "nodeType": "Block",
              "src": "5940:40:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 385,
                    "name": "candidateList",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 24,
                    "src": "5960:13:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                      "typeString": "bytes32[] storage ref"
                    }
                  },
                  "functionReturnParameters": 384,
                  "id": 386,
                  "nodeType": "Return",
                  "src": "5953:20:0"
                }
              ]
            },
            "documentation": null,
            "id": 388,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allCandidates",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 380,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5904:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 384,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 383,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 388,
                  "src": "5929:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[] memory"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 381,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "5929:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 382,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "5929:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[] storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5928:11:0"
            },
            "scope": 389,
            "src": "5882:98:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 390,
        "src": "97:5895:0"
      }
    ],
    "src": "0:5994:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.21+commit.dfe3193c.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {},
      "links": {},
      "address": "0x345ca3e014aaf5dca488057592ee47305d9b3e10",
      "transactionHash": "0xa36635293a406703954b4f0524592679b60ed5fb9c79079262ba0afc7f25e194"
    },
    "1524174383229": {
      "events": {},
      "links": {},
      "address": "0x55ea2a65a9904663206ccd006b0949f54bca0c86",
      "transactionHash": "0x04745ec6a59a2548d3588eee49b5c8c010e3442db239efd0b48254a0d7edcce5"
    },
    "1524205912818": {
      "events": {},
      "links": {},
      "address": "0xaebc671b988b482e8c6660666453907cf2089c94",
      "transactionHash": "0x5bcdd5e438a620b7036d19150f30e42d1e9217c68b7b9ec94bbba1d2ecbb48b0"
    },
    "1524212716936": {
      "events": {},
      "links": {},
      "address": "0xe5aa833b0ae044e55ea07454c38280d8addc5f04",
      "transactionHash": "0x5bcdd5e438a620b7036d19150f30e42d1e9217c68b7b9ec94bbba1d2ecbb48b0"
    }
  },
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-05-01T15:51:28.668Z"
}
var address;
let provider = new Web3(
  new Web3.providers.HttpProvider("http://localhost:7545")
);
let candidates = {};

let Voting = contract(voting_artifacts);
Voting.setProvider(provider.currentProvider);
import Service from "../../services/UserServices";
export default {
  name: "token",
  data() {
    return {
      pin: "",
      address : ""
    };
  },
  methods: {
     buyTokens: function() {
        this.$http
      .get("http://localhost:3000/api/user/getPeople/" + localStorage.getItem('connectedUser'))
      .then(function(response) {
        console.log(response.data)
        this.address = response.data.address;
        address = this.address
      });
       console.log(this.address)
      let tokensToBuy = 1;
      let price = tokensToBuy;
     /* window.web3.eth.getAccounts(function(err, accounts) {
        console.log(accounts[0]);
      });*/
      Voting.deployed().then(function(contractInstance) {
        contractInstance
          .buy({
            value: provider.toWei(price, "ether"),
            from: address
          })
          .then(function(v) {
            provider.eth.getBalance(contractInstance.address, function(
              error,
              result
            ) {
              if (!error)
                console.log(
                  window.web3.fromWei(result.toString()) +
                    " Ether" +
                    contractInstance.address
                );
              else console.error(error);
            });
          });
      });
       this.$router.push({ name:"vote"});
    },
    
  },
  created : function(){
     
       
  },
};
</script>

<style>

</style>

