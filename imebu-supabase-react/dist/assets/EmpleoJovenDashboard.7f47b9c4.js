import{m as i,j as e,a as s,r as o,G as d}from"./index.b7187d75.js";/* empty css                   */function l({item:a}){const t=i.exports.useNavigate(),n=r=>{t(r)};return e("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-4",children:s("div",{className:"card text-center card-propia animate__animated animate__fadeInUp",children:[e("div",{className:"overflow",children:e("img",{src:a.imageCard,alt:"image",className:"card-img-top"})}),s("div",{className:"card-body card-body-propia",children:[e("h3",{children:a.title}),e("h4",{className:"card-text card-text-propia",children:a.description}),e("button",{onClick:()=>n(a.url),className:"btn btn-outline-primary",children:"Ingresar"})]})]})})}function c(){return e("div",{className:"d-flex justify-content-center align-items-center",style:{minHeight:"60vh"},children:e("div",{className:"row mt-4 mb-4 ps-4 pe-4 container",children:[{imageCard:"https://www.bucaramanga.gov.co/wp-content/uploads/2022/02/BANNER_JOVENES2560x900.png",title:"Postula tu empresa",description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",url:"/empleo-joven/postular-empresa"},{imageCard:"https://www.bucaramanga.gov.co/wp-content/uploads/2022/02/BANNER_JOVENES2560x900.png",title:"Postula los empleados de tu empresa",description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",url:"/empleo-joven/postular-empleados"}].map((t,n)=>e(l,{item:t},n))})})}function u(){const{getSession:a}=o.exports.useContext(d);return o.exports.useEffect(()=>{a("empleo-joven")},[]),e("div",{children:e(c,{})})}export{u as default};