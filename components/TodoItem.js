
const listStyle={
   "display":"inline",
}

var btnStyle = {
    backgroundColor: 'white',
    width:100,
    height:50,}

var TodoItem=React.createClass({

    render:function(){
        return( 
            <div className="todo-item done">
               <table>
                   <tr>
                     <td><input type='checkbox'/></td>
                     <td>
                         <h3>
                            {this.props.todo}
                         </h3>
                     </td>
                  </tr>
               </table>              
            </div>       
        );
    },
});