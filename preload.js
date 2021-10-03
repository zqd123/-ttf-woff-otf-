// 开发者可以暴露自定义 API 供后加载脚本使用

// preload.js 中使用 nodejs
const { readFile,readFileSync,writeFile  } = require('fs')
const path = require('path');


window.selectLocalFile = function(){
  const files =  utools.showOpenDialog({ 
       filters: [{'name': 'iconFont.ttf',extensions: ['ttf','woff','otf'] }], 
       properties: ['openFile'] 
   })
  //  console.log('选择的文件：',files);
  //  console.log('111:',readFileSync(files[0]));
  //  console.log('222:',path.parse(files[0]));

  //  console.log(writeFile(readFileSync(files[0])))
   //将字节流转成File对象
   if(files){
     var file = new File(
      [readFileSync(files[0])],
      files[0]
    );
    // console.log('file',file);  
     return file;
   }
 }

//  window.showMessage = function(){
//   utools.showMessageBox({
//     type: 'question',
//     buttons: ['取消', '关机'],
//     title: '关机确认',
//     message: '电脑确定要关机?',
//     defaultId: 1
//   })
//  }
