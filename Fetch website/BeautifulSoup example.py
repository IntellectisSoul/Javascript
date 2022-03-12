import requests
from bs4 import BeautifulSoup
import smtplib

headers = {
    "User-agent": 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36'}

URL = 'https://www.amazon.de/dp/B07XVWXW1Q/ref=sr_1_10?keywords=laptop&qid=1581888312&sr=8-10'
def amazon_de():

    page = requests.get(URL, headers=headers)

    soup = BeautifulSoup(page.content, 'html.parser')

    title = soup.find(id="productTitle").get_text()
    price = soup.find(id="priceblock_ourprice").get_text()
    sep = ','
    con_price = price.split(sep, 1)[0]
    converted_price = int(con_price.replace('.', ''))

    # price
    print(title.strip())
    print(converted_price)