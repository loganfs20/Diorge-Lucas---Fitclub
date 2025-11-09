import React from 'react';
import { UserRole } from '../../types';
import { DumbbellIcon } from '../../constants';

interface HeaderProps {
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
}

const Header: React.FC<HeaderProps> = ({ userRole, setUserRole }) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <DumbbellIcon className="w-8 h-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-800">FitConnect</span>
          </div>
          {userRole && (
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-500 capitalize">
                Modo: {userRole === 'professional' ? 'Profissional' : 'Cliente'}
              </span>
              <button
                onClick={() => setUserRole(null)}
                className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Trocar Perfil
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;