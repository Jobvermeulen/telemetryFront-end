<template>
    <div class="data_table" :class="( getNumberOfTime === 2) ? 'dark' : ''">
        <table>
            <tbody>
                <tr>
                    <th>temp</th>
                    <th>humid</th>
                    <th>created_on</th>
                </tr>
                <tr v-for="item in telemetrics">
                    <td>{{item["temp"]}}</td>
                    <td>{{item["humid"]}}</td>
                    <td>{{item["created_on"]}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            telemetrics: [],
        }
    },
    watch: {
        "$store.state.telemetry.telemetryList": {
            handler() {
                this.getTelemetrics();
            }
        }
    },
    methods: {
        async getTelemetrics() {
            this.telemetrics = this.$store.state.telemetry.telemetryList;
        }
    },
    computed: {
        getNumberOfTime(){
            return this.$store.state.webpage.numberOfTime;
        }
    }
}
</script>
