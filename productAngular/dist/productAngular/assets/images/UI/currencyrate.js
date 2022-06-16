const currencyrate={template:`
<div  class="container">

<button type="button"
class="btn btn-primary m-2 fload-end"
data-bs-toggle="modal"
data-bs-target="#exampleModal"
@click="addClick()">
 Add Currency Rate
</button>

<table class="table table-striped">
<thead>
   <tr>
   <th>
   country_id
   </th>
   <th>
   country_name
   </th>
   <th>
   previous_exchange_rate
   </th>
   <th>
   current_exchange_rate
   </th>
   <th>
   date_current_exchange_rate
   </th>
   <th>
   To  country_name
   </th>
</tr>
</thead>
<tbody>
    <tr v-for="emp in currencyrate">
   
    <td>{{emp.country_id}}</td>
    <td>{{emp.country_name}}</td>
    <td>{{emp.previous_exchange_rate}}</td>
    <td>{{emp.current_exchange_rate}}</td>
    <td>{{emp.date_current_exchange_rate}}</td>
    <td>{{emp.tcountry_name}}</td>
    <td>
            <button type="button"
            class="btn btn-light mr-1"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="editClick(emp)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
            </button>
            <button type="button" @click="deleteClick(emp.country_id)"
            class="btn btn-light mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>

        </td>
    </tr>
</tbody>
</thead>
</table>

<div class="modal fade" id="exampleModal" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg modal-dialog-centered">
<div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"
        aria-label="Close"></button>
    </div>

    <div class="modal-body">
     
        <div class="input-group mb-3">
        <span class="input-group-text">Enter Amount</span>
        <input type="text" class="form-control" v-model="txtAmount">
        
        </div>

        <div class="input-group mb-3">
        <span class="input-group-text">DDLFrom</span>
        <select class="form-select" v-model="country_name">
        <option value="USD">USD</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
        <option value="SAR">SAR</option>
        <option value="SEK">SEK</option>
                 </select>

    </div>

    <div class="input-group mb-3">
    <span class="input-group-text">Previous Exchange Rate</span>
                <input type="text" class="form-control" v-model="previous_exchange_rate">

</div>

<div class="input-group mb-3">

<span class="input-group-text">Current Exchange Rate</span>
                <input type="text" class="form-control" v-model="current_exchange_rate">
</div>


<div class="input-group mb-3">

<span class="input-group-text">Date</span>
                <input type="date" class="form-control" v-model="date_current_exchange_rate">
</div>

<div class="input-group mb-3">
<span class="input-group-text">DDLTo</span>
            <select class="form-select" v-model="tcountry_name">
            <option value="USD">USD</option>
							<option value="CAD">CAD</option>
							<option value="INR">INR</option>
							<option value="SAR">SAR</option>
							<option value="SEK">SEK</option>
							</select>

</div>



     
 

-
        <button type="button" @click="createClick()"
        v-if="country_id==0" class="btn btn-primary">
        Create
        </button>
        <buttgon type="button" @click="updateClick()"
        v-if="country_id!=0" class="btn btn-primary">
        Update
        </button>

    </div>

</div>
</div>
</div>


</div>


`,

data(){
    return{
        currencyrate:[],
        modalTitle:"",
         
    
        //employeeid:0,
        modalTitle:"",
        country_id:0,
         country_name:"",
          previous_exchange_rate:"",
           current_exchange_rate:"", 
           date_current_exchange_rate:"",
           tcountry_name:"",
    }
},
methods:{
    refreshData(){
        axios.get(variables.API_URL+"currencyrate")
        .then((response)=>{
            this.currencyrate=response.data;
           
        });
    },
    addClick(){
        this.modalTitle="Add Currency Rate";
        this.country_id=0;
        this.country_name="";
        this.previous_exchange_rate="";
        this.current_exchange_rate="";
        this.date_current_exchange_rate="";
        this.tcountry_name=""
    },
    editClick(emp){
        this.modalTitle="Edit Currency Rate";
        
       
        this.country_id=emp.country_id;
        this.country_name=emp.country_name;
        this.previous_exchange_rate=emp.previous_exchange_rate;
        this.current_exchange_rate=emp.current_exchange_rate;
        this.date_current_exchange_rate=emp.date_current_exchange_rate;
        this.tcountry_name=emp.tcountry_name;
     

    },
    createClick(){
      
        axios.post(variables.API_URL+"currencyrate",{
         
         
            country_id:this.country_id,
            country_name:this.country_name,
            previous_exchange_rate:this.previous_exchange_rate,
            current_exchange_rate:this.current_exchange_rate,
            date_current_exchange_rate:this.date_current_exchange_rate,
            tcountry_name:this.tcountry_name
            

    
        })
        .then((response)=>{
        console.log(response.data);
            this.refreshData();
            
            alert(response.data);
        });
    },
    updateClick(){
        
        axios.put(variables.API_URL+"currencyrate",{
            
            country_id:this.country_id,
            country_name:this.country_name,
            previous_exchange_rate:this.previous_exchange_rate,
            current_exchange_rate:this.current_exchange_rate,
            date_current_exchange_rate:this.date_current_exchange_rate,
            tcountry_name:this.tcountry_name
            

        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    deleteClick(id){
        if(!confirm("Are you sure?")){
            return;
        }
        axios.delete(variables.API_URL+"currencyrate/"+id)
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });

    },
   
},
mounted:function(){
    this.refreshData();
}

}