$(document).ready(function () {
    $('#fullpage').fullpage({ //initialize
        //set options
        sectionsColor: ['#0000', '#0000', '#0000'],
        navigation: true,
        navigationPosition: 'right',
        anchors: ['section1', 'section2', 'section3'],
        afterLoad: function (origin, destination, direction) {
            if (destination.index == 0) {
                s1a.play();
                s1b.play();
                s1c.play();
                s1d.play();
            }
            else if (destination.index == 1) {
                s2a.play();
                s2b.play();
            }
            else if (destination.index == 2) {
                s3a.play();
                s3b.play();
            }
        }
    });
});

// Set labels, colours and data
const data = {
    labels: ['Dec 1', 'Dec 2', 'Dec 3', 'Dec 4', 'Dec 5', 'Dec 6', 'Dec 7', 'Dec 8', 'Dec 9', 'Dec 10', 'Dec 11', 'Dec 12', 'Dec 13', 'Dec 14'],
    datasets: [
        {
            label: 'Daily Cases (past 2 weeks)',
            data: [1134, 1056, 986, 771, 756, 721, 654, 742, 689, 512, 455, 376, 244, 103],
            borderColor: 'rgb(255, 99, 132)',
            fill: false,
            stepped: true,
        }
    ]
};

// Configure chart
const config = {
    type: 'line',
    data: data,
    options: {
        animations: {
            y: {
                easing: 'easeInOutElastic',
                from: (ctx) => {
                    if (ctx.type === 'data') {
                        if (ctx.mode === 'default' && !ctx.dropped) {
                            ctx.dropped = true;
                            return 0;
                        }
                    }
                }
            }
        },
        responsive: true,
        interaction: {
            intersect: false,
            axis: 'x'
        },
        plugins: {
            title: {
                display: true,
                text: (ctx) => 'Step ' + ctx.chart.data.datasets[0].stepped + ' Interpolation',
            }
        }
    }
};

// Render chart in <canvas>
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);


var s1a = anime({
    targets: '.s1',
    opacity: [0, 1],
    translateY: [-250, 0],
    autoplay: true,
    delay: anime.stagger(100),
    duration: 1000
});

var s1b = anime({
    targets: '.num1',
    innerHTML: [0, 257510],
    round: 1,
    autoplay: true,
    easing: 'easeInOutExpo',
    duration: 750
});

var s1c = anime({
    targets: '.num2',
    innerHTML: [0, 1365],
    round: 1,
    autoplay: true,
    easing: 'easeInOutExpo',
    duration: 750
});

var s1d = anime({
    targets: '.num3',
    innerHTML: [0, 678],
    round: 1,
    autoplay: true,
    easing: 'easeInOutExpo',
    duration: 750
});

tippy('#v', {
    content: 'I am Vaccinated :D'
});
tippy('#nv', {
    content: 'I am not Vaccinated :('
});

var s2a = anime({
    targets: '.s2a',
    opacity: [0, 1],
    translateX: [-250, 0],
    autoplay: true,
    delay: anime.stagger(200),
    duration: 2000
});

var s2b = anime({
    targets: '.s2b',
    opacity: [0, 1],
    translateX: [250, 0],
    autoplay: true,
    delay: anime.stagger(200),
    duration: 2000
});

$(document).ready(function() {
    $('#centres').DataTable({
        responsive: true,
        pageLength: 5,
    });
    });

    var s3a = anime({
        targets: '#s3',
        opacity: [0, 1],
        translateY: [-250, 0],
        autoplay: true,
        delay: anime.stagger(150),
        duration: 1500
    });

    var s3b = anime({
        targets: '#centres',
        opacity: [0, 1],
        translateY: [-250, 0],
        autoplay: true,
        duration: 1500
    });

    tippy('#pioneer', {
        content: 'Pioneer Polyclinic'
    });
    tippy('#pasirris', {
        content: 'Pasir Ris Polyclinic'
    });
    tippy('#geylang', {
        content: 'Geyland Polyclinic'
    });
    tippy('#hougang', {
        content: 'Hougang Polyclinic'
    });
    tippy('#jurong', {
        content: 'Jurong Polyclinic'
    });
    tippy('#marine', {
        content: 'Marine Parade Polyclinic'
    });
    tippy('#outram', {
        content: 'Outram Polyclinic'
    });
    tippy('#clementi', {
        content: 'Clementi Polyclinic'
    });
    tippy('#cck', {
        content: 'Choa Chu Kang Polyclinic'
    });
    tippy('#bm', {
        content: 'Bukit Merah Polyclinic'
    });
    tippy('#bb', {
        content: 'Bukit Batok Polyclinic'
    });
    tippy('#bedok', {
        content: 'Bedok Polyclinic'
    });

    