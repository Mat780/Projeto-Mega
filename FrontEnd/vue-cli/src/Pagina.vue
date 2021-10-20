<template>
    <div>
        <head>
            <link
                rel="stylesheet"
                type="text/css"
                href="//fonts.googleapis.com/css?family=Nunito"
            />
            <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
    </div>
    <router-view/>
</template>

<script>
export default {
  name: "Pagina",
};
</script>

<style>

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    font-family: Nunito;
    font-style: normal;
}
</style>
