from faker import Faker

f=Faker(locale='zh_CN')

for i in range(100):
    print (f.name()+' '+f.address())

for j in range(10):
    print (f.color_name())