<head> 
  <script
 				 src="https://code.jquery.com/jquery-3.6.0.js"
  				integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
  				crossorigin="anonymous">
			</script>
</head>

<script>
	import Header from '../../components/header.svelte';
  import {Table,Button} from 'sveltestrap';
  import Modal,{getModal} from '../../components/Modal.svelte' // Import para el modal
  import 'jquery'
  
  // Array que contiene los clientes. La idea es cargarlo desde la base.
  let clients = [
  {name: "Comercial Argentina", data1: "126854", data2: "AB548BN"},
  {name: "Quintana Wellpro", data1: "126881", data2: "PMA453"},
  {name: "Pampa Energía", data1: "126883", data2: "OST444"},
  {name: "MS Electromedicina", data1: "31439321", data2: "2995774679"},
  ];
  
  //Uso de Jquery para datatable filtrable.
  const jq = window.$;	

  jq(document).ready(function() {
    // Añade un buscador a cada columna
    jq('#clienTable thead th').each( function (i) {
        var title = jq('#clienTable thead th').eq( jq(this).index() ).text();
        jq(this).html( '<input type="text" style="width:100%;" placeholder="'+title+'" data-index="'+i+'" />' );
    } );
  
    // DataTable
    var table = jq('#clienTable').DataTable( {
        scrollY:        "500px",
        scrollX:        true,
        scrollCollapse: true,
        paging:         false,
        fixedColumns:   true,
        "ordering": false,
        "columnDefs": [
        { "width": "20%", "targets": 0 }],


    } );
 
    // Filter event handler
    jq( table.table().container() ).on( 'keyup', 'thead input', function () {
        table
            .column( jq(this).data('index') )
            .search( this.value )
            .draw();
    } );
} );


</script>

<title>JulitoSoft - Empresas</title>
<main>
	<div class="container" style="background-color: white;">
		<Header />
        <h1 style="float:left">Empresas</h1>
        <Button color="primary" on:click={()=>getModal().open()} style="float:right">Nuevo Cliente</Button>
        <Modal></Modal>     
        <Table id="clienTable" hover striped>
            <thead>
              <tr>
                <th class="titles">#</th>
                <th class="titles">Empresa</th>
                <th class="titles">Datos 1</th>
                <th class="titles">Datos 2</th>
              </tr>
            </thead>
              <tbody>
                  {#each clients as cliente,index} 
                  <tr>
                    <th scope="row">{index+1}</th>
                    <td>{cliente.name}</td>
                    <td>{cliente.data1}</td>
                    <td>{cliente.data2}</td>
                  </tr>
                  {/each}
              </tbody>
              
          </Table>
	</div>
</main>

<style>
	main {
		background-color: lightsteelblue;
	}
  .table-hover tbody tr:hover td {
    background-color: lightsteelblue;
  }
  .titles{
    align-items: center;
    justify-content: center;
  }
</style>