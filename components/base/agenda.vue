<template>
    <div>
        <h2 class="agenda-header__title">Telemetry agenda</h2>
        <h3 class="agenda-header__day">{{ monthNames[month] }} {{ year }}</h3>
        <ul class="agenda">
            <li class="agenda__day" v-for="i in this.dayNames.length"><p>{{ i }}</p></li>
            <li class="agenda__dates" :class="[(j === 0) ? 'hidden' : '', (j <= day && j !== 0) ? 'active' : '']" v-for="j in this.daysInMonth">
                <p>{{ (j === 0) ? '' : j }}</p>
            </li>
        </ul>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            day: 0,
            month: 0,
            year: 0,
            daysInMonth: [],
            monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            dayNames: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        }
    },
    async mounted() {
        await this.createAgenda();
    },
    methods: {
        createAgenda() {
            //clear the agenda
            this.daysInMonth = [];

            // Get current date
            const currentDate = new Date();
            // Get the month and year of the current date
            this.day = currentDate.getDate();
            this.month = currentDate.getMonth();
            this.year = currentDate.getFullYear();

            // Calculate the amount of days in this month
            const dates = this.checkAmountOfDaysInMonth(this.year, this.month);

            // Get to know the first day of this month (On which day does the month start Monday or thursday)
            const firstday = (new Date(this.year, this.month, 1)).getDay();

            // Empty the array first with the empty days
            for (var i = 1; i < firstday; i++) {
                this.daysInMonth.push(0);
            }

            // Fill the array with all of the other days
            for (var j = 1; j <= dates; j++) {
                this.daysInMonth.push(j);
            }

            console.log(this.daysInMonth);
        },

        checkAmountOfDaysInMonth(year, month) {
            return 32 - new Date(year, month, 32).getDate();
        }
    }
}
</script>
