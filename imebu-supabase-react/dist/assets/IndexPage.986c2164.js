import{m as d,j as e,a as o,r,G as i}from"./index.b7187d75.js";/* empty css                   */function m({item:t}){const n=d.exports.useNavigate(),a=s=>{n(s)};return e("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-4",children:o("div",{className:"card text-center card-propia animate__animated animate__fadeInUp",children:[e("div",{className:"overflow",children:e("img",{src:t.imageCard,alt:"image",className:"card-img-top"})}),o("div",{className:"card-body card-body-propia",children:[e("h3",{children:t.title}),e("h4",{className:"card-text card-text-propia",children:t.description}),e("button",{onClick:()=>a(t.url),className:"btn btn-outline-primary",children:"Ir al programa"})]})]})})}function p(){const{currentTipoUser:t}=r.exports.useContext(i),n=[];if(t==="persona"){const a=[{imageCard:"https://www.bucaramanga.gov.co/wp-content/uploads/2022/02/BANNER_JOVENES2560x900.png",title:"Empleo",description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",url:"/observatorio/indicadores-macroeconomicos"},{imageCard:"https://www.bucaramanga.gov.co/wp-content/uploads/2022/02/BANNER_JOVENES2560x900.png",title:"Banca",description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",url:"/observatorio/pulso-social"},{imageCard:"https://www.bucaramanga.gov.co/wp-content/uploads/2022/02/BANNER_JOVENES2560x900.png",title:"Centos de Desarrollo Empresarial",description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",url:"/observatorio/indicadores-empresariales"}];n.push(...a)}else{const a=[{imageCard:"https://www.bucaramanga.gov.co/wp-content/uploads/2022/02/BANNER_JOVENES2560x900.png",title:"Empleo Joven",description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",url:"/empleo-joven"},{imageCard:"https://www.bucaramanga.gov.co/wp-content/uploads/2022/02/BANNER_JOVENES2560x900.png",title:"Empleo",description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",url:"/observatorio/indicadores-macroeconomicos"},{imageCard:"https://www.bucaramanga.gov.co/wp-content/uploads/2022/02/BANNER_JOVENES2560x900.png",title:"Banca",description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",url:"/observatorio/pulso-social"},{imageCard:"https://www.bucaramanga.gov.co/wp-content/uploads/2022/02/BANNER_JOVENES2560x900.png",title:"Centos de Desarrollo Empresarial",description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",url:"/observatorio/indicadores-empresariales"}];n.push(...a)}return e("div",{className:"d-flex justify-content-center align-items-center",style:{minHeight:"60vh"},children:e("div",{className:"row mt-4 mb-4 ps-4 pe-4 container",children:n.map((a,s)=>e(m,{item:a},s))})})}function u(){const{getSession:t}=r.exports.useContext(i);return r.exports.useEffect(()=>{t()},[]),e("div",{children:e(p,{})})}export{u as default};