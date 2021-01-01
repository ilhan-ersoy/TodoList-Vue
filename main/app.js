const app = new Vue({
    el: '#app',
    name: 'Uzaktan Kurs',
    data: {
        newTodo :{
            Title : '',
            Status :false
        },
        dataList :[
            {Id:0,Title:'Ders Notlarını Hazırla',Status:true,List:'İş'},
            {Id:1,Title:'Php Proje başla',Status:true,List:'İş'},
            {Id:2,Title:'Kahve Al',Status:false,List:'Genel'},
            {Id:3,Title:'Kitap Okumak',Status:false,List:'Özel'}
        ],
        activeListItem :{

        },
        newListItem:{
            Title : ''
        },
        listItems :[
            {Id:1,Title:'Genel'},
            {Id:2,Title:'İş'},
            {Id:3,Title:'Özel'}
        ],
        selectedDataList : [],
        listCount :[

        ]

    },
    created(){
        const createdListItem = this.listItems[0];
        this.changeListItem(createdListItem.Id);
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
      addNewList(){
          this.listItems.push({
             Id : this.listItems.length + 1,
             Title : this.newListItem.Title,
          });
      },
      resetTodo(){
          this.newTodo = {Title : '', Status : false}
      },
      deleteTodo(id){
          console.log(id);
          this.dataList = this.dataList.filter(x=>x.Id !== id);
      },
      changeListItem(id){
          const listItem = this.listItems.find(x =>x.Id === id);
          this.activeListItem = listItem;
          this.selectedDataList = this.dataList.filter(x=>x.List === listItem.Title);

      },
      getListCount(title){
          this.listCount = this.dataList.filter(x=>x.List === title);
          return this.listCount.length;
      }
    },
    computed:{
        todoList(){
            return this.selectedDataList.filter(todo=>todo.Status === false); // yapilmamis todolar
        },
        todoListFinished(){
            return this.selectedDataList.filter(todo=>todo.Status === true); // yapilmis todolar
        }
    }
})
