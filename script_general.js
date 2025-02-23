(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"gap":10,"layout":"absolute","scrollBarColor":"#000000","scrollBarMargin":2,"minHeight":0,"class":"Player","minWidth":0,"data":{"locales":{"pt":"locale/pt.txt"},"history":{},"defaultLocale":"pt","textToSpeechConfig":{"pitch":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"stopBackgroundAudio":false,"rate":1,"volume":1,"speechOnInfoWindow":false},"name":"Player592","displayTooltipInTouchScreens":true},"id":"rootPlayer","backgroundColor":["#FFFFFF"],"start":"this.init()","children":["this.MainViewer"],"defaultMenu":["fullscreen","mute","rotation"],"scripts":{"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"cloneBindings":TDV.Tour.Script.cloneBindings,"setLocale":TDV.Tour.Script.setLocale,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"initQuiz":TDV.Tour.Script.initQuiz,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"clone":TDV.Tour.Script.clone,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"downloadFile":TDV.Tour.Script.downloadFile,"isPanorama":TDV.Tour.Script.isPanorama,"openLink":TDV.Tour.Script.openLink,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getPixels":TDV.Tour.Script.getPixels,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"executeJS":TDV.Tour.Script.executeJS,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"shareSocial":TDV.Tour.Script.shareSocial,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"showPopupImage":TDV.Tour.Script.showPopupImage,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"playAudioList":TDV.Tour.Script.playAudioList,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setValue":TDV.Tour.Script.setValue,"init":TDV.Tour.Script.init,"showWindow":TDV.Tour.Script.showWindow,"getMediaByName":TDV.Tour.Script.getMediaByName,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"mixObject":TDV.Tour.Script.mixObject,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"startMeasurement":TDV.Tour.Script.startMeasurement,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"quizStart":TDV.Tour.Script.quizStart,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"quizShowScore":TDV.Tour.Script.quizShowScore,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"quizFinish":TDV.Tour.Script.quizFinish,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getOverlays":TDV.Tour.Script.getOverlays,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getComponentByName":TDV.Tour.Script.getComponentByName,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"resumePlayers":TDV.Tour.Script.resumePlayers,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"textToSpeech":TDV.Tour.Script.textToSpeech,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getKey":TDV.Tour.Script.getKey,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getMainViewer":TDV.Tour.Script.getMainViewer,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setMapLocation":TDV.Tour.Script.setMapLocation,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"enableVR":TDV.Tour.Script.enableVR,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"disableVR":TDV.Tour.Script.disableVR,"historyGoBack":TDV.Tour.Script.historyGoBack,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"toggleVR":TDV.Tour.Script.toggleVR,"historyGoForward":TDV.Tour.Script.historyGoForward,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"registerKey":TDV.Tour.Script.registerKey,"translate":TDV.Tour.Script.translate,"existsKey":TDV.Tour.Script.existsKey,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"unregisterKey":TDV.Tour.Script.unregisterKey,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"initAnalytics":TDV.Tour.Script.initAnalytics,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"createTween":TDV.Tour.Script.createTween,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay},"watermark":false,"height":"100%","width":"100%","propagateClick":false,"hash": "171bdbe7058a23a1b1df6badc35e4a0fffc16f4cfca9fcca0e568da53faee041", "definitions": [{"items":[{"camera":"this.panorama_2CF35C4E_34D8_706E_41AF_2650FDF6CC03_camera","class":"PanoramaPlayListItem","media":"this.panorama_2CF35C4E_34D8_706E_41AF_2650FDF6CC03","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"class":"PlayList","id":"mainPlayList"},{"enterPointingToHorizon":true,"class":"PanoramaCamera","initialSequence":"this.sequence_222519D3_34D8_1076_41BB_38DECC523F21","initialPosition":{"pitch":-15.72,"class":"PanoramaCameraPosition","yaw":-24.9},"id":"panorama_2CF35C4E_34D8_706E_41AF_2650FDF6CC03_camera"},{"displayPlaybackBar":true,"viewerArea":"this.MainViewer","arrowKeysAction":"translate","class":"PanoramaPlayer","mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","aaEnabled":true,"keepModel3DLoadedWithoutLocation":true,"id":"MainViewerPanoramaPlayer"},{"hfov":360,"overlays":["this.overlay_238475C3_34D8_1056_41C3_9357E0E45B1C","this.overlay_2CB3CA1D_34D8_73F2_41B1_96A57F73B224","this.overlay_230EB2CB_34D8_1056_41A0_F8ACB0327D50","this.overlay_2C987169_34C8_1052_41C1_E00732F8FC1A","this.overlay_2308B5DA_34C9_F076_41A1_A4966278C370","this.overlay_23802F9C_34C8_10F2_4198_B992ADC72EB4","this.overlay_2FE6F155_34B8_3072_41C5_3633B72D8078"],"label":trans('panorama_2CF35C4E_34D8_706E_41AF_2650FDF6CC03.label'),"thumbnailUrl":"media/panorama_2CF35C4E_34D8_706E_41AF_2650FDF6CC03_t.webp","id":"panorama_2CF35C4E_34D8_706E_41AF_2650FDF6CC03","hfovMin":"120%","vfov":180,"class":"Panorama","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_2CF35C4E_34D8_706E_41AF_2650FDF6CC03_t.webp","cube":{"levels":[{"rowCount":6,"width":18432,"url":"media/panorama_2CF35C4E_34D8_706E_41AF_2650FDF6CC03_0/{face}/0/{row}_{column}.webp","height":3072,"colCount":36,"class":"TiledImageResourceLevel","tags":"ondemand"},{"rowCount":3,"width":9216,"url":"media/panorama_2CF35C4E_34D8_706E_41AF_2650FDF6CC03_0/{face}/1/{row}_{column}.webp","height":1536,"colCount":18,"class":"TiledImageResourceLevel","tags":"ondemand"},{"rowCount":2,"width":6144,"url":"media/panorama_2CF35C4E_34D8_706E_41AF_2650FDF6CC03_0/{face}/2/{row}_{column}.webp","height":1024,"colCount":12,"class":"TiledImageResourceLevel","tags":"ondemand"},{"rowCount":1,"width":3072,"url":"media/panorama_2CF35C4E_34D8_706E_41AF_2650FDF6CC03_0/{face}/3/{row}_{column}.webp","height":512,"colCount":6,"class":"TiledImageResourceLevel","tags":["ondemand","preload"]}],"class":"ImageResource"}}],"data":{"label":"BSWAVE"},"hfovMax":130},{"vrPointerSelectionColor":"#FF6600","subtitlesTextShadowVerticalLength":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipPaddingTop":4,"minHeight":50,"vrPointerSelectionTime":2000,"minWidth":100,"data":{"name":"Main Viewer"},"playbackBarBottom":5,"subtitlesTextShadowHorizontalLength":1,"toolTipFontSize":"1.11vmin","playbackBarHeight":10,"playbackBarHeadWidth":6,"playbackBarBackgroundColor":["#FFFFFF"],"progressBackgroundColorRatios":[0],"subtitlesFontFamily":"Arial","progressRight":"33%","playbackBarProgressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","toolTipPaddingLeft":6,"toolTipShadowColor":"#333138","playbackBarBackgroundOpacity":1,"playbackBarProgressBorderRadius":0,"progressOpacity":0,"playbackBarRight":0,"progressBarBackgroundColorDirection":"horizontal","progressBarBorderColor":"#000000","playbackBarProgressBackgroundColor":["#3399FF"],"progressBarBackgroundColorRatios":[0],"vrPointerColor":"#FFFFFF","playbackBarHeadShadowOpacity":0.7,"propagateClick":false,"toolTipBorderColor":"#767676","progressBorderColor":"#000000","subtitlesTop":0,"progressBarBackgroundColor":["#3399FF"],"subtitlesTextShadowColor":"#000000","toolTipTextShadowColor":"#000000","progressBackgroundColor":["#000000"],"class":"ViewerArea","playbackBarProgressBackgroundColorRatios":[0],"toolTipFontColor":"#606060","progressBottom":10,"toolTipBackgroundColor":"#F6F6F6","progressHeight":2,"id":"MainViewer","playbackBarBorderRadius":0,"subtitlesBottom":50,"playbackBarProgressBorderColor":"#000000","subtitlesGap":0,"toolTipPaddingRight":6,"progressBorderSize":0,"progressBarBorderSize":0,"firstTransitionDuration":0,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesBackgroundColor":"#000000","progressBarOpacity":0,"playbackBarHeadBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","progressBarBorderRadius":2,"subtitlesBorderColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"subtitlesFontSize":"3vmin","surfaceReticleColor":"#FFFFFF","playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"progressBorderRadius":2,"playbackBarHeadShadowBlurRadius":3,"playbackBarLeft":0,"subtitlesTextShadowOpacity":1,"toolTipFontFamily":"Arial","playbackBarHeadShadowColor":"#000000","playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"vrThumbstickRotationStep":20,"subtitlesFontColor":"#FFFFFF","playbackBarHeadBorderSize":0,"progressLeft":"33%","playbackBarHeadShadow":true,"height":"100%","toolTipPaddingBottom":4,"width":"100%"},{"class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"id":"sequence_222519D3_34D8_1076_41BB_38DECC523F21"},{"data":{"label":"Beach Park"},"maps":[],"enabledInCardboard":true,"items":[{"pitch":8.34,"yaw":-178.72,"data":{"label":"Beach Park"},"distance":50,"image":"this.res_2CBA38E7_34C8_305E_41C5_B25F62F9C8B3","hfov":10.5,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","vfov":17.57}],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_23F615D4_34D8_1072_41C7_99B1A2D4F6E0"],"useHandCursor":true,"id":"overlay_238475C3_34D8_1056_41C3_9357E0E45B1C"},{"data":{"label":"Golf Ville"},"maps":[],"enabledInCardboard":true,"items":[{"pitch":8.45,"yaw":98.37,"data":{"label":"Golf Ville"},"distance":50,"image":"this.res_2CB9E8E7_34C8_305E_41A5_2A8E11EDAB28","hfov":12.29,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","vfov":20.56}],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_2CA40A3C_34D8_7032_41C3_843B12325BE5"],"useHandCursor":true,"id":"overlay_2CB3CA1D_34D8_73F2_41B1_96A57F73B224"},{"data":{"label":"Porto das Dunas"},"maps":[],"enabledInCardboard":true,"items":[{"pitch":11.22,"yaw":140.3,"data":{"label":"Porto das Dunas"},"distance":50,"image":"this.res_2CB988E7_34C8_305E_41B7_5E229FFBEFF9","hfov":11.42,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","vfov":19.11}],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_237EE2EB_34D8_1056_41BE_29BF4E9CD792"],"useHandCursor":true,"id":"overlay_230EB2CB_34D8_1056_41A0_F8ACB0327D50"},{"data":{"label":"Poligono"},"maps":[],"enabledInCardboard":true,"items":[{"pitch":-29.3,"yaw":-26.11,"distance":50,"image":{"levels":[{"width":2048,"url":"media/panorama_2CF35C4E_34D8_706E_41AF_2650FDF6CC03_HS_w1q6uypl.webp","height":1147,"class":"ImageResourceLevel"}],"class":"ImageResource"},"data":{"label":"Poligono"},"class":"HotspotPanoramaOverlayImage","hfov":101,"vfov":68.42}],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_23AAF1B8_34C8_1032_41C1_C6FD54A86D3B"],"useHandCursor":true,"id":"overlay_2C987169_34C8_1052_41C1_E00732F8FC1A"},{"data":{"label":"Mandara By Yoo"},"maps":[],"enabledInCardboard":true,"items":[{"pitch":9.11,"yaw":2.48,"data":{"label":"Mandara By Yoo"},"distance":50,"image":"this.res_2CB9B8E8_34C8_3052_41C1_33E4FC4E6678","hfov":10.7,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","vfov":17.89}],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_23525619_34C9_F3F2_41B0_935B24D3131B"],"useHandCursor":true,"id":"overlay_2308B5DA_34C9_F076_41A1_A4966278C370"},{"data":{"label":"Mandara Kauai"},"maps":[],"enabledInCardboard":true,"items":[{"pitch":7.21,"yaw":11.02,"data":{"label":"Mandara Kauai"},"distance":50,"image":"this.res_2CB9A8E8_34C8_3052_41A8_A025F0AD359A","hfov":7.35,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","vfov":12.3}],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_23F6FFA7_34C8_10DE_41BE_8F3522B9B5D0"],"useHandCursor":true,"id":"overlay_23802F9C_34C8_10F2_4198_B992ADC72EB4"},{"data":{"label":"Logo BS Wave"},"maps":[],"enabledInCardboard":true,"items":[{"pitch":-32.01,"yaw":-17.42,"data":{"label":"Logo BS Wave"},"distance":50,"image":"this.res_2F6B8FA8_34B8_10D2_4195_ACF29F6ACEE0","hfov":41.13,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","vfov":13.99}],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_2FE7B156_34B8_307E_419E_61D7D48EA9FE"],"useHandCursor":true,"id":"overlay_2FE6F155_34B8_3072_41C5_3633B72D8078"},{"levels":[{"width":338,"url":"media/res_2CBA38E7_34C8_305E_41C5_B25F62F9C8B3_0.webp","height":565,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_2CBA38E7_34C8_305E_41C5_B25F62F9C8B3"},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_23F615D4_34D8_1072_41C7_99B1A2D4F6E0","mapColor":"any","displayTooltipInTouchScreens":true},{"levels":[{"width":396,"url":"media/res_2CB9E8E7_34C8_305E_41A5_2A8E11EDAB28_0.webp","height":662,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_2CB9E8E7_34C8_305E_41A5_2A8E11EDAB28"},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_2CA40A3C_34D8_7032_41C3_843B12325BE5","mapColor":"any","displayTooltipInTouchScreens":true},{"levels":[{"width":368,"url":"media/res_2CB988E7_34C8_305E_41B7_5E229FFBEFF9_0.webp","height":610,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_2CB988E7_34C8_305E_41B7_5E229FFBEFF9"},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_237EE2EB_34D8_1056_41BE_29BF4E9CD792","mapColor":"any","displayTooltipInTouchScreens":true},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_23AAF1B8_34C8_1032_41C1_C6FD54A86D3B","mapColor":"image","displayTooltipInTouchScreens":true},{"levels":[{"width":344,"url":"media/res_2CB9B8E8_34C8_3052_41C1_33E4FC4E6678_0.webp","height":576,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_2CB9B8E8_34C8_3052_41C1_33E4FC4E6678"},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_23525619_34C9_F3F2_41B0_935B24D3131B","mapColor":"any","displayTooltipInTouchScreens":true},{"levels":[{"width":236,"url":"media/res_2CB9A8E8_34C8_3052_41A8_A025F0AD359A_0.webp","height":395,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_2CB9A8E8_34C8_3052_41A8_A025F0AD359A"},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_23F6FFA7_34C8_10DE_41BE_8F3522B9B5D0","mapColor":"any","displayTooltipInTouchScreens":true},{"levels":[{"width":370,"url":"media/res_2F6B8FA8_34B8_10D2_4195_ACF29F6ACEE0_0.webp","height":102,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_2F6B8FA8_34B8_10D2_4195_ACF29F6ACEE0"},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_2FE7B156_34B8_307E_419E_61D7D48EA9FE","mapColor":"any","displayTooltipInTouchScreens":true}],"backgroundColorRatios":[0]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.0.6, Sun Feb 23 2025