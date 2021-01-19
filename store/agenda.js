export const state = () => ({
    selectedDate: "",
})

export const actions = {
    async saveTheDate({commit}, date){
        try{
            commit("saveTheDate", date)
        }
        catch (e){
            console.error(e);
        }
    }
}

export const mutations = {
    saveTheDate(state, date) {
        state.selectedDate = date;
    }
}

