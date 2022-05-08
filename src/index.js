const { FFScene, FFText, FFVideo, FFAlbum, FFImage, FFCreator } = require("ffcreator");
const path = require('path')
const colors = require('colors');

let _provinces = [
    {
        "code": 440000,
        "name": "广东省",
        "simpleName": "广东",
        provincialCapital: '广州',
        iName: '',
        iCapital: '',
        simplestName: '粤',
    },
    {
        "code": 650000,
        "name": "新疆维吾尔自治区",
        "simpleName": "新疆",
        provincialCapital: '乌鲁木齐',
        simplestName: '新',
    },
    {
        "code": 540000,
        "name": "西藏自治区",
        "simpleName": "西藏",
        provincialCapital: '拉萨',
        simplestName: '藏',
    },
    {
        "code": 150000,
        "name": "内蒙古自治区",
        "simpleName": "内蒙古",
        provincialCapital: '呼和浩特',
        simplestName: '内蒙古',
    },
    {
        "code": 630000,
        "name": "青海省",
        "simpleName": "青海",
        provincialCapital: '西宁',
        simplestName: '青',
    },
    {
        "code": 510000,
        "name": "四川省",
        "simpleName": "四川",
        provincialCapital: '成都',
        simplestName: '青',
    },
    {
        "code": 230000,
        "name": "黑龙江省",
        "simpleName": "黑龙江",
        provincialCapital: '哈尔滨',
    },
    {
        "code": 620000,
        "name": "甘肃省",
        "simpleName": "甘肃",
        provincialCapital: '兰州',
    },
    {
        "code": 530000,
        "name": "云南省",
        "simpleName": "云南",
        provincialCapital: '昆明',
    },
    {
        "code": 450000,
        "name": "广西壮族自治区",
        "simpleName": "广西",
        provincialCapital: '南宁',
        iName: '',
        iCapital: '',
    },
    {
        "code": 430000,
        "name": "湖南省",
        "simpleName": "湖南",
        provincialCapital: '长沙',
    },
    {
        "code": 610000,
        "name": "陕西省",
        "simpleName": "陕西",
        provincialCapital: '西安',
    },
    {
        "code": 220000,
        "name": "吉林省",
        "simpleName": "吉林",
        provincialCapital: '长春',
    },
    {
        "code": 130000,
        "name": "河北省",
        "simpleName": "河北",
        provincialCapital: '石家庄',
    },
    {
        "code": 420000,
        "name": "湖北省",
        "simpleName": "湖北",
        provincialCapital: '武汉',
    },
    {
        "code": 520000,
        "name": "贵州省",
        "simpleName": "贵州",
        provincialCapital: '贵阳',
    },
    {
        "code": 370000,
        "name": "山东省",
        "simpleName": "山东",
        provincialCapital: '济南',
    },
    {
        "code": 360000,
        "name": "江西省",
        "simpleName": "江西",
        provincialCapital: '南昌',
    },
    {
        "code": 410000,
        "name": "河南省",
        "simpleName": "河南",
        provincialCapital: '郑州',
    },
    {
        "code": 210000,
        "name": "辽宁省",
        "simpleName": "辽宁",
        provincialCapital: '沈阳',
    },
    {
        "code": 140000,
        "name": "山西省",
        "simpleName": "山西",
        provincialCapital: '太原',
    },
    {
        "code": 340000,
        "name": "安徽省",
        "simpleName": "安徽",
        provincialCapital: '合肥',
    },
    {
        "code": 350000,
        "name": "福建省",
        "simpleName": "福建",
        provincialCapital: '福州',
    },
    {
        "code": 330000,
        "name": "浙江省",
        "simpleName": "浙江",
        provincialCapital: '杭州',
    },
    {
        "code": 320000,
        "name": "江苏省",
        "simpleName": "江苏",
        provincialCapital: '南京',
    },
    {
        "code": 500000,
        "name": "重庆市",
        "simpleName": "重庆",
        provincialCapital: '重庆',
    },
    {
        "code": 640000,
        "name": "宁夏回族自治区",
        "simpleName": "宁夏",
        provincialCapital: '银川',
    },
    {
        "code": 460000,
        "name": "海南省",
        "simpleName": "海南",
        provincialCapital: '海口',
    },
    {
        "code": 710000,
        "name": "台湾省",
        "simpleName": "台湾",
        provincialCapital: '台北',
    },
    {
        "code": 110000,
        "name": "北京市",
        "simpleName": "北京",
        provincialCapital: '北京',
    },
    {
        "code": 120000,
        "name": "天津市",
        "simpleName": "天津",
        provincialCapital: '天津',
    },
    {
        "code": 310000,
        "name": "上海市",
        "simpleName": "上海",
        provincialCapital: '上海',
    },
    {
        "code": 810000,
        "name": "香港特别行政区",
        "simpleName": "香港",
        provincialCapital: '香港',
    },
    {
        "code": 820000,
        "name": "澳门特别行政区",
        "simpleName": "澳门",
        provincialCapital: '澳门',
    }
]
// _provinces = _provinces.slice(0, 3)

