import random
import json

import requests
import execjs

def get_js():
    with open('./pwdEncrypt.js', 'r', encoding='utf-8') as f:
        js_str = f.read()
    return js_str

def get_data(account):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36',
        'Referer': 'http://www.doyo.cn/passport/login',
    }
    url = 'http://www.doyo.cn/User/Passport/token?username={0}&random={1}'.format(account, str(random.random())[0:17])
    r = requests.get(url, headers=headers)
    data = json.loads(r.text)
    return data

def get_encrypt_pwd(account, password):
    data = get_data(account)
    js_str = get_js()
    ctx = execjs.compile(js_str)
    encrypt_pwd = ctx.call('pwdEncrypt', password, data['nonce'], data['ts'])
    return encrypt_pwd

if __name__ == '__main__':
    account = ''
    pwd = ''
    encrypt_pwd = get_encrypt_pwd(account, pwd)
    print(encrypt_pwd)
