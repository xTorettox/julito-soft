
<script>
	import Header from '../../components/header.svelte';
  import {Table,Button} from 'sveltestrap';
  import Modal,{getModal} from '../../components/Modal.svelte' // Import para el modal
  
  /* Modelo de Cliente
    Customer.init({
    customerName: DataTypes.STRING,
    customerCuit: DataTypes.STRING,
    customerPhone: DataTypes.STRING,
    customerMail: DataTypes.STRING,
    customerAddress: DataTypes.STRING,
    customerPicture: DataTypes.STRING
  } 
  */


  // Array que contiene los clientes. La idea es cargarlo desde la base.
  let clients = [
  {customerName: "Comercial Argentina", customerCuit: "126854", customerPhone: "AB548BN",customerMail: "mail@ejemplo.com",customerAddress:"Somewhere 123456"},
  {customerName: "Quintana Wellpro", customerCuit: "126881", customerPhone: "PMA453",customerMail: "user@dommino.com",customerAddress:"Calle 1 56"},
  {customerName: "Pampa Energía", customerCuit: "126883", customerPhone: "OST444",customerMail: "cuenta@casilla.com",customerAddress:"Las Lilas 1462"},
  {customerName: "MS Electromedicina", customerCuit: "20314393210", customerPhone: "2995774679",customerMail: "contacto@mselectromedicina.com",customerAddress:"Las gaviotas 83"},
  ];
  
  //Uso de Jquery para datatable filtrable.
  const jq = window.$;	

  jq(document).ready(function() {
    // Añade un buscador a cada columna
    jq('#clienTable thead th').each( function (i) {
        var title = jq('#clienTable thead th').eq( jq(this).index() ).text();
        jq(this).html( '<input type="text" style="width:100%;" placeholder="'+title+'" data-index="'+i+'" />' );
    } );
  
    // DataTable referencia en: https://datatables.net/reference/
    var table = jq('#clienTable').DataTable( { 
        scrollY:        "500px",
        scrollX:        true,
        scrollCollapse: true,
        paging:         true,
        fixedColumns:   true,
        responsive: true,
        "dom": 'lrtip',

        "ordering": false,
        "columnDefs": [
        { "width": "3%", "targets": 0}],

        language: {
          "lengthMenu": 'Mostrar <select>'+
          '<option value="10">10</option>'+
          '<option value="20">20</option>'+
          '<option value="30">30</option>'+
          '<option value="50">50</option>'+
          '<option value="100">100</option>'+
          '<option value="-1">todos los </option>'+
          '</select> registros',
          "paginate": {"next": "Siguiente","previous": "Anterior"},
          "infoFiltered": " - filtrado de _MAX_ registros",
          "info": "Mostrando _START_ a _END_ de _TOTAL_ registros",
          "infoEmpty": "No hay registros que mostrar",
          "zeroRecords": "No hay registros que coincidan con la búsqueda"
        },


    } );
 
    // Filter event handler
    jq( table.table().container() ).on( 'keyup', 'thead input', function () {
        table
            .column( jq(this).data('index') )
            .search( this.value )
            .draw();
    } );} );


</script>

<title>JulitoSoft - Empresas</title>
<main>
	<div class="container" style="background-color: white;">
		<Header />
        <h1 style="float:left">Empresas</h1>
        <Button color="secondary" on:click={()=>getModal().open()} style="float:right">Nuevo Cliente</Button>
        <Modal></Modal>     
        <Table id="clienTable" hover striped style="width:100%">
            <thead>
              <tr>
                <th class="titles">#</th>
                <th class="titles">Empresa</th>
                <th class="titles">Cuit</th>
                <th class="titles">Teléfono</th>
                <th class="titles">Mail</th>
                <th class="titles">Dirección</th>
              </tr>
            </thead>
              <tbody>
                  {#each clients as cliente,index} 
                  <tr>
                    <th scope="row">{index+1}</th>
                    <td>{cliente.customerName}</td>
                    <td>{cliente.customerCuit}</td>
                    <td>{cliente.customerPhone}</td>
                    <td>{cliente.customerMail}</td>
                    <td>{cliente.customerAddress}</td>
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