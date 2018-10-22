import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:3001',
  headers:{
    // .header("Content-Type", "application/json;charset=utf-8");
      'Content-Type':'application/json;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'x-requested-with':'XMLHttpRequest'
  },
  withCredentials:true   //加了这段就可以跨域了
});

// var baseURL = '';
// instance.interceptors.request.use(config => {
//   baseURL = config.url;
//   return config
// }, error => {
//   return Promise.reject(error)
// });

// instance.interceptors.response.use(
//   res => {
//     return res;
//   },
//   error => {
//     console.log(error.response)
//     // 下载unMarkBuffer任务出错,请用F5快捷键手动刷新
//     if (error.response.config.url.indexOf("GetUnMarkBuffer")!=-1) {
//       Message({
//         showClose: true,
//         message:'下载unMarkBuffer任务出错,请用F5快捷键手动刷新',
//         type: "error",
//         duration:3000
//       });
//     } else if (error.response.config.url.indexOf("AddFavorite")!=-1) {
//       Message({
//         showClose: true,
//         message:'保存收藏夹出错',
//         type: "error",
//         duration:3000
//       });
//     }  else {
//       Message({
//         showClose: true,
//         message:'网络错误',
//         type: "error",
//         duration:3000
//       });
//     }

//     return Promise.reject(error);
//   }
// );

export default instance;
