1. 首先在app.module.ts文件中导入pipe文件
import {app.pipe.ts} from "./app.pipe";
declarations: [AppPipe]

2. 定义管道文件 app.pipe.ts
  // 1. 导入管道模块
  import { Pipe, PipeTransform } from '@angular/core';
  // 2. 定义管道名称
  @Pipe({name: 'appPipe'})
  // 书写管道逻辑
  export class AppPipe implements PipeTransform {
      // transfrom中接受第一个参数,是获取界面上的值, 第二个参数是参数冒号后面带的值,第二个是可选参数
      transform(value: String) {
          var arr = value.split(",");
          var str = "";
          for(var i = 0; i < arr.length; i++) {
              str += arr[i] + "分割重组";
          }
          return str;
      }
  }
