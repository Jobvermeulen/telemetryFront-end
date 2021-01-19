<template>
    <div class="container base">
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
        }
    }
</script>

<style>

</style>
