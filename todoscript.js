document.getElementById('addb').onclick=function(){
    if(document.querySelector('#new input').value.length==0)
    {
        alert('Enter atleast one task.....');
    }
    else
    {
        document.getElementById('tasks').innerHTML+=`
        <div class="task">
            <span class="taskname" id="">
                ${document.querySelector('#new input').value}
            </span>
            <button class="del">
               
                    <i class="far fa-trash-alt"></i>
                </div>
                
            </button>
        </div>                
        `;
        var current = document.getElementsByClassName("taskname");
        for(var i=0; i<current.length; i++){
            current[i].onclick = function(){                      
                if(this.id.length==0)
                {
                    this.id="checked";
                }
                else{
                    this.id="";
                }
            }
        }
        var current = document.getElementsByClassName("del");
        for(var i=0; i<current.length; i++){
            current[i].onclick = function(){
            this.parentNode.remove();
            }
        }
        document.querySelector('#new input').value="";               
    }
}     