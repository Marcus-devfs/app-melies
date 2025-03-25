interface MenuItem {
    text: string;
    icon: string;
    to: string;
    description: string
}

export const menuItems: MenuItem[] = [
    {
        text: 'Completar Dados do Cadastro', icon: 'verify_icon.png', to: '',
        description: 'Mantenha seus dados atualizados.'
    },
    {
        text: 'Meu Boletim', icon: 'report.png', to: '',
        description: 'Veja suas notas, frequência e muito mais!'
    },
    {
        text: 'Documentos Pendentes', icon: 'documents_close_icon.png', to: '',
        description: 'Entrega de documentos faltantes.'
    },
    {
        text: 'Lançar Atividade Complemetar', icon: 'atividade_complementar_icon.png', to: '',
        description: 'Entregue suas atividades complementares, e fique dentro do prazo.'
    },
    {
        text: 'Precisa de Ajuda?', icon: 'report.png', to: '',
        description: 'Ficou com dúvida em algo ou precisa de ajuda? Abra um chamado, que iremos atendê-lo!'
    },
    {
        text: 'Orientação de Carreiras', icon: 'livro.png', to: '',
        description: 'Acesse o guia com o resumo da experiência da Mélies formando profissionais de sucesso.'
    },
    {
        text: 'Solicitação de Documentos', icon: 'documentation_icon.png', to: '',
        description: 'Solicite aqui seu histórico escolar, comprovante de matrícula e muito mais!'
    },
]

export const iconMap: { [key: string]: any } = {
    'matricula_icon.png': require('../../assets/icons/matricula_icon.png'),
    'list_docs.png': require('../../assets/icons/list_docs.png'),
    'documentation_icon.png': require('../../assets/icons/documentation_icon.png'),
    'verify_icon.png': require('../../assets/icons/verify_icon.png'),
    'report.png': require('../../assets/icons/report.png'),
    'documents_close_icon.png': require('../../assets/icons/documents_close_icon.png'),
    'atividade_complementar_icon.png': require('../../assets/icons/atividade_complementar_icon.png'),
    'livro.png': require('../../assets/icons/livro.png'),
};
