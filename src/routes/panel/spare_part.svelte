
<script>
	import Header from '../../components/header.svelte';
    import { Table } from 'sveltestrap';

    // Tratamiento de la búsqueda
    let partNumberSearch, descriptionSearch, dataTwoSearch;
</script>

<title>JulitoSoft - Repuestos</title>
<main>
	<div class="container" style="background-color: white;">
		<Header />

        <h1>Repuestos</h1>
        <Table hover striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Número de Pieza</th>
                <th>Descripción</th>
                <th>Stock</th>
              </tr>
              <tr>
                <th></th>
                <th>
                    <label for="companyNameInput" hidden>Filtrar por número de pieza</label>
                    <input id="companyNameInput" type="search" bind:value={partNumberSearch} placeholder="filtrar...">
                </th>
                <th>
                    <label for="datOneInput" hidden>Filtrar por descripción</label>
                    <input id="dataOneInput" type="search" bind:value={descriptionSearch} placeholder="filtrar...">
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
                <td>65AS5D45654S</td>
                <td>Filtro de Aceite Hilux</td>
                <td>25</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>ASD54S654A11</td>
                <td>Aceite de Motor 5W30 x 1 lt</td>
                <td>188</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>F4679864JK791</td>
                <td>Arandela de Tapón de Carter</td>
                <td>33</td>
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
