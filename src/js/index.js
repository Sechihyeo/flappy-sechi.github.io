const _0x242a47=_0x5401;(function(_0x44f7d0,_0x49dded){const _0x497e53=_0x5401,_0xacb8d5=_0x44f7d0();while(!![]){try{const _0x36ec34=parseInt(_0x497e53(0x209))/0x1+-parseInt(_0x497e53(0x203))/0x2+-parseInt(_0x497e53(0x20d))/0x3*(parseInt(_0x497e53(0x218))/0x4)+-parseInt(_0x497e53(0x217))/0x5*(-parseInt(_0x497e53(0x20a))/0x6)+parseInt(_0x497e53(0x207))/0x7*(parseInt(_0x497e53(0x1f4))/0x8)+-parseInt(_0x497e53(0x205))/0x9*(-parseInt(_0x497e53(0x1ff))/0xa)+-parseInt(_0x497e53(0x204))/0xb;if(_0x36ec34===_0x49dded)break;else _0xacb8d5['push'](_0xacb8d5['shift']());}catch(_0x253373){_0xacb8d5['push'](_0xacb8d5['shift']());}}}(_0x2694,0x59e65));const canvas=document[_0x242a47(0x208)](_0x242a47(0x212));let ctx;!canvas[_0x242a47(0x1fc)]&&canvas[_0x242a47(0x213)]();let Y,Yv,scene,TukimX,TukimY,scoreGiven,score,window_anim,background_scroll;const main=new Image(),main_fall=new Image(),tukim_high=new Image(),tukim_mid=new Image(),tukim_bottom=new Image(),window_=new Image(),logo=new Image(),background=new Image(),background_invert=new Image(),die1=new Audio('src/sfx/die1.wav'),die2=new Audio(_0x242a47(0x21d)),fly1=new Audio(_0x242a47(0x1fa)),fly2=new Audio(_0x242a47(0x216)),fly3=new Audio(_0x242a47(0x1f5)),point=new Audio(_0x242a47(0x20e)),audios=[];init();function init(){const _0x48f2b8=_0x242a47;main[_0x48f2b8(0x20f)]=_0x48f2b8(0x1f7),main_fall[_0x48f2b8(0x20f)]=_0x48f2b8(0x219),tukim_high[_0x48f2b8(0x20f)]='src/sprites/tukim_high.png',tukim_mid['src']=_0x48f2b8(0x1ed),tukim_bottom[_0x48f2b8(0x20f)]=_0x48f2b8(0x210),window_[_0x48f2b8(0x20f)]=_0x48f2b8(0x1ea),logo[_0x48f2b8(0x20f)]='src/sprites/logo.png',background[_0x48f2b8(0x20f)]=_0x48f2b8(0x201),background_invert[_0x48f2b8(0x20f)]=_0x48f2b8(0x1fd),scene=0x0,background_scroll=[0x0,0x168],gameStart(),setInterval(loop,0x14);let _0x543b1e=![];document['addEventListener'](_0x48f2b8(0x1f2),function(_0x152559){const _0x1d18c6=_0x48f2b8;switch(scene){case 0x1:{Yv=-0xa;let _0x671d82=Math['floor'](Math[_0x1d18c6(0x1f9)]()*0x3)+0x1;setTimeout(_0x1d18c6(0x1f8)+_0x671d82+'.pause();\x20fly'+_0x671d82+_0x1d18c6(0x21a)+_0x671d82+'.play()',0x0);}}}),document[_0x48f2b8(0x21c)]('keydown',function(_0x3f18e4){const _0x48e4f6=_0x48f2b8;if(_0x3f18e4[_0x48e4f6(0x1eb)]===0x20||_0x3f18e4['keyCode']===0x26||_0x3f18e4['keyCode']===0x57){if(_0x543b1e)return;switch(scene){case 0x1:{Yv=-0xa;let _0x21e77e=Math[_0x48e4f6(0x1f3)](Math['random']()*0x3)+0x1;setTimeout(_0x48e4f6(0x1f8)+_0x21e77e+'.pause();\x20fly'+_0x21e77e+_0x48e4f6(0x21a)+_0x21e77e+_0x48e4f6(0x1ec),0x0);}}_0x543b1e=!![];}_0x3f18e4[_0x48e4f6(0x1eb)]===0xd&&scene!=0x1&&(scene=0x1,gameStart());}),document['addEventListener'](_0x48f2b8(0x211),function(_0x2881a3){const _0x468488=_0x48f2b8;if(_0x2881a3[_0x468488(0x1eb)]===0x20||_0x2881a3[_0x468488(0x1eb)]===0x26||_0x2881a3[_0x468488(0x1eb)]===0x57)return _0x543b1e=![];});}function gameStart(){const _0x2d0343=_0x242a47;TukimX=[0x168,0x230,0x2f8],TukimY=[Math[_0x2d0343(0x1f3)](Math[_0x2d0343(0x1f9)]()*0x122),Math[_0x2d0343(0x1f3)](Math['random']()*0x122),Math[_0x2d0343(0x1f3)](Math[_0x2d0343(0x1f9)]()*0x122)],Y=0xc8,Yv=0x0,scoreGiven=![],score=0x0,window_anim=-0x12c;}function drawText(_0x1d351a,_0x5aadc5,_0x22a13f,_0x2a4522,_0x5cd651){const _0x72448d=_0x242a47;ctx[_0x72448d(0x20b)]=_0x2a4522+_0x72448d(0x1fe),ctx[_0x72448d(0x21b)]=_0x72448d(0x206),ctx[_0x72448d(0x1f0)](_0x1d351a,_0x5aadc5+_0x5cd651,_0x22a13f+_0x5cd651),ctx[_0x72448d(0x21b)]=_0x72448d(0x1ef),ctx[_0x72448d(0x1f0)](_0x1d351a,_0x5aadc5,_0x22a13f);}function drawBackground(){const _0x74d662=_0x242a47;ctx[_0x74d662(0x215)](0x0,0x0,0x168,0x21c);for(i=0x0;i<0x2;i++){if(background_scroll[i]===-0x168)background_scroll[i]=0x168-0x2;else scene!=0x2&&(background_scroll[i]-=0x1);}ctx[_0x74d662(0x214)](background,background_scroll[0x0],0x0,0x168,0x21c),ctx[_0x74d662(0x214)](background_invert,background_scroll[0x1],0x0,0x168,0x21c);}function loop(){switch(scene){case 0x0:{scene0();break;}case 0x1:{scene1();break;}case 0x2:{scene2();break;}}}function scene0(){const _0x4aceae=_0x242a47;ctx=canvas[_0x4aceae(0x1fc)]('2d'),ctx[_0x4aceae(0x200)]=![],drawBackground(),ctx[_0x4aceae(0x214)](main,0x3c,0xc8,0x32,0x32),ctx[_0x4aceae(0x214)](logo,0x1e,0x32,0x12c,0x6f),drawText(_0x4aceae(0x1f1),0xa,0x190,0x1e,0x2);}function drawTukim(_0x315479,_0x5a394a,_0x2d86d2){const _0x521a73=_0x242a47;switch(_0x2d86d2){case 0x1:{ctx['drawImage'](tukim_high,_0x315479,_0x5a394a,0x32,0x32);for(i=0x0;i<0x8;i++){ctx['drawImage'](tukim_mid,_0x315479,_0x5a394a+(i+0x1)*0x32,0x32,0x32);}break;}case 0x0:{ctx[_0x521a73(0x214)](tukim_bottom,_0x315479,_0x5a394a,0x32,0x32);for(i=0x0;i<0x8;i++){ctx[_0x521a73(0x214)](tukim_mid,_0x315479,_0x5a394a+(i+0x1)*-0x32,0x32,0x32);}break;}}}function _0x2694(){const _0x545452=['imageSmoothingEnabled','src/sprites/background.png','U\x20ded','183236XroFwb','4393708pOScLh','27HWRWhh','rgb(0,\x200,\x200)','34538LYGWHc','getElementById','495520yiNeug','2237172XcQarJ','font','Press\x20Enter\x20to\x20RESTART','12AAnnyE','src/sfx/point.wav','src','src/sprites/tukim_bottom.png','keyup','canvas','remove','drawImage','clearRect','src/sfx/fly2.wav','5RTtBav','409300yDNIoP','src/sprites/main_fall.png','.currentTime\x20=\x200;\x20fly','fillStyle','addEventListener','src/sfx/die2.wav','src/sprites/window.png','keyCode','.play()','src/sprites/tukim_mid.png','currentTime','rgb(255,\x20255,\x20255)','fillText','Press\x20Enter\x20to\x20start...','mousedown','floor','176pIFPvF','src/sfx/fly3.wav','play','src/sprites/main.png','fly','random','src/sfx/fly1.wav','score:\x20','getContext','src/sprites/background-invert.png','px\x20DungGeunMo','972150WwqLhr'];_0x2694=function(){return _0x545452;};return _0x2694();}function Tukim(_0x3bd336,_0x2a8f78){drawTukim(_0x3bd336,_0x2a8f78,0x0),drawTukim(_0x3bd336,_0x2a8f78+0xb9,0x1);}function _0x5401(_0x2339c3,_0x1a5813){const _0x269444=_0x2694();return _0x5401=function(_0x54018d,_0x347ff1){_0x54018d=_0x54018d-0x1ea;let _0x435a86=_0x269444[_0x54018d];return _0x435a86;},_0x5401(_0x2339c3,_0x1a5813);}function scene1(){const _0x2d52dd=_0x242a47;ctx=canvas['getContext']('2d'),ctx[_0x2d52dd(0x200)]=![],Y+=Yv,Yv+=0x1;(Y>=0x1ea||Y<0x0)&&(scene=0x2,die2[_0x2d52dd(0x1f6)]());for(tukim_logic=0x0;tukim_logic<0x3;tukim_logic++){TukimX[tukim_logic]<-0xfa?(TukimX[tukim_logic]=0x168,TukimY[tukim_logic]=Math['floor'](Math['random']()*0x122),scoreGiven=![]):TukimX[tukim_logic]-=0x2;}for(tukim_collision=0x0;tukim_collision<0x3;tukim_collision++){TukimX[tukim_collision]-0x2d<0x3c&&TukimX[tukim_collision]+0x2d>0x3c&&(Y<TukimY[tukim_collision]+0x32-6.25||Y>TukimY[tukim_collision]+0x87?(scene=0x2,Yv=0x0,die1['play']()):(score==0x1&&tukim_collision==0x1&&(score=0x2,point['pause'](),point[_0x2d52dd(0x1ee)]=0x0,point[_0x2d52dd(0x1f6)]()),!scoreGiven&&(score++,scoreGiven=!![],point['pause'](),point[_0x2d52dd(0x1ee)]=0x0,point['play']())));}drawBackground(),ctx[_0x2d52dd(0x214)](main,0x3c,Y,0x32,0x32);for(tukim_draw=0x0;tukim_draw<0x3;tukim_draw++){Tukim(TukimX[tukim_draw],TukimY[tukim_draw]);}drawText(score,0xaa,0x64,0x32,0x4);}function drawWindow(_0x105497){const _0x3906a3=_0x242a47;ctx['drawImage'](window_,0x1e,_0x105497,0x12c,0x12c),drawText(_0x3906a3(0x202),0x82,_0x105497+0x6e,0x28,0x4),drawText(_0x3906a3(0x1fb)+score,0x73,_0x105497+0x96,0x23,0x3),drawText(_0x3906a3(0x20c),0x3c,_0x105497+0xc8,0x14,0x3);}function scene2(){const _0x25f693=_0x242a47;ctx=canvas[_0x25f693(0x1fc)]('2d'),ctx[_0x25f693(0x200)]=![],Yv++,Y+=Yv,window_anim+=0x14;window_anim>0x32&&(window_anim=0x32);drawBackground();for(tukim_draw=0x0;tukim_draw<0x3;tukim_draw++){Tukim(TukimX[tukim_draw],TukimY[tukim_draw]);}ctx['drawImage'](main_fall,0x3c,Y,0x32,0x32),drawWindow(window_anim);}