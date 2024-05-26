R native pr km krne k 2 tareqy hn 1st react ki apni dosc k mutabiq bh or 2nd expo method 

difference b/w React cli & Expo 

R native configuration setup environ zada deta ha kam krna hard ha hr cheez separete manange krni parti ha build krni ha 
or Expo pora pora already setup environ deta ha 

 
---------------------------------------------------
hm bh expo k uper focus karegyg zada tar kam expo par hota ha 

agr apne expo par prj create kia or RN cli par jana chhate ho tw ye bh possible ha expo eject ki commnad hoti ha jo convert krdega ksi bh rn cli par koe bh bus eject package.json me hona chahye otherwise convert nh hoga 




npx create-expo-app AwesomeProject

cd AwesomeProject   (agr prj install hone k bad command prompt me cd prj name phir npm start then share qr code scan qr code show mobile to code view ) not a laptop pc show broser code output ( us k lye emulator download krna parta ha )
(cd sy prj) k under me aogy or then enter the command (npm start) or terminal sy (npm start) only
emulator pc is qabil nh ha emulator chale hang masla hoga emulator sy android phone ki image browser par ayegi 
----------------------------------
 
agr ap open web krna chah rahy hn to w press hoga or cammond ayegi phir us command ko install krna hoga

npx expo install react-native-web react-dom @expo/metro-runtime
& then npm start tw without mobile prj browser par coding web view me ajeyegi
----
or agr open androide krna chte hn to a press k bad command ayegi wo enter or then (npm expo strat) ya npm start
--------------------------------

npx expo start       //is ka kxh pta nh    

jb ap prj install karlogy to 1 Qr code scanner on ho jyega or wo qr scan karogy or react native ka server ko scan karogy to ye poara code utayega or mobile me us server ki help sy chaledega 
without andriod server k apko android serevr kb chaye  hoga jb testing krni hogi emulator k uper emulator pori device bnakar apk pas screen par show krwa dega laptop par 
is me aysy appliaction run ho rahi hogi ya phir andriod studio jb chaye hoga jb ap build bna ray hogy apk etc 

babel.config.js ki file ye basically 1 compiler hota ha ye apki app ka saara code run krta ha important kirdr ha iska compile compiler settings hoti ha isme isko nh cherna 
app.json ye bh important file ha isme btaya hoa hota ha image ka icon khn rakhka hoa ha isko bh nh cherna 

app.js ye apki main importnt file hs ime sara kam ap karengy 
 
---------------------------------------------
react native me koe bh kam krne sy phly import krna parega like css html 

ap internal or extrenal css inline bh sb kr sakte ho or stylesheet bnate ho css wo ha bus implementation me difference ha yhn classname,id ka seen nh ha yhn direct style ka attribut or {} bnakar is me sare styling css krlo 
ksi bh framework library par kam krna ho to docs dekh kr kam krlo react native me html likhi ho to 1 time search krlo docs sy direct html likhogyg to kuch cheez nh chelgi react native me InputText ha or self closing tag me ayega 
butn kaise use kare wo bh docs import hoga import button karo button me title me dogy jo bh name butn rakna ha self closing tag ha ye bh k sath input pora banta ha 
whn onchange me e or state me e.target.value sy value lte thy yhn onchangeText me onchangeText dengy or onchnagetext ka funct bnakar text state parameter dengy or setText(text) sy value console ki jayegi tw mobile ki consol value terminal or pc ki consol vlae consol me ayegi	 
library bh use ho sakti ha import ho kar kam hoga 
or native me ul li ka seen nh ha tw direct map chla do tw ap react import from react or list par map chlado or return me kia krna ha text to text ko tag me rakkh dia kyun k text ayega list me 


react native ki ui component is ki apni website sy carry krne ha 

-------------------------------------------CAMERA-----------------------------------------------------
expo camera install command
npx expo install expo-camera

url ko native me uri sy define krna ha 
or agr camera gallery or bh other excess krni ha to Expo k dosc par jaounga 
touchable opacity native me anchor ka tag ha click par le jayega ksi bh text ko clickable bnana ho img etc 

expo dosc sy pora code copy krlo
agr picture chye ho tw take picture async (method direct camera par nh chelga take picture ayse nh chalega iska refernce k through instance bnana parega) 
search krengy take pictu async tw stack flow per ajayega How to snap pictures using expo react native camera?
refernce bna kar method banegy
ishi tarhn stop vedio or camera sy related jitny method ha ye direct nh chalengy instance par chalengy tw mujhe iska instance bnakar us par . kr k us par chlngy ye sub
=====================================================
react k andr ksi bh particular item ka instance bnane ka tareeqa ha useRef    const cameraRef = useRef()  jis tarhn react me naviagate use navigate krte thy
=====================================================

expo save camera image library install command 
npx expo install expo-media-library
import or array ki trhn state bnaegy 
agr name same hon to aliyas bhai 
