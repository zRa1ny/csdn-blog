var i = 0;
var timer = setInterval(function () {
    draw(i)
    if (i < 100) {
        i += 0.1;
    } else {
        clearInterval(timer)
    }

}, 10)

function draw(value) {
    let canvasEl = document.querySelector("#canvas")
    let box = canvasEl.getBoundingClientRect()
    let ctx = canvasEl.getContext('2d');
    value = value || 0; // 0 - 100
    let linew = 20;
    let pointerR = 8;
    let splitW = 3;
    let startAngle = -5 * Math.PI / 4;
    let endAngle = Math.PI / 4;
    let center = Math.max(box.width, box.height) / 2;
    let r = center - linew / 2; // Math.max(box.width, box.height) / 2;
    let colors = ["rgb(55,175,235)", "rgb(231,58,208)", "rgb(231,77,58)"]
    let angeleAccounte = [0, 3 / 10, 7 / 10, 1];
    let anglesRange = (endAngle - startAngle);
    let splitAngle = (endAngle - startAngle) / 50;


    canvasEl.width = box.width;
    canvasEl.height = box.height;

    for (let i = 0; i < colors.length; i++) {
        ctx.beginPath();
        ctx.lineWidth = linew;
        ctx.strokeStyle = colors[i];
        ctx.arc(center, center, r, startAngle + anglesRange * angeleAccounte[i], startAngle + anglesRange *
            angeleAccounte[i + 1], false)
        ctx.stroke();
        ctx.closePath();
    }

    for (let i = 0; i < 51; i++) {
        ctx.beginPath();
        let isTick = i % 5 == 0;
        let angele = startAngle + splitAngle * i;
        let outArcX = center + center * Math.cos(angele);
        let outArcY = center + center * Math.sin(angele);
        let inArcX = center + (center - (linew / (isTick ? 1 : 2.5))) * Math.cos(angele);
        let inArcY = center + (center - (linew / (isTick ? 1 : 2.5))) * Math.sin(angele);

        ctx.moveTo(outArcX, outArcY);
        ctx.lineTo(inArcX, inArcY);
        ctx.lineWidth = isTick ? splitW : '1';
        ctx.strokeStyle = '#fff';
        ctx.stroke();
        if (isTick) {
            let textX = center + (center - linew - 10) * Math.cos(angele);
            let textY = center + (center - linew - 10) * Math.sin(angele);
            ctx.font = "12px nomarl '微软雅黑'";
            // 设置颜色
            ctx.fillStyle = "#666666";
            // 设置水平对齐方式
            ctx.textAlign = "center";
            // 设置垂直对齐方式
            ctx.textBaseline = "middle";
            // 绘制文字（参数：要写的字，x坐标，y坐标）
            ctx.fillText(i * 2, textX, textY);
        }

        ctx.closePath();
    }

    ctx.beginPath();
    ctx.arc(center, center, pointerR, 0, Math.PI * 2, false);
    ctx.fillStyle = colors[2];
    ctx.fill()
    ctx.closePath();

    ctx.beginPath();
    ctx.font = "24px nomarl DIN";
    // 设置颜色
    ctx.fillStyle = "#E74D3A";
    // 设置水平对齐方式
    ctx.textAlign = "center";
    // 设置垂直对齐方式
    ctx.textBaseline = "middle";
    // 绘制文字（参数：要写的字，x坐标，y坐标）
    ctx.fillText((value.toFixed(2)) + "%", center, center * 4 / 3);
    ctx.closePath();


    ctx.beginPath();
    let valueAngle = startAngle + splitAngle * 50 * (value / 100);
    let valueX = center + (center - linew - 5) * Math.cos(valueAngle);
    let valueY = center + (center - linew - 5) * Math.sin(valueAngle);
    ctx.moveTo(valueX, valueY);
    ctx.lineTo(center + (3 * pointerR / 5) * Math.cos(valueAngle - (2 * 45 * Math.PI / 360)), center + (3 *
        pointerR / 5) * Math.sin(valueAngle - (2 * 45 * Math.PI / 360)));
    ctx.lineTo(center + (3 * pointerR / 5) * Math.cos(valueAngle + (2 * 45 * Math.PI / 360)), center + (3 *
        pointerR / 5) * Math.sin(valueAngle + (2 * 45 * Math.PI / 360)));
    ctx.fillStyle = colors[2];
    ctx.fill()
    ctx.closePath();
}