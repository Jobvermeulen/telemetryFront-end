<template>
    <div>
        <ul class="agenda-header__buttons">
            <li @click="previousMonth()" class="left"><p><</p></li>
            <li><h3 class="agenda-header__day">{{ monthNames[month] }} {{ year }}</h3></li>
            <li @click="nextMonth()" class="right"><p>></p></li>
        </ul>
        <ul class="agenda">
            <li class="agenda__day" v-for="i in this.dayNames.length"><p>{{ i }}</p></li>
            <li class="agenda__dates"
                :class="[(j === 0) ? 'hidden' : '', (j <= day && j !== 0) ? 'active' : '', (j === day) ? 'current' : '',
                (selectedDate !== undefined && j === selectedDate.getDate() &&  selectedDate.getMonth() === month && selectedDate.getFullYear() === year) ? 'current':'']"
                v-for="j in this.daysInMonth" @click="saveDate(j)" ref="agenda_date">
                <p>{{ (j === 0) ? '' : j }}</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            currentDate: new Date(),
            selectedDate: new Date(),
            customDate: false,
            day: 0,
            month: 0,
            year: 0,
            daysInMonth: [],
            monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            dayNames: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        }
    },
    asyncData() {
        this.selectedDate = new Date();
    },
    async mounted() {

        await this.createAgenda();
    },
    methods: {
        async createAgenda() {
            //clear the agenda
            this.daysInMonth = [];

            await this.checkAgenda();

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
        },

        async checkAgenda() {
            // Get current date
            this.currentDate = new Date();

            // Get the month and year of the current date
            const day = this.currentDate.getDate();
            const month = this.currentDate.getMonth();
            const year = this.currentDate.getFullYear();

            if (this.month === month && this.year === year) {
                this.customDate = false;
            }

            if (!this.customDate) {
                this.day = day;
                this.month = month
                this.year = year
            } else {
                const compareDate = new Date(this.year, this.month)

                if (compareDate < this.currentDate) {
                    this.day = 32;
                } else {
                    this.day = 0;
                }
            }
        },

        checkAmountOfDaysInMonth(year, month) {
            return 32 - new Date(year, month, 32).getDate();
        },

        async saveDate(dayNumber) {
            this.selectedDate = new Date(this.year, this.month, dayNumber);

            const formattedNumberDay = ("0" + dayNumber).slice(-2);
            const formattedNumberMonth = ("0" + (this.month + 1)).slice(-2);

            const saved = formattedNumberDay + "-" + formattedNumberMonth + "-" + this.year.toString();

            if (this.selectedDate < this.currentDate) {
                await this.$store.dispatch("agenda/saveTheDate", saved);
            }
        },

        previousMonth() {
            this.customDate = true;

            if (this.month === 0) {
                this.month = 11;
                this.year = this.year - 1;
            } else {
                this.month = this.month - 1;
            }

            this.createAgenda();
        },

        async nextMonth() {
            this.customDate = true;

            if (this.month === 11) {
                this.month = 0;
                this.year = this.year + 1;
            } else {
                this.month = this.month + 1;
            }

            await this.createAgenda();
        },
    }
}
</script>
<!--
(j === this.selectedDate.day && this.month === this.selectedDate.month && this.year === this.selectedDate.year)? 'current': ''-->
<!--
(this.selectedDate !== undefined && j === this.selectedDate.getDate() &&  this.selectedDate.getMonth() === this.month && this.selectedDate.getFullYear() === this.year) ? 'current':'']"
-->
