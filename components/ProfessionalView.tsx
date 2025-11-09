import React, { useState } from 'react';
import { UserGroupIcon, ClipboardListIcon, ChatAlt2Icon, DumbbellIcon, XMarkIcon, PlusCircleIcon } from '../../constants';
import { Exercise, ExerciseDetail } from '../../types';
import { ExerciseLibrary, ExerciseDetailModal } from './common/ExerciseLibrary';


const StatCard: React.FC<{ title: string; value: string; icon: React.ReactNode }> = ({ title, value, icon }) => (
    <div className="bg-white p-6 rounded-xl shadow-md flex items-center space-x-4">
        <div className="bg-indigo-100 p-3 rounded-full">
            {icon}
        </div>
        <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
    </div>
);

const ActionCard: React.FC<{ title: string; icon: React.ReactNode, onClick: () => void }> = ({ title, icon, onClick }) => (
    <button onClick={onClick} className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center text-center space-y-3 hover:shadow-lg hover:bg-indigo-50 transition-all transform hover:-translate-y-1">
        <div className="bg-indigo-100 p-4 rounded-full">
            {icon}
        </div>
        <p className="font-semibold text-gray-700">{title}</p>
    </button>
);

const Dashboard: React.FC<{ setView: (view: any) => void }> = ({ setView }) => (
     <>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Olá, Profissional!</h1>
        <p className="text-lg text-gray-600 mb-8">O que você gostaria de fazer agora?</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <StatCard title="Clientes Ativos" value="12" icon={<UserGroupIcon className="w-6 h-6 text-indigo-600" />} />
            <StatCard title="Novas Solicitações" value="3" icon={<ChatAlt2Icon className="w-6 h-6 text-indigo-600" />} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ActionCard title="Ver Meus Alunos" icon={<UserGroupIcon className="w-8 h-8 text-indigo-600" />} onClick={() => setView('students')} />
            <ActionCard title="Montar um Novo Treino" icon={<DumbbellIcon className="w-8 h-8 text-indigo-600" />} onClick={() => setView('newWorkout')} />
            <ActionCard title="Criar Plano Alimentar" icon={<ClipboardListIcon className="w-8 h-8 text-indigo-600" />} onClick={() => setView('newDiet')} />
            <ActionCard title="Responder Mensagens" icon={<ChatAlt2Icon className="w-8 h-8 text-indigo-600" />} onClick={() => setView('messages')} />
        </div>
    </>
);

const PlaceholderScreen: React.FC<{ title: string, onBack: () => void }> = ({ title, onBack }) => (
    <div>
        <button onClick={onBack} className="text-sm font-semibold text-indigo-600 hover:text-indigo-500 mb-4">&larr; Voltar para o Painel</button>
        <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
        <p className="text-gray-600 mt-4">Esta área está em desenvolvimento.</p>
    </div>
);

