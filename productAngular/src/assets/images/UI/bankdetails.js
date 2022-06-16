const bankdetails={template:`
<table class="table table-striped">
<thead>
    <tr>
        <th>
            
        bankid
        </th>
        <th>
        accountnumber
        </th>
        <th>
        bankname
        </th>
        <th>
        city
        </th>
        <th>
        user_id
        </th>
        <th>
        bankid</th>
        </tr>
        </thead>
        <tbody>
    
    <tr v-for="dep in bankdetailss">
        <td>{{dep.bankid}}</td>
        <td>{{dep.accountnumber}}</td>
        <td>{{dep.bankname}}</td>
        <td>{{dep.city}}</td>
        <td>{{dep.user_id}}</td>
        
        </td>
    </tr>
</tbody>
</thead>
</table>

`,



data(){
    return{
        bankdetailss:[],
        modalTitle:"",
        bankid:"",
        accountnumber:0,
        bankname:"",
        city:"",
        user_id:"",
        
    }
},
methods:{
    refreshData(){
        
        axios.get(variables.API_URL+"bankdetails")
        .then((response)=>{
            this.bankdetailss=response.data;
            
        });
    },
},

mounted:function(){
    this.refreshData();
}

}

	
	
	
