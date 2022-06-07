
<script>
	import Header from '../../components/header.svelte';
  import {Table,Button} from 'sveltestrap';
  import Modal,{getModal} from '../../components/Modal.svelte' // Import para el modal
 
  // Tratamiento de la búsqueda
  let companyNameSearch, dataOneSearch, dataTwoSearch = '';
 


  let clients = [
  {name: "Comercial Argentina", data1: "126854", data2: "AB548BN"},
  {name: "Quintana Wellpro", data1: "126881", data2: "PMA453"},
  {name: "Pampa Energía", data1: "126883", data2: "OST444"},
  {name: "MS Electromedicina", data1: "31439321", data2: "2995774679"},
  ];

  let clientsf = clients;
  
  $: {      //SEGUIR VIENDO ESTOS FILTROS

    if (companyNameSearch){
        clientsf = clients.filter(client => {return client.name.toLowerCase().includes(companyNameSearch.toLowerCase());})}

    if (dataOneSearch) {
        clientsf = clients.filter(client => {return client.data1.toLowerCase().includes(dataOneSearch.toLowerCase());})}

    if (dataTwoSearch) {
        clientsf = clients.filter(client => {return client.data2.toLowerCase().includes(dataTwoSearch.toLowerCase());})}
      
  }



</script>

<title>JulitoSoft - Empresas</title>
<main>
	<div class="container" style="background-color: white;">
		<Header />
        <h1 style="float:left">Empresas</h1>
        <Button color="primary" on:click={()=>getModal().open()} style="float:right">Nuevo Cliente</Button>
        <Modal></Modal>     
        <Table hover striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Empresa</th>
                <th>Datos 2</th>
                <th>Datos 2</th>
              </tr>
              <tr>
                <th></th>
                <th>
                    <label for="companyNameInput" hidden>Filtrar por nombre de empresa</label>
                    <input id="companyNameInput" type="search" bind:value={companyNameSearch} placeholder="filtrar...">
                </th>
                <th>
                    <label for="datOneInput" hidden>Filtrar por dato 1</label>
                    <input id="dataOneInput" type="search" bind:value={dataOneSearch} placeholder="filtrar...">
                </th>
                <th>
                    <label for="dataTwoInput" hidden>Filtrar por dato 2</label>
                    <input id="dataTwoInput" type="search" bind:value={dataTwoSearch} placeholder="filtrar...">
                </th>   
              </tr>
            </thead>
              <tbody>
                  {#each clientsf as cliente,index} 
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
</style>
