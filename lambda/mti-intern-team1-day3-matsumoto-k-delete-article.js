const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();
const tableName = "Article";

exports.handler = (event, context, callback) => {
  //雛形
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ message: "" }),
  };

   //トークンの認証
   if(event.headers.authorization !=="mtiToken"){
     response.statusCode = 401;
     response.body = JSON.stringify({
       message: "tokenが不正です",
     });
     callback(null, response);
     return;
   }

  //リクエストボディの情報をオブジェクトに変換
  const body = JSON.parse(event.body);
  
  //削除したいデータの特定に使う変数を定義
  const userId = body.userId;
  const timestamp = body.timestamp;

  //削除対象のテーブル名と削除したいデータのkeyをparamに設定
  const param = {
    TableName: tableName,
    Key:{
      userId,
      timestamp
    }
  };

  //dynamo.delete()を用いてデータを削除
  dynamo.delete(param, function (err, data) {
    if (err) {
      response.statusCode = 500;
      response.body = JSON.stringify({
        message: "予期せぬエラーが発生しました",
      });
      callback(null, response);
      return;
    } else {
      //削除に成功した場合の処理を記述
      response.body =JSON.stringify({
        message: "success"
      });
      callback(null, response);
      return;
    }
  });
};
