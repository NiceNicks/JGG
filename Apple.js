
/*
苹果社区直播解锁付费房
正则表达式：http:\/\/app\.hust365\.com\/api\/public\/\?service\=Live\.checkLive
hostname：app.hust365.com
*/

body = $response.body.replace(/\"type":"\d"/, '\"type": "0"')
$done({body});
