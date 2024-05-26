************************NODE CLASS 2***********************************

CRUD APIs

Notes:

* Firebase:
- DB + ready made APIs
{
    title: "Infinix", description, amount, comments: [{ userId: 'kashif', message: 'boht barihya!'}, { userId: 'kashif', message: 'boht barihya!'}]
}

* Mongodb:
- DB
- For APIs: Nodejs/Expressjs

Databases:
=========

SQL vs NOSQL
Relation databases vs Non-Relational database
DBMS => Database Management System

SQL: Banking Product (Transactions) payment ka kam zada hota ha to SQL use hota ha 
- SQLlite
- Oracle
- MySQL

NOSQL: (Non transactions) //No SQL Database ki categories ha payments ka kam km hota ha 
- Firebase
- Mongodb

DMS Data Management System //agr apko databse ka course krna ho ya deep self learning krni ho to youtue ya other jga se kar skte ho

abhi hmne static api ka data ki tarhn rakh kar api kay  through kam kr rahy hn (ye DB mtlb mongoDb database sy krte hn) sample data sy hm example kr k dekh rahy hn
agr hmny ksi bh dynamic api ya router pr kam krte thy tw kaise krte thy us ky lye hm id agyg koe bh rakte thy or requst.params k throhg nikalte thy
yhn par bh requst.params k through he kia or console me lia to terminal par ajayegi

or idhr bh yahn ay jb hm /kr k kuch bh den id 1,2 to us ki single data aye tw :id or ye id log me ab ye id rakh di mile gi kaise to react me useparams sy component  me milti thi or nextjs me 
props.params sy milti thi to yhn req.params.id sy milegi or consol terminal pr mila ga or res.send message dekar , data: data[req.params.id] de dia params k through id nikali jati ha to id k zariye nikali 

// prodct ko add krne k lye user aye (example olx)
//add/post 1 he ha 
add/post ki api kaise bnygi router.post or route name k is path me add hona ha to product to file ka name ha to produt to ayega he product add fontend sy call krte hn
prodct/add par post requ ye jb ho to us par response milega or res.send msg dia ab Q ha prodct add ksie krengy
is api ko frontend sy fetch call kaise karengy jb ap local pr prodct k bad add likh kar enter karogy to single chalegi get k req chali di fetch chlya wo post ki req consider nh ki

fetch ko btnana parega prodt k agay /add or method capital me "POST" (3no me btana parega add, update, delete agy post kr k mention karoyg 3no me)  backend ki language me put ko update he khte hn 

From Frontend
==============

fetch('http://localhost:3001/products/add', {
    method: "POST"
})
.then(res => res.json())
.then(res => console.log(res.message));    //add par ye req lgai ha frontend sy

or console me 'req', req   kia to bhoot sra code ayega phir ctrl f kr k search krlo. req.body karengy to body me code ayega or body k andr jo data 
bhejengyg to usko stringify kr k bhejengy direct body hazam nh hogi is lye stringify (add/update or delete me hm isko index.mjs file me alag sy btaengy  app.use(express.json())
ye server ko bta rha ha body json formate me ayegi ab body aye lakin empty arahi ha or frontend sy json bhej rahy ho headers k andr 1 chez bta te hn 'Content-Type': 'application/json' ha  
----------------------------------------------------------
From Frontend                             pora yeh ha frontend par 
==============

fetch('http://localhost:3001/products/add', {
   method: "POST",
   headers: {
           'Content-Type': 'application/json'
   },
    body: JSON.stringify({
         title: 'Iphone',
         description: 'abcd',
         price: 5000
    )}
  })
 .then(res => res.json())
 .then(res => console.log(res))

////product/update pth name put sy put/update req me exmpl title or descript update krna ha to id bh dogy maybe frontend sy k is id ka data update
krna ha         update me products/update ye localhost me lgaengy

////product/delete 
delete krte wqt apko body nh chhaye bulky id chahye id k through delete karengy :/id  single wle ki trhn 
---------------------
fetch('http://localhost:3001/products/7', {
    method: "DELETE",
})
.then(res => res.json())
.then(res => console.log(res))
----------------------
body ap bhej nh rahhy is lye header hta dia 

or agr ap post me get aysi galat req bhejen to 404 error dega 




firebase bnae hoe apis bh de rha ha or DB bh de raha ha 
or jb tk mongoDb only DB ha apis bnai hoe nh de raha ha api hm nodeJs par bna rahe han or api node express par bna rahe han 
or mongoDb me databse alag or api alg bnanai ha 

product ka scope limited ha zada queries nh ha to firebase use hoga queries mtlb database sy data lanay ko

comment 1 array of obj ha jis k andr 1 user id hogi (comment k baarya me youtube ya chat or google par search krlo) 