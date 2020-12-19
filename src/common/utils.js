export function debounce(func, delay) {
    let timer = null
    return function(...arg) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            func(arg)
                // console.log('刷新');
        }, delay)
    }
}

export function getTime(val) {
    const date = new Date(val * 1000)
    let time = []
    let showTime = ''
    time[0] = date.getFullYear()
    time[1] = date.getMonth() + 1
    time[2] = date.getDate()
    time[3] = date.getHours()
    time[4] = date.getMinutes()
    time[5] = date.getSeconds()
    time.forEach((e, i) => {
        if (e < 10) e = '0' + e
        if (i < 2) showTime += e + '-'
        else if (i == 2) showTime += e + ' '
        else if (i > 2 && i < 5) showTime += e + ':'
        else showTime += e
    })
    return showTime
}