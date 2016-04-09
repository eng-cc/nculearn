var express = require('express');
var files = require('../models/files.js');
var opts = require('../settings.js');
var router = express.Router();

router.post('/login', function(req, res) {
	var obj = [
            {
                id: '1',
                pictureurl: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3117925159,1877649339&fm=80',
                article: '粑粑啊把柄。'
            },
            {
                title: '2',
                pictureurl: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2639669686,2237473188&fm=80',
                article: '20种作战学校(Grupo de Acciones de Comando)招收的首批中国籍军事留学生。'
            },
            {
                title: '3',
                pictureurl: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1355735081,4081259144&fm=80',
                article: '陆军明珠等15名委内瑞拉国民警卫队特招收的首批中国籍军事留学生。'
            }，
            {
                title: '4',
                pictureurl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=720395892,2847475070&fm=80',
                article: '我是图4'
            },{
                id: '5',
                pictureurl: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3117925159,1877649339&fm=80',
                article: '粑粑啊把柄。'
            },
            {
                title: '6',
                pictureurl: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2639669686,2237473188&fm=80',
                article: '20种作战学校(Grupo de Acciones de Comando)招收的首批中国籍军事留学生。'
            },
            {
                title: '7',
                pictureurl: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1355735081,4081259144&fm=80',
                article: '陆军明珠等15名委内瑞拉国民警卫队特招收的首批中国籍军事留学生。'
            }，
            {
                title: '8',
                pictureurl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=720395892,2847475070&fm=80',
                article: '我是图8'
            }
        ]
    res.json({
        succ: true,
        msg: obj
    })
});

module.exports = router;
