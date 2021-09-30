<template>
    <div id="BannerHomeDiv">
        <section class="BannerHomeSection">
            <div id="BannerHomeTextDiv">
                <h1>Duck Health</h1>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla lacinia euismod imperdiet. Pellentesque vel ultricies
                    ante. lacinia euismod imperdiet. ultricies ante.
                </p>

                <button id="BannerHomeButton" @click="ChangeLogin">
                    <section class="BannerHomeSection">
                        <img :src="buttonImg" id="BannerHomeImgButton" />
                        <div id="BannerHomeButtonText">Acessar Laudos</div>
                    </section>
                </button>
            </div>
            <div id="BannerHomeImgDiv">
                <img :src="banner" id="BannerHomeImgBg" />
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "BannerHome",
    data() {
        return {
            banner: "/img/bg-bannerAlt.png",
            buttonImg: "/img/LaudoImg.png",
        };
    },

    methods: {
        ChangeLogin() {
            this.$router.push({ path: '/Login' });
        },
    },
};
</script>

<style scoped>
div {
    margin: 0;
    padding: 0;
}

#BannerHomeDiv {
    background: #15c3d6;
    box-sizing: border-box;
    border-radius: 0px 0px 0px 150px;
}

.BannerHomeSection {
    display: grid;
    grid-template-columns: auto auto;
}

#BannerHomeImgDiv {
    text-align: right;
    padding-top: 30px;
}

#BannerHomeImgBg {
    max-width: 50vw;
    height: auto;
}

#BannerHomeImgButton {
    padding: 5px 10px 5px 10px;
    width: 30px;
    height: 30px;
}

#BannerHomeButton {
    margin-top: 125px;
    cursor: pointer;
}

#BannerHomeButtonText {
    text-align: center;
    padding-top: 7px;
    padding-right: 5px;

    color: #ffffff;
}

#BannerHomeTextDiv {
    margin: 90px 90px 142px 90px;
    text-align: center;
}

h1 {
    margin: 0 0 0 45px;
    font-family: Nunito;
    font-style: normal;
    font-weight: 800;
    font-size: 3rem;
    line-height: 87px;
    text-align: left;

    color: #ffd666;
}

p {
    margin: 0 0 0 45px;
    max-width: 20rem;
    color: #ffffff;

    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 33px;
    text-align: justify;
}

button {
    padding: 5px;
    background: #2e4a7d;
    border-radius: 20px;
    border: none;
    font-size: 3ex;
    text-align: center;
    color: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: 1s;
}

button:hover {
    background-color: #ffd666;
    color: rgba(46, 74, 125, 1);
}
</style>