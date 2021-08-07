class Clock {
    $container;
    $time;
    $btnStart;
    $btnPause;
    $btnStop;

    seconds;
    constructor() {
        this.$container = document.createElement("div");

        this.$time = document.createElement("span");
        this.$time.innerHTML = "00:00";

        this.$btnStart = document.createElement("button");
        this.$btnStart.innerHTML = "Start"
        this.$btnStart.addEventListener('click', this.Start)

        this.$btnPause = document.createElement("button");
        this.$btnPause.innerHTML = "Pause"
        this.$btnPause.addEventListener('click', this.Pause)

        this.$btnStop = document.createElement("button");
        this.$btnStop.innerHTML = "Stop"
        this.$btnStop.addEventListener('click', this.Stop)

        this.seconds = 0;
        this.timeInterval = null;
    }

    Start = () => {
        if (this.timeInterval) {
            return;
        }
        this.timeInterval = setInterval(() => {
            this.seconds++;
            this.updateTime();
        }, 1000)
    }

    Pause = () => {
        if (this.timeInterval) {
            clearInterval(this.timeInterval)
        }
    }

    Stop = () => {
        if (this.timeInterval) {
            clearInterval(this.timeInterval)
        }
        this.seconds = 0;
        this.updateTime();
    }

    updateTime = () => {
        const m = Math.floor(this.seconds / 60)
        const s = Math.floor(this.seconds % 60)
        this.$time.innerHTML = m + ":" + s;
    }

    render() {
        this.$container.appendChild(this.$time);
        this.$container.appendChild(this.$btnStart);
        this.$container.appendChild(this.$btnPause);
        this.$container.appendChild(this.$btnStop);
        return this.$container;
    }
}