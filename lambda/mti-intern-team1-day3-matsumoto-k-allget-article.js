const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();
const tableName = "Article";

exports.handler = (event, context, callback) => {
  //レスポンスの雛形
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ message: "" }),
  };
  
  //取得したいテーブル名をparamオブジェクトに設定する
  const param = {
    TableName: tableName,
    Limit: 100,
  };
  
  //dynamo.scan()で全件取得
  dynamo.scan(param, function (err, data) {
    if (err) {
      response.statusCode = 500;
      response.body = JSON.stringify({
        message: "予期せぬエラーが発生しました",
      });
      callback(null, response);
      return;
    }

    //レスポンスボディの設定とコールバックの記述
    response.body = JSON.stringify(data.Items);
    callback(null, response);
    return;
  });
}
