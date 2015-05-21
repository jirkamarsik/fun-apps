var player = (function(){

var videoUrlPublic = "http://www.dailymotion.com/video/x2p23ey_regis-doesn-t-forget-to-pull_school";
var videoId = "x2p23ey_regis-doesn-t-forget-to-pull_school";// TODO retrieve the video id from the video url
var videoDiv = $("#dm-video");

function onEvent(eventName) {
    return function(data) {
        console.log(eventName);
        if (eventName == "apiready") {
            //log('video_player_ready', {}, video_id.replace(/video_/, ''));
        }
        else if (eventName == "play") {
            //log( 'play_video', { 'currentTime': parseInt(myPlayer.currentTime()) })
        }
        else if (eventName == "seeked") {
            //log('seek_video', { 'new_time': parseInt(myPlayer.currentTime())});
        }
        else if (eventName == "pause") {
            //log('pause_video', { 'currentTime': parseInt(myPlayer.currentTime()) }); 
        }
        else if (eventName == "ended") {
            //log('stop_video', { 'currentTime': parseInt(myPlayer.currentTime())} );
        }
    }
}

// Events to log:
var player = DM.player("dm-video", {
    video: videoId,
    width: 480,
    height: 270,
    events: {
        apiready: onEvent("apiready"),// video_player_ready
        play: onEvent("play"), // play_video
        pause: onEvent("pause"), // pause_video
        seeked: onEvent("seeked"), // seek_video
        ended: onEvent("ended"), // stop_video
    }
});
// The following events are incompatible with the DailyMotion API:
// https://developer.dailymotion.com/documentation#player-api-events
// https://github.com/videojs/video.js/blob/stable/docs/api/vjs.Player.md#events
// load_video : Supposed to be triggered on "loadstart". "Fired when the user agent begins looking for media data". Perhaps can we use the "progress" event?
// video_hide_subtitle : no access to subtitles api
// video_show_subtitle : no access to subtitles api
// speed_change_video : no access to playback rate events
// TODO answer these questions:
// 1. Can we add subtitles?
// 2. Can we change the playback rate?

function log(eventName, data) {
    //var logInfo;

    //// Default parameters that always get logged.
    //logInfo = {
        //id: global_id
    //};

    //// If extra parameters were passed to the log.
    //if (data) {
        //$.each(data, function (paramName, value) {
            //logInfo[paramName] = value;
        //});
    //}

    //Logger.log(eventName, logInfo);
}

return player;
}());
