#!E:\Python-3.6\python.exe
import cgi, cgitb, time
user = cgi.FieldStorage().getvalue('user')
#user = 'priyesh'
fhandler = open("user.txt", "r")
userVal = fhandler.read()
fhandler.close();
colorVal = ""
if (userVal == "" ):
    colorVal = 'white'
    fhandler = open('user.txt', 'w')
    fhandler.write(user)
    fhandler.close()
    val = True
    value = 0
    while (val):
        fhandler = open('user.txt', 'r')
        userVal = fhandler.read()
        if (userVal != user):
            val = False
        time.sleep(1)
        value = value + 1
        if ( value == 15 ):
            val = False
            fhandler = open('user.txt', 'w')
            fhandler.write('')
            fhandler.close()
    fhandler = open(user+".txt", 'w')
    fhandler.write(userVal)
    fhandler.close()
else:
    colorVal = 'black'
    fhandler = open('user.txt', 'w')
    fhandler.write(user)
    fhandler.close()
    fhandler = open(user+".txt", 'w')
    fhandler.write(userVal)
    fhandler.close()
    time.sleep(1)
fhandler = open('user.txt', 'w')
fhandler.write('')
fhandler.close()
#st = "<script>newGame.PlayerTwo = '"+userVal+"';newGame.color = '"+colorVal+"';</script>"
st = userVal+"-"+colorVal.rstrip('\n')
print("Content-type: text/html\n")
print(st)
    
