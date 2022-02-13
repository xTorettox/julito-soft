
<script>
	import Header from '../../components/header.svelte';
    import { Table } from 'sveltestrap';

    // Tratamiento de la búsqueda
    let companyNameSearch, dataOneSearch, dataTwoSearch;
</script>

<title>JulitoSoft - Empresas</title>
<main>
	<div class="container" style="background-color: white;">
		<Header />

        <h1>Empresas</h1>
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
