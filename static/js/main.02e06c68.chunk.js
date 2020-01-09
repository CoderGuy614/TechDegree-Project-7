(this.webpackJsonpphoto=this.webpackJsonpphoto||[]).push([[0],{33:function(t,e,a){t.exports=a(61)},38:function(t,e,a){},61:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(30),c=a.n(o),s=a(11),l=a(12),i=a(13),h=a(15),u=a(14),p=a(16),m=(a(38),"66268d00207944868df08bb809cc6458"),d=a(7),f=a(6),g=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={searchText:"",loading:a.props.loading},a.onSearchChange=function(t){a.setState({searchText:t.target.value})},a.handleSubmit=function(t){t.preventDefault(),a.props.onSearch(a.query.value),t.currentTarget.reset()},a}return Object(p.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement("form",{className:"search-form",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"search",onChange:this.onSearchChange,name:"search",ref:function(e){return t.query=e},placeholder:"Search..."}),r.a.createElement("button",{type:"submit",id:"submit",className:"search-button"},r.a.createElement("i",{className:"material-icons icn-search"},"search")),""===this.props.title||"undefined"===this.props.title?r.a.createElement(f.a,{exact:!0,to:"/"}):r.a.createElement(f.a,{to:"/search/".concat(this.props.title)}))}}]),e}(n.Component),E=function(t){return r.a.createElement("li",null,r.a.createElement("img",{src:t.url,alt:""}))},b=function(t){return r.a.createElement("li",{className:"not-found"},r.a.createElement("h1",null,"Sorry, no Photos match your search."))},v=function(t){var e,a=t.data;if(a.length>0)e=a.map((function(t){return r.a.createElement(E,{key:t.id,url:"https://farm".concat(t.farm,".staticflickr.com/").concat(t.server,"/").concat(t.id,"_").concat(t.secret,".jpg"),title:t.title})}));else{if(t.loading)return r.a.createElement("p",null," loading photos.... ");e=r.a.createElement(b,null)}return r.a.createElement("div",{className:"photo-container"},r.a.createElement("h2",null," Photos of ",t.title," "),r.a.createElement("ul",null,e))},j=a(10),k=a.n(j),y=function(t){return r.a.createElement("nav",{class:"main-nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.b,{to:"/elephants"},"Elephants")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/birds"},"Birds")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/otters"},"Otters"))))},O=function(t){return r.a.createElement("ul",{className:"not-found"},r.a.createElement("h1",null,"404 Error"),r.a.createElement("h1",null,"Redirecting...."))},S=function(t){function e(){var t;return Object(l.a)(this,e),(t=Object(h.a)(this,Object(u.a)(e).call(this))).requestElephantPhotos=function(e){k.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(m,"&tags=").concat(e,"&safe_search=&per_page=24&format=json&nojsoncallback=1")).then((function(e){var a=Object(s.a)({},t.state.elephants);a.photos=e.data.photos.photo,a.loading=!1,a.title="elephants",t.setState({elephants:a})})).catch((function(t){console.log("Error fetching and parsing data",t)}))},t.requestBirdPhotos=function(e){k.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(m,"&tags=").concat(e,"&safe_search=&per_page=24&format=json&nojsoncallback=1")).then((function(e){var a=Object(s.a)({},t.state.birds);a.photos=e.data.photos.photo,a.loading=!1,a.title="birds",t.setState({birds:a})})).catch((function(t){console.log("Error fetching and parsing data",t)}))},t.requestOtterPhotos=function(e){k.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(m,"&tags=").concat(e,"&safe_search=&per_page=24&format=json&nojsoncallback=1")).then((function(e){var a=Object(s.a)({},t.state.otters);a.photos=e.data.photos.photo,a.loading=!1,a.title="otters",t.setState({otters:a})})).catch((function(t){console.log("Error fetching and parsing data",t)}))},t.performSearch=function(e){k.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(m,"&tags=").concat(e,"&safe_search=&per_page=24&format=json&nojsoncallback=1")).then((function(a){var n=Object(s.a)({},t.state.main);n.photos=a.data.photos.photo,n.loading=!1,n.title=e,t.setState({main:n})})).catch((function(t){console.log("Error fetching and parsing data",t)}))},t.state={main:{photos:[],loading:!0,title:""},turtles:{photos:[],loading:!0,title:"turtles"},birds:{photos:[],loading:!0,title:"birds"},otters:{photos:[],loading:!0,title:"otters"}},t}return Object(p.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){this.performSearch("cats"),this.requestElephantPhotos("elephants"),this.requestBirdPhotos("birds"),this.requestOtterPhotos("otters")}},{key:"render",value:function(){var t=this;return r.a.createElement(d.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(g,{onSearch:this.performSearch,loading:this.state.main.loading,title:this.state.main.title}),r.a.createElement(y,null),r.a.createElement(f.d,null,r.a.createElement(f.b,{exact:!0,path:"/",render:function(){return r.a.createElement(v,{data:t.state.main.photos,title:t.state.main.title,loading:t.state.main.loading})}}),r.a.createElement(f.b,{path:"/elephants",render:function(){return r.a.createElement(v,{data:t.state.elephants.photos,title:t.state.elephants.title,loading:t.state.elephants.loading})}}),r.a.createElement(f.b,{path:"/birds",render:function(){return r.a.createElement(v,{data:t.state.birds.photos,title:t.state.birds.title,loading:t.state.birds.loading})}}),r.a.createElement(f.b,{path:"/otters",render:function(){return r.a.createElement(v,{data:t.state.otters.photos,title:t.state.otters.title,loading:t.state.otters.loading})}}),r.a.createElement(f.b,{path:"/search/:title",render:function(){return r.a.createElement(v,{loading:t.state.main.loading,title:t.state.main.title,data:t.state.main.photos})}}),r.a.createElement(f.b,{component:O}))))}}]),e}(n.Component);c.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.02e06c68.chunk.js.map