import requests

class transCookie:
    def __init__(self, cookie):
        self.cookie = cookie

    def stringToDict(self):
        itemDict = {}
        items = self.cookie.split(';')
        for item in items:
            key = item.split('=')[0].replace(' ', '')
            value = item.split('=')[1]
            itemDict[key] = value
        return itemDict




#r=requests.get('http://localhost:8000/api/job')
#print r.json()
headers={
    'User-Agent':'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36'
}
str_cookies='user_trace_token=20170719161518-66ebd4bd-6c5a-11e7-ab59-5254005c3644; LGUID=20170719161518-66ebdac9-6c5a-11e7-ab59-5254005c3644; _ga=GA1.2.807863775.1500452120; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2216c8901308d6a-065b90b05336fa-3c375f0d-1049088-16c8901308e53%22%2C%22%24device_id%22%3A%2216c8901308d6a-065b90b05336fa-3c375f0d-1049088-16c8901308e53%22%7D; LG_LOGIN_USER_ID=e2159407feac991bb8eb3cfe6aacf6e5292f5d10e212ff2a; LG_HAS_LOGIN=1; index_location_city=%E6%9D%AD%E5%B7%9E; JSESSIONID=ABAAABAABEEAAJA494C27582913A8254EC8326164E60078; WEBTJ-ID=20190903150417-16cf5f03d43497-0e4c653a0044c2-3c375c0f-1049088-16cf5f03d4487d; _gid=GA1.2.1438445325.1567494260; Hm_lvt_4233e74dff0ae5bd0a3d81c6ccf756e6=1565666641,1565862127,1567058634,1567494260; TG-TRACK-CODE=search_code; LGSID=20190903154445-b2dc007d-ce1e-11e9-a508-5254005c3644; PRE_UTM=; PRE_HOST=; PRE_SITE=; PRE_LAND=http%3A%2F%2Flocalhost%2Fnovel%2Fa.html%3F_ijt%3Dl8tasvi14h8e6npn2mc4uckqg9; X_MIDDLE_TOKEN=88603a0f803891d320c2c1c371eaea28; X_HTTP_TOKEN=39a0bbd91813374179479476518ad2d96733cfa11d; Hm_lpvt_4233e74dff0ae5bd0a3d81c6ccf756e6=1567497500; _gat=1; LGRID=20190903155818-974c5861-ce20-11e9-a508-5254005c3644; SEARCH_ID=8c7db50eb86546b6b665f55698126a48'
cookies=transCookie(str_cookies).stringToDict()
print cookies
r=requests.post('https://www.lagou.com/jobs/positionAjax.json?city=%E6%9D%AD%E5%B7%9E&needAddtionalResult=false',
        data={'first':'true','pn':1,'kd':'python'},
            cookies=cookies,headers=headers)
print r
print r.json(

)['msg']





