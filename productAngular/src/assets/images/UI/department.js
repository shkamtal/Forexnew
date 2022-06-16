const department={template:`

<div  class="container">


<table class="table table-striped" id="tblCustomers" cellspacing="0" cellpadding="0" >
<thead>
<tr>
<th>
<button type="button"
class="btn btn-primary m-2 fload-end"
id="btnExport"
onclick="Export()">
Export Data in Excel
</button>


</th>




</tr>
    <tr>
        <th>
            
        transferid
        </th>
        <th>
        sentamount
        </th>
        <th>
        receivedamount
        </th>
        <th>
        status
        </th>
        <th>
        transactiondatetime
        </th>
        <th>
        bankid</th>
        </tr>
        </thead>
        <tbody>
            
    <tr v-for="dep in departments">
        <td>{{dep.transferid}}</td>
        <td>{{dep.sentamount}}</td>
        <td>{{dep.receivedamount}}</td>
        <td>{{dep.status}}</td>
        <td>{{dep.transactiondatetime}}</td>
        <td>{{dep.bankid}}</td>
        </td>
    </tr>
</tbody>
</thead>
</table>
<div>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script src="table2excel.js" type="text/javascript"></script>
<script type="text/javascript">
    function Export() {
        $("#tblCustomers").table2excel({
            filename: "Table.xls"
        });
    }
</script>
</div>
`,



data(){
    return{
        departments:[],
        modalTitle:"",
        transferid:"",
        sentamount:0,
        receivedamount:"",
        status:"",
        transactiondatetime:"",
        bankid:""
    }
},
methods:{
    refreshData(){
        
        axios.get(variables.API_URL+"department")
        .then((response)=>{
            this.departments=response.data;
            this.departmentsWithoutFilter=response.data;
        });
    },
},



mounted:function(){
    this.refreshData();
}

}

	
	
	
