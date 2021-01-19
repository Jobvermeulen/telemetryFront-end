<template>
    <div class="left_info_column">
        <div class="current">
            <div class="info">
                <h3>
                    Temperature
                </h3>
                <p class="symbol">{{ (getTemp === 0) ? "--" : getTemp }} <span class="">C&#176;</span></p>
            </div>
            <div class="info">
                <h3>
                    Humidity
                </h3>
                <p class="symbol">{{ (getHumidity === 0) ? "--" : getHumidity }} <span class="">%</span></p>
            </div>
            <p>{{ (getDate === 0) ? "--" : getDate }}</p>
        </div>

        <agenda/>
    </div>
</template>
<script>
import agenda from '@/components/base/agenda';

export default {
    components: {
        agenda
    },
    async fetch() {
        await this.$store.dispatch("telemetry/getTelemetrics");
    },
    computed: {
        getTemp() {
            return this.$store.state.telemetry.telemetry.temp;
        },
        getHumidity() {
            return this.$store.state.telemetry.telemetry.humid;
        },
        getDate() {
            return this.$store.state.telemetry.telemetry.created_on;
        }
    }
}
</script>
