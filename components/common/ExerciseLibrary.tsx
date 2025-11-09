import React, { useState } from 'react';
import { MOCK_EXERCISES, MUSCLE_GROUPS, XMarkIcon, PlusCircleIcon, SearchIcon } from '../../constants';
import { Exercise } from '../../types';

interface ExerciseDetailModalProps {
  exercise: Exercise;
  onClose: () => void;
  onAddToWorkout?: (exercise: Exercise) => void;
}

// MODAL DE DETALHES DO EXERCÍCIO
export const ExerciseDetailModal: React.FC<ExerciseDetailModalProps> = ({ exercise, onClose, onAddToWorkout }) => {
    const [activeTab, setActiveTab] = useState<'instructions' | 'errors'>('instructions');

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
            onClick={onClose}
        >
            <div 
                className="bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-4 border-b flex justify-between items-center flex-shrink-0">
                    <h2 className="text-xl font-bold text-gray-800">{exercise.name}</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                </div>
                
                <div className="overflow-y-auto">
                    <img 
                        src={exercise.mediaUrl} 
                        alt={`Animação de ${exercise.name}`} 
                        className="w-full h-auto object-cover bg-gray-100" 
                        referrerPolicy="no-referrer"
                    />
                    
                    <div className="p-6">
                        <div className="mb-4">
                            <h3 className="font-semibold text-gray-700 mb-2">Músculos Ativados</h3>
                            <div className="flex flex-wrap gap-2 text-sm">
                                <span className="font-bold">Primários:</span>
                                {exercise.primaryMuscles.map(m => <span key={m} className="bg-teal-100 text-teal-800 px-2 py-0.5 rounded-full">{m}</span>)}
                            </div>
                             <div className="flex flex-wrap gap-2 text-sm mt-2">
                                <span className="font-bold">Secundários:</span>
                                {exercise.secondaryMuscles.map(m => <span key={m} className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full">{m}</span>)}
                            </div>
                        </div>

                        <div className="border-b border-gray-200 mb-4">
                            <nav className="-mb-px flex space-x-6">
                                <button
                                    onClick={() => setActiveTab('instructions')}
                                    className={`whitespace-nowrap pb-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                                        activeTab === 'instructions' 
                                        ? 'border-teal-500 text-teal-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}
                                >
                                    Instruções
                                </button>
                                <button
                                    onClick={() => setActiveTab('errors')}
                                    className={`whitespace-nowrap pb-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                                        activeTab === 'errors' 
                                        ? 'border-red-500 text-red-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}
                                >
                                    Erros Comuns
                                </button>
                            </nav>
                        </div>
                        
                        <div>
                            {activeTab === 'instructions' && (
                                <ul className="space-y-2 text-gray-600 list-decimal list-inside">
                                    {exercise.instructions.map((step, i) => <li key={i}>{step}</li>)}
                                </ul>
                            )}
                            {activeTab === 'errors' && (
                                <ul className="space-y-2 text-gray-600 list-decimal list-inside">
                                     {exercise.commonErrors.map((error, i) => <li key={i} className="text-red-700">{error}</li>)}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
                 {onAddToWorkout && (
                    <div className="p-4 bg-gray-50 border-t flex-shrink-0">
                        <button
                        onClick={() => {
                            onAddToWorkout(exercise);
                            onClose();
                        }}
                        className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
                        >
                        <PlusCircleIcon className="w-6 h-6" />
                        Adicionar ao Treino
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};


// BIBLIOTECA DE EXERCÍCIOS
export const ExerciseLibrary: React.FC<{ onExerciseSelect: (exercise: Exercise) => void }> = ({ onExerciseSelect }) => {
    const [activeGroup, setActiveGroup] = useState(MUSCLE_GROUPS[0]);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredExercises = MOCK_EXERCISES.filter(ex =>
        ex.muscleGroup === activeGroup &&
        ex.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="w-full h-full flex flex-col">
            <h2 className="text-xl font-bold text-gray-800 mb-2 flex-shrink-0">Biblioteca de Exercícios</h2>
            <p className="text-gray-600 mb-4 flex-shrink-0">Explore os movimentos para montar o treino.</p>

            <div className="mb-4 relative flex-shrink-0">
                <input
                    type="text"
                    placeholder="Buscar exercício pelo nome..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                     <SearchIcon className="w-5 h-5 text-gray-400" />
                 </div>
            </div>

            <div className="mb-4 sticky top-0 bg-white py-2 z-10 flex-shrink-0">
                <div className="flex space-x-2 overflow-x-auto pb-2 -mx-4 px-4">
                    {MUSCLE_GROUPS.map(group => (
                        <button
                            key={group}
                            onClick={() => setActiveGroup(group)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                                activeGroup === group
                                    ? 'bg-indigo-500 text-white shadow'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 border'
                            }`}
                        >
                            {group}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 overflow-y-auto flex-grow">
                {filteredExercises.length > 0 ? (
                    filteredExercises.map(exercise => (
                        <button 
                            key={exercise.id} 
                            onClick={() => onExerciseSelect(exercise)}
                            className="bg-white rounded-lg shadow-md overflow-hidden group text-left"
                        >
                            <div className="aspect-square bg-gray-200 overflow-hidden">
                              <img 
                                src={exercise.mediaUrl} 
                                alt={exercise.name} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                                referrerPolicy="no-referrer"
                               />
                            </div>
                            <div className="p-3">
                                <h4 className="font-semibold text-sm text-gray-800 truncate group-hover:text-indigo-600">{exercise.name}</h4>
                            </div>
                        </button>
                    ))
                ) : (
                    <div className="col-span-2 md:col-span-3 text-center py-10">
                        <p className="text-gray-600 font-semibold">Nenhum exercício encontrado</p>
                        <p className="text-sm text-gray-500 mt-1">Tente ajustar a busca ou o grupo muscular.</p>
                    </div>
                )}
            </div>
        </div>
    );
};
