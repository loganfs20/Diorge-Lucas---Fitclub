import React, { useState, useEffect, ReactElement } from 'react';
import { MOCK_PROFESSIONALS, StarIcon, HomeIcon, DumbbellIcon, UserCircleIcon, BellIcon, PlayIcon, mockWorkoutPlan, mockDietPlan, BookOpenIcon, MOCK_EXERCISES, MUSCLE_GROUPS, FireIcon, ExclamationTriangleIcon, XMarkIcon, ClipboardListIcon } from '../../constants';
import { Professional, Review, ExercisePlan, DietPlan, ExerciseDetail, Exercise } from '../../types';
import { ExerciseLibrary, ExerciseDetailModal } from './common/ExerciseLibrary';


// Componente para exibir as estrelas de avaliação
const StarRatingDisplay: React.FC<{ rating: number; reviewCount?: number }> = ({ rating, reviewCount }) => {
    const totalStars = 5;
    return (
        <div className="flex items-center">
            <div className="flex">
                {[...Array(totalStars)].map((_, i) => (
                    <StarIcon
                        key={i}
                        className={`w-5 h-5 ${i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                    />
                ))}
            </div>
            {reviewCount !== undefined && <span className="ml-2 text-sm text-gray-600">({reviewCount} avaliações)</span>}
        </div>
    );
};

// Tela de descoberta de profissionais
const ProfessionalDiscoveryScreen: React.FC<{ onSelectProfessional: (professional: Professional) => void }> = ({ onSelectProfessional }) => {
    const filters = ["Emagrecimento", "Hipertrofia", "Nutrição Esportiva", "Funcional", "Performance"];
    const [activeFilter, setActiveFilter] = useState<string | null>(null);

    return (
        <div className="w-full max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Encontre seu profissional</h1>
            <p className="text-lg text-gray-600 mb-6">O guia perfeito para sua jornada fitness.</p>
            
            <div className="mb-6">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Busque por nome ou especialidade"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                           <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                       </svg>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <div className="flex space-x-2 overflow-x-auto pb-2 -mx-4 px-4">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                                activeFilter === filter
                                    ? 'bg-teal-500 text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MOCK_PROFESSIONALS.map(prof => (
                    <div key={prof.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
                        <img className="h-48 w-full object-cover" src={prof.profilePicture} alt={prof.name} />
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-gray-800 mb-1">{prof.name}</h3>
                            <div className="mb-3">
                                <StarRatingDisplay rating={prof.rating} />
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {prof.specialties.slice(0, 2).map(spec => (
                                    <span key={spec} className="bg-teal-100 text-teal-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">{spec}</span>
                                ))}
                            </div>
                            <div className="mt-auto">
                               <button 
                                  onClick={() => onSelectProfessional(prof)}
                                  className="w-full bg-teal-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors"
                                >
                                    Ver Perfil
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Tela de perfil do profissional
const ProfessionalProfileScreen: React.FC<{ professional: Professional; onHire: (professional: Professional) => void, onBack: () => void }> = ({ professional, onHire, onBack }) => {
    
    const averageRating = professional.reviews.reduce((acc, review) => acc + review.rating, 0) / professional.reviews.length;

    return (
        <div className="w-full max-w-2xl mx-auto">
            <button onClick={onBack} className="text-sm font-semibold text-teal-600 hover:text-teal-500 mb-4">&larr; Voltar para a busca</button>
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left md:space-x-8 mb-6">
                    <img className="w-32 h-32 rounded-full object-cover mb-4 md:mb-0 shadow-md" src={professional.profilePicture} alt={professional.name} />
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">{professional.name}</h1>
                        <div className="flex items-center justify-center md:justify-start my-2">
                           <StarRatingDisplay rating={professional.rating} reviewCount={professional.reviewsCount} />
                        </div>
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                            {professional.specialties.map(spec => (
                                <span key={spec} className="bg-teal-100 text-teal-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">{spec}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Sobre mim</h2>
                    <p className="text-gray-600">{professional.bio}</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Detalhes da Consultoria</h3>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600">Valor Mensal</span>
                        <span className="text-2xl font-bold text-teal-600">R$ {professional.monthlyPrice}</span>
                    </div>
                     <div className="flex justify-between items-center mt-1">
                        <span className="text-gray-600">Interações semanais via chat</span>
                        <span className="font-semibold text-gray-800">{professional.weeklyInteractions}</span>
                    </div>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-3">O que outros alunos dizem</h2>
                    <div className="flex items-center gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
                        <div className="text-4xl font-bold text-yellow-500">{averageRating.toFixed(1)}</div>
                        <div>
                            <StarRatingDisplay rating={averageRating} />
                            <p className="text-sm text-gray-600">Média de {professional.reviews.length} avaliações</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        {professional.reviews.map(review => (
                            <div key={review.id} className="border-b pb-4">
                                <div className="flex items-start space-x-3">
                                    <img src={review.clientPhoto} alt={review.clientName} className="w-10 h-10 rounded-full object-cover" />
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center">
                                            <h4 className="font-semibold text-gray-800">{review.clientName}</h4>
                                            <span className="text-xs text-gray-500">{review.date}</span>
                                        </div>
                                        <StarRatingDisplay rating={review.rating} />
                                        <p className="text-gray-600 mt-1 text-sm">{review.comment}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button 
                    onClick={() => onHire(professional)}
                    className="w-full bg-teal-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-teal-600 transition-all text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                    QUERO SER ALUNO(A) DE {professional.name.split(' ')[0]}
                </button>
            </div>
        </div>
    );
};

// Dashboard do Cliente
const ClientDashboard: React.FC<{onShowPlan: (type: 'workout' | 'diet') => void}> = ({onShowPlan}) => (
    <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Olá, Cliente!</h1>
        <p className="text-lg text-gray-600 mb-8">Seu plano para hoje está pronto. Vamos começar?</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button onClick={() => onShowPlan('workout')} className="bg-white p-6 rounded-xl shadow-md text-left hover:shadow-lg hover:bg-indigo-50 transition-all transform hover:-translate-y-1">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Meu Treino de Hoje</h2>
                <p className="text-indigo-600 font-semibold">{mockWorkoutPlan.name}</p>
            </button>
            <button onClick={() => onShowPlan('diet')} className="bg-white p-6 rounded-xl shadow-md text-left hover:shadow-lg hover:bg-indigo-50 transition-all transform hover:-translate-y-1">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Minha Dieta de Hoje</h2>
                 <p className="text-indigo-600 font-semibold">{mockDietPlan.name}</p>
            </button>
        </div>
    </div>
);

// Tela de Plano de Treino
const WorkoutPlanScreen: React.FC<{plan: ExercisePlan, onBack: () => void}> = ({ plan, onBack }) => {
    return (
        <div className="w-full max-w-2xl mx-auto">
            <button onClick={onBack} className="text-sm font-semibold text-teal-600 hover:text-teal-500 mb-4">&larr; Voltar para o Dashboard</button>
            <div className="bg-white rounded-xl shadow-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-1">{plan.name}</h1>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="space-y-4">
                    {plan.exercises.map(exercise => (
                        <div key={exercise.id} className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-bold text-lg text-gray-800">{exercise.name}</h3>
                            <div className="flex justify-between text-sm text-gray-600 mt-2">
                                <span>Séries: <span className="font-semibold text-gray-900">{exercise.series}</span></span>
                                <span>Reps: <span className="font-semibold text-gray-900">{exercise.repetitions}</span></span>
                                <span>Descanso: <span className="font-semibold text-gray-900">{exercise.rest}</span></span>
                            </div>
                             {exercise.videoUrl && (
                                <a 
                                    href={exercise.videoUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="mt-3 inline-flex items-center gap-2 bg-teal-500 text-white text-sm font-semibold px-3 py-1.5 rounded-md hover:bg-teal-600 transition-colors"
                                >
                                    <PlayIcon className="w-4 h-4" />
                                    Ver Execução
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Tela de Plano de Dieta
const DietPlanScreen: React.FC<{plan: DietPlan, onBack: () => void}> = ({ plan, onBack }) => (
     <div className="w-full max-w-2xl mx-auto">
        <button onClick={onBack} className="text-sm font-semibold text-teal-600 hover:text-teal-500 mb-4">&larr; Voltar para o Dashboard</button>
        <div className="bg-white rounded-xl shadow-lg p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-1">{plan.name}</h1>
            <p className="text-gray-600 mb-6">{plan.description}</p>
            <div className="space-y-6">
                {plan.meals.map(meal => (
                    <div key={meal.id}>
                        <h3 className="font-bold text-lg text-gray-800 border-b pb-2 mb-2">{meal.name}</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            {meal.items.map(item => (
                                <li key={item.id}>
                                    {item.food}: <span className="font-semibold">{item.quantity}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </div>
);


// Tela de Planos (Workout e Diet)
const PlansScreen: React.FC<{onShowPlan: (type: 'workout' | 'diet') => void}> = ({onShowPlan}) => (
     <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Meus Planos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button onClick={() => onShowPlan('workout')} className="bg-white p-6 rounded-xl shadow-md text-left hover:shadow-lg hover:bg-indigo-50 transition-all transform hover:-translate-y-1">
                <div className="flex items-center gap-4">
                    <DumbbellIcon className="w-10 h-10 text-indigo-500" />
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">Plano de Treino</h2>
                        <p className="text-indigo-600 font-semibold">Ver detalhes</p>
                    </div>
                </div>
            </button>
             <button onClick={() => onShowPlan('diet')} className="bg-white p-6 rounded-xl shadow-md text-left hover:shadow-lg hover:bg-indigo-50 transition-all transform hover:-translate-y-1">
                 <div className="flex items-center gap-4">
                    <ClipboardListIcon className="w-10 h-10 text-indigo-500" />
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">Plano de Dieta</h2>
                        <p className="text-indigo-600 font-semibold">Ver detalhes</p>
                    </div>
                </div>
            </button>
        </div>
    </div>
);

// Tela de Perfil do Cliente
const ClientProfileScreen: React.FC = () => {
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);
    const [notificationTime, setNotificationTime] = useState("08:00");
    const [permissionStatus, setPermissionStatus] = useState(Notification.permission);
    let timeoutId: number | undefined;

    useEffect(() => {
        return () => {
             if (timeoutId) clearTimeout(timeoutId);
        };
    }, [timeoutId]);

    const handleToggleNotifications = async () => {
        if (!notificationsEnabled) {
            const permission = await Notification.requestPermission();
            setPermissionStatus(permission);
            if (permission === 'granted') {
                setNotificationsEnabled(true);
                 scheduleNotification();
            } else {
                 alert("Permissão para notificações negada. Você pode habilitá-la nas configurações do seu navegador.");
            }
        } else {
            setNotificationsEnabled(false);
            // Logic to cancel notifications would go here
            alert("Notificações desativadas.");
        }
    };
    
    const scheduleNotification = () => {
        // Clear any existing timeout
        if (timeoutId) clearTimeout(timeoutId);

        const [hours, minutes] = notificationTime.split(':').map(Number);
        const now = new Date();
        const notificationDate = new Date();
        notificationDate.setHours(hours, minutes, 0, 0);

        // If the time is in the past for today, schedule for tomorrow
        if (notificationDate < now) {
            notificationDate.setDate(notificationDate.getDate() + 1);
        }

        const delay = notificationDate.getTime() - now.getTime();

        timeoutId = window.setTimeout(() => {
            new Notification("FitConnect: Lembrete Diário", {
                body: "Não se esqueça de checar seu treino e dieta de hoje! 💪",
                icon: "/favicon.ico"
            });
            // Reschedule for the next day
            scheduleNotification(); 
        }, delay);
    };

    const handleSaveSettings = () => {
        if (notificationsEnabled) {
            scheduleNotification();
            alert(`Lembretes diários ativados para as ${notificationTime}.`);
        } else {
             if (timeoutId) clearTimeout(timeoutId);
             alert("Configurações salvas. As notificações estão desativadas.");
        }
    };
    
    return (
         <div className="w-full max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Meu Perfil</h1>
             <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-4 mb-8">
                     <img src="https://randomuser.me/api/portraits/men/5.jpg" alt="Client" className="w-20 h-20 rounded-full object-cover" />
                     <div>
                         <h2 className="text-2xl font-bold text-gray-800">João da Silva</h2>
                         <p className="text-gray-600">Objetivo: Hipertrofia</p>
                     </div>
                 </div>
                 
                 <div className="border-t pt-6">
                    <div className="flex items-center gap-3 mb-4">
                        <BellIcon className="w-6 h-6 text-gray-500" />
                        <h3 className="text-xl font-semibold text-gray-700">Notificações</h3>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                            <label htmlFor="notifications-toggle" className="text-gray-800 font-medium">
                                Ativar lembretes diários
                            </label>
                            <button
                                id="notifications-toggle"
                                onClick={handleToggleNotifications}
                                className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${notificationsEnabled ? 'bg-teal-500' : 'bg-gray-300'}`}
                            >
                                <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${notificationsEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
                            </button>
                        </div>
                        {notificationsEnabled && (
                            <div className="mt-4">
                                <label htmlFor="notification-time" className="block text-sm font-medium text-gray-700 mb-1">
                                    Horário do lembrete
                                </label>
                                <input
                                    type="time"
                                    id="notification-time"
                                    value={notificationTime}
                                    onChange={(e) => setNotificationTime(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                                />
                            </div>
                        )}
                        <button 
                            onClick={handleSaveSettings}
                            className="mt-4 w-full bg-teal-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors disabled:bg-gray-400"
                            disabled={permissionStatus === 'denied'}
                        >
                            Salvar
                        </button>
                         {permissionStatus === 'denied' && (
                            <p className="text-xs text-red-600 mt-2 text-center">
                                As notificações estão bloqueadas. Por favor, habilite nas configurações do seu navegador.
                            </p>
                         )}
                    </div>
                 </div>
             </div>
         </div>
    );
};

// Componente de Item da Barra de Navegação Inferior
const BottomNavItem: React.FC<{ icon: ReactElement<React.SVGProps<SVGSVGElement>>; label: string; isActive: boolean; onClick: () => void; }> = ({ icon, label, isActive, onClick }) => {
    const activeClass = 'text-teal-500';
    const inactiveClass = 'text-gray-500';
    return (
        <button onClick={onClick} className="flex flex-col items-center justify-center w-full pt-2 pb-1">
            {React.cloneElement(icon, { className: `w-6 h-6 mb-1 transition-colors ${isActive ? activeClass : inactiveClass}` })}
            <span className={`text-xs font-medium transition-colors ${isActive ? activeClass : inactiveClass}`}>{label}</span>
        </button>
    );
};


// Componente principal da visão do cliente
const ClientView: React.FC = () => {
    type ClientView = 'discovery' | 'hired';
    type HiredView = 'dashboard' | 'plans' | 'profile' | 'exercises';
    
    const [view, setView] = useState<ClientView>('discovery');
    const [hiredView, setHiredView] = useState<HiredView>('dashboard');
    const [selectedProfessional, setSelectedProfessional] = useState<Professional | null>(null);
    const [planToShow, setPlanToShow] = useState<'workout' | 'diet' | null>(null);
    const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);

    const handleSelectProfessional = (prof: Professional) => setSelectedProfessional(prof);
    const handleBackToDiscovery = () => setSelectedProfessional(null);
    const handleHire = (prof: Professional) => {
        // In a real app, this would involve payment, etc.
        console.log(`Hired ${prof.name}`);
        setView('hired');
    };
    const handleShowPlan = (type: 'workout' | 'diet') => {
        setPlanToShow(type);
    };
    const handleBackToDashboard = () => setPlanToShow(null);
    
    const handleExerciseSelect = (exercise: Exercise) => {
        setSelectedExercise(exercise);
    };

    const handleCloseModal = () => {
        setSelectedExercise(null);
    };

    const renderDiscoveryContent = () => {
        if (selectedProfessional) {
            return <ProfessionalProfileScreen professional={selectedProfessional} onHire={handleHire} onBack={handleBackToDiscovery} />;
        }
        return <ProfessionalDiscoveryScreen onSelectProfessional={handleSelectProfessional} />;
    };
    
    const renderHiredContent = () => {
        if (planToShow === 'workout') {
            return <WorkoutPlanScreen plan={mockWorkoutPlan} onBack={handleBackToDashboard} />;
        }
        if (planToShow === 'diet') {
            return <DietPlanScreen plan={mockDietPlan} onBack={handleBackToDashboard} />;
        }

        switch (hiredView) {
            case 'dashboard':
                return <ClientDashboard onShowPlan={handleShowPlan} />;
            case 'plans':
                return <PlansScreen onShowPlan={handleShowPlan} />;
            case 'profile':
                return <ClientProfileScreen />;
            case 'exercises':
                return <ExerciseLibrary onExerciseSelect={handleExerciseSelect} />;
            default:
                return <ClientDashboard onShowPlan={handleShowPlan} />;
        }
    };

    return (
       <div className="w-full h-full flex flex-col">
            {view === 'discovery' ? renderDiscoveryContent() : (
                 <div className="relative w-full flex-grow">
                    <div className="pb-20">
                      {renderHiredContent()}
                    </div>
                    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-20">
                       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                           <div className="flex justify-around h-16">
                               <BottomNavItem label="Dashboard" icon={<HomeIcon />} isActive={hiredView === 'dashboard'} onClick={() => setHiredView('dashboard')} />
                               <BottomNavItem label="Planos" icon={<DumbbellIcon />} isActive={hiredView === 'plans'} onClick={() => setHiredView('plans')} />
                               <BottomNavItem label="Exercícios" icon={<BookOpenIcon />} isActive={hiredView === 'exercises'} onClick={() => setHiredView('exercises')} />
                               <BottomNavItem label="Perfil" icon={<UserCircleIcon />} isActive={hiredView === 'profile'} onClick={() => setHiredView('profile')} />
                           </div>
                       </div>
                    </div>
                </div>
            )}
            
            {selectedExercise && (
                <ExerciseDetailModal exercise={selectedExercise} onClose={handleCloseModal} />
            )}
       </div>
    );
};

export default ClientView;