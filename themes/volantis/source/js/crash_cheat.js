$(function () {
    var OriginTitle = document.title;
    var titleTime;
    document.addEventListener('visibilitychange', function () {
        // 解决pjax冲突bug
        if (document.title !== '╰（‵□′）╯ 我是！') {
            OriginTitle = document.title
        }
        if (document.hidden) {
            $('[rel="icon"]').attr('href', "https://i.loli.net/2021/02/22/Ej89S5cqwQzhT6V.png");
            $('[rel="shortcut icon"]').attr('href', "https://i.loli.net/2021/02/22/Ej89S5cqwQzhT6V.png");
            document.title = '╰（‵□′）╯ 我是！';
            clearTimeout(titleTime);
        } else {
            $('[rel="icon"]').attr('href', "https://i.loli.net/2021/02/22/aZhi1wStPpoYFm6.png");
            $('[rel="shortcut icon"]').attr('href', "https://i.loli.net/2021/02/22/aZhi1wStPpoYFm6.png");
            document.title = '(╯‵□′)╯︵┻━┻ 火车王！ ';
            titleTime = setTimeout(function () {
                document.title = OriginTitle;
            }, 2000);
        }
    });
})