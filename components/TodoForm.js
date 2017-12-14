var TodoForm=React.createClass({
    getInitialState:function(){
        return {
            newlists:[]
        };
    },
    Click:function(){
        
        //alert(this.input.value);
        this.props.addlist(this.input.value,this.score.value);

        this.input.value='';
        this.score.value='';
    },
    inputref:function(input){
        this.input=input;

    },
    scoreref:function(score){
        this.score=score;

    },
    ascSort:function(){
        this.props.list.sort(function(a,b){
            return a.score-b.score;
        });
        
        this.props.list.map(function(item,idx,arry){

            console.log(item);
        });
        this.props.refreshSort(this.props.list);
    },
    descSort:function(){
       
        this.props.list.sort(function(a,b){
            return b.score-a.score;
        });
        
        this.props.list.map(function(item,idx,arry){
            
            console.log(item);
        });
        
        this.props.refreshSort(this.props.list);
    },
    render:function(){

        return(
            <div>
               <h1>Home work</h1>
               <table>
                 <tbody>
                 <tr>
                    
                    <td><input type='text' ref={this.inputref}/></td>
                    <td><input type='text' ref={this.scoreref}/></td>
                    <td><button onClick={this.Click}>add</button></td>
                 </tr>
                 <tr>
                    <td width={100}></td>
                    <td><button onClick={this.ascSort}>asc</button></td>
                    <td><button onClick={this.descSort}>desc</button></td>
                 </tr></tbody>
               </table>
               
            </div>
        );

    },
});