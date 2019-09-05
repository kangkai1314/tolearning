import tornado.httpserver
import tornado.ioloop
import tornado.web
import os
import tornado.options

from tornado.options import define,options

define("port",default=8080,help='running on the give port',type=int)

class IndexHandler(tornado.web.RequestHandler):
    @tornado.web.asynchronous
    def get(self):
        greeting=self.get_argument('greeting','hello')
        #self.write(greeting+' friendly user !')
        self.render('index.html')

    def post(self, *args, **kwargs):
        print (args,kwargs)

    def write_error(self, status_code, **kwargs):
        if status_code==404:
            self.write('ops url is not existed')

class TestHandler(tornado.web.RequestHandler):

    def get(self):
        self.render('hello.html')


if __name__ == '__main__':
    tornado.options.parse_command_line()
    app=tornado.web.Application(
        handlers=[(r"/",IndexHandler),(r"/test",TestHandler)],
        template_path=os.path.join(os.path.dirname(__file__),"hello/dist"),
        static_path=os.path.join(os.path.dirname(__file__), "hello/dist/static")
    )
    server=tornado.httpserver.HTTPServer(app)
    server.listen(options.port)
    tornado.ioloop.IOLoop.instance().start()