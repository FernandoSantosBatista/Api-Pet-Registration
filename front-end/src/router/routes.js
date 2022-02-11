import Login from '@/views/Login.vue'
import Dashboard from '@/views/Dashboard.vue'
import ControleDeClientes from '@/views/ControleDeClientes.vue'
import ControllerDogs from '@/views/ControllerDogs.vue'
import ListaProdutoCards from '@/views/ListaProdutoCards.vue'
import Dogs from '@/views/Dogs.vue'

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
        title: 'Login',
        meta: { requiredAuth: false }
    },
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
        title: 'Dashboard',
        meta: { requiredAuth: false }
    },
    {
        path: '/controle-de-clientes',
        name: 'ControleDeClientes',
        component: ControleDeClientes,
        title: 'Clientes',
        meta: { requiredAuth: false }
    },
    {
        path: '/gerenciamento',
        name: 'ControllerDogs',
        component: ControllerDogs,
        title: 'Dogs',
        meta: { requiredAuth: false }
    },
    {
        path: '/gerenciamento/novo',
        name: 'Novo',
        component: Dogs,
        title: 'Adicionar Novo',
        meta: { requiredAuth: false }
    },
    {
        path: '/gerenciamento/editar',
        name: 'EditarCadastro',
        component: Dogs,
        title: 'Editar Cadastro',
        meta: { requiredAuth: false }
    },
    {
        path: '/controle-de-produtos/lista-cards',
        name: 'ListaProdutoCards',
        component: ListaProdutoCards,
        title: 'Lista de produtos em cards',
        meta: { requiredAuth: false }
    },
];


export default routes;