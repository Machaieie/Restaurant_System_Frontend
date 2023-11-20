import { Menu } from 'antd'
import { PullRequestOutlined, PlusOutlined, OrderedListOutlined, DashboardOutlined,  PayCircleOutlined, LogoutOutlined, StockOutlined, WalletOutlined, RedditSquareFilled, SettingOutlined } from "@ant-design/icons"

const MenuList = () => {
    return (
        <Menu theme='dark' mode='inline' className='menu-bar'>
            <Menu.Item key="dashboard" icon={<DashboardOutlined />}>Dashboard</Menu.Item>

            <Menu.SubMenu key="reservas" title="Reservas" icon={<RedditSquareFilled />}>
                <Menu.Item key="adicionr" icon={<PlusOutlined />}>Adicionar Reserva</Menu.Item>
                <Menu.Item key="verificar" icon={<OrderedListOutlined />}>Verificar Reserva</Menu.Item>
            </Menu.SubMenu>

            <Menu.SubMenu key="pedidos" title="Pedidos" icon={<PullRequestOutlined />}>
                <Menu.Item key="Addpedidos"  icon={<PlusOutlined />} >Adicionar</Menu.Item>
                <Menu.Item key="Listpedidos" icon={<OrderedListOutlined />}>Verificar</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="pagamentos" icon={<PayCircleOutlined />}>Pagamentos</Menu.Item>
            <Menu.Item key="carteira" icon={<WalletOutlined />}>Carteira</Menu.Item>
            <Menu.Item key="stock" icon={<StockOutlined />}>Stock</Menu.Item>
            <Menu.Item key="definicoes" icon={<SettingOutlined />}>Definicões</Menu.Item>
            <Menu.Item key="sair" icon={<LogoutOutlined />}>Sair</Menu.Item>
        </Menu>
    )
}

export default MenuList
