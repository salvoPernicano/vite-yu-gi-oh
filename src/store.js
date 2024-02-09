import { reactive } from "vue";

export const store = reactive({

    searchText: "",
    loading: true,
    ApiUrl : "https://db.ygoprodeck.com/api/v7/cardinfo.php"
})