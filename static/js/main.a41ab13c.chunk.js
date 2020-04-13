(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{46:function(e,t,a){e.exports=a(62)},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(7),r=a.n(o),c=(a(51),a(41)),i=a(10),s=a(11),m=a(12),u=a(13),h=(a(52),a(36)),p=(a(53),a(91)),d=a(92),f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){if(e.preventDefault(),""===n.state.inputValue)return null;n.props.handleAtParent(n.state.inputValue.toLocaleLowerCase().trim(),!1),n.setState({inputValue:""})},n.handleChange=function(e){n.setState(Object(h.a)({},e.target.name,e.target.value))},n.state={inputValue:""},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"container"},l.a.createElement("form",{className:"row",onSubmit:this.handleSubmit},l.a.createElement(p.a,{className:"col-9",variant:"outlined",autoFocus:!0,label:"Pok\xe9mon name or number",type:"search",name:"inputValue",onChange:this.handleChange,value:this.state.inputValue}),l.a.createElement(d.a,{className:"col-2",variant:"contained",color:"primary",type:"submit"},l.a.createElement("span",{className:"material-icons"},"search")))))}}]),a}(n.Component),v=(a(57),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleGetPokemonDetails=function(e){var t=e.currentTarget.id;n.props.handleAtParent(n.state.pokemonData.species.url,t)},n.state={pokemonData:n.props.pokemonData},n}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t,a){e.pokemonData!==this.props.pokemonData&&this.setState({pokemonData:this.props.pokemonData})}},{key:"render",value:function(){var e=this.state.pokemonData;return l.a.createElement(l.a.Fragment,null,e?l.a.createElement("li",{className:"col-11 pokemon",id:this.props.id,onClick:this.handleGetPokemonDetails},l.a.createElement("div",{className:"pokemon__img",style:{backgroundImage:"url(".concat(e.sprites.front_default)}}),l.a.createElement("div",{className:"pokemon__description"},l.a.createElement("p",null,"#",e.id),l.a.createElement("p",null,e.name.charAt(0).toUpperCase()+e.name.slice(1)),l.a.createElement("p",null,e.types.map((function(e){return l.a.createElement("span",{key:e.type.name},e.type.name.charAt(0).toUpperCase()+e.type.name.slice(1)," ")}))))):null)}}]),a}(n.Component)),k=(a(58),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).handleClose=function(){e.props.handleAtParent()},e}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-11 error"},l.a.createElement("h3",null,"No Pok\xe9mon Matched Your Search!"),l.a.createElement("p",null,"Look out for typos."),l.a.createElement("p",null,"Maybe use Pok\xe9dex number."),l.a.createElement("div",{className:"material-icons",onClick:this.handleClose},"keyboard_return")))))}}]),a}(n.Component)),E=(a(59),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).handleClose=function(){e.props.handleAtParent()},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.pokemonData,t=this.props.pokemonDetails,a=t.flavor_text_entries.filter((function(e){return"en"===e.language.name})),n=this.props.pokemonEvolution;return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-11 pokemon--details"},l.a.createElement("p",{className:"material-icons pokemon__exit",onClick:this.handleClose},"keyboard_return"),l.a.createElement("p",{className:"pokemon__title"},l.a.createElement("span",{className:"pokemon__title__name"},t.name.charAt(0).toUpperCase()+t.name.slice(1)," "),l.a.createElement("span",{className:"pokemon__title__id"},"#",t.id)),l.a.createElement("div",{className:"pokemon__img",style:{backgroundImage:"url(".concat(e.sprites.front_default,")")}}),l.a.createElement("div",{className:"pokemon__types"},e.types.map((function(e){return l.a.createElement("span",{key:e.type.name,className:"pokemon__types__type"},e.type.name.charAt(0).toUpperCase()+e.type.name.slice(1)," ")}))),l.a.createElement("p",{className:"pokemon__flavorText"},a[0].flavor_text),l.a.createElement("div",{className:"pokemon__box"},l.a.createElement("div",{className:"pokemon__box__abilities"},"Abilities:",e.abilities.map((function(e){return l.a.createElement("p",{key:e.ability.name,className:"box__abilities__ability"},e.ability.name.charAt(0).toUpperCase()+e.ability.name.slice(1))})),l.a.createElement("br",null),l.a.createElement("p",{className:"pokemon__box__height"},"Height: ",e.height),l.a.createElement("p",{className:"pokemon__box__weight"},"Weight: ",e.weight)),l.a.createElement("div",{className:"pokemon__box__stats"},"Statistics:",e.stats.map((function(e){return l.a.createElement("p",{key:e.stat.name,className:"box__stats__stat"},e.stat.name.charAt(0).toUpperCase()+e.stat.name.slice(1),": ",e.base_stat)})))),l.a.createElement("div",{className:"pokemon__box2"},l.a.createElement("p",null,"Evolutions:"),n?l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:t.name===n.chain.species.name?"active":""},n.chain.species.name.charAt(0).toUpperCase()+n.chain.species.name.slice(1)),l.a.createElement("p",{className:"material-icons arrow"},"navigation")):null,n?0!==n.chain.evolves_to.length?0!==n.chain.evolves_to[0].evolves_to.length?l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:t.name===n.chain.evolves_to[0].species.name?"active":""},n.chain.evolves_to[0].species.name.charAt(0).toUpperCase()+n.chain.evolves_to[0].species.name.slice(1)),l.a.createElement("p",{className:"material-icons arrow"},"navigation"),l.a.createElement("p",{className:t.name===n.chain.evolves_to[0].evolves_to[0].species.name?"active":""},n.chain.evolves_to[0].evolves_to[0].species.name.charAt(0).toUpperCase()+n.chain.evolves_to[0].evolves_to[0].species.name.slice(1))):l.a.createElement("p",{className:t.name===n.chain.evolves_to[0].species.name?"active":""},n.chain.evolves_to[0].species.name.charAt(0).toUpperCase()+n.chain.evolves_to[0].species.name.slice(1)):l.a.createElement("p",null,"This Pok\xe9mon does not evolve."):null)))))}}]),a}(n.Component)),b=(a(60),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).handleChangeFilter=function(t){var a=t.currentTarget.id;e.props.handleAtParent(a)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.activeFilter;return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"container"},l.a.createElement("div",{className:"row row--filter"},l.a.createElement(d.a,{className:"col-2",onClick:this.handleChangeFilter,id:"az",style:e.azFilter?{backgroundColor:"black"}:null},l.a.createElement("i",{className:"fas fa-sort-alpha-down"})),l.a.createElement(d.a,{className:"col-2",onClick:this.handleChangeFilter,id:"za",style:e.zaFilter?{backgroundColor:"black"}:null},l.a.createElement("i",{className:"fas fa-sort-alpha-down-alt"})),l.a.createElement(d.a,{className:"col-2",onClick:this.handleChangeFilter,id:"19",style:e.ascentFilter?{backgroundColor:"black"}:null},l.a.createElement("i",{className:"fas fa-sort-numeric-down"})),l.a.createElement(d.a,{className:"col-2",onClick:this.handleChangeFilter,id:"91",style:e.descentFilter?{backgroundColor:"black"}:null},l.a.createElement("i",{className:"fas fa-sort-numeric-down-alt"})))))}}]),a}(n.Component)),_=(a(61),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).handleUploadNewPokemon=function(){e.props.handleAtParent(e.props.nextUrl)},e}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"container"},l.a.createElement("div",{className:"row row--more"},l.a.createElement(d.a,{className:"moreBtn",onClick:this.handleUploadNewPokemon},l.a.createElement("span",{className:"material-icons"},"expand_more")))))}}]),a}(n.Component)),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).fetchAllPokemon=function(e){fetch(e).then((function(e){if(e.ok)return e.json();throw new k("Connection problem (primal fetch)")})).then((function(e){n.setState({nextPokemon:e.next}),e.results.forEach((function(e){n.fetchAllPokemonData(e)}))})).catch((function(e){console.log(e)}))},n.fetchAllPokemonData=function(e){fetch(e.url).then((function(e){if(e.ok)return e.json();throw new k("Connection problem (primal fetch)")})).then((function(e){var t=Object(c.a)(n.state.pokemonData);t.push(e),n.setState({pokemonData:t})})).catch((function(e){console.log(e)}))},n.fetchData=function(e,t){n.setState({inputValue:e},(function(){fetch("".concat(n.state.api,"pokemon/").concat(n.state.inputValue)).then((function(e){if(e.ok)return e.json();throw new k("Connection problem (primal fetch)")})).then((function(e){n.setState({data:e,noMatchFound:!1,boxWithDetails:t})})).catch((function(e){n.setState({noMatchFound:!0,boxWithDetails:!1}),console.log(e)}))}))},n.getEvolutionUrl=function(e,t){n.fetchData(t,!0),fetch(e).then((function(e){if(e.ok)return e.json();throw new k("Connection problem (Evolution URL)")})).then((function(e){n.renderChain(e.evolution_chain.url),n.setState({pokemonDetails:e},(function(){n.setState({boxWithDetails:!0})}))})).catch((function(e){console.log(e)}))},n.renderChain=function(e){fetch(e).then((function(e){if(e.ok)return e.json();throw new k("Connection problem (Render Chain)")})).then((function(e){n.setState({evolutionChainDetails:e})})).catch((function(e){console.log(e)}))},n.closeWindow=function(){n.setState({boxWithDetails:!1,data:!1,noMatchFound:!1})},n.changeFilter=function(e){switch(n.setState({currentPage:1}),e){case"az":n.setState({filter:{azFilter:!0,zaFilter:!1,ascentFilter:!1,descentFilter:!1}});break;case"za":n.setState({filter:{azFilter:!1,zaFilter:!0,ascentFilter:!1,descentFilter:!1}});break;case"91":n.setState({filter:{azFilter:!1,zaFilter:!1,ascentFilter:!1,descentFilter:!0}});break;default:n.setState({filter:{azFilter:!1,zaFilter:!1,ascentFilter:!0,descentFilter:!1}})}},n.handleChangePage=function(e,t){n.setState({currentPage:t})},n.state={inputValue:"",api:"https://pokeapi.co/api/v2/",pokemonData:[],data:!1,noMatchFound:!1,boxWithDetails:!1,pokemonDetails:"",evolutionChainDetails:"",nextPokemon:"",filter:{azFilter:!1,zaFilter:!1,ascentFilter:!0,descentFilter:!1},currentPage:1,pokemonPerPage:10},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.fetchAllPokemon("".concat(this.state.api,"pokemon/"))}},{key:"render",value:function(){var e=this,t=this.state,a=t.pokemonData,n=t.filter,o=t.currentPage,r=t.pokemonPerPage;n.ascentFilter&&a.sort((function(e,t){return e.id-t.id})),n.descentFilter&&a.sort((function(e,t){return t.id-e.id})),n.azFilter&&a.sort((function(e,t){var a=e.name,n=t.name;return a<n?-1:a>n?1:0})),n.zaFilter&&a.sort((function(e,t){var a=e.name,n=t.name;return a>n?-1:a<n?1:0}));for(var c,i=o*r,s=i-r,m=[],u=a.slice(s,i),h=function(t){var a=l.a.createElement("li",{key:t,onClick:function(a){return e.handleChangePage(a,t)}},l.a.createElement(d.a,{className:o===t?"active":""},t));m.push(a)},p=1;p<=Math.ceil(a.length/r);p++)h(p);return 1===m.length&&m.pop(),this.state.data||this.state.boxWithDetails||(c=l.a.createElement("main",null,this.state.noMatchFound?l.a.createElement(k,{handleAtParent:this.closeWindow}):null,l.a.createElement("section",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-11 start"},l.a.createElement("h2",null,"Search for a Pok\xe9mon by name or using its National Pok\xe9dex number (1-802)."),l.a.createElement("p",null,"Have fun!")))),this.state.noMatchFound?null:l.a.createElement(l.a.Fragment,null,l.a.createElement(b,{activeFilter:this.state.filter,handleAtParent:this.changeFilter}),l.a.createElement("section",{className:"container"},l.a.createElement("ul",{className:"row"},u.map((function(t){return l.a.createElement(v,{pokemonData:t,handleAtParent:e.getEvolutionUrl,key:t.id,id:t.id})})))),l.a.createElement("section",{className:"container"},l.a.createElement("ul",{className:"row row--pagination"},m)),l.a.createElement(_,{nextUrl:this.state.nextPokemon,handleAtParent:this.fetchAllPokemon})))),this.state.data&&!this.state.boxWithDetails&&(c=l.a.createElement("main",null,this.state.noMatchFound?l.a.createElement(l.a.Fragment,null,l.a.createElement(k,{handleAtParent:this.closeWindow}),l.a.createElement("section",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-11 start"},l.a.createElement("h2",null,"Search for a Pok\xe9mon by name or using its National Pok\xe9dex number (1-802)."),l.a.createElement("p",null,"Have fun!"))))):l.a.createElement("section",{className:"container"},l.a.createElement("ul",{className:"row"},l.a.createElement(v,{pokemonData:this.state.data,handleAtParent:this.getEvolutionUrl,id:this.state.data.id}))))),this.state.data&&this.state.boxWithDetails&&(c=l.a.createElement("main",null,l.a.createElement(E,{pokemonData:this.state.data,pokemonDetails:this.state.pokemonDetails,pokemonEvolution:this.state.evolutionChainDetails,handleAtParent:this.closeWindow}))),l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Pok\xe9dex"),l.a.createElement(f,{handleAtParent:this.fetchData}),c,l.a.createElement("footer",null," Designed by Artur Dziadosz. Based on ",l.a.createElement("a",{href:"https://pokeapi.co/",target:"_blank",rel:"noopener noreferrer"},"PokeApi.")))}}]),a}(n.Component);r.a.render(l.a.createElement(g,null),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.a41ab13c.chunk.js.map