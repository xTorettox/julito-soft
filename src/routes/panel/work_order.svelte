
<script>
	import Header from '../../components/header.svelte';
    import { Table } from 'sveltestrap';

    // Tratamiento de la búsqueda
    let orderNumberSearch, licensePlateSearch, companyNameSearch;
</script>

<title>JulitoSoft - Órdenes de Trabajo</title>
<main>
	<div class="container" style="background-color: white;">
		<Header />

        <h1>Órdenes de Trabajo</h1>
        <Table hover striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Número de Orden</th>
                <th>Dominio</th>
                <th>Empresa</th>
              </tr>
              <tr>
                <th></th>
                <th>
                    <label for="orderNumberInput" hidden>Filtrar por número de orden</label>
                    <input id="orderNumberInput" type="search" bind:value={orderNumberSearch} placeholder="filtrar...">
                </th>
                <th>
                    <label for="licensePlateInput" hidden>Filtrar por número de patente</label>
                    <input id="licensePlateInput" type="search" bind:value={licensePlateSearch} placeholder="filtrar...">
                </th>
                <th>
                    <label for="companyNameInput" hidden>Filtrar por nombre de la compañía</label>
                    <input id="companyNameInput" type="search" bind:value={companyNameSearch} placeholder="filtrar...">
                </th>   
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>126854</td>
                <td>AB548BN</td>
                <td>Comercial Argentina</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>126881</td>
                <td>PMA453</td>
                <td>Quintana Wellpro</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>126883</td>
                <td>OST444</td>
                <td>Pampa Energía</td>
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
