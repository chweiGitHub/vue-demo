
// 以下的两种方式都是可以的 。


// module.exports = {
//   userName: 'spark',
//   say(){
//     return 'hello ';
//   }
// };


exports.userName  = 'emdd';
exports.say = function(){
  return 'world..';
}
