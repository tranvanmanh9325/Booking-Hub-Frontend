import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import PartnerLayout from '../../components/layouts/PartnerLayout';
import { useTranslations } from 'next-intl';
import { useContent, useAddContent, useUpdateContent, useDeleteContent } from '../../hooks/use-content';
import { Content } from '../../types/content';
import { ContentFormModal, DeleteContentModal } from '../../components/partner/ContentModals';
import { formatDateForInput } from '../../utils/format';

export default function ContentPage() {
    const t = useTranslations('Content');
    const { data: items = [], isLoading } = useContent();
    const addMutation = useAddContent();
    const updateMutation = useUpdateContent();
    const deleteMutation = useDeleteContent();

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<Content | null>(null);

    // Form state
    const [formData, setFormData] = useState<Omit<Content, 'id'>>({
        name: '',
        type: 'Product',
        price: '0',
        description: '',
        thumbnail: '',
        images: '[]',
        status: 'active',
        duration: '',
        releaseDate: '',
        location: ''
    });

    const uploadFile = async (file: File) => {
        const formData = new FormData();
        formData.append('file', file);
        const response = await fetch('http://localhost:8080/api/v1/files/upload', {
            method: 'POST',
            body: formData,
        });
        if (!response.ok) {
            throw new Error('Upload failed');
        }
        return await response.text();
    };

    // Add Handler
    const handleSaveAdd = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await addMutation.mutateAsync({
                ...formData,
                releaseDate: formatDateForInput(formData.releaseDate)
            });
            setIsAddModalOpen(false);
            setFormData({
                name: '',
                type: 'Product',
                price: '0',
                description: '',
                thumbnail: '',
                images: '[]',
                status: 'active',
                duration: '',
                releaseDate: '',
                location: ''
            }); // Reset form
        } catch (error) {
            console.error("Failed to add content", error);
            // Optionally add error handling UI here
        }
    };

    // Edit Handler
    const handleEditClick = (item: Content) => {
        setSelectedItem(item);
        setFormData({
            name: item.name,
            type: item.type,
            price: item.price,
            description: item.description || '',
            thumbnail: item.thumbnail || '',
            images: item.images || '[]',
            status: item.status,
            duration: item.duration || '',
            releaseDate: formatDateForInput(item.releaseDate),
            location: item.location || ''
        });
        setIsEditModalOpen(true);
    };

    const handleSaveEdit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedItem) return;

        try {
            await updateMutation.mutateAsync({
                id: selectedItem.id,
                data: {
                    ...formData,
                    releaseDate: formatDateForInput(formData.releaseDate)
                }
            });
            setIsEditModalOpen(false);
            setSelectedItem(null);
        } catch (error) {
            console.error("Failed to update content", error);
        }
    };



    // Delete Handler
    const handleDeleteClick = (item: Content) => {
        setSelectedItem(item);
        setIsDeleteModalOpen(true);
    };

    const handleConfirmDelete = async () => {
        if (!selectedItem) return;
        try {
            await deleteMutation.mutateAsync(selectedItem.id);
            setIsDeleteModalOpen(false);
            setSelectedItem(null);
        } catch (error) {
            console.error("Failed to delete content", error);
        }
    };

    return (
        <PartnerLayout>
            <Head>
                <title>{t('title')} | Booking Hub</title>
            </Head>

            <div className="page-header">
                <div>
                    <h1 className="page-title">{t('title')}</h1>
                    <p className="page-subtitle">{t('subtitle')}</p>
                </div>
                <button className="btn-primary" onClick={() => {
                    setFormData({ name: '', type: 'Product', price: '0', status: 'active', duration: '', releaseDate: '', location: '' });
                    setIsAddModalOpen(true);
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="btn-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    {t('addNew')}
                </button>
            </div>

            <div className="content-container">
                <div className="search-bar">
                    <svg xmlns="http://www.w3.org/2000/svg" className="search-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                    <input type="text" placeholder={t('searchPlaceholder')} className="search-input" />
                </div>

                {isLoading ? (
                    <div className="loading-state">Loading...</div>
                ) : (
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>{t('table.id')}</th>
                                <th>{t('table.name')}</th>
                                <th>{t('table.type')}</th>

                                <th>{t('table.status')}</th>
                                <th>{t('table.actions')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item) => (
                                <tr key={item.id}>
                                    <td>#{item.id}</td>
                                    <td>
                                        <span className="font-medium">{item.name}</span>
                                    </td>
                                    <td>{item.type}</td>

                                    <td>
                                        <span className={`status-badge status-${item.status}`}>
                                            {item.status === 'active' ? t('table.active') : t('table.inactive')}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="action-buttons">
                                            <button className="btn-icon-only text-blue" onClick={() => handleEditClick(item)}>
                                                {t('table.edit')}
                                            </button>
                                            <button className="btn-icon-only text-red" onClick={() => handleDeleteClick(item)}>
                                                {t('table.delete')}
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {/* Add Modal */}
            <ContentFormModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                onSubmit={handleSaveAdd}
                formData={formData}
                setFormData={setFormData}
                uploadFile={uploadFile}
                isPending={addMutation.isPending}
                t={t}
                mode="add"
            />

            {/* Edit Modal */}
            <ContentFormModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                onSubmit={handleSaveEdit}
                formData={formData}
                setFormData={setFormData}
                uploadFile={uploadFile}
                isPending={updateMutation.isPending}
                t={t}
                mode="edit"
                contentId={selectedItem?.id ? Number(selectedItem.id) : undefined}
            />

            {/* Delete Modal */}
            <DeleteContentModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={handleConfirmDelete}
                itemName={selectedItem?.name || ''}
                isPending={deleteMutation.isPending}
                t={t}
            />

            <style jsx>{`
                .page-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 2rem;
                }
                .page-title {
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: #111827;
                }
                .page-subtitle {
                    color: #6B7280;
                    margin-top: 0.25rem;
                }
                .btn-primary {
                    background-color: #3B82F6;
                    color: white;
                    padding: 0.5rem 1rem;
                    border-radius: 0.375rem;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    transition: background-color 0.2s;
                }
                .btn-primary:hover {
                    background-color: #2563EB;
                }
                .btn-icon {
                    width: 1.25rem;
                    height: 1.25rem;
                    margin-right: 0.5rem;
                }
                .content-container {
                    background: white;
                    border-radius: 0.5rem;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                    padding: 1.5rem;
                }
                .search-bar {
                    position: relative;
                    margin-bottom: 1.5rem;
                    max-width: 24rem;
                }
                .search-icon {
                    position: absolute;
                    left: 0.75rem;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 1.25rem;
                    height: 1.25rem;
                    color: #9CA3AF;
                }
                .search-input {
                    width: 100%;
                    padding: 0.5rem 0.75rem 0.5rem 2.5rem;
                    border: 1px solid #D1D5DB;
                    border-radius: 0.375rem;
                    outline: none;
                }
                .search-input:focus {
                    border-color: #3B82F6;
                    ring: 2px solid #BFDBFE;
                }
                .data-table {
                    width: 100%;
                    border-collapse: collapse;
                }
                .data-table th {
                    text-align: left;
                    padding: 0.75rem 1rem;
                    border-bottom: 1px solid #E5E7EB;
                    color: #6B7280;
                    font-weight: 500;
                    font-size: 0.875rem;
                }
                .data-table td {
                    padding: 0.75rem 1rem;
                    border-bottom: 1px solid #F3F4F6;
                    color: #374151;
                    font-size: 0.875rem;
                }
                .font-medium {
                    font-weight: 500;
                    color: #111827;
                }
                .status-badge {
                    padding: 0.25rem 0.5rem;
                    border-radius: 9999px;
                    font-size: 0.75rem;
                    font-weight: 500;
                }
                .status-active {
                    background-color: #DEF7EC;
                    color: #03543F;
                }
                .status-inactive {
                    background-color: #F3F4F6;
                    color: #374151;
                }
                .action-buttons {
                    display: flex;
                    gap: 0.5rem;
                }
                .btn-icon-only {
                    padding: 0.25rem;
                    border-radius: 0.25rem;
                    transition: background-color 0.2s;
                }
                .btn-icon-only:hover {
                    background-color: #F3F4F6;
                }
                .text-blue { color: #2563EB; }
                .text-red { color: #DC2626; }
            `}</style>
        </PartnerLayout>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            messages: (await import(`../../locales/${locale}.json`)).default
        }
    };
};