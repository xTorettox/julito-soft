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
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
	/>
	<!-- importación de Google Fonts - Staatliches -->
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Staatliches" />
</head>

<div style="font-family: 'Staatliches', serif; font-size:xx-large;">
	<img src="/static/logo_universal.png" alt="logo universal servicios" height="80" />
	UNIVERSAL SERVICIOS Y LOGÍSTICA
</div>
<Navbar color="light" light expand="md">
	<NavbarBrand>Menú Principal</NavbarBrand>
	<NavbarToggler on:click={() => (isOpen = !isOpen)} />
	<Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
		<Nav class="ml-auto" navbar>
			<NavItem>
				<NavLink href="/panel/work_order">Órdenes de Trabajo</NavLink>
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
