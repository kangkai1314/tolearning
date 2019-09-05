import asyncio
import threading
import requests

@asyncio.coroutine
def hello():
    print('start hello')
    r=yield from asyncio.sleep(1)
    print('end hello')

@asyncio.coroutine
def hello1():
    print('Hello world! (%s)' % threading.currentThread())
    yield from asyncio.sleep(1)
    print('Hello again! (%s)' % threading.currentThread())


@asyncio.coroutine
def wget(url):
    print('start get html %s'%(url))


async def function():
    return 1





tasks=[hello1(),hello1()]

loop=asyncio.get_event_loop()
loop.run_until_complete(asyncio.wait(tasks))
loop.close()
