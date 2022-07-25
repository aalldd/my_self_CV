const chartDom=document.getElementById('main')
let myChart=echarts.init(chartDom)
let option;
option={
    title: {
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: 'rgb(105,129,195)',
                borderRadius: 3,
                padding: [1, 2]
            }
        },
        indicator: [
            { name: '静态页面', max: 100},
            { name: '编程基础', max: 100},
            { name: '沟通能力', max: 100},
            { name: '项目开发', max: 100},
            { name: 'Vue', max: 100},
            { name: 'React', max: 100}
        ]
    },
    series: [{
        name: '能力雷达',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
            {
                value: [90, 80, 80, 85, 85, 85],
                name: '预算分配（Allocated Budget）'
            }
        ]
    }]
}

option && myChart.setOption(option);
