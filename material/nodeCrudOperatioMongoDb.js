CLASS 3 NODE'JS

-------------------88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888


router.id or router.delete and update 
phly router.id krna ha last class me dia tha nodejs ( 26 feb

                                     CLASS 03 
email ai8619233@gmail.com psd Anas12345@12

jab apne 1st time mongo pr enter ho gy to signup and ye apsy kxh Q karega what a primary goal learn mongoDb 2 me new to mongodb or bh Q hongy
ap hm ayengy 1st page par db me akar create krna ha delpoy db me free pr click & create kro region me slect kro konsy regin k server pr store krna ha
& cluster me prj name usually rakhte hn ans123 or tag me environment or 2nd me development rakha
& mongo secuity quickstart pr username & password by default dia ha ap bna bh sakte ho to ap create krlo
ai8619233
XanqTGIplnmnvfJ7     (ab node ka prj me agr mongo ko connect krna hoga to ye username or password dalega or mongoDB conect ho jayega)
us k bad ap sy pochyga local enviro ya cloud environ kis envir me chlaogy localenvir me he chaloga or IP adress ka bolega yeh mera already enter hoa wa ha ip address jis loaptop sy chlaoga ye uska ip adress ha 
agr ye ip adress dala hoa ha or ghr sy us karoga to ye excess nh hoga uska ip address yhn click kr k ain dlana parega or agr yeh chhte ho k kahin sy bh excess krlo to 0.0.0.0 add Entry krdo 0.0.0.0/0 to yeh ban kar ajayega yeh ab public access hogya 
ab agr kahin sy bh node k prj me mongo chalogy to access ho jayega or agr yeh nh krte ho hrjga ki IP dalna parti & then finish & close..
overview par ajaogy db deployment add data ya phir load sample data khud sy data load karo ya sample load karo (sample import example firebase) ab sampl DB load hoga / ho rha ha  or nodejs k andr kis trhn connection krni ha wo dekh lte hn 

nodejs ko mongoDb sy conect krne k lye 1 library ha (mongoose installation command => npm install mongoose) ye conect bh or nodejs me ka jitna kam mongo ka hoga wo is k through he hoga ab jb hmara server chlega to wo btayega DB conect hoa ya nh
is k bad 1 folder config or 1 file db.mjs is file sy hm conect karengy mongoDb ko (mongoose library par chle jao (mongoose require) (or mongoose conect connection string sy conect kro) or connection string mongoDB sy uthalo hmny db create krte waqt view k last me  )
ANAS ANAS ANAS----

jb loading ho jayegi to 1 msg ayega sample dataset is deployed or ab browse collection me sara data load ho gya hoga firebase me collection tha yahn browse collection 
sample-analysis sample-guides sample k name k sare databases han saperate dbs hn ab hm sample_restaurants k dbs me jaengy to is me 2 collec bnawe hn neighborhoods restaurants or restaurants pr click kia to
restaurants ka sara dta ayega id address etc ye collect pori uthata ha jis k andr id phly sy mojod ho
-------------
ab m sample restaurants ka data mongodb apne prj nodes sy conect krna chah rha hun to me wapas dashboard par ( overview ) par jaounga or idhr connect araha ha connect par click or yhn connect kaise krna ha " mongoDb vs code "
or idhr connection string ayega copy krlo                  
                                       mongodb+srv://ai8619233:<password>@ans123.put7wg9.mongodb.net/        or isko paste krna ha ye nh pta khn krna ha maybe connection string m
or agay /sample_restaurants      conection string k agay slash sample underscore restaurants dena parega otherwise conect nh karega 

-----------------------------------------------------------------------------------hm sample restaurants ko chor kar 1 apna new database bnate hn 
click create database or ye pochyga Enter database name olx  Enter collection name ads or create to olx me ads collection create ho jayegi or empty array hogi ab hm yhn fill karengy 
to me idhr /olx jo phly sample under restaurants rkha tha ab is olx sy conect krna ha 
ab ye export or import hoga ( main index.mjs me )  import db from './config/db.mjs'              look like 
or ab hame yahn listen lgana ha is chez ka jb bh hmara server chalega to ye btayega DB conect hoa ha ya nh 


===========ra,mdan
connection string kya pta is wja sy set nh ho rahi ha package.json me name ka issue ho node-js  (connect str ko console termina par lena ha sahi lagi ha connect str)
ya phir config ka fold node modules sy up agya jis k behave par error aya 

models me schema bnaya ha schema me hm wo likhte hn jo db me rasturants/collection me mongodb me jo bhejna hota ha tilte descri etc or agr condition lgnani ha is without fil par na jaye to required true krte hn 









acha inho ne db.mjs me mongoose.connect me connection strings rakh kar mongoose ko he export krdya ha or main file me db sy import kia or sir ne apne github sy 1 line code paste kia db.connection.once

db.connection.once('open', () => console.log("connected to db")).on("error", (err) => console.log("error connecting db -->", err))



