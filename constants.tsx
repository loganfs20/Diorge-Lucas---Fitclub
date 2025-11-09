import React from 'react';
import { Professional, Review, ExercisePlan, DietPlan, Exercise } from './types';

export const DumbbellIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.109 1.109 0 0 0-.57 1.664c.369.555.035 1.285-.535 1.554l-1.068.49a2.25 2.25 0 0 0-1.664 2.182V19.5a2.25 2.25 0 0 0 .22-1.002l.143-.857a2.25 2.25 0 0 1 1.161-.886l.51-.255a2.25 2.25 0 0 0-1.49-4.305l-.488.144a1.109 1.109 0 0 1-1.664-.57c-.555-.96-.216-2.174.535-2.544l1.068-.89a2.25 2.25 0 0 1 .864-1.405V5.25a2.25 2.25 0 0 0-1.002-.22l-.857.143a2.25 2.25 0 0 1-.886 1.161l-.255.51a2.25 2.25 0 0 0 4.305 1.49l.144-.488a1.109 1.109 0 0 1 .57-1.664c.96-.555 2.174-.216 2.544.535l.89 1.068a2.25 2.25 0 0 1 1.405.864h.568a2.25 2.25 0 0 0 2.25-2.25V12.75a2.25 2.25 0 0 0-2.25-2.25H19.5a2.25 2.25 0 0 0-1.002.22l-.857-.143a2.25 2.25 0 0 1-.886-1.161l-.255-.51a2.25 2.25 0 0 0-4.305-1.49l-.144.488a1.109 1.109 0 0 1-1.664.57c-.96.555-2.174.216-2.544-.535l-.89-1.068a2.25 2.25 0 0 1-1.405-.864H5.25A2.25 2.25 0 0 0 3 5.25v2.25c0 1.24 1.01 2.25 2.25 2.25H7.5a2.25 2.25 0 0 0 1.002-.22l.857.143a2.25 2.25 0 0 1 .886 1.161l.255.51a2.25 2.25 0 0 0 4.305 1.49l.144-.488a1.109 1.109 0 0 1 1.664.57c.555.96.216 2.174-.535 2.544l-1.068.89a2.25 2.25 0 0 1-1.405.864v-.568c0-.334-.148-.65-.405-.864l-1.068-.89c-.442-.369-.535-1.01-.216-1.49l.51-.766a2.25 2.25 0 0 1 1.161-.886l.143-.048a1.109 1.109 0 0 0 .57-1.664c-.369-.555-.035-1.285.535-1.554l1.068-.49a2.25 2.25 0 0 0 1.664-2.182V5.25a2.25 2.25 0 0 0-.22 1.002l-.143.857a2.25 2.25 0 0 1-1.161.886l-.51.255a2.25 2.25 0 0 0 1.49 4.305l.488-.144a1.109 1.109 0 0 1 1.664.57c.555.96.216 2.174-.535 2.544l-1.068.89a2.25 2.25 0 0 1-.864 1.405v.568a2.25 2.25 0 0 0 1.002.22l.857-.143a2.25 2.25 0 0 1 .886-1.161l.255-.51a2.25 2.25 0 0 0-4.305-1.49l-.144.488a1.109 1.109 0 0 1-.57 1.664c-.96.555-2.174.216-2.544-.535l-.89-1.068a2.25 2.25 0 0 1-.864-1.405h-.568a2.25 2.25 0 0 0-2.25 2.25v2.25c0 1.24 1.01 2.25 2.25 2.25H7.5a2.25 2.25 0 0 0 1.002.22l.857.143a2.25 2.25 0 0 1 .886 1.161l.255.51a2.25 2.25 0 0 0 4.305 1.49l.144-.488a1.109 1.109 0 0 1 1.664.57z" />
  </svg>
);
export const UserCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
);
export const AcademicCapIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path d="M12 14.25a3.75 3.75 0 0 0 3.75-3.75V6.75h-7.5v3.75c0 2.071 1.679 3.75 3.75 3.75Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14.25a3.75 3.75 0 0 0 3.75-3.75V6.75h-7.5v3.75c0 2.071 1.679 3.75 3.75 3.75Zm0 0h.375c.621 0 1.125.504 1.125 1.125V18a1.125 1.125 0 0 1-1.125 1.125h-1.5A1.125 1.125 0 0 1 9 18v-2.625c0-.621.504-1.125 1.125-1.125h.375ZM3 13.5v-3c0-.621.504-1.125 1.125-1.125h1.5c.621 0 1.125.504 1.125 1.125v3c0 .621-.504 1.125-1.125 1.125h-1.5A1.125 1.125 0 0 1 3 13.5Zm18 0v-3c0-.621-.504-1.125-1.125-1.125h-1.5a1.125 1.125 0 0 0-1.125 1.125v3c0 .621.504 1.125 1.125 1.125h1.5c.621 0 1.125-.504 1.125-1.125Z" />
    </svg>
);
export const UserGroupIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m-7.5-2.962c.57-1.03-.19-2.27-.998-2.625A12 12 0 0 0 2 18c0 .668.532 1.2 1.2 1.2h3.126c1.026 0 1.945-.394 2.684-1.063M18 18.72A7.488 7.488 0 0 0 12 15.75c-2.648 0-4.935 1.421-6.12 3.522M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
);
export const ClipboardListIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 12 2.25a2.251 2.251 0 0 1 1.447 1.447M4.5 18.75h10.5a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M4.5 5.25A2.25 2.25 0 0 1 6.75 3h10.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25H6.75a2.25 2.25 0 0 1-2.25-2.25V5.25Z" />
    </svg>
);
export const ChatAlt2Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.76 9.76 0 0 1-2.53-0.417m-4.47-4.47a9.75 9.75 0 0 1-3.53-3.903A9.75 9.75 0 0 1 7.5 3c4.97 0 9 3.694 9 8.25Z" />
    </svg>
);
export const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
);
export const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.006Z" clipRule="evenodd" />
    </svg>
);
export const HomeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
);
export const BellIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
  </svg>
);
export const PlayIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.742 1.295 2.545 0 3.286L7.279 20.99c-1.25.713-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
    </svg>
);
export const BookOpenIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
);
export const FireIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 0 1 .44 1.323 7.5 7.5 0 0 1 .038 6.061.75.75 0 0 1-1.284.624 6 6 0 0 0-.03-4.834.75.75 0 0 1 .836-1.174ZM10.5 15.75a.75.75 0 0 0-1.123-.671 6 6 0 0 0-1.928 5.143.75.75 0 1 0 1.455.334A4.5 4.5 0 0 1 10.5 15.75Z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clipRule="evenodd" />
    </svg>
);
export const ExclamationTriangleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
    </svg>
);
export const XMarkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
);
export const PlusCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);


