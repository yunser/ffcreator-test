const { FFScene, FFText, FFVideo, FFAlbum, FFImage, FFCreator } = require("ffcreator");
const path = require('path')
const colors = require('colors');

// Create FFCreator instance

const total_secord = 30 * 60
// const total_secord = 3

const canvas_width = 1280
const canvas_height = 720
const header_time = 2
const footer_time = 2

const _startTime = new Date()

const bgMusicPath = path.join(__dirname, "../res/bg2.mp3")
const creator = new FFCreator({
    cacheDir: path.join(__dirname, "../cache"),
    outputDir: path.join(__dirname, "../output"),
    width: canvas_width,
    height: canvas_height,
    audio: {
        path: bgMusicPath,
        // src?: string;
        // bg: true,
        // loop: true,
        volume: 0.2,
    }, // background audio
});

// const headerScene = new FFScene()
// headerScene.setBgColor('#f75c5c')
// headerScene.setDuration(header_time)
// creator.addChild(headerScene)

// {
//     const text = new FFText({
//         width: canvas_width,
//         text: '猜省会',
//         x: canvas_width / 2,
//         // y: canvas_height - 16 - 32,
//         y: canvas_height / 2,
//         fontSize: 128,
//     })
//     text.alignCenter()
//     text.setColor("#333");
//     // text.setBackgroundColor("#333000");
//     text.addEffect("fadeIn", 1, 0)
//     text.addEffect("fadeOut", 0, header_time)
//     headerScene.addChild(text);
// }

// Create scene
const scene = new FFScene();
creator.addChild(scene);
scene.setBgColor("#000");
scene.setDuration(total_secord + 1);
// scene.setTransition("GridFlip", 2);
// scene.addAudio({
//     path: bgMusicPath,
//     // src?: string;
//     // bg: true,
//     // loop: true,
//     volume: 0.2,
// })

// 片头 2 s



function formatSecord(secord) {
    return ('' + secord).padStart(2, '0')
}

for (let time = 0; time <= total_secord; time++) {
    // const provinceName = province.name
    const trueTime = total_secord - time 
    const secord = trueTime % 60
    const minute = Math.floor(trueTime / 60)
    const timeText = `${formatSecord(minute)}:${formatSecord(secord)}`
    const text = new FFText({
        text: timeText,
        x: canvas_width / 2,
        y: canvas_height / 2,
        fontSize: 320,
    });
    text.setColor("#fff");
    // text.setBackgroundColor("#333000");
    const startTime = time
    // console.log(`${provinceName} at ${startTime}`)
    text.addEffect("fadeIn", 0.01, startTime)
    text.addEffect("fadeOut", 0.01, startTime + 1)
    text.alignCenter()
    scene.addChild(text);
}

// 片尾
// const footerScene = new FFScene()
// footerScene.setBgColor('#f75c5c')
// footerScene.setDuration(footer_time)
// creator.addChild(footerScene)

// {
//     const text = new FFText({
//         text: '感谢观看', 
//         x: canvas_width / 2, 
//         y: canvas_height / 2,
//         fontSize: 128,
//     });
//     text.setColor("#333");
//     text.addEffect("fadeIn", 0.5, 0)
//     text.addEffect("fadeOut", 0.01, footer_time)
//     text.alignCenter()

//     footerScene.addChild(text)
// }



creator.output(path.join(__dirname, "../output/clock.mp4"));
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

    console.log('true time', (new Date().getTime() - _startTime.getTime()) / (60 * 1000))
})
