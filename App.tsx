import React, { useState } from 'react';
import Header from './components/common/Header';
import ProfessionalView from './components/ProfessionalView';
import ClientView from './components/ClientView';
import { UserRole } from './types';
import { AcademicCapIcon, UserCircleIcon } from './constants';


// FIX: The type for the `icon` prop was too generic, causing a type error with `React.cloneElement`.
// Specifying `React.ReactElement<React.SVGProps<SVGSVGElement>>` ensures that TypeScript
// can correctly infer that props like `className` are valid.
const RoleSelectionCard: React.FC<{ title: string; icon: React.ReactElement<React.SVGProps<SVGSVGElement>>; onClick: () => void; userType: 'professional' | 'client'}> = ({ title, icon, onClick, userType }) => {
  const colorClasses = userType === 'professional' 
    ? "text-indigo-600 group-hover:bg-indigo-600"
    : "text-teal-600 group-hover:bg-teal-600";
    
  return (
    <button 
      onClick={onClick}
      className="group bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center space-y-4 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
    >
      <div className={`p-5 border-2 ${userType === 'professional' ? 'border-indigo-200' : 'border-teal-200'} rounded-full transition-all duration-300`}>
        {React.cloneElement(icon, { className: `w-16 h-16 transition-colors duration-300 ${colorClasses}` })}
      </div>
      <p className={`text-2xl font-bold ${userType === 'professional' ? 'text-indigo-800' : 'text-teal-800'}`}>{title}</p>
    </button>
  )
};


const App: React.FC = () => {
  const [userRole, setUserRole] = useState<UserRole>(null);

  const renderContent = () => {
    if (userRole === 'professional') {
      return <ProfessionalView />;
    }
    if (userRole === 'client') {
      return <ClientView />;
    }
    return (
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Transforme Vidas, Onde Estiver.</h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">Escolha seu perfil para começar a usar o FitConnect.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <RoleSelectionCard 
            title="Sou um Profissional" 
            icon={<AcademicCapIcon />} 
            onClick={() => setUserRole('professional')} 
            userType="professional"
          />
          <RoleSelectionCard 
            title="Sou um Cliente" 
            icon={<UserCircleIcon />} 
            onClick={() => setUserRole('client')} 
            userType="client"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header userRole={userRole} setUserRole={setUserRole} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex items-center justify-center">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
