webpackJsonp([1],{"+RJ3":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("tqIJ"),r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("div",{staticClass:"wrap",staticStyle:{height:"1000px"}},[e._v("\r\n   这是首页这是首页\r\n\r\n   "),n("a",{attrs:{target:"_blank",href:"http://element.eleme.io/#/zh-CN/component/layout"}},[e._v("\r\n       ui文档\r\n   ")]),e._v(" "),n("el-row",{staticStyle:{margin:"15px"}},[n("el-tag",[e._v(" 夺宝奇兵 ")]),n("br"),e._v(" "),n("el-tag",[e._v("合约地址 "+e._s(e.onewinner_address))]),n("br"),e._v(" "),n("el-tag",[e._v("第 "+e._s(e.round)+" 轮")]),n("br"),e._v(" "),n("el-tag",[e._v("剩余时间"+e._s(e.less_time_show))]),n("br"),e._v(" "),n("el-tag",[e._v("每注价格"+e._s(e.bet_price)+" eth")]),n("br"),e._v(" "),n("el-tag",[e._v("上期中奖金"+e._s(e.last_winner_reward)+" eth")]),n("br"),e._v(" "),n("el-tag",[e._v("上期中奖人"+e._s(e.last_winner_address))]),n("br"),e._v(" "),n("el-tag",[e._v("夺宝奖池"+e._s(e.winner_reward)+" eth")]),n("br"),e._v(" "),n("el-tag",[e._v("中奖推荐人分红"+e._s(e.winner_inviter_reward)+" eth")]),n("br"),e._v(" "),n("el-tag",[e._v("本期中奖人"+e._s(e.winner_address))]),n("br"),e._v(" "),n("el-tag",[e._v("上次空投奖池"+e._s(e.last_airdrop)+" eth")]),n("br"),e._v(" "),n("el-tag",[e._v("上次空投得主"+e._s(e.last_airdrop_address)+" ")]),n("br"),e._v(" "),n("el-tag",[e._v("空投奖池"+e._s(e.airdrop)+" eth   每次投注超过0.1eth 有0.1%机率获得  幸运号 "+e._s(e.luck_num))]),n("br"),e._v(" "),n("el-tag",[e._v("我的投注"+e._s(e.my_bet_count)+" ")]),n("br"),e._v(" "),n("el-tag",[e._v("总投注"+e._s(e.total_bet_count)+" ")]),n("br"),e._v(" "),n("el-tag",[e._v("中奖概率"+e._s(e.my_win_rate)+"% ")]),n("br"),e._v(" "),n("el-input-number",{attrs:{step:1,label:"投注数量"},model:{value:e.bet_count,callback:function(t){e.bet_count=t},expression:"bet_count"}}),e._v(" "),n("el-button",{on:{click:function(t){e.send_bet(!0)}}},[e._v("投注")]),e._v(" "),n("el-button",{on:{click:function(t){e.send_bet(!1)}}},[e._v("使用金库")])],1),e._v(" "),n("el-row",{staticStyle:{margin:"15px"}},[n("el-tag",[e._v(" 账户信息 ")]),n("br"),e._v(" "),n("el-tag",[e._v("当前账户 "+e._s(e.account_address))]),n("br"),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:""!=e.user_name,expression:"user_name!=''"}]},[n("el-tag",[e._v("邀请链接 http://www.xxxxx.com/"+e._s(e.user_name))]),n("br")],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:""==e.user_name,expression:"user_name==''"}]},[n("el-input",{attrs:{placeholder:"注册用户名"},model:{value:e.register_name,callback:function(t){e.register_name=t},expression:"register_name"}}),n("br"),e._v(" "),n("el-button",{on:{click:function(t){e.send_register()}}},[e._v("注册")]),n("br")],1)],1),e._v(" "),n("el-row",{staticStyle:{margin:"15px"}},[n("el-tag",[e._v("我的金库 "+e._s(e.my_vault)+" eth")]),n("br"),e._v(" "),n("el-tag",[e._v("累计夺宝中奖 "+e._s(e.my_jackpot_stat)+" eth")]),n("br"),e._v(" "),n("el-tag",[e._v("累计空投中奖 "+e._s(e.my_airdrop_stat)+" eth")]),n("br"),e._v(" "),n("el-tag",[e._v("累计邀请返利 "+e._s(e.my_invite_reward_stat)+" eth")]),n("br"),e._v(" "),n("el-tag",[e._v("累计邀请夺宝分红 "+e._s(e.my_invite_jackpot_reward_stat)+" eth")]),n("br"),e._v(" "),n("el-tag",[e._v("累计邀请空投分红 "+e._s(e.my_invate_airdrop_reward_stat)+" eth")]),n("br"),e._v(" "),n("el-tag",[e._v("累计ess空投 "+e._s(e.my_ess_airdrop_stat)+" ess")]),n("br"),e._v(" "),n("el-button",{on:{click:function(t){e.send_withdraw()}}},[e._v("提现")])],1),e._v(" "),n("el-row",{staticStyle:{margin:"15px"}},e._l(this.tx_list,function(t,o){return n("div",[e._v("\r\n            地址："+e._s(t.address)+"  投注："+e._s(t.bet_count)+" 时间："+e._s(t.bet_time)+" 幸运号："+e._s(t.luck_num)+" 是否中奖:"+e._s(t.win)+"\r\n        ")])}))],1)])},staticRenderFns:[]};var a=function(e){n("OGMO")},l=n("C7Lr")(o.a,r,!1,a,"data-v-dcbaa58e",null);t.default=l.exports},OGMO:function(e,t){},tqIJ:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a={components:{},data:function(){return{decimals:4,onewinner_address:onewinnerAddress,account_address:"",round:0,end_time:0,less_time:0,less_time_show:"",bet_price:0,bet_count:0,airdrop:0,luck_num:0,last_airdrop:0,last_airdrop_address:"none",winner_address:"none",winner_reward:0,winner_inviter_reward:0,last_winner_address:"none",last_winner_reward:0,total_bet_count:0,my_bet_count:0,my_win_rate:0,user_name:"",register_name:"",my_vault:0,my_jackpot_stat:0,my_airdrop_stat:0,my_invite_reward_stat:0,my_invite_jackpot_reward_stat:0,my_invate_airdrop_reward_stat:0,my_ess_airdrop_stat:0,tx_list:[],timer:null}},mounted:function mounted(){if(!checkweb3())return console.log("钱包状态异常"),!1;var _vue=this;window.eventQueue={},window.loopBlock=function(lastblock){web3.eth.getBlockNumber().then(function(newblock){newblock>lastblock?(_vue.init_round(),_vue.load_account(),_vue.load_vault(),_vue.load_txlist(),web3.eth.getBlock(newblock).then(function(blockinfo){console.log(blockinfo),console.log(eventQueue);try{for(var i=0;i<blockinfo.transactions.length;i++){var txhash=blockinfo.transactions[i];for(var queuehash in eventQueue)if(txhash==queuehash){var funcname=eventQueue[queuehash];delete eventQueue[queuehash];try{eval(funcname+"('"+txhash+"')")}catch(e){console.log(e),console.log(funcname+"不存在")}}}}catch(e){}loopBlock(newblock)})):loopBlock(newblock)})},loopBlock(0),_vue.account_address=window.eth_account,_vue.init_round(),_vue.load_account(),_vue.load_vault(),_vue.load_txlist()},methods:{send_withdraw:function(){if(!checkweb3())return console.log("钱包状态异常"),!1;console.log("提现");onewinnerContract.methods.withdraw().send({from:eth_account,value:0,gasPrice:web3.utils.toWei("20","gwei")},function(e,t){e||(eventQueue[t]="withdraw_done",window.withdraw_done=function(e){console.log("提现成功"+e)})})},send_register:function(){if(!checkweb3())return console.log("钱包状态异常"),!1;console.log("注册");var e=web3.utils.toWei("0.1","ether"),t=localStorage.getItem("onewinner_invite")&&!isNaN(localStorage.getItem("onewinner_invite"))?parseInt(localStorage.getItem("onewinner_invite")):0;onewinnerContract.methods.register(this.register_name,t).send({from:eth_account,value:e,gasPrice:web3.utils.toWei("20","gwei")},function(e,t){e||(eventQueue[t]="register_done",window.register_done=function(e){console.log("注册成功"+e)})})},send_bet:function(e){if(!checkweb3())return console.log("钱包状态异常"),!1;console.log("下注");var t=web3.utils.toWei((this.bet_count*this.bet_price).toString(),"ether");e||(t=0);var n=localStorage.getItem("onewinner_invite")&&!isNaN(localStorage.getItem("onewinner_invite"))?parseInt(localStorage.getItem("onewinner_invite")):0;onewinnerContract.methods.bet(this.bet_count,n).send({from:eth_account,value:t,gasPrice:web3.utils.toWei("20","gwei")},function(e,t){e||(eventQueue[t]="bet_done",window.bet_done=function(e){web3.eth.getTransactionReceipt(e,function(e,t){console.log(t),1==t.logs.length?console.log("参与了空投抽奖，幸运号："+web3.utils.hexToNumber(t.logs[0].data)):2==t.logs.length&&console.log("中奖了，幸运号："+web3.utils.hexToNumber(t.logs[0].data))}),console.log("下注成功"+e)})})},init_round:function(){var e=this;onewinnerContract.methods.getAddressByUserName("ess").call(null,function(e,t){if(!e){var n=t.valueOf();onewinnerContract.methods.getUserIdByAddress(n).call(null,function(e,t){if(!e){var n=t.valueOf();n>0&&localStorage.setItem("onewinner_invite",n),console.log(n)}})}}),onewinnerContract.methods.round().call(null,function(t,n){t||(e.round=n.valueOf(),e.load_round(e.round))}),onewinnerContract.methods.betPrice().call(null,function(t,n){t||(e.bet_price=web3.utils.fromWei(n.valueOf(),"ether"))})},load_round:function(e){var t=this;onewinnerContract.methods.getEndTime(e).call(null,function(e,n){e||(t.end_time=n.valueOf(),t.end_time>0&&(window.nowTime=Math.floor((new Date).getTime()/1e3),t.less_time=t.end_time-nowTime,!t.timer&&t.less_time>0?t.timer=setInterval(function(){t.less_time--;var e=t.less_time,n=Math.floor(e/86400);e%=86400;var o=Math.floor(e/3600);e%=3600;var r=Math.floor(e/60),a=e%60;t.less_time_show=n+"天"+o+"小时"+r+"分钟"+a+"秒",t.less_time<=0&&clearInterval(t.timer)},1e3):console.log("本轮次结束，要开启新盘")))}),e>1&&onewinnerContract.methods.getReward(e-1).call(null,function(e,n){e||(t.last_winner_reward=Number(web3.utils.fromWei(n.valueOf(),"ether")).toFixed(t.decimals))}),e>1&&onewinnerContract.methods.winner(e-1).call(null,function(e,n){e||(t.last_winner_address=n.valueOf())}),onewinnerContract.methods.getReward(e).call(null,function(e,n){e||(t.winner_reward=Number(web3.utils.fromWei(n.valueOf(),"ether")).toFixed(t.decimals),t.winner_inviter_reward=Number(.2*t.winner_reward*.25).toFixed(t.decimals))}),onewinnerContract.methods.isRun(e).call(null,function(n,o){n||o.valueOf()||onewinnerContract.methods.winner(e).call(null,function(e,n){e||(t.winner_address=n.valueOf())})}),onewinnerContract.methods.airdropWinner().call(null,function(e,n){e||0!=n.valueOf()&&(t.last_airdrop_address=n.valueOf())}),onewinnerContract.methods.airdropWinnerReward().call(null,function(e,n){e||(t.last_airdrop=Number(web3.utils.fromWei(n.valueOf(),"ether")).toFixed(t.decimals))}),onewinnerContract.methods.airdrop().call(null,function(e,n){e||(t.airdrop=Number(web3.utils.fromWei(n.valueOf(),"ether")).toFixed(t.decimals))}),onewinnerContract.methods.luckNum().call(null,function(e,n){e||(t.luck_num=n.valueOf())}),onewinnerContract.methods.getBetCount(e).call(null,function(n,o){n||(t.total_bet_count=o.valueOf(),onewinnerContract.methods.getMyBetCount(e,eth_account).call(null,function(e,n){e||(t.my_bet_count=n.valueOf(),t.my_win_rate=Math.round(100*t.my_bet_count/t.total_bet_count))}))})},load_account:function(){var e=this;onewinnerContract.methods.getUserNameByAddress(eth_account).call(null,function(t,n){t||(e.user_name=n.valueOf())})},load_txlist:function(){var e=this;onewinnerContract.methods.getTxList(50).call(null,function(t,n){if(!t){console.log(n),console.log("列表"),e.tx_list=[];for(var o=n.valueOf(),r=0;r<o[0].length;r++){var a=o[0][r];if("0x0000000000000000000000000000000000000000"==a)break;var l=o[1][r],i=o[2][r],_=new Date(1e3*i).format("yyyy-MM-dd hh:mm:ss"),s=o[3][r],c=o[4][r];e.tx_list[r]={address:a,bet_count:l,bet_time:_,luck_num:s,win:c}}console.log(e.tx_list)}})},load_vault:function(){var e=this;onewinnerContract.methods.myVault(eth_account).call(null,function(t,n){t?console.log(t):e.my_vault=Number(web3.utils.fromWei(n.valueOf(),"ether")).toFixed(e.decimals)}),onewinnerContract.methods.getStatJackpotReward(eth_account).call(null,function(t,n){t||(e.my_jackpot_stat=Number(web3.utils.fromWei(n.valueOf(),"ether")).toFixed(e.decimals))}),onewinnerContract.methods.getStatAirdropReward(eth_account).call(null,function(t,n){t||(e.my_airdrop_stat=Number(web3.utils.fromWei(n.valueOf(),"ether")).toFixed(e.decimals))}),onewinnerContract.methods.getStatInviterReward(eth_account).call(null,function(t,n){t||(e.my_invite_reward_stat=Number(web3.utils.fromWei(n.valueOf(),"ether")).toFixed(e.decimals))}),onewinnerContract.methods.getStatInviterJackpotReward(eth_account).call(null,function(t,n){t||(e.my_invite_jackpot_reward_stat=Number(web3.utils.fromWei(n.valueOf(),"ether")).toFixed(e.decimals))}),onewinnerContract.methods.getStatInviterAirdropReward(eth_account).call(null,function(t,n){t||(e.my_invate_airdrop_reward_stat=Number(web3.utils.fromWei(n.valueOf(),"ether")).toFixed(e.decimals))}),onewinnerContract.methods.getStatEssAirdropReward(eth_account).call(null,function(t,n){t||(e.my_ess_airdrop_stat=Number(web3.utils.fromWei(n.valueOf(),"ether")).toFixed(e.decimals))})}}}}});
//# sourceMappingURL=1.6736fe2cff2ac2067412.js.map