$(function () {
    var botui = new BotUI("hello-xuxuy");
    botui.message.add({delay: 800, content: "Hi, there👋"}).then(function () {
        botui.message.add({delay: 1100, content: "这里是米花の小窝🎉 "}).then(function () {
            botui.message.add({delay: 1100, content: "一个积极向上的Boy🌈~~"}).then(function () {
                botui.action.button({
                    delay: 1600,
                    action: [{text: "然后呢？ 😉", value: "sure"}, {text: "少废话！ 🤐", value: "skip"}]
                }).then(function (a) {
                    "sure" == a.value && sure();
                    "skip" == a.value && end()
                })
            })
        })
    });
    var sure = function () {
        botui.message.add({delay: 600, content: "😘"}).then(function () {
            secondPart()
        })
    }, end = function () {
        botui.message.add({
            delay: 600,
            content: "告辞了您嘞！"
        })
    }, secondPart = function () {
        botui.message.add({delay: 1500, content: "宅男一枚"}).then(function () {
            botui.message.add({delay: 1500, content: "理工出身，爱好文哲"}).then(function () {
                botui.message.add({delay: 1200, content: "兴趣广泛，软件，硬件，古典文学，埙，文鸟，厨艺都有涉猎"}).then(function () {
                    botui.message.add({
                        delay: 1500,
                        content: "当下咸鱼一枚，立志做一个有梦想的咸鱼💪"
                    }).then(function () {
                        botui.message.add({delay: 1800, content: "目前喜欢音乐、写信、看书、接触新事物"}).then(function () {
                            botui.action.button({
                                delay: 1100,
                                action: [{text: "个人简介是什么呢？🤔", value: "what-info"}]
                            }).then(function () {
                                thirdPart()
                            })
                        })
                    })
                })
            })
        })
    }, thirdPart = function () {
        botui.message.add({delay: 1e3, content: "我们应该，成为自己想成为的人;而不是，成为别人想要你成为的人。。。"}).then(function () {
            botui.action.button({delay: 1500, action: [{text: "域名有什么含义吗？", value: "why-domain"}]}).then(function (a) {
                fourthPart()
            })
        })
    }, fourthPart = function () {
        botui.message.add({delay: 1e3, content: "emmmmm，本姓周，251跟我名字缩写很像。。。"}).then(function () {
            botui.message.add({delay: 1600, content: "那么，相遇就是缘分，希望你万事如意 ^_^"})
        })
    }
})