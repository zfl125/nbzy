

const bgload = function () {
    var bgelement = document.getElementById("bg"),
        e = bgelement.getContext("2d"),
        h = bgelement.width,
        k = bgelement.height,
        l = [],
        n = 0,
        g = document.createElement("canvas"),
        a = g.getContext("2d");
    g.width = 100;
    g.height = 100;

    function f(d, a) {
        2 > arguments.length && (a = d, d = 0);
        if (d > a) { var b = a; a = d; d = b }
        return Math.floor(Math.random() * (a - d + 1)) + d
    }

    function m() {
        e.globalCompositeOperation = "source-over";
        e.globalAlpha = .8; e.fillStyle = "hsla(217, 64%, 6%, 1)";
        e.fillRect(0, 0, h, k);
        e.globalCompositeOperation = "lighter";
        for (var a = 1, b = l.length; a < b; a++)
            l[a].draw();

        window.requestAnimationFrame(m)
    }


    var b = g.width / 2,
        c = a.createRadialGradient(b, b, 0, b, b, b);
    c.addColorStop(.025, "#fff");
    c.addColorStop(.1, "hsl(217, 61%, 33%)");
    c.addColorStop(.25, "hsl(217, 64%, 6%)");
    c.addColorStop(1, "transparent");
    a.fillStyle = c; a.beginPath();
    a.arc(b, b, b, 0, 2 * Math.PI);
    a.fill();

    a = function () {
        var a = Math.max(h, k);
        this.orbitRadius = f(Math.round(Math.sqrt(a * a + a * a)) / 2);
        this.radius = f(60, this.orbitRadius) / 12; this.orbitX = h / 2;
        this.orbitY = k / 2; this.timePassed = f(0, 1200);
        this.speed = f(this.orbitRadius) / 9E5;
        this.alpha = f(2, 10) / 10;
        n++;
        l[n] = this
    };

    a.prototype.draw = function () {
        var a = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
            b = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
            c = f(10); 1 === c && 0 < this.alpha ? this.alpha -= .05 : 2 === c && 1 > this.alpha && (this.alpha += .05);
        e.globalAlpha = this.alpha;
        e.drawImage(g, a - this.radius / 2, b - this.radius / 2, this.radius, this.radius);
        this.timePassed += this.speed
    };

    for (b = 0; 1200 > b; b++)new a;
    m()
}





export default () => {
    const w = document.documentElement.clientWidth || document.body.clientWidth;
    const h = document.documentElement.clientHeight || document.body.clientHeight;
    document.getElementById('bg').width = w
    document.getElementById('bg').height = h
    bgload()

    window.addEventListener("resize", function () {
        const w = document.documentElement.clientWidth || document.body.clientWidth;
        const h = document.documentElement.clientHeight || document.body.clientHeight;
        document.getElementById('bg').width = w
        document.getElementById('bg').height = h
        bgload()
    });
}

