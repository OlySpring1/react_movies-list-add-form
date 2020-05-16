(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(8),l=a.n(i),s=(a(17),a(11)),o=a(3),m=a(4),c=a(6),u=a(5),d=(a(18),a(19),a(20),function(e){var t=e.title,a=e.description,r=e.imgUrl,i=e.imdbUrl;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image"},n.a.createElement("figure",{className:"image is-4by3"},n.a.createElement("img",{src:r,alt:"Film logo"}))),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-48x48"},n.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("p",{className:"title is-8"},t))),n.a.createElement("div",{className:"content"},a,n.a.createElement("br",null),n.a.createElement("a",{href:i},"IMDB"))))});d.defaultProps={description:""};var p=function(e){var t=e.movies;return n.a.createElement("div",{className:"movies"},t.map((function(e){return n.a.createElement(d,Object.assign({key:e.imdbId},e))})))};p.defaultProps={movies:[]};var b=a(2),h=a(1),f=a(9),v=a.n(f),g=(a(21),/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/),E={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""},_=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={values:E,errors:{titleError:!1,descriptionError:!1,imgUrlError:!1,imdbUrlError:!1,imdbIdError:!1}},e.handleInput=function(t){var a=t.target,r=t.target.name;e.setState((function(e){return{values:Object(h.a)(Object(h.a)({},e.values),{},Object(b.a)({},r,a.value.trim())),errors:Object(h.a)(Object(h.a)({},e.errors),{},Object(b.a)({},"".concat(r,"Error"),!1))}}))},e.clearForm=function(){return e.setState({values:{title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}})},e.onBlurTitle=function(t){e.state.values.title||e.setState((function(e){return{errors:Object(h.a)(Object(h.a)({},e.errors),{},{titleError:!e.values.title})}}))},e.onBlurDescription=function(t){e.state.values.title||e.setState((function(e){return{errors:Object(h.a)(Object(h.a)({},e.errors),{},{descriptionError:!e.values.description})}}))},e.onBlurImgUrl=function(t){g.test(e.state.values.imgUrl)&&""!==e.state.values.imgUrl||e.setState((function(e){return{errors:Object(h.a)(Object(h.a)({},e.errors),{},{imgUrlError:!0})}}))},e.onBlurImdbUrl=function(t){g.test(e.state.values.imdbUrl)||e.setState((function(e){return{errors:Object(h.a)(Object(h.a)({},e.errors),{},{imdbUrlError:!0})}}))},e.onBlurImdbId=function(t){e.state.values.title||e.setState((function(e){return{errors:Object(h.a)(Object(h.a)({},e.errors),{},{imdbIdError:!e.values.title})}}))},e.onSubmit=function(t){t.preventDefault(),e.props.addMovie(Object(h.a)({},e.state.values)),e.setState({values:E})},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state,t=e.errors,a=e.values,r=this.state.values,i=r.title,l=r.description,s=r.imgUrl,o=r.imdbUrl,m=r.imdbId,c=this.state.errors,u=c.titleError,d=c.descriptionError,p=c.imgUrlError,b=c.imdbUrlError,h=c.imdbIdError,f=Object.values(t).some((function(e){return!0===e}))||Object.values(a).some((function(e){return""===e}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("form",{onSubmit:this.onSubmit,className:"form"},n.a.createElement("label",{className:"form__item"},"Title",n.a.createElement("input",{type:"text",name:"title",value:i,onBlur:this.onBlurTitle,onChange:this.handleInput,className:u?"form__input-error":"form__input"})),u&&n.a.createElement("span",{className:"error"},"Please, enter a title"),n.a.createElement("label",{className:"form__item"},"Description",n.a.createElement("input",{type:"text",name:"description",value:l,onBlur:this.onBlurDescription,onChange:this.handleInput,className:d?"form__input-error":"form__input"})),d&&n.a.createElement("span",{className:"error"},"Please, enter a description"),n.a.createElement("label",{className:"form__item"},"ImgUrl",n.a.createElement("input",{type:"text",name:"imgUrl",value:s,onChange:this.handleInput,onBlur:this.onBlurImgUrl,className:p?"form__input-error":"form__input"})),p&&n.a.createElement("span",{className:"error"},"Please enter correct ImgUrl"),n.a.createElement("label",{className:"form__item"},"ImdbUrl",n.a.createElement("input",{type:"text",name:"imdbUrl",value:o,onChange:this.handleInput,onBlur:this.onBlurImdbUrl,className:b?"form__input-error":"form__input"})),b&&n.a.createElement("span",{className:"error"},"Please enter correct ImdbUrl"),n.a.createElement("label",{className:"form__item"},"ImdbId",n.a.createElement("input",{type:"text",name:"imdbId",value:m,onChange:this.handleInput,className:"form__input"})),h&&n.a.createElement("span",{className:"error"},"Please enter correct ImdbId"),n.a.createElement("button",{type:"submit",disabled:f,className:v()({form__button:!f},{"form__button--disabled":f})},"Submit")))}}]),a}(r.Component),j=a(10),w=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={movies:j},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(s.a)(e.movies),[t])}}))},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.movies;return n.a.createElement("div",{className:"page"},n.a.createElement("div",{className:"page-content"},n.a.createElement(p,{movies:e})),n.a.createElement("div",{className:"sidebar"},n.a.createElement(_,{addMovie:this.addMovie})))}}]),a}(r.Component);l.a.render(n.a.createElement(w,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.e6b04baa.chunk.js.map