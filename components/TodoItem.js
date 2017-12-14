
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
            <div className="todo-item">
               <table><tbody>
                   <tr>
                     
                     <td>
                         <h3>
                            {this.props.todo}
                         </h3>
                     </td>
                     <td>
                         <div width={100}/>
                     </td>
                     <td>
                         <h3>
                             {this.props.score}
                         </h3>
                     </td>
                  </tr></tbody>
               </table>              
            </div>       
        );
    },
});