// Create FFCreator instance

const canvas_width = 1280
const canvas_height = 720
const one_province_time = 6
const header_time = 2
const footer_time = 2

const bgMusicPath = path.join(__dirname, "../res/bg.mp3")
const creator = new FFCreator({
    cacheDir: path.join(__dirname, "../cache"),
    outputDir: path.join(__dirname, "../output"),
    width: canvas_width,
    height: canvas_height,
    // audio: bgMusicPath, // background audio
});

// Create scene
const scene = new FFScene();
creator.addChild(scene);
scene.setBgColor("#ffcc22");
scene.setDuration(header_time + _provinces.length * one_province_time);
console.log('time:', header_time + _provinces.length * one_province_time)
// scene.setTransition("GridFlip", 2);
scene.addAudio({
    path: bgMusicPath,
    // src?: string;
    // bg: true,
    // loop: true,
    volume: 0.2,
})

// 片头 2 s

const text = new FFText({
    width: canvas_width,
    text: '猜省会',
    x: canvas_width / 2,
    // y: canvas_height - 16 - 32,
    y: canvas_height / 2,
    fontSize: 128,
})
text.alignCenter()
text.setColor("#333");
// text.setBackgroundColor("#333000");
text.addEffect("fadeIn", 1, 0)
text.addEffect("fadeOut", 0, header_time)
scene.addChild(text);

// 猜省份
_provinces.forEach((province, idx) => {
    
    const provinceName = province.name
    const text = new FFText({
        text: provinceName,
        x: canvas_width / 2, 
        y: canvas_height / 3,
        fontSize: 96,
    });
    text.setColor("#333");
    // text.setBackgroundColor("#333000");
    const startTime = header_time + idx * one_province_time
    console.log(`${provinceName} at ${startTime}`)
    text.addEffect("fadeIn", 0.01, startTime)
    text.addEffect("fadeOut", 0.01, startTime + one_province_time)
    text.alignCenter()
    scene.addChild(text);

    const guess_time = 4

    for (let time = 0; time < guess_time; time++) {
        const text = new FFText({
            text: ('' + (guess_time - time)), 
            x: canvas_width / 2, 
            y: canvas_height / 3 * 2,
            fontSize: 80,
        });
        text.setColor("#333");
        text.addEffect("fadeIn", 0.01, startTime + time)
        text.addEffect("fadeOut", 0.01, startTime + time + 1)
        text.alignCenter()
        scene.addChild(text);
    }

    {
        const text = new FFText({
            text: province.provincialCapital,
            x: canvas_width / 2,
            y: canvas_height / 3 * 2,
            fontSize: 64,
        });
        text.setColor("#000");
        text.addEffect("fadeIn", 0.01, startTime + guess_time)
        text.addEffect("fadeOut", 0.01, startTime + one_province_time)
        text.alignCenter()

        scene.addChild(text);
    }
})


// 片尾
const footerScene = new FFScene()
footerScene.setBgColor('#f75c5c')
footerScene.setDuration(footer_time)
creator.addChild(footerScene)

{
    const text = new FFText({
        text: '感谢观看', 
        x: canvas_width / 2, 
        y: canvas_height / 2,
        fontSize: 128,
    });
    text.setColor("#333");
    text.addEffect("fadeIn", 0.5, 0)
    text.addEffect("fadeOut", 0.01, footer_time)
    text.alignCenter()

    footerScene.addChild(text)
}



creator.output(path.join(__dirname, "../output/example.mp4"));
creator.start();        // 开始加工
// creator.closeLog();     // 关闭log(包含perf)

creator.on('start', () => {
    console.log(`FFCreator start`);
});
creator.on('error', e => {
    console.log(`FFCreator error: ${JSON.stringify(e)}`);
});
creator.on('progress', e => {
    console.log(colors.yellow(`FFCreator progress: ${e.state} ${(e.percent * 100) >> 0}%`));
});
creator.on('complete', e => {
    console.log(colors.magenta(`FFCreator completed: \n USEAGE: ${e.useage} \n PATH: ${e.output} `));
})
