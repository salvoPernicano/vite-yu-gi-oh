import { reactive } from "vue";

export const store = reactive({

    searchText: "",
    loading: true,
    apiUrl : "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0&language=it",
    cardArray : []
})