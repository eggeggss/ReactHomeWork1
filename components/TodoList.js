

var  steps=[{key:0,name:10},
            {key:1,name:1},
            {key:2,name:2}];

var TodoList=React.createClass({
    
    getInitialState:function(){
        return {
            mysteps:steps,
            count:1,
        };
    },
    refreshSort:function(newlists){
        this.setState({
            mysteps:newlists,
        });
    },
    addlist:function(item){
   
        var item={
            key:this.state.count,
            name:item
        };
        this.state.mysteps.push(item); 

        this.setState({
            count:this.state.count+1,
            mysteps:this.state.mysteps,//this.state.mysteps.concat(item),

        });
    },
    render:function(){
        var myarray=this.state.mysteps;
        return (
          
            <div>
                <TodoForm 
                 addlist={this.addlist} 
                 list={myarray}
                 refreshSort={this.refreshSort}/>   
                <ul>
                {
                    this.state.mysteps.map(function(item,idx,arry){
                        return <TodoItem todo={item.name}/>;
                    })
                }</ul>
            </div>
        );
    },
});