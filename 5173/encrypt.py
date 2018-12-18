import re

import requests
import execjs


def get_js():
    with open('./encrypt.js', 'r') as f:
        js_data = f.read()
    return js_data


def get_pwdkey():
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    }
    url = 'https://passport.5173.com/?'
    r = requests.get(url, headers=headers)
    print(r.status_code, r.encoding, r.history, sep='\n')
    html = r.text
    with open('a.html', 'w', encoding='utf-8') as f:
        f.write(html)
    pwd_key = re.search('PasswordKey:"(.*?)",', html).group(1)
    return pwd_key


def encrypt(pwd):
    pwd_key = get_pwdkey()
    js_data = get_js()
    ctx = execjs.compile(js_data)
    encrypt_data = ctx.call('encrypt', str(pwd), str(pwd_key))
    return encrypt_data


if __name__ == '__main__':
    pwd = ''
    encrypt_data = encrypt(pwd)
    print(encrypt_data)
