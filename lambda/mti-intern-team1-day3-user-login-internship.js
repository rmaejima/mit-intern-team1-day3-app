const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();
const tableName = "User";

exports.handler = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ message: "" }),
  };

  const body = JSON.parse(event.body);

  const userId = body.userId;
  const password = body.password;

  //TODO: query()に渡すparamを宣言
  const param = {
    TableName: ,
    //キー、インデックスによる検索の定義
    KeyConditionExpression: "",
    //プライマリーキー以外の属性でのフィルタ
    FilterExpression: "",
    //検索値のプレースホルダの定義
    ExpressionAttributeValues: {
    },
  };

  //dynamo.query()を用いてuserIdとpasswordが一致するデータの検索
  dynamo.query(param, function (err, data) {
    //userの取得に失敗
    if (err) {
      console.log(err);
      response.statusCode = 500;
      response.body = JSON.stringify({
        message: "予期せぬエラーが発生しました",
        err: err
      });
      callback(null, response);
      return;
    }
    //TODO: 該当するデータが見つからない場合の処理を記述(ヒント：data.Itemsの中身が空)

    //TODO: 認証が成功した場合のレスポンスボディとコールバックを記述

  });
};
