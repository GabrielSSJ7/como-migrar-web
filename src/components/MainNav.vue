<template>
    <v-row class="nav-container" justify="space-between" align="center" data-aos="flip-down">
        <div class="logo">
            <img src="../assets/img/logo-branco@2x.png" alt="logo como-migrar">
        </div>

        <div class="btn-member">
            <v-btn>
                Área de Membro
            </v-btn>
        </div>
    </v-row>
</template>

<script>
export default {
    name: "navigation"
}
</script>

<style lang="scss">
@import "../assets/scss/colors.scss";

.nav-container {
    background-color: $dark-blue;
    max-height: 100px;
    margin: 0 !important;
    padding: 10px;
    box-shadow: 0 3px 6px rgba($color: #000000, $alpha: 0.16);
    z-index: 9;
    .logo {
        max-width: 100px;
        padding: 8px;
        margin-left: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            width: 100%;
        }
    }
    .btn-member {
        margin-right: 35px;
        button {
            color: $dark-blue;
            font-family: 'Montserrat-Regular';
            text-transform: unset;
            font-size: 12px;    
        }
    }
}
</style>