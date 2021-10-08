<template>
    <div class= "conteiner">
        <SideBar />
        <listaPacientes />
    </div>
</template>

<script>
import SideBar from "../components/sideBar/SideBar.vue";
import listaPacientes from "../components/ListarPacientes/listaPacientes.vue"

export default {
    name: 'ListarPacientes',
    components: {
        SideBar,
        listaPacientes
    }
};
</script>

<style scoped>

*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    color: #2e4a7d;
    font-family: "Nunito";
}

.conteiner{
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: rgba(235, 242, 245, 1);
}

</style>
