(this["webpackJsonpreact-empty-template"]=this["webpackJsonpreact-empty-template"]||[]).push([[0],[,,,,,,,function(A,e,s){A.exports={sidebar:"sidebar_sidebar__19ZrP","sidebar-item":"sidebar_sidebar-item__4WV6W",active:"sidebar_active__5aM6Z"}},,function(A,e,s){A.exports={post:"post_post__zOHBZ","post-title":"post_post-title__1boX2","post-body":"post_post-body__1UnAf","about-user":"post_about-user__Ogymy",avatar:"post_avatar__3q6tb",message:"post_message__qEPoG","btn-block":"post_btn-block__hfVmF",btn:"post_btn__xwpvC"}},,,function(A,e,s){A.exports={"profile-info":"profile-info_profile-info__g8gdz","description-block":"profile-info_description-block__3qBk4","avatar-block":"profile-info_avatar-block__Js6QR"}},function(A,e,s){A.exports={messages:"messages_messages__3ADU3","messages-controls":"messages_messages-controls__2OcJe",message:"messages_message__3Aq-h"}},,,,function(A,e,s){A.exports={"my-posts":"my-posts_my-posts__1Ztel","posts-controls":"my-posts_posts-controls__1sCbh"}},function(A,e,s){A.exports={dialogs:"dialogs_dialogs__1IG0j",dialog:"dialogs_dialog__2osRY"}},,,function(A,e,s){A.exports={header:"header_header__1sTdr"}},,,function(A,e,s){A.exports={content:"content_content__3rl2Y"}},function(A,e,s){A.exports={profile:"profile_profile__3mYe6"}},function(A,e,s){A.exports={messenger:"messenger_messenger__NPFER"}},function(A,e,s){A.exports={music:"music_music__2brPe"}},function(A,e,s){A.exports={news:"news_news__2Zry6"}},function(A,e,s){A.exports={settings:"settings_settings__3JF40"}},function(A,e,s){A.exports={footer:"footer_footer__3ZjfN"}},,,,,function(A,e,s){},,,,,,,function(A,e,s){"use strict";s.r(e);var t=s(1),a=s.n(t),n={_state:{profile:{posts:[{id:1,message:"Hello! It is my post.",likesCount:3},{id:2,message:"Hello! It is my post.",likesCount:3},{id:3,message:"Hello! It is my post.",likesCount:3},{id:4,message:"Hello! It is my post.",likesCount:3},{id:5,message:"Hello! It is my post.",likesCount:3}]},newPostText:"IT-camasutra.com",messenger:{messages:[{id:1,message:"Hello! IT is my message."},{id:2,message:"Hello! IT is my message."},{id:3,message:"Hello! IT is my message."},{id:4,message:"Hello! IT is my message."},{id:5,message:"Hello! IT is my message."}],dialogs:[{name:"Alex",id:1},{name:"Dimych",id:2},{name:"Jurij",id:3},{name:"John",id:4},{name:"jack",id:5}]},news:{},music:{},settings:{}},getState:function(){return this._state},rerenderEntireTree:function(){console.log("rerender")},addUser:function(A){this._state.users.push(A)},addPost:function(){var A={id:58,message:this._state.newPostText,likesCount:0};this._state.profile.posts.push(A),this.updateNewPostText("")},updateNewPostText:function(A){this._state.newPostText=A,this.rerenderEntireTree(this._state)},subscribe:function(A){this.rerenderEntireTree=A}},i=s(20),c=s.n(i),o=s(8),r=(s(35),s(21)),d=s.n(r),l=s(0);var j=function(){return Object(l.jsx)("div",{className:d.a.header,children:Object(l.jsx)("h1",{children:"Header"})})},m=s(7),b=s.n(m);var g=function(){return Object(l.jsxs)("div",{className:b.a.sidebar,children:[Object(l.jsx)("div",{className:b.a["sidebar-item"],children:Object(l.jsx)(o.b,{to:"/profile",activeClassName:b.a.active,children:"Profile"})}),Object(l.jsx)("div",{className:b.a["sidebar-item"],children:Object(l.jsx)(o.b,{to:"/messenger",activeClassName:b.a.active,children:"Messenger"})}),Object(l.jsx)("div",{className:b.a["sidebar-item"],children:Object(l.jsx)(o.b,{to:"/news",activeClassName:b.a.active,children:"News"})}),Object(l.jsx)("div",{className:b.a["sidebar-item"],children:Object(l.jsx)(o.b,{to:"/music",activeClassName:b.a.active,children:"Music"})}),Object(l.jsx)("div",{className:b.a["sidebar-item"],children:Object(l.jsx)(o.b,{to:"/settings",activeClassName:b.a.active,children:"Settings"})})]})},u=s(24),x=s.n(u),p=s(25),f=s.n(p),h=s(17),O=s.n(h),P=s(9),v=s.n(P);var T=function(A){return Object(l.jsxs)("div",{className:v.a.post,children:[Object(l.jsx)("h5",{className:v.a["post-title"],children:"Post"}),Object(l.jsxs)("div",{className:v.a["post-body"],children:[Object(l.jsxs)("div",{className:v.a["about-user"],children:[Object(l.jsx)("img",{className:v.a.avatar,src:"data:image/jpeg;base64,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",alt:"user photo"}),Object(l.jsx)("span",{children:"User"})]}),Object(l.jsx)("div",{className:v.a.message,children:A.message}),Object(l.jsxs)("div",{className:v.a["btn-block"],children:[Object(l.jsx)("button",{type:"button",className:"btn  btn-sm btn-success",children:"Edit"}),Object(l.jsx)("button",{type:"button",className:"btn btn-sm btn-danger",children:"Del"})]})]})]})},E=function(A){var e=a.a.createRef();return Object(l.jsxs)("div",{className:O.a.myPosts,children:[Object(l.jsx)("h4",{children:"My posts"}),Object(l.jsxs)("div",{className:O.a["posts-controls"],children:[Object(l.jsx)("button",{type:"button",onClick:function(){A.addPost()},children:"Add new post"}),Object(l.jsx)("textarea",{onChange:function(){var s=e.current.value;A.updateNewPostText(s)},ref:e,name:"",id:"",cols:"40",rows:"1",value:A.newPostText})]}),A.profilePage.map((function(A){return Object(l.jsx)(T,{id:A.id,message:A.message,likesCount:A.likesCount},A.id)}))]})},C=s(12),w=s.n(C);var k=function(){return Object(l.jsxs)("div",{className:w.a["profile-info"],children:["profile info",Object(l.jsx)("div",{className:w.a["avatar-block"],children:Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABiVBMVEWE0Pf///+qOS3lmXMtLS23elx8IRqha1F9zveH1f2F0vl8zfckJCRjGhW6fF3om3QnHxmJ0vemKRkqJiPol23w+f6n3fnu+P4pJCErKSggJyp+0/244/rE6Pv4/P/nmG+V1vjT7fwmGxPck27MiGerMyPj9P3I6ft8weTd8f2d2fisLRdPcIFGXmseJyrCgmLQi2mdaE/gm3nFraamTEh6JB/euLW3XFNzsdFdiqFwq8k/UVo5REtqoLxWfZExNDaTZlCCXEmegHOgeGWiZEOnvc6dw9nIq6HSpZGNsM2TnLSiYGSbgZCJOTWoQjp2Egzt2dfr1NLBdW727OvXqqbOlZCjHAAiDgAgAABEW2dHSkxPPzg7NTKGZ1lkSz+4j31yU0NYUEx+bGXDi3G1gmqDdGxnYFx3gYlRNie3tbmZkpPYoISSq7uZkZGwucOnnZ2slY1+YGyQUj1hDQCSp8F8BwCLSkRlMzaAeYpkIyGec3yXjqGkWVuEQT6iY2iRPjm+b2jIhoC2WlLt/1PrAAASKElEQVR4nO2d+V8TSRqHOyEh6QZzESAXIQQaAoEQI/cVUFQQCSqiq7COI+zsrrjOoeOs16j85Vt9pNNHVXdVdXXC7MfvL8NAaPvhfet937o53/+7uE6/gOf6TvjX13dCJsr3D06OTAzlcgOqcrmhkcnxwf52/OMeE+bHR3JThTgX7gnL4iQpX4JvcfHCQG5k3NtX8JBwfGIgrlEhJX0iPjDkHaY3hPnx3JRkI2yBDxdyk554rQeE/SMDcRK6FiU35YEtWRPmJwocBZ1GGY7nGEMyJcyPTDk1OxxIjikkQ8LxnBvrGSB7CkPM2iQzwpGCe/PpIbkBRoZkRDgRZ4mnMIYLIyxejQVhfoip+VrqiQ/lLwFhfohV84MozLlmdE3ogX8aGeNDHSWc9JhPZuRGOkY4OOU9n6SewmRnCHMeBRiIwgPU+ZGecLwNDqpD5GibIy1hPtdOPkk9BboSgJKwvQZUFc61j7DtBlQRC4PtIcy3KYTCGCfaQTjeKTwZcYC0xiEnnOiYARXEOGHAISYc6CwgR+yphIT5TsRQC+KAd4SD8U7TyQpPETRGIsLJdmIIAvpn4Th+2iAhHOlpGxzPl5Y4G0SOw443BITtCqICzy1t1B8/nuHtPtWD293AJxwiBBRk2RsCyldaXium0oHUtC0hF8ZExCYkAgReBtxsZWVpqcTxsiRWJ1hB+uzKTCCWDgAVlxw+Hx5hSkhQiQq8UFpeTcVUBdZmNpbXV5Y42aw83yQWmkaWJX2LK61PB2J9AVl99k6Kj4hJOIQdZEArWl8tKmZQlO4DtMXi41R9bXVmenpjY3l5fR0gl3RaWV/emKkXYyntt1IlZ//GQsQjxA8yAgdakQ5Pr3Q63deXApJMWwSKxVJ9Kr/8pe6zxWVHE2IiYhFipwmBX1qLIfiIFNP5qOTBSETncINDOIlrQYHbeMyCL5BabeFxS9N/20Ai9jjmRQzCQUw+ji+txljwBdKrSpKREv/yarHPNnE4DVE5E+Zxa1G+VO9jAhiIKSmmtLK8mpacPmbXKAsONaozYQHTR/lSgImHBiQbbmxMP6n3xVLKE23janjKJSFuf1Ao1VkBAkQQcNPa4xyqG4fOlBMhbikjcGuMXNSqmENqtO8SOxBih1F+mk2QgajYiqQI0rBdQLUn7Mfk4/iVoleAqScaII9ijNtEG3vCAiYg8FF2jdComJYaeW6j+ATeIu2ijS0hdrnNL3vlo8UZ1WwCvyKVSwgj9qBnNewICWoZhnHUoGYmBL3GGbkcRDZF5LCGDSF2qvfOhOkZpavFrcwUpVCdXkPmjQIFIf7IKO+VCQN9q9NS8g8UlVRkkxmR0zZoQvxxJ2HJs0Aq5/6U9vd7bNPvR6UMJGEelw+YcCNl95Ls1LdqV9zECQkJRu95z1KFSTHboRuEn6IIRwgGnkrt4QvE0N1EBREaT1GEBMP3wlJ7nLRvzeFF4HkfQUgyySt4V7HplQ44jk31jGATDpKM3wvrnhXdRkDnsSlYsIETThEAAsI22DAdWMIYfOuB9KOghNjlmkK44r0N03UMCwKFMQkLJICgd+95suirY4wPy4TWjAEjJMkUkkp1jwFTa5iAQJaeIoyQcKKXX/aYMLWKD2g1IoSQcBoN9H7XPAWMPSGaojMbEUJI6KM8CKVelm2xaaIpSIsRrYSkM6H8TF9gzTs/LW6QzrE6EhIvt5CyoWdGTC3zhITmsUULIelsPS9XNHWPEOu4aUKnuAMhqQn5abn77Q1ivf54HSvT62WaVDQTEq8o4dXZivrTDHPAtUBvzGG9AkxTtoQF0seV1JKt8kOIMWK93guEHntCythPNBGOk5pQK0qfRqNjxwwZMwpgb6BETpizIRwgfRqvdp0y14e7oqObJ8wYt36UAXudpmVgiqMJ88TLnvhlpYNfOY92AcTgVoAFY+U4NPv3ikxoN7yGkmG9lJGQNNtr42zppwBQ0mxw6yTjEjJzshmJBEP0hNwAkrBA/CyVMPNCJYyOBSNXn7kxZCawFYwEgY4lwLTj0iiYelCE4+Rr81QvrfygEgJPjYAX3KSFzGSeK3zByAsJ0GEEESF9SjQQUmwyUCPNWq1JKHtqEHjZ5nGF2F0zmWcqH3jEZqUXfCtNEWkMbqonxJ+KaUnJFukfay1A2YwSZGTzGVGbzASea3xAZ1I5n66TZwtJeSjhJMUKWUHO+FozVBG7xhQzRCKhreNABYcyUzne0vMFx6LHAdvZJjvp1krpCWmW4Quc1A4r1w2Ekhlng01I0ChPHCAzlZPnIQPf7Gg0+qIXa4kilDAHJaRaAyzPrFVOTYQ6RtWUz6RWBm16mcCzrZD0lzDwgSfcAJ9POYzko1SAEdI4qdIBDtTPLYQGRgkyEtrcenZ8IhksIwvY9eTk+PmmiU7lA79/VgE9/HWaQKOvTXWEdNu15PnfkxqEUGIc0797REYJha5uyroaCsnfMuJFxkabqfW84jTdZEM4ASGk20shj+n/CAWUY47OkC1OVUGLZke7tEdFaxIh8UJxVQNWQop0LxOWioHen1CEKiSEBaLZapcxJFdoQymnq75bhOQ1qULIgZb1DxtCBbJqTxmZHRvtMj8kuhboo+gAKwr3WwiJZmP0iKvpjDlZQCAlyjEYJoCrjko/t/7O07Ttukt7whEzIU1BIwvU3pkbjoSqLYFGR6vV6pikanV0VPs27OM/9RZXKJthKyNqhMS9e41wOVbBJGwZVJHTxwAhXc0mqWAmpGyG8lqTyhkZIe4f4qfeOm0obU20aYTE4xeaSgHvCKkDTSvna4T0OwuFVVIvxSakDzSt4rtJSD5C01Q2/s9nHtnwxb9WHDdLoQmHjIR0RakE+Lo27BgzKAmDoe0bu1laxAEjIW2gyf476Q2eRBgC2t6lddSCkZAy0IRvJb3iA4RXJcQQbcKIGwlpA835sHeEXTLh9ktaI/YbCCmLUi9N2DWq2HCbMieq6UIlHKQjzF7z0kmrKuErOkJ15FslJFsj1CKE9e2ZEc6qhC/pwqlae6uEpEtomoReOmk0ohCGrlMSTugJaQ+c8ZQwqACGblAS5vSEtOd5eEnYFWJJSNn9zXrYDLtGm4SUXqoWNSphgZJwx7t02Ayl9AlxSk9ImfBBzeYdYTPQbO9SVt8sCD3N+E0nDdF2L/SE1IM0gnduOurWSdXSWyHE3mdolneVd3RMJQzFaW3IhNC7uq2ZDbdfUXfz9YTYW+4h8qp3oQL+h34cgxGhUDj3wopqrtj+hX4YwxBp3NhQiO8kh6PDSbamjAa3Ad/2SxeAzAg5IXvr9vnOzdcsTRntEl5dv/6yRD1IYyakjzSywlmgOMsKLnkty2ezpItnTdJXbf3uHiUre5uhnyZvuX+jsJ6QOuPrH8gwNQ7vMDhXzNC3YEHICew6/MmbDJzK2HtiQZhlFmui5wxex9THL7B4JMeqISZfu4qhqozjNLQTwAax6kuBVMHiddTN3S5HMYyKI6dzicTGhBxnGC9lc/QxGyNGayzeRTvwxN1ooklCHL5yiEysTGict6BcTGMWi3A6fM6kFWrbLlTCfkYndzLIiclbbN6luRjD3cyM9bGuC5vkbTY+qq1saxIW2DwWVKfuEKNRVkcVm+fxWR1i7TbYJG8yMqG27KtJyOwI3exNN0Zk5qOcttOy+V/qJVEWuRmbitaoB9YsmjIR0q82sapGXZ+yiqNca7FJa8VQgdWjOeHWMGVTZJXrJWl7nzRChldW0DbF5DV2gFw4byZkU7cpoqtPkzvs3kC3WF8jdDkYZRRNVhw+Zxdl9BsuWmuEC+weL83YkCIOMwyjnH4LYouQ6d0xAkeIOFzDPQkWU/1WQsoFJwgRIibPGV+c0drP7Xq/BUqCQNAWkztMXVSXDQ2E9KuE4cIvboZv0y92hkt3AJ+OkGW+kJW9hlncVBlb0LCb2/XeNRtlf57F6GhEa6cRFgPAeul35Bv2H7L9Zzjuh2Cw5khYCwYjPzMsZiTpT4l0u4fURkJJ2iFzamtGYEB54wxjQv2RA4adzoyj6StlDxCasckXjDCYatLJcGyE273cNsruNHc5ncJ8NdrV5GPupoajP9zux0dKyMaT1dbGu1rNsKAf4FX1GxPPslk389kmGY5vMZ6pwGT6QhCEbDZ+6/XOcFQPMXs6WpN3PHXVatVT077LyC+vbpUkShaYxiN4jISuU6J0YQxXeH3tPJmUly6Yd+NBN46qP4ic/fyqJN1S45bSeH656fQWV7FGkK7buPPrQTWpdfJH4TwIRSK/vfn1v0ucO0jTeWYmQuodbPJtG2/vfv7994ODd60WFyVDPHt/5c2bN3/8d5fL0jOajqI1EVIOSAl8Nn5nr1H2z3cDHeh250erzlwtG767Ium9v9z48FagjT2mk2jN50RRJAzJOe/sPSqLfr9/XyLs3tdlBwLESEgGvLIPHiSWyx92OZrlJuabZ8yE5BsveG73gyjjATUUI+5FqRDfqyZUJJYbd3cFYkjz4eyW89rIhveFbOnjXBPPrxnx4IwCUfXRK3Otp4mJT3c4sqV7lrOELYQERgTuCcyX8OvVUBC7T4kRI5syX/e+4Xli2X+3RGJHy/n61nMTsS+W4bm3nx6JfpPm5tWmqEfEiKhNwPmG+Yniow+72IzWW7yshP14PQwQXQzuafbTz4Z623J2hAUw9F4B/AJ5pFj+E5fRekUC5PxSnHDK8wg+FKJ6Jg8S8KoC2A0DlBvkHhYj5N5HCKHznQEC/xbkPpTUpnhgcFT1aCVbFwX+vY98qljGYYTccgE7R9hhLhHEl09ovhZi97xpAzQ64GwpfDaAMuOHkkOpA7uFDXratW11ypc+oPzTjNh91WhGuKtGzj4rfN37lihjYhQ/2uYO6N1WUEKbLoYgfPQ78OkQDz6fmrqFVWtvY/P9FTX+OgACJRpv7cwIu2UOfuo8KmMI2d05Wwe1WPFgz9T1NZ47FAmG/nijfhQRZEx69CfydPYw9MIgOCFieQ3P3bUmQIT251XE+aunFkjpIBegsbGzzyoePE3AJPrvIEpySJhBEkLvHQURZi7h/AZNfdHMOP/u9Nx0kol8tEnt7F2TD8dDNZX3oGZEXPaIusGjYAUU7jpFGKMaTTNKkHvBc+3QFnkk4zT0rvuA2ICKRPGtNXGgLgtCEVrKU75knyKcGA8O9t/9Fjo7Oz09Owv99m7+QMPrnicxoKLyB8tMB+IiHSShubefvYMRQq2aazHKlE21vknDB5SYM+3FQN65iiQ0+KnA3yU2oKrG/n63jfa/0PD5ZU/V5w3khVY2hLp4KsT3aAElfdmfn4fRze9/mXP+baTKd3WE8DhqT9jK+3xpjsZDdWrMAUq9w4L/+dxwgycj/qk1RvTFcnaEzbyf3aVqglbMRuOLKvA1iycmPqnHt0IvCcIgVOrT7FsmfJ5IbMiZ0fauVVtCaWyR//io0xw2EhPSAT3oRuhE6JsMZy81IJC4m7XeLYNP6Bv66CaItkXiW/uruR0IfQ8IKtHOqPzQnsCJ0Pfp8sYZWYkjBwBHQp/bXOitEt+c3t+Z8PAyIya+Or6/M6Evf3kRxUXn18cgvLyI4qJtnsAn9OUvLmVEFecwAPEIffmvlxARDxCT0Of7dukyP5aLEhD6ji4ZIkYUJST0LVwqxMQD3PfGJ/TdY9NNZCLHSoaK0He4eFniTcKhFqUlvDTxRrxP8M5khL6FS9BbFBuHJK9MSOi71+i0p+LHGDpC4KmdRSRpgpSEvoVE52Kq2CBpgrSEvsOO1XBlQg+lJQRm7EhqFP0LFO9KR+g7fND+vFF+QBRDXRL6fPf97XVVMUFjQDeEoBZvY8QRncdjPCBso6smFu9Rv6UbQuCqF+1gTDQoHZQBoRRVvW6OInGOZ0sIGD2t4xJ+/H6SV4Q+38MLskUaJHwPqTIEa0Jgx0XslUT4ElnwsSIEMecr49whJhbdxJeWWBGC3HHUYOaswHzf6PODUewIgRYeJFhEnUT56wID91TFlBAYcuHikStIMfHogkXra4kxIdDhw0U/ZZsEzrnI0HqK2BP6JEt+u0iQUYpiQlw8us8az+cRoSRA2SjjYYqJsvj1iLnxVHlGKOnw/sNvjQSQCAMVgd2kny0eLbCKmzB5Sqjo8P7C0YPFi0bDryABXtHfaFwsPjhauH/PI8u11AbCpg4PD+8pAl95DqapjYQd0nfCv76+E/719T8GLtNV3fQQsQAAAABJRU5ErkJggg==",alt:"avatar"})}),Object(l.jsx)("div",{className:w.a["description-block"],children:"description"})]})},N=function(A){return Object(l.jsxs)("div",{className:f.a.profile,children:[Object(l.jsx)(k,{}),Object(l.jsx)(E,{profilePage:A.profilePage,newPostText:A.newPostText,addPost:A.addPost,updateNewPostText:A.updateNewPostText})]})},Q=s(26),I=s.n(Q),J=s(13),q=s.n(J),R=function(A){return Object(l.jsx)("div",{className:q.a.message,children:A.message})},Y=function(A){var e=a.a.createRef();return Object(l.jsxs)("div",{className:q.a.messages,children:[Object(l.jsx)("h4",{children:"Messages"}),Object(l.jsxs)("div",{className:q.a["messages-controls"],children:[Object(l.jsx)("button",{type:"button",onClick:function(){var A=e.current.value;alert("add new message: ".concat(A))},children:"Add message"}),Object(l.jsx)("textarea",{ref:e,name:"",id:"",cols:"40",rows:"1"})]}),A.messagesState.map((function(A){return Object(l.jsx)(R,{id:A.id,message:A.message},A.id)}))]})},y=s(18),S=s.n(y),z=function(A){var e="/dialogs/"+A.id;return Object(l.jsx)("div",{className:S.a.dialog,children:Object(l.jsx)(o.b,{to:e,children:A.name})})},H=function(A){return Object(l.jsxs)("div",{className:S.a.dialogs,children:[Object(l.jsx)("h4",{children:"Dialogs"}),A.dialogsState.map((function(A){return Object(l.jsx)(z,{id:A.id,name:A.name},A.id)}))]})},B=function(A){return Object(l.jsxs)("div",{className:I.a.messenger,children:[Object(l.jsx)(H,{dialogsState:A.messengerState.dialogs}),Object(l.jsx)(Y,{messagesState:A.messengerState.messages})]})},G=s(27),F=s.n(G);var K=function(){return Object(l.jsx)("div",{className:F.a.music,children:Object(l.jsx)("h3",{children:"Music"})})},V=s(28),Z=s.n(V);var U=function(){return Object(l.jsx)("div",{className:Z.a.news,children:Object(l.jsx)("h3",{children:"News"})})},M=s(29),D=s.n(M);var W=function(){return Object(l.jsx)("div",{className:D.a.settings,children:Object(l.jsx)("h3",{children:"Settings"})})},L=s(2),X=function(A){return Object(l.jsxs)("div",{className:x.a.content,children:[Object(l.jsx)(L.a,{path:"/profile",render:function(){return Object(l.jsx)(N,{profilePage:A.profilePage,newPostText:A.newPostText,addPost:A.addPost,updateNewPostText:A.updateNewPostText})}}),Object(l.jsx)(L.a,{path:"/messenger",render:function(){return Object(l.jsx)(B,{messengerState:A.state.messenger})}}),Object(l.jsx)(L.a,{path:"/news",component:U}),Object(l.jsx)(L.a,{path:"/music",component:K}),Object(l.jsx)(L.a,{path:"/settings",component:W})]})},_=s(30),$=s.n(_);var AA=function(){return Object(l.jsx)("div",{className:$.a.footer,children:Object(l.jsx)("h1",{children:"Footer"})})},eA=function(A){return Object(l.jsxs)("div",{className:"app-wrapper",children:[Object(l.jsx)(j,{}),Object(l.jsx)(g,{}),Object(l.jsx)(X,{state:A.state,profilePage:A.state.profile.posts,newPostText:A.state.newPostText,addPost:A.addPost,updateNewPostText:A.updateNewPostText}),Object(l.jsx)(AA,{})]})},sA=function(A){c.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(o.a,{children:Object(l.jsx)(eA,{state:n.getState(),addPost:n.addPost,updateNewPostText:n.updateNewPostText})})}),document.getElementById("root"))};sA(n.getState()),n.subscribe(sA)}],[[42,1,2]]]);
//# sourceMappingURL=main.197986ba.chunk.js.map