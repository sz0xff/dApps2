const symbol = require('/node_modules/symbol-sdk')

const GENERATION_HASH = '7FCCD304802016BEBBCD342A332F91FF1F3BB5E902988B352697BE245F48E836'
const EPOCH = 1637848847
const XYM_ID = '3A8416DB2D53B6C8'
const NODE_URL = 'https://sym-test.opening-line.jp:3001'
const NET_TYPE = symbol.NetworkType.TEST_NET

const address = symbol.Address.createFromRawAddress("TCHPDXHGRAAL6HFRHDVFXKTFXOA7TI7IP4NEFZA")

console.log("Hello Symbol")
console.log(`Your Address : ${address.plain()}`)

console.log(address.pretty());

const repositoryFactory = new symbol.RepositoryFactoryHttp(NODE_URL)
const accountHttp = repositoryFactory.createAccountRepository()

accountHttp.getAccountInfo(address)
  .toPromise()
  .then((accountInfo) => {
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === XYM_ID) {
        console.log(m.amount);
      }
    }
  })




// const sym = require('/node_modules/symbol-sdk');
// // const GENERATION_HASH = {
// //   main:'57F7DA205008026C776CB6AED843393F04CD458E0AA2D9F1D5F31A402072B2D6',
// //   test:'7FCCD304802016BEBBCD342A332F91FF1F3BB5E902988B352697BE245F48E836',
// // };
// // const EPOCH={
// //   main:1615853185,
// //   test:1637848847,
// // };
// // const XYM_ID ={
// //   main:'6BED913FA20223F8',
// //   test:'3A8416DB2D53B6C8',
// // }; 
// // const NODE_URL={
// //   main:'https://symbol-mikun.net:3001',
// //   test:'https://sym-test.opening-line.jp:3001',
// // };
// // const NET_TYPE ={
// //   main:sym.NetworkType.MAIN_NET,
// //   test:sym.NetworkType.TEST_NET,
// // };

// const GENERATION_HASH = '7FCCD304802016BEBBCD342A332F91FF1F3BB5E902988B352697BE245F48E836'
// const EPOCH = 1637848847
// const XYM_ID = '3A8416DB2D53B6C8'
// const NODE_URL = 'https://sym-test.opening-line.jp:3001'
// const NET_TYPE = sym.NetworkType.TEST_NET


// const repo = new sym.RepositoryFactoryHttp(NODE_URL);
// const accountRepo = repo.createAccountRepository();
// const txRepo = repo.createTransactionRepository();

// let nodesArray = [];
// let edgesArray = [];


// console.log(NODE_URL.test);


// const MyAddress = sym.Address.createFromRawAddress(
//   'TCHPDXHGRAAL6HFRHDVFXKTFXOA7TI7IP4NEFZA'
// );

// console.log(MyAddress);

// const repositoryFactory = new sym.RepositoryFactoryHttp(NODE_URL)
// const accountHttp = repositoryFactory.createAccountRepository()

// accountHttp.getAccountInfo(address)
//   .toPromise()
//   .then((accountInfo) => {
//     for (let m of accountInfo.mosaics) {
//       if (m.id.id.toHex() === XYM_ID) {
//         const dom_xym = document.getElementById('wallet-xym')
//         dom_xym.innerText = `XYM Balance : ${m.amount.compact() / Math.pow(10, 6)}`
//       }
//     }
//   })













// (async()=>{
//   result = await txRepo.search(
//     {
//       group:sym.TransactionGroup.Confirmed,
//       embedded:true,
//       address:MyAddress
//     }
//   ).toPromise();
  
//   txes = result.data;
//   txes.forEach(tx => {
//     console.log(tx);
//   });
  
// })();


// // console.log(MyAddress);
// // accountRepo.getAccountInfo(MyAddress)
// // .toPromise()
// // .then((AccountInfo)=>{
// //   console.log(AccountInfo);
// // });



// function Load(){
//   console.log('load');



//   // (async()=>{
//   //   console.log('start');

//   //   const accountInfo = await accountRepo.getAccountInfo(MyAddress).toPromise();
//   //   console.log('this'&accountInfo);


//   // })();
// }