window.addEventListener('click', window_Clicked);//Webページ内でクリックされたらメッセージを送る。
function window_Clicked() {
    //メッセージは今回は特に利用しないのでなんでもよい
    browser.runtime.sendMessage({ message: 'decrementIt' });
}

//バックグラウンド側からのメッセージを受け取ったとき。
browser.runtime.onMessage.addListener(function (msg) {
    console.log("Extension2 content:Message from background");
});