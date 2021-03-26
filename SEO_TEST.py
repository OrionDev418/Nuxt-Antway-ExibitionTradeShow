import requests
from bs4 import BeautifulSoup

URL = 'http://m.antway.cn'

response_tmp = requests.get(URL)
soup = BeautifulSoup(response_tmp.text, 'lxml')

target = soup.select_one('title')

print(target)