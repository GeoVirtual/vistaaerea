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
var script = {"minWidth":0,"scrollBarColor":"#000000","scrollBarMargin":2,"gap":10,"data":{"defaultLocale":"pt","history":{},"textToSpeechConfig":{"pitch":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"rate":1,"volume":1,"stopBackgroundAudio":false,"speechOnInfoWindow":false},"name":"Player592","locales":{"pt":"locale/pt.txt"},"displayTooltipInTouchScreens":true},"watermark":false,"id":"rootPlayer","backgroundColor":["#FFFFFF"],"class":"Player","children":["this.MainViewer"],"scripts":{"getOverlays":TDV.Tour.Script.getOverlays,"unregisterKey":TDV.Tour.Script.unregisterKey,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"registerKey":TDV.Tour.Script.registerKey,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"openLink":TDV.Tour.Script.openLink,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"clone":TDV.Tour.Script.clone,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"initAnalytics":TDV.Tour.Script.initAnalytics,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"downloadFile":TDV.Tour.Script.downloadFile,"toggleVR":TDV.Tour.Script.toggleVR,"disableVR":TDV.Tour.Script.disableVR,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setValue":TDV.Tour.Script.setValue,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getPixels":TDV.Tour.Script.getPixels,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"cloneBindings":TDV.Tour.Script.cloneBindings,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"quizShowScore":TDV.Tour.Script.quizShowScore,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"init":TDV.Tour.Script.init,"shareSocial":TDV.Tour.Script.shareSocial,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"mixObject":TDV.Tour.Script.mixObject,"showWindow":TDV.Tour.Script.showWindow,"executeJS":TDV.Tour.Script.executeJS,"resumePlayers":TDV.Tour.Script.resumePlayers,"quizStart":TDV.Tour.Script.quizStart,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getKey":TDV.Tour.Script.getKey,"isPanorama":TDV.Tour.Script.isPanorama,"playAudioList":TDV.Tour.Script.playAudioList,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"historyGoForward":TDV.Tour.Script.historyGoForward,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"textToSpeech":TDV.Tour.Script.textToSpeech,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getComponentByName":TDV.Tour.Script.getComponentByName,"enableVR":TDV.Tour.Script.enableVR,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"existsKey":TDV.Tour.Script.existsKey,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"showPopupImage":TDV.Tour.Script.showPopupImage,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getMainViewer":TDV.Tour.Script.getMainViewer,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"quizFinish":TDV.Tour.Script.quizFinish,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"startMeasurement":TDV.Tour.Script.startMeasurement,"historyGoBack":TDV.Tour.Script.historyGoBack,"setMapLocation":TDV.Tour.Script.setMapLocation,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getMediaByName":TDV.Tour.Script.getMediaByName,"createTween":TDV.Tour.Script.createTween,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"initQuiz":TDV.Tour.Script.initQuiz,"translate":TDV.Tour.Script.translate,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setLocale":TDV.Tour.Script.setLocale,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio},"defaultMenu":["fullscreen","mute","rotation"],"layout":"absolute","start":"this.init()","height":"100%","width":"100%","hash": "acca7493fa79b29e2c9538d0f831adb759563df10cf81f0d26cc71c880d62921", "definitions": [{"displayPlaybackBar":true,"class":"PanoramaPlayer","viewerArea":"this.MainViewer","arrowKeysAction":"translate","keepModel3DLoadedWithoutLocation":true,"mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","aaEnabled":true,"id":"MainViewerPanoramaPlayer"},{"id":"mainPlayList","items":[{"media":"this.panorama_2CF35C4E_34D8_706E_41AF_2650FDF6CC03","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","camera":"this.panorama_2CF35C4E_34D8_706E_41AF_2650FDF6CC03_camera","player":"this.MainViewerPanoramaPlayer"}],"class":"PlayList"},{"enterPointingToHorizon":true,"class":"PanoramaCamera","initialPosition":{"pitch":-15.72,"class":"PanoramaCameraPosition","yaw":-24.9},"id":"panorama_2CF35C4E_34D8_706E_41AF_2650FDF6CC03_camera","initialSequence":"this.sequence_222519D3_34D8_1076_41BB_38DECC523F21"},{"subtitlesFontFamily":"Arial","subtitlesTextShadowVerticalLength":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipPaddingTop":4,"playbackBarBottom":5,"vrPointerSelectionTime":2000,"data":{"name":"Main Viewer"},"class":"ViewerArea","toolTipFontSize":"1.11vmin","playbackBarHeight":10,"vrPointerSelectionColor":"#FF6600","playbackBarBackgroundColor":["#FFFFFF"],"progressBackgroundColorRatios":[0],"playbackBarHeadWidth":6,"progressRight":"33%","playbackBarProgressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","surfaceReticleColor":"#FFFFFF","playbackBarRight":0,"toolTipShadowColor":"#333138","playbackBarBackgroundOpacity":1,"progressOpacity":0,"toolTipPaddingLeft":6,"progressBarBackgroundColorDirection":"horizontal","playbackBarProgressBorderRadius":0,"subtitlesTop":0,"progressBarBorderColor":"#000000","playbackBarProgressBackgroundColor":["#3399FF"],"progressBarBackgroundColorRatios":[0],"subtitlesBottom":50,"subtitlesTextShadowColor":"#000000","playbackBarHeadShadowOpacity":0.7,"toolTipBorderColor":"#767676","vrPointerColor":"#FFFFFF","propagateClick":false,"subtitlesGap":0,"progressBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"],"subtitlesFontSize":"3vmin","subtitlesBackgroundColor":"#000000","toolTipTextShadowColor":"#000000","subtitlesBackgroundOpacity":0.2,"progressBackgroundColor":["#000000"],"progressBarOpacity":0,"toolTipFontColor":"#606060","vrThumbstickRotationStep":20,"playbackBarProgressBackgroundColorRatios":[0],"progressBottom":10,"progressHeight":2,"subtitlesTextShadowHorizontalLength":1,"id":"MainViewer","playbackBarBorderRadius":0,"playbackBarProgressBorderColor":"#000000","toolTipPaddingRight":6,"progressBorderSize":0,"progressBarBorderSize":0,"toolTipBackgroundColor":"#F6F6F6","subtitlesBorderColor":"#FFFFFF","subtitlesTextShadowOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"firstTransitionDuration":0,"progressBarBorderRadius":2,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"progressBorderRadius":2,"subtitlesFontColor":"#FFFFFF","playbackBarHeadShadowBlurRadius":3,"playbackBarLeft":0,"toolTipFontFamily":"Arial","width":"100%","playbackBarHeadShadowColor":"#000000","playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"progressLeft":"33%","playbackBarHeadBorderSize":0,"minWidth":100,"playbackBarHeadShadow":true,"height":"100%","minHeight":50,"toolTipPaddingBottom":4},{"thumbnailUrl":"media/panorama_2CF35C4E_34D8_706E_41AF_2650FDF6CC03_t.webp","label":trans('panorama_2CF35C4E_34D8_706E_41AF_2650FDF6CC03.label'),"frames":[{"cube":{"class":"ImageResource","levels":[{"width":18432,"url":"media/panorama_2CF35C4E_34D8_706E_41AF_2650FDF6CC03_0/{face}/0/{row}_{column}.webp","colCount":36,"class":"TiledImageResourceLevel","tags":"ondemand","height":3072,"rowCount":6},{"width":9216,"url":"media/panorama_2CF35C4E_34D8_706E_41AF_2650FDF6CC03_0/{face}/1/{row}_{column}.webp","colCount":18,"class":"TiledImageResourceLevel","tags":"ondemand","height":1536,"rowCount":3},{"width":6144,"url":"media/panorama_2CF35C4E_34D8_706E_41AF_2650FDF6CC03_0/{face}/2/{row}_{column}.webp","colCount":12,"class":"TiledImageResourceLevel","tags":"ondemand","height":1024,"rowCount":2},{"width":3072,"url":"media/panorama_2CF35C4E_34D8_706E_41AF_2650FDF6CC03_0/{face}/3/{row}_{column}.webp","colCount":6,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"height":512,"rowCount":1}]},"thumbnailUrl":"media/panorama_2CF35C4E_34D8_706E_41AF_2650FDF6CC03_t.webp","class":"CubicPanoramaFrame"}],"hfov":360,"id":"panorama_2CF35C4E_34D8_706E_41AF_2650FDF6CC03","hfovMin":"120%","class":"Panorama","data":{"label":"BSWAVE"},"vfov":180,"hfovMax":130,"overlays":["this.overlay_238475C3_34D8_1056_41C3_9357E0E45B1C","this.overlay_2CB3CA1D_34D8_73F2_41B1_96A57F73B224","this.overlay_230EB2CB_34D8_1056_41A0_F8ACB0327D50","this.overlay_2C987169_34C8_1052_41C1_E00732F8FC1A","this.overlay_2308B5DA_34C9_F076_41A1_A4966278C370","this.overlay_23802F9C_34C8_10F2_4198_B992ADC72EB4","this.overlay_2FE6F155_34B8_3072_41C5_3633B72D8078"]},{"movements":[{"yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence","id":"sequence_222519D3_34D8_1076_41BB_38DECC523F21"},{"data":{"label":"Beach Park"},"areas":["this.HotspotPanoramaOverlayArea_23F615D4_34D8_1072_41C7_99B1A2D4F6E0"],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"maps":[],"items":[{"pitch":8.34,"class":"HotspotPanoramaOverlayImage","data":{"label":"Beach Park"},"distance":50,"image":"this.res_2CBA38E7_34C8_305E_41C5_B25F62F9C8B3","yaw":-178.72,"scaleMode":"fit_inside","hfov":10.5,"vfov":17.57}],"useHandCursor":true,"id":"overlay_238475C3_34D8_1056_41C3_9357E0E45B1C"},{"data":{"label":"Golf Ville"},"areas":["this.HotspotPanoramaOverlayArea_2CA40A3C_34D8_7032_41C3_843B12325BE5"],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"maps":[],"items":[{"pitch":8.45,"class":"HotspotPanoramaOverlayImage","data":{"label":"Golf Ville"},"distance":50,"image":"this.res_2CB9E8E7_34C8_305E_41A5_2A8E11EDAB28","yaw":98.37,"scaleMode":"fit_inside","hfov":12.29,"vfov":20.56}],"useHandCursor":true,"id":"overlay_2CB3CA1D_34D8_73F2_41B1_96A57F73B224"},{"data":{"label":"Porto das Dunas"},"areas":["this.HotspotPanoramaOverlayArea_237EE2EB_34D8_1056_41BE_29BF4E9CD792"],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"maps":[],"items":[{"pitch":11.22,"class":"HotspotPanoramaOverlayImage","data":{"label":"Porto das Dunas"},"distance":50,"image":"this.res_2CB988E7_34C8_305E_41B7_5E229FFBEFF9","yaw":140.3,"scaleMode":"fit_inside","hfov":11.42,"vfov":19.11}],"useHandCursor":true,"id":"overlay_230EB2CB_34D8_1056_41A0_F8ACB0327D50"},{"data":{"label":"Poligono"},"areas":["this.HotspotPanoramaOverlayArea_23AAF1B8_34C8_1032_41C1_C6FD54A86D3B"],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"maps":[],"items":[{"pitch":-29.35,"class":"HotspotPanoramaOverlayImage","image":{"levels":[{"width":2048,"url":"media/panorama_2CF35C4E_34D8_706E_41AF_2650FDF6CC03_HS_w1q6uypl.webp","class":"ImageResourceLevel","height":1073}],"class":"ImageResource"},"yaw":-26.55,"distance":50,"data":{"label":"Poligono"},"hfov":100.27,"vfov":64.22}],"useHandCursor":true,"id":"overlay_2C987169_34C8_1052_41C1_E00732F8FC1A"},{"data":{"label":"Mandara By Yoo"},"areas":["this.HotspotPanoramaOverlayArea_23525619_34C9_F3F2_41B0_935B24D3131B"],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"maps":[],"items":[{"pitch":9.11,"class":"HotspotPanoramaOverlayImage","data":{"label":"Mandara By Yoo"},"distance":50,"image":"this.res_2CB9B8E8_34C8_3052_41C1_33E4FC4E6678","yaw":2.48,"scaleMode":"fit_inside","hfov":10.7,"vfov":17.89}],"useHandCursor":true,"id":"overlay_2308B5DA_34C9_F076_41A1_A4966278C370"},{"data":{"label":"Mandara Kauai"},"areas":["this.HotspotPanoramaOverlayArea_23F6FFA7_34C8_10DE_41BE_8F3522B9B5D0"],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"maps":[],"items":[{"pitch":7.21,"class":"HotspotPanoramaOverlayImage","data":{"label":"Mandara Kauai"},"distance":50,"image":"this.res_2CB9A8E8_34C8_3052_41A8_A025F0AD359A","yaw":11.02,"scaleMode":"fit_inside","hfov":7.35,"vfov":12.3}],"useHandCursor":true,"id":"overlay_23802F9C_34C8_10F2_4198_B992ADC72EB4"},{"data":{"label":"Logo BS Wave"},"areas":["this.HotspotPanoramaOverlayArea_2FE7B156_34B8_307E_419E_61D7D48EA9FE"],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"maps":[],"items":[{"pitch":-32.01,"class":"HotspotPanoramaOverlayImage","data":{"label":"Logo BS Wave"},"distance":50,"image":"this.res_2F6B8FA8_34B8_10D2_4195_ACF29F6ACEE0","yaw":-17.42,"scaleMode":"fit_inside","hfov":41.13,"vfov":13.99}],"useHandCursor":true,"id":"overlay_2FE6F155_34B8_3072_41C5_3633B72D8078"},{"displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_23F615D4_34D8_1072_41C7_99B1A2D4F6E0","mapColor":"any"},{"levels":[{"width":338,"url":"media/res_2CBA38E7_34C8_305E_41C5_B25F62F9C8B3_0.webp","class":"ImageResourceLevel","height":565}],"class":"ImageResource","id":"res_2CBA38E7_34C8_305E_41C5_B25F62F9C8B3"},{"displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_2CA40A3C_34D8_7032_41C3_843B12325BE5","mapColor":"any"},{"levels":[{"width":396,"url":"media/res_2CB9E8E7_34C8_305E_41A5_2A8E11EDAB28_0.webp","class":"ImageResourceLevel","height":662}],"class":"ImageResource","id":"res_2CB9E8E7_34C8_305E_41A5_2A8E11EDAB28"},{"displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_237EE2EB_34D8_1056_41BE_29BF4E9CD792","mapColor":"any"},{"levels":[{"width":368,"url":"media/res_2CB988E7_34C8_305E_41B7_5E229FFBEFF9_0.webp","class":"ImageResourceLevel","height":609}],"class":"ImageResource","id":"res_2CB988E7_34C8_305E_41B7_5E229FFBEFF9"},{"displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_23AAF1B8_34C8_1032_41C1_C6FD54A86D3B","mapColor":"image"},{"displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_23525619_34C9_F3F2_41B0_935B24D3131B","mapColor":"any"},{"levels":[{"width":344,"url":"media/res_2CB9B8E8_34C8_3052_41C1_33E4FC4E6678_0.webp","class":"ImageResourceLevel","height":576}],"class":"ImageResource","id":"res_2CB9B8E8_34C8_3052_41C1_33E4FC4E6678"},{"displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_23F6FFA7_34C8_10DE_41BE_8F3522B9B5D0","mapColor":"any"},{"levels":[{"width":236,"url":"media/res_2CB9A8E8_34C8_3052_41A8_A025F0AD359A_0.webp","class":"ImageResourceLevel","height":395}],"class":"ImageResource","id":"res_2CB9A8E8_34C8_3052_41A8_A025F0AD359A"},{"displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_2FE7B156_34B8_307E_419E_61D7D48EA9FE","mapColor":"any"},{"levels":[{"width":370,"url":"media/res_2F6B8FA8_34B8_10D2_4195_ACF29F6ACEE0_0.webp","class":"ImageResourceLevel","height":102}],"class":"ImageResource","id":"res_2F6B8FA8_34B8_10D2_4195_ACF29F6ACEE0"}],"minHeight":0,"backgroundColorRatios":[0],"propagateClick":false};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.0.6, Sun Feb 23 2025