const mockReviews: Review[] = [
    { id: '1', clientName: 'Ana Silva', clientPhoto: 'https://randomuser.me/api/portraits/women/1.jpg', rating: 5, comment: 'Excelente profissional! Atencioso e com treinos que realmente dão resultado. Recomendo demais!', date: '2024-07-15' },
    { id: '2', clientName: 'Bruno Costa', clientPhoto: 'https://randomuser.me/api/portraits/men/2.jpg', rating: 4, comment: 'Gostei muito do plano alimentar, bem variado e fácil de seguir. O acompanhamento pelo chat faz toda a diferença.', date: '2024-07-10' },
    { id: '3', clientName: 'Carla Dias', clientPhoto: 'https://randomuser.me/api/portraits/women/3.jpg', rating: 5, comment: 'Em 3 meses, já vejo uma transformação incrível no meu corpo e na minha disposição. A [Nome do Profissional] é nota 1000!', date: '2024-06-28' },
];

export const MOCK_PROFESSIONALS: Professional[] = [
    {
        id: '1',
        name: 'Carlos Andrade',
        specialties: ['Emagrecimento', 'Hipertrofia', 'Funcional'],
        bio: 'Personal trainer com 10 anos de experiência, focado em ajudar pessoas a alcançarem seus objetivos de forma saudável e sustentável, combinando ciência e acompanhamento personalizado.',
        profilePicture: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        rating: 4.9,
        reviewsCount: 87,
        monthlyPrice: 150,
        weeklyInteractions: 3,
        reviews: mockReviews,
    },
    {
        id: '2',
        name: 'Juliana Campos',
        specialties: ['Nutrição Esportiva', 'Reeducação Alimentar'],
        bio: 'Nutricionista apaixonada por transformar vidas através da alimentação. Crio planos alimentares individualizados que respeitam sua rotina e preferências, sem terrorismo nutricional.',
        profilePicture: 'https://images.unsplash.com/photo-1579046927222-3818a7a938a1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        rating: 5.0,
        reviewsCount: 102,
        monthlyPrice: 200,
        weeklyInteractions: 2,
        reviews: mockReviews.slice(0,2),
    },
    {
        id: '3',
        name: 'Fernando Rocha',
        specialties: ['Performance', 'Crossfit', 'Hipertrofia'],
        bio: 'Foco em atletas e pessoas que buscam levar seu desempenho a outro nível. Treinamento intenso, periodizado e com foco total na sua evolução.',
        profilePicture: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        rating: 4.8,
        reviewsCount: 65,
        monthlyPrice: 180,
        weeklyInteractions: 4,
        reviews: mockReviews.slice(1,3),
    },
];


