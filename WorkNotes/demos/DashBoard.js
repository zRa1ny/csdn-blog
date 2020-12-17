class DashBoard {
    constructor(selector, {
        value = 20,
        linew = 20,
        pointerR = 8,
        startAngle = -5 * Math.PI / 4,
        endAngle = Math.PI / 4,
        colors = ["rgb(55,175,235)", "rgb(231,58,208)", "rgb(231,77,58)"],
        angeleAccounte = [0, 3 / 10, 7 / 10, 1],
        split = 50,
        duration = 1000,
        splitW = 2,
        toFixed = 2
    } = {}) {
        if (!selector) throw new Error('selector is require!');
        this.el = document.querySelector(selector);
        this.box = this.el.parentNode.getBoundingClientRect();
        this.ctx = this.el.getContext('2d');
        this.oldvalue = 0;
        this.curvalue = 0;
        this.linew = linew;
        this.pointerR = pointerR;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.colors = colors;
        this.angeleAccounte = angeleAccounte;
        this.split = split;
        this.splitW = splitW;
        this.duration = duration;
        this.toFixed = toFixed;
        this.center = Math.min(this.box.width, this.box.height) / 2;
        this.radius = this.center - this.linew / 2;
        this.anglesRange = (this.endAngle - this.startAngle);
        this.splitAngle = (this.endAngle - this.startAngle) / split;
        this.setvalue(value)
    }
    setvalue(value) {
        if (typeof value !== 'number') {
            throw new Error('value must be number type!')
        }
        cancelAnimationFrame(this.timer);
        this.oldvalue = this.curvalue;
        this.value = value;
        this.startDrawTime = new Date().getTime();
        this.start()
    }
    easeInout(currentTime, startValue, changeValue, duration) {
        currentTime = currentTime / (duration / 2);
        if (currentTime < 1) {
            // y = x*x  + y0
            return currentTime * currentTime * changeValue / 2 + startValue;
        } else {
            // y= -x*x +2x + y0
            return (-((currentTime - 1) * (currentTime - 1)) + 2 * (currentTime - 1)) * changeValue / 2 +
                changeValue / 2 + startValue;
        }
    }
    start() {
        cancelAnimationFrame(this.timer);
        this.timer = requestAnimationFrame(() => {
            if (new Date().getTime() - this.startDrawTime > this.duration) {
                cancelAnimationFrame(this.timer);
                this.curvalue = this.value;
                this.oldvalue = this.value;
                this.refresh();
            } else {
                this.curvalue = this.easeInout(new Date().getTime() - this.startDrawTime, this
                    .oldvalue,
                    this.value - this.oldvalue, this.duration);
                this.refresh();
                this.start();
            }
        })
    }
    refresh() {
        this.el.width = this.box.width;
        this.el.height = this.box.height;
        let {
            ctx,
            colors,
            linew,
            center,
            radius: r,
            startAngle,
            endAngle,
            angeleAccounte,
            anglesRange,
            splitAngle,
            splitW,
            pointerR,
            curvalue:value,
            split
        } = this;
        
        this.draw({
            ctx,
            colors,
            linew,
            center,
            r,
            startAngle,
            endAngle,
            angeleAccounte,
            anglesRange,
            splitAngle,
            splitW,
            pointerR,
            value,
            split
        });
    }
    draw(opts) {
        let {
            ctx,
            colors,
            linew,
            center,
            r,
            startAngle,
            endAngle,
            angeleAccounte,
            anglesRange,
            splitAngle,
            splitW,
            pointerR,
            value,
            split
        } = opts;
      
        for (let i = 0; i < colors.length; i++) {
            ctx.beginPath();
            ctx.lineWidth = linew;
            ctx.strokeStyle = colors[i];
            ctx.arc(center, center, r, startAngle + anglesRange * angeleAccounte[i], startAngle +
                anglesRange *
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
        ctx.fillText(value.toFixed(this.toFixed) + "%", center, center * 4 / 3);
        ctx.closePath();


        ctx.beginPath();
        let valueAngle = startAngle + splitAngle * split * (value / 100);
        let valueX = center + (center - linew - 5) * Math.cos(valueAngle);
        let valueY = center + (center - linew - 5) * Math.sin(valueAngle);
        ctx.moveTo(valueX, valueY);
        ctx.lineTo(center + (3 * pointerR / 5) * Math.cos(valueAngle - (2 * 45 * Math.PI / 360)), center + (
            3 *
            pointerR / 5) * Math.sin(valueAngle - (2 * 45 * Math.PI / 360)));
        ctx.lineTo(center + (3 * pointerR / 5) * Math.cos(valueAngle + (2 * 45 * Math.PI / 360)), center + (
            3 *
            pointerR / 5) * Math.sin(valueAngle + (2 * 45 * Math.PI / 360)));
        ctx.fillStyle = colors[2];
        ctx.fill()
        ctx.closePath();
    }
}

// export default DashBoard;