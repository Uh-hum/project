import Mock from "mockjs";
// 将json数据格式引入, 【JSON和图片默认对外暴露，无需export】
import banner from './banner.json'
import floor from './floor.json'

// mock数据，第一个参数为请求地址，第二个参数为请求数据
Mock.mock("/mock/banner", {code: 200, data: banner})
Mock.mock("/mock/floor", {code: 200, data: floor})

// 使用步骤
// 1. 在项目当中src文件夹中创建mock文件夹
// 2. 准备JSON数据
// 3. 将mock数据需要的图片放置到public文件夹中
// 4. 创建mockServe.js 通过mock.js来实现模拟数据
// 5. mockServe.js文件在入口文件中引入
// 
