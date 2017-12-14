var TodoForm=React.createClass({
    getInitialState:function(){
        return {
            newlists:[]
        };
    },
    Click:function(){
        
        //alert(this.input.value);
        this.props.addlist(this.input.value);
        this.input.value='';
    },
    inputref:function(input){
        this.input=input;

    },
    ascSort:function(){
        this.props.list.sort(function(a,b){
            return a.name-b.name;
        });
        
        this.props.list.map(function(item,idx,arry){

            console.log(item);
        });
        this.props.refreshSort(this.props.list);
    },
    descSort:function(){
       
        this.props.list.sort(function(a,b){
            return b.name-a.name;
        });
        
        this.props.list.map(function(item,idx,arry){
            
            console.log(item);
        });
        
        this.props.refreshSort(this.props.list);
    },
    render:function(){

        return(
            <div>
               <h1>Todo list</h1>
               <table>
                 <tr>
                    
                    <td><input type='text' ref={this.inputref}/></td>
                    <td><button onClick={this.Click}>add</button></td>
                 </tr>
                 <tr>
                    <td width={100}></td>
                    <td><button onClick={this.ascSort}>asc</button></td>
                    <td><button onClick={this.descSort}>desc</button></td>
                 </tr>
               </table>
               
            </div>
        );

    },
});