export const mockWorkoutPlan: ExercisePlan = {
  id: 'wp1',
  name: 'Treino A - Peito e Tríceps',
  description: 'Foco em desenvolvimento de força e volume para peitoral e tríceps.',
  exercises: [
    { id: 'ex1', name: 'Supino Reto', series: '4', repetitions: '8-12', rest: '60s', observations: 'Manter a contração do peitoral.', videoUrl: 'https://www.youtube.com/watch?v=isbr08_oG_8' },
    { id: 'ex2', name: 'Supino Inclinado com Halteres', series: '3', repetitions: '10-15', rest: '60s', observations: 'Focar na parte superior do peito.', videoUrl: 'https://www.youtube.com/watch?v=isbr08_oG_8' },
    { id: 'ex3', name: 'Tríceps Polia', series: '4', repetitions: '12', rest: '45s', observations: 'Estender completamente os cotovelos.', videoUrl: 'https://www.youtube.com/watch?v=isbr08_oG_8' },
  ],
};

export const mockDietPlan: DietPlan = {
  id: 'dp1',
  name: 'Plano de Hipertrofia',
  description: 'Dieta balanceada com foco em ganho de massa muscular.',
  meals: [
    { id: 'm1', name: 'Café da Manhã', items: [{id: 'i1', food: 'Ovos mexidos com aveia', quantity: '4 ovos, 40g aveia'}] },
    { id: 'm2', name: 'Almoço', items: [{id: 'i2', food: 'Frango grelhado com batata doce e brócolis', quantity: '200g frango, 150g batata, 100g brócolis'}] },
  ],
};

export const MUSCLE_GROUPS = ["Peito", "Costas", "Pernas", "Ombros", "Bíceps", "Tríceps", "Abdômen"];

