export const state = () => ({
    telemetry: {
        id: 0,
        temp: 0,
        humid: 0,
        created_on: ""
    }
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
}

export const mutations = {
    saveTelemetry(state, response) {
        state.telemetry = response;
    },
}

const baseUrl = (suffix) => {
    return `${process.env.BACKEND_BASE_URL}/${suffix}`;
}
