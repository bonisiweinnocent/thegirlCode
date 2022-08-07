import axios from 'axios'


export default function help() {

    return {
        info: [],
        userStories: [],
        userMotivation: [],
        user_message: '',
        getuserStories: [],
        show: false,


        // init() {
        //     // getStory() 

        // },


        sendStory() {
            // const URL_BASE = import.meta.env.VITE_SERVER_URL;
            // const url = `${URL_BASE}/api/stories`
            // // console.log(this.signup, 'sign-up');

            const newMsg = this.user_message
            console.log(newMsg)
            axios
                // .post(`${url}`, newMsg)
                .post(`http://localhost:2000/api/stories`, { user_message: newMsg })
                .then(results => {
                    this.userStories = results.data.user_message;
                    // console.log(results.data);
                })
                .catch(err => {
                    console.log(err);
                })

        },
        sendMotivation() {
            // const URL_BASE = import.meta.env.VITE_SERVER_URL;
            // const url = `${URL_BASE}/api/stories`
            // // console.log(this.signup, 'sign-up');

            const newMsg = this.user_motivation
            console.log(newMsg)
            axios
                // .post(`${url}`, newMsg)
                .post(`http://localhost:2000/api/stories`, { user_motivation: newMsg })
                .then(results => {
                    this.userMotivation = results.data.user_message;
                    // console.log(results.data);
                })
                .catch(err => {
                    console.log(err);
                })

        },
        getStory() {
            axios
                .get('http://localhost:2000/api/the_stories')
                .then(results => {
                    this.userStories = results.data.story;
                    console.log(results.data.story);
                }).catch(e => console.log('Motivation all'))

        },

        getMotivation() {
            axios
                .get('http://localhost:2000/api/the_motivation')
                .then(results => {
                    this.userStories = results.data.motivation;
                    console.log(results.data.motivation);
                }).catch(e => console.log('all'))

        }









    }


}