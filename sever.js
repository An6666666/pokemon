//install: node js
//install web server package: express >npm install express
var express = require("express");
var server = express();
var bodyParser = require("body-parser");

//web root
server.use(express.static(__dirname+"/POKEMON"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded());


var DB = require("nedb-promises");
var ProfolioDB = DB.create(__dirname+"/POKEMONprofoli.db");
 
ProfolioDB.insert([
    { id: 8, type: 'grass', name: '妙蛙種子', img: 'IM/妙蛙種子.jpg' },
    { id: 9, type: 'grass', name: '妙蛙草', img: 'IM/妙蛙草.jpg' },
    { id: 10, type: 'grass', name: '妙蛙花', img: 'IM/妙蛙花.jpg' },
    { id: 11, type: 'grass', name: '妙蛙花EX', img: 'IM/妙蛙花EX.jpg' },
    { id: 12, type: 'grass', name: '綠毛蟲', img: 'IM/綠毛蟲.jpg' },
    { id: 13, type: 'grass', name: '鐵甲蛹', img: 'IM/鐵甲蛹.jpg' },
    { id: 14, type: 'grass', name: '巴大蝶', img: 'IM/巴大蝶.jpg' },
    { id: 15, type: 'grass', name: '獨角蟲', img: 'IM/獨角蟲.jpg' },
    { id: 16, type: 'grass', name: '鐵殼蛹', img: 'IM/鐵殼蛹.jpg' },
    { id: 17, type: 'grass', name: '大針鋒', img: 'IM/大針鋒.jpg' },
    { id: 18, type: 'grass', name: '走路草', img: 'IM/走路草.jpg' },
    { id: 19, type: 'grass', name: '臭臭花', img: 'IM/臭臭花.jpg' },
    { id: 20, type: 'grass', name: '霸王花', img: 'IM/霸王花.jpg' },
    { id: 21, type: 'grass', name: '派拉斯', img: 'IM/派拉斯.jpg' },
    { id: 22, type: 'grass', name: '派拉斯特', img: 'IM/派拉斯特.jpg' },
    { id: 23, type: 'grass', name: '毛球', img: 'IM/毛球.jpg' },
    { id: 24, type: 'grass', name: '摩魯蛾', img: 'IM/摩魯蛾.jpg' },
    { id: 25, type: 'grass', name: '喇叭芽', img: 'IM/喇叭芽.jpg' },
    { id: 26, type: 'grass', name: '口呆花', img: 'IM/口呆花.jpg' },
    { id: 27, type: 'grass', name: '大食花', img: 'IM/大食花.jpg' },
    { id: 28, type: 'grass', name: '蛋蛋', img: 'IM/蛋蛋.jpg' },
    { id: 29, type: 'grass', name: '椰蛋樹', img: 'IM/椰蛋樹.jpg' },
    { id: 30, type: 'grass', name: '椰蛋樹EX', img: 'IM/椰蛋樹EX.jpg' },
    { id: 31, type: 'grass', name: '蔓藤怪', img: 'IM/蔓藤怪.jpg' },
    { id: 33, type: 'grass', name: '飛天螳螂', img: 'IM/飛天螳螂.jpg' },
    { id: 34, type: 'grass', name: '凱羅斯', img: 'IM/凱羅斯.jpg' },
    { id: 35, type: 'grass', name: '木棉球', img: 'IM/木棉球.jpg' },
    { id: 36, type: 'grass', name: '風妖精', img: 'IM/風妖精.jpg' },
    { id: 37, type: 'grass', name: '百合根娃娃', img: 'IM/百合根娃娃.jpg' },
    { id: 38, type: 'grass', name: '裙兒小姐', img: 'IM/裙兒小姐.jpg' },
    { id: 39, type: 'grass', name: '坐騎小羊', img: 'IM/坐騎小羊.jpg' },
    { id: 40, type: 'grass', name: '坐騎山羊', img: 'IM/坐騎山羊.jpg' },
    { id: 41, type: 'fire', name: '小火龍', img: 'IM/小火龍.jpg' },
    { id: 42, type: 'fire', name: '火恐龍', img: 'IM/火恐龍.jpg' },
    { id: 43, type: 'fire', name: '噴火龍', img: 'IM/噴火龍.jpg' },
    { id: 44, type: 'fire', name: '噴火龍EX', img: 'IM/噴火龍EX.jpg' },
    { id: 45, type: 'fire', name: '六尾', img: 'IM/六尾.jpg' },
    { id: 46, type: 'fire', name: '九尾', img: 'IM/九尾.jpg' },
    { id: 47, type: 'fire', name: '卡蒂狗', img: 'IM/卡蒂狗.jpg' },
    { id: 48, type: 'fire', name: '風速狗', img: 'IM/坐騎山羊.jpg' },
    { id: 49, type: 'fire', name: '風速狗EX', img: 'IM/坐騎山羊.jpg' },
    { id: 50, type: 'fire', name: '小火馬', img: 'IM/坐騎山羊.jpg' },
    { id: 51, type: 'fire', name: '烈火馬', img: 'IM/坐騎山羊.jpg' },
    { id: 52, type: 'fire', name: '鴨嘴火獸', img: 'IM/坐騎山羊.jpg' },
    { id: 53, type: 'fire', name: '火伊布', img: 'IM/坐騎山羊.jpg' },
    { id: 54, type: 'fire', name: '火焰鳥', img: 'IM/坐騎山羊.jpg' },
    { id: 55, type: 'fire', name: '火焰鳥EX', img: 'IM/坐騎山羊.jpg' },
    { id: 56, type: 'fire', name: '熔蟻獸', img: 'IM/坐騎山羊.jpg' },
    { id: 57, type: 'fire', name: '夜盜火蜥', img: 'IM/坐騎山羊.jpg' },
    { id: 58, type: 'fire', name: '燒火蚣', img: 'IM/坐騎山羊.jpg' },
    { id: 59, type: 'fire', name: '焚焰蚣', img: 'IM/坐騎山羊.jpg' },
 ])
////
//server.get("/card-container", (req, res)=>{
//    //DB find
//    var Services=[
//    { id: 1, type: 'Mewtwo EX', name: '超夢EX', img: 'IM/超夢.png' },
//    { id: 2, type: 'Mewtwo EX', name: '拉魯拉斯', img: 'IM/拉魯拉斯.png' },
//    { id: 3, type: 'Mewtwo EX', name: '奇魯莉安', img: 'IM/奇魯莉安.png' },
//    { id: 4, type: 'Mewtwo EX', name: '沙奈朵', img: 'IM/沙奈朵.png' },
//    { id: 5, type: 'Pikachu EX', name: '皮卡丘EX', img: 'IM/皮卡丘EX.png' },
//    { id: 6, type: 'Starmie Articuno EX', name: '寶石海星EX', img: 'IM/寶石海星EX.png' },
//    { id: 7, type: 'Starmie Articuno EX', name: '急凍鳥EX', img: 'IM/急凍鳥EX.png' },
//    { id: 8, type: 'grass', name: '妙蛙種子', img: 'IM/妙蛙種子.webp' },
//    { id: 9, type: 'grass', name: '妙蛙草', img: 'IM/妙蛙草.webp' },
//    { id: 10, type: 'grass', name: '妙蛙花', img: 'IM/妙蛙花.webp' },
//    { id: 11, type: 'grass', name: '妙蛙花EX', img: 'IM/妙蛙花EX.webp' },
//    { id: 12, type: 'grass', name: '綠毛蟲', img: 'IM/綠毛蟲.webp' },
//    { id: 13, type: 'grass', name: '鐵甲蛹', img: 'IM/鐵甲蛹.webp' },
//    { id: 14, type: 'grass', name: '巴大蝶', img: 'IM/巴大蝶.webp' },
//    { id: 15, type: 'grass', name: '獨角蟲', img: 'IM/獨角蟲.webp' },
//    { id: 16, type: 'grass', name: '鐵殼蛹', img: 'IM/鐵殼蛹.webp' },
//    { id: 17, type: 'grass', name: '大針鋒', img: 'IM/大針鋒.webp' },
//    { id: 18, type: 'grass', name: '走路草', img: 'IM/走路草.webp' },
//    { id: 19, type: 'grass', name: '臭臭花', img: 'IM/臭臭花.webp' },
//    { id: 20, type: 'grass', name: '霸王花', img: 'IM/霸王花.webp' },
//    { id: 21, type: 'grass', name: '派拉斯', img: 'IM/派拉斯.webp' },
//    { id: 22, type: 'grass', name: '派拉斯特', img: 'IM/派拉斯特.webp' },
//    { id: 23, type: 'grass', name: '毛球', img: 'IM/毛球.webp' },
//    { id: 24, type: 'grass', name: '摩魯蛾', img: 'IM/摩魯蛾.webp' },
//    { id: 25, type: 'grass', name: '喇叭芽', img: 'IM/喇叭芽.webp' },
//    { id: 26, type: 'grass', name: '口呆花', img: 'IM/口呆花.webp' },
//    { id: 27, type: 'grass', name: '大食花', img: 'IM/大食花.webp' },
//    { id: 28, type: 'grass', name: '蛋蛋', img: 'IM/蛋蛋.webp' },
//    { id: 29, type: 'grass', name: '椰蛋樹', img: 'IM/椰蛋樹.webp' },
//    { id: 30, type: 'grass', name: '椰蛋樹EX', img: 'IM/椰蛋樹EX.webp' },
//    { id: 31, type: 'grass', name: '蔓藤怪', img: 'IM/蔓藤怪.webp' },
//    { id: 33, type: 'grass', name: '飛天螳螂', img: 'IM/飛天螳螂.webp' },
//    { id: 34, type: 'grass', name: '凱羅斯', img: 'IM/凱羅斯.webp' },
//    { id: 35, type: 'grass', name: '木棉球', img: 'IM/木棉球.webp' },
//    { id: 36, type: 'grass', name: '風妖精', img: 'IM/風妖精.webp' },
//    { id: 37, type: 'grass', name: '百合根娃娃', img: 'IM/百合根娃娃.webp' },
//    { id: 38, type: 'grass', name: '裙兒小姐', img: 'IM/裙兒小姐.webp' },
//    { id: 39, type: 'grass', name: '坐騎小羊', img: 'IM/坐騎小羊.webp' },
//    { id: 40, type: 'grass', name: '坐騎山羊', img: 'IM/坐騎山羊.webp' },
//    ];
//    res.send(Services);
//});

server.get("/POKEMON", (req,res)=>{
      //DB
    //   ProfolioDB.find({}).then(results=>{
    //     if(results != null){
    //          res.send(results);
    //     }else{
    //         res.send("Error!");
    //     }
    //   })
      ProfolioDB.find({}).sort({"id":1}).then(function(data, err){
       if (err){
           response.end();
           return;
       }
       else{
              res.send(data);
       }
       console.log(data);
      });
})

const port = process.env.PORT || 8080;

server.listen(port, ()=>{
    console.log('Server is running at port ${port}.');
})