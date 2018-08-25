#!E:\Python-3.6\python.exe
import cgi, cgitb, time
p1 = cgi.FieldStorage().getvalue('p1')
p2 = cgi.FieldStorage().getvalue('p2')
move = cgi.FieldStorage().getvalue('move')
#p1 = 'priyesh'
#p2 = 'neha'
#move = 'd2d3'
time.sleep(2)
if (move != '#'):
    fhandler = open(p1+'.txt', 'w')
    fhandler.write(move)
    fhandler.close()
fhandler = open(p2+'.txt', 'r')
userMove = fhandler.read()
newMove = fhandler.read()
fhandler.close()
val = True;
while (val):
    time.sleep(1)
    fhandler = open(p2+'.txt', 'r')
    newMove = fhandler.read()
    fhandler.close()
    if (newMove != userMove):
        val = False
print("Content-type: text/html\n")
print(newMove)
