import tornado.httpserver
import tornado.ioloop
import tornado.options
import tornado.web

import pymongo
import os

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

class Application(tornado.web.Application):
    def __init__(self):
        handlers=[(r"/word/(\w+)", WorkHandler),(r"/",IndexHandler)]
        conn=pymongo.MongoClient(host='localhost',port=27017)
        self.db=conn.kangkai
        tornado.web.Application.__init__(self,handlers=handlers,debug=True,template_path=os.path.join(os.path.dirname(__file__),"hello/dist"),static_path=os.path.join(os.path.dirname(__file__), "hello/dist/static"))


if __name__ == '__main__':
    tornado.options.parse_command_line()
    http_server=tornado.httpserver.HTTPServer(Application())
    http_server.listen(options.port)
    tornado.ioloop.IOLoop.instance().start()
