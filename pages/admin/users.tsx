import React, { useState } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import AdminLayout from '../../components/layouts/AdminLayout';
import { Card } from '../../components/ui/Card';
import { useTranslations } from 'next-intl';
import { useUsers } from '../../hooks/use-users';
import { LoadingSpinner } from '../../components/ui/LoadingSpinner';
import { useUpdateUser, useDeleteUser } from '../../hooks/use-users';
import { UserEditModal } from '../../components/admin/UserEditModal';
import { DeleteConfirmationModal } from '../../components/admin/DeleteConfirmationModal';
import { User } from '../../types/auth';

const AdminUsersPage = () => {
  const t = useTranslations('Users');
  const { data: users = [], isLoading, isError, error } = useUsers();
  const updateUserMutation = useUpdateUser();
  const deleteUserMutation = useDeleteUser();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<{ key: 'fullName' | 'role' | null; direction: 'asc' | 'desc' }>({ key: null, direction: 'asc' });
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [pendingDeleteId, setPendingDeleteId] = useState<number | string | null>(null);

  const handleSort = (key: 'fullName' | 'role') => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (userId: number | string) => {
    setPendingDeleteId(userId);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (pendingDeleteId) {
      deleteUserMutation.mutate(pendingDeleteId, {
        onSuccess: () => {
          setIsDeleteModalOpen(false);
          setPendingDeleteId(null);
        },
      });
    }
  };

  const handleSaveEdit = (data: Partial<User>) => {
    if (selectedUser) {
      updateUserMutation.mutate(
        { id: selectedUser.id, data },
        {
          onSuccess: () => {
            setIsEditModalOpen(false);
            setSelectedUser(null);
          },
        }
      );
    }
  };

  const filteredUsers = users.filter(user =>
    (user.fullName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (user.email || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (user.phone || '').includes(searchTerm)
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const { key, direction } = sortConfig;

    if (key === 'fullName') {
      // Sort by first name (last word)
      const nameA = (a.fullName || '').trim().split(' ').pop() || '';
      const nameB = (b.fullName || '').trim().split(' ').pop() || '';
      return direction === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    }

    if (key === 'role') {
      // Sort by role priority: ADMIN > PARTNER > USER
      const rolePriority: { [key: string]: number } = { 'ADMIN': 3, 'PARTNER': 2, 'USER': 1 };
      const priorityA = rolePriority[(a.role || 'USER').toUpperCase()] || 0;
      const priorityB = rolePriority[(b.role || 'USER').toUpperCase()] || 0;
      return direction === 'asc' ? priorityA - priorityB : priorityB - priorityA;
    }

    return 0;
  });

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="loading-container">
          <LoadingSpinner size={48} />
        </div>
        <style jsx>{`
               .loading-container {
                   display: flex;
                   align-items: center;
                   justify-content: center;
                   height: 100%;
                   min-height: 400px;
               }
             `}</style>
      </AdminLayout>
    );
  }

  if (isError) {
    return (
      <AdminLayout>
        <div className="error-container">
          <h2>{t('title')}</h2>
          <p>{(error as Error)?.message || 'Error loading users.'}</p>
        </div>
        <style jsx>{`
                 .error-container {
                     padding: 32px;
                     text-align: center;
                     color: #EF4444;
                 }
              `}</style>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <Head>
        <title>{t('title')} - Booking Hub</title>
      </Head>

      <div className="users-page-container">
        <div className="page-header">
          <div>
            <h1 className="page-title">{t('title')}</h1>
            <p className="page-subtitle">{t('subtitle')}</p>
          </div>

          <div className="actions">
            <input
              type="text"
              placeholder={t('searchPlaceholder')}
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <Card className="users-table-card">
          <div className="table-responsive">
            <table className="users-table">
              <thead>
                <tr>
                  <th onClick={() => handleSort('fullName')} style={{ cursor: 'pointer' }}>
                    {t('table.user')} {sortConfig.key === 'fullName' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                  </th>
                  <th onClick={() => handleSort('role')} style={{ cursor: 'pointer' }}>
                    {t('table.role')} {sortConfig.key === 'role' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                  </th>
                  <th>{t('table.phone')}</th>
                  <th>{t('table.actions')}</th>
                </tr>
              </thead>
              <tbody>
                {sortedUsers.length === 0 ? (
                  <tr>
                    <td colSpan={4} style={{ textAlign: 'center', padding: '32px' }}>
                      {t('table.empty')}
                    </td>
                  </tr>
                ) : (
                  sortedUsers.map((user) => (
                    <tr key={user.id}>
                      <td>
                        <div className="user-cell">
                          <div className="user-avatar-placeholder" style={user.avatarUrl ? {
                            backgroundImage: `url(${user.avatarUrl})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            color: 'transparent'
                          } : {}}>
                            {(!user.avatarUrl) && (user.fullName?.charAt(0) || user.email?.charAt(0))}
                          </div>
                          <div className="user-info">
                            <span className="user-name">{user.fullName || 'No Name'}</span>
                            <span className="user-email">{user.email}</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className={`role-badge ${(user.role || 'user').toLowerCase()}`}>{user.role || 'User'}</span>
                      </td>
                      <td>
                        <span>{user.phone || '-'}</span>
                      </td>
                      <td>
                        <button className="action-button edit" onClick={() => handleEdit(user)}>{t('table.edit')}</button>
                        <button className="action-button delete" onClick={() => handleDeleteClick(user.id)}>{t('table.delete')}</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      <style jsx>{`
        .users-page-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 16px;
          flex-wrap: wrap;
        }

        .page-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1E293B;
          margin: 0 0 4px 0;
        }

        .page-subtitle {
          color: #64748B;
          margin: 0;
        }

        .search-input {
          padding: 10px 16px;
          border: 1px solid #E2E8F0;
          border-radius: 8px;
          width: 300px;
          outline: none;
          transition: border-color 0.2s;
        }

        .search-input:focus {
          border-color: #3B82F6;
        }

        .users-table {
          width: 100%;
          border-collapse: collapse;
        }

        .users-table th {
          text-align: left;
          padding: 16px 24px;
          color: #64748B;
          font-weight: 600;
          font-size: 0.875rem;
          border-bottom: 1px solid #E2E8F0;
        }

        .users-table td {
          padding: 16px 24px;
          border-bottom: 1px solid #F1F5F9;
          vertical-align: middle;
        }

        .users-table tr:last-child td {
          border-bottom: none;
        }

        .user-cell {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .user-avatar-placeholder {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #EFF6FF;
          color: #3B82F6;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
        }

        .user-info {
           display: flex;
           flex-direction: column;
        }

        .user-name {
          font-weight: 500;
          color: #1E293B;
        }

        .user-email {
          font-size: 0.875rem;
          color: #64748B;
        }

        .role-badge {
          padding: 4px 10px;
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .role-badge.admin { background-color: #FEF3C7; color: #D97706; }
        .role-badge.partner { background-color: #E0F2FE; color: #0284C7; }
        .role-badge.user { background-color: #F1F5F9; color: #475569; }

        .status-badge {
           padding: 4px 10px;
           border-radius: 6px;
           font-size: 0.75rem;
           font-weight: 500;
           display: inline-block;
        }

        .status-badge.active { background-color: #DCFCE7; color: #166534; }
        .status-badge.inactive { background-color: #F1F5F9; color: #475569; }
        .status-badge.banned { background-color: #FEE2E2; color: #991B1B; }

        .action-button {
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          border: none;
          margin-right: 8px;
          transition: background 0.2s;
        }

        .action-button.edit {
           background-color: #EFF6FF;
           color: #2563EB;
        }

        .action-button.edit:hover {
           background-color: #DBEAFE;
        }

        .action-button.delete {
           background-color: #FEF2F2;
           color: #DC2626;
        }

        .action-button.delete:hover {
           background-color: #FEE2E2;
        }
      `}</style>

      <UserEditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        user={selectedUser}
        onSave={handleSaveEdit}

        isLoading={updateUserMutation.isPending}
      />

      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        isLoading={deleteUserMutation.isPending}
      />
    </AdminLayout >
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../../locales/${locale}.json`)).default
    }
  };
};

export default AdminUsersPage;