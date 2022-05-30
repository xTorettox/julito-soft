
<script>
	import Header from '../../components/header.svelte';
  import {
      Table,
      Button,
      Modal,
      ModalBody,
      ModalFooter,
      ModalHeader,
      Form,
      FormGroup,
      Input
  } from 'sveltestrap';

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
        <Button color="primary" on:click={toggle} style="float:right">Nuevo Cliente</Button>
        
        <Modal isOpen={open} {toggle}>
          <ModalHeader {toggle}>Alta de Cliente</ModalHeader>
          <ModalBody> <!--acomodar foto e inputs-->
              <img src="/static/contactPH.png" alt="logo" height="80" max-width="250"/>
              <Form>
                <FormGroup floating label="Nombre">
                  <Input placeholder="Nombre" />
                </FormGroup>
                <FormGroup floating label="CUIT">
                  <Input placeholder="CUIT" />
                </FormGroup>
              </Form> 
              <Form>
              <FormGroup floating label="Teléfono">
               <Input placeholder="Teléfono" />
              </FormGroup>
              <FormGroup floating label="eMail">
                <Input placeholder="eMail" />
              </FormGroup>
              <FormGroup floating label="Dirección">
               <Input placeholder="Dirección" />
              </FormGroup>
            </Form> 
          </ModalBody>
          <ModalFooter>
              <Button color="primary" on:click={toggle}>Guardar</Button>
              <Button color="secondary" on:click={toggle}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      
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
