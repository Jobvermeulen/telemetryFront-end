<template>
    <div class="left_info_column" :class="( getNumberOfTime === 2) ? 'dark' : ''">
        <h1>{{greatingTextArray[getNumberOfTime]}}</h1>
        <day_temp_humid_cycle/>
        <agenda/>
    </div>
</template>
<script>
import agenda from '@/components/base/agenda';
import day_temp_humid_cycle from '@/components/data/day_temp_humid_cycle';

export default {
    components: {
        agenda,
        day_temp_humid_cycle
    },
    data() {
        return {
            timeOfDayInNumber: 0,
            greatingTextArray: ['Good morning','Good afternoon','Good evening'],
        }
    },
    computed: {
        getNumberOfTime(){
            return this.$store.state.webpage.numberOfTime;
        }
    }
}
</script>
