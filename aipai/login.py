import time

import requests
from hashlib import md5


def login(account, pwd):
    url = 'http://www.aipai.com/login.php'
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36',
        'Referer': 'http://www.aipai.com/',
        'Origin': 'http://www.aipai.com',
        'X-Requested-With': 'XMLHttpRequest',
    }
    pwd_e = md5(str(pwd).encode('utf-8')).hexdigest()
    data = {
        'action': 'loginNew',
        'user': str(account),
        'password': str(pwd_e),
        'keeplogin': '1',
        'comouterTime': '1',
        'userNowTime': str(int(time.time()))
    }
    r = requests.post(url, headers=headers, data=data)
    return r.cookies

if __name__ == '__main__':
    account = ''
    pwd = ''
    cookies = login(account, pwd)
    print(cookies)






