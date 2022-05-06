const { FFScene, FFText, FFVideo, FFAlbum, FFImage, FFCreator } = require("ffcreator");
const path = require('path')
const colors = require('colors');

// Create FFCreator instance

const canvas_width = 800
const canvas_height = 450

const creator = new FFCreator({
    cacheDir: path.join(__dirname, "../cache"),
    outputDir: path.join(__dirname, "../output"),
    width: canvas_width,
    height: canvas_height
});

// Create scene
const scene = new FFScene();
scene.setBgColor("#ffcc22");
scene.setDuration(6);
scene.setTransition("GridFlip", 2);
creator.addChild(scene);

// Create Text
const text = new FFText({ text: "by FFCreator", x: 16, y: canvas_height - 16 - 32 });
text.setColor("#000");
// text.setBackgroundColor("#000000");
text.addEffect("fadeIn", 1, 1);
scene.addChild(text);
text.setSize(32)

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
