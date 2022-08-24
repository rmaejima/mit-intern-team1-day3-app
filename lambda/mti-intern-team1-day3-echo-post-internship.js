exports.handler = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({ message: '' }),
  };

  //TODO: 変数rbodyにリクエストボディのJavaScriptオブジェクトを代入してください。

  //TODO: responseオブジェクトのbodyプロパティに変数rbodyを代入

  //コールバック関数でレスポンスを返す
  callback(null, response);
};
