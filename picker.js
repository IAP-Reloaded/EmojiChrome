document.getElementById("inputId").addEventListener("click", function() {
    chrome.runtime.getBackgroundPage(function(backgroundPage) {
        backgroundPage.helloWorld();
    });
}, false);

document.getElementById("inputId2").addEventListener("click", function() {
    chrome.runtime.getBackgroundPage(function(backgroundPage) {
        backgroundPage.metaStackOverflow();
    });
}, false);

document.getElementById("inputId3").addEventListener("click", function() {
    chrome.runtime.getBackgroundPage(function(backgroundPage) {
        backgroundPage.iconCat();
    });
}, false);

document.getElementById("devilsmile1").addEventListener("click", function() {
    chrome.runtime.getBackgroundPage(function(backgroundPage) {
        backgroundPage.devilSmile();
    });
}, false);

document.getElementById("winkytongue1").addEventListener("click", function() {
    chrome.runtime.getBackgroundPage(function(backgroundPage) {
        backgroundPage.winkyTongue();
    });
}, false);

document.getElementById("poop").addEventListener("click", function() {
    chrome.runtime.getBackgroundPage(function(backgroundPage) {
        backgroundPage.poop();
    });
}, false);

document.getElementById("chrome").addEventListener("click", function() {
    chrome.runtime.getBackgroundPage(function(backgroundPage) {
        backgroundPage.chromeIcon();
    });
}, false);

document.getElementById("foldedhands").addEventListener("click", function() {
    chrome.runtime.getBackgroundPage(function(backgroundPage) {
        backgroundPage.foldedHands();
    });
}, false);

document.getElementById("thumbsup").addEventListener("click", function() {
    chrome.runtime.getBackgroundPage(function(backgroundPage) {
        backgroundPage.thumbsUp();
    });
}, false);