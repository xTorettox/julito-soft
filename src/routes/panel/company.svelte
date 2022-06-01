
<script>
	import Header from '../../components/header.svelte';
  import {
      Table,
      Button
  } from 'sveltestrap';

  // Import para el modal-----------------------------------------------
  import Modal,{getModal} from '../../components/Modal.svelte'
 
  // Tratamiento de la búsqueda
  let companyNameSearch, dataOneSearch, dataTwoSearch;
  let open = false;
  const toggle = () => (open = !open);
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
              <tr>
                <th scope="row">1</th>
                <td>Comercial Argentina</td>
                <td>126854</td>
                <td>AB548BN</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Quintana Wellpro</td>
                <td>126881</td>
                <td>PMA453</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Pampa Energía</td>
                <td>126883</td>
                <td>OST444</td>
              </tr>
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
