const app = new Vue({
    el: '#app',
    name: 'Uzaktan Kurs',
    data: {
        dataList :[
            {Id:0,Title:'Ders Notlarını Hazırla',Status:true,List:'is'},
            {Id:1,Title:'Php Proje başla',Status:true,List:'is'},
            {Id:2,Title:'Kahve Al',Status:false,List:'Genel'},
            {Id:3,Title:'Kitap Okumak',Status:false,List:'Eğitim'}
        ],
        newTodo :{
            Title : '',
            Status :false
        }
    },
    methods:{
      toggleTodoListStatus(id){
          const item = this.dataList.find(x=>x.Id == id);
          item.Status = !item.Status;
      },
      toggleFinishedTodoListStatus(id){
          const item = this.dataList.find(x=>x.Id == id);
          item.Status = !item.Status;
      },
      addNewTodo(){
          if(this.newTodo.Title !== ''){
              this.newTodo.list = 'Genel';
              this.newTodo.Id = this.dataList.length +1;
              this.dataList.push(this.newTodo);
              this.resetTodo();
          }
      },
      resetTodo(){
          this.newTodo = {Title : '', Status : false}
      },
      deleteTodo(id){
          console.log(id);
          this.dataList = this.dataList.filter(x=>x.Id !== id);
      }
    },
    computed:{
        todoList(){
            return this.dataList.filter(todo=>todo.Status === false); // yapimamis todolar
        },
        todoListFinished(){
            return this.dataList.filter(todo=>todo.Status === true); // yapilmis todolar
        }
    }
})
