const {createApp} = Vue;

createApp ({
    data(){
        return {
         list:[
            {
                text: 'Fare colazione',
                done: 'false'
            },
            {
                text: 'Andare al dentista',
                done: 'false'
            },
            {
                text: 'Andare al lavoro',
                done: 'false'
            },
            {
                text: 'Avviare il computer',
                done: 'false'
            },
            {
                text: 'Allenarsi',
                done: 'false'
            },
            {
                text: 'Cena con la famiglia',
                done: 'false'
            },
         ]
        }
    },
    methods:{
        isDone() {
            if(this.list.done == false){
               this.list.done == true;
               return;
            }else {
                this.list.done == false;
            }
        }

    },
}).mount('#app')

//Criar um booleano pra definir se "done" é verdadeiro ou falso;
//Conectar esse booleano com o "X" botao ao lado de cada item da lista.
