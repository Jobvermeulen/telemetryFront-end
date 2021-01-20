<template>
    <div class="data_visualisation" :class="( getNumberOfTime === 2) ? 'dark' : ''">
<!--        Ignore error -> The input field is moved to the default layout.-->
        <label for="expandDataVisulationFull" class="expand_btn"></label>
        <div class="chart-container">
            <canvas id="tempLine"></canvas>
        </div>
    </div>
</template>
<script>
import Chart from 'chart.js';

export default {

    data() {
        return {
            telemetrics: [],
            alterTelemtryObjectTemp: [],
            alterTelemtryObjectDates: [],
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
            // Clear data
            this.alterTelemtryObjectDates = [];
            this.alterTelemtryObjectTemp = [];

            this.telemetrics = this.$store.state.telemetry.telemetryList;
            console.log("logging from data_visualisation, fetching complete!");

            for (let i = 0; i < this.telemetrics.length; i++) {
                this.alterTelemtryObjectDates.push(this.telemetrics[i]["created_on"]);
                this.alterTelemtryObjectTemp.push(this.telemetrics[i]["temp"]);
            }

            const linegraph = document.getElementById("tempLine").getContext('2d');
            const chart = new Chart(linegraph, {
                type: 'bar',
                data: {
                    labels: this.alterTelemtryObjectDates,
                    datasets: [{
                        label: 'Temperature',
                        data: this.alterTelemtryObjectTemp,
                        backgroundColor: 'rgba(116, 137, 154, 0.5)',
                        borderColor: 'rgba(116, 137, 154, 1)',
                        borderWidth: 1
                    }],

                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    },
                    responsive: true,
                    maintainAspectRatio: false
                },
            });
        }
    },
    computed: {
        getNumberOfTime(){
            return this.$store.state.webpage.numberOfTime;
        }
    }
}
</script>
