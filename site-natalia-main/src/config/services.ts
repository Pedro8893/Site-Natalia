import { BadgeDollarSign, HeartHandshake, MonitorSmartphone, Timer } from 'lucide-react'

export const services = [
  {
    name: 'Acesso facilitado à assistência médica',
    description:
      'Supera barreiras geográficas e melhora o acesso à assistência médica, especialmente para populações rurais e pessoas com mobilidade reduzida. Pacientes que vivem em áreas remotas podem obter diagnósticos e tratamentos sem a necessidade de deslocamentos longos e dispendiosos até centros médicos urbanos.',
    icon: MonitorSmartphone,
  },
  {
    name: 'Eficiência e conveniência',
    description:
      'Os pacientes podem realizar consultas médicas, obter aconselhamento e receber monitoramento de condições crônicas de forma mais rápida e conveniente. Isso economiza tempo e recursos para ambas as partes, permitindo que os médicos atendam a um maior número de pacientes em menos tempo.',
    icon: Timer,
  },
  {
    name: 'Redução de custos',
    description:
      'Redução significativa nos custos de saúde. Menos visitas desnecessárias a salas de emergência e internações podem ser evitadas por meio de consultas virtuais e acompanhamento remoto. Além disso, os custos associados a viagens e acomodação para tratamentos médicos são minimizados.',
    icon: BadgeDollarSign,
  },
  {
    name: 'Melhoria da continuidade do cuidado',
    description:
      'Facilita a comunicação entre diferentes profissionais de saúde envolvidos no tratamento de um paciente. Isso ajuda a garantir uma melhor coordenação do cuidado, evitando duplicação de exames e promovendo uma abordagem mais abrangente para a saúde do paciente.',
    icon: HeartHandshake,
  },
]