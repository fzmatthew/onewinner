webpackJsonp([0],{Hd7k:function(t,e){},JXTs:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("chkv"),s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{ref:"viewBox",staticClass:"content",attrs:{id:"content"}},[n("div",{staticClass:"winner"},[n("div",{staticClass:"winner-detail wrap"},[n("div",{staticClass:"title"},[n("div",{staticClass:"title-left flex-1"},[t._m(0),t._v(t._s(t.$t("m.winnerIndex.num"))+" "),n("span",{staticClass:"num"},[t._v(t._s(t.round)+" ")])]),t._v(" "),n("div",{staticClass:"title-right"},[n("div",{staticClass:"tit"},[t._v(t._s(t.$t("m.winnerIndex.contract_address")))]),t._v(" "),n("div",{staticClass:"info"},[n("span",{staticClass:"info-text share-link"},[t._v(t._s(t._f("addreplaces")(t.onewinner_address)))]),t._v(" "),n("input",{attrs:{type:"text",readonly:"readonly",id:"share-link1"},domProps:{value:t.onewinner_address}}),t._v(" "),n("a",{staticClass:"info-btn",attrs:{href:"",target:"_blank"}},[t._v(t._s(t.$t("m.winnerIndex.view_source")))]),t._v("  \r\n                    "),n("span",{staticClass:"info-btn",attrs:{id:"j-copy"},on:{click:function(e){t.copy_fun("address")}}},[t._v(t._s(t.$t("m.winnerIndex.copy")))])])])]),t._v(" "),n("div",{staticClass:"winner-con"},[n("div",{staticClass:"winner-box winner-boxOne"},[n("div",{staticClass:"winner-end"},[!t.winner_type||t.openprize?n("img",{staticClass:"over-img",attrs:{src:i("YPub"),alt:""}}):t._e(),t._v(" "),n("div",{staticClass:"winner-over"},[n("div",{staticClass:"end-head flex-box"},[t._m(1),t._v(" "),n("div",{staticClass:"end-head-title"},[t._v(t._s(t.$t("m.winnerIndex.title")))])]),t._v(" "),t.winner_type?t._e():n("div",{staticClass:"win-people"},[n("div",{staticClass:"win-peo-li flex-box"},[n("div",{staticClass:"people-info"},[n("div",{staticClass:"peopel-title"},[t._v(t._s(t.$t("m.winnerIndex.winners")))]),t._v(" "),n("div",{staticClass:"people-num"},[t._v(t._s(t._f("addreplace")(t.winner_address,8,8)))])]),t._v(" "),n("div",{staticClass:"bonus-box"},[n("div",{staticClass:"bonus-title"},[t._v(t._s(t.$t("m.winnerIndex.Indexendtime")))]),t._v(" "),n("div",{staticClass:"people-num"},[t._v(t._s(t._f("fullTime")(t.end_time)))])])])]),t._v(" "),t.winner_type?n("div",{staticClass:"winner-timer"},[t.openprize?t._e():n("div",{staticClass:"timer-title"},[t._v(t._s(t.$t("m.winnerIndex.game_timer")))]),t._v(" "),t.openprize?n("div",{staticClass:"timer-title"},[t._v(t._s(t.$t("m.winnerIndex.calc_result")))]):t._e(),t._v(" "),n("div",{staticClass:"timer-box flex-box"},[n("div",{staticClass:"timer-list day"},[n("div",{staticClass:"timer-num"},[t._v(t._s(t.day))]),t._v(" "),n("div",{staticClass:"unit"},[t._v(t._s(t.$t("m.winnerIndex.day")))])]),t._v(" "),n("div",{staticClass:"time-icon"},[t._v(":")]),t._v(" "),n("div",{staticClass:"timer-list hour"},[n("div",{staticClass:"timer-num"},[t._v(t._s(t.hour))]),t._v(" "),n("div",{staticClass:"unit"},[t._v(t._s(t.$t("m.winnerIndex.hour")))])]),t._v(" "),n("div",{staticClass:"time-icon"},[t._v(":")]),t._v(" "),n("div",{staticClass:"timer-list minute"},[n("div",{staticClass:"timer-num"},[t._v(t._s(t.minute))]),t._v(" "),n("div",{staticClass:"unit"},[t._v(t._s(t.$t("m.winnerIndex.minute")))])]),t._v(" "),n("div",{staticClass:"time-icon"},[t._v(":")]),t._v(" "),n("div",{staticClass:"second timer-list"},[n("div",{staticClass:"time-num"},[t._v(t._s(t.second))]),t._v(" "),n("div",{staticClass:"unit"},[t._v(t._s(t.$t("m.winnerIndex.second")))])])]),t._v(" "),n("div",{staticClass:"timer-decs"},[t._v(t._s(t.$t("m.winnerIndex.game_timer_decs")))])]):t._e()]),t._v(" "),n("div",{staticClass:"winner-new"},[n("div",{staticClass:"win-rule",class:{active:t.is_rule}},[n("div",{staticClass:"iconfont",on:{click:function(e){t.rule_btn()}}},[t._v("")]),t._v(" "),n("div",{staticClass:"rule-con"},[n("ul",[n("li",[t._v(t._s(t.$t("m.winnerIndex.rule_desc1")))]),t._v(" "),n("li",[t._v(t._s(t.$t("m.winnerIndex.rule_desc2")))]),t._v(" "),n("li",[t._v(t._s(t.$t("m.winnerIndex.rule_desc3")))]),t._v(" "),n("li",[t._v(t._s(t.$t("m.winnerIndex.rule_desc4")))]),t._v(" "),n("li",[t._v(t._s(t.$t("m.winnerIndex.rule_desc5")))]),t._v(" "),n("li",[t._v(t._s(t.$t("m.winnerIndex.rule_desc6")))])])])]),t._v(" "),n("div",{staticClass:"winner-new-title flex-box"},[n("div",{staticClass:"new-title flex-1"},[t._v(t._s(t.$t("m.winnerIndex.winner_new_title")))]),t._v(" "),n("div",{staticClass:"winner-decs",on:{click:function(e){t.rule_btn()}}},[t._v(t._s(t.$t("m.winnerIndex.winner_new_decs"))+"\r\n                            "),t._m(2)])]),t._v(" "),n("div",{staticClass:"betting-box flex-box"},[n("div",{staticClass:"betting-btn",on:{click:function(e){t.betting_btn(1)}}},[t._v("1")]),t._v(" "),n("div",{staticClass:"betting-btn",on:{click:function(e){t.betting_btn(5)}}},[t._v("5")]),t._v(" "),n("div",{staticClass:"betting-btn",on:{click:function(e){t.betting_btn(10)}}},[t._v("10")]),t._v(" "),n("div",{staticClass:"betting-btn",on:{click:function(e){t.betting_btn(20)}}},[t._v("20")]),t._v(" "),n("div",{staticClass:"betting-btn",on:{click:function(e){t.betting_btn(100)}}},[t._v("100")])]),t._v(" "),n("div",{staticClass:"betting-num-box flex-box"},[n("div",{staticClass:"betting-num-title"},[t._v(t._s(t.$t("m.winnerIndex.betting_num")))]),t._v(" "),n("div",{staticClass:"betting-input flex-1"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.bet_count,expression:"bet_count"}],attrs:{type:"text"},domProps:{value:t.bet_count},on:{input:function(e){e.target.composing||(t.bet_count=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"ratio-box"},[t._v(t._s(t.bet_count)+" X "+t._s(t.bet_price)+"ETH = "+t._s(t.bonus)+"ETH")])]),t._v(" "),n("div",{staticClass:"winner-new-btnBox flex-box"},[n("div",{staticClass:"btnBox-btn flex-1",on:{click:function(e){t.send_bet(!0)}}},[t._v(t._s(t.$t("m.winnerIndex.betting_btn1")))]),t._v(" "),n("div",{staticClass:"btnBox-btn vault-btn flex-1",on:{click:function(e){t.send_bet(!1)}}},[t._v(t._s(t.$t("m.winnerIndex.betting_btn2")))])])])]),t._v(" "),t.register?t._e():n("div",{staticClass:"winner-register"},[n("p",{staticClass:"register-txt"},[t._v(t._s(t.$t("m.winnerIndex.register_decs"))+"0.1ETH")]),t._v(" "),n("div",{staticClass:"register-btn",on:{click:function(e){t.register_pop()}}},[t._v(t._s(t.$t("m.winnerIndex.register")))])]),t._v(" "),t.register?n("div",{staticClass:"winner-invite"},[n("div",{staticClass:"invite-title"},[t._v(t._s(t.$t("m.winnerIndex.invite_tit")))]),t._v(" "),n("div",{staticClass:"invite-inputBox flex-box"},[n("div",{staticClass:"invite-input flex-1 share-link"},[n("input",{attrs:{type:"text",readonly:"readonly",id:"share-link"},domProps:{value:t.invite_link+"/"+t.user_name}})]),t._v(" "),n("div",{staticClass:"invite-btn",attrs:{id:"j-copy"},on:{click:function(e){t.copy_fun("invite")}}},[n("i",{staticClass:"iconfont"},[t._v("")])])]),t._v(" "),n("div",{staticClass:"invite-decs"},[t._v(t._s(t.$t("m.winnerIndex.invite_decs"))+" 5%")])]):t._e()]),t._v(" "),n("div",{staticClass:"winner-box winner-int"},[n("div",{staticClass:"int-head"},[n("div",{staticClass:"int-head-con"},[n("div",{staticClass:"int-head-title"},[t._v(t._s(t.$t("m.winnerIndex.win_the_prize")))]),t._v(" "),n("div",{staticClass:"int-head-numBox flex-box"},[n("div",{staticClass:"iconfont"},[t._v("")]),t._v(" "),n("div",{staticClass:"int-had-num"},[t._v(t._s(t.winner_reward))])]),t._v(" "),n("div",{staticClass:"dividend flex-box"},[n("div",[t._v(t._s(t.$t("m.winnerIndex.recommend_dividend"))+" "),n("span",[t._v(t._s(t.winner_inviter_reward)+" "),n("span",{staticStyle:{"font-size":".6rem"}},[t._v("ETH")])])])])]),t._v(" "),n("div",{staticClass:"int-head-bottom flex-box"},[n("div",[t._v(t._s(t.$t("m.winnerIndex.award_notice1"))+t._s(t.last_winner_reward)+"ETH，"+t._s(t.$t("m.winnerIndex.award_notice2"))+" "),n("span",[t._v(t._s(t._f("addreplace")(t.last_winner_address,8,5)))])])])]),t._v(" "),n("div",{staticClass:"int-info flex-box"},[n("div",{staticClass:"int-list flex-1"},[n("div",{staticClass:"int-list-title"},[t._v(t._s(t.$t("m.winnerIndex.int_list_title1")))]),t._v(" "),t.winner_type?n("div",{staticClass:"int-list-num"},[t._v(t._s(t.my_win_rate)+"%")]):t._e(),t._v(" "),t.winner_type?t._e():n("div",{staticClass:"int-list-num"},[t._v(" - ")]),t._v(" "),n("div",{staticClass:"int-list-decs"}),t._v(" "),n("div",{staticClass:"int-bettingBox flex-box"},[n("div",{staticClass:"int-betting flex-1"},[n("div",{staticClass:"int-betting-title"},[t._v(t._s(t.$t("m.winnerIndex.my_betting")))]),t._v(" "),t.winner_type?n("div",{staticClass:"int-betting-num"},[t._v(t._s(t.my_bet_count))]):t._e(),t._v(" "),t.winner_type?t._e():n("div",{staticClass:"int-betting-num"},[t._v(" - ")])]),t._v(" "),n("div",{staticClass:"int-betting flex-1"},[n("div",{staticClass:"int-betting-title"},[t._v(t._s(t.$t("m.winnerIndex.all_betting")))]),t._v(" "),t.winner_type?n("div",{staticClass:"int-betting-num"},[t._v(t._s(t.total_bet_count))]):t._e(),t._v(" "),t.winner_type?t._e():n("div",{staticClass:"int-betting-num"},[t._v(" - ")])])])]),t._v(" "),n("div",{staticClass:"int-list flex-1"},[n("div",{staticClass:"int-list-title"},[t._v(t._s(t.$t("m.winnerIndex.int_list_title2")))]),t._v(" "),n("div",{staticClass:"int-list-num",staticStyle:{"font-size":"1.2rem"}},[t._v(t._s(t.airdrop)+" "),n("span",{staticStyle:{"font-size":".6rem"}},[t._v("ETH")])]),t._v(" "),n("div",{staticClass:"int-list-decs"},[t._v(t._s(t._f("langfmt")(t._f("langfmt")(t.$t("m.winnerIndex.int_list_decs"),"0.5eth"),"1‰")))]),t._v(" "),n("div",{staticClass:"int-list-luck"},[t._v(t._s(t.$t("m.winnerIndex.int_preceding0"))+" "+t._s(t.luck_num))]),t._v(" "),n("div",{staticClass:"int-preceding"},[t._v(t._s(t.$t("m.winnerIndex.int_preceding1"))+t._s(t.last_airdrop)+"ETH，"+t._s(t.$t("m.winnerIndex.int_preceding2"))+" "),n("span",[n("br"),t._v(t._s(t._f("addreplace")(t.last_winner_address,8,5)))])])])])]),t._v(" "),n("div",{staticClass:"winner-box winner-playedVault"},[n("div",{staticClass:"playedVault-tab flex-box"},[n("div",{staticClass:"playedVault-item",class:{"is-active":"played"==t.activeName},on:{click:function(e){t.handleClick("played")}}},[n("div",{staticClass:"pv-tab-txt"},[t._v(t._s(t.$t("m.winnerIndex.playedVault_tit1")))])]),t._v(" "),n("div",{staticClass:"playedVault-item",class:{"is-active":"vault"==t.activeName},on:{click:function(e){t.handleClick("vault")}}},[n("div",{staticClass:"pv-tab-txt"},[t._v(t._s(t.$t("m.winnerIndex.playedVault_tit2")))])])]),t._v(" "),"played"==t.activeName?n("div",{staticClass:"played-table"},[n("div",{staticClass:"tab-head tab-bg flex-box"},[n("div",{staticClass:"tab-head-list tab-name"},[t._v(t._s(t.$t("m.winnerIndex.player")))]),t._v(" "),n("div",{staticClass:"tab-head-list tab-betting"},[t._v(t._s(t.$t("m.winnerIndex.betting")))]),t._v(" "),n("div",{staticClass:"tab-head-list tab-luck"},[t._v(t._s(t.$t("m.winnerIndex.luck_num")))]),t._v(" "),n("div",{staticClass:"tab-head-list text-right flex-1"},[t._v(t._s(t.$t("m.winnerIndex.transaction_time")))])]),t._v(" "),n("div",{staticClass:"tab-con"},t._l(t.tx_list,function(e,i){return n("div",{key:i,staticClass:"tab-con-list flex-box",class:{"tab-bg":i%2!=0}},[n("div",{staticClass:"tab-item tab-name"},[t._v(t._s(t._f("addreplace")(e.address,8,5))+"  ")]),t._v(" "),n("div",{staticClass:"tab-item tab-betting"},[t._v(t._s(e.bet_count)+" ")]),t._v(" "),e.luck_num>0?n("div",{staticClass:"tab-item tab-luck",style:e.win?"color:#ff7a3f;":""},[t._v(" "+t._s(e.luck_num)+" "),e.win?n("span",{staticClass:"iconfont"},[t._v("")]):t._e()]):t._e(),t._v(" "),0==e.luck_num?n("div",{staticClass:"tab-item tab-luck"},[t._v(" - ")]):t._e(),t._v(" "),n("div",{staticClass:"tab-item text-right flex-1",staticStyle:{"font-size":".4rem"}},[t._v(t._s(e.bet_time))])])}))]):t._e(),t._v(" "),"vault"==t.activeName?n("div",{staticClass:"vault-box"},[n("div",{staticClass:"vault-us"},[n("div",{staticClass:"us-title"},[t._v(t._s(t.$t("m.winnerIndex.playedVault_tit2")))]),t._v(" "),n("div",{staticClass:"vault-num"},[t._v(t._s(t.my_vault)),n("span",[t._v("ETH")])]),t._v(" "),n("div",{staticClass:"p-vault-btn",on:{click:function(e){t.send_withdraw()}}},[t._v(t._s(t.$t("m.winnerIndex.raise_btn")))]),t._v(" "),n("div",{staticClass:"vault-decs"},[t._v(t._s(t.$t("m.winnerIndex.vault_decs")))])]),t._v(" "),n("div",{staticClass:"vault-block flex-box"},[n("div",{staticClass:"vault-item"},[n("div",{staticClass:"vault-item-title"},[t._v(t._s(t.$t("m.winnerIndex.win_treasure")))]),t._v(" "),n("div",{staticClass:"vault-item-num"},[t._v(t._s(t.my_jackpot_stat)+" "),n("span",[t._v("ETH")])])]),t._v(" "),n("div",{staticClass:"vault-item"},[n("div",{staticClass:"vault-item-title"},[t._v(t._s(t.$t("m.winnerIndex.airdrop")))]),t._v(" "),n("div",{staticClass:"vault-item-num"},[t._v(t._s(t.my_airdrop_stat)+"  "),n("span",[t._v("ETH")])])]),t._v(" "),n("div",{staticClass:"vault-item"},[n("div",{staticClass:"vault-item-title"},[t._v(t._s(t.$t("m.winnerIndex.invite_reward")))]),t._v(" "),n("div",{staticClass:"vault-item-num"},[t._v(t._s(t.my_invite_reward_stat)+"  "),n("span",[t._v("ETH")])])]),t._v(" "),n("div",{staticClass:"vault-item"},[n("div",{staticClass:"vault-item-title"},[t._v(t._s(t.$t("m.winnerIndex.invite_win_treasure")))]),t._v(" "),n("div",{staticClass:"vault-item-num"},[t._v(t._s(t.my_invite_jackpot_reward_stat)+"  "),n("span",[t._v("ETH")])])]),t._v(" "),n("div",{staticClass:"vault-item"},[n("div",{staticClass:"vault-item-title"},[t._v(t._s(t.$t("m.winnerIndex.invite_airdrop")))]),t._v(" "),n("div",{staticClass:"vault-item-num"},[t._v(t._s(t.my_invate_airdrop_reward_stat)+"  "),n("span",[t._v("ETH")])])]),t._v(" "),n("div",{staticClass:"vault-item"},[n("div",{staticClass:"vault-item-title"},[t._v(t._s(t.$t("m.winnerIndex.all_airdrop")))]),t._v(" "),n("div",{staticClass:"vault-item-num"},[t._v(t._s(t.my_ess_airdrop_stat)+"  "),n("span",[t._v("ESS")])])])])]):t._e()])])]),t._v(" "),n("div",{staticClass:"footer"},[n("div",{staticClass:"line2"},[t._v(t._s(t.$t("m.public.footer.tip")))])])])]),t._v(" "),n("div",{staticClass:"register-pop",class:{active:t.is_register}},[n("div",{staticClass:"pop-con"},[n("div",{staticClass:"close-btn",on:{click:function(e){t.close_pop()}}},[n("div",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),n("div",{staticClass:"register-pop-title"},[t._v(t._s(t.$t("m.winnerIndex.register")))]),t._v(" "),n("div",{staticClass:"input-decs"},[t._v(t._s(t.$t("m.winnerIndex.input_decs")))]),t._v(" "),n("div",{staticClass:"register-pop-con flex-box"},[n("div",{staticClass:"register-pop-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.register_name,expression:"register_name"}],attrs:{type:"text",placeholder:t.$t("m.winnerIndex.register_place"),maxlength:"10"},domProps:{value:t.register_name},on:{input:function(e){e.target.composing||(t.register_name=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"register-pop-btn",on:{click:function(e){t.send_register()}}},[t._v(t._s(t.$t("m.winnerIndex.register")))])]),t._v(" "),n("div",{staticClass:"register-pop-decs"},[t._v(t._s(t.$t("m.winnerIndex.register_decs"))+"0.1ETH")])]),t._v(" "),n("div",{staticClass:"pop-mask"})]),t._v(" "),t.is_goTop?n("div",{staticClass:"go-top",on:{click:function(e){t.go_top()}}},[n("div",{staticClass:"iconfont"},[t._v("")])]):t._e(),t._v(" "),n("el-dialog",{staticClass:"betting-success",attrs:{title:t.$t("m.winnerIndex.betting_success"),visible:t.dialogVisible,width:"30%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("div",{staticClass:"dialog-con"},[n("p",{staticClass:"dialog-con-order"},[t._v(t._s(t.$t("m.winnerIndex.txhash"))+"："),n("span",[t._v(t._s(t.txhash_val))])])]),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("a",{staticClass:"dialog-con-btn look-btn",attrs:{href:"javascript(0)",target:"_Blank"}},[t._v(t._s(t.$t("m.winnerIndex.view_more")))]),t._v(" "),n("el-button",{staticClass:"dialog-con-btn",attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v(t._s(t.$t("m.public.confirm")))])],1)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"title-icon"},[e("em")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"end-head-img"},[e("img",{attrs:{src:i("T2pB"),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"winner-icon"},[e("div",{staticClass:"iconfont"},[this._v("")])])}]};var a=function(t){i("Hd7k")},l=i("C7Lr")(n.a,s,!1,a,"data-v-8a8fd6f8",null);e.default=l.exports},JhHb:function(t,e,i){i("SAFe");var n=i("AKd3").Object;t.exports=function(t,e,i){return n.defineProperty(t,e,i)}},SAFe:function(t,e,i){var n=i("FITv");n(n.S+n.F*!i("sjnA"),"Object",{defineProperty:i("lIiZ").f})},T2pB:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABFCAYAAAD6pOBtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUM5MURERkNEMUI5MTFFODlEMkRFQTBCRUEwMDZCQTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUM5MURERkREMUI5MTFFODlEMkRFQTBCRUEwMDZCQTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxQzkxRERGQUQxQjkxMUU4OUQyREVBMEJFQTAwNkJBMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxQzkxRERGQkQxQjkxMUU4OUQyREVBMEJFQTAwNkJBMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pk37vekAABlgSURBVHja1FwHdB3l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"},YPub:function(t,e,i){t.exports=i.p+"img/winner_end.3170286.png"},a3Yh:function(t,e,i){"use strict";e.__esModule=!0;var n,s=i("liLe"),a=(n=s)&&n.__esModule?n:{default:n};e.default=function(t,e,i){return e in t?(0,a.default)(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}},chkv:function(module,__webpack_exports__,__webpack_require__){"use strict";(function($){var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__=__webpack_require__("a3Yh"),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__),__WEBPACK_IMPORTED_MODULE_1__router__=__webpack_require__("YaEn");__webpack_exports__.a={components:{},data:function(){var t;return t={decimals:4,onewinner_address:onewinnerAddress,account_address:"",round:0,end_time:0,less_time:0,less_time_show:"",bet_price:0,bet_count:0,airdrop:0,luck_num:0,last_airdrop:0,last_airdrop_address:"",winner_address:"",winner_reward:0,winner_inviter_reward:0,last_winner_address:"",last_winner_reward:0,total_bet_count:0,my_bet_count:0,my_win_rate:0,user_name:"",register_name:"",my_vault:0,my_jackpot_stat:0,my_airdrop_stat:0,my_invite_reward_stat:0,my_invite_jackpot_reward_stat:0,my_invate_airdrop_reward_stat:0,tx_list:[],timer:null,winner_start_time:null,winner_end_time:null,day:"00",hour:"00",minute:"00",second:"00"},__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(t,"bet_count",1),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(t,"ratio",.1),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(t,"register",!0),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(t,"invite_link",menu_config.onewinner),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(t,"winner_type",!1),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(t,"activeName","played"),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(t,"is_register",!1),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(t,"is_rule",!1),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(t,"openprize",!0),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(t,"is_goTop",!1),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(t,"test",""),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(t,"dialogVisible",!1),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(t,"txhash_val",""),t},created:function created(){if(!checkweb3())return!1;var _vue=this;window.eventQueue={},window.loopBlock=function(lastblock){web3.eth.getBlockNumber().then(function(newblock){newblock>lastblock?(_vue.init_round(),_vue.load_account(),_vue.load_vault(),_vue.load_txlist(),web3.eth.getBlock(newblock).then(function(blockinfo){console.log(blockinfo),console.log(eventQueue);try{for(var i=0;i<blockinfo.transactions.length;i++){var txhash=blockinfo.transactions[i];for(var queuehash in eventQueue)if(txhash==queuehash){var funcname=eventQueue[queuehash];delete eventQueue[queuehash];try{eval(funcname+"('"+txhash+"')")}catch(t){console.log(t),console.log(funcname+"不存在"),"bet_done"==funcname&&_vue.$message({message:"下注成功",type:"success"})}}}}catch(t){}loopBlock(newblock)})):loopBlock(newblock)})},loopBlock(0),_vue.account_address=window.eth_account,_vue.init_round(),_vue.load_account(),_vue.load_vault(),_vue.load_txlist()},watch:{register_name:function(){""==this.register_name||null==this.register_name?this.test=this.register_name:/^\w+$/.test(this.register_name)?this.test=this.register_name:this.register_name=this.test},account_address:function(){this.$message({message:this.$t("m.winnerIndex.account_address")+this.account_address,type:"success"}),this.init_round(),this.load_account(),this.load_vault(),this.load_txlist()}},mounted:function(){var t=this;this.$refs.viewBox.addEventListener("scroll",function(){t.$refs.viewBox.scrollTop>100?t.is_goTop=!0:t.is_goTop=!1},!1)},computed:{bonus:function(){return""==this.bet_count||0==this.bet_count?this.bet_count=0:this.bet_count>100?this.bet_count=100:this.bet_count=parseFloat(this.bet_count),1e6*this.bet_count*this.bet_price*1e6/1e12}},methods:{betting_btn:function(t){this.bet_count=t},handleClick:function(t){this.activeName=t},register_pop:function(){this.is_register=!0},close_pop:function(){this.is_register=!1},rule_btn:function(){this.is_rule?this.is_rule=!1:this.is_rule=!0},copy_fun:function(t){"invite"==t?$("#share-link").select():$("#share-link1").select(),document.execCommand("copy",!1,null),this.$message({message:this.$t("m.winnerIndex.copyed"),center:!0})},go_top:function(){$(".content").animate({scrollTop:0},500)},handleClose:function(t){this.dialogVisible=!1},link_detail:function(){location.reload()},addressValue:function(t,e,i,n){try{return t.substr(0,e)+n+t.substr(e+i,t.length)}catch(t){}},send_withdraw:function(){if(!checkweb3())return!1;var t=this;onewinnerContract.methods.withdraw().send({from:t.account_address,value:0,gasPrice:web3.utils.toWei("20","gwei")},function(e,i){e||(eventQueue[i]="withdraw_done",window.withdraw_done=function(e){t.$message({message:t.$t("m.winnerIndex.withdraw"),type:"success"})})})},send_register:function(){if(!checkweb3())return!1;var t=this;onewinnerContract.methods.getAddressByUserName(t.register_name).call(null,function(e,i){if(!e)if("0x0000000000000000000000000000000000000000"==i.valueOf()){var n=web3.utils.toWei("0.1","ether"),s=localStorage.getItem("onewinner_invite")&&!isNaN(localStorage.getItem("onewinner_invite"))?parseInt(localStorage.getItem("onewinner_invite")):0;onewinnerContract.methods.register(t.register_name,s).send({from:t.account_address,value:n,gasPrice:web3.utils.toWei("20","gwei")},function(e,i){e||(eventQueue[i]="register_done",window.register_done=function(e){t.$message({message:t.$t("m.winnerIndex.succ_regis"),type:"success"}),t.is_register=!1})})}else t.$message({message:t.$t("m.winnerIndex.name_exist"),type:"error"})})},send_bet:function(t){if(!checkweb3())return!1;var e=this,i=web3.utils.toWei((e.bet_count*e.bet_price).toString(),"ether");t||(i=0);var n=localStorage.getItem("onewinner_invite")&&!isNaN(localStorage.getItem("onewinner_invite"))?parseInt(localStorage.getItem("onewinner_invite")):0;onewinnerContract.methods.bet(e.bet_count,n).send({from:e.account_address,value:i,gasPrice:web3.utils.toWei("20","gwei")},function(t,i){t||(eventQueue[i]="bet_done",window.bet_done=function(t){web3.eth.getTransactionReceipt(t,function(t,i){console.log(i),2==i.logs.length?e.$message({message:e.$t("m.winnerIndex.you_lose_airdrop").replace("%s",web3.utils.hexToNumber(i.logs[0].data)),type:"success"}):3==i.logs.length&&e.$message({message:e.$t("m.winnerIndex.you_win_airdrop").replace("%s",web3.utils.hexToNumber(i.logs[0].data)),type:"success"})}),e.txhash_val=t,e.dialogVisible=!0})})},init_round:function(){var t=this,e=location.href,i=t.invite_link,n=new RegExp(i+"/([^#]+)#/").exec(e);if(n){var s=n[1];onewinnerContract.methods.getAddressByUserName(s).call(null,function(t,e){if(!t){var i=e.valueOf();onewinnerContract.methods.getUserIdByAddress(i).call(null,function(t,e){if(!t){var i=e.valueOf();i>0&&localStorage.setItem("onewinner_invite",i)}})}})}onewinnerContract.methods.round().call(null,function(e,i){e||(t.round=i.valueOf(),t.load_round(t.round))}),onewinnerContract.methods.betPrice().call(null,function(e,i){e||(t.bet_price=web3.utils.fromWei(i.valueOf(),"ether"))})},load_round:function(t){var e=this;onewinnerContract.methods.getEndTime(t).call(null,function(t,i){t||(e.end_time=i.valueOf(),e.end_time>0&&(window.nowTime=Math.floor((new Date).getTime()/1e3),e.less_time=e.end_time-nowTime,!e.timer&&e.less_time>0&&(e.timer=setInterval(function(){e.less_time--;var t=e.less_time,i=Math.floor(t/86400);t%=86400;var n=Math.floor(t/3600);t%=3600;var s=Math.floor(t/60),a=t%60;e.less_time_show=i+"天"+n+"小时"+s+"分钟"+a+"秒",e.less_time<=0&&clearInterval(e.timer),t>0?(e.winner_type=!0,e.openprize=!1,e.day=i<10?"0"+i:i,e.hour=n<10?"0"+n:n,e.minute=s<10?"0"+s:s,e.second=a<10?"0"+a:a):(e.winner_type=!0,e.openprize=!0,e.day="00",e.hour="00",e.minute="00",e.second="00")},1e3))))}),t>1&&onewinnerContract.methods.getReward(t-1).call(null,function(t,i){t||(e.last_winner_reward=Number(web3.utils.fromWei(i.valueOf(),"ether")).toFixed(e.decimals))}),t>1&&onewinnerContract.methods.winner(t-1).call(null,function(t,i){t||(e.last_winner_address=i.valueOf())}),onewinnerContract.methods.getReward(t).call(null,function(t,i){t||(e.winner_reward=Number(web3.utils.fromWei(i.valueOf(),"ether")).toFixed(e.decimals),e.winner_inviter_reward=Number(.2*e.winner_reward*.25).toFixed(e.decimals))}),onewinnerContract.methods.isRun(t).call(null,function(i,n){i||(n.valueOf()?(e.winner_type=!0,e.openprize=!1):onewinnerContract.methods.winner(t).call(null,function(t,i){t||(e.winner_address=i.valueOf(),e.winner_type=!1,e.openprize=!1)}))}),onewinnerContract.methods.airdropWinner().call(null,function(t,i){t||0!=i.valueOf()&&(e.last_airdrop_address=i.valueOf())}),onewinnerContract.methods.airdropWinnerReward().call(null,function(t,i){t||(e.last_airdrop=Number(web3.utils.fromWei(i.valueOf(),"ether")).toFixed(e.decimals))}),onewinnerContract.methods.airdrop().call(null,function(t,i){t||(e.airdrop=Number(web3.utils.fromWei(i.valueOf(),"ether")).toFixed(e.decimals))}),onewinnerContract.methods.luckNum().call(null,function(t,i){t||(e.luck_num=i.valueOf())}),onewinnerContract.methods.getBetCount(t).call(null,function(i,n){i||(e.total_bet_count=n.valueOf(),onewinnerContract.methods.getMyBetCount(t,e.account_address).call(null,function(t,i){t||(e.my_bet_count=i.valueOf(),e.my_win_rate=Math.round(100*e.my_bet_count/e.total_bet_count))}))})},load_account:function(){var t=this;onewinnerContract.methods.getUserNameByAddress(t.account_address).call(null,function(e,i){e||(t.user_name=i.valueOf(),""==t.user_name?t.register=!1:t.register=!0)}),web3.eth.getAccounts(function(e,i){null!=e||0==i.length?MessageBox.confirm(i18n.t("m.public.address_not_found"),i18n.t("m.public.tip"),{confirmButtonText:i18n.t("m.public.confirm"),showClose:!1,showCancelButton:!1,type:"warning"}).then(function(){location.reload()}).catch(function(){location.reload()}):t.account_address=i[0]})},load_txlist:function(){var t=this;onewinnerContract.methods.getTxList(50).call(null,function(e,i){if(!e){t.tx_list=[];for(var n=i.valueOf(),s=0;s<n[0].length;s++){var a=n[0][s];if("0x0000000000000000000000000000000000000000"==a)break;var l=n[1][s],r=n[2][s],_=new Date(1e3*r).format("MM-dd hh:mm:ss"),o=n[3][s],c=n[4][s];t.tx_list[s]={address:a,bet_count:l,bet_time:_,luck_num:o,win:c}}}})},load_vault:function(){var t=this;onewinnerContract.methods.myVault(t.account_address).call(null,function(e,i){e?console.log(e):t.my_vault=Number(web3.utils.fromWei(i.valueOf(),"ether")).toFixed(t.decimals)}),onewinnerContract.methods.getStatJackpotReward(t.account_address).call(null,function(e,i){e||(t.my_jackpot_stat=Number(web3.utils.fromWei(i.valueOf(),"ether")).toFixed(t.decimals))}),onewinnerContract.methods.getStatAirdropReward(t.account_address).call(null,function(e,i){e||(t.my_airdrop_stat=Number(web3.utils.fromWei(i.valueOf(),"ether")).toFixed(t.decimals))}),onewinnerContract.methods.getStatInviterReward(t.account_address).call(null,function(e,i){e||(t.my_invite_reward_stat=Number(web3.utils.fromWei(i.valueOf(),"ether")).toFixed(t.decimals))}),onewinnerContract.methods.getStatInviterJackpotReward(t.account_address).call(null,function(e,i){e||(t.my_invite_jackpot_reward_stat=Number(web3.utils.fromWei(i.valueOf(),"ether")).toFixed(t.decimals))}),onewinnerContract.methods.getStatInviterAirdropReward(t.account_address).call(null,function(e,i){e||(t.my_invate_airdrop_reward_stat=Number(web3.utils.fromWei(i.valueOf(),"ether")).toFixed(t.decimals))}),onewinnerContract.methods.getStatEssAirdropReward(t.account_address).call(null,function(e,i){e||(t.my_ess_airdrop_stat=Number(web3.utils.fromWei(i.valueOf(),"ether")).toFixed(t.decimals))})}}}}).call(__webpack_exports__,__webpack_require__("L7Pj"))},liLe:function(t,e,i){t.exports={default:i("JhHb"),__esModule:!0}}});
//# sourceMappingURL=0.dbf5dd79b6328af2e02f.js.map