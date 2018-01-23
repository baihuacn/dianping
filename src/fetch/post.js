import 'whatwg-fetch'
import 'es6-promise'

// 将对象拼接成 key1=val1&key2=val2&key3=val3 的字符串形式
function format(params) {
  let str = '';
  params.forEach((value,key)=>{
    str+=`&${key}=${encodeURIComponent(value)}`
  })
  if (str) {
    str = str.slice(1);
  }
  return str;
}

// 发送 post 请求
export function post(url, params) {
  let result = fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: format(params)
  });

  return result;
}
