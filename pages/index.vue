<template>
    <div class="container-xl base">
        <current/>
        <tableTelemetric/>
        <data_visualisation/>
    </div>
</template>

<script>
    import current from '@/components/data/current_telemetrics';
    import tableTelemetric from '@/components/data/show_table_data';
    import data_visualisation from '@/components/data/data_visualisation';
    export default {
        components: {
            current,
            tableTelemetric,
            data_visualisation
        },
        watch:{
            "$store.state.agenda.selectedDate": {
                handler(){
                    this.getData();
                }
            }
        },
        methods: {
            getData(){
                this.$store.dispatch("telemetry/getTelemetricsByDate");
            }
        },
        mounted() {
            // Check for time is going to be used
            const currentHour = new Date().getHours();

            let numberOfTime = 0;
            if(currentHour > 7 && currentHour < 12) {
                numberOfTime = 0
            } else if (currentHour < 12 && currentHour < 18) {
                numberOfTime = 1
            }else {
                numberOfTime = 2
            }

            this.$store.dispatch('webpage/saveNumberOfTime', numberOfTime);
        }
    }
</script>

<style>

</style>
