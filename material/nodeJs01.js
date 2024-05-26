node js backend ka environment ha express js framework ha. or is framework k andr javascript likhte hn
framework restriction lgata ha is he tarikay say kam hoga 
mongoDB backend database ha

// Firebase and MongoDB me difference kia ha 
//firebase thora sa data rakkta ha backend ka thora bhot kam krta ha or ( MongoDB bh firebase ki trhn ha but query zada ha deep tk jta ha firebase deep k lye nh ha )
 

node par kam krne k lye sab sy phly node down & install hona lazmi ha us k bad node -v npm -v check kren node ko 
node js khud kia chez ha wo sirf javsc ko without browser k run krne ka environment ha 

backend or frontend is ka concept : jb bh hm frontend par browser say koe request ja rahi hoti ha google.com enter marte hn tw wo google k server 
k uper jayegi or us server say html file aengy jo load ho jaengi us ssy hm html css ka page nazar ayega 

node download hona chahye or node backend me kam krne k lye sab sy phly pkg.json create krna hoga to command dalo gy (npm init) or ye pochy ga 
version discription name author script sab pr yes krdo phir pkg.json ki file create ho jayegi

Full form of REST API is Representational State Transfer Application Programming Interface 

1 folder or 1 file create or open cmd and npm init and then yes 

index.js file create node index.js  treminal par console likh kra hello world show krwado to apka server helloworld show krwa kar bad ho jayega 

apne apne file and code me changes ki to usko kaise pta chalerga code mein changes hoi ha realtime me show krwane k lye nodemon krte hn 
ye changes realtime me show krta ha Ye ek tool hai jo aapke Node.js ke code ko monitor karta hai. Jab aap koi badlav karte hain,
jese koi file save karte hain, to nodemon automatic taur par aapke server ko restart karta hai, taake aap apne changes ko turant dekh sakein, aur aapko
manually server ko baar baar restart karne ki zarurat nahi hoti.

or isme require ka tag lgta ha jb ap import or export use karogy to require nh lagega express me import or export use hota ha 

app.listen 1 function me use karengy call back function or ye function k andr console mr wadngy kxh bh ab ye server band nh hoga jb tk me band na karo

==========================================================================================

mera server band ho raha ha continiuly chale or live chnages browser par aye to nodemon treminal par install kaaregy  (npm install nodemon)
package.json me nodemaon ajayega 

"start:", "node index.js"     ye sub Debug/script me hoga node.js ko start chalnae k lye (npm start)  //cahlne k lye for example react or next ko chla te hn 
"dev":, "nodemon index.js"    // ab hmy agr server chalengy to (npm run dev) commnd sy chlengy

or jab hm import or export use karengy to mjs kardengy yahn kyun index.mjs file krdi ha hmne is lye or ye new javascript ha Es6
1step. package.json install ki 
hm start karengy
-----------------------------------------------

ab expressjs ko install karegy ( npm install express )

npm install express karegy framework install krdya ha terminal par karegy nodejs me api ko bnane k lye 

.js me export or import nh kar sakte hn 
const express = reqire('express')  ya phir mjs module agr import express use jkrna ha to or 1 ariable me const app = express
app.listen(3001) par server chlata ha 
1 function bnaegy import export Es6 ka ha ye hm new javascript me use krte hn hmny phly require use kia tha ab hmne / use kr k single me ya 
user me jaengy 

app.listen(3001, function () {
console.log('server is at port 3001')
})
is function bnaogy to npm start kar do ye to is function k wja sy server ko zinda rakne k lye 
agr apko server sy live changes dekhani ha to nodemon karna parega 

terminal library express par banegi 
-------------------------
api make code 

app.use('/products', (req, res) => {
const products = is me dummyjson k produsts 2 nikal kar enter kr do

===========================================
=============================================
=======================
=========================
res.send(products)
})

backend ki zanabn me update ko put khte hn
 get post delete put 4 method ha 

produts const k andr in 4 k lye use hoga 1 he mean ha

app k bad use lgya ha (use ka mtlab ha koe bh req aye to use me jo path hoga / k bad wo ussay check kr k jhn jna ha wahn chali jaye
