const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();
const tableName = "Article";

exports.handler = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ message: "" }),
  };
  
  //イベントの内容をオブジェクトに加工
  const body = JSON.parse(event.body);
  
  //DBに登録するための情報をparamオブジェクトとして宣言する
  const param = {
    TableName: tableName,
    Item:{
      userId: body.userId, //リクエストボディのUserId
      timestamp: Date.now(), //現在時刻
      text: body.text, //リクエストボディのtext
      category: body.category, //リクエストボディのcategory
    }
  };
  
  //「userId」,「text」が埋まっていれば、DBにデータを登録
  if (!param.Item.userId || !param.Item.text ) {
    response.statusCode = 400;
    response.body = JSON.stringify({ message: "パラメータが足りません" });
    callback(null, response);
    return;
  } else{
    dynamo.put(param, function (err, data) {
    if (err) {
      response.statusCode = 500;
      response.body = JSON.stringify({
        message: "予期せぬエラーが発生しました",
      });
      callback(null, response);
      return;
    } else {
      response.body =JSON.stringify({
        message: param.Item
      })
      callback(null, response);
      return;
    }
    });
  }
  
};
