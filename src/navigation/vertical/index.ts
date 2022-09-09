// ** Icon imports
// import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'

// import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'

// ** React icons imports
import {
  MdAccountBalance,
  MdDescription,
  MdNoteAdd,
  MdRequestQuote,
  MdLocationPin,
  MdSettings,
  MdPeople,
  MdPool,
  MdReportProblem,
  MdBarChart
} from "react-icons/md";



// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Inicio',
      icon: HomeOutline,
      path: '/app'
    },
    {
      sectionTitle: 'Transacciones'
    },
    {
      title: 'Solicitudes de pago',
      icon: MdRequestQuote,
      path: '/app/payments-requests'

      // openInNewTab: true
    },
    {
      title: 'Ingresos',
      icon: MdNoteAdd,
      path: '/app/income',
    },
    {
      title: 'Gastos',
      icon: MdDescription,
      path: '/app/expenses',
    },
    {
      title: 'Bancos',
      icon: MdAccountBalance,
      path: '/app/banks-accounts',
    },
    { sectionTitle: 'Condominio' },
    {
      title: 'Locaciones',
      icon: MdLocationPin,
      path: '/app/locations',
    },
    {
      title: 'Residentes',
      icon: MdPeople,
      path: '/app/residents',
    },
    {
      title: 'Areas comunes',
      icon: MdPool,
      path: '/app/commons-areas',
    },
    {
      title: 'Incidencias',
      icon: MdReportProblem,
      path: '/app/incidents',
    },
    {
      title: 'Configuracion',
      icon: MdSettings,
      path: '/app/settings',
    },

    // {
    //   sectionTitle: 'Reportes'
    // },
    {
      title: "Reports",
      icon: MdBarChart,
      path: '/app/reports'
    },

    // {
    //   title: 'Cards',
    //   icon: CreditCardOutline,
    //   path: '/cards'
    // },
    // {
    //   title: 'Tables',
    //   icon: Table,
    //   path: '/tables'
    // },
    {
      icon: CubeOutline,
      title: 'Form Layouts',
      path: '/form-layouts'
    },

  ]
}

export default navigation
