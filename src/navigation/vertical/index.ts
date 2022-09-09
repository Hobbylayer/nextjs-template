// ** Icon imports
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'

// ** React icons imports
import { MdAccountBalance, MdDescription, MdNoteAdd, MdRequestQuote, MdLocationPin, MdSettings, MdPeople, MdPool, MdReportProblem } from "react-icons/md";


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
      openInNewTab: true
    },
    {
      title: 'Gastos',
      icon: MdDescription,
      path: '/app/expenses',
      openInNewTab: true
    },
    {
      title: 'Bancos',
      icon: MdAccountBalance,
      path: '/app/banks-accont',
      openInNewTab: true
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
      path: '/app/locations',
    },
    {
      sectionTitle: 'Reports'
    },
    {
      title: 'Typography',
      icon: FormatLetterCase,
      path: '/typography'
    },
    {
      title: 'Cards',
      icon: CreditCardOutline,
      path: '/cards'
    },
    {
      title: 'Tables',
      icon: Table,
      path: '/tables'
    },
    {
      icon: CubeOutline,
      title: 'Form Layouts',
      path: '/form-layouts'
    },

  ]
}

export default navigation
