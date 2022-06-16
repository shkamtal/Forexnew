const userinfo={template:`

<div  class="container">
<button type="button"
class="btn btn-primary m-2 fload-end"
data-bs-toggle="modal"
data-bs-target="#exampleModal"
@click="addClick()">
 Add UserInfo
</button>

<table class="table table-striped">
<thead>
<tr>
<th>
user_id

        </th>
        <th>
         email
        </th>
        <th>
        firstname
        </th>
        <th>
        lastname
</th>
<th>
 passportno
 </th>
 <th>
 registrationdate
 </th>
 <th>
 userpassword
 </th>
 <th>
 nation
 </th>
 <th>
 phonenumber
 </th>

    </tr>
</thead>
<tbody>
    <tr v-for="emp in userinfo">

        <td>{{emp.user_id}}</td>
        <td>{{emp.email}}</td>
        <td>{{emp.firstname}}</td>
        <td>{{emp.lastname}}</td>
        <td>{{emp.passportno}}</td>
        <td>{{emp.registrationdate}}</td>
        <td>{{emp.userpassword}}</td>
        <td>{{emp.nation}}</td>
        <td>{{emp.phonenumber}}</td>
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
            <button type="button" @click="deleteClick(emp.user_id)"
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
            <span class="input-group-text">Email Id</span>
            <input type="email" class="form-control" v-model="email" >
        </div>

        <div class="input-group mb-3">
        <span class="input-group-text">firstname</span>
        <input type="text" class="form-control" v-model="firstname">
    </div>

    <div class="input-group mb-3">
    <span class="input-group-text">lastname</span>
    <input type="text" class="form-control" v-model="lastname">
</div>

<div class="input-group mb-3">
<span class="input-group-text">passportno</span>
<input type="text" class="form-control" v-model="passportno">
</div>
<div class="input-group mb-3">
<span class="input-group-text">registrationdate</span>
<input type="date" class="form-control" v-model="registrationdate">
</div>

<div class="input-group mb-3">
<span class="input-group-text">userpassword</span>
<input type="password" class="form-control" v-model="userpassword">
</div>


<div class="input-group mb-3">
                <span class="input-group-text">Nation</span>
                <select class="form-select" v-model="nation" required>
                <option data-countryCode="IN" value="91">India (+91)</option>
                <option data-countryCode="JP" value="81">Japan (+81)</option>

                <option data-countryCode="NP" value="977">Nepal (+977)</option>


                <option data-countryCode="SG" value="65">Singapore (+65)</option>
                <option data-countryCode="ZA" value="27">South Africa (+27)</option>
                </select>
     </div>


     <div class="input-group mb-3">
     <span class="input-group-text">PhoneNo</span>
     <input type="text" class="form-control" v-model="phonenumber" required>
 </div>


-
        <button type="button" @click="createClick()"
        v-if="user_id==0" class="btn btn-primary">
        Create
        </button>
        <buttgon type="button" @click="updateClick()"
        v-if="user_id!=0" class="btn btn-primary">
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
       userinfo:[],
        modalTitle:"",

        user_id:0,
        //employeeid:0,
        email:"",
        //employeename:"",
        firstname:"",
        lastname:"",
        passportno:"",
        registrationdate:"",
        userpassword:"",
        nation:"",
        phonenumber:""

    }
},
methods:{
    refreshData(){
        axios.get(variables.API_URL+"userinfo")
        .then((response)=>{
            this.userinfo=response.data;

        });
    },
    addClick(){
        this.modalTitle="Add UserInfo";
        this.user_id=0;
        this.firstname="";
        this.lastname="";
        this.passportno="";
        this.registrationdate="";
        this.userpassword="";
        this.nation="";
        this.phonenumber="";
    },
    editClick(emp){
        this.modalTitle="Edit UserInfo";

        this.user_id=emp.user_id;
        this.email=emp.email;
        this.firstname=emp.firstname;
        this.lastname=emp.lastname;
        this.passportno=emp.passportno;
        this.registrationdate=emp.registrationdate;
        this.userpassword=emp.userpassword;
        this.nation=emp.nation;
        this.phonenumber=emp.phonenumber;
        console.log();

    },
    createClick(){

        axios.post(variables.API_URL+"userinfo",{
            email:this.email,
            firstname:this.firstname,
            lastname:this.lastname,
            passportno:this.passportno,
            registrationdate:this.registrationdate,
            userpassword:this.userpassword,
            nation:this.nation,
            phonenumber:this.phonenumber

        })
        .then((response)=>{
        console.log(response.data);
            this.refreshData();

            alert(response.data);
        });
    },
    updateClick(){
      console.log(this.email,this.firstname,this.lastname,this.passportno,this.registrationdate,this.userpassword,this.phonenumber,this.nation );
        axios.put(variables.API_URL+"userinfo",{

            email:this.email,
            firstname:this.firstname,
            lastname:this.lastname,
            passportno:this.passportno,
            registrationdate:this.registrationdate,
            userpassword:this.userpassword,
            nation:this.nation,
            phonenumber:this.phonenumber


        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
            email="";
        });
    },
    deleteClick(id){
        if(!confirm("Are you sure?")){
            return;
        }
        axios.delete(variables.API_URL+"userinfo/"+id)
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
