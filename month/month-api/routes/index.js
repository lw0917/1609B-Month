/*
 * @Author: LiWei 
 * @Date: 2018-12-21 14:59:26 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-12-25 10:36:36
 */
var express = require('express');
var router = express.Router();
var query=require('../mysql');
var uuid=require('uuid');

/* GET home page. */
//获取收入或支出的图标
router.get('/api/icon-list', function(req, res, next) {
         var type=req.query.type;
        query('select * from `icon-list` where type=?',[type],function(err,result){
             if(err){
               return  res.json({code:0,msg:err})
             }else{
              res.json({code:1,msg:result})
             } 
        }) 
});

//添加账单
router.get('/api/addList', function(req, res, next) {
  var type=req.query.types;
  var url=req.query.url;
  var num=req.query.num;
  var name=req.query.names;
 query('insert into `bill-list` (url,type,num,name) values (?,?,?,?)',[url,type,num,name],function(err,result){
      if(err){
          res.json({code:0,msg:err})
      }else{
       res.json({code:1,msg:'添加成功',data:result})
      } 
   }) 
});

//查询所有账单
router.get('/api/bill-list', function(req, res, next) {
 query('select * from `bill-list`',function(err,result){
      if(err){
        return  res.json({code:0,msg:err})
      }else{
       res.json({code:1,msg:result})
      } 
 }) 
});


module.exports = router;
