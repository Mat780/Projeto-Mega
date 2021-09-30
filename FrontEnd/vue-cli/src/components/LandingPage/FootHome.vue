<template>
    <footer id="Foot">
        <img :src="pato" />

        <span id="frase-rodapé">
            <h2>Duck Health</h2>
        </span>
    </footer>
</template>

<script>
export default {
    name: "FootHome",
    data(){
        return{
            pato: '/img/DuckHealth_SVG.svg',
        }
    }
}
</script>