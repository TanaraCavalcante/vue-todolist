const {createApp} = Vue;

createApp ({
    data(){
        return {
         newElement : '',
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
        isDone(){
          if(this.list.done === false){
            this.list.done === true;
            return;
          }else if(this.list.done === true){
            this.list.done === false;
            return;
          }
        },
        
        toDelete(){
            this.list.splice(this.list.element, 1);
        }

    },
}).mount('#app')

//Criar um booleano pra definir se "done" é verdadeiro ou falso;
//Cria o "X" botao ao lado de cada item da lista e adicionar a açao splice.
//Criar um metodo conectado com um input e botao para adicionar um novo item.