const WorkoutBuilderScreen: React.FC<{
    onBack: () => void;
    onOpenExerciseModal: (exercise: Exercise) => void;
    plan: ExerciseDetail[];
    setPlan: React.Dispatch<React.SetStateAction<ExerciseDetail[]>>;
}> = ({ onBack, onOpenExerciseModal, plan, setPlan }) => {

    const handleUpdateExerciseDetail = (index: number, field: keyof Omit<ExerciseDetail, 'id'|'name'|'videoUrl'>, value: string) => {
        const updatedPlan = [...plan];
        updatedPlan[index][field] = value;
        setPlan(updatedPlan);
    };

    const handleRemoveExercise = (index: number) => {
        setPlan(plan.filter((_, i) => i !== index));
    };

    return (
        <div className="w-full max-w-5xl mx-auto">
            <button onClick={onBack} className="text-sm font-semibold text-indigo-600 hover:text-indigo-500 mb-4">&larr; Voltar para o Painel</button>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Montar Novo Treino</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Coluna do Plano */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Plano de Treino Atual</h2>
                    <div className="mb-4">
                        <label htmlFor="planName" className="block text-sm font-medium text-gray-700">Nome do Treino</label>
                        <input type="text" id="planName" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Ex: Treino A - Peito e Tríceps" />
                    </div>
                    
                    <div className="space-y-4">
                        {plan.length > 0 ? plan.map((ex, index) => (
                            <div key={`${ex.id}-${index}`} className="bg-gray-50 p-4 rounded-lg border">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-md text-gray-800">{ex.name}</h3>
                                    <button onClick={() => handleRemoveExercise(index)} className="text-gray-400 hover:text-red-500">
                                        <XMarkIcon className="w-5 h-5" />
                                    </button>
                                </div>
                                <div className="grid grid-cols-3 gap-2 mt-2 text-sm">
                                    <div>
                                        <label className="block text-xs text-gray-500">Séries</label>
                                        <input value={ex.series} onChange={e => handleUpdateExerciseDetail(index, 'series', e.target.value)} className="w-full border-gray-300 rounded-md p-1"/>
                                    </div>
                                    <div>
                                        <label className="block text-xs text-gray-500">Reps</label>
                                        <input value={ex.repetitions} onChange={e => handleUpdateExerciseDetail(index, 'repetitions', e.target.value)} className="w-full border-gray-300 rounded-md p-1"/>
                                    </div>
                                    <div>
                                        <label className="block text-xs text-gray-500">Descanso</label>
                                        <input value={ex.rest} onChange={e => handleUpdateExerciseDetail(index, 'rest', e.target.value)} className="w-full border-gray-300 rounded-md p-1"/>
                                    </div>
                                </div>
                                <div className="mt-2">
                                     <label className="block text-xs text-gray-500">Observações</label>
                                     <input value={ex.observations} onChange={e => handleUpdateExerciseDetail(index, 'observations', e.target.value)} className="w-full border-gray-300 rounded-md p-1" placeholder="Ex: Cadência controlada"/>
                                </div>
                            </div>
                        )) : (
                            <div className="text-center py-8 px-4 border-2 border-dashed rounded-lg">
                                <DumbbellIcon className="mx-auto h-12 w-12 text-gray-400" />
                                <h3 className="mt-2 text-sm font-medium text-gray-900">Nenhum exercício adicionado</h3>
                                <p className="mt-1 text-sm text-gray-500">Use a biblioteca ao lado para começar.</p>
                            </div>
                        )}
                    </div>
                     <button className="mt-6 w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors disabled:bg-gray-400" disabled={plan.length === 0}>
                        Salvar Treino
                    </button>
                </div>

                {/* Coluna da Biblioteca */}
                <div className="h-[75vh] flex flex-col">
                     <ExerciseLibrary onExerciseSelect={onOpenExerciseModal} />
                </div>
            </div>
        </div>
    );
};


const ProfessionalView: React.FC = () => {
    type View = 'dashboard' | 'students' | 'newWorkout' | 'newDiet' | 'messages';
    const [view, setView] = useState<View>('dashboard');
    const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
    const [workoutPlan, setWorkoutPlan] = useState<ExerciseDetail[]>([]);

    const handleOpenExerciseModal = (exercise: Exercise) => {
        setSelectedExercise(exercise);
    };

    const handleAddExerciseToWorkout = (exercise: Exercise) => {
        const newExerciseDetail: ExerciseDetail = {
            id: exercise.id,
            name: exercise.name,
            series: '4',
            repetitions: '10',
            rest: '60s',
            observations: '',
        };
        setWorkoutPlan(prevPlan => [...prevPlan, newExerciseDetail]);
    };

    const renderContent = () => {
        switch (view) {
            case 'students':
                return <PlaceholderScreen title="Meus Alunos" onBack={() => setView('dashboard')} />;
            case 'newWorkout':
                return <WorkoutBuilderScreen onBack={() => setView('dashboard')} onOpenExerciseModal={handleOpenExerciseModal} plan={workoutPlan} setPlan={setWorkoutPlan} />;
            case 'newDiet':
                return <PlaceholderScreen title="Criar Plano Alimentar" onBack={() => setView('dashboard')} />;
            case 'messages':
                return <PlaceholderScreen title="Mensagens" onBack={() => setView('dashboard')} />;
            case 'dashboard':
            default:
                return <Dashboard setView={setView} />;
        }
    };

    return (
        <div className="w-full max-w-7xl mx-auto">
            {renderContent()}

            {selectedExercise && (
                <ExerciseDetailModal
                    exercise={selectedExercise}
                    onClose={() => setSelectedExercise(null)}
                    onAddToWorkout={view === 'newWorkout' ? handleAddExerciseToWorkout : undefined}
                />
            )}
        </div>
    );
};

export default ProfessionalView;