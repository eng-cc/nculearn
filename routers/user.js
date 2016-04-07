var express = require('express');
var files = require('../models/files.js');
var opts = require('../settings.js');
var router = express.Router();

router.post('/login', function(req, res) {
    res.json({
        succ: true,
        msg: [
            {
                title: tit1,
                pictureurl: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3117925159,1877649339&fm=80',
                article: '2014年10月，陆军第21集团军某特战旅中尉排长陈明珠等15名从全军选拔出来的优秀青年军官由总部派遣，成为委内瑞拉国民警卫队特种作战学校(Grupo de Acciones de Comando)招收的首批中国籍军事留学生。'
            },
            {
                title: tit1,
                pictureurl: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3117925159,1877649339&fm=80',
                article: '2014年10月，陆军第21集团军某特战旅中尉排长陈明珠等15名从全军选拔出来的优秀青年军官由总部派遣，成为委内瑞拉国民警卫队特种作战学校(Grupo de Acciones de Comando)招收的首批中国籍军事留学生。'
            },
            {
                title: tit1,
                pictureurl: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3117925159,1877649339&fm=80',
                article: '2014年10月，陆军第21集团军某特战旅中尉排长陈明珠等15名从全军选拔出来的优秀青年军官由总部派遣，成为委内瑞拉国民警卫队特种作战学校(Grupo de Acciones de Comando)招收的首批中国籍军事留学生。'
            }
        ]
    })
});

module.exports = router;
