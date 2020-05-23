import {delay} from "../delay";

const Api = {
    async fetchUser(url) {
        console.log("fetching from", url);
        await delay(2000);
        return {response: {id: "201", name:"stefan"}}
    }
};

export default Api;