export const MOCK_EXERCISES: Exercise[] = [
    // --- PEITO ---
    {
        id: "ex001",
        name: "Supino Reto com Barra",
        mediaUrl: "https://musclewiki.com/media/uploads/male-barbell-bench-press-side.gif",
        instructions: ["Deite-se no banco com os pés firmes no chão.", "Pegue a barra com as mãos um pouco mais afastadas que a largura dos ombros.", "Abaixe a barra lentamente até tocar o meio do peito.", "Empurre a barra de volta à posição inicial, estendendo os braços."],
        commonErrors: ["Arquear excessivamente a lombar.", "Levantar o quadril do banco.", "Descida descontrolada da barra."],
        primaryMuscles: ["Peitoral Maior"],
        secondaryMuscles: ["Deltóide Anterior", "Tríceps"],
        muscleGroup: "Peito"
    },
    {
        id: "ex015",
        name: "Supino Inclinado com Halteres",
        mediaUrl: "https://musclewiki.com/media/uploads/male-dumbbell-incline-bench-press-side.gif",
        instructions: ["Ajuste o banco para uma inclinação de 30-45 graus.", "Deite-se segurando os halteres próximos ao peito.", "Empurre os halteres para cima e juntos, sem deixá-los tocar.", "Abaixe lentamente até a posição inicial."],
        commonErrors: ["Usar uma inclinação muito alta (recruta mais ombros).", "Bater os halteres no topo.", "Não descer o suficiente."],
        primaryMuscles: ["Peitoral Superior"],
        secondaryMuscles: ["Deltóide Anterior", "Tríceps"],
        muscleGroup: "Peito"
    },
    {
        id: "ex022",
        name: "Supino Declinado com Barra",
        mediaUrl: "https://musclewiki.com/media/uploads/male-barbell-decline-bench-press-side.gif",
        instructions: ["Deite-se em um banco declinado, prendendo os pés no suporte.", "Abaixe a barra lentamente até a parte inferior do peito.", "Empurre a barra de volta à posição inicial.", "Mantenha o controle durante todo o movimento."],
        commonErrors: ["Bater a barra no peito.", "Movimento muito rápido e sem controle.", "Amplitude de movimento curta."],
        primaryMuscles: ["Peitoral Inferior"],
        secondaryMuscles: ["Deltóide Anterior", "Tríceps"],
        muscleGroup: "Peito"
    },
    {
        id: "ex016",
        name: "Crucifixo com Halteres",
        mediaUrl: "https://musclewiki.com/media/uploads/male-dumbbell-fly-side.gif",
        instructions: ["Deite-se em um banco plano com um halter em cada mão, braços estendidos acima do peito.", "Mantenha uma leve flexão nos cotovelos.", "Abaixe os halteres para os lados em um movimento de arco.", "Retorne à posição inicial usando o peito para 'abraçar' o peso."],
        commonErrors: ["Dobrar demais os cotovelos, transformando em um supino.", "Descer o peso muito baixo, forçando os ombros.", "Usar muito peso e perder a forma."],
        primaryMuscles: ["Peitoral Maior"],
        secondaryMuscles: ["Deltóide Anterior"],
        muscleGroup: "Peito"
    },
    {
        id: "ex023",
        name: "Abertura na Máquina (Pec Deck)",
        mediaUrl: "https://musclewiki.com/media/uploads/male-machine-pec-deck-fly-front.gif",
        instructions: ["Sente-se na máquina e ajuste o banco para que as alças fiquem na altura do peito.", "Mantenha as costas apoiadas e os pés firmes no chão.", "Junte as alças na frente do corpo, contraindo o peitoral.", "Retorne à posição inicial de forma controlada."],
        commonErrors: ["Usar impulso para mover o peso.", "Estender demais os braços na volta.", "Encolher os ombros."],
        primaryMuscles: ["Peitoral Maior"],
        secondaryMuscles: [],
        muscleGroup: "Peito"
    },
    {
        id: "ex008",
        name: "Flexão de Braço",
        mediaUrl: "https://musclewiki.com/media/uploads/male-bodyweight-push-up-side.gif",
        instructions: ["Comece em uma posição de prancha alta.", "Mantenha o corpo reto da cabeça aos calcanhares.", "Abaixe o corpo dobrando os cotovelos até que o peito quase toque o chão.", "Empurre de volta à posição inicial."],
        commonErrors: ["Deixar o quadril cair.", "Abrir demais os cotovelos.", "Não realizar a amplitude completa."],
        primaryMuscles: ["Peitoral Maior"],
        secondaryMuscles: ["Deltóide Anterior", "Tríceps"],
        muscleGroup: "Peito"
    },
    // --- COSTAS ---
    {
        id: "ex017",
        name: "Barra Fixa (Pull-up)",
        mediaUrl: "https://musclewiki.com/media/uploads/male-bodyweight-pull-up-side.gif",
        instructions: ["Segure a barra com as mãos um pouco mais afastadas que a largura dos ombros, palmas para frente.", "Comece com os braços totalmente estendidos.", "Puxe seu corpo para cima até que o queixo passe da barra.", "Abaixe-se de forma controlada."],
        commonErrors: ["Não completar a amplitude do movimento (subir pouco ou não estender os braços).", "Balançar o corpo (kipping) sem intenção.", "Levantar os ombros em direção às orelhas."],
        primaryMuscles: ["Grande Dorsal"],
        secondaryMuscles: ["Bíceps", "Romboides", "Trapézio"],
        muscleGroup: "Costas"
    },
    {
        id: "ex009",
        name: "Puxada Frontal (Pulldown)",
        mediaUrl: "https://musclewiki.com/media/uploads/male-machine-lat-pulldown-front.gif",
        instructions: ["Sente-se na máquina e ajuste o suporte para os joelhos.", "Segure a barra com uma pegada aberta.", "Puxe a barra para baixo em direção à parte superior do peito.", "Retorne a barra à posição inicial de forma controlada."],
        commonErrors: ["Usar o impulso do corpo para puxar a barra.", "Puxar a barra para trás do pescoço.", "Encolher os ombros."],
        primaryMuscles: ["Grande Dorsal"],
        secondaryMuscles: ["Bíceps", "Romboides"],
        muscleGroup: "Costas"
    },
    {
        id: "ex003",
        name: "Remada Curvada com Barra",
        mediaUrl: "https://musclewiki.com/media/uploads/male-barbell-bent-over-row-side.gif",
        instructions: ["Incline o tronco para a frente, mantendo as costas retas.", "Segure a barra com uma pegada um pouco mais larga que os ombros.", "Puxe a barra em direção à parte inferior do seu abdômen.", "Abaixe a barra de forma controlada."],
        commonErrors: ["Arredondar a lombar.", "Usar impulso do corpo (balançar).", "Puxar com os braços em vez das costas."],
        primaryMuscles: ["Grande Dorsal", "Romboides"],
        secondaryMuscles: ["Bíceps", "Deltóide Posterior"],
        muscleGroup: "Costas"
    },
    {
        id: "ex024",
        name: "Remada Unilateral (Serrote)",
        mediaUrl: "https://musclewiki.com/media/uploads/male-dumbbell-one-arm-row-side.gif",
        instructions: ["Apoie um joelho e a mão do mesmo lado em um banco.", "Mantenha as costas retas e paralelas ao chão.", "Puxe o halter para cima, ao lado do seu tronco.", "Abaixe o halter de forma controlada."],
        commonErrors: ["Girar o tronco durante o movimento.", "Puxar o peso com o bíceps.", "Arredondar a lombar."],
        primaryMuscles: ["Grande Dorsal"],
        secondaryMuscles: ["Bíceps", "Deltóide Posterior", "Romboides"],
        muscleGroup: "Costas"
    },
     {
        id: "ex018",
        name: "Remada Cavalinho (T-Bar Row)",
        mediaUrl: "https://musclewiki.com/media/uploads/male-landmine-t-bar-row-side.gif",
        instructions: ["Posicione-se sobre a barra com os pés em cada lado.", "Mantenha as costas retas e o peito para cima.", "Puxe a alça em direção ao seu peito, contraindo os músculos das costas.", "Abaixe o peso de forma controlada."],
        commonErrors: ["Arredondar as costas.", "Levantar o peso com os braços em vez das costas.", "Ficar com o tronco muito ereto."],
        primaryMuscles: ["Grande Dorsal", "Romboides"],
        secondaryMuscles: ["Bíceps", "Trapézio"],
        muscleGroup: "Costas"
    },
    {
        id: "ex010",
        name: "Levantamento Terra",
        mediaUrl: "https://musclewiki.com/media/uploads/male-barbell-deadlift-side.gif",
        instructions: ["Posicione-se com a barra sobre o meio dos pés.", "Agache e segure a barra, mantendo as costas retas.", "Levante a barra estendendo os quadris e joelhos simultaneamente.", "Abaixe a barra de forma controlada."],
        commonErrors: ["Arredondar a lombar.", "A barra se afastar do corpo.", "Levantar o quadril mais rápido que os ombros."],
        primaryMuscles: ["Isquiotibiais", "Glúteos", "Eretores da espinha"],
        secondaryMuscles: ["Quadríceps", "Trapézio", "Grande Dorsal"],
        muscleGroup: "Costas"
    },
    // --- PERNAS ---
    {
        id: "ex002",
        name: "Agachamento Livre com Barra",
        mediaUrl: "https://musclewiki.com/media/uploads/male-barbell-squat-side.gif",
        instructions: ["Posicione a barra sobre o trapézio.", "Mantenha os pés na largura dos ombros.", "Agache como se fosse sentar, mantendo o peito erguido.", "Desça até que as coxas fiquem pelo menos paralelas ao chão.", "Suba empurrando o chão com os calcanhares."],
        commonErrors: ["Deixar os joelhos irem para dentro.", "Curvar a lombar.", "Levantar os calcanhares."],
        primaryMuscles: ["Quadríceps", "Glúteos"],
        secondaryMuscles: ["Isquiotibiais", "Eretores da espinha"],
        muscleGroup: "Pernas"
    },
    {
        id: "ex019",
        name: "Leg Press 45",
        mediaUrl: "https://musclewiki.com/media/uploads/male-machine-leg-press-side.gif",
        instructions: ["Sente-se na máquina e posicione os pés na plataforma na largura dos ombros.", "Destrave a segurança e empurre a plataforma até estender as pernas.", "Abaixe o peso de forma controlada dobrando os joelhos.", "Não trave os joelhos no topo do movimento."],
        commonErrors: ["Descer demais a plataforma, levantando o quadril do banco.", "Travar completamente os joelhos.", "Fazer um movimento muito curto."],
        primaryMuscles: ["Quadríceps", "Glúteos"],
        secondaryMuscles: ["Isquiotibiais"],
        muscleGroup: "Pernas"
    },
     {
        id: "ex025",
        name: "Avanço (Lunge) com Halteres",
        mediaUrl: "https://musclewiki.com/media/uploads/male-dumbbell-lunges-side.gif",
        instructions: ["Segure um halter em cada mão.", "Dê um passo à frente com uma perna.", "Abaixe o corpo até que ambos os joelhos formem ângulos de 90 graus.", "Empurre de volta à posição inicial e troque de perna."],
        commonErrors: ["Deixar o joelho da frente passar da ponta do pé.", "Bater o joelho de trás no chão.", "Inclinar o tronco para frente."],
        primaryMuscles: ["Quadríceps", "Glúteos"],
        secondaryMuscles: ["Isquiotibiais"],
        muscleGroup: "Pernas"
    },
    {
        id: "ex026",
        name: "Stiff com Barra",
        mediaUrl: "https://musclewiki.com/media/uploads/male-barbell-romanian-deadlift-side.gif",
        instructions: ["Segure a barra na frente das coxas.", "Mantendo as pernas quase retas, incline o tronco para frente.", "Desça a barra até sentir um bom alongamento nos isquiotibiais.", "Retorne à posição inicial contraindo os glúteos e isquiotibiais."],
        commonErrors: ["Curvar a lombar.", "Dobrar demais os joelhos.", "Afastar a barra do corpo."],
        primaryMuscles: ["Isquiotibiais"],
        secondaryMuscles: ["Glúteos", "Eretores da espinha"],
        muscleGroup: "Pernas"
    },
    {
        id: "ex020",
        name: "Cadeira Extensora",
        mediaUrl: "https://musclewiki.com/media/uploads/male-machine-leg-extension-side.gif",
        instructions: ["Sente-se na máquina com os joelhos alinhados ao eixo do aparelho.", "Posicione o rolo sobre a parte inferior da sua canela.", "Estenda as pernas para levantar o peso.", "Abaixe de forma controlada."],
        commonErrors: ["Usar impulso para levantar o peso.", "Não controlar a descida.", "Ajuste incorreto da máquina."],
        primaryMuscles: ["Quadríceps"],
        secondaryMuscles: [],
        muscleGroup: "Pernas"
    },
    {
        id: "ex027",
        name: "Mesa Flexora",
        mediaUrl: "https://musclewiki.com/media/uploads/male-machine-lying-leg-curl-side.gif",
        instructions: ["Deite-se de bruços na máquina, com os joelhos para fora do banco.", "Ajuste o rolo para que fique na parte de trás dos seus tornozelos.", "Flexione os joelhos para levantar o peso.", "Retorne à posição inicial de forma controlada."],
        commonErrors: ["Levantar o quadril do banco.", "Movimento muito rápido ou com impulso.", "Amplitude de movimento incompleta."],
        primaryMuscles: ["Isquiotibiais"],
        secondaryMuscles: ["Panturrilha"],
        muscleGroup: "Pernas"
    },
    {
        id: "ex028",
        name: "Elevação Pélvica (Hip Thrust)",
        mediaUrl: "https://musclewiki.com/media/uploads/male-barbell-hip-thrust-side.gif",
        instructions: ["Sente-se no chão com as costas apoiadas em um banco.", "Posicione a barra sobre o seu quadril.", "Empurre o quadril para cima até que seu corpo forme uma linha reta dos ombros aos joelhos.", "Contraia os glúteos no topo e desça de forma controlada."],
        commonErrors: ["Hiperextender a lombar.", "Subir com a força das costas em vez dos glúteos.", "Não atingir a extensão completa do quadril."],
        primaryMuscles: ["Glúteos"],
        secondaryMuscles: ["Isquiotibiais"],
        muscleGroup: "Pernas"
    },
    {
        id: "ex029",
        name: "Panturrilha em Pé (Gêmeos)",
        mediaUrl: "https://musclewiki.com/media/uploads/male-machine-standing-calf-raise-side.gif",
        instructions: ["Posicione-se em uma máquina ou com uma barra nas costas.", "Fique na ponta dos pés, elevando os calcanhares o máximo possível.", "Segure a contração no topo por um segundo.", "Desça lentamente, alongando a panturrilha."],
        commonErrors: ["Usar impulso para subir.", "Movimento muito curto.", "Dobrar os joelhos."],
        primaryMuscles: ["Gastrocnêmio"],
        secondaryMuscles: ["Sóleo"],
        muscleGroup: "Pernas"
    },
    // --- OMBROS ---
    {
        id: "ex004",
        name: "Desenvolvimento com Halteres",
        mediaUrl: "https://musclewiki.com/media/uploads/male-dumbbell-seated-shoulder-press-side.gif",
        instructions: ["Sente-se em um banco, segurando um halter em cada mão na altura dos ombros.", "Empurre os halteres para cima até estender os braços.", "Abaixe os halteres de volta à posição inicial de forma controlada."],
        commonErrors: ["Arquear as costas.", "Bater os halteres no topo.", "Não controlar a descida."],
        primaryMuscles: ["Deltóides"],
        secondaryMuscles: ["Tríceps", "Trapézio"],
        muscleGroup: "Ombros"
    },
    {
        id: "ex011",
        name: "Elevação Lateral com Halteres",
        mediaUrl: "https://musclewiki.com/media/uploads/male-dumbbell-lateral-raise-front.gif",
        instructions: ["Fique em pé, segurando um halter em cada mão ao lado do corpo.", "Levante os halteres para os lados, mantendo os braços quase retos.", "Eleve até a altura dos ombros.", "Abaixe os halteres de forma controlada."],
        commonErrors: ["Balançar o corpo para levantar o peso.", "Levantar os pesos acima dos ombros.", "Dobrar demais os cotovelos."],
        primaryMuscles: ["Deltóide Lateral"],
        secondaryMuscles: ["Deltóide Anterior", "Trapézio"],
        muscleGroup: "Ombros"
    },
    {
        id: "ex021",
        name: "Elevação Frontal com Barra",
        mediaUrl: "https://musclewiki.com/media/uploads/male-barbell-front-raise-side.gif",
        instructions: ["Fique em pé segurando uma barra com as palmas para baixo.", "Levante a barra para a frente e para cima até a altura dos ombros.", "Mantenha os braços estendidos.", "Abaixe a barra de forma controlada."],
        commonErrors: ["Balançar o corpo para gerar impulso.", "Levantar a barra muito acima dos ombros.", "Usar os ombros para encolher (trapézio)."],
        primaryMuscles: ["Deltóide Anterior"],
        secondaryMuscles: ["Peitoral Superior"],
        muscleGroup: "Ombros"
    },
    {
        id: "ex030",
        name: "Crucifixo Inverso com Halteres",
        mediaUrl: "https://musclewiki.com/media/uploads/male-dumbbell-bent-over-reverse-fly-side.gif",
        instructions: ["Incline o tronco para frente, mantendo as costas retas.", "Segure os halteres com as palmas viradas uma para a outra.", "Levante os pesos para os lados, mantendo uma leve flexão nos cotovelos.", "Contraia os músculos da parte de trás dos ombros."],
        commonErrors: ["Usar as costas para levantar o peso.", "Dobrar e esticar os cotovelos.", "Levantar o tronco durante o movimento."],
        primaryMuscles: ["Deltóide Posterior"],
        secondaryMuscles: ["Romboides", "Trapézio"],
        muscleGroup: "Ombros"
    },
    // --- BÍCEPS ---
    {
        id: "ex005",
        name: "Rosca Direta com Barra",
        mediaUrl: "https://musclewiki.com/media/uploads/male-barbell-biceps-curl-side.gif",
        instructions: ["Segure a barra com pegada supinada (palmas para cima).", "Mantenha os cotovelos fixos ao lado do corpo.", "Levante a barra em direção aos ombros, contraindo o bíceps.", "Abaixe a barra lentamente."],
        commonErrors: ["Balançar o corpo.", "Mover os cotovelos para frente.", "Não realizar o movimento completo."],
        primaryMuscles: ["Bíceps Braquial"],
        secondaryMuscles: ["Braquial", "Braquiorradial"],
        muscleGroup: "Bíceps"
    },
    {
        id: "ex012",
        name: "Rosca Martelo com Halteres",
        mediaUrl: "https://musclewiki.com/media/uploads/male-dumbbell-hammer-curl-side.gif",
        instructions: ["Segure um halter em cada mão com pegada neutra (palmas para dentro).", "Mantenha os cotovelos fixos ao lado do corpo.", "Levante um halter de cada vez (ou ambos) em direção ao ombro.", "Abaixe de forma controlada."],
        commonErrors: ["Balançar o corpo.", "Girar o punho durante o movimento.", "Amplitude de movimento curta."],
        primaryMuscles: ["Braquiorradial", "Braquial"],
        secondaryMuscles: ["Bíceps Braquial"],
        muscleGroup: "Bíceps"
    },
    {
        id: "ex031",
        name: "Rosca Scott com Barra W",
        mediaUrl: "https://musclewiki.com/media/uploads/male-ez-bar-preacher-curl-side.gif",
        instructions: ["Sente-se no banco Scott e apoie a parte de trás dos seus braços no suporte.", "Segure a barra com uma pegada na largura dos ombros.", "Flexione os cotovelos para levantar o peso.", "Abaixe a barra de forma controlada, sem estender totalmente os cotovelos."],
        commonErrors: ["Tirar os cotovelos do apoio.", "Usar impulso do corpo.", "Descer muito rápido e sem controle."],
        primaryMuscles: ["Bíceps Braquial", "Braquial"],
        secondaryMuscles: [],
        muscleGroup: "Bíceps"
    },
    // --- TRÍCEPS ---
    {
        id: "ex006",
        name: "Tríceps na Polia com Barra",
        mediaUrl: "https://musclewiki.com/media/uploads/male-cable-triceps-pushdown-side.gif",
        instructions: ["Fique de frente para a polia alta, segurando a barra.", "Mantenha os cotovelos próximos ao corpo.", "Empurre a barra para baixo até estender os braços.", "Retorne à posição inicial de forma controlada."],
        commonErrors: ["Usar o peso do corpo para empurrar.", "Mover os cotovelos.", "Deixar a barra subir muito rápido."],
        primaryMuscles: ["Tríceps Braquial"],
        secondaryMuscles: [],
        muscleGroup: "Tríceps"
    },
    {
        id: "ex032",
        name: "Tríceps Testa com Barra W",
        mediaUrl: "https://musclewiki.com/media/uploads/male-ez-bar-skull-crusher-side.gif",
        instructions: ["Deite-se em um banco plano.", "Segure a barra W acima do peito com os braços estendidos.", "Abaixe a barra em direção à sua testa, dobrando apenas os cotovelos.", "Empurre a barra de volta à posição inicial."],
        commonErrors: ["Abrir os cotovelos para os lados.", "Mover os ombros.", "Descer a barra atrás da cabeça."],
        primaryMuscles: ["Tríceps Braquial"],
        secondaryMuscles: [],
        muscleGroup: "Tríceps"
    },
    {
        id: "ex013",
        name: "Mergulho no Banco",
        mediaUrl: "https://musclewiki.com/media/uploads/male-bodyweight-bench-dips-side.gif",
        instructions: ["Posicione as mãos na borda de um banco.", "Estenda as pernas à sua frente.", "Abaixe o corpo dobrando os cotovelos até 90 graus.", "Empurre de volta à posição inicial."],
        commonErrors: ["Descer muito, forçando os ombros.", "Manter o corpo longe do banco.", "Abrir os cotovelos para os lados."],
        primaryMuscles: ["Tríceps Braquial"],
        secondaryMuscles: ["Deltóide Anterior", "Peitoral"],
        muscleGroup: "Tríceps"
    },
    // --- ABDÔMEN ---
    {
        id: "ex007",
        name: "Prancha Abdominal",
        mediaUrl: "https://musclewiki.com/media/uploads/male-bodyweight-plank-side.gif",
        instructions: ["Apoie os antebraços e as pontas dos pés no chão.", "Mantenha o corpo em linha reta.", "Contraia o abdômen e os glúteos.", "Segure a posição pelo tempo desejado."],
        commonErrors: ["Deixar o quadril cair ou levantar demais.", "Prender a respiração.", "Olhar para cima ou para os pés."],
        primaryMuscles: ["Reto Abdominal", "Transverso do Abdômen"],
        secondaryMuscles: ["Oblíquos", "Eretores da espinha"],
        muscleGroup: "Abdômen"
    },
    {
        id: "ex033",
        name: "Abdominal (Crunch)",
        mediaUrl: "https://musclewiki.com/media/uploads/male-bodyweight-crunch-side.gif",
        instructions: ["Deite-se de costas com os joelhos dobrados e os pés no chão.", "Coloque as mãos atrás da cabeça ou cruzadas no peito.", "Levante a cabeça e os ombros do chão, contraindo o abdômen.", "Abaixe de forma controlada."],
        commonErrors: ["Puxar o pescoço com as mãos.", "Levantar demais o tronco.", "Subir com impulso."],
        primaryMuscles: ["Reto Abdominal"],
        secondaryMuscles: ["Oblíquos"],
        muscleGroup: "Abdômen"
    },
    {
        id: "ex014",
        name: "Elevação de Pernas Deitado",
        mediaUrl: "https://musclewiki.com/media/uploads/male-bodyweight-lying-leg-raise-side.gif",
        instructions: ["Deite-se de costas com as pernas estendidas.", "Levante as pernas retas até 90 graus.", "Abaixe as pernas lentamente, sem tocar o chão."],
        commonErrors: ["Arquear a lombar.", "Usar impulso.", "Movimento descontrolado."],
        primaryMuscles: ["Reto Abdominal (inferior)"],
        secondaryMuscles: ["Oblíquos"],
        muscleGroup: "Abdômen"
    },
    {
        id: "ex034",
        name: "Prancha Lateral",
        mediaUrl: "https://musclewiki.com/media/uploads/male-bodyweight-side-plank-side.gif",
        instructions: ["Deite-se de lado, apoiando o peso no antebraço e no pé.", "Levante o quadril até que seu corpo forme uma linha reta.", "Mantenha a posição, contraindo os músculos oblíquos.", "Troque de lado."],
        commonErrors: ["Deixar o quadril cair.", "Inclinar o corpo para frente ou para trás.", "Não manter o alinhamento corporal."],
        primaryMuscles: ["Oblíquos"],
        secondaryMuscles: ["Transverso do Abdômen", "Glúteo Médio"],
        muscleGroup: "Abdômen"
    }
];