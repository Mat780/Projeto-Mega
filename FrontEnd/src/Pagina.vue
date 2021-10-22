<template>
  <div>
    <div>
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Nunito"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Pagina",
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  font-family: Nunito;
  font-style: normal;
}
</style>
