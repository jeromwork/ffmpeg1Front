<template>
    <ion-app>scccsc
        <ion-router-outlet />
    </ion-app>
</template>

<script>
    import { IonApp, IonRouterOutlet } from '@ionic/vue';
    import { defineComponent } from 'vue';
    export default {
        name: "HelloIonic",
        components: {
            IonApp,
            IonRouterOutlet,
        },
    }
</script>

<style scoped>

</style>