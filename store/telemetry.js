export const state = () => ({
    telemetry: {
        id: 0,
        temp: 0,
        humid: 0,
        created_on: ""
    },
    telemetryList: []
})

export const actions = {
    async getTelemetrics({commit}) {
        try {
            const response = await this.$api.$get(baseUrl("v1/telemetrylatest"));
            commit("saveTelemetry", response)
        } catch (e) {
            console.error(e);
        }
    },
    async getTelemetricsByDate({commit, rootState}) {
        try {
            const date = rootState.agenda.selectedDate;
            const response = await this.$api.get(baseUrl("v1/getbydate/" + date));
            commit("saveTelemetryList", response.data);
        } catch (e) {
            console.error(e);
        }
    }
}

export const mutations = {
    saveTelemetry(state, response) {
        state.telemetry = response;
    },
    saveTelemetryList(state, response) {
        state.telemetryList = response;
    }
}

const baseUrl = (endpoint) => {
    return `${process.env.BACKEND_BASE_URL}/${endpoint}`;
}
