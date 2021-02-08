const h = Vue.h

const app = Vue.createApp({
    data(){
        return {
            title:'Это из свойства template'
        }
    },
    beforeUnmount(){

    },
    unmounted(){

    },
    methods:{
        changeTitle(){
            this.title = 'Изменили!'
        }
    },
    // template: `
    //     <div class="card center">
    //         <!--
    //             <h1>Это из свойства template</h1>
    //         -->
    //         <h1>{{ title }}</h1>
    //         <button class="btn" @click="title = 'Изменили!'">Изменить</button>
    //     </div>
    // `
    render(){
        // return h('div', {
        //     // class: 'card center',
        //     className: 'card center',
        // }, 'This is text content')
        
        // return h('div', {
        //     // class: 'card center',
        //     className: 'card center',
        // }, h('h1', {}, this.title))
        
        return h('div', {
            // class: 'card center',
            className: 'card center',
        }, [
            h('h1', {}, this.title),
            h('button', {
                class:'btn',
                onClick: this.changeTitle
            }, 'change'),
        ])
    }
})
app.mount("#app")
Vue.createApp({
    data(){
        return {
            title: 'New title 2'
        }
    }
}).mount("#app2")
// setTimeout(()=>{
//     app.unmount()
// }, 2000)

