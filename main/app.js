const app = new Vue({
    el: '#app',
    name: 'Uzaktan Kurs',
    data: {
        dataList :[
            {Id:1,Title:'Ders Notlarını Hazırla',Status:true,List:'is'},
            {Id:2,Title:'Php Proje başla',Status:true,List:'is'},
            {Id:3,Title:'Kahve Al',Status:false,List:'Genel'},
            {Id:5,Title:'Kitap Okumak',Status:false,List:'Eğitim'}
        ]
    },
    methods:{
      toggleTodoListStatus(id){
          const item = this.dataList.find(x=>x.Id == id);
          item.Status = !item.Status;

      },
      toggleFinishedTodoListStatus(id){
          const item = this.dataList.find(x=>x.Id == id);
          item.Status = !item.Status;
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
