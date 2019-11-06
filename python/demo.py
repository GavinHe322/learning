# 求 s = a + a + aaa + aaa + aa... 的值，其中 a 是一个数字，
# 列如 3 + 22 + 222 + 2222 + 22222 此时有五个数相加 几个数相加由键盘控制

# a = input('被加数')
# n = int(
#     input('加几次')
# )
# for i in range(n):
#     res = int(a)
#     a += a[0]
#     print('结果是: ', res)

import requests


params = {
    'from': 'SHA',
    'to': 'WUH',
    'date': '20191212',
    'searchkey': 'C1A8732CAB92462AB2D8527ACF2FC7762727AD3285C54264DAC875F053EC8D2A051B8168F3AA3420'
}

headers = {
    'cookie': '_abtest_userid=fa88c3f1-af41-44ef-ad6f-46f7754a3713; _ga=GA1.2.1870731594.1564831475; _RSG=M1q.u.QNEN9jZNcp2HcleA; _RDG=28fa8ee87a4c3e2a733a5379a7aa7eb6ca; _RGUID=95ce5daf-b8fb-4056-aa2f-9910b39978ed; __zpspc=9.2.1566107897.1566107897.1%233%7Cwww.ttlsa.com%7C%7C%7C%7C%23; _jzqco=%7C%7C%7C%7C1566107897591%7C1.1720610912.1564831474652.1564831500576.1566107897105.1564831500576.1566107897105.0.0.0.4.4; Union=AllianceID=4901&SID=1543405&OUID=; Session=SmartLinkCode=U1543405&SmartLinkKeyWord=&SmartLinkQuary=&SmartLinkHost=&SmartLinkLanguage=zh; DomesticUserHostCity=CAN|%b9%e3%d6%dd; _gid=GA1.2.1805073544.1573021344; _gat=1; _RF1=27.46.135.176; MKT_Pagesource=PC; _bfi=p1%3D151001%26p2%3D600005579%26v1%3D7%26v2%3D6; appFloatCnt=1; gad_city=a4f35f7b1b0a14c597bf3a50fb024f55; _bfa=1.1564831471285.4fe6lo.1.1566107893369.1573021337930.3.8; _bfs=1.3',
    'if-modified-since': 'Thu, 01 Jan 1970 00:00:00 GMT',
    'referer': 'https://flights.ctrip.com/actualtime/SHA-WUH/t20191212'
}

r = requests.get('https://flights.ctrip.com/process/FlightStatus/FindByCityWithJson', params, headers = headers)

print(
    r.json()
)
