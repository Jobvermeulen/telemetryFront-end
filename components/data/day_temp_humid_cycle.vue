<template>
    <div class="current_climate">
        <h2>Current climate</h2>
        <div class="data_section">
            <div class="data_section__info">
                <h3>
                    Temp
                </h3>
                <p class="symbol">{{ (getTemp === 0) ? "--" : getTemp }} <span class="">C&#176;</span></p>
            </div>
            <div class="data_section__info">
                <h3>
                    Humid
                </h3>
                <p class="symbol">{{ (getHumidity === 0) ? "--" : getHumidity }} <span class="">%</span></p>
            </div>
        </div>

        <p>{{ (getDate === 0) ? "--" : getDate }}</p>
    </div>
</template>
<script>
    export default {
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
        },
    }
</script>
