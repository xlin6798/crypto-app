(this["webpackJsonpcrypto-app"]=this["webpackJsonpcrypto-app"]||[]).push([[0],{39:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(30),i=c.n(a),s=(c(39),c(8)),o=c(12),j=c(15),l=c(34),d=c(0);var u=function(e){var t=e.ticker,c=e.onDelete,n=e.id;return Object(d.jsx)(j.a,{sm:6,md:4,xl:4,children:Object(d.jsx)(o.a,{className:"rounded p-3 mb-3 text-center ticker-".concat(n%3),children:Object(d.jsxs)(o.a.Body,{children:[Object(d.jsxs)(o.a.Title,{children:[" ",t.id," (",t.symbol,")",Object(d.jsx)(l.a,{onClick:function(){return c(t.symbol)}})]}),Object(d.jsxs)(o.a.Text,{children:[Object(d.jsxs)("p",{className:"fs-2 fw-bold",children:[" $",(+t.current_price).toFixed(2)," "]}),Object(d.jsxs)("p",{children:[" ",(+t.low_24h).toFixed(2)," Low"]}),Object(d.jsxs)("p",{children:[" ",(+t.high_24h).toFixed(2)," High"]}),Object(d.jsxs)("p",{children:[" ",(+t.price_change_percentage_1h_in_currency).toFixed(2),"% 1hr "]}),Object(d.jsxs)("p",{children:[" ",(+t.price_change_percentage_24h_in_currency).toFixed(2),"% 24hr "]}),Object(d.jsxs)("p",{children:[" ",(+t.price_change_percentage_7d_in_currency).toFixed(2),"% 7days "]})]})]})})})},b=c(31);var h=function(e){var t=e.tickers,c=e.onDelete,n=e.id;return Object(d.jsx)(b.a,{children:t.map((function(e){return Object(d.jsx)(u,{ticker:e,id:n++,onDelete:c},e.symbol)}))})},p=c(33),x=c(18);var O=function(e){var t=e.title,c=e.onAdd;return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsxs)("h3",{className:"text-center",children:[" ",t," "]}),Object(d.jsx)(x.a,{variant:"primary",onClick:c,children:" Add "})]})},f=c(32),m=c.n(f),_=c(20),g=c(17),y=function(e){var t=e.onAdd,c=Object(n.useState)(""),r=Object(s.a)(c,2),a=r[0],i=r[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(_.a,{className:"header",onSubmit:function(e){e.preventDefault(),a?(t({ticker:a}),i("")):alert("please fill in the empty inputs")},children:[Object(d.jsx)(g.a,{label:"Ticker",className:"mb-3",children:Object(d.jsx)(_.a.Control,{value:a,onChange:function(e){return i(e.target.value)},type:"text",placeholder:" "})}),Object(d.jsx)(x.a,{variant:"primary",type:"submit",children:"Submit"})]})})};var v=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(""),i=Object(s.a)(a,2),o=i[0],j=i[1],l=Object(n.useState)(!0),u=Object(s.a)(l,2),b=(u[0],u[1],Object(n.useState)(["etc","btc","ltc"])),x=Object(s.a)(b,2),f=x[0],_=x[1];return Object(n.useEffect)((function(){m.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d").then((function(e){var t=f,c=e.data.filter((function(e){return t.includes(e.symbol)}));j(c)})).catch((function(e){return console.log(e)}))})),Object(d.jsxs)(p.a,{className:"align-content-center",children:[Object(d.jsx)(O,{onAdd:function(){return r(!c)},title:"Crypto"}),c&&Object(d.jsx)(y,{onAdd:function(e){_(f.concat(e.ticker))}}),f.length>0?Object(d.jsx)(h,{onDelete:function(e){_(f.filter((function(t){return t!==e})))},id:0,tickers:o}):"No crypto to show"]})};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.85c7c118.chunk.js.map