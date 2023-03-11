const sym = require('/node_modules/symbol-sdk');

const GENERATION_HASH = {
  main:'57F7DA205008026C776CB6AED843393F04CD458E0AA2D9F1D5F31A402072B2D6',
  test:'49D6E1CE276A85B70EAFE52349AACCA389302E7A9754BCF1221E79494FC665A4',
};

const EPOCH={
  main:1615853185,
  test:1667250467,
};
const XYM_ID ={
  main:'6BED913FA20223F8',
  test:'72C0212E67A08BCE',
}; 
const NODE_URL={
  main:'https://symbol-mikun.net:3001',
  test:'https://mikun-testnet.tk:3001',
};
const NET_TYPE ={
  main:sym.NetworkType.MAIN_NET,
  test:sym.NetworkType.TEST_NET,
};

const repo = new sym.RepositoryFactoryHttp(NODE_URL.main);
const accountRepo = repo.createAccountRepository();
const rxRepo = repo.createTransactionRepository();

let nodesArray = [];
let edgesArray = [];


function Load(){
  console.log('load')
  fetch('https://script.google.com/macros/s/AKfycbzBJUS17bANn157YRcvBRQnR6KzMU8tXVAApGDjZQUCFWdgWx-rnhu_1QBfWIEzfjm-dA/exec')
    .then(result => result.json())
    .then((nodesArray) => {
//      console.log('Output: ', output);


      console.log('hey');
      (async() =>{
        const accountInfo = await accountRepo.getAccountInfo('NC53DFCN4KX5QKSX5CANTE2JJTH2MSR7OMNCRPQ').toPromise();
        console.log("this:");
      });



    // nodesArray.forEach(nds=>{
    //   console.log(nds.id);
    //   (async() =>{
    //     const accountInfo = await accountRepo.getAccountInfo(nds.id).toPromise();
    //     console.log(accountInfo);
    //   });
    // });      


      // var nodes = new vis.DataSet(nodesArray);
      // console.log(nodes);
      var options ={
        nodes: {
          borderWidth: 4,
          size: 30,
          color: {
            border: "#222222",
            background: "#666666",
          },
          font: { color: "#eeeeee" },
        },
      }
      // console.log(nodesArray);
      var container = document.getElementById('network');
      var data = {
        nodes:nodesArray,
      };
      var network = new vis.Network(container,data,options);


    }).catch(err => console.error(err));
}
