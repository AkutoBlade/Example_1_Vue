const student = Vue.createApp({
    data: function(){
        return{
            name:'Jared Aubrey Derick',
            surname:'Isaacs',
            age:18
        }
    }
});

student.mount('#students');