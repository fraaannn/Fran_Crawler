function md5(e) {
    var t = "0123456789abcdef"
      , n = function(e) {
        var n = "";
        for (j = 0; j <= 3; j++)
            n += t.charAt(e >> 8 * j + 4 & 15) + t.charAt(e >> 8 * j & 15);
        return n
    }
      , a = function(e) {
        for (nblk = (e.length + 8 >> 6) + 1,
        blks = new Array(16 * nblk),
        i = 0; i < 16 * nblk; i++)
            blks[i] = 0;
        for (i = 0; i < e.length; i++)
            blks[i >> 2] |= e.charCodeAt(i) << i % 4 * 8;
        return blks[i >> 2] |= 128 << i % 4 * 8,
        blks[16 * nblk - 2] = 8 * e.length,
        blks
    }
      , s = function(e, t) {
        var n = (65535 & e) + (65535 & t)
          , i = (e >> 16) + (t >> 16) + (n >> 16);
        return i << 16 | 65535 & n
    }
      , o = function(e, t) {
        return e << t | e >>> 32 - t
    }
      , r = function(e, t, n, i, a, r) {
        return s(o(s(s(t, e), s(i, r)), a), n)
    }
      , l = function(e, t, n, i, a, s, o) {
        return r(t & n | ~t & i, e, t, a, s, o)
    }
      , c = function(e, t, n, i, a, s, o) {
        return r(t & i | n & ~i, e, t, a, s, o)
    }
      , p = function(e, t, n, i, a, s, o) {
        return r(t ^ n ^ i, e, t, a, s, o)
    }
      , d = function(e, t, n, i, a, s, o) {
        return r(n ^ (t | ~i), e, t, a, s, o)
    }
      , u = function(e) {
        x = a(e);
        var t = 1732584193
          , o = -271733879
          , r = -1732584194
          , u = 271733878;
        for (i = 0; i < x.length; i += 16) {
            var f = t
              , h = o
              , m = r
              , g = u;
            t = l(t, o, r, u, x[i + 0], 7, -680876936),
            u = l(u, t, o, r, x[i + 1], 12, -389564586),
            r = l(r, u, t, o, x[i + 2], 17, 606105819),
            o = l(o, r, u, t, x[i + 3], 22, -1044525330),
            t = l(t, o, r, u, x[i + 4], 7, -176418897),
            u = l(u, t, o, r, x[i + 5], 12, 1200080426),
            r = l(r, u, t, o, x[i + 6], 17, -1473231341),
            o = l(o, r, u, t, x[i + 7], 22, -45705983),
            t = l(t, o, r, u, x[i + 8], 7, 1770035416),
            u = l(u, t, o, r, x[i + 9], 12, -1958414417),
            r = l(r, u, t, o, x[i + 10], 17, -42063),
            o = l(o, r, u, t, x[i + 11], 22, -1990404162),
            t = l(t, o, r, u, x[i + 12], 7, 1804603682),
            u = l(u, t, o, r, x[i + 13], 12, -40341101),
            r = l(r, u, t, o, x[i + 14], 17, -1502002290),
            o = l(o, r, u, t, x[i + 15], 22, 1236535329),
            t = c(t, o, r, u, x[i + 1], 5, -165796510),
            u = c(u, t, o, r, x[i + 6], 9, -1069501632),
            r = c(r, u, t, o, x[i + 11], 14, 643717713),
            o = c(o, r, u, t, x[i + 0], 20, -373897302),
            t = c(t, o, r, u, x[i + 5], 5, -701558691),
            u = c(u, t, o, r, x[i + 10], 9, 38016083),
            r = c(r, u, t, o, x[i + 15], 14, -660478335),
            o = c(o, r, u, t, x[i + 4], 20, -405537848),
            t = c(t, o, r, u, x[i + 9], 5, 568446438),
            u = c(u, t, o, r, x[i + 14], 9, -1019803690),
            r = c(r, u, t, o, x[i + 3], 14, -187363961),
            o = c(o, r, u, t, x[i + 8], 20, 1163531501),
            t = c(t, o, r, u, x[i + 13], 5, -1444681467),
            u = c(u, t, o, r, x[i + 2], 9, -51403784),
            r = c(r, u, t, o, x[i + 7], 14, 1735328473),
            o = c(o, r, u, t, x[i + 12], 20, -1926607734),
            t = p(t, o, r, u, x[i + 5], 4, -378558),
            u = p(u, t, o, r, x[i + 8], 11, -2022574463),
            r = p(r, u, t, o, x[i + 11], 16, 1839030562),
            o = p(o, r, u, t, x[i + 14], 23, -35309556),
            t = p(t, o, r, u, x[i + 1], 4, -1530992060),
            u = p(u, t, o, r, x[i + 4], 11, 1272893353),
            r = p(r, u, t, o, x[i + 7], 16, -155497632),
            o = p(o, r, u, t, x[i + 10], 23, -1094730640),
            t = p(t, o, r, u, x[i + 13], 4, 681279174),
            u = p(u, t, o, r, x[i + 0], 11, -358537222),
            r = p(r, u, t, o, x[i + 3], 16, -722521979),
            o = p(o, r, u, t, x[i + 6], 23, 76029189),
            t = p(t, o, r, u, x[i + 9], 4, -640364487),
            u = p(u, t, o, r, x[i + 12], 11, -421815835),
            r = p(r, u, t, o, x[i + 15], 16, 530742520),
            o = p(o, r, u, t, x[i + 2], 23, -995338651),
            t = d(t, o, r, u, x[i + 0], 6, -198630844),
            u = d(u, t, o, r, x[i + 7], 10, 1126891415),
            r = d(r, u, t, o, x[i + 14], 15, -1416354905),
            o = d(o, r, u, t, x[i + 5], 21, -57434055),
            t = d(t, o, r, u, x[i + 12], 6, 1700485571),
            u = d(u, t, o, r, x[i + 3], 10, -1894986606),
            r = d(r, u, t, o, x[i + 10], 15, -1051523),
            o = d(o, r, u, t, x[i + 1], 21, -2054922799),
            t = d(t, o, r, u, x[i + 8], 6, 1873313359),
            u = d(u, t, o, r, x[i + 15], 10, -30611744),
            r = d(r, u, t, o, x[i + 6], 15, -1560198380),
            o = d(o, r, u, t, x[i + 13], 21, 1309151649),
            t = d(t, o, r, u, x[i + 4], 6, -145523070),
            u = d(u, t, o, r, x[i + 11], 10, -1120210379),
            r = d(r, u, t, o, x[i + 2], 15, 718787259),
            o = d(o, r, u, t, x[i + 9], 21, -343485551),
            t = s(t, f),
            o = s(o, h),
            r = s(r, m),
            u = s(u, g)
        }
        return n(t) + n(o) + n(r) + n(u)
    };
    return u(e)
}
