(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(33),o=a.n(r),l=(a(67),a(2)),c=a(3),s=a(6),u=a(4),d=a(5),m=a(7),p=a(1),h=(a(16),a(9)),b=a.n(h),g={moda:{background:"url('https://wallpaperaccess.com/full/130053.jpg')",backgroundSize:"100%",borderRadius:"10px",marginLeft:"25%",marginTop:"10%",zIndex:-1,paddingTop:"5%"},upload:{marginLeft:"25%"}},f=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).submitFile=function(t){t.preventDefault();var a=new FormData;console.log(e.state.files[0]),console.log(e.state.files[1]),console.log(e.state.files[2]),a.append("image",e.state.files[0]),b.a.post("/image-upload-appliance",a,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){t.data&&t.data.imageUrl&&(e.props.onSuccessfulUpload(t.data.imageUrl),console.log(t.data))}).catch(function(e){alert("Photo Failed To Upload...")})},e.fileSelectedHandler=function(t){e.setState({files:t.target.files})},e.state={files:[]},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"container",style:g.moda},i.a.createElement("form",{style:g.upload,onSubmit:this.submitFile},i.a.createElement("input",{type:"file",multiple:!0,onChange:this.fileSelectedHandler}),i.a.createElement("button",{type:"submit",multiple:!0,onClick:this.submitFile},"Send")))}}]),t}(n.Component),v=Object(m.a)(f),k=a(19),E={close:{position:"fixed",background:"linear-gradient(90deg, #d9d9d9, #b3b3b3, #737373, #d9d9d9, #b3b3b3, #737373)",backgroundSize:"400%",borderRadius:"10px",border:"1px",borderStyle:"solid",cursor:"pointer",fontSize:"25px",fontWeight:100,bottom:"101%",left:"96%",padding:"5px 10px 5px 10px"},plus:{background:"linear-gradient(90deg, #8080ff, #0000ff, #8080ff, #0000ff, #8080ff, #0000ff, #8080ff, #0000ff)",backgroundSize:"400%",borderRadius:"10px",textAlign:"center",border:"1px",borderStyle:"solid",cursor:"pointer",fontSize:"20px",fontWeight:200,marginLeft:"40%",marginRight:"40%"},moda:{background:"url('https://wallpaperaccess.com/full/130053.jpg')",backgroundSize:"50%",borderRadius:"10px",marginRight:"25%",marginLeft:"25%",textAlign:"center",color:"Black",fontWeight:900,fontSize:"19px"},comment:{width:"400px",paddingBottom:"5%"},sub:{marginTop:"1%",marginLeft:"47%"},img:{marginTop:"-7%",marginRight:"20%"},back:{background:"url('https://www.lg.com/hk_en/images/WM/features/hk_en_sup_ha_hero_001_.jpg')",backgroundSize:"cover"}},j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).onSuccessfulUpload=function(e){a.setState({imgUrl:e})},a.state={show:!1},a.showModal=function(){a.setState({show:!0})},a.hideModal=function(){a.setState({show:!1})},a.submit=function(){""===a.state.appliance_name&&a.setState({show:!0}),""===a.state.price?a.setState({show:!0}):a.setState({show:!1})},a.state={appliance_name:"",price:"",comment:""},a.handleMessageInput=a.handleMessageInput.bind(Object(p.a)(Object(p.a)(a))),a.handleMessageInput2=a.handleMessageInput2.bind(Object(p.a)(Object(p.a)(a))),a.handleMessageInput3=a.handleMessageInput3.bind(Object(p.a)(Object(p.a)(a))),a.handleSubmitMessage=a.handleSubmitMessage.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleMessageInput",value:function(e){this.setState({appliance_name:e.target.value})}},{key:"handleMessageInput2",value:function(e){this.setState({price:e.target.value})}},{key:"handleMessageInput3",value:function(e){this.setState({comment:e.target.value})}},{key:"handleSubmitMessage",value:function(e){if(e.preventDefault(),""===this.state.appliance_name)return alert("Appliance Name And Price Both Required To Submit!");if(""===this.state.price)return alert("Appliance Name And Price Both Required To Submit!");var t={appliance_name:this.state.appliance_name,price:this.state.price,comment:this.state.comment,imgURL:this.state.imgUrl};console.log(this.state),console.log(this.state.imgUrl),console.log(t.imgURL),k.post("/api/appliances").send(t).set("Accept","application/json").end(function(e,t){e||!t.ok?alert("Error Appliance Not Added!"):alert("New Appliance Has Been Added! Refresh Page To Reveal New Appliance!")})}},{key:"render",value:function(){return i.a.createElement("main",null,i.a.createElement(y,{closeTimeoutMS:200,show:this.state.show,handleClose:this.hideModal},i.a.createElement("div",{style:E.img},i.a.createElement(v,{onSuccessfulUpload:this.onSuccessfulUpload})),i.a.createElement("form",{onSubmit:this.handleSubmitMessage},i.a.createElement("div",{style:E.moda},i.a.createElement("p",null,"Appliance Name"),i.a.createElement("input",{placeholder:"Appliance Name",onChange:this.handleMessageInput,value:this.state.appliance_name})),i.a.createElement("div",{style:E.moda},i.a.createElement("p",null,"Price"),i.a.createElement("input",{placeholder:"Price",onChange:this.handleMessageInput2,value:this.state.price})),i.a.createElement("div",{style:E.moda},i.a.createElement("p",null,"Comment"),i.a.createElement("textarea",{placeholder:"Comment",onChange:this.handleMessageInput3,value:this.state.comment})),i.a.createElement("input",{style:E.sub,type:"submit",value:"Submit",onClick:this.submit}))),i.a.createElement("p",{className:"plus",style:E.plus,type:"button",onClick:this.showModal},"+"))}}]),t}(i.a.Component),y=function(e){var t=e.handleClose,a=e.show,n=e.children,r=a?"modal display-block":"modal display-none";return i.a.createElement("div",{className:r+" modal"},i.a.createElement("section",{className:"modal-main animated bounce delay-2s",style:E.back},n,i.a.createElement("button",{style:E.close,className:"close",onClick:t},"X")))},S=Object(m.a)(j),O=(a(32),{center:{textAlign:"center"},border:{border:"groove 10px"},image:{width:"50px",height:"50px",marginLeft:"350px"}}),w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={appliances:[]},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("/api/appliances").then(function(t){var a=t.data;e.setState({appliances:a})})}},{key:"handleClick",value:function(e){b.a.delete("/api/appliances/"+e).then(function(e){}).then(function(e){alert("Item deleted refresh to remove")})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{style:O.center},this.state.appliances.map(function(t){return i.a.createElement("p",{style:O.border},t.appliance_name,i.a.createElement("br",null),"Price: ",t.price,i.a.createElement("br",null),"Comment: ",t.comment,i.a.createElement("br",null),i.a.createElement("img",{style:O.image,src:t.imgURL}),i.a.createElement("br",null),i.a.createElement("button",{onClick:function(){e.handleClick(t._id)},className:"delete-btn"},"Delete"))}))}}]),t}(i.a.Component),x={base:{background:"black",border:0,borderRadius:2,color:"white",padding:"1.2em",marginLeft:"25%",cursor:"pointer"},list:{paddingTop:"1%",marginLeft:"25%",marginRight:"25%",color:"white",background:'url("https://wallpapermemory.com/uploads/357/floor-background-hd-1680x1050-83195.jpg")',backgroundSize:"cover",backgroundAttachment:"fixed",boxShadow:"20px 20px rgba(0,0,0,.25)"}},C=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={isHidden:!0},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"toggleHidden",value:function(){this.setState({isHidden:!this.state.isHidden})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("button",{onClick:this.toggleHidden.bind(this),style:x.base},"Appliances"),!this.state.isHidden&&i.a.createElement(M,null))}}]),t}(i.a.Component),M=function(){return i.a.createElement("div",{className:"container appList",style:x.list},i.a.createElement("div",null,i.a.createElement(S,null),i.a.createElement(w,null)))},I=Object(m.a)(C),N={moda:{background:"url('https://image.freepik.com/free-photo/light-brown-wooden-textured-background_53876-75016.jpg')",backgroundSize:"50%",borderRadius:"10px",marginLeft:"25%",marginTop:"10%",zIndex:-1,paddingTop:"5%"},upload:{marginLeft:"25%"}},R=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).submitFile=function(t){t.preventDefault();var a=new FormData;console.log(e.state.file),a.append("image",e.state.file[0]),b.a.post("/image-upload-furniture",a,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){alert("Photo Uploaded!")}).catch(function(e){alert("Photo Failed To Upload...")})},e.handleFileUpload=function(t){e.setState({file:t.target.files})},e.state={file:null},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"container aws",style:N.moda},i.a.createElement("form",{style:N.upload,onSubmit:this.submitFile},i.a.createElement("input",{label:"upload file",type:"file",onChange:this.handleFileUpload}),i.a.createElement("button",{type:"submit",onClick:this.submitFile},"Send")))}}]),t}(n.Component),A=Object(m.a)(R),_=a(19),z={close:{position:"fixed",background:"linear-gradient(90deg, #0000ff, #8080ff, #0000ff, #8080ff, #0000ff, #8080ff, #0000ff, #8080ff, #0000ff)",backgroundSize:"400%",borderRadius:"10px",border:"1px",borderStyle:"solid",cursor:"pointer",fontSize:"25px",fontWeight:100,bottom:"101%",left:"96%",padding:"5px 10px 5px 10px"},plus:{background:"linear-gradient(90deg, #8080ff, #0000ff, #8080ff, #0000ff, #8080ff, #0000ff, #8080ff, #0000ff)",backgroundSize:"400%",borderRadius:"10px",textAlign:"center",border:"1px",borderStyle:"solid",cursor:"pointer",fontSize:"20px",fontWeight:200,marginLeft:"40%",marginRight:"40%"},moda:{background:"url('https://image.freepik.com/free-photo/light-brown-wooden-textured-background_53876-75016.jpg')",backgroundSize:"50%",borderRadius:"10px",marginRight:"25%",marginLeft:"25%",textAlign:"center",color:"Black",fontWeight:900,fontSize:"19px"},comment:{width:"400px",paddingBottom:"5%"},sub:{marginTop:"1%",marginLeft:"47%"},img:{marginTop:"-7%",marginRight:"20%"},back:{background:"url('http://tukpencarialhaq.com/wp-content/uploads/2018/06/chair-blue.jpg')",backgroundSize:"100%"}},L=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={show:!1},a.showModal=function(){a.setState({show:!0})},a.hideModal=function(){a.setState({show:!1})},a.submit=function(){""===a.state.furniture_name&&a.setState({show:!0}),""===a.state.price?a.setState({show:!0}):a.setState({show:!1})},a.state={furniture_name:"",price:"",comment:""},a.handleMessageInput=a.handleMessageInput.bind(Object(p.a)(Object(p.a)(a))),a.handleMessageInput2=a.handleMessageInput2.bind(Object(p.a)(Object(p.a)(a))),a.handleMessageInput3=a.handleMessageInput3.bind(Object(p.a)(Object(p.a)(a))),a.handleSubmitMessage=a.handleSubmitMessage.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleMessageInput",value:function(e){this.setState({furniture_name:e.target.value})}},{key:"handleMessageInput2",value:function(e){this.setState({price:e.target.value})}},{key:"handleMessageInput3",value:function(e){this.setState({comment:e.target.value})}},{key:"handleSubmitMessage",value:function(e){if(e.preventDefault(),""===this.state.furniture_name)return alert("Furniture Name And Price Both Required To Submit!");if(""===this.state.price)return alert("Furniture Name And Price Both Required To Submit!");var t={furniture_name:this.state.furniture_name,price:this.state.price,comment:this.state.comment};console.log(this.state),_.post("/api/furniture").send(t).set("Accept","application/json").end(function(e,t){e||!t.ok?alert("Error Furniture Not Added!"):alert("New Furniture Has Been Added! Refresh Page To Reveal New Furniture Item!")})}},{key:"render",value:function(){return i.a.createElement("main",null,i.a.createElement(T,{show:this.state.show,handleClose:this.hideModal},i.a.createElement("div",{style:z.img},i.a.createElement(A,null)),i.a.createElement("form",{onSubmit:this.handleSubmitMessage},i.a.createElement("div",{style:z.moda},i.a.createElement("p",null,"Furniture Name"),i.a.createElement("input",{placeholder:"Furniture Name",onChange:this.handleMessageInput,value:this.state.appliance_name})),i.a.createElement("div",{style:z.moda},i.a.createElement("p",null,"Price"),i.a.createElement("input",{placeholder:"Price",onChange:this.handleMessageInput2,value:this.state.price})),i.a.createElement("div",{style:z.moda},i.a.createElement("p",null,"Comment"),i.a.createElement("textarea",{placeholder:"Comment",onChange:this.handleMessageInput3,value:this.state.comment})),i.a.createElement("input",{style:z.sub,type:"submit",value:"Submit",onClick:this.submit}))),i.a.createElement("p",{className:"plus",style:z.plus,type:"button",onClick:this.showModal},"+"))}}]),t}(i.a.Component),T=function(e){var t=e.handleClose,a=e.show,n=e.children,r=a?"modal display-block":"modal display-none";return i.a.createElement("div",{className:r+" modal"},i.a.createElement("section",{className:"modal-main",style:z.back},n,i.a.createElement("button",{style:z.close,className:"close",onClick:t},"X")))},F=Object(m.a)(L),H={center:{textAlign:"center"},border:{border:"groove 10px"}},P=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={furniture:[]},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("/api/furniture").then(function(t){var a=t.data;e.setState({furniture:a})})}},{key:"render",value:function(){return i.a.createElement("div",{style:H.center},this.state.furniture.map(function(e){return i.a.createElement("p",{style:H.border},"Furniture Name: ",e.furniture_name,i.a.createElement("br",null),"Price: ",e.price,i.a.createElement("br",null),"Comment: ",e.comment)}))}}]),t}(i.a.Component),U={base:{background:"black",border:0,borderRadius:2,color:"white",padding:"1.1em",cursor:"pointer",marginLeft:"25%",marginRight:"68.5%"},list:{marginLeft:"25%",marginRight:"25%",background:'url("https://wallpapermemory.com/uploads/357/floor-background-hd-1680x1050-83195.jpg")',backgroundSize:"cover",backgroundAttachment:"fixed",color:"white",boxShadow:"20px 20px rgba(0,0,0,.25)"}},B=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={isHidden:!0},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"toggleHidden",value:function(){this.setState({isHidden:!this.state.isHidden})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("p",{onClick:this.toggleHidden.bind(this),style:U.base},"Furniture"),!this.state.isHidden&&i.a.createElement(D,null))}}]),t}(i.a.Component),D=function(){return i.a.createElement("div",{className:"container furnList",style:U.list},i.a.createElement(F,null),i.a.createElement(P,null))},W=Object(m.a)(B),q={moda:{background:"url('https://wallpaperaccess.com/full/717368.jpg')",backgroundSize:"100%",borderRadius:"10px",marginLeft:"25%",marginTop:"10%",zIndex:-1,paddingTop:"5%"},upload:{marginLeft:"25%"}},X=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).submitFile=function(t){t.preventDefault();var a=new FormData;console.log(e.state.file),a.append("image",e.state.file[0]),b.a.post("/image-upload-entertainment",a,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){alert("Photo Uploaded!")}).catch(function(e){alert("Photo Failed To Upload...")})},e.handleFileUpload=function(t){e.setState({file:t.target.files})},e.state={file:null},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"container aws",style:q.moda},i.a.createElement("form",{style:q.upload,onSubmit:this.submitFile},i.a.createElement("input",{label:"upload file",type:"file",onChange:this.handleFileUpload}),i.a.createElement("button",{type:"submit",onClick:this.submitFile},"Send")))}}]),t}(n.Component),J=Object(m.a)(X),$=a(19),G={close:{position:"fixed",background:"linear-gradient(90deg, #663300, #663300, #b35900, #e67300, #663300, #b35900, #e67300, #663300, #b35900)",backgroundSize:"400%",borderRadius:"10px",border:"1px",borderStyle:"solid",cursor:"pointer",fontSize:"25px",fontWeight:100,bottom:"101%",left:"96%",padding:"5px 10px 5px 10px"},plus:{background:"linear-gradient(90deg, #8080ff, #0000ff, #8080ff, #0000ff, #8080ff, #0000ff, #8080ff, #0000ff)",backgroundSize:"400%",borderRadius:"10px",textAlign:"center",border:"1px",borderStyle:"solid",cursor:"pointer",fontSize:"20px",fontWeight:200,marginLeft:"40%",marginRight:"40%"},moda:{background:"url('https://wallpaperaccess.com/full/717368.jpg')",backgroundSize:"100%",borderRadius:"10px",marginRight:"25%",marginLeft:"25%",textAlign:"center",color:"Black",fontWeight:900,fontSize:"19px"},comment:{width:"400px",paddingBottom:"5%"},sub:{marginTop:"1%",marginLeft:"47%"},img:{marginTop:"-7%",marginRight:"20%"},back:{background:"linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6) ), url('http://besprizornik.spb.ru/images/300/DSC100332954.jpg')",backgroundSize:"100% 105%"}},K=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={show:!1},a.showModal=function(){a.setState({show:!0})},a.hideModal=function(){a.setState({show:!1})},a.submit=function(){""===a.state.entertainment_name&&a.setState({show:!0}),""===a.state.price?a.setState({show:!0}):a.setState({show:!1})},a.state={entertainment_name:"",price:"",comment:""},a.handleMessageInput=a.handleMessageInput.bind(Object(p.a)(Object(p.a)(a))),a.handleMessageInput2=a.handleMessageInput2.bind(Object(p.a)(Object(p.a)(a))),a.handleMessageInput3=a.handleMessageInput3.bind(Object(p.a)(Object(p.a)(a))),a.handleSubmitMessage=a.handleSubmitMessage.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleMessageInput",value:function(e){this.setState({entertainment_name:e.target.value})}},{key:"handleMessageInput2",value:function(e){this.setState({price:e.target.value})}},{key:"handleMessageInput3",value:function(e){this.setState({comment:e.target.value})}},{key:"handleSubmitMessage",value:function(e){if(e.preventDefault(),""===this.state.entertainment_name)return alert("Entertainment Name And Price Both Required To Submit!");if(""===this.state.price)return alert("Entertainment Name And Price Both Required To Submit!");var t={entertainment_name:this.state.entertainment_name,price:this.state.price,comment:this.state.comment};console.log(this.state),$.post("/api/entertainment").send(t).set("Accept","application/json").end(function(e,t){e||!t.ok?alert("Error entertainment not added!"):alert("New Entertainment Has Been Added! Refresh Page To Reveal New Entertainment Item!")})}},{key:"render",value:function(){return i.a.createElement("main",null,i.a.createElement(Q,{show:this.state.show,handleClose:this.hideModal},i.a.createElement("div",{style:G.img},i.a.createElement(J,null)),i.a.createElement("form",{onSubmit:this.handleSubmitMessage},i.a.createElement("div",{style:G.moda},i.a.createElement("p",null,"Entertainment Name"),i.a.createElement("input",{placeholder:"Entertanment Name",onChange:this.handleMessageInput,value:this.state.appliance_name})),i.a.createElement("div",{style:G.moda},i.a.createElement("p",null,"Price"),i.a.createElement("input",{placeholder:"Price",onChange:this.handleMessageInput2,value:this.state.price})),i.a.createElement("div",{style:G.moda},i.a.createElement("p",null,"Comment"),i.a.createElement("textarea",{placeholder:"Comment",onChange:this.handleMessageInput3,value:this.state.comment})),i.a.createElement("input",{style:G.sub,type:"submit",value:"Submit",onClick:this.submit}))),i.a.createElement("p",{className:"plus",style:G.plus,type:"button",onClick:this.showModal},"+"))}}]),t}(i.a.Component),Q=function(e){var t=e.handleClose,a=e.show,n=e.children,r=a?"modal display-block":"modal display-none";return i.a.createElement("div",{className:r+" modal"},i.a.createElement("section",{className:"modal-main",style:G.back},n,i.a.createElement("button",{style:G.close,className:"close",onClick:t},"X")))},V=Object(m.a)(K),Y={center:{textAlign:"center"},border:{border:"groove 10px"}},Z=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={entertainment:[]},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("/api/entertainment").then(function(t){var a=t.data;e.setState({entertainment:a})})}},{key:"render",value:function(){return i.a.createElement("div",{style:Y.center},this.state.entertainment.map(function(e){return i.a.createElement("p",{style:Y.border},"Entertainment Name: ",e.entertainment_name,i.a.createElement("br",null),"Price: ",e.price,i.a.createElement("br",null),"Comment: ",e.comment)}))}}]),t}(i.a.Component),ee={base:{background:"black",border:0,borderRadius:2,color:"white",padding:"1.2em",marginLeft:"25%",cursor:"pointer"},list:{marginLeft:"25%",marginRight:"25%",background:'url("https://wallpapermemory.com/uploads/357/floor-background-hd-1680x1050-83195.jpg")',backgroundSize:"cover",backgroundAttachment:"fixed",color:"white",boxShadow:"20px 20px rgba(0,0,0,.25)"}},te=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={isHidden:!0},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"toggleHidden",value:function(){this.setState({isHidden:!this.state.isHidden})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("button",{onClick:this.toggleHidden.bind(this),style:ee.base},"Entertainment"),!this.state.isHidden&&i.a.createElement(ae,null))}}]),t}(i.a.Component),ae=function(){return i.a.createElement("div",{className:"container entList",style:ee.list},i.a.createElement("div",null,i.a.createElement(V,null),i.a.createElement(Z,null)))},ne=Object(m.a)(te),ie={button:{width:"100px",height:"100px"}},re=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"logout",value:function(){console.log("Checking In"),b.a.get("/users/logout").then(function(e){console.log(e.data),window.location.href="/login"}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("button",{onClick:this.logout,style:ie.button},"Logout"))}}]),t}(i.a.Component),oe=Object(m.a)(re),le={background:{marginTop:"10%"}},ce=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"container",style:le.background},i.a.createElement(oe,null),i.a.createElement(I,null),i.a.createElement(W,null),i.a.createElement(ne,null))}}]),t}(n.Component),se=Object(m.a)(ce),ue=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function de(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(i.a.createElement(se,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");ue?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):de(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):de(e)})}}()},16:function(e,t,a){},32:function(e,t,a){},62:function(e,t,a){e.exports=a(100)},67:function(e,t,a){}},[[62,1,2]]]);
//# sourceMappingURL=main.c3e0c046.chunk.js.map