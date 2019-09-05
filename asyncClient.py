from tornado.httpclient import  HTTPClient,AsyncHTTPClient

def sync_fecth(url):
    http_client=HTTPClient()
    response=http_client.fetch(url)
    return response.body

def aysnc_fetch(url):
    http_client=AsyncHTTPClient()
    def handle_response(response):
        callback(response.body)
    http_client.fetch(url,callback=handle_response)




def main():
    url='http://www.baidu.com'
    s=sync_fecth(url)
    print s


if __name__ == '__main__':
    main()