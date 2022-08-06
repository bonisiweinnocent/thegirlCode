import axios from 'axios'


export default function help() {

    return {
        info: [],

       
     
        init() {
       
         
        },

        
        regUser() {
            axios
                .post('http://localhost:2000')
                .then(results => {
                 
                }).catch(e => console.log('Us'))

        }
        
      
      
      
     
     
    
    }


}