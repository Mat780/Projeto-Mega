<template>
     <div>
          <div id="sidebar">
               <div id="quadrado1">
                    <img :src="pato" id="pato" />
               </div>

               <div id="quadrado2">
                    <img :src="logout" id="logout" />
               </div>
          </div>
     </div>
</template>

<script>
export default {
     name: "SideBar",
     data() {
          return {
               pato: "/img/DuckHealth_SVG.svg",
               logout: "/img/logout.png",
          };
     },
};
</script>

<style scoped>
#sidebar {
     background-color: #15c3d6;
     height: 100vh;
     width: 10%;
     border-radius: 0px 16px 16px 0px;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
}

#quadrado1 {
     background-color: #2e4a7d;
     height: 10%;
     width: 50%;
     border-radius: 8px;
     margin-top: 30%;
     display: flex;
     margin-left: 25%;
}

#quadrado2 {
     background: #12afcb;
     border-radius: 16px;
     height: 8%;
     width: 40%;
     margin-bottom: 15%;
     margin-left: 30%;
     align-items: center;
}
#logout {
     padding: 30%;
     padding-left: 35%;
}
</style>