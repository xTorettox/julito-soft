<script lang="ts">
	import {
		Collapse,
		Navbar,
		NavbarToggler,
		NavbarBrand,
		Nav,
		NavItem,
		NavLink,
		Dropdown,
		DropdownToggle,
		DropdownMenu,
		DropdownItem
	} from 'sveltestrap';

	let isOpen = false;

	function handleUpdate(event) {
		isOpen = event.detail.isOpen;
	}

	
	
</script>

<head>
	<!-- importación de Bootstrap para trabajar con Sveltestrap -->
	<link rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
	/>
	<!-- importación de Google Fonts - Staatliches -->
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Staatliches" />

	<!--Import de Datatables-->
	<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.css">
  	<script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.js"></script>


</head>

<div style="font-family: 'Staatliches', serif; font-size:xx-large;">
	<img src="/static/logo_universal.png" alt="logo universal servicios" height="80" />
	UNIVERSAL SERVICIOS Y LOGÍSTICA
</div>

<Navbar color="light" light expand="md">
	<NavbarBrand>Menú Principal</NavbarBrand>
	<NavbarToggler on:click={() => (isOpen = !isOpen)} />
	<Collapse {isOpen} navbar  on:update={handleUpdate} expand="md" style="transition: none">
		<Nav navbar class="ml-auto" >
			<NavItem>
				<NavLink href="/panel/work_order" >Órdenes de Trabajo</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="/panel/budget">Presupuestos</NavLink>
			</NavItem>
      		<NavItem>
				<NavLink href="/panel/company">Empresas</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="/panel/spare_part">Repuestos</NavLink>
			</NavItem>
			<!-- <Dropdown nav inNavbar>
				<DropdownToggle nav caret>Vehículos</DropdownToggle>
				<DropdownMenu right>
					<DropdownItem>Option 1</DropdownItem>
					<DropdownItem>Option 2</DropdownItem>
					<DropdownItem divider />
					<DropdownItem>Reset</DropdownItem>
				</DropdownMenu>
			</Dropdown> -->
		</Nav>
	</Collapse>
</Navbar>
