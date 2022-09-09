import os
import re

f = open('H:/_newEWA/dist/CSS/00-font.css','r',encoding='utf-8')

lines = f.readlines()

l=0

names = []

for line in lines:
    if line.find('font-family') > 0:
        name = line.replace('  font-family: "','')
        name = name.replace('";','')
        names.append(name)
    l+=1

for n in names:
    print('')
    print('<p style="font-family:',n,';font-size:18px">')
    print(n,'最近离开父母家，独立出来自己住了。一切浑浑噩噩，不知如何是好……乐园物语123456ABCDEFG吗嘛煸囸昀子曰呜呼哀哉')
    print('</p>')
    print('')

    