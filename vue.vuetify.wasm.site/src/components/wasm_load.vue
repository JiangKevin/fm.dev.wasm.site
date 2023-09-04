<script lang="ts">
// export default {
//     mounted() {
//         let script = document.createElement('script');
//         script.type = 'text/javascript';
//         script.src = './static/js/hmi_editer_web.js';
//         document.body.appendChild(script);
//     },
// }

function loadJs(src:string) {
  return new Promise((resolve,reject)=>{
    let script = document.createElement('script');
    script.type = "text/javascript";
    script.src= src;
    document.body.appendChild(script);
      
    script.onload = ()=>{
    //   resolve();
    }
    script.onerror = ()=>{
    //   reject();
    }
  })
}
 
export default loadJs

</script>