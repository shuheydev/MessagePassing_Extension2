//拡張機能のボタンが押されたときの処理
browser.browserAction.onClicked.addListener(function (tab) {
    //コンテンツスクリプト側にメッセージを送る
    browser.tabs.sendMessage(tab.id, { command:"decrementIt"});
    //IDがhogehogehogehogehogehoge@hogehoge（つまりExtension1）の拡張機能に対してメッセージを送る
    browser.runtime.sendMessage("hogehogehogehogehogehoge@hogehoge", { command: "decrementIt" });
});

//コンテンツスクリプトからメッセージを受け取った時の処理。
browser.runtime.onMessage.addListener(function (message) {
    count--;//バッジに表示する数字をインクリメント
    UpdateBadge();//バッジのカウントを更新
});
function UpdateBadge() {
    browser.browserAction.setBadgeText({ text: count.toString() });
    browser.browserAction.setBadgeBackgroundColor({ color: "green" });
}


//Extension1アドオンからメッセージが来た場合
browser.runtime.onMessageExternal.addListener(function (message, sender) {
    if (sender.id === "hogehogehogehogehogehoge@hogehoge") {
        count++;
        UpdateBadge();
    }
});


//カウント初期化
var count = 0;

//初回表示
UpdateBadge();
