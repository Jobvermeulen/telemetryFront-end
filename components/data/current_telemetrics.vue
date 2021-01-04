<template>
    <div class="current">
        <h2>Current room telemetrics</h2>
        <ul>
            <li>
                <h3>
                    Temperature
                </h3>
                <p class="symbol">{{ (getTemp === 0) ? "--" : getTemp}} <span class="">C&#176;</span></p>
            </li>
            <li>
                <h3>
                    Humidity
                </h3>
                <p class="symbol">{{ (getHumidity === 0) ? "--" : getHumidity }} <span class="">%</span></p>
            </li>
        </ul>

        <p class="current__date">{{(getDate === 0) ? "--" : getDate}}</p>
    </div>
</template>
<script>
export default {
    async mounted(){
        await this.$store.dispatch("telemetry/getTelemetrics");
    },
    computed: {
        getTemp(){
            console.log('test');
            return this.$store.state.telemetry.telemetry.temp;
        },
        getHumidity(){
            return this.$store.state.telemetry.telemetry.humid;
        },
        getDate(){
            return this.$store.state.telemetry.telemetry.created_on;
        }
    }
}
</script>
