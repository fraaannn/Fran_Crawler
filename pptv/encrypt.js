function enCode(k, j) {
    for (var j = j, o = k.length, n = j.length, m = "", l = 0; o > l; l++) {
        m += String.fromCharCode(k.charAt(l).charCodeAt(0) + j.charAt(l % n).charCodeAt(0))
    }
    return enCodeFun(m)
}

function enCodeFun(k) {
    if (!/([^\u0000-\u00ff])/.test(k)) {
        for (var j, p, o, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", m = 0, l = []; m < k.length;) {
            switch (j = k.charCodeAt(m),
                o = (m + 1) % 3) {
                case 1:
                    l.push(n.charAt(j >> 2));
                    break;
                case 2:
                    l.push(n.charAt((3 & p) << 4 | j >> 4));
                    break;
                case 0:
                    l.push(n.charAt((15 & p) << 2 | j >> 6)),
                        l.push(n.charAt(63 & j))
            }
            p = j,
                m++
        }
        return 1 == o ? (l.push(n.charAt((3 & p) << 4)),
            l.push("==")) : 2 == o && (l.push(n.charAt((15 & p) << 2)),
            l.push("=")),
            l.join("")
    }
}

// encrypt params
function encrypt(account, pwd, captcha) {
    var d = "type=ajax&from=web&appplt=web&appid=vas" + "&username=" + account + "&password=" + pwd + "&vcode=" + captcha;
    d = encodeURIComponent(d)
    return enCode(d, "ppvaslogin")


}