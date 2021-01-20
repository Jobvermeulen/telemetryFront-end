export const state = () => ({
    numberOfTime: 0,
})

export const actions = {
    async saveNumberOfTime({commit}, number){
        try{
            commit("saveTheNumberOfTime", number)
        }
        catch (e){
            console.error(e);
        }
    }
}

export const mutations = {
    saveTheNumberOfTime(state, number) {
        state.numberOfTime = number;
    }
}

