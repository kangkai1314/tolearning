import tornado.httpserver
import tornado.ioloop
import tornado.options
import tornado.web
import tornado.websocket

import pymongo
import os,json

from tornado.options import define,options

define("port",default=8000,help='runnning on ther given port',type=int)

class WorkHandler(tornado.web.RequestHandler):

    def get(self,word):
        coll=self.application.db.word
        print (coll)
        doc=coll.find_one({"word":word})
        print (doc)
        if doc:
            del doc['_id']
            self.write(doc)
        else:
            self.set_status(404,'word not find')

class IndexHandler(tornado.web.RequestHandler):
    def get(self):
        self.render('index.html')

class ApiHandler(tornado.web.RequestHandler):


    def get(self,word):
        db=self.application.db.task
        #results=db.find_one()
        #print(results)
        #print(type(results))
        #a=json.loads(results)
        #result={}
        #result['dataList']=a
        result={}
        result['dataList']=[]
        for i in range(10):
            a={}
            a['id']=i
            a['name']='pythonjob'+str(i)
            result['dataList'].append(a)
        self.write(result)

class AdHandler(tornado.web.RequestHandler):
    pass

class EchoHandler(tornado.websocket.WebSocketHandler):

    def open(self, *args: str, **kwargs: str):
        print('web socket opened')

    def on_message(self, message):
        self.write_message(message)

    def close(self, code: int = None, reason: str = None):
        print('web socket close')


class Application(tornado.web.Application):
    def __init__(self):
        handlers=[(r"/word/(\w+)", WorkHandler),(r"/",IndexHandler),(r"/api/(\w+)",ApiHandler),(r"/chat",EchoHandler)]
        conn=pymongo.MongoClient(host='localhost',port=27017)
        self.db=conn.kangkai
        tornado.web.Application.__init__(self,handlers=handlers,debug=True,template_path=os.path.join(os.path.dirname(__file__),"hello/dist"),static_path=os.path.join(os.path.dirname(__file__), "hello/dist/static"))


if __name__ == '__main__':
    tornado.options.parse_command_line()
    http_server=tornado.httpserver.HTTPServer(Application())
    http_server.listen(options.port)
    tornado.ioloop.IOLoop.instance().start()
