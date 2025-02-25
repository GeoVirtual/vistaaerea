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
var script = {"layout":"absolute","watermark":false,"gap":10,"id":"rootPlayer","start":"this.init()","data":{"name":"Player592","textToSpeechConfig":{"pitch":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"speechOnTooltip":false,"stopBackgroundAudio":false,"volume":1,"rate":1},"history":{},"displayTooltipInTouchScreens":true,"locales":{"pt":"locale/pt.txt"},"defaultLocale":"pt"},"backgroundColor":["#FFFFFF"],"scrollBarColor":"#000000","class":"Player","defaultMenu":["fullscreen","mute","rotation"],"scrollBarMargin":2,"scripts":{"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"isPanorama":TDV.Tour.Script.isPanorama,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"openLink":TDV.Tour.Script.openLink,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"enableVR":TDV.Tour.Script.enableVR,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"resumePlayers":TDV.Tour.Script.resumePlayers,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"clone":TDV.Tour.Script.clone,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"downloadFile":TDV.Tour.Script.downloadFile,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"historyGoBack":TDV.Tour.Script.historyGoBack,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"showPopupImage":TDV.Tour.Script.showPopupImage,"disableVR":TDV.Tour.Script.disableVR,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getMediaByName":TDV.Tour.Script.getMediaByName,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getPixels":TDV.Tour.Script.getPixels,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setValue":TDV.Tour.Script.setValue,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getComponentByName":TDV.Tour.Script.getComponentByName,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"toggleVR":TDV.Tour.Script.toggleVR,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"showWindow":TDV.Tour.Script.showWindow,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"historyGoForward":TDV.Tour.Script.historyGoForward,"registerKey":TDV.Tour.Script.registerKey,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setMapLocation":TDV.Tour.Script.setMapLocation,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"unregisterKey":TDV.Tour.Script.unregisterKey,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"init":TDV.Tour.Script.init,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"quizShowScore":TDV.Tour.Script.quizShowScore,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getMainViewer":TDV.Tour.Script.getMainViewer,"executeJS":TDV.Tour.Script.executeJS,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"existsKey":TDV.Tour.Script.existsKey,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"initAnalytics":TDV.Tour.Script.initAnalytics,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"playAudioList":TDV.Tour.Script.playAudioList,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"quizStart":TDV.Tour.Script.quizStart,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"startMeasurement":TDV.Tour.Script.startMeasurement,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"initQuiz":TDV.Tour.Script.initQuiz,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"cloneBindings":TDV.Tour.Script.cloneBindings,"quizFinish":TDV.Tour.Script.quizFinish,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getKey":TDV.Tour.Script.getKey,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"mixObject":TDV.Tour.Script.mixObject,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"shareSocial":TDV.Tour.Script.shareSocial,"createTween":TDV.Tour.Script.createTween,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"translate":TDV.Tour.Script.translate,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"textToSpeech":TDV.Tour.Script.textToSpeech,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getOverlays":TDV.Tour.Script.getOverlays,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setLocale":TDV.Tour.Script.setLocale},"hash": "269f156eeb83d1906d7028a27cb2d05ae6b01b0f89396d046e8227f93a33e74e", "definitions": [{"surfaceReticleColor":"#FFFFFF","subtitlesTextShadowColor":"#000000","width":"100%","height":"100%","toolTipPaddingTop":4,"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBorderRadius":2,"vrPointerSelectionTime":2000,"subtitlesTextShadowVerticalLength":1,"progressLeft":"33%","playbackBarBottom":5,"data":{"name":"Main Viewer"},"toolTipFontFamily":"Arial","toolTipFontSize":"1.11vmin","class":"ViewerArea","toolTipPaddingBottom":4,"toolTipFontColor":"#606060","playbackBarHeight":10,"subtitlesFontSize":"3vmin","playbackBarBackgroundColor":["#FFFFFF"],"subtitlesTextShadowOpacity":1,"playbackBarProgressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","subtitlesFontColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"playbackBarRight":0,"playbackBarBackgroundOpacity":1,"playbackBarProgressBorderRadius":0,"surfaceReticleSelectionColor":"#FFFFFF","vrThumbstickRotationStep":20,"playbackBarHeadWidth":6,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesBorderColor":"#FFFFFF","playbackBarHeadShadowOpacity":0.7,"toolTipPaddingRight":6,"subtitlesTextShadowHorizontalLength":1,"progressBackgroundColorRatios":[0],"progressRight":"33%","vrPointerColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","subtitlesBottom":50,"id":"MainViewer","progressBarBackgroundColorDirection":"horizontal","playbackBarProgressBorderColor":"#000000","progressOpacity":0,"playbackBarBorderRadius":0,"toolTipTextShadowColor":"#000000","progressBarBackgroundColorRatios":[0],"toolTipPaddingLeft":6,"toolTipShadowColor":"#333138","progressBarBorderColor":"#000000","playbackBarHeadBorderRadius":0,"progressBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"],"toolTipBorderColor":"#767676","playbackBarHeadShadowBlurRadius":3,"progressBackgroundColor":["#000000"],"subtitlesFontFamily":"Arial","progressBarOpacity":0,"playbackBarLeft":0,"playbackBarHeadBorderColor":"#000000","toolTipBackgroundColor":"#F6F6F6","playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesTop":0,"vrPointerSelectionColor":"#FF6600","progressBottom":10,"playbackBarBorderSize":0,"propagateClick":false,"firstTransitionDuration":0,"progressBorderSize":0,"playbackBarHeadShadowColor":"#000000","progressHeight":2,"progressBarBorderRadius":2,"playbackBarHeadShadow":true,"progressBarBorderSize":0,"playbackBarHeadBorderSize":0,"subtitlesGap":0,"subtitlesBackgroundColor":"#000000","minHeight":50,"minWidth":100},{"initialSequence":"this.sequence_222519D3_34D8_1076_41BB_38DECC523F21","initialPosition":{"pitch":-15.72,"yaw":-24.9,"class":"PanoramaCameraPosition"},"enterPointingToHorizon":true,"id":"panorama_2CF35C4E_34D8_706E_41AF_2650FDF6CC03_camera","class":"PanoramaCamera"},{"label":trans('panorama_2CF35C4E_34D8_706E_41AF_2650FDF6CC03.label'),"hfovMax":130,"hfovMin":"120%","thumbnailUrl":"media/panorama_2CF35C4E_34D8_706E_41AF_2650FDF6CC03_t.webp","data":{"label":"BSWAVE"},"id":"panorama_2CF35C4E_34D8_706E_41AF_2650FDF6CC03","vfov":180,"overlays":["this.overlay_238475C3_34D8_1056_41C3_9357E0E45B1C","this.overlay_2CB3CA1D_34D8_73F2_41B1_96A57F73B224","this.overlay_230EB2CB_34D8_1056_41A0_F8ACB0327D50","this.overlay_2C987169_34C8_1052_41C1_E00732F8FC1A","this.overlay_2308B5DA_34C9_F076_41A1_A4966278C370","this.overlay_23802F9C_34C8_10F2_4198_B992ADC72EB4","this.overlay_35964E92_3A89_7133_41AC_DC5A95F37080"],"hfov":360,"frames":[{"cube":{"levels":[{"width":18432,"url":"media/panorama_2CF35C4E_34D8_706E_41AF_2650FDF6CC03_0/{face}/0/{row}_{column}.webp","rowCount":6,"height":3072,"colCount":36,"class":"TiledImageResourceLevel","tags":"ondemand"},{"width":9216,"url":"media/panorama_2CF35C4E_34D8_706E_41AF_2650FDF6CC03_0/{face}/1/{row}_{column}.webp","rowCount":3,"height":1536,"colCount":18,"class":"TiledImageResourceLevel","tags":"ondemand"},{"width":6144,"url":"media/panorama_2CF35C4E_34D8_706E_41AF_2650FDF6CC03_0/{face}/2/{row}_{column}.webp","rowCount":2,"height":1024,"colCount":12,"class":"TiledImageResourceLevel","tags":"ondemand"},{"width":3072,"url":"media/panorama_2CF35C4E_34D8_706E_41AF_2650FDF6CC03_0/{face}/3/{row}_{column}.webp","rowCount":1,"height":512,"colCount":6,"class":"TiledImageResourceLevel","tags":["ondemand","preload"]}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_2CF35C4E_34D8_706E_41AF_2650FDF6CC03_t.webp","class":"CubicPanoramaFrame"}],"class":"Panorama"},{"mouseControlMode":"drag_rotation","arrowKeysAction":"translate","aaEnabled":true,"viewerArea":"this.MainViewer","displayPlaybackBar":true,"keepModel3DLoadedWithoutLocation":true,"touchControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer","class":"PanoramaPlayer"},{"items":[{"camera":"this.panorama_2CF35C4E_34D8_706E_41AF_2650FDF6CC03_camera","media":"this.panorama_2CF35C4E_34D8_706E_41AF_2650FDF6CC03","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem"}],"id":"mainPlayList","class":"PlayList"},{"movements":[{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"id":"sequence_222519D3_34D8_1076_41BB_38DECC523F21","class":"PanoramaCameraSequence"},{"items":[{"pitch":8.34,"yaw":-178.72,"distance":50,"image":"this.res_2CBA38E7_34C8_305E_41C5_B25F62F9C8B3","hfov":10.5,"vfov":17.57,"scaleMode":"fit_inside","data":{"label":"Beach Park"},"class":"HotspotPanoramaOverlayImage"}],"enabledInCardboard":true,"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"Beach Park"},"useHandCursor":true,"id":"overlay_238475C3_34D8_1056_41C3_9357E0E45B1C","areas":["this.HotspotPanoramaOverlayArea_23F615D4_34D8_1072_41C7_99B1A2D4F6E0"]},{"items":[{"pitch":8.45,"yaw":98.37,"distance":50,"image":"this.res_2CB9E8E7_34C8_305E_41A5_2A8E11EDAB28","hfov":12.29,"vfov":20.56,"scaleMode":"fit_inside","data":{"label":"Golf Ville"},"class":"HotspotPanoramaOverlayImage"}],"enabledInCardboard":true,"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"Golf Ville"},"useHandCursor":true,"id":"overlay_2CB3CA1D_34D8_73F2_41B1_96A57F73B224","areas":["this.HotspotPanoramaOverlayArea_2CA40A3C_34D8_7032_41C3_843B12325BE5"]},{"items":[{"pitch":11.22,"yaw":140.3,"distance":50,"image":"this.res_2CB988E7_34C8_305E_41B7_5E229FFBEFF9","hfov":11.42,"vfov":19.11,"scaleMode":"fit_inside","data":{"label":"Porto das Dunas"},"class":"HotspotPanoramaOverlayImage"}],"enabledInCardboard":true,"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"Porto das Dunas"},"useHandCursor":true,"id":"overlay_230EB2CB_34D8_1056_41A0_F8ACB0327D50","areas":["this.HotspotPanoramaOverlayArea_237EE2EB_34D8_1056_41BE_29BF4E9CD792"]},{"items":[{"pitch":-29.41,"yaw":-27.2,"distance":50,"image":{"levels":[{"width":2048,"url":"media/panorama_2CF35C4E_34D8_706E_41AF_2650FDF6CC03_HS_w1q6uypl.webp","height":1110,"class":"ImageResourceLevel"}],"class":"ImageResource"},"hfov":99.35,"data":{"label":"Poligono"},"vfov":65.15,"class":"HotspotPanoramaOverlayImage"}],"enabledInCardboard":true,"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"Poligono"},"useHandCursor":true,"id":"overlay_2C987169_34C8_1052_41C1_E00732F8FC1A","areas":["this.HotspotPanoramaOverlayArea_23AAF1B8_34C8_1032_41C1_C6FD54A86D3B"]},{"items":[{"pitch":9.11,"yaw":2.48,"distance":50,"image":"this.res_2CB9B8E8_34C8_3052_41C1_33E4FC4E6678","hfov":10.7,"vfov":17.89,"scaleMode":"fit_inside","data":{"label":"Mandara By Yoo"},"class":"HotspotPanoramaOverlayImage"}],"enabledInCardboard":true,"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"Mandara By Yoo"},"useHandCursor":true,"id":"overlay_2308B5DA_34C9_F076_41A1_A4966278C370","areas":["this.HotspotPanoramaOverlayArea_23525619_34C9_F3F2_41B0_935B24D3131B"]},{"items":[{"pitch":7.21,"yaw":11.02,"distance":50,"image":"this.res_2CB9A8E8_34C8_3052_41A8_A025F0AD359A","hfov":7.35,"vfov":12.3,"scaleMode":"fit_inside","data":{"label":"Mandara Kauai"},"class":"HotspotPanoramaOverlayImage"}],"enabledInCardboard":true,"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"Mandara Kauai"},"useHandCursor":true,"id":"overlay_23802F9C_34C8_10F2_4198_B992ADC72EB4","areas":["this.HotspotPanoramaOverlayArea_23F6FFA7_34C8_10DE_41BE_8F3522B9B5D0"]},{"items":[{"image":"this.res_34D4F634_3A88_B177_41AF_B3BA144227F8","vertices":[{"pitch":-16.91,"yaw":-37.93,"class":"PanoramaPoint"},{"pitch":-17.72,"yaw":7.06,"class":"PanoramaPoint"},{"pitch":-47.95,"yaw":26.26,"class":"PanoramaPoint"},{"pitch":-25.71,"yaw":-83.65,"class":"PanoramaPoint"}],"data":{"label":"Logo BS Wave"},"class":"QuadHotspotPanoramaOverlayImage","distance":50}],"enabledInCardboard":true,"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"Logo BS Wave"},"useHandCursor":true,"id":"overlay_35964E92_3A89_7133_41AC_DC5A95F37080","areas":["this.HotspotPanoramaOverlayArea_35A2EE9F_3A89_7131_41A7_07A9104DF021"]},{"levels":[{"width":338,"url":"media/res_2CBA38E7_34C8_305E_41C5_B25F62F9C8B3_0.webp","height":565,"class":"ImageResourceLevel"}],"id":"res_2CBA38E7_34C8_305E_41C5_B25F62F9C8B3","class":"ImageResource"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_23F615D4_34D8_1072_41C7_99B1A2D4F6E0","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"levels":[{"width":396,"url":"media/res_2CB9E8E7_34C8_305E_41A5_2A8E11EDAB28_0.webp","height":662,"class":"ImageResourceLevel"}],"id":"res_2CB9E8E7_34C8_305E_41A5_2A8E11EDAB28","class":"ImageResource"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_2CA40A3C_34D8_7032_41C3_843B12325BE5","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"levels":[{"width":368,"url":"media/res_2CB988E7_34C8_305E_41B7_5E229FFBEFF9_0.webp","height":606,"class":"ImageResourceLevel"}],"id":"res_2CB988E7_34C8_305E_41B7_5E229FFBEFF9","class":"ImageResource"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_237EE2EB_34D8_1056_41BE_29BF4E9CD792","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_23AAF1B8_34C8_1032_41C1_C6FD54A86D3B","class":"HotspotPanoramaOverlayArea","mapColor":"image"},{"levels":[{"width":344,"url":"media/res_2CB9B8E8_34C8_3052_41C1_33E4FC4E6678_0.webp","height":576,"class":"ImageResourceLevel"}],"id":"res_2CB9B8E8_34C8_3052_41C1_33E4FC4E6678","class":"ImageResource"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_23525619_34C9_F3F2_41B0_935B24D3131B","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"levels":[{"width":236,"url":"media/res_2CB9A8E8_34C8_3052_41A8_A025F0AD359A_0.webp","height":395,"class":"ImageResourceLevel"}],"id":"res_2CB9A8E8_34C8_3052_41A8_A025F0AD359A","class":"ImageResource"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_23F6FFA7_34C8_10DE_41BE_8F3522B9B5D0","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"levels":[{"width":591,"url":"media/res_34D4F634_3A88_B177_41AF_B3BA144227F8_0.webp","height":592,"class":"ImageResourceLevel"}],"id":"res_34D4F634_3A88_B177_41AF_B3BA144227F8","class":"ImageResource"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_35A2EE9F_3A89_7131_41A7_07A9104DF021","class":"HotspotPanoramaOverlayArea","mapColor":"any"}],"propagateClick":false,"width":"100%","height":"100%","backgroundColorRatios":[0],"minWidth":0,"minHeight":0,"children":["this.MainViewer"]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.0.6, Mon Feb 24 2025