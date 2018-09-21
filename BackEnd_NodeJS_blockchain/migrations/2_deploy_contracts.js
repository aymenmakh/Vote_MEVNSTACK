
var Voting = artifacts.require("./Voting.sol");
module.exports = function(deployer) {
  //let baseInstance;
 deployer.deploy(Voting, 1000, web3.toWei('0.55', 'ether'),['sebsi','marzouki'],85600000,{gas: 6600000});
 /*
 deployer.deploy(Voting)
 .then(() => Voting.deployed(1000, web3.toWei('0.55', 'ether'),['aymen','salah'],85600000,{gas:6600000})
     .then((instance) => baseInstance = instance)
 )
};
*/
}
